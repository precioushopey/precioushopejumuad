# Portfolio Redesign: Glass Panel Design Language

Date: 2026-09-30
Reference: `C:\Users\jumua\Documents\original-947d70ec54ecfd7f80a443c41e9daffd.webp`

## Goal

Redesign the whole portfolio to follow the reference faithfully: a frosted-glass panel over a blurred photo background, a floating circular icon rail, and bento-style cards. All existing routes and content stay; only the presentation and page structure change.

## Decisions (from brainstorming)

| Topic | Decision |
|---|---|
| Fidelity | Faithful: glass panel, icon rail and bento cards on every page |
| Hero visual | Cut-out photo of the owner over a blurred, warm background |
| Long pages | Panel and rail stay fixed; content scrolls inside the panel (desktop) |
| Accent | Honey yellow `#FFC93C` |
| Display font | Angular, Japanese-inspired Google Font (closest match to reference; sample to be shown before adoption) |
| UI/body font | Poppins (already loaded) |
| Skills / Contact | Move onto the About page; rail stays at four icons |
| Top bar | Includes a search pill |

## Design language

- Frosted glass: translucent white fill, `backdrop-filter: blur`, soft border and shadow. Panel radius about 40px on desktop.
- Very round shapes: large radii on panels and cards, perfectly circular icon buttons, nested sections.
- One accent: yellow only on the active rail item and circular arrow buttons. Everything else is white, translucent grey or near-black.
- Two type voices: Poppins for UI and text; the display face only for large accent words.
- Removed: dark theme, sparkles, Noto Serif, Pinyon Script.

## Architecture

- A single shared shell layout component renders the fixed blurred background, the glass panel, the rail and the top bar, with a React Router `<Outlet/>` for page content. `App.tsx` routes become nested under it. All existing paths are unchanged.
- The panel and rail stay mounted across navigation; only the outlet content changes.
- Design tokens (yellow, radii, blur, fonts) live in the `@theme` block in `src/index.css`.

### Shell parts

- **Background:** fixed full-viewport layer with a blurred warm crop of the owner's photo.
- **Rail:** four circular buttons (Home, About, Projects, Blog); the active one is filled yellow, others white. On mobile it becomes a floating bottom bar.
- **Top bar:** wordmark on the left; search pill and small avatar on the right.
- **Search:** searches the existing `projects` and `blogPosts` arrays (title, description, tags) and shows a glass dropdown of results linking to the detail pages. Requires exporting both arrays from their page files. Keyboard accessible.

### Home

One screen on desktop, no page scroll:
- Center: cut-out portrait overlapping the panel and cards, display-font headline, a short line ("Computer Engineer · UI/UX Designer"), faint gold line-art behind.
- Bottom bento row of three cards:
  - Left: "Explore my WORK", "See projects" pill and arrow button linking to `/projects`.
  - Middle notch card: two stat tiles, project count and blog post count, computed from the arrays (no invented numbers).
  - Right: "Read my STORIES", "Read blog" pill and arrow button linking to `/blog`.
- Mobile: portrait on top, cards stacked below.

### About

Becomes the longer "who I am" page. Absorbs the Skills section and the Contact section from the old home page.

### Inner pages

- Content scrolls inside the panel, with a more opaque white fill for readable text.
- Listing pages: rounded glass tiles with a yellow circular arrow button.
- Case studies and blog posts: single readable column, display-font titles, pill tags, circular back-arrow button.

## Build order

Each step leaves the site working.

1. Tokens and fonts.
2. Shell and nested routing in `App.tsx`.
3. Home bento and search (including exporting the data arrays).
4. About page absorbing Skills and Contact.
5. Listing pages, then the roughly 30 detail pages (mostly removing the old `Navbar`/`SparkleBackground` wrapper and swapping heading styles).
6. Cleanup: delete `Navbar.tsx`, `SparkleBackground.tsx`, the absorbed home sections and unused fonts.

## Risks and mitigations

- **Contrast on glass over a photo:** set panel opacity high enough for body text and check against a contrast target.
- **`backdrop-filter` support and performance:** solid translucent fallback when unsupported.
- **Nested scrolling on mobile:** below the desktop breakpoint the panel becomes a normal full-page scroll; only desktop uses the fixed, internally scrolling panel.
- **Accessibility:** labels, focus rings and keyboard support on icon-only rail buttons and the search dropdown.

## Verification

No test framework exists and none will be added for this work. Verify with `npm run build` (type-checks), `npm run lint`, and opening each page type in a browser with screenshots at desktop and phone widths.

## Open items

- **Hero asset:** a cut-out portrait (PNG/WebP with transparent background) is needed from the owner. Build proceeds with a placeholder until provided.
- **Display font:** final choice to be confirmed from a rendered sample.
