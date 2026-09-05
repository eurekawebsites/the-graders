# The Graders

Production website for **The Graders**.

## Production deployment

- Live site: https://thegraders.studio/
- Hosting: **GitHub Pages**
- Source: repository root on the `master` branch
- Custom domain: `CNAME`
- Deploy workflow: push to `master`; GitHub Pages rebuilds automatically

This project is **not deployed with Firebase Hosting**. Legacy Firebase configuration files were removed to avoid creating a dead parallel deployment.

## Source layout

The repository root is the production source used by GitHub Pages.

A legacy `public/` mirror still exists for compatibility with older local workflows. When shared files such as `site.css`, `site.js`, or duplicated assets are changed, keep the root and `public/` copies byte-identical until the legacy mirror is removed in a dedicated cleanup.

## Mobile manifesto

On screens up to 430px, `site.js` replaces the full manifesto image with a two-page booklet using real cropped images:

- `graders_page1_2page.png`
- `graders_page2_2page.png`

Desktop keeps the original full manifesto artwork.

## Reel

Desktop and tablet use the embedded Google Drive reel player.

On screens up to 600px, the embedded Drive iframe is hidden because its mobile control overlay can remain dark and clip the visible video on small iPhones. Instead, the page shows a branded **Play Reel** card that opens the same Google Drive preview in its own full browser viewport. This avoids the in-page Drive UI bug while preserving the desktop embed.

## Do not regress

- Keep desktop manifesto presentation unchanged.
- Keep root and `public/` shared files in sync while the legacy mirror exists.
- Keep the mobile reel launcher in place unless the reel is moved to a hosting/player solution that behaves correctly on iOS.
- Do not re-add Firebase Hosting config unless the deployment architecture is intentionally migrated.
