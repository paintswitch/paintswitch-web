# PaintSwitch canonical documentation

Last updated: 2026-08-04

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
6. D-035 confirms that PaintSwitch is a Virginia DBA of Jen Contracting for internal/legal structure only. D-001 remains controlling publicly: never infer or expose that relationship in customer-facing work from history, shared personnel, tooling, operational convenience, or the internal DBA direction. If a required legal disclosure appears to conflict with D-001, stop for owner/legal direction.
7. Scope operational evidence to the exact path observed. A controlled test email proves only the mailbox, visible sender, routing address, subject, and body observed. A separately created controlled Opportunity proves only the trigger, enrollment count, action status, and workflow completion shown in GoHighLevel. The protected-Preview submission plus the owner's approximately 1:20 PM receipt confirmation prove only the observed website confirmation, Upstash state/counter behavior, GoHighLevel records and mappings, workflow execution, and receipt of that exact internal message. They do not prove production operation, failure or recovery behavior, concurrency, the rate-limit threshold, human-response timing, branded-domain authentication, privacy/retention operating procedures, or launch acceptance.
8. Treat any integration sender identity containing a Jen Contracting name or domain as an implementation conflict. It must be corrected to a PaintSwitch-only identity before workflow publication or customer-facing use; its presence is not owner approval.

## Update rules

- Read this index, the master context, and every task-relevant canonical document before performing work.
- Add a numbered decision to `DECISION_LOG.md` whenever the user approves a material business, product, pricing, brand, operating, or technical decision.
- Update `PAINTSWITCH_MASTER_CONTEXT.md` and `PRODUCT_REQUIREMENTS.md` when a confirmed decision changes their governing content.
- Update `DEVELOPMENT_STATUS.md` after a material implementation, verification, release, deployment-status check, or newly identified risk.
- Derive repository architecture in `TECHNICAL_ARCHITECTURE.md` only from repository evidence. Clearly labeled external runtime evidence may be recorded there only to show that the verified repository path executed as designed; it must not be presented as tracked architecture, production acceptance, or proof of untested behavior. Do not document planned systems there as if they exist.
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
- Treat D-027 together with the later D-042 rule: every accepted lead receives on-page confirmation; a future SMS opt-in must be separate, optional, and unchecked; `Text` contact preference is not automated-SMS consent; and automated customer SMS is off for the beta. This supersedes the older every-lead-SMS rule.
- Treat decision D-028 as scoped acceptance of the currently documented low-reachability dependency risk with monitoring and architecture-triggered reassessment, not as proof of zero risk or a waiver of other security gates.
- Treat decision D-029 as the current owner-notification destination rule: use `hello@paintswitch.com`, never the `hell@paintswitch.com` typo, and do not treat destination approval or receipt of a separately sent test email as proof that the notification workflow is operational.
- Treat decision D-030 as the current beta safeguard rule: apply a 30-day TTL to Upstash technical idempotency/delivery-state records and limit valid lead submissions to five per client IP per ten-minute window. One controlled protected-Preview submission verified a completed state containing no raw submitted intake fields, with a near-30-day remaining TTL, plus one Preview rate-counter increment with an active TTL; the five-submission threshold, blocked response, concurrency, failure behavior, and production operation remain unverified. D-039 separately governs unconverted CRM leads; other record classes and any additional abuse controls remain unresolved unless separately confirmed.
- Treat decision D-031 as the current internal owner-notification sender rule: use From name `PaintSwitch` and From email `hello@paintswitch.com`. AC-044's no-Jen visible-sender evidence, one controlled manual trigger/action, one controlled protected-Preview website-driven successful notification action, and owner-confirmed receipt of that website-triggered message are verified; branded-domain authentication, failure recovery, and complete production operational behavior remain unverified.
- Treat decision D-032 as approval to publish only the exact verified `PaintSwitch Website Lead - Owner Notification` workflow. Published/Saved state, one controlled manual Opportunity trigger, and one controlled protected-Preview website submission each produced exactly one completed enrollment and a successful internal-notification action; the owner confirmed receipt of the Preview-triggered message. Staff ownership, branded-domain authentication, failure-path recovery, production website-to-CRM delivery, human-response timing, and complete launch operation remain unverified.
- Treat D-033 as the Vercel Pro hosting decision. Owner approval and a signed-in dashboard check showing the `Paint Switch` team labeled `Pro` with the `paintswitch-web` project resolve the plan choice; billing administration, Production promotion, rollback, monitoring, and final deployment QA remain separate verification work.
- Treat D-034 and D-036 as the public beta market-priority rules: prioritize Virginia and stop MHIC-focused beta work without claiming a Virginia-only service boundary or waiving jurisdiction-specific legal obligations. The confirmed DMV market and unresolved exact service boundaries remain unchanged.
- Treat D-035 as the internal/legal Virginia DBA direction only. It does not prove registration, exact registrant facts, licensing, address, tax/EIN facts, an authorized representative, A2P acceptance, or permission to expose a Jen connection publicly.
- Treat D-037 through D-040 as the beta lead-data rules: use website lead data only for quote review/response, CRM, attribution, security, and duplicate prevention; do not sell it or share/use it for targeted advertising; retain unconverted CRM leads for 12 months after their last interaction before deletion or anonymization unless an approved exception applies; and accept reasonably verified access, correction, and deletion requests at `hello@paintswitch.com`.
- Treat D-041 through D-043 as the beta contact and access rules: quote submission authorizes project-specific contact only, automated customer SMS is off and `Text` preference is not SMS consent, and the website/quote service is for people age 18 or older.
- Treat D-044 as the beta Terms direction: Maryland governing law, no mandatory arbitration, and no class-action waiver. This is an owner-approved policy, not professional legal verification or a decision about venue, licensing, or mandatory local protections.
- Treat D-045 as the response-operation rule: operate 8:00 AM through 8:00 PM Eastern daily, attempt human contact within five minutes during those hours, and contact after-hours leads by 9:00 AM Eastern the next day.
- Treat D-046 as a conditional backup rule only: Alex must not receive backup routing until `alex@paintswitch.com` is created and a controlled receipt test passes.
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
