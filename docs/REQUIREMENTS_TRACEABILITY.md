# PaintSwitch requirements traceability

Last updated: 2026-08-01

This register gives each distinct business, product, operating, safety, or quality requirement a unique PaintSwitch requirement ID. Repeated statements in other documents map to one row here. Website copy is implementation evidence only and is never a source of approval.

Allowed decision statuses are **Confirmed**, **Proposed**, **TBD**, **Rejected**, **Superseded**, and **Historical/Needs verification**. “Implementation status” describes repository state, not approval. “Blocks launch” is release-specific: **TBD—release phasing unresolved** means a Confirmed end-state outcome has not yet been assigned to a beta or public release; **Conditional** means it blocks only if the proposed capability is approved or selected.

## Brand, market, and operating model

| ID | Decision or requirement | Status | Source date | Canonical document and section | Implementation status | Test or acceptance evidence | Blocks launch |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PS-BR-001 | Keep PaintSwitch completely separate from Jen Contracting in every customer-facing context. | Confirmed | 2026-07-11 | `DECISION_LOG.md` § D-001 | Partially implemented | Repository inspection found PaintSwitch-only current copy; future surfaces require AC-001 review. | Yes |
| PS-BR-002 | Position PaintSwitch as mid-market, convenience-first, technology-first, technology-driven mainstream—not inherited luxury positioning. | Confirmed | 2026-07-17 | `DECISION_LOG.md` § D-003 | Partially implemented | Current landing-page convenience copy is implementation evidence only; no approved messaging test suite exists. | Yes |
| PS-BR-003 | Launch in the DMV. | Confirmed | 2026-07-11 | `DECISION_LOG.md` § D-002 | Partially implemented | `src/app/page.tsx` says “Coming to the DMV”; this proves implementation only. Checklist: LC-BIZ-001. | Yes |
| PS-BR-004 | Define exact DMV cities, counties, ZIP codes, travel zones, and service boundaries. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Launch geography | Not implemented | No address eligibility or approved coverage list exists. | Yes |
| PS-BR-005 | Market interior, exterior, cabinet, and commercial painting at launch. | Confirmed | 2026-07-29 | `DECISION_LOG.md` § D-006 | Partially implemented | Main service cards include all four; footer omits Cabinet. | Yes |
| PS-BR-006 | Decide whether drywall repair is a standalone marketed service or supporting scope only. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Service and operating policy | Implemented without canonical approval | Current site has a Drywall Repair service card; no decision approves it as a fifth marketed category. | Yes |
| PS-VI-001 | Follow the owner's preferred logo direction: a paint roller with paint behind it, based on the first HTML example. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-016 | Direction not implemented or verified | Current header uses a styled “P” and text; no final roller-logo asset is verified. Checklist: LC-DOC-008. | TBD—release phasing unresolved |
| PS-VI-002 | Approve and verify the final production logo file, variants, and usage rules. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § Visual identity | Not implemented | No final production asset or approval evidence exists. Checklist: LC-DOC-008. | TBD—release phasing unresolved |
| PS-OP-001 | PaintSwitch supplies the paint. | Confirmed | 2026-07-17 | `DECISION_LOG.md` § D-004 | Not implemented operationally | No quote, contract, checkout, or operations workflow exists to verify supply treatment. | Yes |
| PS-OP-002 | Use a hybrid model of employee and subcontractor crews. | Confirmed | 2026-07-17 | `DECISION_LOG.md` § D-005 | Not implemented operationally | No scheduling, crew, or operations system exists in the repository. | Yes |
| PS-OP-003 | Define paint brands, grades, finishes, color rules, procurement, and material allowances. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Service and operating policy | Not implemented | No approved policy or implementation evidence. | Yes |
| PS-OP-004 | Define crew assignment, quality control, preparation, cleanup, warranty, change-order, damage, and support policies. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Service and operating policy | Not implemented | No approved policy or implementation evidence. | Yes |
| PS-OP-005 | Complete licensing, insurance, subcontractor-compliance, privacy, legal, and consumer-protection review. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Service and operating policy | Not implemented | Privacy and Terms links are placeholders; no compliance evidence is documented. | Yes |

## Product lanes and customer journeys

