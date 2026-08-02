# PaintSwitch launch checklist

Last updated: 2026-08-01

This checklist organizes the remaining work needed for PaintSwitch releases. It does not approve **Proposed** or **TBD** product decisions. Priorities are P0 (required for the applicable release), P1 (important immediately after blockers), and P2 (valuable but deferrable). Task statuses are **Complete**, **Not started**, **Blocked**, or **Historical/Needs verification**. Decision D-018 confirms the lead-generation beta as the first release; deferred end-state work is not a beta blocker unless explicitly listed in the beta release gate.

## Lead-generation beta readiness snapshot

As of 2026-08-01, the lead-generation beta is approximately **25% ready** and **75% remains**. This is a directional weighted estimate, not a claim that acceptance testing has passed:

| Readiness area | Weight | Current credit | Evidence |
| --- | ---: | ---: | --- |
| Scope and canonical decisions | 10% | 10% | Beta scope is approved and traced under D-018. |
| Website foundation and production content | 20% | 10% | Responsive landing-page foundation exists; beta CTA, form, taxonomy, disclosures, and placeholder cleanup remain. |
| Lead capture and GoHighLevel delivery | 30% | 0% | No form, handler, verified pipeline, notification, or submission state exists. |
| Trust, consent, and legal readiness | 15% | 0% | Privacy/Terms are placeholders; approved consent and legal text are absent. |
| Deployment, security, and QA | 15% | 5% | The reported Vercel URL returned HTTP 200 on 2026-08-01; deployment ownership, candidate build, security, and QA remain unverified. |
| Lead operations and measurable attribution | 10% | 0% | Lead owner/SLA, production attribution, and end-to-end operating evidence are absent. |
| **Total** | **100%** | **25%** | **75% remains before the approved beta can launch.** |

## Documentation and approvals

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-DOC-001 | Maintain the canonical master context, product requirements, decision log, open questions, development status, and architecture documents. | P0 | Complete | None | Cross-document audit shows dated decisions, end-state outcomes, GoHighLevel, chatbot, and the $125 adjustment consistently classified. | No |
| LC-DOC-002 | Maintain unique-ID requirements traceability and this launch checklist. | P0 | Complete | LC-DOC-001 | Every current requirement has one traceability ID and every checklist task has one task ID. | No |
| LC-DOC-003 | Decide whether drywall repair is a standalone marketed beta service. | P0 | Complete | Decision D-018 | Beta scope excludes standalone Drywall Repair; later-release scope remains TBD. | No—decision complete |
| LC-DOC-004 | Decide whether the confirmed chatbot and AI lead qualification are required for beta. | P0 | Complete | Decision D-018 | Both are deferred from beta to a later approved release. | No—decision complete |
| LC-DOC-005 | Approve final homepage, quote-funnel, review, consultation, and checkout copy. | P0 | Blocked | Eligibility, pricing, and policy decisions | Copy review confirms no unsupported claims, prices, service areas, or mandatory-consultation implication for qualifying interiors. | Yes |
| LC-DOC-006 | Name documentation, product, pricing, and operations owners and a review cadence. Keep launch stand-ups at the confirmed 10-minute duration. | P1 | Blocked | User approval; PS-GV-002 and PS-GV-003 | Owners, cadence, participants, and escalation path are recorded; launch stand-up templates are limited to 10 minutes. | No |
| LC-DOC-007 | Approve the first release milestone and beta blocker scope. | P0 | Complete | Decision D-018; PS-ES-008 | The lead-generation beta is first and deferred outcomes are identified. | No—decision complete |
| LC-DOC-009 | Assign deferred end-state outcomes to specific post-beta releases. | P1 | Blocked | User approval; PS-ES-009 | Each deferred outcome is assigned to a named post-beta release. | No—deferred |
| LC-DOC-008 | Produce and approve a final production visual identity that follows or intentionally supersedes the confirmed paint-roller-with-paint-behind direction. | P1 | Blocked | Design work and owner approval; PS-VI-001 and PS-VI-002 | A specific production logo asset and usage rules are approved and recorded without treating the historical HTML example as the final file. | Conditional on release branding scope |

