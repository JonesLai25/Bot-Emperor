# Redacted evidence summary

Snapshot: 2026-11-27. This file is a de-identified summary of a single private project case, prepared to illustrate evidence discipline. Its source revision is the local Skill repository commit `fbeb3d45bcc0403f9263e403343ada7dbdfe166d`; the scoped code change discussed below was accepted at source commit `b3a1442`.

The original project records, conversation histories, test reports, and source materials remain in a private evidence index outside this package. They are not linked here and are not publicly available through this document. Public readers cannot independently reproduce or audit those private observations. Do not treat this summary as evidence about another project or as a platform-wide guarantee.

## Claim labels

- **Recorded:** supported by the private project's retained reports or source metadata, but the supporting private artifacts are not included here.
- **Limited:** observed in a narrow sample or bounded test; do not generalize beyond that scope.
- **Unknown:** the private records do not establish the claim.

## Recorded bounded results

- The organization had two broad work types: software changes and research about existing software. Its requested initial baseline was labeled L1 (“usable”); a separate lock-release work item was scoped and accepted at L2. These are different scopes and acceptance decisions.
- A lock-release error case involved a save that had succeeded before unlock reporting failed, leaving the caller without a reliable created-item identifier and creating duplicate risk on blind retry. A code change at source commit `b3a1442` added explicit outcomes and diagnostics. The private acceptance report records 14/14 independent tests and same-version review for that bounded change. This does not prove behavior for every filesystem, power loss, forced termination, or other failure mode.
- Earlier `EPERM` events included one rename/data-loss incident and one intermittent lock-open failure during a 9/10 run. A retry passed, but the lock-open root cause remained unknown. The later lock-release change did not establish a fix for that separate lock-open problem.
- A fixed-conversation workflow was exercised in one local project: a manager sent three follow-ups to one research conversation and reviewed its output. The first two work turns used a lower reasoning effort than requested; the third matched. Local turn context showed the requested/effective-setting drift, but did not establish backend model build or routing.
- A one-time roster review reconciled 95 conversation entries against the locally observed project, host, and titles. This was a point-in-time inventory, not proof of future availability, permission isolation, dispatch enforcement, or capacity.
- In one busy-conversation probe, a second input steered an in-progress wait task and the requested completion was not observed. The agent-reported elapsed interval was about 13.5 seconds and was not independently timed. One probe does not establish universal interruption behavior or the absence of platform queueing elsewhere.
- Some retained turns had start, completion, and duration metadata. Samples overlap and do not establish one complete end-to-end duration; token usage and billed cost were unavailable.
- The private design source was a 151-page scanned document with no extractable text. Only the first and last pages were visually checked; one page received an OCR sample. Full-page review and the complete earlier decision history were not obtained.

## Authorization and service boundaries

The private history contains separate, action-specific authorization events: one cross-conversation transfer was initially rejected and later directly authorized; a later research dispatch and a local Git commit each had their own authorization history. These events do not imply blanket authorization or a permanent denial. The package omits conversation identifiers and raw messages. The case records no verified external job submission or service authorization.

Separate conversations did not establish separate security identities or ACLs. The case did not verify backend model version, general busy-target exclusion, durable queueing, crash recovery, actual resource reclamation, or long-term service reliability. A successful task-specific acceptance does not establish that the whole organization or platform was complete.

## Reproducible checks in this package

From this skill directory, run the bundled configuration tests:

```sh
node --test scripts/validate_bureau_config.test.mjs
```

The tests exercise the generic empty template, valid resolution, unmapped levels, partial values, duplicate identifiers, and unknown members. They validate only the local JSON helper; they do not reproduce the private project operations above. For an actual new project, keep its evidence in an authorized local index and record what was inspected, what was observed, and what remains unknown.
