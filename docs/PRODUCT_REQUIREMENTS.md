# PaintSwitch product requirements

Last updated: 2026-08-05

## Product objective

- **Confirmed:** Provide quick quotes and close qualifying standard residential interior painting sales online before anyone needs to call the customer. Stated on 2026-07-11.
- **Confirmed:** Residential interior painting is the operational V1 for instant firm pricing and checkout. The rule is confirmed; its exact earlier historical source date is uncertain and it was reaffirmed on 2026-08-01.
- **Confirmed:** Include instant pricing and online booking in the launch model.
- **Confirmed:** Market interior, exterior, cabinet, and commercial painting while routing each project to the correct sales journey.
- **Confirmed:** Include a customer-facing chatbot; provider, model, architecture, exact interface, and release phasing remain **TBD**.

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
- **LB-011 — Confirmed:** The chatbot, instant quote, checkout, payments, photo-review automation, and automated proposals are deferred from the beta, not rejected from the confirmed end state.
- **LB-012 — TBD:** Supply or approve remaining notification-action failure handling, branded-domain sender authentication, exact DBA filing/registrant/address/tax/authorized-representative and later A2P facts, any abuse controls beyond `LB-028`, detailed event definitions, record classes not covered by `LB-034`, professional/legal verification, and later-release sequence. D-033 through D-047 resolve the hosting-plan, Virginia-focus, internal DBA-direction, beta privacy/contact/retention, age, governing-law, response-target, conditional-backup, and dependency-upgrade choices. Protected Preview evidence now verifies one application fail-closed/retained-submission recovery and the hosted five-request threshold with the next request returning `429`. Hosted concurrency, notification-action failure recovery, privacy/retention operating rehearsal, professional/legal review, human-response rehearsal, verified backup operation, and Production acceptance remain unverified. Approved integration configuration and mappings are implementation/verification work under `PL-018` through `PL-020`, not new owner decisions.
- **LB-013 — Confirmed:** The PaintSwitch owner is the primary owner of every beta lead. Response operations are governed by `LB-039`; Alex is only the conditional backup described by `LB-040` after mailbox creation and receipt of a controlled backup notification through the owner-approved route. A self-addressed mailbox test alone does not activate routing.
- **LB-014 — Superseded:** The former rule requiring automatic SMS for every accepted beta submission was superseded by D-027 and `LB-025`. The on-page-confirmation portion remains current through `LB-007` and `LB-025`.
- **LB-015 — Confirmed:** Keep Vercel as the beta website host; custom-domain work does not block beta.
- **LB-016 — Confirmed:** Use `paintswitch.com` as the primary customer-facing domain and permanently redirect `www.paintswitch.com` to `paintswitch.com`.
- **LB-017 — Confirmed:** Target the lead-generation beta for launch on Saturday, 2026-08-08. This is a delivery goal rather than a waiver of any launch requirement.
- **LB-018 — Confirmed:** Limit owner-required participation in beta delivery to at most one hour per day.
- **LB-019 — Confirmed:** Use a custom branded PaintSwitch quote-request form rather than an externally branded customer-facing intake.
- **LB-020 — Confirmed:** Connect the custom form to GoHighLevel through a secure server-side integration; do not expose GoHighLevel credentials or secrets to customer-delivered code.
- **LB-021 — Confirmed:** Remove placeholder reviews and keep reviews unpublished until verified, permissioned reviews exist.
- **LB-022 — Confirmed:** The 2026-08-08 target does not authorize bypassing confirmed safety, legal, privacy, consent, security, messaging, or acceptance requirements.
- **LB-023 — Superseded:** D-027 supersedes the former rule that an A2P delay could not result in beta launch with SMS disabled. A2P remains an operational risk, but `LB-025` governs the approved fallback.
- **LB-024 — Superseded:** D-027 resolved the former SMS-consent conflict. `LB-025` is the current requirement.
- **LB-025 — Confirmed:** Use a separate SMS opt-in that is optional and unchecked by default before any future automated SMS; do not treat `Text` contact preference as consent; show on-page confirmation for every accepted lead; and keep automated customer SMS disabled for the beta under D-042. Future activation requires separate readiness and the D-027 safeguards.
- **LB-026 — Confirmed:** Send owner lead notifications to `hello@paintswitch.com`. The 2026-08-03 owner clarification resolves the temporary `hell@paintswitch.com` typo conflict. Owner-supplied evidence verifies the corrected no-Jen controlled message. `LB-030` authorizes publication; the earlier controlled tests and one 2026-08-05 retained-submission recovery each produced a successful action. The owner confirmed that the earlier Preview-triggered message arrived around 1:20 PM EDT. Notification-action failure recovery and Production website-to-CRM-to-notification acceptance remain incomplete.
- **LB-027 — Confirmed:** Apply a 30-day TTL to Upstash technical idempotency/delivery-state records. This technical TTL does not set retention or deletion rules for GoHighLevel Contacts or Opportunities, customer-submitted business data, notification email, provider logs, analytics, or other CRM/business records.
- **LB-028 — Confirmed:** Enforce a beta anti-spam/rate limit of no more than five lead submissions per client IP address per ten minutes.
- **LB-029 — Confirmed:** Use From name `PaintSwitch` and From email `hello@paintswitch.com` for the internal owner lead-notification email. Approved on 2026-08-03 under D-031. AC-044 passes. Protected Preview evidence includes the earlier owner-confirmed receipt and one additional successful action during retained-submission recovery. Branded-domain authentication, customer-facing sender scope, notification-action failure handling, backup operation, and Production end-to-end operation remain **TBD** or unverified as labeled.
- **LB-030 — Confirmed:** Publish the exact `PaintSwitch Website Lead - Owner Notification` workflow after verifying its approved trigger filter, recipient, From values, subject, and body. Approved and externally verified on 2026-08-04 under D-032. The earlier controlled tests and one 2026-08-05 retained-submission recovery each verified a successful internal-notification action; the owner confirmed receipt of the earlier Preview-triggered message. This does not prove notification-action failure recovery, conditional-backup operation, authentication, or Production website-to-CRM-to-notification operation.
- **LB-031 — Confirmed:** Use Vercel Pro for commercial beta hosting. The owner confirmed activation on 2026-08-04 under D-033, and a signed-in dashboard check verified the `Paint Switch` team labeled `Pro` with the `paintswitch-web` project inside it. Billing administration and production deployment work remain.
- **LB-032 — Confirmed:** Use website lead data only for quote review/response, CRM, attribution, security, and duplicate prevention.
- **LB-033 — Confirmed:** Do not sell website lead data or share/use it for targeted advertising.
- **LB-034 — Confirmed:** Retain an unconverted CRM lead for 12 months after its last interaction, then delete or anonymize it unless it is tied to an active project, verified security matter, dispute, or legal need. Other record classes remain **TBD** unless separately approved.
- **LB-035 — Confirmed:** Accept access, correction, and deletion requests through `hello@paintswitch.com`, using reasonable verification before acting.
- **LB-036 — Confirmed:** Quote submission authorizes project-specific contact only; it is not unrelated marketing consent or automated-SMS consent.
- **LB-037 — Confirmed:** Restrict the beta website and quote service to people age 18 or older.
- **LB-038 — Confirmed:** Use Maryland governing law for beta Terms, with no mandatory arbitration and no class-action waiver. Legal implementation review remains required, including the Virginia-focus/DBA interaction.
- **LB-039 — Confirmed:** Operate lead response from 8:00 AM through 8:00 PM Eastern daily. Make the first human attempt within five minutes during those hours and by 9:00 AM Eastern the next day for after-hours leads.
- **LB-040 — Confirmed:** Use Alex as conditional backup only after `alex@paintswitch.com` is created and a controlled backup notification is received through the owner-approved route. GoDaddy administration verifies that the mailbox account exists. On 2026-08-05, Microsoft MFA succeeded, Outlook opened for Alex, and a controlled self-addressed operational message with no customer data sent at 2:24 PM Eastern appeared unread in that inbox. This satisfies direct-access and basic self-send/receipt verification only. It does not satisfy the routed-notification gate, approve or configure exact routing behavior, verify GoHighLevel routing, activate Alex as an operational backup, rehearse human response, or satisfy workflow acceptance. Until those remaining conditions pass, the PaintSwitch owner remains the only operationally verified recipient.

