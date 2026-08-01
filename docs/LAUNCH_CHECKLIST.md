# PaintSwitch launch checklist

Last updated: 2026-08-01

This checklist organizes the remaining work needed for PaintSwitch releases. It does not approve **Proposed** or **TBD** product decisions. Priorities are P0 (required for the applicable release), P1 (important immediately after blockers), and P2 (valuable but deferrable). Task statuses are **Complete**, **Not started**, **Blocked**, or **Historical/Needs verification**. PaintSwitch's confirmed end state is broader than an early lead-generation beta; until release phasing is approved, an end-state task is a blocker only when it is assigned to the release being evaluated.

## Documentation and approvals

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-DOC-001 | Maintain the canonical master context, product requirements, decision log, open questions, development status, and architecture documents. | P0 | Complete | None | Cross-document audit shows dated decisions, end-state outcomes, GoHighLevel, chatbot, and the $125 adjustment consistently classified. | No |
| LC-DOC-002 | Maintain unique-ID requirements traceability and this launch checklist. | P0 | Complete | LC-DOC-001 | Every current requirement has one traceability ID and every checklist task has one task ID. | No |
| LC-DOC-003 | Decide whether drywall repair is a standalone marketed service. | P0 | Blocked | User approval | Decision is logged; website service taxonomy and canonical scope can be made consistent. | Yes |
| LC-DOC-004 | Decide which release first requires the confirmed customer-facing chatbot and AI lead qualification. | P0 | Blocked | User approval; PS-ES-003 and PS-ES-008 | Decision log maps chatbot and AI lead qualification to a named release, making its blocker state unambiguous. | Yes—release-phasing decision |
| LC-DOC-005 | Approve final homepage, quote-funnel, review, consultation, and checkout copy. | P0 | Blocked | Eligibility, pricing, and policy decisions | Copy review confirms no unsupported claims, prices, service areas, or mandatory-consultation implication for qualifying interiors. | Yes |
| LC-DOC-006 | Name documentation, product, pricing, and operations owners and a review cadence. Keep launch stand-ups at the confirmed 10-minute duration. | P1 | Blocked | User approval; PS-GV-002 and PS-GV-003 | Owners, cadence, participants, and escalation path are recorded; launch stand-up templates are limited to 10 minutes. | No |
| LC-DOC-007 | Approve a release map for every confirmed end-state outcome. | P0 | Blocked | User approval; PS-ES-008 | Each outcome PS-ES-001 through PS-ES-007 is assigned to a named release with an explicit blocker state. | Yes—release-phasing decision |
| LC-DOC-008 | Produce and approve a final production visual identity that follows or intentionally supersedes the confirmed paint-roller-with-paint-behind direction. | P1 | Blocked | Design work and owner approval; PS-VI-001 and PS-VI-002 | A specific production logo asset and usage rules are approved and recorded without treating the historical HTML example as the final file. | Conditional on release branding scope |

## Confirmed end-state outcomes and release phasing

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-END-001 | Launch a professional standalone PaintSwitch website. | P0 | Not started | Approved release scope and final launch QA; PS-ES-001 | The approved production URL serves a professional PaintSwitch-only experience and passes the applicable launch acceptance tests. | Conditional on release assignment |
| LC-END-002 | Enable customers to request quotes. | P0 | Not started | LC-LEAD-001 and the applicable intake path; PS-ES-002 | A production test customer can submit a quote request and the responsible operator receives it once with recovery evidence. | Conditional on release assignment |
| LC-END-003 | Enable an AI assistant to qualify leads. | P0 | Blocked | LC-DOC-004, LC-CHAT-001, and LC-CHAT-002; PS-ES-003 | Approved qualification scenarios route, collect, and escalate correctly without unsupported prices or promises. | Conditional on release assignment |
| LC-END-004 | Make proposals and bookings work. | P0 | Blocked | Approved proposal workflow, scheduling rules, and platform configuration; PS-ES-004 | An authorized test lead receives a correct proposal and completes a conflict-safe booking with audit evidence. | Conditional on release assignment |
| LC-END-005 | Make payments collectible. | P0 | Blocked | LC-BIZ-006, LC-BIZ-009, legal review, and verified payment configuration; PS-ES-005 | An approved test payment succeeds, fails safely, is recorded correctly, and follows approved disclosures and refund terms. | Conditional on release assignment |
| LC-END-006 | Drive traffic and measurable leads through marketing. | P0 | Blocked | Approved marketing plan, consent rules, and LC-SEO-003/004; PS-ES-006 | A campaign produces attributable, consent-compliant production traffic and lead events under approved definitions. | Conditional on release assignment |
| LC-END-007 | Establish operations capable of completing the first PaintSwitch projects. | P0 | Blocked | LC-OPS-001 through LC-OPS-007; PS-ES-007 | An end-to-end operational rehearsal proves staffing, materials, scheduling, delivery, exception handling, and customer communication. | Conditional on release assignment |

