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
- **Confirmed:** Alex becomes a backup only after `alex@paintswitch.com` exists and a controlled receipt test passes.
- **Verified external mailbox-account evidence — 2026-08-05:** A signed-in GoDaddy administration view showed that mailbox accounts for `hello@paintswitch.com` and `alex@paintswitch.com` exist under owner administration. This verifies account existence and administration only. Alex receipt, Alex's direct access, routing, and backup-response operation still require verification before customer lead data is sent there.

## Latest protected-Preview rehearsal

- **Verified external candidate evidence — 2026-08-05:** Application commit `beb6781` passed GitHub Actions `Verify`, and its Vercel Preview reached `Ready`.
- With Preview `LEAD_DELIVERY_ENABLED=false`, one unchanged synthetic submission failed closed and retained its submission identity. After Preview-only delivery was temporarily enabled and the candidate redeployed, retrying that same retained submission recovered exactly once: one GoHighLevel Contact, one Opportunity, one workflow enrollment, and a `Success` internal-notification action were observed.
- The hosted fixed-window counter capped at five counted valid attempts. Those attempts reached the delivery-disabled `503` boundary after consuming quota; one additional valid attempt returned `429` and created no duplicate Contact, Opportunity, or workflow enrollment.
- Preview `LEAD_DELIVERY_ENABLED` was restored to `false` after the rehearsal, and the disabled redeployment reached `Ready`. Production remained disabled.
- This rehearsal verifies the controlled Preview recovery and threshold paths only. It does not activate Production, prove broader concurrent/failure behavior, verify human response timing, or satisfy Alex backup activation. Synthetic personal data and opaque Redis keys are intentionally omitted.

## New-lead response procedure

1. Open the internal PaintSwitch notification and the matching GoHighLevel Contact and Opportunity.
2. Confirm the request contains the approved seven intake fields and does not show a firm price, booking, payment, or service-area approval.
3. During coverage hours, make the first human call or email attempt within five minutes. For an after-hours lead, make the first attempt by 9:00 AM Eastern the next day.
4. Record the attempt time, channel, outcome, and next action in the matching GoHighLevel record. Do not place lead data in this runbook.
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

- `alex@paintswitch.com` mailbox-account existence is verified in GoDaddy administration.
- A controlled PaintSwitch test message is received in that mailbox.
- Alex confirms access to the mailbox and the response procedure.
- The owner approves the exact routing behavior if it changes the currently approved `hello@paintswitch.com`-only workflow.
- A synthetic notification and response rehearsal passes without sending automated customer SMS.

## Production release and rollback checklist

1. Require a clean dependency audit, passing tests, lint, type checking, build, GitHub verification, and Ready Vercel Preview.
2. Verify Production environment variables without exposing values. Deploy the approved commit with lead delivery disabled first.
3. Verify the apex and `www` redirect, homepage, Privacy, Terms, four-service taxonomy, form disclosure, security headers, and absence of placeholder reviews, standalone Drywall Repair, unsupported pricing, Jen branding, and private address content.
4. Confirm a known rollback deployment before enabling lead delivery.
5. Enable `LEAD_DELIVERY_ENABLED` for Production only and redeploy.
6. Submit one clearly labeled synthetic production lead. Verify one success message, one Contact, one Opportunity, exact mappings and attribution, one completed Upstash state, one workflow execution, one owner notification, no automated SMS, and a timely human contact attempt.
7. Restore delivery to `false` immediately if CRM delivery, notification, privacy, or duplicate safeguards do not match the acceptance criteria, then redeploy the last green candidate.

## Evidence log template

For each rehearsal or incident, record only:

- date and Eastern Time timestamps;
- environment and deployment identifier;
- synthetic submission identifier or sanitized provider record identifier;
- observed result for website, Upstash, GoHighLevel, notification, and human response;
- whether automated SMS remained off;
- operator and follow-up action;
- rollback or closure result.

Do not include raw names, phone numbers, email addresses, project locations, descriptions, credentials, or secret values in this document.