The beta CRM foundation is governed by `PL-012` through `PL-016`. Protected Preview evidence verifies secure server-side delivery, one owner-confirmed inbox receipt, one fail-closed/retained-submission recovery completed exactly once, and the hosted rate threshold. The current candidate implements the customer-facing portions of `LB-032` through `LB-038` through dated Privacy and Terms routes and a pre-submit disclosure. It does not complete professional/legal review, `LB-034`/`LB-035` operating rehearsal, `LB-006` Production acceptance, hosted concurrency, notification-action failure recovery, or conditional-backup operation.

## Launch operating platform

- **PL-001 — Confirmed:** Use GoHighLevel as PaintSwitch's launch backbone or operating engine. Approved on 2026-07-18.
- **PL-002 — Confirmed:** Use GoHighLevel for the intended CRM function.
- **PL-003 — Confirmed:** Use GoHighLevel for the intended SMS function.
- **PL-004 — Confirmed:** Use GoHighLevel for the intended email function.
- **PL-005 — Confirmed:** Use GoHighLevel for the intended AI-chat function.
- **PL-006 — Confirmed:** Use GoHighLevel for the intended automation function.
- **PL-007 — Confirmed:** Use GoHighLevel for the intended calendar-booking function.
- **PL-008 — Confirmed:** Use GoHighLevel for the intended pipeline function.
- **PL-009 — Confirmed:** Use GoHighLevel for the intended reviews function.
- **PL-010 — Confirmed:** Use GoHighLevel for the intended payment-workflow function.
- **PL-011 — TBD:** Approve or supply remaining notification-action failure handling, payment-processor configuration, post-beta enabled modules, operating ownership not already assigned, branded-domain sender authentication, customer-facing sender identity, exact A2P legal-business/DBA and authorized-representative facts, and release phasing. `LB-026`, `LB-029`, and `LB-030` confirm the notification destination, internal sender, and publication of the exact workflow. Protected Preview evidence now includes one retained-submission application recovery with one successful notification action, but notification-action failure recovery and Production website-to-CRM notification remain unverified. The private integration, server-only GHL and Upstash configuration, field creation, APIs, mappings, and D-030 safeguards are implemented under `LB-020` and `PL-018` through `PL-020`; hosted fail-closed/recovery and the five-request threshold/next-request `429` are verified, while hosted concurrency, actual expiration, Production promotion, and Production provider acceptance remain incomplete. D-033 confirms Vercel Pro; D-035 confirms the internal/legal DBA direction but does not verify a filing, exact registrant facts, licensing, or A2P acceptance.
- **PL-012 — Confirmed:** Use a dedicated GoHighLevel pipeline named `PaintSwitch Lead Intake`. Approved on 2026-08-02.
- **PL-013 — Confirmed:** Give the `PaintSwitch Lead Intake` pipeline exactly one stage named `New Quote Request`. Approved on 2026-08-02.
- **PL-014 — Confirmed:** Configure `Service Type` as an Opportunity single-select dropdown with Interior, Exterior, Cabinet, and Commercial; `Project Description` as an Opportunity multi-line field; and `Contact Preference` as a Contact single-select dropdown with Call, Text, and Email. Approved on 2026-08-02.
- **PL-015 — Confirmed:** Leave existing GoHighLevel sample/demo data untouched. Approved on 2026-08-02.
- **PL-016 — Confirmed:** Keep automated customer SMS disabled for the beta under D-042. A `Text` contact preference is not automated-SMS consent. Any later SMS activation requires the separate, optional, unchecked opt-in and all D-027 safeguards. Voice AI also remains disabled and outside the beta unless separately approved and operationally ready.
- **PL-017 — Confirmed:** Use `hello@paintswitch.com` as the primary PaintSwitch domain mailbox. GoDaddy administration externally verifies that the account exists. Owner-supplied screenshot evidence dated 2026-08-04 confirms receipt of the corrected controlled test with visible sender name `PaintSwitch`, PaintSwitch-only routing, no Jen identity, and the approved subject/body. Protected Preview evidence includes successful workflow actions and owner-confirmed receipt of the earlier website-triggered notification. Branded-domain authentication, notification-action failure recovery, conditional-backup operation, and Production end-to-end acceptance remain unverified.
- **PL-018 — Confirmed:** Create a GoHighLevel private integration for the Paint Switch location and store its token only as a secure server-side Vercel environment secret. Configure least-required beta permissions, secret naming, rotation, mappings, and verification within this approved boundary.
- **PL-019 — Confirmed:** Use free Upstash Redis as the durable server-side duplicate/idempotency store for beta lead delivery. Apply the D-030 30-day TTL to technical idempotency/delivery-state records, and implement and verify key, TTL, atomicity, failure, reconciliation, limits, and monitoring behavior within this approved boundary. Broader CRM/business/customer-data retention and deletion remain TBD.
- **PL-020 — Confirmed:** Add GoHighLevel Opportunity fields named `Project Location`, `Website Submission ID`, `Campaign Source`, and `Campaign Name`. Select and verify field types, settings, normalization, and mappings consistent with each approved field purpose.

