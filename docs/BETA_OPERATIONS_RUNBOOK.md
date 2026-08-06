# PaintSwitch lead-generation beta operations runbook

Last updated: 2026-08-05

This runbook operationalizes only confirmed lead-generation beta decisions. It does not add customer promises, approve an exact service boundary, activate automated customer SMS, or replace professional legal advice.

## Current operating boundary

- **Confirmed:** The PaintSwitch owner is the primary owner of every beta lead.
- **Confirmed:** Lead-response coverage is 8:00 AM–8:00 PM Eastern every day.
- **Confirmed:** Make the first human contact attempt within five minutes during coverage hours and by 9:00 AM Eastern the next day for after-hours leads.
- **Confirmed:** Every accepted website lead receives an accurate on-page confirmation.
- **Confirmed:** Automated customer SMS remains off. Selecting `Text` is only a contact preference.
- **Confirmed:** `hello@paintswitch.com` is the primary notification and privacy-request mailbox.
- **Confirmed — 2026-08-05:** Keep the immediate new-lead alert at `hello@paintswitch.com`. Add `Contact Attempted` as the second internal pipeline stage. After five minutes, send an internal alert to Alex only when the Opportunity still remains in `New Quote Request`; do not alert Alex when it has moved to `Contact Attempted`. Alex is backup/escalation-only, must not receive every lead, and automated customer SMS remains off.
- **Verified external mailbox evidence — 2026-08-05:** A signed-in GoDaddy administration view showed that mailbox accounts for `hello@paintswitch.com` and `alex@paintswitch.com` exist under owner administration. Microsoft MFA for `alex@paintswitch.com` succeeded, Outlook opened showing that mailbox, and at 2:24 PM ET a controlled self-addressed operational message containing no customer data was sent and appeared unread in the Alex inbox. This verifies direct mailbox access plus basic same-mailbox send/receipt operation only. It does not verify external-domain delivery, GoHighLevel escalation routing, backup activation, human response, or workflow acceptance.
- **Verified external workflow evidence — 2026-08-05:** `PaintSwitch Lead Intake` contains `New Quote Request` and `Contact Attempted`. The Saved/published workflow runs Opportunity Created → immediate hello internal email → exact five-minute Wait → condition. `Still New` sends `Escalate to Alex - still New Quote Request` to `alex@paintswitch.com`; `Contact Attempted` ends without Alex. Both synthetic branches pass, and neither contains SMS/customer action. The Alex action reuses the exact D-032-approved hello subject/body as implementation fact, not new copy approval.
- **Verified routed receipt — 2026-08-05:** The owner's 4:33 PM ET mobile Outlook screenshot shows the Alex inbox received sender `PaintSwitch`, subject `New PaintSwitch website lead`, at 4:23 PM. GoHighLevel Email Analytics also records `alex@paintswitch.com` as Delivered at 4:23 PM and the immediate hello messages as Delivered at 4:18 PM and 4:20 PM. This verifies routed email receipt, not a human response rehearsal.
- **Verified delivery discrepancy — 2026-08-05:** The same Email Analytics view shows one earlier record to `hello@paintswitch.com` as `Failed` at 11:38 AM, while the nearby retained-submission workflow execution had reported its internal notification action as `Success`. Treat workflow execution status as insufficient proof of receipt. Root cause, the authentication state of that earlier message, retry/fallback behavior, and operator failure handling remain unverified.
- **Verified dedicated sending-domain configuration — 2026-08-05:** In the signed-in GoHighLevel and GoDaddy accounts, `mg.paintswitch.com` was added as the dedicated PaintSwitch sending subdomain. GoDaddy Domain Connect created the SPF, DKIM, CNAME, and MX records; `_dmarc.mg` was added as a DMARC TXT record with monitoring policy `p=none`. GoHighLevel then displayed the domain enabled, Warmup In Progress at Stage 1, Shared IP Active, and SSL Issued. The GoHighLevel Business Profile was also corrected to friendly name `PaintSwitch`, business email `hello@paintswitch.com`, and website `https://paintswitch.com`; no Jen-linked business email remains there. This verifies configuration only, not raw-message authentication headers, warmup completion, the cause of the earlier failed message, retry/fallback behavior, or Production deliverability.
- **Verified post-configuration workflow exercise — 2026-08-05:** A synthetic Opportunity with no real customer data triggered `Email Owner - hello@paintswitch.com` at 7:59:28 PM ET and the execution detail reported `Success`. The Opportunity was immediately moved to `Contact Attempted`; after the exact Wait finished at 8:04:28 PM, the workflow executed `Contact Attempted` and finished at 8:04:29 PM with no Alex action. That stage transition is workflow-control evidence, not proof of human contact. For the selected analytics period, GoHighLevel displayed eight Sent, eight Delivered, and one historical Failed. Because the analytics view did not expose a row-level link from that aggregate to the synthetic action, this is successful post-configuration workflow evidence, not proof that the specific message passed SPF, DKIM, or DMARC at the recipient.
- **TBD / activation-blocking:** Decide the authorized stage-transition actor and acknowledgment procedure, any future distinct Alex wording, and failure/retry behavior; then complete the human-response rehearsal. Do not claim operational response readiness from workflow execution or inbox receipt alone.