| ID | Decision or requirement | Status | Source date | Canonical document and section | Implementation status | Test or acceptance evidence | Blocks launch |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PS-PD-001 | Make residential interior painting the operational V1 for instant firm pricing and checkout. | Confirmed | Exact earlier historical source date uncertain; reaffirmed 2026-08-01 | `DECISION_LOG.md` § D-006 | Not implemented | No quote or checkout flow exists. Checklist: LC-QUOTE-001 through LC-QUOTE-010. | Yes |
| PS-PD-002 | Give qualifying standard residential interiors an instant firm price and checkout path. | Confirmed | 2026-07-29 | `PRODUCT_REQUIREMENTS.md` § Product lanes | Not implemented | AC-008 has no implementation or test evidence. | Yes |
| PS-PD-003 | Require photo review before a firm price for complex interiors. | Confirmed | 2026-07-29 | `DECISION_LOG.md` § D-006 | Not implemented | No photo-review intake or review state exists. | Yes |
| PS-PD-004 | Route exterior projects to custom consultation, not firm instant checkout. | Confirmed | 2026-07-29 | `PRODUCT_REQUIREMENTS.md` § Consultation journey | Not implemented | No consultation intake exists; AC-006 is untested. | Yes |
| PS-PD-005 | Route cabinet projects to custom consultation, not firm instant checkout. | Confirmed | 2026-07-29 | `PRODUCT_REQUIREMENTS.md` § Consultation journey | Not implemented | No consultation intake exists; AC-006 is untested. | Yes |
| PS-PD-006 | Route commercial projects to custom consultation, not firm instant checkout. | Confirmed | 2026-07-29 | `PRODUCT_REQUIREMENTS.md` § Consultation journey | Not implemented | No consultation intake exists; AC-006 is untested. | Yes |
| PS-PD-007 | Provide quick quotes and close qualifying sales online before anyone must call the customer. | Confirmed | 2026-07-11 | `DECISION_LOG.md` § D-011 | Not implemented | Current universal process copy includes consultation; no end-to-end sales flow exists. Checklist: LC-QUOTE-005, LC-QUOTE-007, and LC-QUOTE-008. | Yes |
| PS-PD-008 | Include online booking in the approved launch model. | Confirmed | 2026-07-17 | `DECISION_LOG.md` § D-011 | Not implemented | No booking or scheduling capability exists. | Yes |
| PS-PD-009 | Define complete standard-interior eligibility beyond approved room-size rules. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Standard-interior eligibility | Not implemented | Eligibility cases and expected outcomes do not exist. | Yes |
| PS-PD-010 | Collect room type and size, walls, ceilings, baseboards/trim/crown, doors, closets, ceiling height, repairs, color changes, and occupied/furniture level. | Confirmed | 2026-07-31; earlier approval date not provided | `DECISION_LOG.md` § D-009 | Not implemented | No quote inputs or FR-006 tests exist. | Yes |
| PS-PD-011 | Accept photo uploads during quoting. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Proposed capabilities | Not implemented | No file input, upload route, storage, or review workflow exists. | Conditional |
| PS-PD-012 | Define the photo-review channel, required images, reviewer, criteria, turnaround, notifications, and approval record. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Photo review | Not implemented | No approved review procedure or acceptance evidence. | Yes |
| PS-PD-013 | Define consultation intake, format, ownership, availability, service level, and follow-up. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Consultation | Not implemented | No approved consultation workflow or acceptance evidence. | Yes |
| PS-PD-014 | Let customers select scheduling options directly. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Proposed capabilities | Not implemented | No scheduling UI or availability source exists. | Conditional |
| PS-PD-015 | Use homepage calls to action such as “Get My Price” and “No phone call required.” | Proposed | 2026-07-31 | `OPEN_QUESTIONS.md` § Guided quoting and communication | Not implemented | Current CTAs use different copy and only target `#contact`. | No |
| PS-PD-016 | Approve final homepage and funnel copy. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Guided quoting and communication | Partially implemented without final approval | Current website copy is implementation content, not approval evidence. | Yes |

## Confirmed end-state outcomes and release phasing