## Business/pricing decisions

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-BIZ-001 | Approve exact DMV cities, counties, ZIP codes, service boundaries, and any travel zones. | P0 | Blocked | User/business approval | An address fixture set produces approved eligible/ineligible results at every boundary. | Yes |
| LC-BIZ-002 | Approve the complete qualifying-standard-interior rules. | P0 | Blocked | Operations and pricing approval | A written eligibility matrix covers room types, irregular spaces, ceiling height, repairs, color changes, furniture, and mixed projects. | Yes |
| LC-BIZ-003 | Approve base prices for all instant-eligible room/surface combinations. | P0 | Blocked | Margin/cost validation | Versioned price table has an effective date, owner, and worked examples. | Yes |
| LC-BIZ-004 | Retain the confirmed one-time $125 fuel/materials adjustment in every project-price specification. | P0 | Complete | Decision D-013 | All canonical pricing documents identify exactly one $125 adjustment per project and distinguish it from travel zones. | No |
| LC-BIZ-005 | Decide the minimum-project policy; do not use the proposed $795 minimum until approved. | P0 | Blocked | Pricing approval | Decision log records an approved minimum or explicitly confirms no minimum. | Yes |
| LC-BIZ-006 | Decide deposit/payment policy; do not use the proposed 10% deposit until approved. | P0 | Blocked | Checkout and finance approval | Decision log states whether payment is collected, amount/percentage, timing, refunds, and customer disclosure. | Yes |
| LC-BIZ-007 | Approve ceiling-height, repair, coat, and color-change eligibility and pricing rules. | P0 | Blocked | Operations and pricing approval | Boundary examples have expected routing and price effects; no unapproved multiplier remains. | Yes |
| LC-BIZ-008 | Decide travel-zone pricing separately from the confirmed flat $125 adjustment. | P0 | Blocked | LC-BIZ-001 and pricing approval | Decision explicitly approves no zone adjustment or defines zones and values without conflating the $125 rule. | Yes |
| LC-BIZ-009 | Approve cancellation, rescheduling, refund, price-expiration, tax, discount, and promotion rules. | P0 | Blocked | Legal, finance, and operations approval | Customer terms and calculation fixtures cover each approved rule. | Yes |
| LC-BIZ-010 | Decide package names and packaging strategy. | P2 | Blocked | Product approval | Decision records approved names/rules or rejects packages. | No |

## Lead-generation MVP

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-LEAD-001 | Define the minimum lead data, consent, GoHighLevel CRM/pipeline destination, field mappings, owner, and response-time expectation for consultation projects. | P0 | Blocked | Privacy/legal, operations, and verified GoHighLevel configuration; PS-IN-002 and PS-PL-011 | Approved intake specification maps every field to a purpose, verified GoHighLevel destination, and operational owner. | Yes |
| LC-LEAD-002 | Implement a connected lead/contact intake instead of `#contact` anchor-only calls to action. | P0 | Not started | LC-LEAD-001 | A production test lead is validated, submitted once, delivered to the owner, acknowledged, and recoverable on failure. | Yes |
| LC-LEAD-003 | Implement consultation routing for exterior, cabinet, and commercial leads. | P0 | Not started | LC-LEAD-001 and approved consultation process | Each service produces the correct consultation request and never exposes firm instant checkout. | Yes |
| LC-LEAD-004 | Implement a usable complex-interior/photo-review intake channel. | P0 | Blocked | Photo-review workflow and photo-channel decision | A test customer submits required evidence and the reviewer can approve, reject, or request more information with an audit trail. | Yes |
| LC-LEAD-005 | Replace placeholder testimonials and customer labels with verified content or remove the section. | P0 | Blocked | Verified customer permission and claims review | No placeholder or fabricated testimonial is visible; permissions/evidence are retained. | Yes |
| LC-LEAD-006 | Correct service navigation and taxonomy after the drywall decision. | P0 | Blocked | LC-DOC-003 | Main page, header, footer, metadata, and lead routing show the same approved service set. | Yes |

