# The Graders — Project State

Durable handoff for future ChatGPT/Claude sessions. This file is the project-level source of truth for **where work stands and what happens next**.

- **Last updated:** 2026-09-05
- **Project:** The Graders
- **Lifecycle state:** `active`
- **Lifecycle reason:** none
- **Resume point:** Wait for Mario to verify `lccmariofranco@gmail.com` with Web3Forms and submit one real test message from `https://thegraders.studio/`. If the message arrives, mark the contact setup verified and continue only with any specific client feedback; if no further issues are reported, treat the delivered website as accepted/current.
- **Current application-code baseline:** `824ab1f4fa7bf63653c28869f7b649716f6c4b0f` (latest source change updates the Web3Forms contact recipient configuration in both root and `public/` copies)
- **Current production application baseline:** `da3fe6c0b4e56bf8e20973a13f9dd1dc687c4647` (last client-verified live application baseline before the contact-recipient change; GitHub Pages auto-publishes `master`, but the new recipient configuration has not yet been confirmed by a real delivered form submission)
- **Workflow status:** `waiting`
- **Deployment status:** `unknown`
- **Current phase:** Website delivered; client email verification and one real contact-form delivery test pending
- **Overall status:** The Graders website is live on GitHub Pages with the requested social links, reel behavior, mobile manifesto booklet, responsive fixes, SEO foundation, and cleaned deployment setup. The contact form source now uses Mario's Web3Forms recipient configuration in both production-root and legacy `public/` copies. The only client-side verification still pending is Mario's Web3Forms email authorization plus one successful end-to-end form delivery test.

## Current state

The Graders is an independent client website for Mario Franco's creative-production studio brand. Production is served by GitHub Pages from the repository root on `master`, with `CNAME` providing the custom domain.

The live design includes the manifesto artwork, VFX reel, founder/team content, contact form, Instagram and LinkedIn links, SEO/social metadata, and the separate Eric García digital card at `/tarjeta.html`.

Mobile-specific behavior is intentional:

- the manifesto becomes a two-page booklet using real cropped PNG pages on small phones;
- the reel uses a dedicated mobile launch-card flow instead of the embedded Google Drive player because the Drive iframe produced persistent dark controls and bottom clipping on iPhone SE-sized screens;
- desktop keeps the normal embedded reel and full manifesto artwork.

The contact form posts through Web3Forms. On 2026-09-05 the recipient configuration was changed so Mario's address, `lccmariofranco@gmail.com`, receives website inquiries after he completes Web3Forms verification. The hidden access key itself should not be copied into durable documentation beyond the source files.

## Completed foundation

- Requested Instagram and LinkedIn links are live in the contact area/footer.
- The supplied Google Drive VFX reel is integrated; mobile uses a dedicated launch flow to avoid the problematic embedded-player overlay.
- Placeholder contact/website rows were removed from the client-facing contact area/footer.
- The mobile manifesto was rebuilt from one unreadably scaled poster into a two-page real-image booklet with tabs, Prev/Next, and swipe support.
- iPhone SE-width QA covered booklet page sizing, no horizontal clipping, tabs, Prev/Next, swipe, social links, contact layout, reel behavior, and desktop regression.
- Technical SEO foundation includes canonical/Open Graph/Twitter metadata, structured data, `robots.txt`, and `sitemap.xml`.
- GitHub Pages is the documented production path; vestigial Firebase Hosting config was removed so future sessions do not create a parallel dead deployment.
- Root and legacy `public/` shared files were reconciled for the current production behavior.
- Contact recipient configuration was updated in both `index.html` and `public/index.html` and read back byte-identically from `master` at source baseline `824ab1f4`.
- Eureka source registration for The Graders exists; the separate Eureka Command Center publication gate remains owned by `eurekawebsites/eureka-portal/docs/PROJECT_STATE.md` and must not be duplicated as The Graders delivery state.

## Important decisions

- **This is an independent authorized Project.** It is not the Mario Franco course portal and not merely a Tarjetas Digitales feature, even though `/tarjeta.html` remains a useful Tarjetas implementation benchmark inside the same repository.
- Production hosting is **GitHub Pages from root `master`**. Do not reintroduce Firebase Hosting unless an intentional migration is approved.
- Preserve the client's artwork rather than rebuilding the many hand-drawn manifesto details in HTML.
- On small phones, use real cropped booklet images, not CSS background-position crops.
- On small phones, do not fight the Google Drive iframe overlay with focus hacks; use the mobile reel launch flow.
- The engagement is intentionally low-fee. Human acceptance testing is delegated to Mario; Eureka handles technical implementation/QA.
- Do not invent brand assets. If Mario wants favicon, exact logo/font treatment, social-share artwork, or another brand element changed, ask him for the original source asset first.
- Keep the existing Eric García `/tarjeta.html` artifact intact unless Tarjetas Digitales work explicitly requires a change.
- Web3Forms recipient verification is a client-side dependency. Do not claim end-to-end contact delivery is verified until Mario authorizes the address and confirms receipt of a real test submission.
- Internal Eureka Command Center publication is an administrative projection owned by Eureka's tracker, not by this Project's client-delivery NEXT.

## Open work

- Mario must verify `lccmariofranco@gmail.com` through the Web3Forms email.
- After verification, submit one real test message from the production website and have Mario confirm it arrived.
- Optional brand refinements only if Mario requests them and supplies authoritative source assets.
- Client acceptance remains open until Mario confirms there are no further issues.
- Later housekeeping may remove the legacy `public/` mirror once no workflow depends on it; do not do that during client polish without a deliberate cleanup pass.

## NEXT

1. Mario verifies `lccmariofranco@gmail.com` with Web3Forms.
2. Submit one real test message through `https://thegraders.studio/` and confirm Mario receives it.
3. If delivery succeeds and Mario reports no other issue, mark Workflow `current`, Deployment `in sync`, and the client delivery accepted.
4. If Mario reports a specific problem, change only that issue and re-test production.

## Handoff

Start from `eurekawebsites/the-graders` `master`, then read this file and `README.md`. Current source baseline is `824ab1f4`; the last explicitly client-verified live application baseline before the contact-recipient change is `da3fe6c0`. Verify the production form delivery before promoting Deployment back to `in sync`. Do not migrate hosting, rebuild the manifesto, or replace brand assets speculatively.

For Eureka Admin / Command Center publication status, read `eurekawebsites/eureka-portal/docs/PROJECT_STATE.md`; do not duplicate that internal deployment state here.

## Maintenance rule

When a development session materially changes project state, update this file before closing the session. Keep Lifecycle state, Workflow status, and Deployment status separate. Git/GitHub remains authoritative for source and GitHub Pages production history.
