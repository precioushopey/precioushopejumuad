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

- **Routing is fully manual, in `src/App.tsx`.** Every project and blog post has its own hand-registered `<Route>` and import (`/projects/<slug>`, `/blogs/<slug>`). Blog components are imported as `Blog1`, `Blog2`, ... `Blog16` (numbering has gaps, and doesn't follow date order). `vercel.json` rewrites all paths to `/` so client-side routing works on deploy.
- **All routes are nested under the `Shell` layout route** (`src/components/shell/`). `Shell` provides the fixed blurred background, the frosted-glass panel, the circular icon `Rail` (a side rail on desktop, a sticky bottom bar below `lg`), and the `TopBar` with `SearchPill`. On desktop the panel is fixed and only its content scrolls; below `lg` the page scrolls normally. Pages render only their own content and must not add their own navbar or background. Don't put `overflow-x-hidden` on the `Shell` root: it turns the root into a scroll container and breaks the sticky mobile rail (use `overflow-x-clip`).
- **Each project/blog is a standalone page component** in `src/projects/` or `src/blogs/`, with its content (copy, image paths, tags, design-step data) written inline in the JSX. There is no CMS or markdown pipeline.
- **Listing data lives in `src/data/`.** The `projects` array (`category` filter: frontend/design/socials/multimedia) and the `blogPosts` array feed the listing pages, the home-page counts, and the top-bar search (`src/lib/search.ts`). Adding a project or post means touching three places: the new page file, a `<Route>` in `App.tsx`, and an entry in the matching `src/data/` array.
- **Home is a single-screen bento** (`src/pages/home.tsx`). Skills and Contact render at the bottom of the About page.
- **Styling:** Tailwind v4 via `@tailwindcss/vite` with no `tailwind.config`. Design tokens (`font-display`, `bg-accent`/`text-accent` honey yellow `#FFC93C`, `text-ink`) and the `animate-fade-in*` animations live in the `@theme` block in `src/index.css`, along with the custom utilities `glass-panel`, `glass-card`, `arrow-button`, `white-button` and `transparent-button`. Poppins is the UI font; the display font is used only for large accent words. `text-glow` is a legacy no-op still referenced by old pages. Fonts load from Google Fonts in `index.html`.
- **Assets:** images are served from `public/assets/images/` and referenced by absolute path (`/assets/images/...`). The OG/meta tags are in `index.html`. `@vercel/analytics` is mounted in `App`.