| ID | Decision or requirement | Status | Source date | Canonical document and section | Implementation status | Test or acceptance evidence | Blocks launch |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PS-ES-001 | A professional standalone PaintSwitch website must be live. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-015 | Partially implemented; production status unverified | A landing page exists, but the reported deployment and end-state acceptance are unverified. Checklist: LC-END-001. | TBD—release phasing unresolved |
| PS-ES-002 | Customers must be able to request quotes. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-015 | Not implemented | Current calls to action lead to a non-interactive section; AC-015 has no evidence. Checklist: LC-END-002. | TBD—release phasing unresolved |
| PS-ES-003 | An AI assistant must qualify leads. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-015 | Not implemented | No AI assistant or lead-qualification workflow exists; AC-016 has no evidence. Checklist: LC-END-003. | TBD—release phasing unresolved |
| PS-ES-004 | Proposals and bookings must work. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-015 | Not implemented | No proposal or booking workflow exists; AC-017 has no evidence. Checklist: LC-END-004. | TBD—release phasing unresolved |
| PS-ES-005 | Payments must be collectible. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-015 | Not implemented | No payment workflow or processor configuration exists; AC-018 has no evidence. Checklist: LC-END-005 and LC-OPS-012. | TBD—release phasing unresolved |
| PS-ES-006 | Marketing must drive traffic and measurable leads. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-015 | Not implemented or verified | No approved campaign attribution or measurable-lead evidence exists; AC-019 has no evidence. Checklist: LC-END-006 and LC-SEO-003/004. | TBD—release phasing unresolved |
| PS-ES-007 | Operations must be capable of completing the first PaintSwitch projects. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-015 | Not implemented or verified | No first-project readiness rehearsal or AC-020 evidence exists. Checklist: LC-END-007 and LC-OPS-001 through LC-OPS-012. | TBD—release phasing unresolved |
| PS-ES-008 | Assign the confirmed end-state outcomes to beta and public-release phases. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § End-state release phasing | Not decided | No approved release map identifies which outcomes block each release. Checklist: LC-DOC-004 and LC-DOC-007. | Yes—phasing decision required |

## Pricing, calculation, and firm-price safety

| ID | Decision or requirement | Status | Source date | Canonical document and section | Implementation status | Test or acceptance evidence | Blocks launch |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PS-PR-001 | Calculate qualifying interior pricing room by room. | Confirmed | 2026-07-29 | `DECISION_LOG.md` § D-007 | Not implemented | No pricing engine or FR-002 tests exist. | Yes |
| PS-PR-002 | Calculate room square footage as length multiplied by width. | Confirmed | 2026-07-30 | `DECISION_LOG.md` § D-008 | Not implemented | No calculator or FR-003 tests exist. | Yes |
| PS-PR-003 | Classify Small as ≤120 sq ft, Medium as 121–200, Large as 201–300, and Oversized as >300 with dimensions and photo review. | Confirmed | 2026-07-30 | `DECISION_LOG.md` § D-008 | Not implemented | AC-003 boundary cases and AC-004 routing have no automated evidence. | Yes |
| PS-PR-004 | Apply one flat $125 fuel/materials adjustment exactly once to every project. | Confirmed | 2026-07-16 | `DECISION_LOG.md` § D-013 | Not implemented | No project-price calculation exists; AC-013 has no test evidence. | Yes |
| PS-PR-005 | Approve exact base prices and calculation values other than the confirmed $125 adjustment. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § Pricing and checkout working assumptions | Not implemented | No approved base-price table exists. | Yes |
| PS-PR-006 | Decide the minimum project policy; $795 is only a working proposal. | Proposed | 2026-07-31 | `OPEN_QUESTIONS.md` § Pricing and checkout working assumptions | Not implemented | No approved minimum or test exists. | Yes |
| PS-PR-007 | Decide whether a deposit is required and its percentage; 10% is only a working proposal. | Proposed | 2026-07-31 | `OPEN_QUESTIONS.md` § Pricing and checkout working assumptions | Not implemented | No approved checkout term or payment flow exists. | Yes |
| PS-PR-008 | Approve exact ceiling-height tiers, review thresholds, and surcharges. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Ceiling-height rules | Not implemented | AC-009 requires no surcharge until approval; no positive pricing cases exist. | Yes |
| PS-PR-009 | Approve repair eligibility and repair allowances. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Standard-interior eligibility and pricing assumptions | Not implemented | No repair thresholds, values, or tests exist. | Yes |
| PS-PR-010 | Approve included-coat and color-change rules. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Pricing and checkout working assumptions | Not implemented | No coat or color-change pricing policy exists. | Yes |
| PS-PR-011 | Decide whether separate travel-zone adjustments exist; none are approved. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Launch geography | Not implemented | No zones or adjustment values exist; the confirmed flat $125 is not a travel-zone rule. | Yes |
| PS-PR-012 | Approve cancellation, rescheduling, refund, and price-expiration policies. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Pricing and checkout working assumptions | Not implemented | No customer terms or checkout policy exists. | Yes |
| PS-PR-013 | Use package names. | Proposed | 2026-07-31 | `OPEN_QUESTIONS.md` § Pricing and checkout working assumptions | Not implemented | No approved package taxonomy exists. | No |
| PS-PR-014 | Approve taxes, discounts, and promotion rules. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Pricing and checkout working assumptions | Not implemented | No approved rules or checkout calculation exists. | Yes |
| PS-SF-001 | Use only approved, versioned pricing inputs and policies; do not invent missing values. | Confirmed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Unsupported-firm-price safety rules | Not implemented | SR-001 through SR-003 have no tests. | Yes |
| PS-SF-002 | Evaluate eligibility before firm pricing and fail away from firm price when inputs or rules are unsupported. | Confirmed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Unsupported-firm-price safety rules | Not implemented | SR-004 and SR-007 have no tests. | Yes |
| PS-SF-003 | Route Oversized and other complex interiors to photo review and exterior/cabinet/commercial projects to consultation. | Confirmed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Unsupported-firm-price safety rules | Not implemented | SR-005 and SR-006 have no tests. | Yes |
| PS-SF-004 | Clearly distinguish firm prices from pending review, consultation, estimates, or other non-firm outputs. | Confirmed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Unsupported-firm-price safety rules | Not implemented | SR-008 has no implementation or content test. | Yes |

