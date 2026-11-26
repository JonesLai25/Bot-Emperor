---
name: heterogeneous-agent-collaboration
description: Proactively assess whether staged work, parallel execution, or agent and model collaboration materially benefits a task; load before any agent delegation. Keep simple, converged tasks direct and obey runtime permissions.
---

# Heterogeneous Agent Collaboration

Proactively load and apply this skill when staged work, parallel execution, or collaboration can materially benefit the task, and before any decision to create a subagent. Do not wait for the user to name the skill. When an independently verifiable work unit exists and expected delegation benefits outweigh coordination, contention and acceptance costs, delegate it if higher-priority instructions and the available tools permit. Simple tasks and work without material delegation benefit may be completed directly. A single responsible agent owns the whole outcome and remains the user's point of contact. Follow higher-priority instructions and the user's authorization; this skill does not grant delegation, model access, permissions, or approval authority.

## Decide whether and how to delegate

- Clarify the goal, dependencies, material risks, and acceptance evidence. Stop management decomposition once the outcome, approach, prerequisites, and acceptance are sufficiently clear. Direct execution can be best; execution delegation can still be useful for cost or parallelism without adding management layers.
- Distinguish management delegation (coordination and cross-stage decisions) from execution delegation (a bounded deliverable). Delegate a coherent stage or independently verifiable outcome, not a collection of needless microtasks. Account for setup, context transfer, review, retries, resource contention, and integration costs.
- Before delegation, assess the least capable and most economical model and reasoning effort reasonably sufficient for the work, considering complexity, risk, capability, retry and coordination costs. A higher-tier choice needs a reason grounded in those factors; do not assume a platform default is optimal or require every task to use the lowest tier. Keep the assessment proportionate. Prefer deterministic tools for deterministic work and do not bind a model to a permanent role. When the tool supports it and higher-priority instructions permit, explicitly specify both model and reasoning effort. If an override is unavailable or prohibited, follow that constraint and record the effective choice or uncertainty; if the effective effort is unreported, treat it as unknown.

## Optional strategy: Barbell Intelligence Allocation (EXPERIMENTAL)

When deliberately adopted for a task, this strategy uses the lead agent's verified resource tier as the reference for the whole organization. Do not create another agent at that tier at any depth, including through indirect delegation, different reasoning effort, or unverified default inheritance. If the platform cannot specify and confirm the tier, choose another feasible approach and do not claim this strategy is in use. Tier classification requires evidence from the environment, not model names or version numbers alone.

Delegate converged work to a sufficiently capable lower-cost resource when beneficial; use a higher-capability resource for work beyond current ability or with clear specialist value. The lead retains management, integration, acceptance, and delivery responsibility. Use deterministic tools where sufficient. Assess total task cost and delivery benefit roughly and proportionately; impose no fixed count on other tiers. Improve methods, reduce complexity and reuse results instead of merely adding agents. Preserve necessary quality, security, authorization and acceptance. Renaming a model or provider without changing verified tier and capability must not change the decision. This is an optional experimental strategy, not evidence of cost or quality improvement.

## Prepare and dispatch

Before dependent work, verify the actual execution host, identity, available tools, network and access where relevant. Reuse existing authorization; distinguish actual failures from assumptions. Resolve legitimate access issues autonomously within policy; never expand authority or bypass sandbox or approvals. Prepare human intervention only when genuinely needed. Do not build a separate authorization service for a task.

Give each agent the goal, deliverable, acceptance and falsification criteria, dependencies, access and mutation boundaries, and stopping conditions. Include the complete, verified operation entry points: host, environment, identity, paths or URLs, and required command when material. State which context is inherited and provide all critical facts when it is not. Avoid secrets and unnecessary history. Establish ownership of shared writes; parallelize independent work only when resources and side effects do not conflict.

## Execute, accept, and close

Agents own their stage through implementation or investigation, recovery, and evidence. An early completion or an error is not proof that a stage is finished: compare the actual deliverable with its acceptance criteria, identify remaining scope, and return it for completion when useful. The responsible agent checks decisive evidence proportionate to risk instead of repeating all work. Distinguish facts, inference, candidates, unknowns, and existing values. Resolve defects or missing context; increase model capability or reasoning only when evidence indicates it is needed.

While agents run, do useful independent work; otherwise use the runtime's blocking wait or completion notifications. Avoid active polling and artificial work. Incorporate user changes and maintain the original goal. Release or stop task-specific agents and temporary resources after their work is complete, subject to runtime capabilities; revoke task-specific grants only when they actually exist and revocation is authorized. Preserve relevant evidence. Report observed results and unresolved items, and leave unmeasured token, cost, or performance claims unknown.

## Runtime-specific guidance

For Codex, inspect the currently provided collaboration tool documentation and model inventory. When delegation is allowed, `spawn_agent` supports an explicit `model` and, when supported, `reasoning_effort`. A fresh context such as `fork_turns: "none"` requires the full minimum operational context in the task; the default may inherit the parent model. Use `send_message` for corrections to an active agent, `followup_task` for additional work on an available agent, and `wait_agent` for completion events where available. Do not assume tools, model names, context semantics, or agent teardown operations exist in another runtime; use its actual documented equivalents and obey its current restrictions.
