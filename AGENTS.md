<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## PaintSwitch project documentation

- Read `docs/README.md` and the relevant canonical documents before beginning work.
- Implement only items labeled **Confirmed**.
- Obtain user approval before implementing anything labeled **Proposed** or **TBD**.
- Never implement items labeled **Rejected**.
- When an older item is labeled **Superseded**, follow the current replacement decision.
- Verify claims labeled **Historical/Needs verification** before relying on them.
- Never treat website copy or assistant recommendations as owner approval.
- Never connect PaintSwitch to Jen Contracting in customer-facing work, including branding, “powered by” language, shared identity, or implied affiliation.
- Update `docs/DECISION_LOG.md` when a material decision is approved or superseded.
- Update `docs/DEVELOPMENT_STATUS.md` when material implementation or verification status changes.
- Run the existing lint and production build checks after application-code changes.
- Ask the user for direction when application code, website copy, and canonical documentation conflict.