## Chatbot, integrations, and automation

| ID | Decision or requirement | Status | Source date | Canonical document and section | Implementation status | Test or acceptance evidence | Blocks launch |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PS-PL-001 | Use GoHighLevel as PaintSwitch's launch backbone or operating engine. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | Repository contains no GoHighLevel integration or configuration evidence; AC-021 has no evidence. Checklist: LC-OPS-008. | TBD—release phasing unresolved |
| PS-IN-002 | Use GoHighLevel for the intended CRM integration/function. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | No CRM client, field mapping, pipeline, workflow, or verified account exists. Checklist: LC-LEAD-001 and LC-OPS-006. | TBD—release phasing unresolved |
| PS-PL-003 | Use GoHighLevel for the intended SMS function. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | No SMS configuration, sender, workflow, consent behavior, or test evidence exists. Checklist: LC-OPS-009. | TBD—release phasing unresolved |
| PS-PL-004 | Use GoHighLevel for the intended email function. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | No email configuration, sender, workflow, consent behavior, or test evidence exists. Checklist: LC-OPS-009. | TBD—release phasing unresolved |
| PS-PL-005 | Use GoHighLevel for the intended AI-chat function. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | No enabled module, model, interface, workflow, or test evidence exists. Checklist: LC-CHAT-001 through LC-CHAT-004. | TBD—release phasing unresolved |
| PS-PL-006 | Use GoHighLevel for the intended automation function. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | No automation workflow or verification evidence exists. Checklist: LC-OPS-009. | TBD—release phasing unresolved |
| PS-PL-007 | Use GoHighLevel for the intended calendar-booking function. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | No calendar, availability, booking workflow, or test evidence exists. Checklist: LC-OPS-010. | TBD—release phasing unresolved |
| PS-PL-008 | Use GoHighLevel for the intended pipeline function. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | No pipeline stages, ownership, mapping, or test evidence exists. Checklist: LC-OPS-006. | TBD—release phasing unresolved |
| PS-PL-009 | Use GoHighLevel for the intended reviews function. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | No reviews workflow, consent, destination, or test evidence exists. Checklist: LC-OPS-011. | TBD—release phasing unresolved |
| PS-PL-010 | Use GoHighLevel for the intended payment-workflow function. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-014 | Not implemented or verified | No payment processor, workflow, credentials, policy, or test evidence exists. Checklist: LC-OPS-012. | TBD—release phasing unresolved |
| PS-PL-011 | Verify and approve GoHighLevel account configuration, credentials, workflows, APIs, field mappings, payment-processor setup, exact enabled modules, owners, and release phasing. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § Booking, customer operations, and integrations | Not implemented or verified | No account or module evidence exists in the repository. Checklist: LC-OPS-008 through LC-OPS-012. | Yes—phasing/configuration decision required |
| PS-CH-001 | Provide a customer-facing chatbot. | Confirmed | 2026-07-11 | `DECISION_LOG.md` § D-012 | Not implemented | Repository contains no chatbot or conversational UI; AC-012 has no evidence. Checklist: LC-DOC-004 and LC-CHAT-001 through LC-CHAT-004. | TBD—release phasing is unresolved |
| PS-CH-002 | Select the chatbot provider. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § Guided quoting and communication | Not implemented | No provider dependency, client, configuration, or decision exists. | Conditional on release phasing |
| PS-CH-003 | Select the chatbot model. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § Guided quoting and communication | Not implemented | No model configuration or decision exists. | Conditional on release phasing |
| PS-CH-004 | Approve chatbot architecture and data flow. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § Guided quoting and communication | Not implemented | No API, persistence, or architecture decision exists. | Conditional on release phasing |
| PS-CH-005 | Approve the exact chatbot interface and release assignment. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § Guided quoting and communication | Not implemented | No interface or phasing decision exists. Checklist: LC-DOC-004 and LC-CHAT-001. | Yes—release-phasing decision |
| PS-CH-006 | Use the chatbot to guide quote intake. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Chatbot responsibilities and limits | Not implemented | No conversation or quote-intake implementation exists. | Conditional |
| PS-CH-007 | Use the chatbot to explain service routing and review requirements. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Chatbot responsibilities and limits | Not implemented | No conversation behavior or tests exist. | Conditional |
| PS-CH-008 | Preserve collected context for a human handoff. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Chatbot responsibilities and limits | Not implemented | No conversation state or handoff integration exists. | Conditional |
| PS-CH-009 | Prevent the chatbot from violating confirmed brand, pricing, eligibility, review, or consultation rules. | Confirmed | 2026-08-01 | `PRODUCT_REQUIREMENTS.md` § Chatbot responsibilities and limits | Not implemented | AC-012 and SR-009 have no adversarial or policy tests. | Conditional on chatbot launch |
| PS-IN-001 | Send automated follow-up. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Proposed capabilities | Not implemented | No email, SMS, job, or messaging integration exists. | Conditional |
| PS-IN-003 | Track conversion events. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Proposed capabilities | Not implemented | No analytics implementation or event specification exists. | Conditional |
| PS-IN-004 | Provide a context-preserving human handoff. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Proposed capabilities | Not implemented | No handoff destination or state transfer exists. | Conditional |
| PS-IN-005 | Configure verified GoHighLevel functions and select any external payment processor, analytics, messaging, scheduling, or other provider needed beyond the confirmed platform decision. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § Booking, customer operations, and integrations | Not implemented | GoHighLevel is selected, but exact modules/configuration and any external providers are unverified or unapproved. | Conditional on release phasing |

