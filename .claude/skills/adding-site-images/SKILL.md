---
name: adding-site-images
description: Use when adding, replacing or removing an image under public/assets, using a thumbnail, or changing the logo or favicons
---

# Adding site images

## Where they go

Served from `public/assets/images/`, grouped in subfolders: `site`, `profile`, `experience`, `education`, `certifications`, `skills`, `blog`, `projects/<slug>`. Reference them by absolute path: `/assets/images/<group>/...`.

## Size and thumbnails

- Keep images under about 1600px wide. Compress big ones before adding.
- Small images (tiles, avatars, logos) use WebP copies from `public/assets/images/thumbs/` through `thumb()` in `src/lib/thumb.ts`.
- After adding or changing an image under `projects`, `blog`, `experience`, `education`, `certifications` or `profile/precious.png`, run `npm run thumbs` and commit the result. The script covers PNG, JPG and WebP sources (WebP was added when folder pictures on CoCo and Roostercat had no thumbnail).
- Images below the fold carry `loading="lazy"`.

## Favicons

The set in `public/` (`favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`) comes from `logo.png` via `npm run icons`.

## Do not publish

- **OJT Connect portal screenshots** (the old `ojtconnect/mockup/` folder). The user decided the logged-in screens are intellectual property: the case study shows only the Figma file overviews of each portal. Do not add portal screenshots back without the user's say-so.
- Anything in `public/` is reachable by URL even when no page links to it, so never put private files there (for example the iBRGY manuscript, which holds personal details).
