# PaintSwitch product requirements

Last updated: 2026-08-14

## Product objective

- **Confirmed:** Provide quick quotes and close qualifying standard residential interior painting sales online before anyone needs to call the customer. Stated on 2026-07-11.
- **Confirmed:** Residential interior painting is the operational V1 for instant firm pricing and checkout. The rule is confirmed; its exact earlier historical source date is uncertain and it was reaffirmed on 2026-08-01.
- **Confirmed:** Include instant pricing and online booking in the launch model.
- **Confirmed:** Market interior, exterior, cabinet, and commercial painting while routing each project to the correct sales journey.
- **Confirmed:** Include a customer-facing chatbot using GoHighLevel Conversation AI, a Prompt Based bot started from scratch, OpenAI GPT-4.1, and the D-052 safety-first prompt-only V1 boundaries. The approved prompt is saved and has passed four bounded provider-panel tests. Architecture, interface, transcript handling, detailed qualification and handoff behavior, integrated and production testing, and release phasing remain **TBD** or **Proposed** as labeled.

## Business and market constraints

- **PS-BR-001 — Confirmed:** Keep PaintSwitch completely separate from Jen Contracting in all customer-facing work. Approved on 2026-07-11.
- **PS-BR-003 — Confirmed:** Launch in the DMV. Stated on 2026-07-11; exact cities, counties, ZIP codes, travel zones, and service boundaries remain **TBD**.
- **PS-BR-008 — Confirmed:** Make Virginia the public operating focus for the lead-generation beta. Approved on 2026-08-04. This prioritization is not a Virginia-only service boundary and does not supersede the confirmed DMV market.
- **PS-BR-009 — Confirmed:** Stop treating MHIC-specific work as a beta focus. Approved on 2026-08-04. This priority does not waive licensing or consumer-protection obligations for work actually accepted in Maryland.
- **PS-BR-002 — Confirmed:** Position PaintSwitch as mid-market, convenience-first, technology-first, and technology-driven mainstream rather than inheriting Jen Contracting's luxury positioning. Approved on 2026-07-17.
- **PS-OP-001 — Confirmed:** PaintSwitch supplies the paint. Approved on 2026-07-17.
- **PS-OP-002 — Confirmed:** Use a hybrid model of employee and subcontractor crews. Approved on 2026-07-17.
- **PS-OP-006 — Confirmed:** Use PaintSwitch as a Virginia DBA of Jen Contracting for internal/legal structure while D-001 remains controlling publicly. No customer-facing Jen branding, shared identity, “powered by” language, or implied affiliation is permitted. Filing, exact registrant facts, licensing, required-disclosure treatment, and A2P verification remain unverified.

## Confirmed end-state outcomes

The following business/product outcomes were confirmed on 2026-07-18. Decision D-018 now confirms the lead-generation beta as the first release milestone; sequencing after that beta remains **TBD**.

- **ER-001 — Confirmed:** A professional standalone PaintSwitch website must be live.
- **ER-002 — Confirmed:** Customers must be able to request quotes.
- **ER-003 — Confirmed:** An AI assistant must qualify leads.
- **ER-004 — Confirmed:** Proposals and bookings must work.
- **ER-005 — Confirmed:** Payments must be collectible.
- **ER-006 — Confirmed:** Marketing must drive traffic and measurable leads.
- **ER-007 — Confirmed:** Operations must be capable of completing the first PaintSwitch projects.
- **ER-008 — Confirmed:** Launch the lead-generation beta before instant pricing and self-service checkout. The beta must deliver a professional standalone site, quote-request capture, durably controlled GoHighLevel CRM delivery with at-most-one automatic Opportunity creation plus reconciliation toward the one-record business outcome, owner notification, on-page confirmation for every accepted lead, and basic measurable source attribution. Automatic SMS is limited to explicit optional opt-ins and does not block launch while A2P is pending.
- **ER-009 — TBD:** Decide the implementation order and release assignment of the remaining end-state outcomes after the lead-generation beta.

## Approved lead-generation beta requirements