The confirmed GoHighLevel selection, CRM foundation, and server-side connection boundary do not by themselves prove Production operation. The exact `PaintSwitch Website Lead - Owner Notification` workflow is published and remains verified with its approved trigger and content. The earlier protected Preview verified all seven intake fields, exact mappings, attribution, on-page confirmation, one completed Upstash state, one successful notification action, and owner-confirmed receipt. **Additional hosted evidence — 2026-08-05:** Application commit `beb6781` passed GitHub `Verify` and reached Vercel `Ready`. The hosted form failed closed, retained one synthetic submission, and recovered that same submission exactly once after delivery was enabled, creating one Contact, one Opportunity, and one internal notification action marked `Success`. Preview delivery was restored to disabled and the disabled verification created no duplicate. A hosted limiter check capped the counter at five and returned `429` for the next valid request. This evidence does not prove branded-domain authentication, hosted concurrency, notification-action failure recovery, actual expiration, privacy/retention operating rehearsal, professional/legal review, payment processing, or Production acceptance.

## Brand, visual, and governance requirements

- **VI-001 — Confirmed:** Follow the owner-preferred first HTML example's logo direction: a paint roller with paint behind it. Approved on 2026-07-18.
- **VI-002 — TBD:** Approve and verify the final production logo file, variants, and usage rules.
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
7. **Confirmed:** Lead response operates from 8:00 AM through 8:00 PM Eastern daily. The first human attempt is due within five minutes during those hours and by 9:00 AM Eastern the next day for after-hours leads.
8. **Confirmed:** The beta does not display an instant price, collect payment, enable checkout, promise customer-selected scheduling, or require the deferred chatbot.
9. **TBD:** Production notification-action failure handling, branded-domain sender authentication, exact A2P registration facts for any later SMS activation, professional/legal verification, retention for record classes outside `LB-034`, and Production provider end-to-end verification. The destination, internal From values, corrected received-test evidence, workflow publication, owner-visible Preview-triggered receipt, beta contact rule, automated-SMS-off rule, response target, and conditional Alex backup direction are confirmed or externally verified. The private integration, GHL identifiers/fields, Upstash database/variables, mapping code, 30-day technical Upstash-record TTL, hosted retained-submission recovery, and five-valid-submissions-per-client-IP-per-600-seconds threshold are implemented and verified as scoped. Customer-facing Privacy and Terms pages, pre-submit disclosure, and a manual operations runbook are implemented. GoDaddy administration verifies both mailbox accounts exist; Microsoft MFA, direct Outlook access, and a 2:24 PM Eastern controlled self-send/receipt verify basic Alex mailbox operation. Exact routing approval, GoHighLevel backup configuration, external-domain delivery, backup activation, workflow acceptance, and response rehearsal remain open. Hosted concurrency, actual expiration, human-response and privacy/retention rehearsal, professional/legal review, and Production end-to-end acceptance remain pending.

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

