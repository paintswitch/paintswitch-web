# PaintSwitch product requirements

Last updated: 2026-08-01

## Product objective

- **Confirmed:** Provide quick quotes and close qualifying standard residential interior painting sales online before anyone needs to call the customer. Stated on 2026-07-11.
- **Confirmed:** Residential interior painting is the operational V1 for instant firm pricing and checkout. The rule is confirmed; its exact earlier historical source date is uncertain and it was reaffirmed on 2026-08-01.
- **Confirmed:** Include instant pricing and online booking in the launch model.
- **Confirmed:** Market interior, exterior, cabinet, and commercial painting while routing each project to the correct sales journey.
- **Confirmed:** Include a customer-facing chatbot; provider, model, architecture, exact interface, and release phasing remain **TBD**.

## Business and market constraints

- **PS-BR-001 — Confirmed:** Keep PaintSwitch completely separate from Jen Contracting in all customer-facing work. Approved on 2026-07-11.
- **PS-BR-003 — Confirmed:** Launch in the DMV. Stated on 2026-07-11; exact cities, counties, ZIP codes, travel zones, and service boundaries remain **TBD**.
- **PS-BR-002 — Confirmed:** Position PaintSwitch as mid-market, convenience-first, technology-first, and technology-driven mainstream rather than inheriting Jen Contracting's luxury positioning. Approved on 2026-07-17.
- **PS-OP-001 — Confirmed:** PaintSwitch supplies the paint. Approved on 2026-07-17.
- **PS-OP-002 — Confirmed:** Use a hybrid model of employee and subcontractor crews. Approved on 2026-07-17.

## Confirmed end-state outcomes

The following business/product outcomes were confirmed on 2026-07-18. Decision D-018 now confirms the lead-generation beta as the first release milestone; sequencing after that beta remains **TBD**.

- **ER-001 — Confirmed:** A professional standalone PaintSwitch website must be live.
- **ER-002 — Confirmed:** Customers must be able to request quotes.
- **ER-003 — Confirmed:** An AI assistant must qualify leads.
- **ER-004 — Confirmed:** Proposals and bookings must work.
- **ER-005 — Confirmed:** Payments must be collectible.
- **ER-006 — Confirmed:** Marketing must drive traffic and measurable leads.
- **ER-007 — Confirmed:** Operations must be capable of completing the first PaintSwitch projects.
- **ER-008 — Confirmed:** Launch the lead-generation beta before instant pricing and self-service checkout. The beta must deliver a professional standalone site, quote-request capture, GoHighLevel CRM delivery, operator notification, on-page confirmation, and basic measurable source attribution.
- **ER-009 — TBD:** Decide the implementation order and release assignment of the remaining end-state outcomes after the lead-generation beta.

## Approved lead-generation beta requirements

- **LB-001 — Confirmed:** The lead-generation beta is the first release milestone and precedes instant pricing and self-service checkout.
- **LB-002 — Confirmed:** Market interior, exterior, cabinet, and commercial painting in the beta; do not market Drywall Repair as a standalone beta service.
- **LB-003 — Confirmed:** Use “Request a Quote” as the primary customer action.
- **LB-004 — Confirmed:** Accept quote requests throughout the DMV for manual service-availability review without promising exact coverage.
- **LB-005 — Confirmed:** Collect name, phone, email, project ZIP or address, service type, project description, and contact preference.
- **LB-006 — Confirmed:** Deliver each lead to a verified GoHighLevel CRM pipeline and notify the responsible operator.
- **LB-007 — Confirmed:** Display a clear on-page success state after a submission and a recoverable failure state when delivery fails.
- **LB-008 — Confirmed:** Record basic lead-source and campaign attribution for measurable beta leads.
- **LB-009 — Confirmed:** Disclose that service availability and pricing are confirmed after review.
- **LB-010 — Confirmed:** Do not display instant prices, collect deposits or payments, enable checkout, or promise customer-selected scheduling in the beta.
- **LB-011 — Confirmed:** The chatbot, instant quote, checkout, payments, photo-review automation, and automated proposals are deferred from the beta, not rejected from the confirmed end state.
- **LB-012 — TBD:** Approve or verify the exact GoHighLevel account and pipeline configuration, field mappings, responsible lead owner, response-time target, customer email/SMS acknowledgment, consent and legal wording, custom domain, anti-spam method, detailed event definitions, and later-release sequence.

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
- **PL-011 — TBD:** Verify and approve account configuration, credentials, workflows, APIs, field mappings, payment-processor configuration, exact enabled modules, operating ownership, and release phasing.