- **LB-001 — Confirmed:** The lead-generation beta is the first release milestone and precedes instant pricing and self-service checkout.
- **LB-002 — Confirmed:** Market interior, exterior, cabinet, and commercial painting in the beta; do not market Drywall Repair as a standalone beta service.
- **LB-003 — Confirmed:** Use “Request a Quote” as the primary customer action.
- **LB-004 — Confirmed:** Accept quote requests throughout the DMV for manual service-availability review without promising exact coverage.
- **LB-005 — Confirmed:** Collect name, phone, email, project ZIP or address, service type, project description, and contact preference.
- **LB-006 — Confirmed:** Deliver each lead to a verified GoHighLevel CRM pipeline and notify the PaintSwitch owner as primary lead owner.
- **LB-007 — Confirmed:** Display a clear on-page success state after a submission and a recoverable failure state when delivery fails.
- **LB-008 — Confirmed:** Record basic lead-source and campaign attribution for measurable beta leads.
- **LB-009 — Confirmed:** Disclose that service availability and pricing are confirmed after review.
- **LB-010 — Confirmed:** Do not display instant prices, collect deposits or payments, enable checkout, or promise customer-selected scheduling in the beta.
- **LB-011 — Confirmed:** Instant quote, checkout, payments, photo-review automation, and automated proposals are deferred from the beta, not rejected from the confirmed end state. D-059 makes the safeguarded `Switch bot` part of the intended full-design launch after its acceptance gates pass; this does not expand the deferred sales scope.
- **LB-012 — TBD:** Supply or approve remaining notification-action failure handling, domain-warmup completion and raw-header authentication acceptance, exact DBA filing/registrant/address/tax/authorized-representative and later A2P facts, any abuse controls beyond `LB-028`, detailed event definitions, record classes not covered by `LB-034`, professional/legal verification, and later-release sequence. D-033 through D-049 resolve the hosting-plan, Virginia-focus within the confirmed DMV market, internal DBA-direction, beta privacy/contact/retention, age, governing-law, response-target, conditional-backup, dependency-upgrade, escalation-only routing, second-stage, and five-minute escalation choices. Exact transition ownership and acknowledgment procedure, any future distinct Alex-alert wording, and failure/retry behavior remain **TBD**. The current Alex action reuses the exact D-032-approved internal owner-notification subject/body as an implementation fact, not a new copy approval. Protected Preview evidence verifies one application recovery and the rate threshold; external GoHighLevel evidence verifies both escalation branches, dedicated sender/live DNS configuration, row-level post-configuration hello/Alex delivery, routed Alex receipt, and PaintSwitch-only Business Profile values. Hosted concurrency, notification-action failure recovery, privacy/retention rehearsal, professional/legal review, human-response rehearsal, operational backup activation, and Production acceptance remain unverified. Approved integration configuration and mappings are implementation/verification work under `PL-018` through `PL-021`, not new owner decisions.
- **LB-013 — Confirmed:** The PaintSwitch owner is the primary owner of every beta lead. Response operations are governed by `LB-039`; Alex is only the conditional backup described by `LB-040` and receives only the backup/escalation alerts allowed by `LB-041`, never every routine lead. A self-addressed mailbox test alone does not activate routing.
- **LB-014 — Superseded:** The former rule requiring automatic SMS for every accepted beta submission was superseded by D-027 and `LB-025`. The on-page-confirmation portion remains current through `LB-007` and `LB-025`.
- **LB-015 — Confirmed:** Keep Vercel as the beta website host; custom-domain work does not block beta.
- **LB-016 — Confirmed:** Use `paintswitch.com` as the primary customer-facing domain and permanently redirect `www.paintswitch.com` to `paintswitch.com`.
- **LB-017 — Superseded:** The Saturday, 2026-08-08 target was superseded by D-059's weekend-of-2026-08-15 through 2026-08-16 target. The one-hour-per-day owner limit from D-023 remains current.
- **LB-018 — Confirmed:** Limit owner-required participation in beta delivery to at most one hour per day.
- **LB-019 — Confirmed:** Use a custom branded PaintSwitch quote-request form rather than an externally branded customer-facing intake.
- **LB-020 — Confirmed:** Connect the custom form to GoHighLevel through a secure server-side integration; do not expose GoHighLevel credentials or secrets to customer-delivered code.
- **LB-021 — Confirmed:** Remove placeholder reviews and keep reviews unpublished until verified, permissioned reviews exist.
- **LB-022 — Confirmed:** No target date, including D-059's weekend-of-2026-08-15 target, authorizes bypassing confirmed safety, legal, privacy, consent, security, messaging, CRM-delivery, chatbot, or acceptance requirements.
- **LB-023 — Superseded:** D-027 supersedes the former rule that an A2P delay could not result in beta launch with SMS disabled. A2P remains an operational risk, but `LB-025` governs the approved fallback.
- **LB-024 — Superseded:** D-027 resolved the former SMS-consent conflict. `LB-025` is the current requirement.
- **LB-025 — Confirmed:** Use a separate SMS opt-in that is optional and unchecked by default before any future automated SMS; do not treat `Text` contact preference as consent; show on-page confirmation for every accepted lead; and keep automated customer SMS disabled for the beta under D-042. Future activation requires separate readiness and the D-027 safeguards.
- **LB-026 — Confirmed:** Send owner lead notifications to `hello@paintswitch.com`. The 2026-08-03 owner clarification resolves the temporary `hell@paintswitch.com` typo conflict. Owner-supplied evidence verifies the corrected no-Jen controlled message. `LB-030` authorizes publication; the earlier controlled tests and one 2026-08-05 retained-submission recovery each produced a successful action. The owner confirmed that the earlier Preview-triggered message arrived around 1:20 PM EDT. Notification-action failure recovery and Production website-to-CRM-to-notification acceptance remain incomplete.
- **LB-027 — Confirmed:** Apply a 30-day TTL to Upstash technical idempotency/delivery-state records. This technical TTL does not set retention or deletion rules for GoHighLevel Contacts or Opportunities, customer-submitted business data, notification email, provider logs, analytics, or other CRM/business records.
- **LB-028 — Confirmed:** Enforce a beta anti-spam/rate limit of no more than five lead submissions per client IP address per ten minutes.
- **LB-029 — Confirmed:** Use From name `PaintSwitch` and From email `hello@paintswitch.com` for the internal owner lead-notification email. Approved on 2026-08-03 under D-031. AC-044 passes. Protected Preview evidence includes the earlier owner-confirmed receipt and one additional successful action during retained-submission recovery. Dedicated `mg.paintswitch.com` DNS configuration, live SPF/DMARC/MX lookup, row-level post-configuration hello/Alex delivery, routed Alex receipt, and PaintSwitch-only Business Profile values are externally verified. Customer-facing sender scope, domain-warmup completion, raw-header authentication proof, notification-action failure handling, human-response operation, and Production end-to-end operation remain **TBD** or unverified as labeled.
- **LB-030 — Confirmed:** Publish the exact `PaintSwitch Website Lead - Owner Notification` workflow after verifying its approved trigger filter, recipient, From values, subject, and body. Approved and externally verified on 2026-08-04 under D-032. The earlier controlled tests and one 2026-08-05 retained-submission recovery each verified a successful internal-notification action; the owner confirmed receipt of the earlier Preview-triggered message. A later post-configuration synthetic action also reported `Success`. A second synthetic Opportunity produced row-level Delivered records to hello at 9:31 PM and Alex at 9:36 PM plus routed Alex inbox receipt. This verifies conditional-backup delivery after the sender configuration, but does not prove notification-action failure recovery, warmup/raw-header authentication, human response, or Production website-to-CRM-to-notification operation.
- **LB-031 — Confirmed:** Use Vercel Pro for commercial beta hosting. The owner confirmed activation on 2026-08-04 under D-033, and a signed-in dashboard check verified the `Paint Switch` team labeled `Pro` with the `paintswitch-web` project inside it. Billing administration and production deployment work remain.
- **LB-032 — Confirmed:** Use website lead data only for quote review/response, CRM, attribution, security, and duplicate prevention.
- **LB-033 — Confirmed:** Do not sell website lead data or share/use it for targeted advertising.
- **LB-034 — Confirmed:** Retain an unconverted CRM lead for 12 months after its last interaction, then delete or anonymize it unless it is tied to an active project, verified security matter, dispute, or legal need. Other record classes remain **TBD** unless separately approved.
- **LB-035 — Confirmed:** Accept access, correction, and deletion requests through `hello@paintswitch.com`, using reasonable verification before acting.
- **LB-036 — Confirmed:** Quote submission authorizes project-specific contact only; it is not unrelated marketing consent or automated-SMS consent.
- **LB-037 — Confirmed:** Restrict the beta website and quote service to people age 18 or older.
- **LB-038 — Confirmed:** Use Maryland governing law for beta Terms, with no mandatory arbitration and no class-action waiver. Legal implementation review remains required, including the Virginia-focus/DBA interaction.
- **LB-039 — Confirmed:** Operate lead response from 8:00 AM through 8:00 PM Eastern daily. After D-059, the five-minute in-hours and 9:00 AM next-day timings remain internal operating goals only; they are not customer-facing promises or firm launch-acceptance requirements.
- **LB-040 — Confirmed:** Use Alex as conditional backup only after `alex@paintswitch.com` is created and a controlled backup notification is received through the owner-approved route. Mailbox creation/access, both GoHighLevel branches, and routed receipt now pass. The owner-supplied 4:33 PM ET Outlook screenshot shows the Alex message received at 4:23 PM, and Email Analytics records it Delivered at 4:23 PM. This does not prove a human response rehearsal or complete operational activation; until those remaining conditions pass, the PaintSwitch owner remains the only operationally verified responder.
- **LB-041 — Confirmed:** Keep `hello@paintswitch.com` as the immediate primary internal destination for every accepted beta lead. Alex must not receive every lead and may receive only the backup/escalation internal alert defined by `LB-043` after `LB-040` activation conditions pass. Automated customer SMS remains off.
- **LB-042 — Confirmed:** Add a second internal `PaintSwitch Lead Intake` stage named `Contact Attempted`. `New Quote Request` remains the initial stage. Approved on 2026-08-05 under D-049; this supersedes the earlier Proposed status and the exactly-one-stage restriction in `PL-013`. Both stages are now externally verified in GoHighLevel.
- **LB-043 — Confirmed:** After an accepted lead enters `New Quote Request`, wait five minutes and alert Alex only if the Opportunity still remains in `New Quote Request`. If the lead has moved to `Contact Attempted`, do not alert Alex. Preserve the immediate every-lead `hello@paintswitch.com` notification and keep automated customer SMS off. Both synthetic branches and routed Alex receipt are externally verified. The current Alex action reuses the exact D-032-approved internal owner-notification subject/body; no new copy was invented or approved. Exact transition actor and acknowledgment procedure, any future distinct Alex wording, failure/retry behavior, operational activation, and response rehearsal remain **TBD** or unverified.
- **LB-044 — Confirmed:** Do not publish a five-minute, 9:00 a.m., or other exact human-response promise. Public website and chatbot copy may say that PaintSwitch reviews requests and follows up as soon as reasonably possible, but it must disclose that contact, review, acceptance, availability, scheduling, and booking are not guaranteed within a specific timeframe. D-049's five-minute Alex branch remains internal.

The beta CRM foundation is governed by `PL-012` through `PL-016` and `PL-021`. Protected Preview evidence verifies secure server-side delivery, owner-confirmed hello receipt, one retained-submission recovery, and the hosted rate threshold. `LB-041` through `LB-043` confirm the escalation policy, second stage, and five-minute condition; external evidence verifies both stages, both branch outcomes, no customer action, and routed Alex receipt. Professional/legal review, `LB-034`/`LB-035` rehearsal, `LB-006` Production acceptance, hosted concurrency, notification-action failure recovery, human-response rehearsal, and operational-backup activation remain incomplete.

## Launch operating platform