## Lead-generation beta release gate

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-BETA-001 | Maintain the approved beta scope and traceability. | P0 | Complete | D-018 and PS-LB-001 through PS-LB-012 | Canonical documents agree on beta scope and deferred capabilities. | No |
| LC-BETA-002 | Make service cards, navigation, footer, metadata, and routing show only the four approved beta categories. | P0 | Not started | PS-LB-002 | Interior, exterior, cabinet, and commercial appear consistently; standalone Drywall Repair is absent. | Yes |
| LC-BETA-003 | Implement approved “Request a Quote” actions and final supporting beta copy. | P0 | Blocked | Final supporting-copy approval; PS-LB-003/009 | Every primary action opens or reaches the working intake and copy contains no unsupported claim. | Yes |
| LC-BETA-004 | Add the DMV manual-availability-review disclosure. | P0 | Not started | PS-LB-004/009 | Customers are told availability and pricing are confirmed after review; no exact boundary is promised. | Yes |
| LC-BETA-005 | Build the approved lead form and validation. | P0 | Not started | PS-LB-005 and approved consent text | All approved fields validate accessibly on mobile and desktop without collecting unnecessary data. | Yes |
| LC-BETA-006 | Verify the GoHighLevel account, CRM pipeline, destination stage, field mappings, ownership, and secure connection method. | P0 | Blocked | Account access and PS-LB-012 | A reviewed configuration inventory and test destination exist without credentials in canonical docs. | Yes |
| LC-BETA-007 | Connect form submissions to GoHighLevel exactly once. | P0 | Not started | LC-BETA-005/006 | Valid production-safe test leads arrive once with every approved field; failures are observable and recoverable. | Yes |
| LC-BETA-008 | Configure and test immediate internal lead notification. | P0 | Blocked | Named lead owner, approved channel, and LC-BETA-006 | The responsible operator receives one accurate notification for a test lead. | Yes |
| LC-BETA-009 | Implement accurate on-page success and recoverable failure states. | P0 | Not started | LC-BETA-007 | UI never reports success before delivery succeeds and provides an approved next step after failure. | Yes |
| LC-BETA-010 | Implement basic lead-source and campaign attribution. | P0 | Blocked | Detailed beta event definitions, consent decision, and PS-LB-008/012 | Test sources persist to the verified lead record without sensitive-data leakage. | Yes |
| LC-BETA-011 | Name the lead owner and approve the response-time target and operating hours. | P0 | Blocked | Owner/operations decision | Owner, backup, operating hours, and measurable response-time target are canonical and rehearsed. | Yes |
| LC-BETA-012 | Decide whether customer email/SMS acknowledgment is included and approve its content and consent behavior. | P1 | Blocked | Owner and legal/privacy approval | The decision is canonical; if enabled, one compliant acknowledgment is proven end to end. | Conditional—beta decision required |
| LC-BETA-013 | Remove placeholder testimonials or replace them with verified, permissioned content. | P0 | Blocked | Claims/content decision | No placeholder or unsupported testimonial is present in production. | Yes |
| LC-BETA-014 | Publish approved Privacy and Terms documents and communication consent. | P0 | Blocked | Legal/privacy review and final data flow | Production links open approved documents and consent records match actual collection and messaging. | Yes |
| LC-BETA-015 | Implement approved anti-spam, abuse, validation, data-minimization, retention, and deletion controls. | P0 | Blocked | Security/privacy decisions and final form architecture | Abuse tests, data-flow review, retention, and deletion cases pass. | Yes |
| LC-BETA-016 | Keep the current production URL reachable. | P0 | Complete | Existing Vercel deployment | A read-only check returned HTTP 200 on 2026-08-01. | No—health currently verified |
| LC-BETA-017 | Verify deployment ownership, production branch, environment settings, custom-domain decision, and automatic deployment. | P0 | Historical/Needs verification | Deployment access and domain decision | Production mapping and rollback path are documented and verified. | Yes |
| LC-BETA-018 | Run lint and production build on the beta candidate and triage current dependency advisories without automatic force fixes. | P0 | Not started | Beta candidate and advisory review | Checks pass and each launch-relevant advisory has an owner and disposition. | Yes |
| LC-BETA-019 | Complete responsive, accessibility, browser, performance, security, and content QA. | P0 | Not started | Beta candidate | Signed QA covers supported mobile/desktop paths and resolves launch-critical findings. | Yes |
| LC-BETA-020 | Complete a production end-to-end lead smoke test and operator-response rehearsal. | P0 | Blocked | LC-BETA-002 through LC-BETA-019 | A real production-safe test lead submits once, reaches GoHighLevel, attributes correctly, notifies the owner, and receives the approved operational response. | Yes |

