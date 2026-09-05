# The Graders — Project State

Durable handoff for future ChatGPT/Claude sessions. This file is the project-level source of truth for **where work stands and what happens next**.

- **Last updated:** 2026-09-05
- **Project:** The Graders
- **Lifecycle state:** `active`
- **Lifecycle reason:** none
- **Resume point:** Wait for Mario's client acceptance review of the live site. If he requests brand refinements, ask for the original brand assets first and apply only the requested changes; otherwise treat the current live version as the delivered baseline.
- **Current application-code baseline:** `da3fe6c0`
- **Current production application baseline:** `da3fe6c0`
- **Workflow status:** `waiting`
- **Deployment status:** `in sync`
- **Current phase:** Production polish complete; client acceptance and optional brand-asset refinements pending
- **Overall status:** The live GitHub Pages site at `https://thegraders.studio/` contains the requested reel and social updates, mobile manifesto booklet, responsive/mobile fixes, SEO metadata, and cleaned deployment documentation. Technical QA is complete; the remaining move is Mario's acceptance review and any client-supplied brand-asset refinements.

## Current state

The Graders is an independent client website for Mario Franco's creative-production studio brand. The production site is served by GitHub Pages from the repository root on `master`, with `CNAME` providing the custom domain. The site includes the manifesto artwork, VFX reel, founder/team content, contact form, Instagram and LinkedIn links, SEO/social metadata, and the separate Eric García digital card at `/tarjeta.html`.

Mobile-specific production behavior is intentional: the manifesto becomes a two-page booklet using real cropped PNG pages on small phones, and the reel uses a mobile launch-card flow instead of the embedded Google Drive player because the Drive iframe produced persistent dark controls / clipping on iPhone SE-sized screens. Desktop keeps the normal embedded reel and full manifesto artwork.

## Completed foundation

- Requested Instagram and LinkedIn links are live in the contact area/footer.
- The supplied Google Drive VFX reel is integrated; mobile uses a dedicated launch flow to avoid the problematic embedded-player overlay.
- Placeholder contact/website rows were removed from the client-facing contact area/footer.
- The mobile manifesto was rebuilt from one unreadably scaled poster into a two-page real-image booklet with tabs, Prev/Next, and swipe support.
- iPhone SE-width QA covered booklet page sizing, no horizontal clipping, tabs, Prev/Next, swipe, social links, contact layout, reel behavior, and desktop regression.
- Technical SEO foundation includes canonical/Open Graph/Twitter metadata, structured data, `robots.txt`, and `sitemap.xml`.
- GitHub Pages is the documented production path; vestigial Firebase Hosting config was removed so future sessions do not create a parallel dead deployment.
- Root and legacy `public/` shared files were reconciled for the current production behavior.

## Important decisions

- **This is an independent authorized Project.** It is not the Mario Franco course portal and not merely a Tarjetas Digitales feature, even though `/tarjeta.html` remains a useful Tarjetas implementation benchmark inside the same repository.
- Production hosting is **GitHub Pages from root `master`**. Do not reintroduce Firebase Hosting unless an intentional migration is approved.
- Preserve the client's artwork rather than rebuilding the many hand-drawn manifesto details in HTML.
- On small phones, use real cropped booklet images, not CSS background-position crops.
- On small phones, do not fight the Google Drive iframe overlay with more focus hacks; use the mobile reel launch flow.
- The engagement is intentionally low-fee. Human acceptance testing is delegated to Mario; Eureka handles technical implementation/QA.
- Do not invent brand assets. If Mario wants the favicon, exact logo/font treatment, social-share image, or other brand elements changed, ask him for the original source assets first.
- Keep the existing Eric García `/tarjeta.html` artifact intact unless Tarjetas Digitales work explicitly requires a change.

## Open work

- Mario/client acceptance review of the live production site.
- Optional replacement of favicon / exact logo or font / social-share artwork if Mario supplies authoritative brand assets and requests the change.
- Later housekeeping may remove the legacy `public/` mirror once no workflow depends on it; do not do that during client polish without a deliberate cleanup pass.

## NEXT

1. Wait for Mario to review `https://thegraders.studio/` on his devices and confirm acceptance or report a specific issue.
2. If he requests a brand change, obtain the original asset(s) first, make only the requested refinement, push to `master`, and re-check production.
3. If he reports no issue, mark the delivery accepted/current without reopening design work.

## Handoff

Start from `eurekawebsites/the-graders` `master`, then read this file and `README.md`. Verify the current live domain before editing. Treat `da3fe6c0` as the current application/production baseline unless newer application code exists. Do not migrate hosting, rebuild the manifesto, or replace brand assets speculatively. The next move is client acceptance, not another redesign pass.

## Maintenance rule

When a development session materially changes project state, update this file before closing the session. Keep Lifecycle state, Workflow status, and Deployment status separate. Git/GitHub remains authoritative for source and GitHub Pages production history.