## Latest protected-Preview rehearsal

- **Verified external candidate evidence — 2026-08-05:** Application commit `beb6781` passed GitHub Actions `Verify`, and its Vercel Preview reached `Ready`.
- With Preview `LEAD_DELIVERY_ENABLED=false`, one unchanged synthetic submission failed closed and retained its submission identity. After Preview-only delivery was temporarily enabled and the candidate redeployed, retrying that same retained submission recovered exactly once: one GoHighLevel Contact, one Opportunity, one workflow enrollment, and a `Success` internal-notification action were observed.
- The hosted fixed-window counter capped at five counted valid attempts. Those attempts reached the delivery-disabled `503` boundary after consuming quota; one additional valid attempt returned `429` and created no duplicate Contact, Opportunity, or workflow enrollment.
- Preview `LEAD_DELIVERY_ENABLED` was restored to `false` after the rehearsal, and the disabled redeployment reached `Ready`. Production remained disabled.
- This rehearsal verifies the controlled Preview recovery and threshold paths only. It does not activate Production, prove broader concurrent/failure behavior, verify human response timing, or satisfy Alex backup activation. Synthetic personal data and opaque Redis keys are intentionally omitted.

## New-lead response procedure

1. Open the internal PaintSwitch notification and the matching GoHighLevel Contact and Opportunity.
2. Confirm the request contains the approved seven intake fields and does not show a firm price, booking, payment, or service-area approval.
3. During coverage hours, make the first human contact attempt within five minutes. For an after-hours lead, make the first attempt by 9:00 AM Eastern the next day.
4. Record the attempt time, channel, outcome, and next action in the matching GoHighLevel record. The authorized transition actor remains **TBD**; once assigned, that operator moves the Opportunity to `Contact Attempted` immediately after the first contact attempt so a handled lead does not alert Alex. Do not place lead data in this runbook.
5. Use only project-specific communication. Do not send automated customer SMS during the beta.
6. Do not promise service availability, pricing, scheduling, or booking before human review.

## Delivery and notification failure procedure

1. Treat the website success message as the only customer-visible confirmation that the server completed the accepted lead path. A generic failure message means receipt was not confirmed.
2. When a customer reports a failure, search GoHighLevel by the Website Submission ID when available and inspect the matching Contact and Opportunity before asking for another submission.
3. If an Opportunity exists but the internal email is missing, do not resubmit the lead. Contact the lead manually, record the attempt, inspect the GoHighLevel workflow execution, and record the notification incident.
4. If no matching Opportunity exists, allow a retry using the unchanged browser form when possible. The implementation retains the same submission ID for an unchanged retry and reconciles ambiguous provider outcomes.
5. If repeated delivery failures occur, set `LEAD_DELIVERY_ENABLED=false`, keep the form fail closed, preserve sanitized Vercel and GoHighLevel timestamps, and use the last verified green deployment as the rollback target.
6. Never place private-integration tokens, provider secrets, or raw lead details in incident notes, canonical documentation, or public logs.
7. Escalate unresolved provider failures to the owner. A separate automated failure-alert destination remains unimplemented and must not be claimed.

## Privacy-request procedure

1. Receive access, correction, or deletion requests at `hello@paintswitch.com`.
2. Verify the requester using information already associated with the lead and request only the minimum additional information necessary. Do not request government identification by default.
3. Locate the matching GoHighLevel Contact, Opportunities, notes, and related PaintSwitch notification records.
4. Complete the requested access, correction, deletion, or anonymization unless an approved active-project, verified-security, dispute, or legal exception applies.
5. Record the request date, verification basis, action, completion date, operator, and any exception category without copying unnecessary lead details into the audit record.
6. Send a completion response through the verified request channel. Escalate uncertain identity, legal-hold, dispute, or active-project cases before deleting data.

