import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  LuAccessibility,
  LuChartColumn,
  LuCircleCheck,
  LuExternalLink,
  LuFileStack,
  LuFileText,
  LuFlag,
  LuFolderOpen,
  LuFolderTree,
  LuGauge,
  LuImage,
  LuImages,
  LuInfo,
  LuLayers,
  LuLayoutDashboard,
  LuListChecks,
  LuMonitorSmartphone,
  LuPencilRuler,
  LuRoute,
  LuSearch,
  LuSquare,
  LuStickyNote,
  LuTimer,
  LuUserRound,
} from "react-icons/lu";
import { ProjectLayout } from "../components/ProjectLayout";
import { WindowBar } from "../components/WindowBar";
import { useScrollRows } from "../hooks/use-scroll-rows";

const IMAGES = "/assets/images/projects/ojtconnect";

const facts = [
  { label: "Role", value: "Product Designer and Frontend Developer" },
  { label: "Duration", value: "February 2026 to present (ongoing)" },
  { label: "Works on", value: "All screen sizes" },
  {
    label: "Tools",
    value: "Figma, React, TypeScript, Tailwind CSS, Claude Code",
  },
];

// The case study in four parts, each opened by a divider. The table of contents and the dividers
// both read this list; every id matches a section further down.
type Topic = { id: string; label: string };
type Part = {
  number: number;
  id: string;
  title: string;
  icon: ReactNode;
  topics: Topic[];
};

const introduction: { title: string; topics: Topic[] } = {
  title: "Introduction",
  topics: [
    { id: "overview", label: "Project overview" },
    { id: "problem-and-goal", label: "The problem and the goal" },
    { id: "my-role", label: "My role" },
  ],
};