## Confirmed end-state outcomes and release phasing

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-END-001 | Launch a professional standalone PaintSwitch website. | P0 | Not started | Approved beta scope and final beta QA; PS-ES-001 | The production URL serves a professional PaintSwitch-only beta and passes LC-BETA-002 through LC-BETA-020. | Yes—beta |
| LC-END-002 | Enable customers to request quotes. | P0 | Not started | LC-BETA-005 through LC-BETA-009; PS-ES-002 | A production test customer submits once and the responsible operator receives it with recovery evidence. | Yes—beta |
| LC-END-003 | Enable an AI assistant to qualify leads. | P0 | Blocked | Post-beta phasing and LC-CHAT-001/002; PS-ES-003 | Approved qualification scenarios route, collect, and escalate correctly. | No—deferred from beta |
| LC-END-004 | Make proposals and bookings work. | P0 | Blocked | Approved proposal workflow, scheduling rules, and platform configuration; PS-ES-004 | An authorized test lead receives a correct proposal and completes a conflict-safe booking. | No—deferred from beta |
| LC-END-005 | Make payments collectible. | P0 | Blocked | LC-BIZ-006, LC-BIZ-009, legal review, and verified payment configuration; PS-ES-005 | An approved test payment succeeds, fails safely, and follows approved terms. | No—deferred from beta |
| LC-END-006 | Drive traffic and measurable leads through marketing. | P0 | Blocked | LC-BETA-010, approved campaigns, and consent rules; PS-ES-006 | A campaign produces attributable, consent-compliant production traffic and leads. | Yes—beta |
| LC-END-007 | Establish operations capable of completing the first PaintSwitch projects. | P0 | Blocked | LC-OPS-001 through LC-OPS-007; PS-ES-007 | An end-to-end operational rehearsal proves project-delivery readiness. | No—full project delivery is outside the beta gate; lead-response readiness is required |

## Business/pricing decisions

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-BIZ-001 | Approve exact DMV cities, counties, ZIP codes, service boundaries, and any travel zones. | P0 | Blocked | User/business approval | An address fixture set produces approved eligible/ineligible results at every boundary. | No—manual beta review approved |
| LC-BIZ-002 | Approve the complete qualifying-standard-interior rules. | P0 | Blocked | Operations and pricing approval | A written eligibility matrix covers room types, irregular spaces, ceiling height, repairs, color changes, furniture, and mixed projects. | No—deferred from beta |
| LC-BIZ-003 | Approve base prices for all instant-eligible room/surface combinations. | P0 | Blocked | Margin/cost validation | Versioned price table has an effective date, owner, and worked examples. | No—deferred from beta |
| LC-BIZ-004 | Retain the confirmed one-time $125 fuel/materials adjustment in every project-price specification. | P0 | Complete | Decision D-013 | All canonical pricing documents identify exactly one $125 adjustment per project and distinguish it from travel zones. | No |
| LC-BIZ-005 | Decide the minimum-project policy; do not use the proposed $795 minimum until approved. | P0 | Blocked | Pricing approval | Decision log records an approved minimum or explicitly confirms no minimum. | No—deferred from beta |
| LC-BIZ-006 | Decide deposit/payment policy; do not use the proposed 10% deposit until approved. | P0 | Blocked | Checkout and finance approval | Decision log states whether payment is collected, amount/percentage, timing, refunds, and customer disclosure. | No—deferred from beta |
| LC-BIZ-007 | Approve ceiling-height, repair, coat, and color-change eligibility and pricing rules. | P0 | Blocked | Operations and pricing approval | Boundary examples have expected routing and price effects; no unapproved multiplier remains. | No—deferred from beta |
| LC-BIZ-008 | Decide travel-zone pricing separately from the confirmed flat $125 adjustment. | P0 | Blocked | LC-BIZ-001 and pricing approval | Decision explicitly approves no zone adjustment or defines zones and values without conflating the $125 rule. | No—deferred from beta |
| LC-BIZ-009 | Approve cancellation, rescheduling, refund, price-expiration, tax, discount, and promotion rules. | P0 | Blocked | Legal, finance, and operations approval | Customer terms and calculation fixtures cover each approved rule. | No—deferred from beta |
| LC-BIZ-010 | Decide package names and packaging strategy. | P2 | Blocked | Product approval | Decision records approved names/rules or rejects packages. | No |