- **PL-001 — Confirmed:** Use GoHighLevel as PaintSwitch's launch backbone or operating engine. Approved on 2026-07-18.
- **PL-002 — Confirmed:** Use GoHighLevel for the intended CRM function.
- **PL-003 — Confirmed:** Use GoHighLevel for the intended SMS function.
- **PL-004 — Confirmed:** Use GoHighLevel for the intended email function.
- **PL-005 — Confirmed:** Use GoHighLevel for the intended AI-chat function.
- **PL-022 — Confirmed:** Use GoHighLevel Conversation AI with a Prompt Based bot started from scratch. Approved on 2026-08-06. This confirms the provider and bot type, not the model, prompt, architecture, data handling, interface, actions, or production activation.
- **PL-023 — Confirmed:** Activate HighLevel Starter at $97 per month and start the 30-day AI Employee Unlimited trial with authorization to renew at an additional $97 per month after the trial. Approved on 2026-08-06. This commercial decision does not activate or approve unrelated modules.
- **PL-024 — Confirmed:** Use OpenAI GPT-4.1 for the current Prompt Based bot and constrain its first version to the D-052 safety-first prompt-only scope. Model and scope approval alone do not approve an embed or activation; D-053 separately approves only the bounded homepage owner-test conditions.
- **PL-025 — Confirmed:** Under D-053, expose only the exact HighLevel Live Chat widget on the homepage for bounded owner/live testing while ads and promotion remain off. Under D-054, use `Switch bot` as the bot and visible widget name while preserving explicit AI disclosure. Apply the approved disclosure, channel, feature, reply-limit, delay, sleep, handoff, summary/export, retention, manual-deletion, and two-kill-switch rules. The bot remains Off until the controlled test; this owner-test approval does not authorize promoted traffic, additional channels or actions, instant pricing, checkout, booking, or payments.
- **PL-006 — Confirmed:** Use GoHighLevel for the intended automation function.
- **PL-007 — Confirmed:** Use GoHighLevel for the intended calendar-booking function.
- **PL-008 — Confirmed:** Use GoHighLevel for the intended pipeline function.
- **PL-009 — Confirmed:** Use GoHighLevel for the intended reviews function.
- **PL-010 — Confirmed:** Use GoHighLevel for the intended payment-workflow function.
- **PL-011 — TBD:** Approve or supply remaining notification-action failure handling, payment-processor configuration, post-beta enabled modules, operating ownership not already assigned, domain-warmup completion and raw-header authentication acceptance, customer-facing sender identity, exact A2P legal-business/DBA and authorized-representative facts, and release phasing. `LB-026`, `LB-029`, and `LB-030` confirm the notification destination, internal sender, and publication of the exact workflow. Dedicated sender configuration, live SPF/DMARC/MX lookup, post-configuration row-level hello/Alex delivery, routed Alex receipt, and PaintSwitch-only Business Profile values are externally verified. Protected Preview evidence now includes one retained-submission application recovery with one successful notification action, but notification-action failure recovery and Production website-to-CRM notification remain unverified. The private integration, server-only GHL and Upstash configuration, field creation, APIs, mappings, and D-030 safeguards are implemented under `LB-020` and `PL-018` through `PL-020`; hosted fail-closed/recovery and the five-request threshold/next-request `429` are verified, while hosted concurrency, actual expiration, Production promotion, and Production provider acceptance remain incomplete. D-033 confirms Vercel Pro; D-035 confirms the internal/legal DBA direction but does not verify a filing, exact registrant facts, licensing, or A2P acceptance.
- **PL-012 — Confirmed:** Use a dedicated GoHighLevel pipeline named `PaintSwitch Lead Intake`. Approved on 2026-08-02.
- **PL-013 — Superseded:** The 2026-08-02 exactly-one-stage rule is superseded by D-049 and `PL-021`. `New Quote Request` remains the confirmed initial stage.
- **PL-014 — Confirmed:** Configure `Service Type` as an Opportunity single-select dropdown with Interior, Exterior, Cabinet, and Commercial; `Project Description` as an Opportunity multi-line field; and `Contact Preference` as a Contact single-select dropdown with Call, Text, and Email. Approved on 2026-08-02.
- **PL-015 — Confirmed:** Leave existing GoHighLevel sample/demo data untouched. Approved on 2026-08-02.
- **PL-016 — Confirmed:** Keep automated customer SMS disabled for the beta under D-042. A `Text` contact preference is not automated-SMS consent. Any later SMS activation requires the separate, optional, unchecked opt-in and all D-027 safeguards. Voice AI also remains disabled and outside the beta unless separately approved and operationally ready.
- **PL-017 — Confirmed:** Use `hello@paintswitch.com` as the primary PaintSwitch domain mailbox. GoDaddy administration externally verifies that the account exists. Owner-supplied screenshot evidence dated 2026-08-04 confirms receipt of the corrected controlled test with visible sender name `PaintSwitch`, PaintSwitch-only routing, no Jen identity, and the approved subject/body. Protected Preview evidence includes successful workflow actions and owner-confirmed receipt of the earlier website-triggered notification. Dedicated sender DNS configuration, live SPF/DMARC/MX lookup, post-configuration row-level hello/Alex delivery, routed Alex receipt, and PaintSwitch-only Business Profile values are externally verified. Domain-warmup completion, raw-header authentication proof, notification-action failure recovery, human-response operation, and Production end-to-end acceptance remain unverified.
- **PL-018 — Confirmed:** Create a GoHighLevel private integration for the Paint Switch location and store its token only as a secure server-side Vercel environment secret. Configure least-required beta permissions, secret naming, rotation, mappings, and verification within this approved boundary.
- **PL-019 — Confirmed:** Use free Upstash Redis as the durable server-side duplicate/idempotency store for beta lead delivery. Apply the D-030 30-day TTL to technical idempotency/delivery-state records, and implement and verify key, TTL, atomicity, failure, reconciliation, limits, and monitoring behavior within this approved boundary. Broader CRM/business/customer-data retention and deletion remain TBD.
- **PL-020 — Confirmed:** Add GoHighLevel Opportunity fields named `Project Location`, `Website Submission ID`, `Campaign Source`, and `Campaign Name`. Select and verify field types, settings, normalization, and mappings consistent with each approved field purpose.
- **PL-021 — Confirmed:** Configure `PaintSwitch Lead Intake` with two internal stages: initial stage `New Quote Request` and second stage `Contact Attempted`. Approved on 2026-08-05 under D-049. Both stages, the Saved/published five-minute workflow, both synthetic branches, and routed Alex receipt are externally verified; human-response rehearsal and operational activation remain unverified.

The confirmed GoHighLevel selection, CRM foundation, and server-side connection boundary do not by themselves prove Production operation. The exact `PaintSwitch Website Lead - Owner Notification` workflow is published and remains verified with its approved trigger and content. The earlier protected Preview verified all seven intake fields, exact mappings, attribution, on-page confirmation, one completed Upstash state, one successful notification action, and owner-confirmed receipt. **Additional hosted evidence — 2026-08-05:** Application commit `beb6781` passed GitHub `Verify` and reached Vercel `Ready`. The hosted form failed closed, retained one synthetic submission, and recovered that same submission exactly once after delivery was enabled, creating one Contact, one Opportunity, and one internal notification action marked `Success`. Preview delivery was restored to disabled and the disabled verification created no duplicate. A hosted limiter check capped the counter at five and returned `429` for the next valid request. Dedicated sending-domain, live DNS, and PaintSwitch-only Business Profile configuration were later verified externally. A second post-configuration synthetic Opportunity produced row-level Delivered records to hello at 9:31 PM and Alex at 9:36 PM plus Alex inbox receipt. This evidence does not prove domain-warmup completion, raw-header authentication results, hosted concurrency, notification-action failure recovery, actual expiration, privacy/retention operating rehearsal, professional/legal review, payment processing, human response, or Production acceptance.

## Brand, visual, and governance requirements

- **VI-001 — Confirmed:** Follow the owner-preferred first HTML example's logo direction: a paint roller with paint behind it. Approved on 2026-07-18.
- **VI-002 — Confirmed:** Use the exact attached stacked PaintSwitch production-logo package and path-only 915×524 master vector as the final production logo, preserving its artwork and exact navy `#012765` and cobalt `#0658FE`. Approved on 2026-08-11 under D-060. Do not retrace, recolor, recompose, or substitute a font-rendered approximation.
- **VI-003 — Confirmed:** Use a sophisticated, confident, editorial tone. Demonstrate expertise through intentional choices rather than trends, and avoid anything cute or condescending. Approved on 2026-08-09. This direction must remain compatible with PaintSwitch's confirmed mid-market, convenience-first, technology-first, mainstream positioning rather than imply inherited luxury positioning.
- **VI-004 — Confirmed:** Retain the owner-approved warm greige/soft-taupe base candidates `#D1C4B8` and `#C9BDAD`, warm charcoal `#3D4E4E`, and soft cream `#F5F1E8`. Approved on 2026-08-09 under D-056. D-060 supersedes only the former deep-teal primary-interactive-accent assignment; an exact warm-gold value remains **TBD**.
- **VI-005 — Confirmed:** Center the design message on “Transformation through color” and use before/after stories to show the power of expert color choices and quality craftsmanship. Approved on 2026-08-09. Any story presented as PaintSwitch customer work must use authentic, permissioned project facts and assets; generated or conceptual imagery must be clearly identified as an illustrative color study. Exact project selections, captions, supporting copy, and production assets remain **TBD**.
- **VI-006 — Superseded:** The exact 2026-08-09 beta-candidate bundle included an interim text-only wordmark and prior token assignments. D-060 supersedes those two parts while preserving D-058's layout, Georgia/system typography, warm-neutral base, clearly labeled illustrative hero, and historical Preview evidence.
- **VI-007 — Confirmed:** Replace customer-facing interim site wordmarks with VI-002's exact production logo; align website buttons and interactive accents with navy `#012765` and cobalt `#0658FE`; and retain the approved warm greige/taupe/soft-cream editorial base. Approved on 2026-08-11 under D-060. Use a light surface behind the full-color logo where needed for contrast instead of recoloring it.
- **VI-008 — TBD:** Decide any derivative roller-only mark, favicon/app icon, social crop/card, reverse or one-color version, exact clear-space/minimum-size rules, responsive placement rules beyond the verified website implementation, and broader off-site usage rules.
- **VI-009 — Confirmed:** Publish the complete D-058/D-060 editorial website to `https://paintswitch.com` for live owner visual review. Approved on 2026-08-13 and reaffirmed on 2026-08-14 under D-061. This publication requirement does not authorize promoted traffic, enable Production lead delivery, approve unresolved copy/assets, or waive remaining launch acceptance.
- **GV-002 — Confirmed:** Timebox launch stand-ups to 10 minutes, not 30 minutes. Approved on 2026-07-18.
- **GV-003 — TBD:** Decide stand-up frequency, participants, facilitator, schedule, and escalation format.

## Product lanes

| Lane | Status | Required outcome |
| --- | --- | --- |
| Qualifying standard residential interior | **Confirmed** | Operational V1: instant firm price and checkout, with online booking. |
| Complex residential interior | **Confirmed** | Photo review before a firm price; intake mechanism is **TBD**. |
| Exterior painting | **Confirmed** | Custom consultation; no unsupported instant firm price. |
| Cabinet painting | **Confirmed** | Custom consultation; no unsupported instant firm price. |
| Commercial painting | **Confirmed** | Custom consultation; no unsupported instant firm price. |

## Customer personas

The following personas are **Proposed** interpretations of the confirmed product lanes and require approval before they are used to make scope or messaging decisions.

### Convenience-oriented residential customer

- **Proposed:** A homeowner or residential decision-maker with one or more standard interior rooms who values speed, clarity, and completing the purchase online.
- Needs: understandable inputs, a trustworthy firm price, a low-friction path, and a clear booking outcome.

### Residential customer with a complex interior

- **Proposed:** A homeowner or residential decision-maker whose project includes oversized rooms or other conditions that prevent safe instant pricing.
- Needs: a simple explanation of why review is required, a convenient way to provide evidence, and a clear next step after review.

### Exterior or cabinet customer

- **Proposed:** A residential customer seeking exterior or cabinet painting, where project conditions require custom consultation.
- Needs: concise intake, appropriate expectation-setting, and a dependable consultation path.