const parts: Part[] = [
  {
    number: 1,
    id: "understanding-the-user",
    title: "Understanding the user",
    icon: <LuSearch size={24} />,
    topics: [
      { id: "user-research", label: "User research" },
      { id: "persona", label: "Personas" },
      { id: "problem-statement", label: "Problem statements" },
      { id: "user-journey", label: "User journey maps" },
    ],
  },
  {
    number: 2,
    id: "starting-the-design",
    title: "Starting the design",
    icon: <LuPencilRuler size={24} />,
    topics: [
      { id: "digital-wireframes", label: "Digital wireframes" },
      { id: "low-fidelity-prototype", label: "Low-fidelity prototype" },
    ],
  },
  {
    number: 3,
    id: "refining-the-design",
    title: "Refining the design",
    icon: <LuLayers size={24} />,
    topics: [
      { id: "mockups", label: "Mockups" },
      { id: "high-fidelity-designs", label: "High-fidelity designs" },
      { id: "accessibility", label: "Accessibility" },
    ],
  },
  {
    number: 4,
    id: "going-forward",
    title: "Going forward",
    icon: <LuFlag size={24} />,
    topics: [
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "Designing and building the intern, employer, and university portals and the public landing site",
  "Wireframing and prototyping in Figma",
  "Building a shared component library and design system",
  "Mobile-first card and table views",
  "Onboarding flows",
  "Accessibility and performance improvements",
  "Quality assurance testing across portals",
];

const painPoints = [
  {
    icon: <LuFileStack size={20} />,
    title: "Scattered paperwork",
    problem:
      "Institutions must keep agreements, time logs, evaluations, and certificates for the Commission on Higher Education.",
    response:
      "The designs centralize these documents and track them in one place.",
  },
  {
    icon: <LuChartColumn size={20} />,
    title: "Hard-to-get data",
    problem:
      "Institutions need placement, conversion, and tracer data before, during, and after internships.",
    response: "Tiered analytics dashboards and spreadsheet export answer this.",
  },
  {
    icon: <LuTimer size={20} />,
    title: "Manual hour checks",
    problem: "Employers verify daily hours and give feedback by hand.",
    response:
      "Time-record review and feedback forms are built into the employer portal.",
  },
  {
    icon: <LuGauge size={20} />,
    title: "Hitting limits",
    problem: "Students have capped applications and resume versions.",
    response:
      "Warning banners, a profile score, and a resume builder guide them before they hit a limit.",
  },
];

const journey = [
  {
    phase: "Before",
    title: "Matching and applying",
    rows: [
      [
        "Actions",
        "Builds a profile and resume, searches Find OJT, and applies to positions.",
      ],
      [
        "Needs",
        "Find a fitting placement and know how many applications are left.",
      ],
      [
        "Challenge",
        "Applications are capped per term and profile quality is unclear.",
      ],
      [
        "Design response",
        "Filters, limit banners, a profile score, and a resume builder.",
      ],
    ],
  },
  {
    phase: "During",
    title: "Training and monitoring",
    rows: [
      [
        "Actions",
        "Logs daily hours and tasks, chats with the employer, and uploads required documents.",
      ],
      [
        "Needs",
        "See hours completed versus remaining and the internship status.",
      ],
      ["Challenge", "Hours are recorded by hand and progress is hard to see."],
      [
        "Design response",
        "Hours tracking with progress and status (On Track, At Risk, Delayed).",
      ],
    ],
  },
  {
    phase: "After",
    title: "Evaluation and outcome",
    rows: [
      [
        "Actions",
        "Views employer feedback, the certificate of completion, and the final status.",
      ],
      ["Needs", "Proof of completion and clear feedback."],
      [
        "Challenge",
        "Feedback and certificates are scattered across emails and paper.",
      ],
      [
        "Design response",
        "An employer feedback page, plus completion and hire status.",
      ],
    ],
  },
];

const flowSteps = [
  { title: "Log in", detail: "Student email and password" },
  { title: "Dashboard", detail: "Quick stats and notifications" },
  { title: "Find OJT", detail: "Search and filter positions" },
  { title: "View position", detail: "Details and company info" },
  { title: "Apply", detail: "Checks the plan limit" },
  { title: "My Applications", detail: "Track status" },
  { title: "Log hours", detail: "Daily time record" },
  { title: "Employer feedback", detail: "Evaluation and certificate" },
];

const mockups = [
  {
    portal: "Intern dashboard",
    versions: [
      {
        label: "Original design",
        image: "intern_dashboard_original.png",
        alt: "Original intern dashboard: a top bar, a bookmarks button, a search field, and a grid of position cards",
      },
      {
        label: "Redesign",
        image: "intern_dashboard_redesign.png",
        alt: "Redesigned intern dashboard with a sidebar menu, a welcome message, a plan banner, an application limit notice, and company analytics",
      },
    ],
    change:
      "From a top bar and a page of position cards to a dashboard with a sidebar menu, the application limit notice, and company analytics.",
  },
  {
    portal: "Employer dashboard",
    versions: [
      {
        label: "Original design",
        image: "employer_dashboard_original.png",
        alt: "Original employer dashboard with an interviews today list, a listings overview table, and recommended profiles",
      },
      {
        label: "Redesign",
        image: "employer_dashboard_redesign.png",
        alt: "Redesigned employer dashboard with a sidebar menu, key counts for applicants and positions, a calendar, and active job postings",
      },
    ],
    change:
      "From an interviews list and a listings table to a dashboard with a sidebar menu, key counts, a calendar, active job postings, and upcoming schedules.",
  },
  {
    portal: "University dashboard",
    versions: [
      {
        label: "Original design",
        image: "institution_dashboard_original.png",
        alt: "Original university dashboard with a registered students chart, student statistics, and placement benchmark cards",
      },
      {
        label: "Redesign",
        image: "institution_dashboard_redesign.png",
        alt: "Redesigned university dashboard with a sidebar menu, an institutional overview of enrollment, placement, and conversion numbers, and a semester filter",
      },
    ],
    change:
      "From charts and benchmark cards on one page to an institutional overview with a sidebar menu, key placement and conversion numbers, a semester filter, and export.",
  },
];

// The high-fidelity screens, one row per portal. Each row slides sideways as the page scrolls, and
// the rows take turns: left, right, left.
const screenRows = [
  {
    portal: "Intern portal",
    direction: "left" as const,
    screens: [
      {
        file: "1.webp",
        title: "Dashboard",
        alt: "Intern dashboard with a welcome message, an application limit notice, a company filter, and company analytics",
      },
      {
        file: "2.webp",
        title: "Find OJT",
        alt: "Find OJT screen with a position's details open and recommended positions below",
      },
      {
        file: "3.webp",
        title: "My Applications",
        alt: "My Applications screen with application status counts, an application limit notice, and a table of applications",
      },
      {
        file: "4.webp",
        title: "My Resume",
        alt: "My Resume screen with a step-by-step resume builder and a resume preview",
      },
      {
        file: "5.webp",
        title: "Profile Score",
        alt: "Profile Score screen with an overall score, a score breakdown, and recommendations",
      },
    ],
  },
  {
    portal: "Employer portal",
    direction: "right" as const,
    screens: [
      {
        file: "6.webp",
        title: "Dashboard",
        alt: "Employer dashboard with key counts, a calendar, and active job postings",
      },
      {
        file: "7.webp",
        title: "Create Position",
        alt: "Create Position screen with a step-by-step form and the job details",
      },
      {
        file: "8.webp",
        title: "Applicant Pool",
        alt: "Applicant Pool screen with counts, an interview notice, filters, and a table of applicants",
      },
      {
        file: "9.webp",
        title: "Employed Talents",
        alt: "Employed Talents screen with intern counts, a feedback reminder, filters, and a table of interns",
      },
      {
        file: "10.webp",
        title: "Feedback History",
        alt: "Feedback History screen with feedback counts, a confirmation notice, filters, and a table of interns",
      },
    ],
  },
  {
    portal: "University portal",
    direction: "left" as const,
    screens: [
      {
        file: "11.webp",
        title: "Dashboard",
        alt: "University dashboard with an institutional overview of enrollment, placement, and conversion numbers",
      },
      {
        file: "12.webp",
        title: "Interns",
        alt: "Interns screen with counts, an on-track notice, import and export buttons, filters, and a table of interns",
      },
      {
        file: "13.webp",
        title: "OJT Monitoring",
        alt: "OJT Monitoring screen with progress counts, weekly average hours, and hours completion",
      },
      {
        file: "14.webp",
        title: "Employer Feedback",
        alt: "Employer Feedback screen with rating counts, average rating by category, and common feedback themes",
      },
      {
        file: "15.webp",
        title: "Benchmarks",
        alt: "Benchmarks screen comparing the institution's placement rate with regional and national averages",
      },
    ],
  },
];

// How a row moves with --p (0 to 1, set by useScrollRows): left shifts it from its start toward its
// end, right does the opposite. With reduced motion the row stays put and can be scrolled by hand.
const rowMotion = {
  left: "[transform:translateX(calc(var(--shift,0px)*var(--p,0)*-1))]",
  right: "[transform:translateX(calc(var(--shift,0px)*(var(--p,0)_-_1)))]",
};

const accessibility = [
  {
    icon: <LuMonitorSmartphone size={20} />,
    title: "Mobile-first layouts",
    description:
      "Table data becomes cards and filters open in bottom drawers, so every portal works on small screens.",
  },
  {
    icon: <LuAccessibility size={20} />,
    title: "Landing-site accessibility pass",
    description:
      "Semantic structure, labelled controls, and image alternatives for assistive technology.",
  },
  {
    icon: <LuCircleCheck size={20} />,
    title: "Clear feedback in every state",
    description:
      "Loading, empty, and error messages explain what happened and what to do next.",
  },
];

const nextSteps = [
  "Close the remaining gaps in the internship process: contracts, training plans, exit interviews, and grievance flows.",
  "Build the next release of analytics: advanced employer analytics and benchmark data, such as graduate tracer studies for accreditation.",
  "Run formal interviews and usability studies with each user group and feed the results back into the designs.",
];

const noteText =
  "hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80";
const cardText = "text-left text-sm leading-6 text-cream/80";

// Ruled lines like the notes on the About page; every line of text is 24px tall so it sits on a rule.
const ruled =
  "bg-[repeating-linear-gradient(transparent_0_23px,rgb(245_234_214/0.08)_23px_24px)] bg-[position:0_1.25rem]";

// An invisible target 48px above a heading, so a contents link lands with the heading in view (the
// site's section jump scrolls 48px past the target's top). The element holding it must be `relative`.
const Anchor = ({ id }: { id: string }) => (
  <span id={id} aria-hidden className="absolute -top-12 left-0" />
);

// An app window: a title bar (an optional heading), the content, and an optional status bar.
const Window = ({
  icon,
  title,
  level,
  status,
  footer,
  children,
}: {
  icon: ReactNode;
  title: string;
  level?: 2 | 3 | 4 | 5;
  status?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}) => (
  <div className="glass-card overflow-hidden text-left">
    <WindowBar icon={icon} title={title} headingLevel={level} status={status} />
    <div className="relative">{children}</div>
    {footer && (
      <div className="border-t border-line/40 px-6 py-2 text-xs text-cream/60">
        {footer}
      </div>
    )}
  </div>
);

// A window holding a note on ruled paper.
const NoteWindow = ({
  title,
  level,
  children,
}: {
  title: string;
  level?: 2 | 3 | 4 | 5;
  children: ReactNode;
}) => (
  <div className="glass-card overflow-hidden bg-cream/[0.07] text-left">
    <WindowBar
      icon={<LuStickyNote size={16} />}
      title={title}
      headingLevel={level}
    />
    <div className={`space-y-6 px-6 pt-6 pb-6 ${ruled}`}>{children}</div>
  </div>
);

// The heading of a section, drawn as the address bar of a file explorer: the part it belongs to,
// then its own title.
const Section = ({
  id,
  level = 3,
  title,
  trail,
  children,
}: {
  id: string;
  level?: 2 | 3;
  title: string;
  trail?: string;
  children: ReactNode;
}) => {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <section className="relative space-y-6">
      <Anchor id={id} />
      <div className="flex flex-wrap items-center gap-x-2 rounded-full border border-line bg-cream/[0.07] px-6 py-2 text-left">
        <LuFolderOpen size={16} aria-hidden className="shrink-0 text-accent" />
        {trail && (
          <span aria-hidden className="text-xs text-cream/60">
            {trail} ›
          </span>
        )}
        <Heading className="font-semibold text-base">{title}</Heading>
      </div>
      {children}
    </section>
  );
};

// The folder that opens each part: its number and title, with the files it holds as links.
const PartDivider = ({ part }: { part: Part }) => (
  <div className="glass-card relative overflow-hidden text-left">
    <Anchor id={part.id} />
    <WindowBar
      icon={<LuFolderOpen size={16} />}
      title={`Part ${part.number} of ${parts.length}`}
    />
    <div className="space-y-6 p-6">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
        >
          {part.icon}
        </span>
        <h2 className="font-semibold text-2xl sm:text-3xl">{part.title}</h2>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {part.topics.map((topic) => (
          <li key={topic.id}>
            <Link
              to={`#${topic.id}`}
              className="flex h-full flex-col items-center gap-1 rounded-xl p-3 text-center text-xs text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <LuFileText size={28} aria-hidden className="text-accent" />
              {topic.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="border-t border-line/40 px-6 py-2 text-xs text-cream/60">
      {part.topics.length} items
    </div>
  </div>
);

const TreeLink = ({ id, children }: { id: string; children: ReactNode }) => (
  <Link
    to={`#${id}`}
    className="flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-cream/80 transition-colors hover:bg-cream/10 hover:text-accent"
  >
    {children}
  </Link>
);

const OjtConnect = () => {
  const rowsRef = useScrollRows<HTMLDivElement>();

  return (
    <ProjectLayout>
      <div className="space-y-15 pt-6">
        <Section id="overview" level={2} title="Project Overview">
          <img
            src={`${IMAGES}/ojtconnect.png`}
            width={1600}
            height={900}
            alt="OJT Connect home page shown on a laptop and a phone, with the headline “A connection that leads to a foundation of experiences”, an internship search bar, and a list of internships"
            className="w-full"
          />
          <NoteWindow title="About this project">
            <p className={noteText}>
              OJT Connect is a web platform that connects interns, employers,
              universities and colleges, and government stakeholders such as the
              Commission on Higher Education around on-the-job training. Interns
              find placements and log their hours, employers review applicants,
              and institutions monitor their students by plan.
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
          <div className="flex justify-center">
            <a
              href="https://ojtconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 white-button"
            >
              Visit OJT Connect
              <LuExternalLink size={16} aria-hidden />
            </a>
          </div>
        </Section>

        <nav aria-label="Contents">
          <Window
            icon={<LuFolderTree size={16} />}
            title="Contents"
            level={2}
            footer={`${parts.length + 1} folders`}
          >
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="space-y-1">
                <p className="flex items-center gap-2 px-2 py-1 text-sm font-medium">
                  <LuFolderOpen size={16} aria-hidden className="text-accent" />
                  {introduction.title}
                </p>
                <ul className="ml-3 space-y-1 border-l border-line/40 pl-3">
                  {introduction.topics.map((topic) => (
                    <li key={topic.id}>
                      <TreeLink id={topic.id}>
                        <LuFileText size={14} aria-hidden />
                        {topic.label}
                      </TreeLink>
                    </li>
                  ))}
                </ul>
              </div>
              {parts.map((part) => (
                <div key={part.id} className="space-y-1">
                  <TreeLink id={part.id}>
                    <LuFolderOpen
                      size={16}
                      aria-hidden
                      className="text-accent"
                    />
                    <span className="font-medium text-cream">
                      {part.number}. {part.title}
                    </span>
                  </TreeLink>
                  <ul className="ml-3 space-y-1 border-l border-line/40 pl-3">
                    {part.topics.map((topic) => (
                      <li key={topic.id}>
                        <TreeLink id={topic.id}>
                          <LuFileText size={14} aria-hidden />
                          {topic.label}
                        </TreeLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Window>
        </nav>

        <Section
          id="problem-and-goal"
          level={2}
          title="The Problem and the Goal"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <NoteWindow title="The problem" level={3}>
              <p className={noteText}>
                Internship records required by the Commission on Higher
                Education (agreements, time logs, evaluations, and certificates)
                and placement data are handled by hand across emails, paper, and
                spreadsheets. Interns, employers, and institutions have no
                single source they can trust.
              </p>
            </NoteWindow>
            <NoteWindow title="The goal" level={3}>
              <p className={noteText}>
                Give interns, employers, and institutions one clear, tiered
                platform to match, apply, monitor, evaluate, and report on
                on-the-job training placements, on all screen sizes.
              </p>
            </NoteWindow>
          </div>
        </Section>

        <Section id="my-role" level={2} title="My Role">
          <NoteWindow title="My role">
            <p className={noteText}>
              I worked on this project as a product designer and frontend
              developer. Designing a screen and then building it myself, instead
              of handing it off, is what made this project my gateway to
              becoming a design engineer. My responsibilities were:
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

        <PartDivider part={parts[0]} />

        <Section
          id="user-research"
          title="User Research"
          trail={parts[0].title}
        >
          <NoteWindow title="Research notes">
            <p className={noteText}>
              Research for this project was requirements-based. I worked from
              written user stories for each user group and checked them against
              the Commission on Higher Education’s internship policy (Memorandum
              Order No. 23, series of 2009) and its draft policy for virtual and
              hybrid internships. Accreditation expectations, such as graduate
              tracer studies, and the data institutions need before, during, and
              after internships also shaped the scope. Direct user interviews
              and usability studies are still to come.
            </p>
          </NoteWindow>
          <h4 className="text-left font-medium text-lg">Pain points</h4>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {painPoints.map((point) => (
              <Window
                key={point.title}
                icon={point.icon}
                title={point.title}
                level={5}
              >
                <div className="space-y-3 p-6">
                  <p className={cardText}>{point.problem}</p>
                  <p className={cardText}>
                    <strong className="font-medium text-cream">
                      Design response:{" "}
                    </strong>
                    {point.response}
                  </p>
                </div>
              </Window>
            ))}
          </div>
        </Section>

        <Section id="persona" title="Persona" trail={parts[0].title}>
          <Window icon={<LuUserRound size={16} />} title="Role-based persona">
            <Anchor id="problem-statement" />
            <div className="space-y-3 p-6">
              <div className="flex items-center gap-3 border-b pb-3">
                <span
                  aria-hidden
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                >
                  <LuUserRound size={24} />
                </span>
                <h4 className="font-medium text-lg">
                  On-the-Job Training Coordinator
                </h4>
              </div>
              <p className="text-xs text-cream/60">Problem statement</p>
              <p className={cardText}>
                The On-the-Job Training Coordinator is a university staff member
                who manages internships for many students. They need to track
                students’ hours, documents, and employer feedback in one place,
                because the Commission on Higher Education and accreditors
                require documented, auditable internships.
              </p>
            </div>
          </Window>
        </Section>

        <Section id="user-journey" title="User Journey" trail={parts[0].title}>
          <NoteWindow title="Journey notes">
            <p className={noteText}>
              The journey of an intern across three phases: before, during, and
              after the internship. I built it from the documented requirements,
              not from interviews.
            </p>
          </NoteWindow>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {journey.map((phase) => (
              <Window
                key={phase.phase}
                icon={<LuRoute size={16} />}
                title={`${phase.phase}: ${phase.title}`}
                level={4}
              >
                <dl className="space-y-3 p-6 text-sm leading-6">
                  {phase.rows.map(([term, detail]) => (
                    <div key={term}>
                      <dt className="text-xs text-cream/60">{term}</dt>
                      <dd className="text-cream/80">{detail}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
            ))}
          </div>
        </Section>

        <PartDivider part={parts[1]} />

        <Section
          id="digital-wireframes"
          title="Digital Wireframes"
          trail={parts[1].title}
        >
          <NoteWindow title="Wireframe notes">
            <p className={noteText}>
              This is the whole set of digital wireframes for the intern portal,
              laid out in one Figma file. Every screen is drawn for the Starter,
              Plus, and Pro plans, so I could compare how each plan looks side
              by side.
            </p>
          </NoteWindow>
          <Window
            icon={<LuImage size={16} />}
            title="digital_wireframe.png"
            footer="All the digital wireframes of the intern portal in Figma."
          >
            <img
              src={`${IMAGES}/digital_wireframe.png`}
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              alt="Screenshot of the Figma file holding all the digital wireframes of the intern portal, with every screen laid out for the Starter, Plus, and Pro plans"
              className="w-full"
            />
          </Window>
        </Section>

        <Section
          id="low-fidelity-prototype"
          title="Low-Fidelity Prototype"
          trail={parts[1].title}
        >
          <NoteWindow title="Prototype notes">
            <p className={noteText}>
              The flow of an intern: log in, find a position, apply within the
              plan limit, track the application, then log hours and view
              employer feedback. I built it from the student portal screens in
              Figma.
            </p>
          </NoteWindow>
          <Window
            icon={<LuRoute size={16} />}
            title="Intern flow"
            level={4}
            footer={
              <>
                <strong className="font-medium text-cream">
                  Limit reached:{" "}
                </strong>
                a warning banner explains the cap.
              </>
            }
          >
            <ol className="divide-y divide-line/40">
              {flowSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-center gap-3 px-6 py-3"
                >
                  <span
                    aria-hidden
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                  >
                    {index + 1}
                  </span>
                  <p className="min-w-0 flex-1 text-sm">
                    <span className="font-medium">{step.title}</span>
                    <span className="text-cream/70"> · {step.detail}</span>
                  </p>
                </li>
              ))}
            </ol>
          </Window>
        </Section>

        <PartDivider part={parts[2]} />

        <Section id="mockups" title="Mockups" trail={parts[2].title}>
          <NoteWindow title="Mockup notes">
            <p className={noteText}>
              Each portal began as a simple first mockup and was then redesigned
              into a dashboard with a sidebar menu and the key numbers for that
              group. Here are the intern, employer, and university dashboards,
              from the original design to the redesign.
            </p>
          </NoteWindow>
          {mockups.map((mockup) => (
            <Window
              key={mockup.portal}
              icon={<LuLayoutDashboard size={16} />}
              title={mockup.portal}
              level={4}
              footer={mockup.change}
            >
              <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                {mockup.versions.map((version) => (
                  <figure key={version.label} className="space-y-3">
                    <img
                      src={`${IMAGES}/${version.image}`}
                      width={1600}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      alt={version.alt}
                      className="aspect-video w-full rounded-2xl border object-cover object-top"
                    />
                    <figcaption className="text-xs text-cream/60">
                      {version.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Window>
          ))}
        </Section>

        <Section
          id="high-fidelity-designs"
          title="High-Fidelity Designs"
          trail={parts[2].title}
        >
          <NoteWindow title="Design notes">
            <p className={noteText}>
              Fifteen of the final screens, five from each portal. Scroll the
              page and the rows slide in turn, one way and then the other.
            </p>
          </NoteWindow>
          <div ref={rowsRef} className="space-y-6 [--p:0]">
            {screenRows.map((row) => (
              <Window
                key={row.portal}
                icon={<LuImages size={16} />}
                title={row.portal}
                level={4}
                status={`${row.screens.length} screens`}
              >
                <div
                  data-row
                  className="overflow-hidden motion-reduce:overflow-x-auto"
                >
                  <ul
                    className={`flex w-max gap-3 p-6 will-change-transform motion-reduce:[transform:none] ${rowMotion[row.direction]}`}
                  >
                    {row.screens.map((screen) => (
                      <li
                        key={screen.file}
                        className="w-72 shrink-0 sm:w-[26rem]"
                      >
                        <figure className="space-y-3">
                          <img
                            src={`${IMAGES}/mockup/${screen.file}`}
                            width={1280}
                            height={720}
                            loading="lazy"
                            decoding="async"
                            alt={screen.alt}
                            className="aspect-video w-full rounded-2xl border object-cover object-top"
                          />
                          <figcaption className="text-left text-xs text-cream/60">
                            {screen.title}
                          </figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                </div>
              </Window>
            ))}
          </div>
          <p className="text-xs text-cream/60">All screens use sample data.</p>
        </Section>

        <Section
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

        <PartDivider part={parts[3]} />

        <Section id="takeaways" title="Takeaways" trail={parts[3].title}>
          <NoteWindow title="Takeaways">
            <p className={noteText}>
              Designing for four very different groups taught me to build shared
              patterns (components, cards, empty states) so each portal feels
              consistent, while still respecting each group’s permissions and
              goals. Testing on real screen sizes early caught problems that
              desktop-only checks missed.
            </p>
          </NoteWindow>
        </Section>

        <Section id="next-steps" title="Next Steps" trail={parts[3].title}>
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
    </ProjectLayout>
  );
};

export default OjtConnect;