The customer-facing chatbot is **Confirmed** from 2026-07-11. Its provider, model, architecture, exact interface, and release phasing are **TBD**. The intended GoHighLevel AI-chat function does not resolve those details. The following detailed responsibilities remain **Proposed**:

- **Proposed:** Explain the supported service categories and route customers to the correct lane.
- **Proposed:** Ask the approved quote questions in plain language and help customers complete room-by-room inputs.
- **Proposed:** Explain why a project requires photo review or consultation.
- **Proposed:** Preserve the customer's collected context when handing off to a human.
- **Proposed:** Answer only from approved product, pricing, service-area, and policy content.

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
- **FR-013 — Confirmed:** Provide a customer-facing chatbot while leaving provider, model, architecture, and exact interface unselected until approved.
- **FR-014 — Confirmed:** Add one flat $125 fuel/materials adjustment exactly once to every project price.
- **FR-015 — Confirmed:** Use GoHighLevel as the launch backbone and CRM operating engine while requiring verification before treating configuration as live.
- **FR-016 — Confirmed:** Provide the approved lead-generation beta intake, durably controlled GoHighLevel delivery using at-most-one automatic Opportunity creation plus reconciliation, operator notification, on-page result states, basic source attribution, public-domain behavior, delivery target, owner-time constraint, form/integration boundary, review-content rule, beta contact/SMS/privacy/retention/age/response policies, 30-day Upstash technical-record TTL, and client-IP rate limit defined by LB-001 through LB-040 and PL-018 through PL-020.
- **FR-017 — Superseded:** The former every-accepted-lead automatic-SMS requirement is replaced by `LB-025`; owner notification and on-page confirmation remain required.
- **FR-018 — Confirmed:** Expire Upstash technical idempotency/delivery-state records after 30 days without treating that technical TTL as approval for broader CRM/business/customer-data retention or deletion.
- **FR-019 — Confirmed:** Prevent the beta lead-intake path from accepting more than five lead submissions from one client IP address in ten minutes.
- **FR-020 — Confirmed:** Limit website-lead data use to quote review and response, CRM, attribution, security, and duplicate prevention; do not sell it or share or use it for targeted advertising.
- **FR-021 — Confirmed:** Retain unconverted CRM leads for 12 months after the last interaction, then delete or anonymize them unless an active project, verified security matter, dispute, or legal need applies.
- **FR-022 — Confirmed:** Provide a route through `hello@paintswitch.com` for reasonably verified access, correction, and deletion requests.
- **FR-023 — Confirmed:** Treat quote submission as authorization for project-specific contact only, restrict the website and quote service to people age 18 or older, and keep automated customer SMS off for the beta.
- **FR-024 — Confirmed:** Support the D-045 response schedule and targets. The `alex@paintswitch.com` existence, direct-access, and basic controlled self-send/receipt prerequisites have passed; keep Alex inactive until the exact routing behavior is approved and the GoHighLevel routing, backup activation, workflow acceptance, and response rehearsal are completed.
- **FR-025 — Confirmed:** Prioritize Virginia in public beta operation without asserting an unapproved Virginia-only boundary, and preserve PaintSwitch-only customer-facing identity despite the internal/legal Virginia DBA direction.

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
- **AC-028 — Confirmed:** The signed-in Paint Switch GoHighLevel sub-account contains exactly one dedicated `PaintSwitch Lead Intake` pipeline with one `New Quote Request` stage; all three fields exist with the D-022 objects, types, and option values; sample/demo data remains untouched; and SMS plus Voice AI remain disabled until separately ready.
- **AC-029 — Confirmed:** `hello@paintswitch.com` is created under the PaintSwitch domain, uses an approved standalone PaintSwitch identity, and passes inbound and outbound message tests before customer-facing use.
- **AC-030 — Confirmed:** The beta is managed toward Saturday, 2026-08-08, but is released on that date only if every applicable launch gate passes; otherwise the unmet gate and revised plan are reported without weakening the requirement.
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
- **AC-041 — Confirmed:** After `hello@paintswitch.com` is provisioned and tested, a production-safe lead proves that the configured workflow sends one accurate owner notification to that address, exposes notification failure for recovery, and never routes the notification to `hell@paintswitch.com`. The owner-confirmed protected-Preview receipt satisfies only the successful-receipt portion; failure recovery and Production evidence remain required.
- **AC-042 — Confirmed:** Automated and provider-safe verification proves that every Upstash technical idempotency/delivery-state record receives a 30-day TTL and expires as required; no test may claim or impose the same retention period on broader CRM/business/customer data without a separate confirmed decision.
- **AC-043 — Confirmed:** Automated and production-safe verification proves that a client IP address can submit no more than five beta lead submissions in ten minutes, an over-limit submission makes no GoHighLevel delivery attempt and receives a generic recoverable response, and the control does not expose the client IP or internal limiter details.
- **AC-044 — Confirmed:** The saved internal owner-notification Email action uses From name `PaintSwitch` and From email `hello@paintswitch.com`, and a controlled received-message test verifies the actual inbox sender line contains no Jen Contracting-linked identity before workflow publication. A GoHighLevel UI test-send completion without owner-confirmed receipt does not satisfy this criterion.
- **AC-045 — Confirmed:** After owner approval, the exact `PaintSwitch Website Lead - Owner Notification` workflow remains Saved with its publish switch checked after reload and retains the approved trigger filter, recipient, From values, subject, and body. This publication evidence does not substitute for AC-041's trigger, delivery, failure-recovery, or end-to-end test.
- **AC-046 — Confirmed:** Published beta Privacy and Terms content accurately states the approved lead-data purposes, no-sale/no-targeted-ad rule, 12-month unconverted-lead rule and exceptions, privacy-request channel and reasonable-verification condition, age restriction, project-specific contact authorization, automated-SMS-off rule, Maryland governing law, and absence of mandatory arbitration and a class-action waiver.
- **AC-047 — Confirmed:** Quote-intake inspection proves that selecting `Text` is treated only as a contact preference, submission authorizes only project-specific contact, no automated customer SMS is sent or promised in beta, and unrelated marketing consent is not inferred.
- **AC-048 — Confirmed:** The beta website and quote service accurately communicate and enforce the approved 18-or-older restriction without inventing an unapproved identity-verification method.
- **AC-049 — Confirmed:** Timestamped operating evidence shows the first human attempt occurs within five minutes for leads received from 8:00 AM through 8:00 PM Eastern daily and by 9:00 AM Eastern the next day for after-hours leads. Alex receives no backup routing until `alex@paintswitch.com` exists and a controlled backup notification is received through the owner-approved route; a self-addressed mailbox test alone does not satisfy this acceptance criterion.
- **AC-050 — Confirmed:** Public beta inspection shows Virginia is prioritized without claiming an unapproved Virginia-only service boundary, and no customer-facing page, message, sender, or metadata exposes the internal/legal Jen Contracting DBA relationship.
- **AC-051 — Confirmed:** Deployment records show the commercial beta runs on the owner-confirmed Vercel Pro plan; the plan decision does not substitute for Production promotion, rollback, monitoring, or end-to-end QA.

