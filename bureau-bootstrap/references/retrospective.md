# Retrospective: reusable organization-bootstrap lessons

This reference distills lessons from one private project case. It is not a universal platform guarantee, required roster, or deployment guide. The case's raw records and detailed evidence index remain private and are not included in this package; this redacted summary does not make them publicly retrievable.

## Lessons supported by the bounded record

- A responsibility chart and persistent conversations describe different things. Neither establishes an independent service, identity, access-control boundary, durable session, notification path, or automatic recovery.
- A local work-record tool can track ownership and evidence without dispatching work. An upstream dispatch service should be introduced only for a demonstrated task need, with current identity, network, host, and service authorization verified.
- Authorization belongs to a specific action and context. In the source case, a transfer, a research dispatch, and a local commit had separate authorization events, including initial review rejections followed by direct user authorization for later actions. Preserve each event accurately; do not infer blanket approval or treat one rejection as a permanent global prohibition.
- Keep quality levels tied to explicit scope. The source case's initial organization target was L1, while a later lock-release work item was separately accepted at L2. Do not combine these into one acceptance claim.
- A map or resolver can compare intended model settings with a candidate request; it cannot force the native platform. Check actual turn evidence when available and report backend details as unknown when no reliable receipt exists.
- A second message to a busy conversation may steer or interrupt current work. In the source case, one probe observed this outcome. Check status before sending, wait when practical, and record displaced work if an authorized owner chooses to steer.
- Bounded fault-injection tests can support the specific failure path they exercise. In the source case, the accepted lock-release change addressed save-success/unlock-reporting behavior; a distinct intermittent lock-open `EPERM` root cause remained unknown. Do not promote one fix or a successful retry into a claim that every related failure is cured.
- Preserve source coverage limits. The source case's scanned design document was only partially inspected, so later summaries could not establish the complete original decision history.

## Evidence handling for future projects

Keep a project-local evidence index separate from any public Skill package. Record source revision, operation, result, test scope, and limitations. Store conversation identifiers, absolute paths, internal hostnames, private messages, and other operational detail only in the authorized local record. Publish an anonymized synthesis only when needed, and state clearly that private supporting artifacts are not publicly accessible.

The project case provides narrow examples, not a complete organizational acceptance. The bundled validator tests configuration logic only. A new organization still needs its own live checks, authorization review, and acceptance criteria; no private result in this reference substitutes for them.