### Commercial buyer

- **Proposed:** A business or organizational decision-maker seeking commercial painting.
- Needs: consultation-based scoping and a path that does not misrepresent an automated price as firm.

## Lead-generation beta journey

1. **Confirmed:** The customer sees PaintSwitch as a standalone DMV painting brand offering interior, exterior, cabinet, and commercial painting, with Virginia prioritized for the public beta without an unapproved Virginia-only service claim.
2. **Confirmed:** The customer selects “Request a Quote” and reaches a custom branded PaintSwitch intake.
3. **Confirmed:** The form collects the LB-005 fields and discloses that service availability and pricing are confirmed after review.
4. **Confirmed:** Valid input reaches the verified GoHighLevel CRM pipeline once as the business outcome, with basic source/campaign attribution through a secure server-side connection. The implementation must use at-most-one automatic Opportunity creation plus durable reconciliation and must not claim a strict cross-provider exactly-once guarantee.
5. **Confirmed:** The owner receives the approved internal notification at `hello@paintswitch.com` as primary lead owner.
6. **Confirmed:** The customer sees an immediate accurate on-page confirmation. Automated customer SMS is off for the beta, and selecting `Text` as a contact preference does not authorize an automated SMS. A failed lead delivery produces an approved recoverable next step.
7. **Confirmed:** Lead response operates from 8:00 AM through 8:00 PM Eastern daily. The five-minute/next-morning timing is an internal goal only; public copy promises no exact response time and says follow-up occurs as soon as reasonably possible.
8. **Confirmed:** The beta does not display an instant price, collect payment, enable checkout, or promise customer-selected scheduling. Under D-059, the safeguarded `Switch bot` is part of the intended full-design launch after its acceptance gates pass, without expanding this sales boundary.
9. **TBD:** Production notification-action failure handling, domain-warmup completion and raw-header authentication acceptance, exact A2P facts for later SMS, professional/legal verification, retention outside `LB-034`, and Production end-to-end verification. Destination, From values, publication, immediate hello delivery, both D-049 branches, post-configuration row-level hello/Alex delivery, routed Alex receipt, dedicated sender/live DNS configuration, and PaintSwitch-only Business Profile values are externally verified. Exact transition ownership/acknowledgment, operational backup activation, and human-response rehearsal remain open. Hosted concurrency, actual expiration, privacy/retention rehearsal, professional/legal review, and Production acceptance remain pending.

## Standard-interior instant-quote journey

1. **Confirmed:** The customer identifies the project as residential interior painting.
2. **Confirmed:** The product collects room-by-room information.
3. **Confirmed:** For every room, square footage is calculated as length multiplied by width and assigned to the approved Small, Medium, Large, or Oversized tier.
4. **Confirmed:** The product collects applicable quote inputs: room type and size, walls, ceilings, baseboards/trim/crown, doors, closets, ceiling height, repairs, color changes, and occupied/furniture level.
5. **Confirmed:** The product evaluates whether the project qualifies as a standard residential interior under approved eligibility rules.
6. **Confirmed:** A qualifying project can receive an instant firm price and proceed to checkout.
7. **Confirmed:** The project price includes one flat $125 fuel/materials adjustment exactly once.
8. **Confirmed:** The launch path includes online booking and is intended to close without a required pre-sale phone call.
9. **TBD:** Exact eligibility thresholds other than the approved room-size tiers.
10. **TBD:** Approved base prices, calculation formulas beyond room-by-room structure and the flat $125 adjustment, checkout terms, and the exact online-booking interaction.

## Photo-review journey

1. **Confirmed:** Oversized rooms require dimensions and photo review.
2. **Confirmed:** Other complex interiors require photo review before a firm price is offered.
3. **Proposed:** The customer uploads photos within the quote flow.
4. **TBD:** If in-product upload is not approved, the approved channel for collecting photos.
5. **TBD:** Review ownership, required photo views, turnaround time, customer notifications, and how reviewed pricing becomes firm.
6. **Confirmed:** Until the required review is complete, the product must not represent an automated amount as a firm price.

## Consultation journey

1. **Confirmed:** Exterior, cabinet, and commercial projects leave the instant firm-pricing path.
2. **Confirmed:** The product sets the expectation that custom consultation is required.
3. **TBD:** Consultation intake fields, consultation format, availability, ownership, service-level expectation, and follow-up process.
4. **Confirmed:** GoHighLevel provides the intended CRM and pipeline functions for the consultation path; exact configuration and field mapping remain **TBD**.
5. **Proposed:** Detailed customer-scheduling mechanics, automated follow-up, conversion behavior beyond approved beta attribution, and human handoff support the consultation path.
6. **Confirmed:** These project types must not proceed through standard-interior firm instant checkout without a later explicit decision changing eligibility.
7. **Confirmed:** Any final project price includes one flat $125 fuel/materials adjustment exactly once.

## Chatbot responsibilities and limits

The customer-facing chatbot is **Confirmed** from 2026-07-11. GoHighLevel Conversation AI, a Prompt Based bot started from scratch, OpenAI GPT-4.1, the D-052 safety-first prompt-only V1, and the D-053 bounded homepage owner-test configuration are **Confirmed** from 2026-08-06. D-054 dated 2026-08-08 confirms the current `Switch bot` name while preserving explicit AI disclosure. D-059 dated 2026-08-09 makes the safeguarded `Switch bot` part of the intended full-design launch by the weekend of 2026-08-15 through 2026-08-16, after its existing launch acceptance gates pass. The homepage-only integration is merged and live. A 2026-08-10 no-user-data Production test passed first-reply AI disclosure, approved service/paint facts, firm-price/booking refusal, and no-exact-response-time form/email handoff, then permanently deleted the exact synthetic conversation. Provider-internal architecture beyond the direct widget, knowledge sources beyond the approved prompt, detailed qualification, operating ownership/rehearsal, mobile/accessibility, both shutdown paths, exact cap/delay/sleep behavior, and broader reliability remain **TBD**, **Proposed**, or unverified as labeled.

The current prompt-only V1 has these **Confirmed** responsibilities and limits:

- **Confirmed:** Disclose in the first reply that the visitor is speaking with an AI assistant.
- **Confirmed:** Answer only from **Confirmed** PaintSwitch facts.
- **Confirmed:** Direct visitors to `Request a Quote` or human review when they need a quote, availability decision, project-specific help, or anything unsupported.
- **Confirmed:** Do not provide a price or pricing estimate, confirm project or service availability, book or schedule work, take or arrange payments, claim a lead or form was submitted, collect sensitive data, or discuss any relationship between PaintSwitch and another company.
- **Confirmed:** Display the widget identity as `Switch bot`. Its introduction and first generated assistant reply must explicitly disclose that Switch bot is PaintSwitch's AI assistant.
- **Confirmed:** Appear only through the exact HighLevel Live Chat widget on the homepage. Keep the chatbot contact form, voice notes, attachments, SMS, social channels, Voice AI, booking, payments, and all actions disabled.
- **Confirmed:** Allow no more than 10 bot replies per conversation, use a two-second reply delay, and sleep the bot whenever a manual message or workflow message is sent.
- **Confirmed:** Route human handoff only to the separate `Request a Quote` form or `hello@paintswitch.com`. Make no exact response-time promise, do not claim automatic transcript/context transfer, and do not imply that chat created a lead.
- **Confirmed:** Keep Conversation Summary off and do not export transcripts through a workflow.
- **Confirmed:** Treat chat messages for unconverted leads under D-039's up-to-12-month-after-last-meaningful-interaction schedule, with PaintSwitch responsible for manual deletion or anonymization. A fixed HighLevel active-account conversation-retention period remains unverified.
- **Confirmed:** Permit bounded owner testing on the live homepage while ads and active promotion remain off. Activation requires the HighLevel bot and `HIGHLEVEL_CHAT_WIDGET_ENABLED`; either being Off is a kill switch. Under D-059, move the same safeguarded bot into the intended launch only after bounded Production-response, mobile/accessibility, privacy, and both shutdown-path acceptance gates pass. The bounded Production-response cases passed on 2026-08-10; the other gates remain.

The following expanded responsibilities remain **Proposed**:

- **Proposed:** Explain the supported service categories and route customers to the correct lane.
- **Proposed:** Ask the approved quote questions in plain language and help customers complete room-by-room inputs.
- **Proposed:** Explain why a project requires photo review or consultation.
- **Proposed:** Preserve the customer's collected context when handing off to a human.

The proposed context-preserving handoff is not part of the D-053 owner-test scope. The current approved handoff is a direction to the separate form or mailbox with no automatic transcript or context transfer.

The chatbot must observe these **Confirmed** policy boundaries regardless of implementation:

- **Confirmed:** It must never invent, estimate, negotiate, or override a firm price.
- **Confirmed:** It must never treat **Proposed**, **TBD**, **Rejected**, **Superseded**, or **Historical/Needs verification** content as approved customer policy.
- **Confirmed:** It must never bypass eligibility, photo-review, or consultation rules.
- **Confirmed:** It must not make promises about scheduling, coverage, repairs, warranties, crew type, or paint specifications beyond confirmed policy.
- **Confirmed:** It must never connect PaintSwitch to Jen Contracting in customer-facing output.
- **Confirmed:** When information is missing, ambiguous, or unsupported, it must route the customer to the appropriate review or consultation path.

## Functional requirements

### Confirmed requirements

