#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const AGENT_FIELDS = ['id', 'title', 'department', 'role', 'level', 'threadId', 'hostId', 'projectId'];

function fail(message) {
  throw new Error(message);
}

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function parseObject(value, label) {
  if (!isRecord(value)) fail(`${label} must be a JSON object`);
  return value;
}

function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isBlankPlaceholder(agent) {
  return AGENT_FIELDS.every((field) => agent[field] === '');
}

export function validateBureauConfig(rosterValue, mappingValue) {
  const roster = parseObject(rosterValue, 'roster');
  const mapping = parseObject(mappingValue, 'resource map');
  if (roster.version !== 1 || !Array.isArray(roster.agents)) {
    fail('roster must use schema version 1 and contain an agents array');
  }
  if (mapping.version !== 1 || !isRecord(mapping.levels)) {
    fail('resource map must use schema version 1 and contain a levels object');
  }

  const levelMap = new Map();
  for (const [level, entryValue] of Object.entries(mapping.levels)) {
    if (!hasText(level)) fail('resource level names must be non-empty strings');
    const entry = parseObject(entryValue, `resource map level ${level}`);
    if (typeof entry.model !== 'string' || typeof entry.thinking !== 'string') {
      fail(`resource map level ${level} must have string model and thinking fields`);
    }
    const modelSet = hasText(entry.model);
    const thinkingSet = hasText(entry.thinking);
    if (modelSet !== thinkingSet) fail(`resource map level ${level} must set both model and thinking, or leave both blank`);
    levelMap.set(level, { model: entry.model.trim(), thinking: entry.thinking.trim(), configured: modelSet });
  }

  const configured = [];
  let placeholders = 0;
  const ids = new Set();
  const threadIds = new Set();
  for (const [index, agentValue] of roster.agents.entries()) {
    const agent = parseObject(agentValue, `agents[${index}]`);
    for (const field of Object.keys(agent)) {
      if (!AGENT_FIELDS.includes(field)) fail(`agents[${index}] contains an unknown field: ${field}`);
    }
    for (const field of AGENT_FIELDS) {
      if (typeof agent[field] !== 'string') fail(`agents[${index}].${field} must be a string`);
    }
    if (isBlankPlaceholder(agent)) {
      placeholders += 1;
      continue;
    }
    for (const field of AGENT_FIELDS) {
      if (!hasText(agent[field])) fail(`agents[${index}].${field} is required for a configured agent`);
    }
    const id = agent.id.trim();
    const threadId = agent.threadId.trim();
    if (ids.has(id)) fail(`duplicate agent id: ${id}`);
    if (threadIds.has(threadId)) fail(`duplicate thread id: ${threadId}`);
    ids.add(id);
    threadIds.add(threadId);
    const level = agent.level.trim();
    const resource = levelMap.get(level);
    if (!resource) fail(`agent ${id} uses unmapped level: ${level}`);
    if (!resource.configured) fail(`agent ${id} uses unconfigured resource level: ${level}`);
    configured.push({ ...agent, id, threadId, level });
  }
  return { configured, placeholders, resourceLevels: levelMap.size, levelMap };
}

export function resolveBureauAgent(roster, mapping, agentId) {
  if (!hasText(agentId)) fail('agent id must be a non-empty string');
  const result = validateBureauConfig(roster, mapping);
  const matches = result.configured.filter((agent) => agent.id === agentId.trim());
  if (matches.length === 0) fail(`unknown agent id: ${agentId}`);
  if (matches.length !== 1) fail(`duplicate agent id: ${agentId}`);
  const agent = matches[0];
  const resource = result.levelMap.get(agent.level);
  return {
    target: { threadId: agent.threadId, hostId: agent.hostId.trim() },
    model: resource.model,
    thinking: resource.thinking,
  };
}

async function readJson(filePath, label) {
  let text;
  try {
    text = await readFile(filePath, 'utf8');
  } catch (error) {
    fail(`cannot read ${label}: ${error.message}`);
  }
  try {
    return JSON.parse(text);
  } catch (error) {
    fail(`${label} is invalid JSON: ${error.message}`);
  }
}

function parseArgs(argv) {
  const options = {};
  const names = new Map([
    ['--roster', 'rosterPath'],
    ['--mapping', 'mappingPath'],
    ['--agent-id', 'agentId'],
  ]);
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    if (flag === '--help' && argv.length === 1) return { help: true };
    const key = names.get(flag);
    if (!key) fail(`unknown option: ${flag}`);
    if (Object.hasOwn(options, key)) fail(`${flag} must not be repeated`);
    const value = argv[i + 1];
    if (!hasText(value) || value.startsWith('--')) fail(`${flag} requires a value`);
    options[key] = value;
    i += 1;
  }
  for (const key of ['rosterPath', 'mappingPath']) {
    if (!options[key]) fail(`--${key === 'rosterPath' ? 'roster' : 'mapping'} is required`);
    options[key] = path.resolve(options[key]);
  }
  return options;
}

function usage() {
  return [
    'Usage:',
    '  node scripts/validate_bureau_config.mjs --roster <file> --mapping <file>',
    '  node scripts/validate_bureau_config.mjs --roster <file> --mapping <file> --agent-id <id>',
  ].join('\n');
}

export async function main(argv = process.argv.slice(2)) {
  try {
    const args = parseArgs(argv);
    if (args.help) {
      process.stdout.write(`${usage()}\n`);
      return 0;
    }
    const [roster, mapping] = await Promise.all([
      readJson(args.rosterPath, 'roster'),
      readJson(args.mappingPath, 'resource map'),
    ]);
    if (args.agentId) {
      process.stdout.write(`${JSON.stringify(resolveBureauAgent(roster, mapping, args.agentId), null, 2)}\n`);
      return 0;
    }
    const result = validateBureauConfig(roster, mapping);
    process.stdout.write(`${JSON.stringify({
      valid: true,
      configuredAgents: result.configured.length,
      emptyPlaceholders: result.placeholders,
      resourceLevels: result.resourceLevels,
    }, null, 2)}\n`);
    return 0;
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    return 1;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().then((code) => {
    process.exitCode = code;
  });
}
