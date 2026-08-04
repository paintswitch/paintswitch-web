# PaintSwitch canonical documentation

Last updated: 2026-08-03

This directory is the permanent source of truth for PaintSwitch business, product, technical, and development decisions. Website copy and application behavior show what is implemented; they do not prove that a business decision was approved.

## Status labels

Use these labels exactly:

- **Confirmed** — explicitly approved by the user.
- **Proposed** — recommendation awaiting approval.
- **TBD** — not decided.
- **Rejected** — explicitly declined and not approved for implementation.
- **Superseded** — previously applicable but replaced by a later canonical decision.
- **Historical/Needs verification** — previously reported but not currently verified.

Only **Confirmed** items are approved for implementation. **Proposed** and **TBD** items require explicit user approval before they become requirements or customer-facing policy. **Rejected** and **Superseded** items must not be implemented as current requirements.

## Canonical documents

| Document | Purpose |
| --- | --- |
| [PAINTSWITCH_MASTER_CONTEXT.md](./PAINTSWITCH_MASTER_CONTEXT.md) | Governing business context, brand and visual direction, operating platform, governance preferences, market, service scope, and approved product model. |
| [PRODUCT_REQUIREMENTS.md](./PRODUCT_REQUIREMENTS.md) | Product journeys, requirements, acceptance criteria, launch priorities, exclusions, and pricing-safety rules. |
| [DECISION_LOG.md](./DECISION_LOG.md) | Chronological, numbered record of material approved decisions and their consequences. |
| [OPEN_QUESTIONS.md](./OPEN_QUESTIONS.md) | Proposed ideas, unresolved choices, and historical working assumptions that must not be treated as approved. |
| [DEVELOPMENT_STATUS.md](./DEVELOPMENT_STATUS.md) | Verified implementation status, known gaps, risks, and clearly separated historical reports. |
| [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md) | Architecture and technology facts verified directly from the repository. |
| [REQUIREMENTS_TRACEABILITY.md](./REQUIREMENTS_TRACEABILITY.md) | Unique-ID inventory connecting decisions and requirements to implementation, evidence, and launch impact. |
| [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) | Prioritized launch work, dependencies, acceptance tests, and blocker status. |

`AGENTS.md` contains repository-working rules. It points future agents to this documentation but is not a substitute for the canonical documents above.

## Authority and conflict handling

1. Explicit user approval is the only basis for the **Confirmed** label.
2. The decision log is the chronological authority for material decisions. The master context and product requirements must agree with the latest non-superseded decision.
3. Source code, website copy, assistant recommendations, generated build output, historical reports, and third-party documentation are not evidence of business approval.
4. If code or customer-facing copy conflicts with canonical documentation, stop and ask the user which state should prevail. Do not silently change either side.
5. If two canonical documents conflict, use the most recent applicable confirmed decision, flag the inconsistency, and repair the documentation after user review.
6. Never infer a PaintSwitch relationship to Jen Contracting from history, shared personnel, tooling, or operational convenience.
7. Treat a separately sent test email as evidence only for the exact mailbox and message tested. It does not prove that a Draft workflow, website submission, CRM delivery, or end-to-end notification path works.
8. Treat any integration sender identity containing a Jen Contracting name or domain as an implementation conflict. It must be corrected to a PaintSwitch-only identity before workflow publication or customer-facing use; its presence is not owner approval.

## Update rules

