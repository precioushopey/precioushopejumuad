import {
  LuAccessibility,
  LuCircleCheck,
  LuCreditCard,
  LuEye,
  LuImage,
  LuInfo,
  LuLayoutDashboard,
  LuListChecks,
  LuPalette,
  LuQrCode,
  LuRoute,
  LuSmartphone,
  LuSquare,
  LuUserRound,
} from "react-icons/lu";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { ProjectLayout } from "../components/ProjectLayout";
import {
  BusinessCase,
  ImagePlaceholder,
  LighthouseReport,
  NoteWindow,
  ProcessStrip,
  ScopeAndStandards,
  SdlcStrip,
  Section,
  UserStories,
  UxQualities,
  Window,
  cardText,
  noteText,
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/clawholics";
const PEEK = `${IMAGES}/home.webp`;

const facts = [
  { label: "Client", value: "Clawholics by Max, a nail salon" },
  { label: "Role", value: "UX designer and front-end developer" },
  { label: "Duration", value: "October 2026, ongoing" },
  { label: "Audiences", value: "Salon clients, and the salon's staff and owner" },
  {
    label: "Built with",
    value:
      "Next.js 16, React 19, TypeScript, Tailwind CSS v4, TanStack Query, Clerk, and Supabase Postgres",
  },
  { label: "Status", value: "Live at clawholicsbymax.com" },
];

type Topic = { id: string; label: string };
type Part = {
  number: number;
  title: string;
  topics: Topic[];
};

const parts: Part[] = [
  {
    number: 1,
    title: "Project overview",
    topics: [
      { id: "problem-and-goal", label: "The problem and the goal" },
      { id: "scope-and-standards", label: "Scope and standards" },
      { id: "my-role", label: "My role" },
      { id: "process", label: "Design process" },
      { id: "sdlc", label: "Development life cycle" },
      { id: "code-architecture", label: "Code architecture" },
    ],
  },
  {
    number: 2,
    title: "Understanding the users",
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
    topics: [
      { id: "design-decisions", label: "Key design decisions" },
      { id: "screens", label: "Screens" },
      { id: "design-system", label: "Design system" },
      { id: "responsive", label: "Responsive behavior and states" },
      { id: "accessibility", label: "Accessibility" },
      { id: "lighthouse", label: "Lighthouse report" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    topics: [
      { id: "ux-qualities", label: "Good UX check" },
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "Mobile and desktop layouts for the public site, the client app, and the admin area",
  "A shared component library (atoms, molecules, and organisms) and the colour and type tokens",
  "The client app at /my: explore, booking, payment, reschedule, appointments, and profile",
  "Admin screens: dashboard, sales and performance reports, the schedule, and content editors with live preview",
  "Loading skeletons, error and retry screens, and the responsive phone layouts",
  "Accessibility fixes: contrast, tap targets, and labels",
];

const audiences = [
  {
    name: "Clients",
    statement:
      "Salon clients need to book an appointment, pay the downpayment, and keep track of their visits and loyalty stamps from their phone, because they do not want to message the salon to arrange each visit.",
  },
  {
    name: "Staff and owner",
    statement:
      "The salon's staff and owner need to run bookings and sales and edit the site's services, prices, and content themselves, because they should not have to ask a developer for each change.",
  },
];

const flows = [
  {
    audience: "Client booking",
    steps: [
      "Sign up and verify email",
      "Onboarding",
      "Pick a service, an artist, and a slot",
      "Pay the downpayment through Xendit",
      "Confirmation, with no admin step",
    ],
  },
  {
    audience: "Visit and loyalty",
    steps: [
      "Client visits the salon",
      "Admin completes the visit and records the balance",
      "Client earns a loyalty stamp",
    ],
  },
];

const decisions = [
  {
    icon: <LuPalette size={20} />,
    title: "Pastel pink is never text",
    description:
      "The brand pink is too light to read, so pink words use darker ink tokens and text on pink fills uses a dark on-colour token. The rule is WCAG AA 4.5:1, but the Lighthouse run on the live home page still found six elements that miss it.",
  },
  {
    icon: <LuCreditCard size={20} />,
    title: "The payment confirms the booking",
    description:
      "Early versions had an admin confirm each booking after the client uploaded a payment screenshot. Later, a paid downpayment confirms the booking by itself and the screenshot step became an instruction to send it on Instagram.",
  },
  {
    icon: <LuLayoutDashboard size={20} />,
    title: "The dashboard counts finished visits",
    description:
      "A visit counts as completed only after an admin finishes it with Complete visit, dated by completion day, and the money cards follow gross, unearned, forfeit, and revenue rules, so the numbers match what the salon collected.",
  },
  {
    icon: <LuEye size={20} />,
    title: "Content editors show a live preview",
    description:
      "The real public page appears beside the form, at desktop width or in a phone frame, and unsaved drafts are sent into it, so the owner sees a change before saving it.",
  },
  {
    icon: <LuSmartphone size={20} />,
    title: "A separate client app with one shared frame",
    description:
      "Clients get their own app at /my, with a bottom tab bar on phones and a sidebar from tablet width up. Admin tables turn into row cards on small screens.",
  },
  {
    icon: <LuQrCode size={20} />,
    title: "Service options replace a single price",
    description:
      "A client picks an option and the list shows a from price. Online add-on pricing was not built, so add-on prices are written into the service descriptions.",
  },
];

const palette = [
  { label: "Crimson (brand pink)", value: "#ff88a1" },
  { label: "Crimson light", value: "#f3b6c4" },
  { label: "Light orange (cream)", value: "#f6e9e1" },
  { label: "Sand", value: "#e8d7cd" },
  { label: "Gray red (text)", value: "#7a5f5a" },
  { label: "Pink ink (pink text)", value: "#78404c" },
  { label: "On crimson (text on pink)", value: "#3d2b28" },
];

const accessibility = [
  {
    icon: <LuAccessibility size={20} />,
    title: "Colour contrast",
    description:
      "Ink and on-colour tokens set a 4.5:1 text contrast rule, and brand pink is meant to be only a fill. The Lighthouse run found six home-page elements at 1.9:1, cream text on pink and the pink headline on cream, so the rule is not fully met yet.",
  },
  {
    icon: <LuCircleCheck size={20} />,
    title: "Tap targets and labels",
    description:
      "An accessibility pass gave small controls a 24px tap target, matched an aria-label to its visible text, and fixed chip contrast. Lighthouse still flagged one link whose label leaves out its visible text.",
  },
  {
    icon: <LuListChecks size={20} />,
    title: "Measured, with issues open",
    description:
      "Lighthouse scored the live home page 96 for accessibility on October 30, 2026. The six contrast failures and the one label mismatch are still open.",
  },
];

const nextSteps = [
  "Run a usability study with salon clients and staff to test the booking flow and the admin screens.",
  "Add the screenshots and a journey map to this case study.",
  "Build online add-on pricing, which is now written into the service descriptions.",
  "Measure bookings and downpayments after launch, so the business case can show results.",
];

const Clawholics = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <img
          src={`${IMAGES}/home.webp`}
          width={1568}
          height={700}
          alt="Clawholics home page on a desktop: the navigation bar with a Book now button, the headline Clawholics, a short line about gel extensions and manicures in Cagayan de Oro, and a close-up photo of painted nails"
          className="w-full"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            Clawholics is a booking and management web app for a nail salon,
            live at clawholicsbymax.com. Clients book and pay a downpayment
            online, earn loyalty stamps by QR scan, and track their visits in a
            client app. Staff and the owner run bookings, sales, and the site’s
            own content from an admin area.
          </p>
        </NoteWindow>
        <BusinessCase
          headline="One place where clients book and pay, and where the salon runs bookings and edits its own site without a developer."
          conversion="Booking ends with the downpayment, and a paid booking confirms by itself, so a client does not wait on a person to confirm it."
          efficiency="The owner edits services, categories, prices, and page content from the admin area with a live preview, and a price edit no longer changes old appointments."
          roi="Loyalty stamps earned by QR scan give clients a reason to come back, and the dashboard shows what the salon collected."
          evidence="No results are measured yet: there is no booking, conversion, or time-saved data on this page."
        />
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
          peek={PEEK}
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
                    The owner wanted to manage the site without a developer.
                    Categories were free text, prices came from an artist’s tier,
                    and editing a price changed past appointments because they
                    stored no price of their own.
                  </p>
                </NoteWindow>
                <NoteWindow title="The goal" level={3}>
                  <p className={noteText}>
                    Give clients a complete way to book, pay, and track visits,
                    and let an admin create, rename, reorder, and delete
                    categories and services, with a price edit never changing an
                    existing appointment.
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
                  text: "A public site (home, services, artists, about, contact, FAQ, legal pages), a client app at /my, and an admin area, as 41 pages with a backend of 89 API routes and 21 database migrations.",
                },
                {
                  label: "Not built",
                  text: "Online add-on pricing. Add-on prices are written into the service descriptions.",
                },
                {
                  label: "Locale",
                  text: "English for the Philippines, Manila time, and pesos.",
                },
                {
                  label: "Standards",
                  text: "A 4.5:1 text contrast rule, server-side access rules for each role, checks on uploads, rate limits, a payment webhook token, and a cookie notice with no tracking. Lint, type checks, and tests run on every pull request.",
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
                  I worked on this project as the UX designer and front-end
                  developer. Other developers on the team handled much of the
                  server side, such as caching, the booking rules on the server,
                  birthday vouchers, and notifications. My responsibilities
                  were:
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
                status: "To add",
                text: "No interviews or research notes are kept for this project. The design rests on the owner’s request and two assumed audiences.",
              }}
              define={{
                status: "Partly",
                text: "A written spec for the catalog states the intent, the success criteria, the decisions made with the owner’s representative, and what is out of scope.",
              }}
              ideate={{
                status: "To add",
                text: "No sketches or alternatives were kept. A few commits and code comments give the reasons for a change.",
              }}
              prototype={{
                status: "Partly",
                text: "Built directly in code instead of a clickable mockup, with an admin-only design-system page that shows every component.",
              }}
              test={{
                status: "Partly",
                text: "Automated tests and an accessibility fix pass. No usability sessions with clients or staff are documented.",
              }}
            />

            <SdlcStrip
              trail={parts[0].title}
              collapsible
              planning={{
                status: "Partly",
                text: "A catalog spec dated October 7, 2026, written as the first of five parts of a revamp.",
              }}
              requirements={{
                status: "Partly",
                text: "Success criteria for the catalog are in the spec. The remaining requirements are not documented.",
              }}
              design={{
                status: "Partly",
                text: "Design rules live in the project notes and the colour tokens, and the components are shown on a design-system page. There are no Figma files.",
              }}
              development={{
                status: "Ongoing",
                text: "One Next.js app serves the public site, the client app, and the admin area, with API route handlers as the backend on Supabase Postgres. Work started October 10, 2026.",
              }}
              testing={{
                status: "Done",
                text: "Lint, type checks, unit tests, and Postgres integration tests run on every pull request and every push to the main branch.",
              }}
              deployment={{
                status: "Done",
                text: "Hosted on Vercel and live at clawholicsbymax.com. Database migrations are applied automatically when changes merge to main, and a Vercel cron job runs daily.",
              }}
              maintenance={{
                status: "Ongoing",
                text: "Dependency and security upgrades continue, including a Next.js security upgrade and npm audit fixes.",
              }}
            />
            <Section
              collapsible
              id="code-architecture"
              title="Code Architecture"
              trail={parts[0].title}
            >
              <NoteWindow title="Architecture notes">
                <p className={noteText}>
                  How the Clawholics web app is organised: public discovery for visitors, client booking with downpayments, admin operations for the salon, and the application platform behind them (API routes, catalog cache, authentication, database, image storage and email).
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="git-diagram.webp"
                footer="Diagram generated from the GitHub repository with GitDiagram. Select it to open the full size."
              >
                <a
                  href={`${IMAGES}/git-diagram.webp`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${IMAGES}/git-diagram.webp`}
                    width={2400}
                    height={1574}
                    loading="lazy"
                    decoding="async"
                    alt="A GitDiagram of the Clawholics code. Visitors browse the salon website through a public query cache. Clients book visits, pay downpayments through Xendit, use QR stamps and submit reviews. Administrators manage content and appointments. API routes sit on Clerk, Supabase Postgres, Cloudflare R2 and Resend."
                    className="w-full"
                  />
                </a>
              </Window>
            </Section>
          </div>
        </FolderSection>

        <FolderSection
          label={`${parts[1].number}. ${parts[1].title}`}
          count={parts[1].topics.length}
          peek={PEEK}
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
                  No formal user research is documented for this project. The
                  design rests on two audiences taken from the brief: salon
                  clients, and the salon’s staff and owner.
                </p>
                <p className={noteText}>
                  Those assumptions shaped the client app’s tab bar, the booking
                  and payment flow, and the admin area. A usability study is the
                  next step to test them.
                </p>
              </NoteWindow>
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
                  who: "Client",
                  story:
                    "As a salon client, I want to book, pay the downpayment, and track my visits from my phone, so that I do not have to message the salon to arrange each visit.",
                },
                {
                  who: "Staff and owner",
                  story:
                    "As the salon’s staff or owner, I want to run bookings and edit the site’s services, prices, and content myself, so that I do not have to ask a developer for each change.",
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
                  These flows are reconstructed from how the app works, not from
                  research. A journey map image has not been created yet, and
                  where users struggle is not documented.
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
                A journey map for the client booking flow.
              </ImagePlaceholder>
            </Section>
          </div>
        </FolderSection>

        <FolderSection
          label={`${parts[2].number}. ${parts[2].title}`}
          count={parts[2].topics.length}
          peek={PEEK}
        >
          <div className="space-y-6">
            <Section
              collapsible
              id="design-decisions"
              title="Key Design Decisions"
              trail={parts[2].title}
            >
              <NoteWindow title="Decision notes">
                <p className={noteText}>
                  The reasons below come from the project notes, commit
                  messages, and code comments. Where the reason was not written
                  down, the card says what changed, not why.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {decisions.map((item) => (
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

            <Section
              collapsible
              id="screens"
              title="Screens"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  The app has 41 pages: 14 public, 8 in the client app, and 19
                  in the admin area. The client booking flow runs through
                  booking, payment, confirmation, and reschedule pages. The
                  public pages are shown below; the signed-in screens, with
                  sample data only, are still to come.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="Services"
                level={4}
                footer="The public services list on a desktop, with category filters and search."
              >
                <img
                  src={`${IMAGES}/services.webp`}
                  width={1568}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  alt="Services page on a desktop: the headline Nail Services, filter chips for All, Manicure, Pedicure, and Lashes, a search box, and cards for Softgel Extensions, Hard Gel, and BIAB Overlay with a from price and a duration"
                  className="w-full"
                />
              </Window>
              <Window
                icon={<LuImage size={16} />}
                title="Service detail"
                level={4}
                footer="A service page with its price, duration, deposit, and the booking terms beside it."
              >
                <img
                  src={`${IMAGES}/service-detail.webp`}
                  width={1568}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  alt="Softgel Extensions page on a desktop: the description with length add-on prices, the duration, master and junior technician prices, the deposit, and a Terms and Conditions panel covering downpayment, rescheduling, late fees, and no-shows"
                  className="w-full"
                />
              </Window>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <ImagePlaceholder>
                  The booking, payment, and confirmation flow in the client app.
                </ImagePlaceholder>
                <ImagePlaceholder>
                  The client home at /my, with sample data.
                </ImagePlaceholder>
                <ImagePlaceholder>
                  The admin dashboard, with sample data only.
                </ImagePlaceholder>
              </div>
              <ImagePlaceholder>
                A content editor with the live preview beside the form.
              </ImagePlaceholder>
            </Section>

            <Section
              collapsible
              id="design-system"
              title="Design System"
              trail={parts[2].title}
            >
              <NoteWindow title="System notes">
                <p className={noteText}>
                  The type is Gloock for display text and Noto Sans for body
                  text. Components live in atoms, molecules, and organisms
                  folders, with shared class recipes, and an admin-only page
                  shows each of them. The colours come from the salon’s brand
                  book, which is not part of this project’s files.
                </p>
              </NoteWindow>
              <Window
                icon={<LuPalette size={16} />}
                title="Colour tokens"
                level={4}
                footer={`${palette.length} colours`}
              >
                <dl className="divide-y divide-line/40 text-sm">
                  {palette.map((color) => (
                    <div
                      key={color.label}
                      className="flex items-center gap-3 px-6 py-3"
                    >
                      <span
                        aria-hidden
                        className="size-8 shrink-0 rounded-full border"
                        style={{ backgroundColor: color.value }}
                      />
                      <dt className="min-w-0 flex-1 font-medium">
                        {color.label}
                      </dt>
                      <dd className="text-xs text-cream/60">{color.value}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
              <ImagePlaceholder>
                The design-system page showing the components.
              </ImagePlaceholder>
            </Section>

            <Section
              collapsible
              id="responsive"
              title="Responsive Behavior and States"
              trail={parts[2].title}
            >
              <NoteWindow title="Responsive notes">
                <p className={noteText}>
                  Phones get a bottom tab bar in the client app, and a sidebar
                  with an icon rail appears from tablet width. Admin tables turn
                  into row cards on small screens. Loading skeletons were added
                  across the app, and error and retry screens cover failed
                  loads, such as in onboarding.
                </p>
              </NoteWindow>
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

            <LighthouseReport
              collapsible
              trail={parts[2].title}
              url="https://www.clawholicsbymax.com/"
              date="October 30, 2026"
              scores={{ performance: 95, accessibility: 96, bestPractices: 100, seo: 100 }}
              metrics={[
                { label: "First Contentful Paint", value: "0.7 s" },
                { label: "Largest Contentful Paint", value: "1.1 s" },
                { label: "Total Blocking Time", value: "140 ms" },
                { label: "Cumulative Layout Shift", value: "0.033" },
                { label: "Speed Index", value: "1.0 s" },
              ]}
              findings={[
                "Colour contrast: 6 elements have a contrast ratio of 1.9:1, cream text on the brand pink and the pink headline on cream.",
                "Labels: the floating Facebook message link's accessible name does not include its visible text.",
                "Performance: a total page weight of 1,887 KiB, estimated savings of 323 KiB from image delivery and 230 KiB from unused JavaScript, and the largest-paint request without fetchpriority=high.",
              ]}
            />
          </div>
        </FolderSection>

        <FolderSection
          label={`${parts[3].number}. ${parts[3].title}`}
          count={parts[3].topics.length}
          peek={PEEK}
        >
          <div className="space-y-6">
            <UxQualities
              collapsible
              trail={parts[3].title}
              usable="A client books through a clear sequence of pages, and paid bookings confirm without waiting for an admin. Phone layouts, skeletons, and retry screens support it. No usability sessions have been run yet."
              equitable="Text colours follow a 4.5:1 contrast rule and tap targets were enlarged to 24px. Lighthouse scored accessibility 96 on the live home page, but flagged six low-contrast elements and one label that leaves out its visible text, so those are still open."
              enjoyable="A soft pink, cream, and sand palette with a display font gives the app the salon’s look, and the loyalty stamps give visits a reward. There is no client feedback on it yet."
              useful="Clients can book, pay, reschedule, and track visits, and the owner can edit services, prices, and content without a developer."
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
                    The app is live, but no booking, traffic, or time-saved data
                    is available to report yet. What it gives the salon is one
                    system for booking, payment, loyalty, and managing its own
                    content.
                  </p>
                </NoteWindow>
                <NoteWindow title="What changed along the way" level={4}>
                  <p className={noteText}>
                    Admin confirmation of bookings was replaced by confirmation
                    through payment, a hero text change was reverted, and a
                    script font that never showed on the site was removed. What
                    I learned from the project is still to add.
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

export default Clawholics;