## Unconverted-lead retention procedure

1. At least monthly, review unconverted GoHighLevel leads whose last meaningful interaction is at least 12 months old.
2. Exclude only records covered by the confirmed active-project, verified-security, dispute, or legal exceptions, and record the applicable exception category and review date.
3. Delete or anonymize every eligible unconverted lead and retain a minimal audit entry showing the record identifier, action, operator, and date.
4. Recheck the eligible set after the operation and record completion. Do not claim automation until a verified GoHighLevel workflow or other approved mechanism exists.
5. Retention for active/completed projects, notification email, provider logs, analytics records, and other record classes remains **TBD**; do not silently apply the 12-month rule to them.

## Backup activation checklist

Alex is not an operational backup until all items pass:

- **Verified:** `alex@paintswitch.com` mailbox-account existence and owner administration in GoDaddy.
- **Verified, limited scope:** Microsoft MFA and direct Outlook access to the Alex mailbox.
- **Verified, limited scope:** One controlled self-addressed operational message with no customer data was sent and received in the Alex inbox at 2:24 PM ET. This does not prove external-domain or GoHighLevel delivery.
- **Confirmed:** Preserve the immediate `hello@paintswitch.com` alert. Add `Contact Attempted`; after five minutes alert Alex only when the Opportunity remains in `New Quote Request`, and suppress the Alex alert after a move to `Contact Attempted`. Do not notify Alex for every lead, and do not send automated customer SMS.
- **Verified current configuration and branch tests:** Both stages, the immediate hello action, exact five-minute Wait, conditional branches, Alex action, handled-path suppression, and no-customer-action boundary pass in synthetic execution logs.
- **Verified routed receipt:** Mobile Outlook shows the Alex message at 4:23 PM, and GoHighLevel Email Analytics records Alex Delivered at 4:23 PM plus hello Delivered at 4:18 PM and 4:20 PM.
- **Verified sending-domain setup:** `mg.paintswitch.com` is enabled in GoHighLevel with the required GoDaddy DNS records, Warmup In Progress at Stage 1, Shared IP Active, and SSL Issued. Business Profile uses the PaintSwitch-only friendly name, mailbox, and website. Raw-message authentication-header inspection, warmup completion, failure recovery, and Production deliverability remain pending.
- **Pending:** Assign transition ownership and acknowledgment procedure, decide any future distinct Alex wording and failure/retry behavior, and complete a timestamped human-response rehearsal. Inbox receipt or workflow `Success` alone is not a response rehearsal.

## Production release and rollback checklist

1. Require a clean dependency audit, passing tests, lint, type checking, build, GitHub verification, and Ready Vercel Preview.
2. Verify Production environment variables without exposing values. Deploy the approved commit with lead delivery disabled first.
3. Verify the apex and `www` redirect, homepage, Privacy, Terms, four-service taxonomy, form disclosure, security headers, and absence of placeholder reviews, standalone Drywall Repair, unsupported pricing, Jen branding, and private address content.
4. Confirm a known rollback deployment before enabling lead delivery.
5. Enable `LEAD_DELIVERY_ENABLED` for Production only and redeploy.
6. Submit controlled synthetic production leads that verify one success message, one Contact and Opportunity per submission, exact mappings and attribution, completed Upstash state, the immediate hello notification, both D-049 stage/branch outcomes, no automated customer SMS, and timely human contact. Preview/provider branch tests and routed Alex receipt are verified; Production acceptance and the human-response rehearsal remain separate gates.
7. Restore delivery to `false` immediately if CRM delivery, notification, privacy, or duplicate safeguards do not match the acceptance criteria, then redeploy the last green candidate.

## Evidence log template

For each rehearsal or incident, record only:

- date and Eastern Time timestamps;
- environment and deployment identifier;
- synthetic submission identifier or sanitized provider record identifier;
- observed result for website, Upstash, GoHighLevel, notification, and human response;
- sender-domain and warmup state plus the provider row or inbox receipt linked to any notification test; do not infer a specific delivery from aggregate counters;
- whether automated SMS remained off;
- operator and follow-up action;
- rollback or closure result.

Do not include raw names, phone numbers, email addresses, project locations, descriptions, credentials, or secret values in this document.