- **FR-001 — Confirmed:** Support separate journeys for standard residential interiors, complex interiors, exterior, cabinet, and commercial projects.
- **FR-002 — Confirmed:** Calculate interior pricing room by room.
- **FR-003 — Confirmed:** Calculate room area as length multiplied by width.
- **FR-004 — Confirmed:** Apply the approved size boundaries: Small at 120 sq ft or less; Medium at 121–200 sq ft; Large at 201–300 sq ft; Oversized above 300 sq ft.
- **FR-005 — Confirmed:** Require dimensions and photo review for an Oversized room.
- **FR-006 — Confirmed:** Collect room type and size, walls, ceilings, baseboards/trim/crown, doors, closets, ceiling height, repairs, color changes, and occupied/furniture level.
- **FR-007 — Confirmed:** Restrict instant firm pricing and checkout to qualifying standard residential interiors.
- **FR-008 — Confirmed:** Require photo review for complex interiors.
- **FR-009 — Confirmed:** Require custom consultation for exterior, cabinet, and commercial work.
- **FR-010 — Confirmed:** Support an online booking outcome for the approved launch model.
- **FR-011 — Confirmed:** Represent paint as supplied by PaintSwitch wherever supply responsibility is relevant.
- **FR-012 — Confirmed:** Keep all customer-facing PaintSwitch identity separate from Jen Contracting.
- **FR-013 — Confirmed:** Provide a customer-facing chatbot using the approved GoHighLevel Conversation AI Prompt Based approach, OpenAI GPT-4.1, the saved D-052 prompt, the bounded D-053 homepage owner-test configuration, and the D-054 `Switch bot` identity. Do not expand beyond the approved interface, channel, settings, handoff, retention, or activation boundary.
- **FR-014 — Confirmed:** Add one flat $125 fuel/materials adjustment exactly once to every project price.
- **FR-015 — Confirmed:** Use GoHighLevel as the launch backbone and CRM operating engine while requiring verification before treating configuration as live.
- **FR-016 — Confirmed:** Provide the approved lead-generation beta intake, durably controlled GoHighLevel delivery using at-most-one automatic Opportunity creation plus reconciliation, immediate primary notification to `hello@paintswitch.com`, the two-stage pipeline and five-minute conditional Alex escalation after activation, on-page result states, basic source attribution, public-domain behavior, delivery target, owner-time constraint, form/integration boundary, review-content rule, beta contact/SMS/privacy/retention/age/response policies, 30-day Upstash technical-record TTL, and client-IP rate limit defined by LB-001 through LB-044 and PL-018 through PL-021.
- **FR-017 — Superseded:** The former every-accepted-lead automatic-SMS requirement is replaced by `LB-025`; owner notification and on-page confirmation remain required.
- **FR-018 — Confirmed:** Expire Upstash technical idempotency/delivery-state records after 30 days without treating that technical TTL as approval for broader CRM/business/customer-data retention or deletion.
- **FR-019 — Confirmed:** Prevent the beta lead-intake path from accepting more than five lead submissions from one client IP address in ten minutes.
- **FR-020 — Confirmed:** Limit website-lead data use to quote review and response, CRM, attribution, security, and duplicate prevention; do not sell it or share or use it for targeted advertising.
- **FR-021 — Confirmed:** Retain unconverted CRM leads for 12 months after the last interaction, then delete or anonymize them unless an active project, verified security matter, dispute, or legal need applies.
- **FR-022 — Confirmed:** Provide a route through `hello@paintswitch.com` for reasonably verified access, correction, and deletion requests.
- **FR-023 — Confirmed:** Treat quote submission as authorization for project-specific contact only, restrict the website and quote service to people age 18 or older, and keep automated customer SMS off for the beta.
- **FR-024 — Confirmed:** Support D-045 as an internal response goal and D-049 as the internal five-minute escalation. Alex mailbox access, exact routing behavior, GoHighLevel branch execution, and routed receipt pass. Do not publish the exact timing or claim guaranteed human-response readiness.
- **FR-025 — Confirmed:** Prioritize Virginia in public beta operation without asserting an unapproved Virginia-only boundary, and preserve PaintSwitch-only customer-facing identity despite the internal/legal Virginia DBA direction.
- **FR-026 — Confirmed:** Implement the current chatbot only as the D-052 prompt-only V1: first-reply AI disclosure, **Confirmed**-facts-only answers, and `Request a Quote` or human-review direction, with no pricing estimate, availability confirmation, booking or scheduling, payment handling, lead-submission claim, sensitive-data collection, or other-company-relationship discussion. Keep the bot Off until the D-053 controlled owner-test conditions and runtime gates are satisfied.
- **FR-027 — Confirmed:** Load the exact HighLevel Live Chat widget only on the homepage and only when `HIGHLEVEL_CHAT_WIDGET_ENABLED=true`; keep the HighLevel bot Off until the bounded owner test begins.
- **FR-028 — Confirmed:** Identify the bot and widget visibly as `Switch bot`; identify Switch bot as PaintSwitch's AI assistant in the widget introduction and first generated assistant reply.
- **FR-029 — Confirmed:** Restrict the owner-test bot to the exact Live Chat channel/widget. Disable the chatbot contact form, voice notes, attachments, SMS, social channels, Voice AI, booking, payments, and all actions.
- **FR-030 — Confirmed:** Limit the bot to 10 replies per conversation, apply a two-second delay, and sleep it after a manual or workflow message.
- **FR-031 — Confirmed:** Direct visitors needing human help to the separate `Request a Quote` form or `hello@paintswitch.com`, without promising an exact response time or automatically transferring chat transcript or context.
- **FR-032 — Confirmed:** Keep Conversation Summary off, export no transcript through workflows, and manually delete or anonymize unconverted-lead chat messages under the up-to-12-month D-039 schedule. Do not claim that HighLevel itself enforces a fixed retention period until verified.
- **FR-033 — Confirmed:** Keep ads and active promotion off during bounded live owner testing. The D-053 owner-test exposure is optional for the lead-generation beta and does not activate or approve instant pricing, checkout, payment, booking, SMS, social, Voice AI, or chatbot actions.
- **FR-034 — Confirmed:** Remove exact human-response timing from public website and chatbot copy and prevent the five-minute or 9:00 a.m. promise from returning. Use only non-guaranteed follow-up wording consistent with `LB-044`.
- **FR-035 — Confirmed:** Prepare the full D-058 editorial design and safeguarded `Switch bot` for launch by the weekend of 2026-08-15 through 2026-08-16. Preserve every D-052 through D-054 safeguard and require the remaining hosted launch checks rather than bypassing them for the date.

### Proposed capabilities

- **FR-P01 — Proposed:** Use the confirmed customer-facing chatbot to guide the quote flow.
- **FR-P02 — Proposed:** Accept photo uploads during quoting.
- **FR-P03 — Proposed:** Let customers select scheduling options directly.
- **FR-P04 — Proposed:** Collect a deposit during checkout.
- **FR-P05 — Proposed:** Send automated follow-up.
- **FR-P07 — Proposed:** Track detailed conversion events beyond the basic beta lead-source and campaign attribution confirmed by D-018.
- **FR-P08 — Proposed:** Provide a context-preserving human handoff.

## Nonfunctional requirements

These requirements carry individual statuses; safety requirements already implied by confirmed pricing and routing rules are labeled **Confirmed**:

- **NFR-001 — Proposed:** The quote experience should work across current mobile and desktop screen sizes.
- **NFR-002 — Proposed:** Customer-facing flows should meet WCAG 2.2 AA accessibility expectations.
- **NFR-003 — Proposed:** Pricing calculations should be deterministic, testable, and versioned so the inputs and approved rule set behind a price can be reconstructed.
- **NFR-004 — Confirmed:** Eligibility should fail closed: errors or missing data route away from unsupported firm pricing.
- **NFR-005 — Proposed:** Sensitive customer and project data should be collected only when needed and protected in transit and at rest.
- **NFR-006 — Confirmed:** The product must clearly distinguish a firm price from an estimate, pending review, or consultation request.
- **NFR-007 — Proposed:** Quote, checkout, and booking failures should preserve customer-entered information where safely possible and present a recoverable next step.
- **NFR-008 — Proposed:** Operational events needed for conversion measurement should avoid exposing sensitive customer data.
- **NFR-009 — Confirmed:** Accept the currently documented low-reachability PostCSS/Sharp residual dependency risk for the beta with upstream monitoring and architecture-triggered reassessment; never use an automatic force fix, incompatible override, or downgrade.

## Acceptance criteria

