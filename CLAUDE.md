# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Precious Hope Jumuad (React 19 + TypeScript + Vite 6 + Tailwind CSS v4), deployed on Vercel.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (type-check is part of the build)
- `npm run lint` — ESLint (flat config in `eslint.config.js`)
- `npm run preview` — serve the production build

There is no test framework configured.

## Architecture

- **Routing is fully manual, in `src/App.tsx`.** Every project and blog post has its own hand-registered `<Route>` and import (`/projects/<slug>`, `/blogs/<slug>`). Blog components are imported as `Blog1`, `Blog2`, … `Blog16` (numbering has gaps, and doesn't follow date order). `vercel.json` rewrites all paths to `/` so client-side routing works on deploy.
- **Each project/blog is a standalone page component** in `src/projects/` or `src/blogs/`, with its content (copy, image paths, tags, design-step data) written inline in the JSX. There is no CMS or markdown pipeline.
- **Listing pages are separate from the detail pages.** `src/pages/projects.tsx` (a `projects` array with a `category` filter: frontend/design/socials/multimedia) and `src/pages/blog.tsx` (a `blogPosts` array) hold the card metadata and link to the detail routes. Adding a project or post means touching three places: the new page file, a `<Route>` in `App.tsx`, and the listing array. `src/pages/home.tsx` composes the sections in `src/components/`.
- **Shared layout pieces:** most pages render `<Navbar />` and `<SparkleBackground />` and wrap content in a `container mx-auto max-w-5xl` div. `Carousel` is used for image galleries on project pages.
- **Styling:** Tailwind v4 via `@tailwindcss/vite` with no `tailwind.config`. Custom theme tokens (the `font-noto` font, `animate-fade-in*` and `animate-float` animations) live in the `@theme` block in `src/index.css`, along with utility classes such as `text-glow` and `pinyon-script`. Fonts (Noto Serif, Pinyon Script, Poppins) load from Google Fonts in `index.html`.- **Assets:** images are served from `public/assets/images/` and referenced by absolute path (`/assets/images/...`). The OG/meta tags are in `index.html`. `@vercel/analytics` is mounted in `App`.