**Controlled Preview implementation evidence — 2026-08-04:** Safeguarded commit `3bac3ba` was tested behind Vercel Require Log In / Standard Protection. Preview-only `LEAD_DELIVERY_ENABLED=true` enabled Ready deployment `CrJA8ve4qzNHneVLwEtkr5N15gJu` (`paintswitch-pp6wvxmih-paint-switch.vercel.app`) at 1:18:57 PM EDT while Production remained explicitly `false`. One browser submission from 1:19:53 through 1:19:57 PM contained every `LB-005` field, used campaign values `controlled_preview_test` / `website_e2e_2026_08_04`, and displayed exactly: “Your request was sent. A PaintSwitch team member will review the details and follow up.” Submission `a0c9e9cd-4e98-4f45-8c1f-16c9a31256ec` produced Contact `w1tEl1ktbKestabbkBr3` and open Opportunity `11u1dIja7oMJXS4srkPu` in `PaintSwitch Lead Intake` / `New Quote Request`; every approved Contact and Opportunity mapping was verified, including `Contact Preference = Email` and both attribution fields. Workflow execution `01KZ6WM16S7WTFPM40NTEA9381` enrolled once at 1:19:56 PM, reported the internal notification `Success` at 1:19:57 PM, finished, and performed no SMS/customer action.