- **AC-001 — Confirmed:** No customer-facing screen, message, metadata, or generated content identifies PaintSwitch as connected to, shared with, or powered by Jen Contracting.
- **AC-002 — Confirmed:** Interior, exterior, cabinet, and commercial painting are represented as PaintSwitch service categories; any additional marketed category requires resolution if it changes approved scope.
- **AC-003 — Confirmed:** A 120 sq ft room is Small, 121 sq ft is Medium, 200 sq ft is Medium, 201 sq ft is Large, 300 sq ft is Large, and any value above 300 sq ft is Oversized.
- **AC-004 — Confirmed:** An Oversized room cannot receive an unsupported automated firm price and is routed to dimensions plus photo review.
- **AC-005 — Confirmed:** Required room-level quote inputs can be captured for every room in a multi-room project.
- **AC-006 — Confirmed:** Exterior, cabinet, and commercial projects cannot enter the standard-interior firm instant-checkout path.
- **AC-007 — Confirmed:** A complex interior cannot receive a firm price until required photo review is complete.
- **AC-008 — Confirmed:** A qualifying standard residential interior can progress from quote inputs to a firm price, checkout, and online booking without a required phone call.
- **AC-009 — Confirmed:** No exact ceiling surcharge or tier is applied until explicitly approved.
- **AC-010 — Confirmed:** No unapproved room price, minimum, deposit, package, coat rule, repair allowance, multiplier, or travel adjustment is presented as live pricing.
- **AC-011 — Confirmed:** Paint supply responsibility is stated consistently with PaintSwitch supplying the paint wherever that responsibility is shown.
- **AC-012 — Confirmed:** A production customer-facing chatbot is available according to approved launch phasing and cannot violate confirmed brand, pricing, eligibility, review, or consultation rules.
- **AC-013 — Confirmed:** Every project price includes one—and only one—flat $125 fuel/materials adjustment; it is not substituted for or combined with an unapproved travel-zone adjustment.
- **AC-014 — Confirmed:** A professional standalone PaintSwitch website is reachable at its approved production location and passes launch QA for the release in which it is phased.
- **AC-015 — Confirmed:** A customer can submit a quote request and receive an approved acknowledgment; delivery uses at-most-one automatic Opportunity creation plus reconciliation so retries do not create duplicate Opportunities and recoverable ambiguity is not silently discarded.
- **AC-016 — Confirmed:** An approved AI assistant can qualify a test lead without inventing policy or bypassing required review, consultation, or human escalation.
- **AC-017 — Confirmed:** A test proposal can be issued and a test booking can be completed under approved workflows.
- **AC-018 — Confirmed:** An approved test payment can be collected, confirmed, reconciled, and handled through approved failure/refund rules.
- **AC-019 — Confirmed:** Approved marketing activity can be attributed to measurable test traffic and leads under approved privacy and consent rules.
- **AC-020 — Confirmed:** Operations can accept, schedule, staff, supply, execute, quality-check, and close a rehearsed first-project scenario.
- **AC-021 — Confirmed:** Any implementation claiming GoHighLevel integration identifies the verified account, enabled module, workflow, field mapping, owner, and test evidence without exposing credentials.
- **AC-022 — Confirmed:** A beta test lead containing every LB-005 field reaches the verified GoHighLevel pipeline through the at-most-one automatic-create and reconciliation path, notifies the owner, preserves approved source attribution, and produces an on-page confirmation.
- **AC-023 — Confirmed:** A failed or rejected beta submission does not falsely claim success and gives the customer an approved recoverable next step without exposing sensitive implementation details.
- **AC-024 — Confirmed:** Beta copy uses “Request a Quote,” identifies the four approved painting categories, treats availability and pricing as pending review, and contains no instant-price, payment, checkout, customer-selected-scheduling, or standalone-Drywall promises.
- **AC-025 — Superseded:** The former every-lead automatic-SMS acceptance rule was superseded by D-027 and `AC-039`.
- **AC-026 — Confirmed:** The production beta remains reachable at the verified Vercel location; absence of a custom domain does not fail beta acceptance.
- **AC-027 — Confirmed:** The production site is reachable over HTTPS at `paintswitch.com`, `www.paintswitch.com` permanently redirects to the apex domain, and the site remains hosted by the approved Vercel project.
- **AC-028 — Superseded:** The former exactly-one-stage acceptance rule is superseded by D-049 and `AC-053`. Its field, sample/demo-data, SMS-disabled, and Voice-AI-disabled portions remain covered by current requirements.
- **AC-029 — Confirmed:** `hello@paintswitch.com` is created under the PaintSwitch domain, uses an approved standalone PaintSwitch identity, and passes inbound and outbound message tests before customer-facing use.
- **AC-030 — Confirmed:** The full-design beta with safeguarded `Switch bot` is managed toward the weekend of 2026-08-15 through 2026-08-16, but is released only if every applicable launch gate passes; otherwise the unmet gate and revised plan are reported without weakening the requirement.
- **AC-031 — Confirmed:** The delivery record shows that required owner participation does not exceed 60 minutes on any calendar day.
- **AC-032 — Confirmed:** Every public “Request a Quote” action reaches a custom branded PaintSwitch form that contains the approved fields, disclosures, validation, and result states.
- **AC-033 — Confirmed:** Browser inspection and a production-safe delivery test show that the form reaches GoHighLevel through a server-side path with at-most-one automatic Opportunity creation plus reconciliation and exposes no GoHighLevel credential or secret in customer-delivered code.
- **AC-034 — Confirmed:** No placeholder, fabricated, or unpermissioned review is present in the beta; any restored review has retained verification and permission evidence.
- **AC-035 — Superseded:** D-027 approved beta launch with SMS disabled while A2P is pending; `AC-039` is current.
- **AC-036 — Confirmed:** A production-safe test proves the server uses the approved GoHighLevel private integration through a Vercel server-side secret and exposes no token in tracked source, browser-delivered code, responses, or public logs.
- **AC-037 — Confirmed:** Retry and concurrency tests prove the approved Upstash-backed submission ID creates at most one GoHighLevel opportunity while recoverable provider failures do not silently discard a legitimate accepted lead.
- **AC-038 — Confirmed:** The GoHighLevel Opportunity contains `Project Location`, `Website Submission ID`, `Campaign Source`, and `Campaign Name`, and a production-safe test populates each field from the approved input or attribution source.
- **AC-039 — Confirmed:** The SMS opt-in is separate, optional, and unchecked by default; declining it does not block submission; every accepted lead sees one accurate on-page confirmation; only explicit opt-ins receive automatic SMS when enabled; and the beta sends no SMS without claiming otherwise when SMS is disabled pending A2P.
- **AC-040 — Confirmed:** The beta launch record notes the scoped residual dependency-risk acceptance, retains current audit and reachability evidence, monitors for a compatible upstream patch, and requires reassessment if architecture changes increase exposure.
- **AC-041 — Confirmed:** After `hello@paintswitch.com` is provisioned and tested, a production-safe lead proves that the configured workflow sends one accurate owner notification to that address, exposes notification failure for recovery, and never routes the notification to `hell@paintswitch.com`. The owner-confirmed protected-Preview receipt satisfies only the successful-receipt portion. On 2026-08-05, Email Analytics showed one earlier `hello@paintswitch.com` record as `Failed` at 11:38 AM even though the nearby workflow action reported `Success`; this demonstrates that action status alone is not delivery acceptance and leaves failure recovery and Production evidence required. Dedicated sender and live DNS configuration are verified. A second post-configuration synthetic Opportunity produced row-level Delivered records to hello at 9:31 PM and Alex at 9:36 PM, with Alex inbox receipt. That closes the synthetic row-level and routed-receipt gap, not raw-header authentication, the historical failure's recovery path, or Production acceptance.
- **AC-042 — Confirmed:** Automated and provider-safe verification proves that every Upstash technical idempotency/delivery-state record receives a 30-day TTL and expires as required; no test may claim or impose the same retention period on broader CRM/business/customer data without a separate confirmed decision.
- **AC-043 — Confirmed:** Automated and production-safe verification proves that a client IP address can submit no more than five beta lead submissions in ten minutes, an over-limit submission makes no GoHighLevel delivery attempt and receives a generic recoverable response, and the control does not expose the client IP or internal limiter details.
- **AC-044 — Confirmed:** The saved internal owner-notification Email action uses From name `PaintSwitch` and From email `hello@paintswitch.com`, and a controlled received-message test verifies the actual inbox sender line contains no Jen Contracting-linked identity before workflow publication. A GoHighLevel UI test-send completion without owner-confirmed receipt does not satisfy this criterion.
- **AC-045 — Confirmed:** After owner approval, the exact `PaintSwitch Website Lead - Owner Notification` workflow remains Saved with its publish switch checked after reload and retains the approved trigger filter, recipient, From values, subject, and body. This publication evidence does not substitute for AC-041's trigger, delivery, failure-recovery, or end-to-end test.
- **AC-046 — Confirmed:** Published beta Privacy and Terms content accurately states the approved lead-data purposes, no-sale/no-targeted-ad rule, 12-month unconverted-lead rule and exceptions, privacy-request channel and reasonable-verification condition, age restriction, project-specific contact authorization, automated-SMS-off rule, Maryland governing law, and absence of mandatory arbitration and a class-action waiver.
- **AC-047 — Confirmed:** Quote-intake inspection proves that selecting `Text` is treated only as a contact preference, submission authorizes only project-specific contact, no automated customer SMS is sent or promised in beta, and unrelated marketing consent is not inferred.
- **AC-048 — Confirmed:** The beta website and quote service accurately communicate and enforce the approved 18-or-older restriction without inventing an unapproved identity-verification method.
- **AC-049 — Confirmed:** Operating evidence can measure the internal five-minute/next-morning goal, but D-059 removes exact timing from customer-facing promises and firm launch acceptance. Alex receives no backup routing until `alex@paintswitch.com` exists and a controlled backup notification is received through the owner-approved route; a self-addressed mailbox test alone does not satisfy this acceptance criterion.
- **AC-050 — Confirmed:** Public beta inspection shows DMV intake and Virginia priority without claiming an unapproved Virginia-only or exact service boundary, and no customer-facing page, message, sender, or metadata exposes the internal/legal Jen Contracting DBA relationship. Local source and content-contract tests satisfy the copy/no-Jen portion; Production inspection remains required.
- **AC-051 — Confirmed:** Deployment records show the commercial beta runs on the owner-confirmed Vercel Pro plan; the plan decision does not substitute for Production promotion, rollback, monitoring, or end-to-end QA.
- **AC-052 — Confirmed:** A production-safe routing test proves every accepted beta lead immediately notifies `hello@paintswitch.com`; after five minutes, an Opportunity still in `New Quote Request` produces one internal Alex alert; an Opportunity moved to `Contact Attempted` produces no Alex alert; and no automated customer SMS is sent. External synthetic executions plus Outlook and Email Analytics satisfy branch logic, no-customer-action, and routed-receipt portions, including post-configuration row-level hello delivery at 9:31 PM and Alex delivery/receipt at 9:36 PM. Failure handling, operational activation, human-response rehearsal, and Production acceptance remain required.
- **AC-053 — Confirmed:** GoHighLevel inspection proves `PaintSwitch Lead Intake` contains the initial `New Quote Request` stage and second `Contact Attempted` stage, new accepted website leads enter `New Quote Request`, and an authorized human can move a controlled lead to `Contact Attempted` without changing customer-facing status or sending customer SMS. The two-stage inspection, earlier website-lead initial placement, handled synthetic transition, and no-SMS execution evidence satisfy this criterion.
- **AC-054 — Confirmed:** Before activation, controlled chatbot tests prove that the first reply discloses AI, every factual answer is supported by **Confirmed** PaintSwitch content, quote and unsupported requests are directed to `Request a Quote` or human review, and adversarial prompts cannot cause pricing estimates, availability confirmation, booking or scheduling, payment handling, lead-submission claims, sensitive-data collection, or discussion of PaintSwitch's relationship with another company. Four provider-panel scenarios pass; D-053 governs the separate bounded owner-test activation and runtime acceptance.
- **AC-055 — Confirmed:** Source inspection and browser checks prove the public widget ID loads only on `/`, only when `HIGHLEVEL_CHAT_WIDGET_ENABLED=true`, through exact LeadConnector origins, and not on Privacy, Terms, API, or not-found routes. With the flag false, no widget script or chat UI is delivered.
- **AC-056 — Confirmed:** Live owner-test inspection proves the widget is titled `Switch bot`, its introduction explicitly identifies Switch bot as PaintSwitch's AI assistant, and the first generated assistant reply independently uses the same name and AI disclosure.
- **AC-057 — Confirmed:** HighLevel configuration and live browser inspection prove only the exact Live Chat widget/channel is active and that contact form, voice notes, attachments, SMS, social channels, Voice AI, booking, payments, and actions are disabled.
- **AC-058 — Confirmed:** Controlled conversations prove the two-second delay, no more than 10 bot replies, and sleep behavior after either a manual or workflow message.
- **AC-059 — Confirmed:** A handoff test directs the visitor only to the separate `Request a Quote` form or `hello@paintswitch.com`, makes no exact response-time promise, creates no automatic Contact, Opportunity, booking, payment, or transcript/context transfer, and does not claim that chat submitted a lead.
- **AC-060 — Confirmed:** Configuration inspection shows Conversation Summary off and no transcript-export workflow. A synthetic conversation is reviewed and manually deleted or anonymized under the up-to-12-month schedule with minimal evidence; the record must not claim that a fixed HighLevel active-account retention period is verified.
- **AC-061 — Confirmed:** Before owner testing, local, protected Preview, and Production-safe checks pass with ads/promotion off. The bot and website flag are each demonstrated as independent kill switches, Production begins with the bot Off until the controlled test, and disabling either removes customer replies or the widget without affecting the quote form.