## Instant quote and checkout

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-QUOTE-001 | Implement room-by-room quote intake with every confirmed input. | P0 | Not started | LC-BIZ-002 | Multi-room tests preserve every required field independently for each room. | Yes |
| LC-QUOTE-002 | Implement length × width and exact Small/Medium/Large/Oversized classification. | P0 | Not started | LC-QUOTE-001 | Automated tests pass for 120, 121, 200, 201, 300, and >300 sq ft boundaries. | Yes |
| LC-QUOTE-003 | Implement deterministic, versioned base-price calculation. | P0 | Blocked | LC-BIZ-003 and LC-BIZ-007 | Approved fixtures reproduce expected room and project totals with recorded price-version metadata. | Yes |
| LC-QUOTE-004 | Apply the confirmed flat $125 fuel/materials adjustment exactly once per project. | P0 | Blocked | LC-QUOTE-003 | Tests prove zero duplicate/missing adjustments for one-room, multi-room, reviewed, and consultation-priced projects. | Yes |
| LC-QUOTE-005 | Implement fail-closed eligibility and routing. | P0 | Blocked | LC-BIZ-001, LC-BIZ-002, and LC-BIZ-007 | Unsupported, incomplete, complex, and out-of-area cases never receive firm instant prices. | Yes |
| LC-QUOTE-006 | Implement firm-price versus pending-review/consultation labeling. | P0 | Not started | LC-QUOTE-005 | Content tests prevent “firm” or “final” labels before eligibility and pricing validation pass. | Yes |
| LC-QUOTE-007 | Implement checkout under approved payment, cancellation, tax, and refund terms. | P0 | Blocked | LC-BIZ-006 and LC-BIZ-009 | A qualifying test project completes checkout with correct totals, disclosures, confirmation, and failure recovery. | Yes |
| LC-QUOTE-008 | Implement online booking under approved availability and rescheduling rules. | P0 | Blocked | Operations scheduling model and LC-BIZ-009 | A test customer books an available slot without a call; capacity conflict and rescheduling tests pass. | Yes |
| LC-QUOTE-009 | Implement reviewed-price transition for complex interiors. | P0 | Blocked | LC-LEAD-004 and review policy | Pending projects cannot check out; approved reviewed prices can enter the authorized checkout path with review evidence. | Yes |
| LC-QUOTE-010 | Add automated unit, integration, and end-to-end coverage for quote, routing, checkout, and booking. | P0 | Not started | LC-QUOTE-001 through LC-QUOTE-009 | CI runs approved boundary, safety, price, payment, and recovery scenarios successfully. | Yes |

## Chatbot

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-CHAT-001 | Decide release phasing, whether GoHighLevel AI chat is the implementation or another provider is needed, model, architecture, interface, data handling, and operating owner. | P0 | Blocked | User, product, technical, privacy, and operations approval; PS-PL-005 and PS-PL-011 | Decision log and architecture decision cover every item without treating the intended GoHighLevel AI-chat function as verified implementation. | Yes—release-phasing decision |
| LC-CHAT-002 | Approve detailed chatbot responsibilities, quote role, knowledge sources, and escalation criteria. | P0 | Blocked | LC-CHAT-001 | Approved conversation specification distinguishes guidance, review, consultation, and human escalation. | Conditional on launch phasing |
| LC-CHAT-003 | Implement the confirmed customer-facing chatbot. | P0 | Not started | LC-CHAT-001 and LC-CHAT-002 | Production UI is reachable and meets the approved interface, availability, accessibility, and disclosure requirements. | Conditional on release phasing |
| LC-CHAT-004 | Enforce brand, pricing, eligibility, review, consultation, and unsupported-answer safeguards. | P0 | Not started | LC-CHAT-003 and approved policies | Adversarial tests prove the chatbot never mentions a Jen affiliation, invents prices, bypasses gates, or promises unapproved policy. | Conditional on release phasing |
| LC-CHAT-005 | Implement and test approved human handoff with context preservation. | P1 | Blocked | Human handoff approval and LC-CHAT-003 | Test conversation reaches the correct owner once with approved context and no prohibited sensitive data. | Conditional |

