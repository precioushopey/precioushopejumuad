---
name: adding-project-or-post
description: Use when adding, renaming, removing or publishing a project page or blog post, or when a Coming Soon project gets real content
---

# Adding a project or blog post

Adding one touches three places. Miss one and the page is unreachable, unlisted or missing from SEO.

## Steps

1. **Page file** in `src/projects/<slug>.tsx` or `src/blogs/`. Content (copy, image paths, tags) is written inline in the JSX. Wrap blog files in `BlogPostLayout` and project files in `ProjectLayout` (both on `DocumentWindow`), so the file holds only its own content. Case studies: use `writing-case-studies`.
2. **Route** in `src/App.tsx`: a `React.lazy` import plus a hand-registered `<Route>` at `/projects/<slug>` or `/blogs/<slug>`. Blog components are named `Blog1` ... `Blog16`; numbering has gaps and does not follow date order.
3. **Data entry** in the matching `src/data/` array (`projects.ts` or `blogPosts.ts`).

## Data rules

- Project `category` is one of `frontend`, `design`, `socials`, `multimedia`. Each blog post has a `category` too (used by `/blog?category=<c>`).
- Keep `title:`, `description:`, `image:`, `tags:`, `url:`/`to:` and `date:` as plain string literals. `scripts/generate-seo.mjs` (`prebuild`) and `scripts/prerender-meta.mjs` (`postbuild`) read them as text to write `public/sitemap.xml`, `public/llms.txt` and per-route `dist/<route>/index.html`.
- Wording rules for SEO text mirror `src/lib/seo.ts`; static page text is in `src/data/seo.json`. Checklist: `docs/seo.md`.
- Images: use `adding-site-images`. Below-the-fold images carry `loading="lazy"`.

## Coming Soon projects

Set `comingSoon: true` in `src/data/projects.ts`. It keeps the page `noindex` and out of the sitemap. It also lists the project after finished ones in the Projects grid with "Coming soon" as the details line, and leaves it out of the "More projects" column, the top-bar search and Home's Projects count. `ProjectLayout` hides the contact form on these pages. Remove the flag when the page gets real content.

## Contact form on project pages

Every finished project page ends with the "New message" form (`ContactCard`, added by `ProjectLayout`). The right column on project pages shows other projects (`ProjectSuggestions`) instead of the profile, so a page never has two forms. See `contact-form-api` for the API.

## Verify

Run `npx tsc -b` and `npm run lint`. Do not run a full build for a check (it writes a very large `dist/`; delete it if one was made).