The confirmed GoHighLevel selection does not prove that any account, module, workflow, API, field mapping, credential, payment processor, or production connection exists. GoHighLevel's intended AI-chat function also does not resolve the customer-facing chatbot's model, architecture, exact interface, or phasing.

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

1. **Confirmed:** The customer sees PaintSwitch as a standalone DMV painting brand offering interior, exterior, cabinet, and commercial painting.
2. **Confirmed:** The customer selects “Request a Quote.”
3. **Confirmed:** The form collects the LB-005 fields and discloses that service availability and pricing are confirmed after review.
4. **Confirmed:** Valid input is delivered exactly once to the verified GoHighLevel CRM pipeline with basic source/campaign attribution.
5. **Confirmed:** The responsible operator receives the approved internal notification.
6. **Confirmed:** The customer sees an accurate on-page confirmation; a failed delivery produces an approved recoverable next step.
7. **Confirmed:** The beta does not display an instant price, collect payment, enable checkout, promise customer-selected scheduling, or require the deferred chatbot.
8. **TBD:** Named operator, response-time target, customer email/SMS acknowledgment, final consent/legal wording, and exact GoHighLevel configuration.

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
- **FR-016 — Confirmed:** Provide the approved lead-generation beta intake, GoHighLevel delivery, operator notification, on-page result states, and basic source attribution defined by LB-001 through LB-012.

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
- **AC-015 — Confirmed:** A customer can submit a quote request and receive an approved acknowledgment; the request reaches the accountable operating destination exactly once.
- **AC-016 — Confirmed:** An approved AI assistant can qualify a test lead without inventing policy or bypassing required review, consultation, or human escalation.
- **AC-017 — Confirmed:** A test proposal can be issued and a test booking can be completed under approved workflows.
- **AC-018 — Confirmed:** An approved test payment can be collected, confirmed, reconciled, and handled through approved failure/refund rules.
- **AC-019 — Confirmed:** Approved marketing activity can be attributed to measurable test traffic and leads under approved privacy and consent rules.
- **AC-020 — Confirmed:** Operations can accept, schedule, staff, supply, execute, quality-check, and close a rehearsed first-project scenario.
- **AC-021 — Confirmed:** Any implementation claiming GoHighLevel integration identifies the verified account, enabled module, workflow, field mapping, owner, and test evidence without exposing credentials.
- **AC-022 — Confirmed:** A beta test lead containing every LB-005 field is accepted exactly once, reaches the verified GoHighLevel pipeline, notifies the responsible operator, preserves approved source attribution, and produces an on-page confirmation.
- **AC-023 — Confirmed:** A failed or rejected beta submission does not falsely claim success and gives the customer an approved recoverable next step without exposing sensitive implementation details.
- **AC-024 — Confirmed:** Beta copy uses “Request a Quote,” identifies the four approved painting categories, treats availability and pricing as pending review, and contains no instant-price, payment, checkout, customer-selected-scheduling, or standalone-Drywall promises.

Acceptance criteria that depend on unapproved pricing values, checkout terms, scheduling behavior, or integration choices remain **TBD**.

## Launch priorities

### Confirmed lead-generation beta first

Decision D-018 confirms the beta as the first release. The remaining end-state outcomes still govern later releases but do not block this beta unless listed in LB-001 through LB-012.

- **Confirmed:** Market all four approved painting categories.
- **Confirmed:** Capture quote requests without instant firm pricing or checkout in the beta.
- **Confirmed:** Route all beta leads to manual operational review through GoHighLevel.
- **Confirmed:** Preserve the standalone PaintSwitch brand.
- **Confirmed:** Defer the customer-facing chatbot from the beta to a later approved release.
- **Confirmed:** Deliver the seven end-state outcomes in `ER-001` through `ER-007`.
- **Confirmed:** Use the verified GoHighLevel CRM/pipeline capability required for beta lead capture.
- **TBD:** Assign the chatbot and other deferred outcomes to specific post-beta releases.

### Approved beta implementation sequence

1. **Confirmed:** Merge the canonical documentation into `main` and preserve D-018 as the beta scope authority.
2. **Confirmed:** Resolve the beta-blocking items in LB-012, including verified GoHighLevel configuration, lead ownership/SLA, legal/consent text, attribution details, and anti-spam controls.
3. **Confirmed:** Correct beta services and copy, then implement the approved form, disclosures, validation, and result states.
4. **Confirmed:** Connect GoHighLevel delivery, internal notification, and basic source attribution.
5. **Confirmed:** Remove or replace placeholder trust content and publish approved Privacy and Terms content.
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
- **Confirmed:** GoHighLevel and its intended CRM function are approved; exact configuration, enabled modules, workflows, APIs, mappings, credentials, payment-processor setup, and phasing remain **TBD**.
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