**Safeguard and restoration evidence — 2026-08-04:** Upstash held a `completed` state with matching CRM IDs, a 64-hex-character payload hash, completion phase, version, and updated timestamp, but none of the raw submitted name, email, phone, location, service, description, or preference fields; 2,591,535 seconds of TTL remained and there was no remaining lock. One Preview rate counter had count `1` and 101 seconds of remaining TTL; the five-submission threshold was not tested. The Preview environment setting and latest branch Preview were restored to `false`, and fresh disabled deployment `6NrFmAef7vgP3dm9iuC11DBYEJ1d` (`paintswitch-7qbi2cue9-paint-switch.vercel.app`) was Ready at 1:26:34 PM EDT. Production was untouched and remained explicitly `false`; the enabled immutable unique URL remains access-protected.

**Protected Preview recovery and limiter evidence — 2026-08-05:** Application commit `beb6781` passed GitHub `Verify` and its Vercel Preview reached `Ready`. The hosted form failed closed and retained one synthetic submission. After Preview delivery was enabled, retrying that same submission completed exactly once, creating one Contact, one Opportunity, and one internal owner-notification action marked `Success`. Preview delivery was restored to disabled, and the disabled verification created no duplicate. A separate hosted limiter check held the counter at five and returned `429` for the next valid request. GoDaddy administration externally verified that both PaintSwitch-domain mailbox accounts exist.

