# PaintSwitch canonical documentation

Last updated: 2026-08-11

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
| [BETA_OPERATIONS_RUNBOOK.md](./BETA_OPERATIONS_RUNBOOK.md) | Confirmed beta lead-response, failure, privacy-request, retention, backup-activation, release, and rollback procedures. |

`AGENTS.md` contains repository-working rules. It points future agents to this documentation but is not a substitute for the canonical documents above.

## Authority and conflict handling

1. Explicit user approval is the only basis for the **Confirmed** label.
2. The decision log is the chronological authority for material decisions. The master context and product requirements must agree with the latest non-superseded decision.
3. Source code, website copy, assistant recommendations, generated build output, historical reports, and third-party documentation are not evidence of business approval.
4. If code or customer-facing copy conflicts with canonical documentation, stop and ask the user which state should prevail. Do not silently change either side.
5. If two canonical documents conflict, use the most recent applicable confirmed decision, flag the inconsistency, and repair the documentation after user review.
6. D-035 confirms that PaintSwitch is a Virginia DBA of Jen Contracting for internal/legal structure only. D-001 remains controlling publicly: never infer or expose that relationship in customer-facing work from history, shared personnel, tooling, operational convenience, or the internal DBA direction. If a required legal disclosure appears to conflict with D-001, stop for owner/legal direction.
7. Scope operational evidence to the exact path observed. A controlled test email proves only the mailbox, visible sender, routing address, subject, and body observed. A separately created controlled Opportunity proves only the trigger, enrollment count, action status, and workflow completion shown in GoHighLevel. The protected-Preview submission plus the owner's approximately 1:20 PM receipt confirmation prove only the observed website confirmation, Upstash state/counter behavior, GoHighLevel records and mappings, workflow execution, and receipt of that exact internal message. Dedicated-domain DNS and provider-status screens prove configuration only; a row-level Delivered record plus inbox receipt proves only the linked delivery observed. Neither proves raw-message authentication results, warmup completion, failure recovery, or Production deliverability. Aggregate delivery counters do not prove which row or action delivered. None of this proves Production operation, broader failure or recovery behavior, concurrency, human-response timing, privacy/retention operating procedures, or launch acceptance.
8. Treat any integration sender identity containing a Jen Contracting name or domain as an implementation conflict. It must be corrected to a PaintSwitch-only identity before workflow publication or customer-facing use; its presence is not owner approval.
9. Treat the verified GoHighLevel Business Profile values `PaintSwitch`, `hello@paintswitch.com`, and `https://paintswitch.com` as external implementation facts only. They do not approve or verify Legal Business Name, DBA filing, registered address, tax/EIN facts, licensing, authorized-representative facts, or mandatory disclosure treatment.
10. Treat D-050's HighLevel and AI Employee subscription amounts as internal operating costs, never customer pricing. Treat D-051 as approval of GoHighLevel Conversation AI plus the Prompt Based/Start-from-Scratch bot type, D-052 as approval of `OpenAI GPT 4.1` and the narrow safety-first prompt, D-053 as approval only of the exact bounded homepage Live Chat owner-test configuration, and D-054 as approval of the `Switch bot` name while preserving explicit AI disclosure. Do not expand those decisions into unapproved knowledge sources, qualification behavior, automatic context-preserving handoff, transcript export, additional channels/actions, active promotion, booking, payments, SMS/social/Voice AI, or other customer-facing modules.
11. Scope Conversation AI evidence precisely. Saved provider settings and controlled test-panel responses prove only the external configuration and exact observed outputs. The homepage component, widget ID, exact CSP origins, Privacy changes, and source-contract tests are merged and deployed; Production verifies homepage-only placement, the `Switch bot` title and AI-disclosing introduction, the matching Privacy identity/date, and the bounded 2026-08-10 service/pricing/booking/response-time replies plus bounded synthetic cleanup. The conversation was permanently deleted; the associated synthetic Contact was deleted but is provider-restorable for 60 days. This does not prove exact delay/cap/sleep behavior, broad browser or accessibility support, both shutdown paths, provider-enforced retention, promoted traffic, or end-to-end readiness. D-059 makes the safeguarded bot part of the intended launch after its remaining acceptance gates pass.
12. For D-053/D-054 owner testing, preserve every confirmed safeguard together: homepage-only exact HighLevel Live Chat widget named `Switch bot`; visible and first-message AI disclosure; contact form, voice notes, attachments, SMS/social/Voice AI, booking, payment, and actions off; 10-reply cap; two-second delay; manual/workflow sleep; form/mailbox-only handoff with no exact time or automatic context-transfer promise; Conversation Summary and transcript workflow export off; manual up-to-12-month unconverted-chat deletion/anonymization; bot and environment-flag kill switches; and ads/promotion off. A change to any safeguard or a move to promoted traffic requires explicit owner approval and canonical updates.
13. Treat D-055 through D-057 as the current owner-approved design direction: sophisticated, confident, editorial, and intentionally expert rather than trend-led, cute, or condescending; a warm greige/taupe, deep teal/forest-green/warm-charcoal, and soft-cream/warm-gold palette direction using the exact supplied candidate values; and a transformation-through-color message supported by before/after storytelling. These decisions do not approve a final logo file, typography, an exact warm-gold value, one final token assignment among the approved alternatives, final supporting copy, or any claimed customer-project story or image. Until authentic, permissioned PaintSwitch project assets exist, identify generated or conceptual imagery as illustrative color studies rather than customer work.
14. Treat D-058 as the historical approval boundary for the exact 2026-08-09 editorial beta candidate. D-060 supersedes only its interim text-only wordmark and prior interactive-accent assignments; its layout, Georgia/system typography, warm-neutral base, and clearly labeled illustrative color-study hero remain approved. D-058 did not itself approve a final logo, customer-work claims, exact warm-gold value, additional supporting copy, deployment, or promoted traffic.
15. Treat D-059 as the current launch target and public response-time rule: prepare the full D-058 design and safeguarded `Switch bot` for launch by the weekend of 2026-08-15 through 2026-08-16; never publish a five-minute, 9:00 a.m., or other exact human-response promise. Keep D-049's five-minute Alex branch internal. D-059 does not waive chatbot, CRM, legal, privacy, security, hosted-acceptance, or final go/no-go gates.
16. Treat D-060 as the current production-logo and website brand-color authority: use the exact approved stacked path-only artwork unchanged in navy `#012765` and cobalt `#0658FE`; replace interim text-only site wordmarks; use those colors for buttons and interactive accents; and retain the warm greige/taupe/soft-cream editorial base. Do not infer approval for a derivative favicon/app icon, social crop/card, reverse or one-color mark, clear-space/minimum-size system, recolor, deployment, or traffic promotion.

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
- Treat D-018 and D-059 together as the current release boundary: the lead-generation website remains first, while instant pricing, checkout, payments, photo-review automation, and automated proposals remain deferred. D-059 makes only the safeguarded `Switch bot` part of the intended full-design launch after its acceptance gates pass.
- Treat D-023 as retaining the one-hour-per-day owner limit, custom branded quote-request form, secure server-side GoHighLevel connection, and no-placeholder-review rules. Its expired August 8 target is superseded by D-059's weekend-of-2026-08-15 target.
- Treat decisions D-024 through D-026 as the current beta integration choices: a GoHighLevel private integration with its token in a server-side Vercel secret, free Upstash Redis for durable idempotency, and four additional Opportunity fields named `Project Location`, `Website Submission ID`, `Campaign Source`, and `Campaign Name`.
- Treat D-027 together with the later D-042 rule: every accepted lead receives on-page confirmation; a future SMS opt-in must be separate, optional, and unchecked; `Text` contact preference is not automated-SMS consent; and automated customer SMS is off for the beta. This supersedes the older every-lead-SMS rule.
- Treat decision D-028 as scoped acceptance of the currently documented low-reachability dependency risk with monitoring and architecture-triggered reassessment, not as proof of zero risk or a waiver of other security gates.
- Treat decision D-029 as the current owner-notification destination rule: use `hello@paintswitch.com`, never the `hell@paintswitch.com` typo, and do not treat destination approval or receipt of a separately sent test email as proof that the notification workflow is operational.
- Treat decision D-030 as the current beta safeguard rule: apply a 30-day TTL to Upstash technical idempotency/delivery-state records and limit valid lead submissions to five per client IP per ten-minute window. Controlled protected-Preview evidence verifies a completed state containing no raw submitted intake fields with a near-30-day remaining TTL, the counter capped at five, and the next valid request returning `429` without duplicate provider delivery. Hosted concurrency, actual expiration, broader failure behavior, and Production operation remain unverified. D-039 separately governs unconverted CRM leads; other record classes and any additional abuse controls remain unresolved unless separately confirmed.
- Treat decision D-031 as the current internal owner-notification sender rule: use From name `PaintSwitch` and From email `hello@paintswitch.com`. AC-044's no-Jen visible-sender evidence, controlled manual and protected-Preview actions, owner-confirmed receipt of the earlier website-triggered message, dedicated `mg.paintswitch.com` sender/live DNS configuration, post-configuration row-level hello/Alex delivery, routed Alex receipt, and PaintSwitch-only Business Profile values are verified. Domain-warmup completion, raw-header authentication proof, failure recovery, human-response operation, and complete Production behavior remain unverified.
- Treat decision D-032 as approval to publish only the exact verified `PaintSwitch Website Lead - Owner Notification` workflow. Published/Saved state, controlled manual and protected-Preview actions, post-configuration row-level hello/Alex delivery, and routed Alex receipt are verified. Staff ownership, domain-warmup completion/raw-header proof, failure-path recovery, Production website-to-CRM delivery, human-response timing, and complete launch operation remain unverified.
- Treat D-033 as the Vercel Pro hosting decision. Owner approval and a signed-in dashboard check showing the `Paint Switch` team labeled `Pro` with the `paintswitch-web` project resolve the plan choice; billing administration, Production promotion, rollback, monitoring, and final deployment QA remain separate verification work.
- Treat D-034 and D-036 as the public beta market-priority rules: prioritize Virginia and stop MHIC-focused beta work without claiming a Virginia-only service boundary or waiving jurisdiction-specific legal obligations. The confirmed DMV market and unresolved exact service boundaries remain unchanged.
- Treat D-035 as the internal/legal Virginia DBA direction only. It does not prove registration, exact registrant facts, licensing, address, tax/EIN facts, an authorized representative, A2P acceptance, or permission to expose a Jen connection publicly.
- Treat D-037 through D-040 as the beta lead-data rules: use website lead data only for quote review/response, CRM, attribution, security, and duplicate prevention; do not sell it or share/use it for targeted advertising; retain unconverted CRM leads for 12 months after their last interaction before deletion or anonymization unless an approved exception applies; and accept reasonably verified access, correction, and deletion requests at `hello@paintswitch.com`.
- Treat D-041 through D-043 as the beta contact and access rules: quote submission authorizes project-specific contact only, automated customer SMS is off and `Text` preference is not SMS consent, and the website/quote service is for people age 18 or older.
- Treat D-044 as the beta Terms direction: Maryland governing law, no mandatory arbitration, and no class-action waiver. This is an owner-approved policy, not professional legal verification or a decision about venue, licensing, or mandatory local protections.
- Treat D-045 as an internal response-operation goal after D-059: the owner aims to operate 8:00 AM through 8:00 PM Eastern daily, make the first human contact attempt within five minutes during those hours, and make the first after-hours attempt by 9:00 AM Eastern the next day. Do not publish those exact times, guarantee them to customers, or treat a timing rehearsal as a launch promise.
- Treat D-046, D-048, and D-049 as the conditional escalation-only backup rule: the immediate new-lead notification remains at `hello@paintswitch.com`, and Alex must not receive every lead. Add `Contact Attempted` as the second internal pipeline stage. After five minutes, alert Alex only when the Opportunity still remains in `New Quote Request`; do not alert Alex when it has moved to `Contact Attempted`. Automated customer SMS remains off.
- Use `BETA_OPERATIONS_RUNBOOK.md` for beta execution and evidence capture. Both stages, the Saved/published exact five-minute branch, handled-path suppression, no-customer-action behavior, and routed Alex receipt are verified. Mobile Outlook shows the Alex message received at 4:23 PM, and Email Analytics records Alex Delivered at 4:23 PM plus hello Delivered at 4:18 PM and 4:20 PM. Operational activation and human-response rehearsal remain unverified; receipt is not human response.
- Do not invent distinct Alex-alert copy, stage-transition ownership, acknowledgment procedures, or failure behavior. The current Alex action reuses the exact D-032-approved internal owner-notification subject/body as an implementation fact, not a new copy approval. Any future distinct message wording remains **TBD**.
- Treat D-047 as the approved bounded dependency remediation: keep Next.js and `eslint-config-next` together at exact stable `16.3.0`; do not substitute Preview/Canary packages or run `npm audit fix --force`. The local production audit and regression suite pass, while hosted and Production checks remain separate gates.
- Treat D-053 as the chatbot owner-test boundary and D-054 as the current naming rule. Use `Switch bot` as the provider and visible widget name, while the intro and first generated reply explicitly identify it as PaintSwitch's AI assistant. The controlled activation is now live with the HighLevel bot in Auto Pilot and the website flag enabled; either must remain usable as an independent kill switch. Keep ads/promotion off. Preserve the verified local, protected Preview, Production placement, title/intro, and Privacy evidence without treating it as proof of the still-open runtime and shutdown checks. Apply D-039's up-to-12-month schedule manually to unconverted chat messages without claiming that HighLevel enforces a verified fixed active-account retention period.
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