- Read this index, the master context, and every task-relevant canonical document before performing work.
- Add a numbered decision to `DECISION_LOG.md` whenever the user approves a material business, product, pricing, brand, operating, or technical decision.
- Update `PAINTSWITCH_MASTER_CONTEXT.md` and `PRODUCT_REQUIREMENTS.md` when a confirmed decision changes their governing content.
- Update `DEVELOPMENT_STATUS.md` after a material implementation, verification, release, deployment-status check, or newly identified risk.
- Update `TECHNICAL_ARCHITECTURE.md` only from repository evidence. Do not document planned systems there as if they exist.
- Update `REQUIREMENTS_TRACEABILITY.md` whenever a decision or requirement is added, rejected, superseded, implemented, or verified.
- Update `LAUNCH_CHECKLIST.md` whenever launch scope, dependencies, completion evidence, or blocker status changes.
- Put unresolved choices and unapproved working assumptions in `OPEN_QUESTIONS.md` with **Proposed** or **TBD** labels.
- Preserve decision history. Mark a decision superseded and link its replacement rather than deleting it.
- Use ISO dates (`YYYY-MM-DD`) and distinguish the date of a decision from the date it was documented.
- Never publish an unapproved price, fee, deposit, multiplier, allowance, package, or eligibility policy as current customer policy.
- Keep confirmed end-state outcomes separate from release phasing. Do not infer that every confirmed outcome blocks an earlier beta when sequencing remains **TBD**.
- Treat decision D-018 as the current release boundary: the lead-generation beta is first, and instant pricing, checkout, chatbot, payments, photo-review automation, and automated proposals are deferred from that beta.
- Treat decision D-023 as the current beta delivery constraint: target Saturday, 2026-08-08; require no more than one hour of owner participation per day; use a custom branded PaintSwitch quote-request form with a secure server-side GoHighLevel connection; and remove placeholder reviews until verified, permissioned reviews exist.
- Treat decisions D-024 through D-026 as the current beta integration choices: a GoHighLevel private integration with its token in a server-side Vercel secret, free Upstash Redis for durable idempotency, and four additional Opportunity fields named `Project Location`, `Website Submission ID`, `Campaign Source`, and `Campaign Name`.
- Treat decision D-027 as the current messaging rule: every accepted lead receives on-page confirmation; SMS consent is separate, optional, and unchecked; only explicit opt-ins receive automatic SMS when enabled; and the beta may launch with SMS disabled while A2P is pending. This supersedes the older every-lead-SMS rule.
- Treat decision D-028 as scoped acceptance of the currently documented low-reachability dependency risk with monitoring and architecture-triggered reassessment, not as proof of zero risk or a waiver of other security gates.
- Treat decision D-029 as the current owner-notification destination rule: use `hello@paintswitch.com`, never the `hell@paintswitch.com` typo, and do not treat destination approval or receipt of a separately sent test email as proof that the notification workflow is operational.
- Treat decision D-030 as the current beta safeguard rule: apply a 30-day TTL to Upstash technical idempotency/delivery-state records and limit valid lead submissions to five per client IP per ten-minute window. Broader CRM/business/customer-data retention and any additional abuse controls remain unresolved unless separately confirmed.
- Treat decision D-031 as the current internal owner-notification sender rule: use From name `PaintSwitch` and From email `hello@paintswitch.com`. Sender authentication, deliverability, the actual inbox sender line, customer-facing sender scope, workflow publication, failure handling, and end-to-end operation remain unresolved or unverified until separately approved or tested.
- Treat release dates as goals, not authority to bypass safety, legal, privacy, consent, security, messaging, or acceptance requirements. External-provider delays such as A2P approval must be recorded as schedule risks, and any fallback that changes a confirmed requirement needs explicit owner approval and a canonical decision update.
- Treat provider or carrier guidance, validation, registration, or approval as operational evidence only, not legal approval. Track final legal review and jurisdiction-specific obligations separately.
- Treat a confirmed platform selection separately from its account configuration, credentials, workflows, APIs, field mappings, payment-processor setup, and exact enabled modules.

## Review process

Documentation review is required:

- when the user makes or changes a material decision;
- before implementing a **Proposed** or **TBD** item;
- after material application-code changes;
- after a release or deployment verification;
- when code, website copy, and canonical documentation disagree.

For each review:

1. Identify the affected canonical documents.
2. Confirm whether each changed item is **Confirmed**, **Proposed**, **TBD**, **Rejected**, **Superseded**, or **Historical/Needs verification**.
3. Add or supersede decision-log entries when approval has changed.
4. Update implementation status using current repository evidence.
5. Check cross-document consistency and links.
6. Present unresolved conflicts to the user for a decision.

Documentation ownership, approval participants beyond the user, and a recurring review cadence are **TBD**.