**Alex mailbox access evidence — 2026-08-05:** Microsoft MFA succeeded for `alex@paintswitch.com`, Outlook opened, and a controlled self-addressed operational message containing no customer data was sent at 2:24 PM Eastern and appeared unread in the Alex inbox. This verifies direct access and basic self-send/receipt only. It does not verify external-domain delivery, approve or configure exact routing behavior, verify GoHighLevel routing, activate Alex as a backup, rehearse human response, or satisfy workflow acceptance.

Together, the protected Preview evidence partially satisfies `AC-022`, `AC-023`, `AC-033`, `AC-036`, `AC-037`, `AC-038`, `AC-041`, `AC-042`, and `AC-043`. It directly verifies one application fail-closed/recovery case and the hosted rate threshold, but not hosted concurrency, notification-action failure recovery, actual 30-day expiration, or Production operation. Local Privacy/Terms pages and pre-submit disclosures partially satisfy `AC-046` through `AC-048`. Production end-to-end delivery, human-response timing under `AC-049`, privacy/retention operating rehearsal, professional/legal review, Production publication, and launch QA remain unverified.

Acceptance criteria that depend on unapproved pricing values, checkout terms, scheduling behavior, or integration choices remain **TBD**.

## Launch priorities

### Confirmed lead-generation beta first

Decisions D-018 through D-046 confirm the beta as the first release and define its ownership, contact and SMS boundaries, hosting and Pro plan, public domain, Virginia operating focus, internal/legal DBA direction with strict public separation, CRM foundation, private-integration/token boundary, Upstash idempotency, additional Opportunity fields, owner-notification destination, internal sender, workflow publication, technical-state TTL, rate-limit threshold, privacy and retention policy, age restriction, governing-law terms, response target, conditional backup, target date, owner-time limit, custom-form/server-side integration boundary, review-content rule, and scoped dependency-risk acceptance. The remaining end-state outcomes still govern later releases but do not block this beta unless listed in the approved beta requirements. The 2026-08-08 date is a target and never overrides an applicable launch gate.