## Personas and nonfunctional requirements

| ID | Decision or requirement | Status | Source date | Canonical document and section | Implementation status | Test or acceptance evidence | Blocks launch |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PS-PE-001 | Use a convenience-oriented standard-interior residential persona. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Customer personas | Partially reflected in copy | No persona approval or research evidence. | No |
| PS-PE-002 | Use a complex-interior residential persona. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Customer personas | Not implemented | No persona approval or research evidence. | No |
| PS-PE-003 | Use an exterior-or-cabinet residential persona. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Customer personas | Partially reflected in service cards | No persona approval or research evidence. | No |
| PS-PE-004 | Use a commercial-buyer persona. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Customer personas | Partially reflected in service cards | No persona approval or research evidence. | No |
| PS-NF-001 | Support current mobile and desktop screen sizes. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Nonfunctional requirements | Partially implemented for landing page | Responsive classes exist; no quote-flow or cross-browser QA evidence. | Conditional |
| PS-NF-002 | Meet WCAG 2.2 AA accessibility expectations. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Nonfunctional requirements | Partially implemented | Semantic elements and reduced motion exist; no formal audit evidence. | Conditional |
| PS-NF-003 | Make pricing deterministic, testable, and versioned. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Nonfunctional requirements | Not implemented | No pricing code, version, or tests exist. | Yes |
| PS-NF-005 | Minimize and protect customer/project data in transit and at rest. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Nonfunctional requirements | Not implemented | No collection or storage architecture exists. | Conditional on data collection |
| PS-NF-006 | Preserve entered information where safe and provide recoverable failure steps. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Nonfunctional requirements | Not implemented | No quote, checkout, or booking error handling exists. | Conditional |
| PS-NF-007 | Avoid sensitive data in conversion events. | Proposed | 2026-07-31 | `PRODUCT_REQUIREMENTS.md` § Nonfunctional requirements | Not implemented | No event schema or analytics integration exists. | Conditional |
| PS-GV-001 | Define documentation/product/pricing/operations ownership and recurring review cadence. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Product success and governance | Documentation process exists; owners unset | Canonical review rules exist, but named owners and cadence do not. | No |
| PS-GV-002 | Timebox launch stand-ups to 10 minutes, not 30 minutes. | Confirmed | 2026-07-18 | `DECISION_LOG.md` § D-017 | Not verifiable from repository | Meeting agenda or calendar evidence would verify duration when stand-ups begin. Checklist: LC-DOC-006. | No |
| PS-GV-003 | Decide launch stand-up frequency, participants, facilitator, schedule, agenda, and escalation format. | TBD | 2026-08-01 | `OPEN_QUESTIONS.md` § Product success and governance | Not decided | No approved stand-up operating plan exists. Checklist: LC-DOC-006. | No |
| PS-MS-001 | Define launch date, milestones, and success metrics. | TBD | 2026-07-31 | `OPEN_QUESTIONS.md` § Product success and governance | Not implemented | No approved date, milestone plan, or KPI thresholds exist. | Yes |