## Lead-generation MVP

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-LEAD-001 | Complete the approved lead-data specification with consent, verified GoHighLevel destination/mappings, named owner, and response-time expectation. | P0 | Blocked | Privacy/legal, operations, and verified GoHighLevel configuration; PS-LB-005/006/012 | Approved fields are fixed; remaining configuration and ownership details must map each field to a purpose and owner. | Yes—beta |
| LC-LEAD-002 | Implement a connected lead/contact intake instead of `#contact` anchor-only calls to action. | P0 | Not started | LC-LEAD-001 | A production test lead is validated, submitted once, delivered to the owner, acknowledged, and recoverable on failure. | Yes |
| LC-LEAD-003 | Route all four beta service categories into manual GoHighLevel review without exposing firm pricing or checkout. | P0 | Not started | LC-LEAD-001 and D-018 | Each service creates the correct labeled lead and remains pending manual review. | Yes—beta |
| LC-LEAD-004 | Implement a usable complex-interior/photo-review intake channel. | P0 | Blocked | Photo-review workflow and photo-channel decision | A test customer submits required evidence and the reviewer can approve, reject, or request more information with an audit trail. | No—photo automation deferred from beta |
| LC-LEAD-005 | Replace placeholder testimonials and customer labels with verified content or remove the section. | P0 | Blocked | Verified customer permission and claims review | No placeholder or fabricated testimonial is visible; permissions/evidence are retained. | Yes |
| LC-LEAD-006 | Correct service navigation and taxonomy for the four-service beta and remove standalone Drywall Repair. | P0 | Not started | LC-DOC-003 complete | Main page, header, footer, metadata, and lead routing show the same approved service set. | Yes—beta |

## Instant quote and checkout

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-QUOTE-001 | Implement room-by-room quote intake with every confirmed input. | P0 | Not started | LC-BIZ-002 | Multi-room tests preserve every required field independently for each room. | No—deferred from beta |
| LC-QUOTE-002 | Implement length × width and exact Small/Medium/Large/Oversized classification. | P0 | Not started | LC-QUOTE-001 | Automated tests pass for 120, 121, 200, 201, 300, and >300 sq ft boundaries. | No—deferred from beta |
| LC-QUOTE-003 | Implement deterministic, versioned base-price calculation. | P0 | Blocked | LC-BIZ-003 and LC-BIZ-007 | Approved fixtures reproduce expected room and project totals with recorded price-version metadata. | No—deferred from beta |
| LC-QUOTE-004 | Apply the confirmed flat $125 fuel/materials adjustment exactly once per project. | P0 | Blocked | LC-QUOTE-003 | Tests prove zero duplicate/missing adjustments for one-room, multi-room, reviewed, and consultation-priced projects. | No—deferred from beta |
| LC-QUOTE-005 | Implement fail-closed eligibility and routing. | P0 | Blocked | LC-BIZ-001, LC-BIZ-002, and LC-BIZ-007 | Unsupported, incomplete, complex, and out-of-area cases never receive firm instant prices. | No—deferred from beta |
| LC-QUOTE-006 | Implement firm-price versus pending-review/consultation labeling. | P0 | Not started | LC-QUOTE-005 | Content tests prevent “firm” or “final” labels before eligibility and pricing validation pass. | No—deferred from beta |
| LC-QUOTE-007 | Implement checkout under approved payment, cancellation, tax, and refund terms. | P0 | Blocked | LC-BIZ-006 and LC-BIZ-009 | A qualifying test project completes checkout with correct totals, disclosures, confirmation, and failure recovery. | No—deferred from beta |
| LC-QUOTE-008 | Implement online booking under approved availability and rescheduling rules. | P0 | Blocked | Operations scheduling model and LC-BIZ-009 | A test customer books an available slot without a call; capacity conflict and rescheduling tests pass. | No—deferred from beta |
| LC-QUOTE-009 | Implement reviewed-price transition for complex interiors. | P0 | Blocked | LC-LEAD-004 and review policy | Pending projects cannot check out; approved reviewed prices can enter the authorized checkout path with review evidence. | No—deferred from beta |
| LC-QUOTE-010 | Add automated unit, integration, and end-to-end coverage for quote, routing, checkout, and booking. | P0 | Not started | LC-QUOTE-001 through LC-QUOTE-009 | CI runs approved boundary, safety, price, payment, and recovery scenarios successfully. | No—deferred from beta |

