import type { ReactNode } from "react";
import {
  LuAccessibility,
  LuCircleCheck,
  LuGauge,
  LuImage,
  LuInfo,
  LuListChecks,
  LuRoute,
  LuSmartphone,
  LuSquare,
  LuStore,
  LuUserRound,
} from "react-icons/lu";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { ProjectLayout } from "../components/ProjectLayout";
import {
  ImagePlaceholder,
  NoteWindow,
  ProcessStrip,
  ScopeAndStandards,
  Section,
  UserStories,
  UxQualities,
  Window,
  cardText,
  noteText,
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/roostercat";

const facts = [
  { label: "Client", value: "Roostercat LLC, an independent game studio" },
  { label: "Role", value: "Lead designer and front-end developer" },
  { label: "Duration", value: "May 2026 (May 18 to May 22)" },
  { label: "Audiences", value: "Players and prospective clients" },
  {
    label: "Built with",
    value: "HTML, CSS, and JavaScript, hand-coded with no build step",
  },
  { label: "Status", value: "Pre-launch" },
];

type Topic = { id: string; label: string };
type Part = {
  number: number;
  title: string;
  peek: string;
  topics: Topic[];
};

const parts: Part[] = [
  {
    number: 1,
    title: "Project overview",
    peek: `${IMAGES}/cover.jpg`,
    topics: [
      { id: "problem-and-goal", label: "The problem and the goal" },
      { id: "scope-and-standards", label: "Scope and standards" },
      { id: "my-role", label: "My role" },
      { id: "process", label: "Design process" },
    ],
  },
  {
    number: 2,
    title: "Understanding the user",
    peek: `${IMAGES}/home-before.webp`,
    topics: [
      { id: "user-research", label: "Audience assumptions" },
      { id: "persona", label: "Audience profiles" },
      { id: "user-stories", label: "User stories" },
      { id: "user-journey", label: "User flows" },
    ],
  },
  {
    number: 3,
    title: "Design",
    peek: `${IMAGES}/studio.webp`,
    topics: [
      { id: "early-sketches", label: "Early sketches" },
      { id: "page-layouts", label: "Page layouts" },
      { id: "working-prototype", label: "Working prototype" },
      { id: "design-review", label: "Design review" },
      { id: "mockups", label: "Mockups" },
      { id: "high-fidelity-designs", label: "High-fidelity designs" },
      { id: "accessibility", label: "Accessibility" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/finished.webp`,
    topics: [
      { id: "ux-qualities", label: "Good UX check" },
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "Information architecture",
  "A visual design system: tokens, typography, and components",
  "Page layouts",
  "Copy",
  "Responsive behavior",
  "Accessibility",
  "Hand-coded HTML, CSS, and JavaScript",
];

const painPoints = [
  {
    icon: <LuStore size={20} />,
    title: "Unclear what the studio offers",
    problem:
      "Services and The Stack pages list deliverables and ideal clients, so visitors can self-qualify before they get in touch.",
  },
  {
    icon: <LuRoute size={20} />,
    title: "Hard to follow game progress",
    problem:
      "Each game shows a status badge, store buttons, and a newsletter signup so players can follow development.",
  },
  {
    icon: <LuGauge size={20} />,
    title: "Slow, heavy pages",
    problem:
      "Static files, no build step, and lazy-loaded images keep pages light and working straight from disk.",
  },
  {
    icon: <LuSmartphone size={20} />,
    title: "Awkward on a phone",
    problem:
      "Breakpoints from 900px down to 480px and a hamburger menu keep navigation usable on small screens.",
  },
];

const audiences = [
  {
    name: "Players",
    statement:
      "Players are mobile gamers who need a quick way to see what Roostercat is making and where to get it, because they want to follow games they might play.",
  },
  {
    name: "Clients",
    statement:
      "Clients are founders and teams with legacy or AI-built software who need proof of capability and an easy way to start a conversation, because they are choosing who to trust with a risky project.",
  },
];

const flows = [
  {
    audience: "Player",
    steps: [
      "Home",
      "Games",
      "Game detail",
      "App Store, Google Play, or newsletter",
    ],
  },
  {
    audience: "Client",
    steps: [
      "Home",
      "Services or The Stack",
      "Contact form (subject “Client Project”)",
    ],
  },
];

const reviewPasses = [
  {
    pass: "Pass 1 (May 20 to 21)",
    items: [
      "Styles drifted between pages; unified them with shared design tokens.",
      "Pages needed cleanup; refined layout and copy across the site.",
      "Content and pages were still being added; all pages now exist.",
    ],
  },
  {
    pass: "Pass 2 (May 22)",
    items: [
      "Typography and card styling needed more polish; further styling refinement.",
      "Consolidated scripts into a single ES5 bundle that works on file://.",
      "Final pass readied the code for production hosting.",
    ],
  },
];

const accessibility = [
  {
    icon: <LuAccessibility size={20} />,
    title: "Semantics and labels",
    description:
      "lang is set on every page, images have alt text, and the main navigation and social links have aria-labels.",
  },
  {
    icon: <LuCircleCheck size={20} />,
    title: "Assistive tech",
    description:
      "The menu button reports aria-expanded, and the decorative ticker is hidden with aria-hidden.",
  },
  {
    icon: <LuSmartphone size={20} />,
    title: "Responsive and legible",
    description:
      "Layouts adapt at 900, 768, 560, and 480px, with light text on a dark background.",
  },
];

const nextSteps = [
  "Run a usability study with players and clients to test the audience assumptions and refine navigation.",
  "Generate js/bundle.js from the component sources so the two never drift apart.",
  "Connect the newsletter and contact forms to a real backend, which are handled in the browser only for now.",
];

// A phone-sized screenshot with a caption.
const Shot = ({
  file,
  alt,
  caption,
}: {
  file: string;
  alt: string;
  caption: ReactNode;
}) => (
  <figure className="space-y-3">
    <img
      src={`${IMAGES}/${file}`}
      width={780}
      height={1360}
      loading="lazy"
      decoding="async"
      alt={alt}
      className="mx-auto aspect-[9/16] w-full max-w-72 rounded-xl md:rounded-2xl border object-cover object-top"
    />
    <figcaption className="text-left text-xs text-cream/60">
      {caption}
    </figcaption>
  </figure>
);

// Two phone screenshots side by side, before and after the design review.
const BeforeAfter = ({
  title,
  footer,
  before,
  after,
}: {
  title: string;
  footer: string;
  before: { file: string; alt: string };
  after: { file: string; alt: string };
}) => (
  <Window icon={<LuImage size={16} />} title={title} level={4} footer={footer}>
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
      <Shot
        file={before.file}
        alt={before.alt}
        caption="Before refinement (May 18)"
      />
      <Shot
        file={after.file}
        alt={after.alt}
        caption="After refinement (May 22)"
      />
    </div>
  </Window>
);

const Roostercat = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <img
          src={`${IMAGES}/roostercat.webp`}
          width={1280}
          height={800}
          alt="Roostercat home page on a desktop: the navigation bar, a hero of game art for Unang Sibol, MediDash, and TaleMakers, and the start of the games section"
          className="w-full"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            A responsive website for Roostercat LLC, an independent game studio.
            It presents three mobile games in development and the studio’s
            client services to two audiences: players and prospective clients.
          </p>
        </NoteWindow>
        <Window icon={<LuInfo size={16} />} title="Properties">
          <dl className="divide-y divide-line/40 text-sm">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[8rem_1fr] sm:gap-3"
              >
                <dt className="text-xs leading-6 text-cream/60">
                  {fact.label}
                </dt>
                <dd className="font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Window>
      </Section>

      <FolderGroup>
        <FolderSection
          label={`${parts[0].number}. ${parts[0].title}`}
          count={parts[0].topics.length}
          peek={parts[0].peek}
        >
          <div className="space-y-6">
            <Section
              trail={parts[0].title}
              collapsible
              id="problem-and-goal"
              title="The Problem and the Goal"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <NoteWindow title="The problem" level={3}>
                  <p className={noteText}>
                    The studio had no public home. Players could not discover or
                    follow its three games, and potential clients could not see
                    what the studio builds or how to reach it.
                  </p>
                </NoteWindow>
                <NoteWindow title="The goal" level={3}>
                  <p className={noteText}>
                    Ship one fast, consistent site that gives players and
                    clients each a clear path: follow a game, understand a
                    service, or get in touch.
                  </p>
                </NoteWindow>
              </div>
            </Section>

            <ScopeAndStandards
              trail={parts[0].title}
              collapsible
              rows={[
                {
                  label: "Scope",
                  text: "Ten pages, including three game detail pages and a 404, covering three games, five services, and a contact path.",
                },
                {
                  label: "Not connected yet",
                  text: "The newsletter and contact forms, which are handled in the browser only, and a build step: the script bundle is maintained by hand.",
                },
                {
                  label: "Standards",
                  text: "A language set on every page, alt text on images, aria-labels on navigation and social links, and layouts that adapt at 900, 768, 560, and 480px.",
                },
              ]}
            />

            <Section
              trail={parts[0].title}
              collapsible
              id="my-role"
              title="My Role"
            >
              <NoteWindow title="My role">
                <p className={noteText}>
                  I worked on this project as the lead designer and front-end
                  developer. My responsibilities were:
                </p>
              </NoteWindow>
              <Window
                icon={<LuListChecks size={16} />}
                title="Responsibilities"
                footer={`${responsibilities.length} items`}
              >
                <ul className="space-y-3 p-6 text-sm leading-6">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <LuCircleCheck
                        size={16}
                        aria-hidden
                        className="mt-1 shrink-0 text-accent"
                      />
                      <span className="text-cream/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </Window>
            </Section>

            <ProcessStrip
              trail={parts[0].title}
              collapsible
              empathize={{
                status: "Partly",
                text: "No formal user research was run. The design rests on two assumed audiences, players and clients.",
              }}
              define={{
                status: "Partly",
                text: "A problem statement for each assumed audience and the main user flows. None of it came from interviews.",
              }}
              ideate={{
                status: "To add",
                text: "Ideation work still to come, such as “How might we” questions or rapid sketches. For now: no sketches were kept, and layout was explored directly in code, starting from a five-link navigation and a games-first home page.",
              }}
              prototype={{
                status: "Done",
                text: "Built directly as a working static site instead of a clickable mockup, with before and after mockups for the home and games pages and the finished ten-page site.",
              }}
              test={{
                status: "Partly",
                text: "Two internal design-review passes (May 20 to 22) led to changes. A usability study with real players and clients is the next step.",
              }}
            />
          </div>
        </FolderSection>
        <FolderSection
          label={`${parts[1].number}. ${parts[1].title}`}
          count={parts[1].topics.length}
          peek={parts[1].peek}
        >
          <div className="space-y-6">
            <Section
              collapsible
              id="user-research"
              title="Audience Assumptions"
              trail={parts[1].title}
            >
              <NoteWindow title="Research notes">
                <p className={noteText}>
                  No formal user research was run for this release, so the
                  design rests on stated assumptions. I assumed two audiences:
                  players who want to discover and follow the games, and clients
                  who want to understand the services and make contact.
                </p>
                <p className={noteText}>
                  Those assumptions shaped the main navigation, the “For Players
                  / For Clients” split call-to-action, and the newsletter
                  signup. A usability study is the next step to test them.
                </p>
              </NoteWindow>
              <h4 className="text-left font-medium text-lg">
                Assumed pain points
              </h4>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {painPoints.map((point) => (
                  <Window
                    key={point.title}
                    icon={point.icon}
                    title={point.title}
                    level={5}
                  >
                    <p className={`p-6 ${cardText}`}>{point.problem}</p>
                  </Window>
                ))}
              </div>
            </Section>

            <Section
              collapsible
              id="persona"
              title="Audience Profiles"
              trail={parts[1].title}
            >
              <NoteWindow title="Persona notes">
                <p className={noteText}>
                  Two audiences, each with the problem statement that guided its
                  design. Both are assumed, not taken from interviews.
                </p>
              </NoteWindow>
              <div
                id="problem-statement"
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {audiences.map((audience) => (
                  <Window
                    key={audience.name}
                    icon={<LuUserRound size={16} />}
                    title="Audience"
                    level={4}
                  >
                    <div className="space-y-3 p-6">
                      <div className="flex items-center gap-3 border-b pb-3">
                        <span
                          aria-hidden
                          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                        >
                          <LuUserRound size={24} />
                        </span>
                        <h5 className="text-left font-medium text-lg leading-6">
                          {audience.name}
                        </h5>
                      </div>
                      <p className="text-left text-xs text-cream/60">
                        Problem statement (assumed, not from interviews)
                      </p>
                      <p className={cardText}>{audience.statement}</p>
                    </div>
                  </Window>
                ))}
              </div>
            </Section>

            <UserStories
              collapsible
              trail={parts[1].title}
              stories={[
                {
                  who: "Player",
                  story:
                    "As a mobile gamer, I want a quick way to see what Roostercat is making and where to get it, so that I can follow games I might play.",
                },
                {
                  who: "Client",
                  story:
                    "As a founder or team with legacy or AI-built software, I want proof of capability and an easy way to start a conversation, so that I can choose who to trust with a risky project.",
                },
              ]}
            />

            <Section
              collapsible
              id="user-journey"
              title="User Flows"
              trail={parts[1].title}
            >
              <NoteWindow title="Flow notes">
                <p className={noteText}>
                  These are the primary flows I designed for. They come from the
                  site’s navigation structure. A journey map image has not been
                  created yet.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {flows.map((flow) => (
                  <Window
                    key={flow.audience}
                    icon={<LuRoute size={16} />}
                    title={`${flow.audience} flow`}
                    level={4}
                    footer={`${flow.steps.length} steps`}
                  >
                    <ol className="divide-y divide-line/40">
                      {flow.steps.map((step, index) => (
                        <li
                          key={step}
                          className="flex items-center gap-3 px-6 py-3"
                        >
                          <span
                            aria-hidden
                            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                          >
                            {index + 1}
                          </span>
                          <p className={`min-w-0 flex-1 ${cardText}`}>{step}</p>
                        </li>
                      ))}
                    </ol>
                  </Window>
                ))}
              </div>
              <ImagePlaceholder>
                A journey map for the player and client flows.
              </ImagePlaceholder>
            </Section>
          </div>
        </FolderSection>
        <FolderSection
          label={`${parts[2].number}. ${parts[2].title}`}
          count={parts[2].topics.length}
          peek={parts[2].peek}
        >
          <div className="space-y-6">
            <Section
              collapsible
              id="early-sketches"
              title="Early Sketches"
              trail={parts[2].title}
            >
              <NoteWindow title="Sketch notes">
                <p className={noteText}>
                  No paper wireframes were kept for this project. Layout was
                  explored directly in code, starting from a five-link
                  navigation and a games-first home page.
                </p>
              </NoteWindow>
            </Section>

            <Section
              collapsible
              id="page-layouts"
              title="Page Layouts"
              trail={parts[2].title}
            >
              <NoteWindow title="Layout notes">
                <p className={noteText}>
                  The home page leads with a photo hero, then a statement, the
                  games grid, capabilities, and a split Players / Clients
                  call-to-action. On the games page, each game gets a card with
                  genre, a one-line pitch, status, and store buttons, plus a
                  “What’s Next” teaser for future titles.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuImage size={16} />}
                  title="Home page"
                  level={4}
                  footer="The split call-to-action gives each audience its own path, and the games grid shows status and store buttons at a glance."
                >
                  <div className="p-6">
                    <Shot
                      file="home-after.webp"
                      alt="Home page on a phone: a hero of game art, the headline “Games built with soul” with two buttons, the featured TaleMakers card, and a games grid with MediDash, TaleMakers, and Unang Sibol"
                      caption="Home page"
                    />
                  </div>
                </Window>
                <Window
                  icon={<LuImage size={16} />}
                  title="Games page"
                  level={4}
                  footer="Cards share one structure so titles are easy to compare, and “Learn More” leads to a dedicated game page."
                >
                  <div className="p-6">
                    <Shot
                      file="games-after.webp"
                      alt="Games page on a phone: the heading “Our games” and three numbered game cards for MediDash, TaleMakers, and Unang Sibol, each with a short pitch, a Learn More button, and side-by-side App Store and Google Play buttons"
                      caption="Games page"
                    />
                  </div>
                </Window>
              </div>
            </Section>

            <Section
              collapsible
              id="working-prototype"
              title="Working Prototype"
              trail={parts[2].title}
            >
              <NoteWindow title="Prototype notes">
                <p className={noteText}>
                  The site was built directly as a working static prototype
                  rather than a clickable mockup. It runs straight from disk:
                  open index.html in any browser (no server needed) and follow
                  the navigation through every page.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="index.html"
                footer="The home page on desktop."
              >
                <img
                  src={`${IMAGES}/roostercat.webp`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="The working prototype’s home page on a desktop: the navigation bar and a hero of game art for Unang Sibol, MediDash, and TaleMakers"
                  className="w-full"
                />
              </Window>
            </Section>

            <Section
              collapsible
              id="design-review"
              title="Design Review"
              trail={parts[2].title}
            >
              <NoteWindow title="Review notes">
                <p className={noteText}>
                  No participant usability study has been run yet. These
                  findings come from two internal design-review passes in the
                  project history. A moderated study with real players and
                  clients is the next step.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {reviewPasses.map((round) => (
                  <Window
                    key={round.pass}
                    icon={<LuListChecks size={16} />}
                    title={round.pass}
                    level={4}
                    footer={`${round.items.length} items`}
                  >
                    <ul className="divide-y divide-line/40">
                      {round.items.map((item, index) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 px-6 py-3"
                        >
                          <span
                            aria-hidden
                            className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                          >
                            {index + 1}
                          </span>
                          <p className={cardText}>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </Window>
                ))}
              </div>
            </Section>

            <Section
              collapsible
              id="mockups"
              title="Mockups"
              trail={parts[2].title}
            >
              <NoteWindow title="Mockup notes">
                <p className={noteText}>
                  Two pages are shown before and after refinement, between the
                  first build on May 18 and the final pass on May 22.
                </p>
              </NoteWindow>
              <BeforeAfter
                title="Home page"
                footer="The ticker was simplified, TaleMakers replaced Unang Sibol as the featured hero card, and the games grid moved to larger cards with clearer type."
                before={{
                  file: "home-before.webp",
                  alt: "Home page on a phone before refinement, with Unang Sibol as the featured hero card and a games grid of smaller cards",
                }}
                after={{
                  file: "home-after.webp",
                  alt: "Home page on a phone after refinement, with TaleMakers as the featured hero card and a games grid of larger cards with clearer type",
                }}
              />
              <BeforeAfter
                title="Games page"
                footer="Cards were reordered, numbered by category, and given larger titles, readable copy, and side-by-side store buttons."
                before={{
                  file: "games-before.webp",
                  alt: "Games page on a phone before refinement: three game cards with the Learn More, App Store, and Google Play buttons stacked",
                }}
                after={{
                  file: "games-after.webp",
                  alt: "Games page on a phone after refinement: numbered game cards with larger titles, readable copy, and side-by-side App Store and Google Play buttons",
                }}
              />
            </Section>

            <Section
              collapsible
              id="high-fidelity-designs"
              title="High-Fidelity Designs"
              trail={parts[2].title}
            >
              <NoteWindow title="Design notes">
                <p className={noteText}>
                  The finished site is static HTML, CSS, and JS with no build
                  step. It has ten pages, including three game detail pages and
                  a 404.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <Shot
                  file="studio.webp"
                  alt="Studio page on a phone: the headline “Where bold ideas hatch”, the studio story with a group photo and key figures, specialty tags, and a “What we build” list"
                  caption="Studio"
                />
                <Shot
                  file="services.webp"
                  alt="Services page on a phone: the headline “Built for the next decade”, buttons to schedule a call or email the studio, and sections on local-first architecture and Unity game development"
                  caption="Services"
                />
                <Shot
                  file="game-detail.webp"
                  alt="MediDash game page on a phone: the title, a short description of a casual nursing puzzle game, and Notify me at launch and Watch trailer buttons on a dark blue background"
                  caption="Game page"
                />
              </div>
              <Window
                icon={<LuImage size={16} />}
                title="MediDash game page"
                level={4}
                footer="A game detail page on desktop."
              >
                <img
                  src={`${IMAGES}/finished.webp`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="MediDash game page on a desktop: the navigation bar, the title, a short description of a casual nursing puzzle game, and Notify me at launch and Watch trailer buttons on a dark blue background"
                  className="w-full"
                />
              </Window>
            </Section>

            <Section
              collapsible
              id="accessibility"
              title="Accessibility Considerations"
              trail={parts[2].title}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {accessibility.map((item) => (
                  <Window
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    level={4}
                  >
                    <p className={`p-6 ${cardText}`}>{item.description}</p>
                  </Window>
                ))}
              </div>
            </Section>
          </div>
        </FolderSection>
        <FolderSection
          label={`${parts[3].number}. ${parts[3].title}`}
          count={parts[3].topics.length}
          peek={parts[3].peek}
        >
          <div className="space-y-6">
            <UxQualities
              collapsible
              trail={parts[3].title}
              usable="A split “For Players / For Clients” call-to-action gives each audience its own path, and game cards share one structure with status and store buttons. Usability has only been checked in two internal review passes."
              equitable="A language is set on every page, images have alt text, navigation and social links have aria-labels, and the menu button reports aria-expanded. Layouts adapt down to 480px."
              enjoyable="The home page leads with the games’ own art in a photo hero, and the games grid moved to larger cards with clearer type after review. There is no player feedback yet."
              useful="One site where players can follow three games, and clients can see the five services and reach the studio through a contact path."
            />

            <Section
              collapsible
              id="takeaways"
              title="Takeaways"
              trail={parts[3].title}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <NoteWindow title="Impact" level={4}>
                  <p className={noteText}>
                    The site is pre-launch, so there is no traffic or sign-up
                    data yet. It gives the studio ten pages covering three
                    games, five services, and a contact path, all consistent
                    through one token system.
                  </p>
                </NoteWindow>
                <NoteWindow title="What I learned" level={4}>
                  <p className={noteText}>
                    A small token and component system kept ten pages
                    consistent. Maintaining the bundle by hand taught me what a
                    build step is worth, and I learned to validate assumptions
                    with users earlier.
                  </p>
                </NoteWindow>
              </div>
            </Section>

            <Section
              collapsible
              id="next-steps"
              title="Next Steps"
              trail={parts[3].title}
            >
              <Window
                icon={<LuListChecks size={16} />}
                title="To do"
                footer={`${nextSteps.length} items`}
              >
                <ul className="divide-y divide-line/40">
                  {nextSteps.map((step) => (
                    <li key={step} className="flex items-start gap-3 px-6 py-3">
                      <LuSquare
                        size={16}
                        aria-hidden
                        className="mt-1 shrink-0 text-accent"
                      />
                      <p className={cardText}>{step}</p>
                    </li>
                  ))}
                </ul>
              </Window>
            </Section>
          </div>
        </FolderSection>
      </FolderGroup>
    </div>
  </ProjectLayout>
);

export default Roostercat;