- **Confirmed:** Market all four approved painting categories.
- **Confirmed:** Capture quote requests without instant firm pricing or checkout in the beta.
- **Confirmed:** Route all beta leads to manual operational review through GoHighLevel.
- **Confirmed:** Preserve the standalone PaintSwitch brand.
- **Confirmed:** Defer the customer-facing chatbot from the beta to a later approved release.
- **Confirmed:** Deliver the seven end-state outcomes in `ER-001` through `ER-007`.
- **Confirmed:** Use the verified GoHighLevel CRM/pipeline capability required for beta lead capture.
- **Confirmed:** Preserve the verified CRM foundation, private integration, four additional Opportunity fields, Sensitive Vercel GHL and Upstash configuration, configured identifiers, native mappings, protected Preview success/recovery evidence, and hosted rate-threshold evidence while completing hosted concurrency, notification-action failure recovery, actual-expiration verification, conditional-backup setup, policy publication/legal review, human-response rehearsal, Production promotion, and Production end-to-end evidence.
- **TBD:** Assign the chatbot and other deferred outcomes to specific post-beta releases.

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
5. **Proposed:** Assign and implement the confirmed chatbot, then add any approved detailed follow-up, broader conversion, and human-handoff workflows.

## Explicit exclusions and boundaries

- **Confirmed:** PaintSwitch must not use Jen Contracting branding, shared identity, “powered by Jen,” or any customer-facing connection.
- **Confirmed:** Exterior, cabinet, and commercial projects are excluded from firm instant pricing and checkout under the current approved model.
- **Confirmed:** Complex interiors are excluded from firm pricing until photo review.
- **Confirmed:** Oversized rooms are excluded from standard automated handling until dimensions and photo review are completed.
- **TBD:** Exact service-area eligibility.
- **TBD:** Exact standard-interior eligibility beyond room-size rules.
- **TBD:** Live price amounts and detailed pricing policies.
- **Confirmed:** A customer-facing chatbot is approved; provider, model, architecture, exact interface, detailed responsibilities, and release phasing remain **TBD** or **Proposed** as labeled.
- **Confirmed:** GoHighLevel and its intended CRM function are approved. The private-integration method, server-side Vercel token location, free Upstash Redis idempotency provider, four D-026 Opportunity field names/objects, `hello@paintswitch.com` owner-notification destination, internal sender `PaintSwitch <hello@paintswitch.com>`, publication of the exact owner-notification workflow, 30-day Upstash technical-record TTL, and five-submissions-per-client-IP-per-ten-minutes beta rate limit are also approved. Protected Preview evidence includes the earlier successful website path, one retained-submission recovery completed exactly once with one successful notification action, safe restoration to disabled with no duplicate, and the hosted five-request cap followed by `429`. Under D-047, exact stable Next.js and `eslint-config-next` `16.3.0` are installed; fifty-seven automated tests, lint, TypeScript type checking, build, and the zero-vulnerability audit pass; application commit `beb6781` also passed GitHub `Verify` and reached Vercel `Ready`. `BETA_OPERATIONS_RUNBOOK.md` implements the confirmed lead-response, failure, privacy-request, retention, backup, release, and rollback procedures. GoDaddy administration verifies both PaintSwitch-domain mailbox accounts exist; Microsoft MFA/direct Outlook access and a 2:24 PM Eastern self-send/receipt verify basic Alex mailbox operation. Preview and Production delivery are disabled after testing. Payment-processor setup, retention for record classes outside `LB-034`, post-beta modules, notification-action failure recovery, hosted concurrency, actual expiration, branded-domain authentication, approved and verified backup routing, backup activation, external-domain delivery, response rehearsal, exact registration/A2P facts, professional/legal review, Production acceptance, and phasing remain **TBD** or unverified as labeled.
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
