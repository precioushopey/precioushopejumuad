---
name: writing-case-studies
description: Use when creating or editing a case study page in src/projects/, SimpleCaseStudy data, or any CaseStudy.tsx building block (BusinessCase, ProcessStrip, SdlcStrip, UxQualities, FolderGroup)
---

# Writing case studies

Case studies are standalone page components with content inline in the JSX. There is no CMS or markdown pipeline.

**Honesty rule for every section:** each sentence must describe something already on that page. Where the evidence is thin, say so instead of claiming more. Never invent results, research or dates.

## Shared building blocks (`src/components/CaseStudy.tsx`)

The newer case studies (OJT Connect, ROOTÉ, WeCare, SanoVida, CoCo, Roostercat, Relive X360) share its window, note and section-heading blocks. A screenshot still to come shows as `ImagePlaceholder` ("Image needed").

- **`Section`** (also `ScopeAndStandards`, `ProcessStrip`, `UserStories`, `UxQualities`) takes optional `collapsible`: the address-bar heading becomes a button with a chevron, the section starts closed and grows open smoothly (instant with reduced motion; inert while closed). Every section except the top overview uses it, so each case study starts as closed bars. `ScopeAndStandards` and `ProcessStrip` take optional `trail` to be level-3 sections like the rest of their folder.
- **`BusinessCase`**: the page's selling point, right after "About this project" in the top overview of every case study except SUBAY (in `SimpleCaseStudy` it is the required `businessCase` field). A headline, then Conversion, Efficiency and Faster ROI rows, and an `evidence` footer that says plainly whether any results were measured. OJT Connect's comes from the user's own account: hired to fix the landing page's bounce rate; the fix was the filter box in the hero and registration deferred until a student applies.
- **`ProcessStrip`** ("Design process"): last section of folder 1. Five rows (Empathize, Define, Ideate, Prototype, Test), each with a status (Done, Partly, Planned, or To add for a placeholder) and one honest sentence. WeCare, ROOTÉ and Roostercat have "To add" on Ideate until the ideation work is written up; then change the status and text.
- **`SdlcStrip`** ("Development Life Cycle"): right after Design Process in folder 1, only on projects that were built: OJT Connect, ROOTÉ, WeCare, Roostercat, iBRGY, and HRMO Payroll and CpExpress (through the optional `sdlc` field of `SimpleCaseStudy`, which also adds the folder topic). Seven rows (Planning, Requirements, Design, Development, Testing, Deployment, Maintenance), each with a status (Done, Partly, Ongoing, Planned, Not yet, or To add when the page doesn't document that phase) and one honest sentence. `model` names the method only when the project's records do (iBRGY: Modified Waterfall). Each such page carries `{ id: "sdlc", label: "Development life cycle" }` in folder 1's topics. Design-only projects (CoCo, Relive X360, SanoVida, TaleMakers, ATHOMES, ICpEP.SE) have none.
- **`ScopeAndStandards`**: between "The Problem and the Goal" and My Role. Label and text rows for what only scope, limits and standards say. Goals, timeline, languages and tools already live in "The goal" and Properties, so don't repeat them.
- **`UserStories`**: between Personas and User Journey. One "As a ..., I want ..., so that ..." line per persona, with `{ id: "user-stories", label: "User stories" }` in the "Understanding the user" folder's topics. Each story restates that page's own persona and problem statement, never new research.
- **`UxQualities`** ("Good UX Check"): four cards (Usable, Equitable, Enjoyable, Useful), each with one or two honest sentences. Placed at the start of the last folder, above Takeaways (above Testing in CoCo), with `{ id: "ux-qualities", label: "Good UX check" }` in that folder's topics.

## Four folders (`FolderGroup`)

1. **Project overview**: The Problem and the Goal, Scope and Standards, My Role, Design Process, Development Life Cycle where built. OJT Connect also has The Four Portals.
2. **Understanding the user(s)**: User Research, Personas, User Stories, User Journey, or the page's own equivalents.
3. **Design**: everything from the old Starting and Refining the design folders, in that order.
4. **Going forward**: Good UX Check, Takeaways, Next Steps, plus Testing on CoCo.

- `FolderGroup` lays out five folders in five columns (3 + 2 on phones) and four in one row; case studies have four.
- Each folder's `topics` list only feeds its "N items" count. Keep exactly one entry per section in that folder (problem statements sit inside Personas, so they have no entry).
- An open folder ends with a "Back to folders" button that smoothly scrolls to the folder row (instant with reduced motion; `scroll-mt-24` keeps the row below the sticky window bars) and focuses the open folder.

## Short pages (`SimpleCaseStudy`)

ATHOMES, HRMO Payroll, ICpEP.SE redesign and CpExpress are data-only files that render through `src/components/SimpleCaseStudy.tsx`, laid out from a typed `SimpleCaseStudyData` object in the same four folders. Their old Overview, Define, Challenge, six Design Thinking cards, Impact and links moved in word for word. They have no personas, role, dates or skill bars because the old pages never had them (the self-rated Skills Earned bars were removed on purpose). Add a section only when a page has real content for it, and give a page `nextSteps` only where it already says what comes next.

## Project-specific facts

- **SUBAY** is a thesis page and stays as it was.
- **TaleMakers** (`src/projects/talemakers.tsx`) was rebuilt as a full case study from its Figma file and brand book (Storyteller wireframes, mid-fidelity screens, brand book, high-fidelity screens). Its Roostercat "In Development" status comes from roostercat.games.
- **iBRGY** (`src/projects/ibrgy.tsx`) was rebuilt from its capstone manuscript (requirements, diagrams, built screens, tested results). Its numbers (SUS 91.25 from 8 testers, functional tests, the May 2, 2023 interview) come from that manuscript. The manuscript is private because its appendices hold personal details: don't link or copy it.
- **Relive X360** (`src/projects/relive.tsx`, category `design`) has the four folders but no persona or user stories section, because no research is documented: folder 2 is "Who it is for" and "User journey". Its Design Process strip marks Empathize, Ideate and Test "To add". The Design folder shows Figma frames (390px phone screens, design system boards, a screen map) and an "Accessibility check" with contrast measured from the exported screens. Keep every claim tied to something visible in the screens.
- **OJT Connect**: no portal screenshots (see `adding-site-images`).
