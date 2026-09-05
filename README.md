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

The reel is embedded from Google Drive. On small mobile screens, `site.js` releases iframe focus shortly after playback starts so the Google Drive control overlay does not remain darkened over the video on iPhone-sized screens.

## Do not regress

- Keep desktop manifesto presentation unchanged.
- Keep root and `public/` shared files in sync while the legacy mirror exists.
- Do not re-add Firebase Hosting config unless the deployment architecture is intentionally migrated.