**GoHighLevel two-stage escalation evidence — 2026-08-05:** The Saved/published workflow is Opportunity Created → immediate hello internal email → exact five-minute Wait → condition. `Still New` runs `Escalate to Alex - still New Quote Request` to Alex; `Contact Attempted` ends without Alex. The Alex action reuses exact D-032-approved wording. Unhandled enrolled 4:18:14, Wait finished 4:23:15, `Still New` and Alex `Success` occurred 4:23:16, and finished 4:23:18. Handled enrolled 4:20:40, moved before cutoff, hello `Success` occurred 4:20:41, Wait finished 4:25:41, `Contact Attempted` executed 4:25:42, and finished 4:25:43 with no Alex action. No customer action ran. The 4:33 PM ET Outlook screenshot shows Alex received sender `PaintSwitch`, subject `New PaintSwitch website lead`, at 4:23 PM; Email Analytics records Alex Delivered at 4:23 PM and hello Delivered at 4:18 PM and 4:20 PM. Human response remains untested.

**Dedicated sender and post-configuration evidence — 2026-08-05:** GoHighLevel dedicated sending subdomain `mg.paintswitch.com` is enabled with SPF, DKIM, CNAME, MX, and DMARC DNS records configured through GoDaddy; live DNS returned the Mailgun MX records, SPF authorizing LeadConnector and Mailgun, and DMARC monitoring policy. GoHighLevel displays Warmup In Progress at Stage 1, later at 0.1% with the counter reading “1 of 1,000 emails today,” Shared IP Active, and SSL Issued. Business Profile uses Friendly Business Name `PaintSwitch`, Business Email `hello@paintswitch.com`, and website `https://paintswitch.com`. One synthetic Opportunity triggered the hello action at 7:59:28 PM ET, was moved to `Contact Attempted`, and finished the handled branch at 8:04:29 PM with no Alex action; the stage move does not prove human contact. A second synthetic Opportunity created at 9:31 PM remained in `New Quote Request`; Email Analytics records immediate hello Delivered at 9:31 PM and conditional Alex Delivered at 9:36 PM, and signed-in Alex Outlook received the latter with the approved PaintSwitch envelope and content. Configuration, row-level synthetic delivery, delayed routing, and Alex receipt are verified; warmup completion, raw-header authentication results, the historical failure's recovery, human response, and Production acceptance remain open under `AC-041`, `AC-049`, and `AC-052`.

**Legal/privacy and release preflight — 2026-08-05:** Repository inspection found the implemented Privacy, Terms, age, contact, SMS-off, retention, data-use, vendor, and no-targeted-advertising disclosures substantially consistent with Confirmed requirements. This is not professional legal approval. Virginia's official assumed-name rule and SCC guidance require a fictitious-name filing before transacting business under an assumed name; the PaintSwitch filing and exact legal-disclosure treatment remain unverified under `LB-012`. The 12-month unconverted-lead operation and privacy-request procedure are documented but unrehearsed, provider access roles are not fully verified, and retention for notification email, provider logs, analytics, active/completed projects, and other record classes remains TBD. Candidate source/local smoke found no new P0 code defect, but Firefox/WebKit, screen-reader, monitoring/failure-alert, rollback-rehearsal, Production promotion, and Production E2E gates remain open. D-023's target date does not waive these gates.

**Controlled Preview implementation evidence — 2026-08-04:** Safeguarded commit `3bac3ba` was tested behind Vercel Require Log In / Standard Protection. Preview-only `LEAD_DELIVERY_ENABLED=true` enabled Ready deployment `CrJA8ve4qzNHneVLwEtkr5N15gJu` (`paintswitch-pp6wvxmih-paint-switch.vercel.app`) at 1:18:57 PM EDT while Production remained explicitly `false`. One browser submission from 1:19:53 through 1:19:57 PM contained every `LB-005` field, used campaign values `controlled_preview_test` / `website_e2e_2026_08_04`, and displayed exactly: “Your request was sent. A PaintSwitch team member will review the details and follow up.” Submission `a0c9e9cd-4e98-4f45-8c1f-16c9a31256ec` produced Contact `w1tEl1ktbKestabbkBr3` and open Opportunity `11u1dIja7oMJXS4srkPu` in `PaintSwitch Lead Intake` / `New Quote Request`; every approved Contact and Opportunity mapping was verified, including `Contact Preference = Email` and both attribution fields. Workflow execution `01KZ6WM16S7WTFPM40NTEA9381` enrolled once at 1:19:56 PM, reported the internal notification `Success` at 1:19:57 PM, finished, and performed no SMS/customer action.

**Safeguard and restoration evidence — 2026-08-04:** Upstash held a `completed` state with matching CRM IDs, a 64-hex-character payload hash, completion phase, version, and updated timestamp, but none of the raw submitted name, email, phone, location, service, description, or preference fields; 2,591,535 seconds of TTL remained and there was no remaining lock. One Preview rate counter had count `1` and 101 seconds of remaining TTL; the five-submission threshold was not tested. The Preview environment setting and latest branch Preview were restored to `false`, and fresh disabled deployment `6NrFmAef7vgP3dm9iuC11DBYEJ1d` (`paintswitch-7qbi2cue9-paint-switch.vercel.app`) was Ready at 1:26:34 PM EDT. Production was untouched and remained explicitly `false`; the enabled immutable unique URL remains access-protected.

**Protected Preview recovery and limiter evidence — 2026-08-05:** Application commit `beb6781` passed GitHub `Verify` and its Vercel Preview reached `Ready`. The hosted form failed closed and retained one synthetic submission. After Preview delivery was enabled, retrying that same submission completed exactly once, creating one Contact, one Opportunity, and one internal owner-notification action marked `Success`. Preview delivery was restored to disabled, and the disabled verification created no duplicate. A separate hosted limiter check held the counter at five and returned `429` for the next valid request. GoDaddy administration externally verified that both PaintSwitch-domain mailbox accounts exist.

