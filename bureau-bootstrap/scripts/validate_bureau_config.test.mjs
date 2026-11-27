import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveBureauAgent, validateBureauConfig } from './validate_bureau_config.mjs';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const templateRoster = JSON.parse(await readFile(path.join(ROOT, 'assets', 'agent-roster.template.json'), 'utf8'));
const templateMap = JSON.parse(await readFile(path.join(ROOT, 'assets', 'model-resource-map.template.json'), 'utf8'));

function sample({ level = 'LOW' } = {}) {
  return {
    roster: {
      version: 1,
      agents: [{
        id: 'example-agent', title: 'Example Agent', department: 'Example Department',
        role: 'Example role', level, threadId: 'example-thread', hostId: 'example-host',
        projectId: 'example-project',
      }],
    },
    mapping: {
      version: 1,
      levels: {
        LOW: { model: 'example-model', thinking: 'high' },
        MEDIUM: { model: 'example-model', thinking: 'medium' },
        HIGH: { model: 'example-model', thinking: 'medium' },
      },
    },
  };
}

test('generic templates validate while keeping the empty agent placeholder unresolved', () => {
  assert.deepEqual(validateBureauConfig(templateRoster, templateMap), {
    configured: [], placeholders: 1, resourceLevels: 3,
    levelMap: new Map([
      ['LOW', { model: '', thinking: '', configured: false }],
      ['MEDIUM', { model: '', thinking: '', configured: false }],
      ['HIGH', { model: '', thinking: '', configured: false }],
    ]),
  });
});

test('resolves a complete generic roster entry without embedding real user identifiers', () => {
  const { roster, mapping } = sample();
  assert.deepEqual(resolveBureauAgent(roster, mapping, 'example-agent'), {
    target: { threadId: 'example-thread', hostId: 'example-host' },
    model: 'example-model',
    thinking: 'high',
  });
});

test('rejects an agent whose abstract level has no resource mapping', () => {
  const { roster, mapping } = sample({ level: 'UNMAPPED' });
  assert.throws(() => validateBureauConfig(roster, mapping), /unmapped level/);
});

test('rejects partially filled placeholders and incomplete resource mappings', () => {
  const partialAgent = structuredClone(templateRoster);
  partialAgent.agents[0].department = 'Example Department';
  assert.throws(() => validateBureauConfig(partialAgent, templateMap), /required for a configured agent/);
  const { roster, mapping } = sample();
  mapping.levels.LOW.model = '';
  assert.throws(() => validateBureauConfig(roster, mapping), /set both model and thinking/);
});

test('rejects duplicate agent and conversation IDs', () => {
  const { roster, mapping } = sample();
  roster.agents.push({ ...roster.agents[0], id: 'other-agent' });
  assert.throws(() => validateBureauConfig(roster, mapping), /duplicate thread id/);
});

test('unknown agent IDs fail closed', () => {
  const { roster, mapping } = sample();
  assert.throws(() => resolveBureauAgent(roster, mapping, 'missing-agent'), /unknown agent id/);
});
