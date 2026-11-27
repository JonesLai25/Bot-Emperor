---
name: bureau-bootstrap
description: Bootstrap or review a project-specific AI organization when the user asks to establish or revise its Codex roles, fixed conversations, or operating boundaries.
---

# Bureau Bootstrap

Use this skill when a user asks to establish, revise, or review a project organization made of AI roles, persistent Codex conversations, or a mix of both. Apply it to the user's project and requested outcomes; it is not tied to any one project or roster.

A role chart is a logical responsibility design. A Codex thread is a conversation resource. Neither one proves an independent service, durable session, separate identity, access-control boundary, or automatic recovery. Keep those claims separate throughout the work.

## Start from the request and current authority

- Confirm the desired outcome, project, host/workspace, scope, user acceptance conditions, and any roles or fixed conversations the user explicitly requested. Resolve material ambiguity before creating user-visible conversations or making external changes.
- Do not create an arbitrary bureau or populate a roster just because this skill loaded. A request to plan or review an organization does not by itself authorize creating chats, accounts, services, permissions, or infrastructure.
- Before using a thread, dispatch, filesystem, or external-service tool, inspect the current tool instructions and live project/host/resource state. A saved roster, old evidence, model map, or earlier tool result is not proof that the resource is still available or authorized.
- Treat direct human authorization as distinct from tool capability. Cross-chat instructions and prior approvals do not automatically authorize a new external action in this chat. Check the current tool's authorization rules; an auto-review may still reject an action. On rejection, preserve the reason and stop that operation rather than disguising it as an execution failure or trying an unapproved route.
- If a request explicitly calls for creating fixed user-visible Codex conversations, use only the authorized native thread mechanism and verify the returned thread ID, title, host, and project. If the user only asks for a plan, do not create them.

## Design the minimum useful organization

Translate the user's requested outcomes into responsibilities, inputs, outputs, acceptance, escalation, and a named overall owner. Use only roles that reduce a real coordination or execution gap. A person or agent may cover multiple roles when the user permits and the work remains reviewable.

For an initial organization, build the smallest level that satisfies the user's stated need. L1 is a project-specific label, not a default for every new bureau; use it only when the user requests it and its acceptance meaning is clear. Keep role design independent of exact thread count, model brand, or department names. Do not treat a capacity target as a list of identities. Set up the requested initialization prompt so each conversation receives its purpose, scope, expected report, and limits; a prompt label is not technical permission enforcement.

Keep model/resource mapping separate from role levels. For any named quality level, use the user's applicable acceptance definition; do not infer that an earlier project achieved or requested it. At dispatch time, check the current mapping and actual tool fields. Record the requested model and reasoning effort separately from any observable turn context or platform receipt. If no reliable receipt exists, say the effective setting is unknown. A mapping or resolver may guide or compare a request without forcing the native platform to apply it. Do not infer cost efficiency, reliability, or long-term economics from one successful run; the cost baseline may be unknown.

## Use the bundled templates and validator

The starter files in [assets/agent-roster.template.json](assets/agent-roster.template.json) and [assets/model-resource-map.template.json](assets/model-resource-map.template.json) are editable examples, not an established roster or model policy. Copy them into the user's project only when that project needs these files; fill them with user-approved roles and verified resource IDs. Do not carry over project-specific titles, IDs, counts, models, or permissions.

From the skill folder, validate the selected files with:

```sh
node scripts/validate_bureau_config.mjs --roster path/to/roster.json --mapping path/to/model-resource-map.json
node scripts/validate_bureau_config.mjs --roster path/to/roster.json --mapping path/to/model-resource-map.json --agent-id agent-id
```

The first command checks the roster and mapping; the second also resolves one member to its configured target and candidate model/thinking values. This local JSON validator does not create conversations, dispatch work, verify that a thread still exists, enforce model settings, or grant permissions. Follow [references/evidence.md](references/evidence.md) for evidence-labeling practice; keep project-local private evidence in its authorized context and do not add private identifiers or paths to a public package. Never treat a generated template or passing validator as evidence that a live platform operation succeeded.

## Preserve a verifiable baseline

Before changing an existing organization, find its authoritative roster, source material, operating guidance, prior acceptance evidence, and known exceptions. Record which versions or revisions were actually inspected. Reuse valid evidence, but re-check live facts that can change, such as thread ownership, host, title, status, permissions, model settings, and tool availability.

For each material claim, label it as observed, documented, inferred, or unknown. Tie observed results to the exact operation and available receipt; tie code claims to the inspected version or line range. Keep source completeness separate from source interpretation. A scanned, partial, inaccessible, or stale source must remain explicitly incomplete. Repeated summaries do not turn an unverified claim into fact.

Treat [references/evidence.md](references/evidence.md) as an anonymized case-study example, not evidence for another project. It distinguishes Recorded, Limited, and Unknown claims; reuse that labeling discipline and keep an authorized project-local index for raw evidence. The source records behind this example are not included or publicly retrievable. The JSON validator above checks roster/mapping files, not evidence truth. For major bootstrap work, compare the result with the baseline and list the differences, reused items, unresolved items, and evidence for each change.

**Improvement ratchet:** Keep the last verified baseline in Git. For each candidate change, run risk-proportionate regression checks for necessary existing behavior and validate the added value against the existing acceptance criteria. The proposer must not lower those criteria unilaterally; adopt the change only when the checks pass. If it regresses or fails, record why and restore the last valid version while preserving the user’s unsaved changes. Do not claim untested guarantees or build a parallel version system.

## Initialize only through an available, authorized path

If the user explicitly asks to create the organization, prepare and review the concrete roster and initialization prompts before carrying out the authorized native operations. For every created or reused conversation, preserve its actual returned title and ID and verify its project and host. Report partial creation accurately; do not retry an operation with an uncertain receipt until checking whether it already took effect.

Keep logical membership distinct from a conversation's runtime state. A completed turn is not proof that the underlying resource was released; an idle snapshot is time-specific; neither proves persistent availability or crash recovery. Do not represent a SubAgent as a fixed member or a fixed thread as an independent autonomous agent.

Before sending follow-up work, inspect the target thread's current state and history. A new message to a busy conversation may steer or interrupt the current turn instead of waiting in a reliable FIFO queue. Prefer waiting for the active turn to finish. If the user or work owner explicitly chooses steering, state what may be interrupted and record the displaced task for recovery. Do not promise queueing, exclusive dispatch, notifications, or autonomous resumption without direct evidence.

Do not insert an upstream dispatch or coordination service as a default prerequisite for ordinary research or software work. Use an external service only when the concrete task benefits from it and the current host, identity, network, and service authorization are verified. A local work record or a Codex thread does not perform remote dispatch, authentication, notification, or recovery. If an upstream route is unavailable or unauthorized, stop that route; continue independent local work where useful and report the actual boundary. Never simulate a dispatch or claim a remote result.

## Close with evidence and a useful handoff

Check each requested acceptance condition against observable evidence. Keep execution status, dispatch status, notification status, business outcome, and human acceptance as separate facts. Unknown, interrupted, timed out, or incomplete work must not be silently promoted to success. Preserve original failure evidence and avoid blind retries where an operation may have side effects.

Deliver the roster or design, the actual changes made, a concise baseline comparison, evidence references, unverified claims, and follow-up actions with an owner. End when the requested scope is accepted; do not expand into new infrastructure or a larger organization without a demonstrated need and authorization.

For source history and project-specific lessons behind these boundaries, read [references/retrospective.md](references/retrospective.md).