## Chatbot

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-CHAT-001 | Assign the chatbot to a post-beta release and decide whether GoHighLevel AI chat is the implementation or another provider is needed, plus model, architecture, interface, data handling, and owner. | P0 | Blocked | User, product, technical, privacy, and operations approval; PS-CH-010 | Decision log and architecture decision cover every item without treating intended GoHighLevel AI chat as verified. | No—deferred from beta |
| LC-CHAT-002 | Approve detailed chatbot responsibilities, quote role, knowledge sources, and escalation criteria. | P0 | Blocked | LC-CHAT-001 | Approved conversation specification distinguishes guidance, review, consultation, and human escalation. | No—deferred from beta |
| LC-CHAT-003 | Implement the confirmed customer-facing chatbot. | P0 | Not started | LC-CHAT-001 and LC-CHAT-002 | Production UI is reachable and meets the approved interface, availability, accessibility, and disclosure requirements. | No—deferred from beta |
| LC-CHAT-004 | Enforce brand, pricing, eligibility, review, consultation, and unsupported-answer safeguards. | P0 | Not started | LC-CHAT-003 and approved policies | Adversarial tests prove the chatbot never mentions a Jen affiliation, invents prices, bypasses gates, or promises unapproved policy. | No—deferred from beta |
| LC-CHAT-005 | Implement and test approved human handoff with context preservation. | P1 | Blocked | Human handoff approval and LC-CHAT-003 | Test conversation reaches the correct owner once with approved context and no prohibited sensitive data. | No—deferred from beta |

## Operations and notifications

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-OPS-001 | Define employee/subcontractor assignment, capacity, quality, and escalation procedures. | P0 | Blocked | Operations approval | Runbook covers both crew types and names accountable roles. | No—full project delivery deferred from beta |
| LC-OPS-002 | Define paint procurement, approved products/finishes, substitutions, and material allowances. | P0 | Blocked | Operations and pricing approval | Every supported quote maps to procurable materials and an approved substitution path. | No—full project delivery deferred from beta |
| LC-OPS-003 | Define photo-review staffing, SLA, criteria, and customer communication. | P0 | Blocked | Requirement PS-PD-012 and operations approval | Timed rehearsal completes review, request-for-more-information, approval, and rejection paths. | No—photo-review automation deferred from beta |
| LC-OPS-004 | Define booking capacity, confirmations, reminders, rescheduling, cancellation, and no-show handling. | P0 | Blocked | LC-BIZ-009 and operations approval | Schedule simulation prevents double booking and produces approved customer notifications. | No—booking deferred from beta |
| LC-OPS-005 | Implement required quote, review, checkout, booking, and exception notifications. | P0 | Blocked | Approved channels/content and LC-OPS-003/004 | Test events send one accurate notification to the correct recipient and expose retry/failure status. | No—deferred from beta |
| LC-OPS-006 | Configure and implement the confirmed GoHighLevel CRM and pipeline functions; keep unapproved automated follow-up and human handoff disabled. | P0 | Blocked | Verified GoHighLevel account/configuration, PS-LB-006/012 | Beta CRM delivery passes deduplication, ownership, consent, and field-mapping tests. | Yes—beta |
| LC-OPS-007 | Create support, incident, refund, change-order, warranty, and damage-handling runbooks. | P0 | Blocked | Legal and operations approval | Tabletop scenarios produce an accountable, policy-compliant response for each case. | No—full project delivery deferred from beta |
| LC-OPS-008 | Verify the selected GoHighLevel account, credentials, CRM/pipeline modules, ownership, environments, and beta implementation scope. | P0 | Blocked | Account access and owner/technical approval; PS-LB-006/012 | A reviewed inventory proves account ownership and records verified beta configuration without exposing credentials. | Yes—beta |
| LC-OPS-009 | Configure GoHighLevel SMS, email, or automation only where separately approved for beta notification or acknowledgment. | P1 | Blocked | LC-OPS-008, LC-BETA-008/012, consent, and approved content | Selected beta notifications send exactly once and expose failure status. | Conditional on approved beta channel |
| LC-OPS-010 | Configure GoHighLevel calendar booking and proposal/booking workflows for a later release. | P0 | Blocked | LC-OPS-004/008, proposal rules, and PS-PL-007 | Test proposal and booking paths use verified configuration, prevent conflicts, and retain an auditable customer record. | No—deferred from beta |
| LC-OPS-011 | Configure the intended GoHighLevel reviews function under an approved review-request policy. | P2 | Blocked | LC-OPS-008, customer-consent/claims policy, and PS-PL-009 | Review requests are sent only under approved triggers, with opt-out and evidence retained. | No—deferred from beta |
| LC-OPS-012 | Configure the intended GoHighLevel payment workflows and the separately approved payment processor. | P0 | Blocked | LC-BIZ-006/009, LC-OPS-008, legal/security review, and PS-PL-010/011 | End-to-end test payments, failures, refunds, records, and disclosures match approved policy and verified processor configuration. | No—deferred from beta |

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
| LC-SEO-003 | Approve detailed beta lead-source/event definitions, provider, consent behavior, attribution handling, and sensitive-data exclusions. | P0 | Blocked | D-018 and privacy approval | The basic attribution requirement is confirmed; its specification maps each field/event to a business question without sensitive data. | Yes—beta |
| LC-SEO-004 | Implement and validate approved beta lead-source and campaign attribution. | P0 | Not started | LC-SEO-003 | Test lead sources persist exactly once to the verified GoHighLevel record under approved consent behavior. | Yes—beta |