**Alex mailbox and routed receipt evidence — 2026-08-05:** Microsoft MFA, direct Outlook access, and a 2:24 PM Eastern self-addressed message verify basic operation. The later mobile Outlook screenshot and Email Analytics verify routed Alex receipt at 4:23 PM. These do not verify human response or complete operational activation.

Together, the protected Preview evidence partially satisfies `AC-022`, `AC-023`, `AC-033`, `AC-036`, `AC-037`, `AC-038`, `AC-041`, `AC-042`, and `AC-043`. It directly verifies one application fail-closed/recovery case and the hosted rate threshold, but not hosted concurrency, notification-action failure recovery, actual 30-day expiration, or Production operation. Local Privacy/Terms pages and pre-submit disclosures partially satisfy `AC-046` through `AC-048`. Production end-to-end delivery, human-response timing under `AC-049`, privacy/retention operating rehearsal, professional/legal review, Production publication, and launch QA remain unverified.

Acceptance criteria that depend on unapproved pricing values, checkout terms, scheduling behavior, or integration choices remain **TBD**.

## Launch priorities

### Confirmed lead-generation beta first

Decisions D-018 through D-059 confirm the beta as the first release and define its ownership, contact and SMS boundaries, hosting and Pro plan, public domain, Virginia operating focus, internal/legal DBA direction with strict public separation, CRM foundation, private-integration/token boundary, Upstash idempotency, notification workflow, privacy and retention policy, internal response/escalation rules, design candidate, and current launch target. D-059 makes the safeguarded `Switch bot` part of the intended full-design launch while preserving the beta's no-price/no-checkout sales boundary and removing exact human-response timing from public promises. The weekend-of-2026-08-15 target never overrides an applicable launch gate.

- **Confirmed:** Market all four approved painting categories.
- **Confirmed:** Capture quote requests without instant firm pricing or checkout in the beta.
- **Confirmed:** Route all beta leads to manual operational review through GoHighLevel.
- **Confirmed:** Preserve the standalone PaintSwitch brand.
- **Confirmed:** The lead-generation beta may launch without the chatbot. D-053 permits the safeguarded homepage chatbot to be exposed for bounded owner/live testing while ads and active promotion remain off.
- **Confirmed:** Deliver the seven end-state outcomes in `ER-001` through `ER-007`.
- **Confirmed:** Use the verified GoHighLevel CRM/pipeline capability required for beta lead capture.
- **Confirmed:** Preserve the verified CRM foundation, two-stage conditional workflow and routed receipt, private integration, fields, server-only configuration, native mappings, protected Preview recovery, and hosted rate threshold while completing hosted concurrency, failure recovery, actual-expiration verification, operational backup/human-response rehearsal, policy/legal review, Production promotion, and Production end-to-end evidence.
- **Confirmed:** D-059 assigns the safeguarded `Switch bot` to the intended full-design launch after its applicable acceptance gates pass. Assignment of the other deferred end-state outcomes to later releases remains **TBD**.

### Approved beta implementation sequence

1. **Confirmed:** Merge the canonical documentation into `main` and preserve D-018 as the beta scope authority.
2. **Confirmed:** Resolve the beta-blocking items in LB-012, including notification failure handling, conditional-backup setup, professional/legal verification, policy publication and implementation, attribution details, and any still-required abuse controls beyond the D-030 rate limit.
3. **Confirmed:** Correct beta services and copy, then implement the approved custom branded PaintSwitch form, disclosures, validation, and result states.
4. **Confirmed:** Preserve the created private integration and four Opportunity fields, keep provider credentials server-only, and preserve the provisioned Upstash connection plus protected Preview evidence for mappings, attribution, on-page confirmation, retained-submission recovery, the hosted rate threshold, successful workflow actions, and owner-visible inbox receipt. Complete hosted concurrency, notification-action failure recovery, actual expiration, human-response, and Production-safe verification before claiming launch acceptance.
5. **Confirmed:** Remove placeholder reviews until verified, permissioned reviews exist, and publish approved Privacy and Terms content.
6. **Confirmed:** Complete beta build, security, responsive/accessibility, deployment, and production lead-path QA before traffic is sent.

### Proposed post-beta implementation sequence

1. **Proposed:** Resolve eligibility, pricing, checkout, scheduling, and service-area questions that block a safe instant-quote launch.
2. **Proposed:** Implement room-by-room intake, tier classification, eligibility gating, and non-instant routing.
3. **Proposed:** Implement approved price calculation, checkout, and booking behavior with automated tests.
4. **Proposed:** Add the approved photo-review intake and operational workflow.
5. **Proposed:** After the bounded D-053 owner test, assign any promoted chatbot release and separately approve any detailed qualification, follow-up, broader conversion, or automatic context-preserving handoff workflow.

## Explicit exclusions and boundaries

- **Confirmed:** PaintSwitch must not use Jen Contracting branding, shared identity, “powered by Jen,” or any customer-facing connection.
- **Confirmed:** Exterior, cabinet, and commercial projects are excluded from firm instant pricing and checkout under the current approved model.
- **Confirmed:** Complex interiors are excluded from firm pricing until photo review.
- **Confirmed:** Oversized rooms are excluded from standard automated handling until dimensions and photo review are completed.
- **TBD:** Exact service-area eligibility.
- **TBD:** Exact standard-interior eligibility beyond room-size rules.
- **TBD:** Live price amounts and detailed pricing policies.
- **Confirmed:** A customer-facing chatbot, GoHighLevel Conversation AI Prompt Based/Start from Scratch, OpenAI GPT-4.1, the D-052 prompt-only scope, the D-053 homepage-only interface/settings, the D-054 `Switch bot` identity, and D-059 launch assignment are approved. Exact Live Chat-only restrictions, visible/first-message AI disclosure, 10-reply cap, two-second delay, sleep behavior, no-action boundary, direct form/mailbox handoff without time or context-transfer promise, Conversation Summary/export-off state, manual up-to-12-month unconverted-chat schedule, and dual kill switches remain controlling. Provider-internal details, broader qualification, automatic context-preserving handoff, manual-retention rehearsal, and integrated/runtime evidence remain **TBD**, **Proposed**, or unverified as labeled.
- **Confirmed:** GoHighLevel and its intended CRM function are approved. The private integration, server-only secrets, Upstash safeguards, fields, immediate hello action, sender, publication, two-stage pipeline, exact five-minute Alex branch, technical TTL, and beta rate limit are approved. Both synthetic branches, no-customer-action behavior, immediate hello delivery, post-configuration row-level hello/Alex delivery, routed Alex receipt, dedicated sender/live DNS configuration, and PaintSwitch-only Business Profile values are externally verified. The Alex action reuses D-032-approved wording, not new copy. Under D-047, exact stable Next.js and `eslint-config-next` `16.3.0` are installed; fifty-nine tests, lint, type checking, build, and zero-vulnerability audit pass locally; GitHub `Verify` and Ready Preview passed for the earlier pushed application commit. Payment setup, other retention classes, post-beta modules, notification-action failure recovery, hosted concurrency, actual expiration, domain-warmup completion and raw-header authentication proof, transition ownership/acknowledgment, any future distinct Alex wording, operational backup/human response, exact registration/A2P facts, professional/legal review, Production acceptance, and phasing remain **TBD** or unverified.
- **Confirmed:** Basic lead-source and campaign attribution is approved for the beta; provider, detailed event definitions, consent implementation, and broader analytics behavior remain **TBD**.
- **Proposed:** In-flow photo upload, direct customer scheduling mechanics, deposits, detailed automated follow-up, broader conversion tracking, and human handoff are not approved implementation scope yet.

## Unsupported-firm-price safety rules

- **SR-001 — Confirmed:** Use only explicitly approved, versioned pricing inputs and policies. The flat $125 fuel/materials adjustment is approved; other numeric pricing remains unapproved unless a canonical decision proves otherwise.
- **SR-002 — Confirmed:** Do not substitute a default, historical assumption, inferred value, or chatbot-generated amount for a missing pricing rule.
- **SR-003 — Confirmed:** Require all approved inputs before calculating a firm price.
- **SR-004 — Confirmed:** Evaluate service category and project eligibility before displaying a firm price or enabling checkout.
- **SR-005 — Confirmed:** Route every Oversized room and every other complex interior to photo review.
- **SR-006 — Confirmed:** Route every exterior, cabinet, and commercial project to custom consultation.
- **SR-007 — Confirmed:** If ceiling height, repairs, room conditions, service area, or any other required factor cannot be handled by approved rules, stop firm pricing and route to review.
- **SR-008 — Confirmed:** Label non-firm outputs clearly; do not use “firm,” “final,” or equivalent language before eligibility and pricing validation succeed.
- **SR-009 — Confirmed:** A chatbot or other automation may not override a safety gate.
- **SR-010 — Confirmed:** Do not expose proposed figures or policies in `OPEN_QUESTIONS.md` as live customer pricing.
- **SR-011 — Confirmed:** The D-052 prompt-only chatbot V1 may not estimate prices, confirm availability, book or schedule, handle payments, claim a submission succeeded, collect sensitive data, or discuss any relationship between PaintSwitch and another company; it must direct those visitors to `Request a Quote` or human review.
- **SR-012 — Confirmed:** The D-053 owner-test chatbot may not promise a human response time, claim automatic handoff or transcript/context transfer, create or imply a lead/booking/payment action, export summaries or transcripts, or remain exposed when either approved kill switch is Off.