## Operations and notifications

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-OPS-001 | Define employee/subcontractor assignment, capacity, quality, and escalation procedures. | P0 | Blocked | Operations approval | Runbook covers both crew types and names accountable roles. | Yes |
| LC-OPS-002 | Define paint procurement, approved products/finishes, substitutions, and material allowances. | P0 | Blocked | Operations and pricing approval | Every supported quote maps to procurable materials and an approved substitution path. | Yes |
| LC-OPS-003 | Define photo-review staffing, SLA, criteria, and customer communication. | P0 | Blocked | Requirement PS-PD-012 and operations approval | Timed rehearsal completes review, request-for-more-information, approval, and rejection paths. | Yes |
| LC-OPS-004 | Define booking capacity, confirmations, reminders, rescheduling, cancellation, and no-show handling. | P0 | Blocked | LC-BIZ-009 and operations approval | Schedule simulation prevents double booking and produces approved customer notifications. | Yes |
| LC-OPS-005 | Implement required quote, review, checkout, booking, and exception notifications. | P0 | Blocked | Approved channels/content and LC-OPS-003/004 | Test events send one accurate notification to the correct recipient and expose retry/failure status. | Yes |
| LC-OPS-006 | Configure and implement the confirmed GoHighLevel CRM and pipeline functions; separately obtain approval for exact automated-follow-up and human-handoff behavior. | P1 | Blocked | Verified GoHighLevel account/configuration, PS-IN-002, PS-PL-008, and workflow approval | CRM and pipeline integrations pass deduplication, ownership, consent, lifecycle, and context-transfer tests; unapproved follow-up or handoff behavior remains disabled. | Conditional on release assignment |
| LC-OPS-007 | Create support, incident, refund, change-order, warranty, and damage-handling runbooks. | P0 | Blocked | Legal and operations approval | Tabletop scenarios produce an accountable, policy-compliant response for each case. | Yes |
| LC-OPS-008 | Verify the selected GoHighLevel account, credentials, enabled modules, ownership, environments, and release-specific implementation scope. | P0 | Blocked | Account access and owner/technical approval; PS-PL-001 and PS-PL-011 | A reviewed inventory proves account ownership and records only verified configurations without exposing credentials in canonical docs. | Conditional on release assignment |
| LC-OPS-009 | Configure the confirmed intended GoHighLevel SMS, email, and automation functions for approved workflows. | P1 | Blocked | LC-OPS-008, consent rules, approved content, and PS-PL-003/004/006 | Approved test events send exactly one consent-compliant message, record automation state, and expose retry/failure status. | Conditional on release assignment |
| LC-OPS-010 | Configure GoHighLevel calendar booking and proposal/booking workflows for the applicable release. | P0 | Blocked | LC-OPS-004/008, proposal rules, and PS-PL-007 | Test proposal and booking paths use verified configuration, prevent conflicts, and retain an auditable customer record. | Conditional on release assignment |
| LC-OPS-011 | Configure the intended GoHighLevel reviews function under an approved review-request policy. | P2 | Blocked | LC-OPS-008, customer-consent/claims policy, and PS-PL-009 | Review requests are sent only under approved triggers, with opt-out and evidence retained. | Conditional on release assignment |
| LC-OPS-012 | Configure the intended GoHighLevel payment workflows and the separately approved payment processor. | P0 | Blocked | LC-BIZ-006/009, LC-OPS-008, legal/security review, and PS-PL-010/011 | End-to-end test payments, failures, refunds, records, and disclosures match approved policy and verified processor configuration. | Conditional on release assignment |