## Deployment, security, and launch QA

| ID | Task | Priority | Status | Dependency | Acceptance test | Launch blocker |
| --- | --- | --- | --- | --- | --- | --- |
| LC-QA-001 | Verify the Vercel production URL, ownership, active branch, environment, and GitHub automatic deployment. | P0 | Historical/Needs verification | Deployment access | URL health returned HTTP 200 on 2026-08-01; ownership, branch, environment, and automatic-deployment mapping still require evidence. | Yes—remaining deployment facts |
| LC-QA-002 | Re-run lint and production build after application changes. | P0 | Historical/Needs verification | Final launch candidate | Existing lint and build commands pass on the launch commit; route output is recorded. | Yes |
| LC-QA-003 | Triage the reported 12 high-severity dependency vulnerabilities without automatically running `npm audit fix --force`. | P0 | Historical/Needs verification | Current advisory report and dependency review | Each advisory has affected path, exploitability, remediation/acceptance decision, owner, and date. | Yes |
| LC-QA-004 | Add tracked CI for lint, build, and approved automated tests. | P0 | Not started | Test commands and repository policy | A pull-request run blocks merge on a deliberate lint, build, or test failure. | Yes |
| LC-QA-005 | Perform cross-browser, responsive, keyboard, screen-reader, and WCAG QA. | P0 | Not started | Launch candidate | Signed QA matrix passes supported browsers/viewports and approved accessibility criteria. | Yes |
| LC-QA-006 | Perform end-to-end production smoke tests for beta lead intake, GoHighLevel delivery, operator notification, attribution, success, and failure states. | P0 | Blocked | LC-BETA-002 through LC-BETA-019 | A production-safe lead completes every supported beta path exactly once and prohibited instant-price/payment paths remain absent. | Yes—beta |
| LC-QA-007 | Complete beta security review for inputs, GoHighLevel connection, secrets, consent, abuse controls, and vendor callbacks. | P0 | Blocked | Final beta architecture and verified provider configuration | Threat model and security tests resolve or explicitly accept every beta launch-critical finding. | Yes—beta |
| LC-QA-008 | Establish monitoring, alerting, incident ownership, rollback, and customer-support procedures. | P0 | Not started | Deployment and operations ownership | Launch rehearsal detects a synthetic failure, alerts the owner, and demonstrates rollback/recovery. | Yes |
| LC-QA-009 | Verify performance and production error behavior. | P1 | Not started | Launch candidate | Approved performance budgets and 404/500/recovery scenarios pass in production-like conditions. | No |
