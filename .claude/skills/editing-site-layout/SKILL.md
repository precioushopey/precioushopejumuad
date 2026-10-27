---
name: editing-site-layout
description: Use when changing Shell, TopBar, Rail, the right column, Home, About, Projects or Blog pages, DocumentWindow layouts, or the desktop-OS window styling
---

# Editing the site layout and pages

The site is themed as a desktop OS: windows, title bars, widgets and notes.

## Shell (`src/components/shell/`)

All routes nest under the `Shell` layout route. Pages render only their own content and must not add their own navbar or background.

- Fixed blurred, darkened background; `TopBar` (greeting + `SearchPill`); the main `glass-panel` (the only `<main>`).
- On desktop only the panel scrolls. Below `lg` it has no background, border or blur, so content sits on the page background and the page scrolls normally.
- On desktop the content row is only as tall as its content (capped at window height) and the header + row group is vertically centered, so the panel and right column end on the same line and tall windows get equal space above and below. Home's grid stretches to fill the panel.
- **Rail** (floating icon rail, last in the DOM for tab order): on desktop a tall frosted side rail with square right corners, absolutely positioned inside the content row, 28rem tall, tucked under the panel's left edge; below `lg` a sticky bottom bar. It marks the active item with `data-active`; CSS anchor positioning in `src/index.css` glides one indicator to it (a yellow pill on phones, the vertical bar on desktop; Firefox falls back to the static per-item style). The active item shows its title: beside the icon on phones, in small type under the icon on desktop.
- Do not put `overflow-x-hidden` on the Shell root: it makes the root a scroll container and breaks the sticky mobile rail. Use `overflow-x-clip`.
- `TrayClock` (Philippine time) sits under the desktop rail avatar. The phone bar shows wifi and battery glyphs from 480px, and the clock and the widest gap from 600px (earlier thresholds overflow the 5-item bar).
- Links with a `#section` (for example `/about#contact`) make Shell jump to that element, scrolling the panel on desktop and the window on mobile. No link uses this now, but keep it.

## Right column

`ProfileCard` + `ContactCard`, shown only on `/`, `/about`, `/projects`, `/blog`, beside the panel from `xl` (1280px). Below that it is its own page at `/profile`, reached from the dock avatar (lg to xl) or the phone bar's avatar item (below lg); `/profile` redirects home from xl up.

On a post or project page the column shows the other posts/projects as thumbnail tiles in a column (`BlogSuggestions`/`ProjectSuggestions` in `SideSuggestions.tsx`; on cards with a "see all" arrow the whole `WindowBar` is the link, via its `to` prop) instead of the profile and its own category pills. `PillTabs` takes `categories`/`basePath`. Category filters live in the URL: `/projects?category=<c>` and `/blog?category=<c>` (`categories` is exported from `src/data/projects.ts`).

## Home (`src/pages/home.tsx`)

A widget dashboard. Featured pill tabs, then a grid of two rows of two where cards in a row stretch to the same height.

- Row 1: Recent Projects | a clock + two plain stats on soft yellow tiles, over Skills & Expertise.
  - The clock always shows Philippine time: `usePhilippineClock` drives `AnalogClock` using `Asia/Manila` via `src/lib/manilaTime.ts`, never the visitor's timezone. Its "PH Time" label is the one place a 10px custom size is allowed.
  - Stats count up (`useHomeStats`, `useCountUp`): the Projects count and the Experiences count (companies in `jobs` in `src/data/about.ts`, not roles), with no hover info.
  - `SkillsCard`: icon rings in a row. Each ring fills with that skill's share of total experience since March 1, 2024 (`skillShare` in `src/lib/experience.ts`, from the start dates set in the component; dates use `manilaMidnight` so every visitor sees the same numbers). Hovering, focusing or tapping a ring shows a tooltip with the working (`skillBreakdown`). The card deliberately has no title.
- Row 2: Work Experience (rows are `ListRow`, data in `src/data/home.ts`) | Featured Projects as bare photo cards with no container.
- The greeting's flag is the inline SVG `PhFlag`, not an emoji (Windows browsers render flag emoji as the letters "PH").

## Other pages

- **About:** Experiences, Education, Certifications and Skills are large Windows-style folder icons in a grid (`FolderGroup`, one open at a time, starting closed). Notes, work experience and education are accordion cards (`AccordionCard`, chevron in the title bar, one card per company or school) with a Task Manager-style Name/Status/Started/Duration table. Certifications and Skills are file-list windows. Skills render at the bottom of About; contact lives only in the right column.
- **Projects:** heading and category pills like Home's Featured header, then a grid of large thumbnails with name and tags. **Blog** uses the same `ThumbnailTile` (date as the details line).
- **DocumentWindow** (under `BlogPostLayout`/`ProjectLayout`): title bar with the file name, address bar with a back arrow, title and details from `blogPosts`/`projects`. On desktop the main panel itself is the window; below lg it is its own card.
- **`WindowBar`** (title bar: icon, title, optional action) tops app-window cards on Home (Recent Projects, At a glance, Work Experience) and About, and the "New message" mail-compose card.
- Pages are JSX only: data in `src/data/` (`home.ts`, `about.ts`), logic in `src/hooks/` (`use-*.ts`: Home's clock and stats, the About cards, the Blog and Projects category filters, `useMediaQuery` for Profile), pure helpers in `src/lib/` (`about.ts` for dates and durations, `site-link.tsx`, `format-date.ts`). Hooks sit at the top of the component, called unconditionally. `not-found.tsx` has no logic.