## Trust, legal, and privacy

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-TRUST-001 | Approve and publish Privacy and Terms content; replace `#` placeholders. | P0 | Blocked | Legal review and final data/payment flows | Production links open approved, versioned documents covering actual collection and checkout behavior. | Yes |
| LC-TRUST-002 | Complete licensing, insurance, subcontractor, warranty, and consumer-protection review for the approved market. | P0 | Blocked | Exact service area and legal review | Launch file contains current evidence and approved customer disclosures for every launch jurisdiction. | Yes |
| LC-TRUST-003 | Approve data inventory, retention, deletion, access, security, and vendor-processing rules. | P0 | Blocked | Final quote/chatbot/integration architecture | Data-flow review accounts for every field, vendor, retention period, and deletion path. | Yes |
| LC-TRUST-004 | Validate all claims, testimonials, service promises, and trust statements. | P0 | Blocked | Final copy and operational policy | Each public claim has retained evidence and no placeholder or unsupported promise remains. | Yes |
| LC-TRUST-005 | Implement required consent, disclosures, and customer communication preferences. | P0 | Blocked | Legal review and channel decisions | Consent records and opt-out behavior pass legal-approved test cases. | Yes |

## SEO and conversion tracking

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-SEO-001 | Approve title, description, service, geography, and social-sharing metadata against final scope. | P1 | Blocked | LC-DOC-005 and LC-BIZ-001 | Page inspection shows approved metadata with no unsupported location or service claims. | No |
| LC-SEO-002 | Decide and implement sitemap, robots, canonical URL, and structured-data strategy. | P1 | Not started | Final production URL and service scope | Search-engine validation finds correct canonical/indexing directives and valid approved schema. | No |
| LC-SEO-003 | Approve conversion events, definitions, provider, consent behavior, and sensitive-data exclusions. | P1 | Blocked | Product/privacy approval | Event specification maps each event to a business question and excludes prohibited data. | Conditional |
| LC-SEO-004 | Implement and validate approved conversion tracking. | P1 | Not started | LC-SEO-003 | Test quote/lead/checkout/booking paths emit one correct consent-compliant event each. | Conditional |

## Deployment, security, and launch QA

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-QA-001 | Verify the reported Vercel production URL, ownership, active branch, environment, and GitHub automatic deployment. | P0 | Historical/Needs verification | Deployment access | A documented test commit or approved non-code verification proves current production mapping and health. | Yes |
| LC-QA-002 | Re-run lint and production build after application changes. | P0 | Historical/Needs verification | Final launch candidate | Existing lint and build commands pass on the launch commit; route output is recorded. | Yes |
| LC-QA-003 | Triage the reported 12 high-severity dependency vulnerabilities without automatically running `npm audit fix --force`. | P0 | Historical/Needs verification | Current advisory report and dependency review | Each advisory has affected path, exploitability, remediation/acceptance decision, owner, and date. | Yes |
| LC-QA-004 | Add tracked CI for lint, build, and approved automated tests. | P0 | Not started | Test commands and repository policy | A pull-request run blocks merge on a deliberate lint, build, or test failure. | Yes |
| LC-QA-005 | Perform cross-browser, responsive, keyboard, screen-reader, and WCAG QA. | P0 | Not started | Launch candidate | Signed QA matrix passes supported browsers/viewports and approved accessibility criteria. | Yes |
| LC-QA-006 | Perform end-to-end production smoke tests for lead, quote, routing, review, checkout, booking, chatbot, and notifications. | P0 | Blocked | All applicable P0 feature work | Production-safe test cases complete each supported path and prove every prohibited path remains blocked. | Yes |
| LC-QA-007 | Complete security review for inputs, uploads, APIs, payments, chatbot, secrets, abuse controls, and vendor callbacks. | P0 | Blocked | Final architecture and providers | Threat model and security tests resolve or explicitly accept every launch-critical finding. | Yes |
| LC-QA-008 | Establish monitoring, alerting, incident ownership, rollback, and customer-support procedures. | P0 | Not started | Deployment and operations ownership | Launch rehearsal detects a synthetic failure, alerts the owner, and demonstrates rollback/recovery. | Yes |
| LC-QA-009 | Verify performance and production error behavior. | P1 | Not started | Launch candidate | Approved performance budgets and 404/500/recovery scenarios pass in production-like conditions. | No |