## Historical and superseded records

| ID | Decision or requirement | Status | Source date | Canonical document and section | Implementation status | Test or acceptance evidence | Blocks launch |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PS-HI-001 | Lint and production build passed on Codyx with Next.js 16.2.10 and static routes `/` and `/_not-found`. | Historical/Needs verification | 2026-07-30 | `DEVELOPMENT_STATUS.md` § Local verification report | Previously reported | No current rerun during documentation-only work. | Yes—reverify before launch |
| PS-HI-002 | `npm ci` reported 12 high-severity vulnerabilities. | Historical/Needs verification | 2026-07-30 | `DEVELOPMENT_STATUS.md` § Dependency-install report | Untriaged | No current advisory/path triage; never run `npm audit fix --force` automatically. | Yes—triage before launch |
| PS-HI-003 | Vercel deployment and GitHub-to-Vercel automatic deployment exist. | Historical/Needs verification | 2026-07-24 | `DEVELOPMENT_STATUS.md` § Deployment report | Previously reported | Current health and connection are unverified; no tracked Vercel config. | Yes—verify before launch |
| PS-SU-001 | Treat the customer-facing chatbot itself as Proposed. | Superseded | 2026-07-31 | `DECISION_LOG.md` § D-012 | Documentation corrected | Superseded by confirmed 2026-07-11 chatbot decision; detailed behavior remains Proposed/TBD. | No |
| PS-SU-002 | Treat every numeric pricing value as unapproved. | Superseded | 2026-07-31 | `DECISION_LOG.md` § D-013 | Documentation corrected | Superseded by confirmed $125 fuel/materials adjustment dated 2026-07-16. | No |
| PS-SU-003 | Treat CRM integration itself as merely Proposed. | Superseded | 2026-07-31 | `DECISION_LOG.md` § D-014 | Documentation corrected | Superseded by the confirmed 2026-07-18 GoHighLevel launch-backbone and CRM decision; exact configuration remains TBD. | No |
| PS-SU-004 | Use a 30-minute duration for launch stand-ups. | Superseded | Prior working assumption; exact date not documented | `DECISION_LOG.md` § D-017 | Documentation corrected | Superseded by the confirmed 2026-07-18 decision to timebox launch stand-ups to 10 minutes. Checklist: LC-DOC-006. | No |

No **Rejected** requirements are currently documented.

## Contradictions and gaps requiring explicit handling

1. The site markets Drywall Repair, but canonical scope confirms four painting categories and leaves standalone drywall marketing **TBD** (`PS-BR-006`).
2. The universal website process says “Schedule Consultation,” but qualifying operational-V1 interiors must be able to close online without a required pre-sale call or consultation (`PS-PD-007`).
3. The footer omits Cabinet from its Services group even though Cabinet is a confirmed marketed category (`PS-BR-005`).
4. Calls to action imply an estimate/contact journey but only jump to a non-interactive section; no lead intake, quote, checkout, or booking workflow exists.
5. The customer-facing chatbot is **Confirmed** but absent from the implementation; its release phasing is still **TBD** (`PS-CH-001`, `PS-CH-005`).
6. The $125 fuel/materials adjustment is **Confirmed** but cannot be applied because no pricing engine exists (`PS-PR-004`).
7. GoHighLevel is the **Confirmed** launch operating engine, but no account, credential, workflow, API, mapping, payment-processor configuration, or enabled module is verified (`PS-PL-001`, `PS-PL-011`).
8. The seven end-state outcomes are **Confirmed**, but their beta/public-release order is **TBD** (`PS-ES-001` through `PS-ES-008`).
9. The owner-preferred paint-roller logo direction is **Confirmed**, but no production logo file is verified (`PS-VI-001`, `PS-VI-002`).

These contradictions are recorded rather than resolved from website copy.
