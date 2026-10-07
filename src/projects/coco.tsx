import type { ReactNode } from "react";
import {
  LuBookOpen,
  LuCircleCheck,
  LuCircleX,
  LuClipboardList,
  LuDatabase,
  LuExternalLink,
  LuImage,
  LuInfo,
  LuLayers,
  LuLayoutDashboard,
  LuListChecks,
  LuLock,
  LuPalette,
  LuRoute,
  LuShieldCheck,
  LuSquare,
  LuTriangleAlert,
  LuUserRound,
  LuWifiOff,
} from "react-icons/lu";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { ProjectLayout } from "../components/ProjectLayout";
import {
  ImagePlaceholder,
  NoteWindow,
  Section,
  Window,
  cardText,
  ProcessStrip,
  ScopeAndStandards,
  UserStories,
  UxQualities,
  noteText,
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/coco";
const PROTOTYPE_URL = "https://tutu-spout-96435415.figma.site";

const facts = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Duration", value: "August 2026" },
  { label: "Platform", value: "Android, mobile-first and offline-capable" },
  {
    label: "Users",
    value: "Administrator, Cooperative Officer, and Cooperative Member",
  },
  {
    label: "Context",
    value: "A product development study for Philippine cooperatives",
  },
  {
    label: "Status",
    value: "Figma prototype, usability testing still to come",
  },
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
    title: "Understanding the user",
    peek: `${IMAGES}/dfd-officer.webp`,
    topics: [
      { id: "user-research", label: "User research" },
      { id: "persona", label: "Personas" },
      { id: "user-stories", label: "User stories" },
      { id: "problem-statement", label: "Problem statements" },
      { id: "user-journey", label: "User journey maps" },
    ],
  },
  {
    number: 2,
    title: "Starting the design",
    peek: `${IMAGES}/context.webp`,
    topics: [
      { id: "requirements", label: "Requirements and scope" },
      { id: "context-and-data-flow", label: "Context and data flow" },
      { id: "use-cases", label: "Use cases" },
      { id: "activity-diagrams", label: "Activity diagrams" },
      { id: "data-and-architecture", label: "Data and architecture" },
    ],
  },
  {
    number: 3,
    title: "Refining the design",
    peek: `${IMAGES}/architecture.webp`,
    topics: [
      { id: "design-system", label: "Design system" },
      { id: "screens", label: "Screens" },
      { id: "design-decisions", label: "Design decisions" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/erd.webp`,
    topics: [
      { id: "ux-qualities", label: "Good UX check" },
      { id: "testing", label: "Testing" },
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "Requirements from interviews and observation",
  "User roles and permissions",
  "Flows, use cases, and activity diagrams",
  "Data model and screen map",
  "The design system",
  "Screens for three roles",
  "A Figma prototype",
];

const painPoints = [
  {
    icon: <LuClipboardList size={20} />,
    title: "Slow, error-prone records",
    problem:
      "Officers work out share capital balances and year-end statements by hand, which causes errors and delays. Physical ledgers can also be damaged and lost.",
  },
  {
    icon: <LuShieldCheck size={20} />,
    title: "Heavy compliance",
    problem:
      "Annual statements, the performance report, and tax reports take weeks to prepare, and a missed deadline risks penalties.",
  },
  {
    icon: <LuUserRound size={20} />,
    title: "No view for members",
    problem:
      "Members cannot check their balance, contributions, or refund without visiting the cooperative office.",
  },
  {
    icon: <LuListChecks size={20} />,
    title: "Collections are hard to track",
    problem:
      "There are no reminders or aging schedules, so it is hard to see who still owes what.",
  },
  {
    icon: <LuWifiOff size={20} />,
    title: "Tools need internet",
    problem:
      "Existing software is cloud-based and subscription-heavy, which does not work for cooperatives with weak connections.",
  },
];

const terms = [
  {
    term: "Cooperative",
    meaning:
      "A registered association of people with a common bond who join together to meet their social and economic needs, governed by R.A. 9520.",
  },
  {
    term: "CDA",
    meaning:
      "The Cooperative Development Authority, the government agency that registers and regulates cooperatives.",
  },
  {
    term: "Share capital",
    meaning:
      "The total amount members contribute as equity. It is refundable when a member withdraws, under the cooperative's policies.",
  },
  {
    term: "Patronage refund",
    meaning:
      "A share of net surplus paid to members by how much they used the cooperative. At least 30% of net surplus must go to refunds.",
  },
  {
    term: "SUS",
    meaning:
      "The System Usability Scale, a ten-item questionnaire. A score above 68 is above average.",
  },
];

const roles = [
  {
    role: "Administrator",
    who: "The cooperative chairperson or general manager",
    needs:
      "Full access: user management, all financial reports, the audit trail, and system settings.",
  },
  {
    role: "Cooperative Officer",
    who: "The treasurer, bookkeeper, or membership clerk",
    needs:
      "The daily work: registering members, recording share capital and fees, and posting transactions.",
  },
  {
    role: "Cooperative Member",
    who: "Any active member",
    needs:
      "A read-only personal portal for share capital, contributions, investments, fees, and patronage refund.",
  },
];

const journey = [
  {
    today: "A member visits the office with a contribution or payment.",
    coco: "The officer finds the member in a searchable registry.",
  },
  {
    today: "The officer writes the transaction in a columnar book.",
    coco: "The officer records the contribution, and a double-entry journal posts by itself.",
  },
  {
    today: "A handwritten receipt is issued.",
    coco: "An official receipt is generated for printing.",
  },
  {
    today: "The member's ledger card is updated by hand.",
    coco: "The balance updates at once, and the member can see it in the app.",
  },
  {
    today:
      "At year end, the treasurer compiles every entry into the mandatory statements: two to three weeks of work.",
    coco: "The four statements are generated from the ledger for any period.",
  },
];

const requirements = [
  {
    category: "Input",
    items: [
      "Login credentials",
      "Member details: name, type, contact, address, beneficiary, and join date",
      "Contribution amount, date, and payment reference",
      "Fee type, amount, and collection date",
      "Journal lines and investment account details",
    ],
  },
  {
    category: "Process",
    items: [
      "Sign-in and permissions by role",
      "Share capital balance worked out live from the history",
      "A double-entry journal posted for every transaction",
      "Statutory funds from net surplus: Reserve at least 10%, Education and Training at least 5%, Community Development at least 3%",
      "Patronage refund by each member's share of total patronage",
      "The four CDA statements for any period",
    ],
  },
  {
    category: "Output",
    items: [
      "A dashboard for each role",
      "A member registry with search and filters",
      "The four statements as PDF",
      "The annual performance report in the CDA format",
      "Official collection receipts",
      "An audit trail with time and user",
    ],
  },
  {
    category: "Control",
    items: [
      "No access beyond a user's role",
      "A separate interface and menu for each role",
      "Approved financial entries are locked",
      "Every create, change, and delete is logged",
    ],
  },
  {
    category: "Performance",
    items: [
      "Every core function works offline",
      "Reliable local transactions",
      "Android 8.0 and above",
      "Any single query or posting within three seconds",
      "Pending data syncs within sixty seconds of reconnecting",
    ],
  },
];

const inScope = [
  "Membership registration and lifecycle",
  "Share capital tracking per member",
  "Investment and savings recording",
  "Fee collection",
  "Accounting on the CDA chart of accounts",
  "Statutory fund and patronage refund computation",
  "CDA compliance reports",
  "A member portal for self-service",
];

const outOfScope = [
  "Online payment processing",
  "Loan management and amortization",
  "Links to banks or government platforms",
  "Managing a federation of cooperatives",
];

type Figure = {
  file: string;
  width: number;
  height: number;
  title: string;
  alt: string;
};

const contextFigure: Figure = {
  file: "context.webp",
  width: 1600,
  height: 1130,
  title: "Context level diagram",
  alt: "Context level diagram: the Administrator, Cooperative Officer, and Cooperative Member exchange data with one central system, CoCo: Coop Companion",
};

const dataFlows: (Figure & { summary: string })[] = [
  {
    file: "dfd-admin.webp",
    width: 1600,
    height: 1365,
    title: "Administrator",
    alt: "Data flow diagram for the Administrator: login, manage users, generate reports, and view the audit trail, with their data stores",
    summary:
      "Login, manage users, generate reports, view the audit trail.",
  },
  {
    file: "dfd-officer.webp",
    width: 1600,
    height: 1459,
    title: "Cooperative Officer",
    alt: "Data flow diagram for the Cooperative Officer: login, register member, record share capital, record fee collection, and post financial transaction, with their data stores",
    summary:
      "Login, register a member, record share capital, record a fee, post a transaction.",
  },
  {
    file: "dfd-member.webp",
    width: 1600,
    height: 1177,
    title: "Cooperative Member",
    alt: "Data flow diagram for the Cooperative Member: login, view personal records, and update profile, with their data stores",
    summary: "Login, view personal records, update the profile.",
  },
];

const useCaseFigures: (Figure & { summary: string })[] = [
  {
    file: "usecase-admin.webp",
    width: 1600,
    height: 1365,
    title: "Administrator",
    alt: "Use case diagram for the Administrator: login, manage users, generate a financial statement, generate the CDA annual report, and view the audit trail",
    summary: "Users, statements, the CDA report, and the audit trail.",
  },
  {
    file: "usecase-officer.webp",
    width: 1600,
    height: 1459,
    title: "Cooperative Officer",
    alt: "Use case diagram for the Cooperative Officer: login, register a new member, record a share capital contribution, and record a fee collection",
    summary: "Registering members and recording contributions and fees.",
  },
  {
    file: "usecase-member.webp",
    width: 1600,
    height: 1223,
    title: "Cooperative Member",
    alt: "Use case diagram for the Cooperative Member: login, view personal financial records, and update the profile",
    summary: "Viewing personal records and updating the profile.",
  },
];

const useCases = [
  {
    name: "Login",
    actor: "Any user",
    detail: "Wrong credentials show an error and return to sign-in.",
  },
  {
    name: "Register a new member",
    actor: "Officer",
    detail:
      "Missing or invalid fields are highlighted. A share capital account starts at zero.",
  },
  {
    name: "Record a share capital contribution",
    actor: "Officer",
    detail:
      "Zero or negative amounts show an error. The balance and the ledger update together.",
  },
  {
    name: "Record a fee collection",
    actor: "Officer",
    detail:
      "An amount above what is owed asks for confirmation. A receipt is generated.",
  },
  {
    name: "Generate a financial statement",
    actor: "Administrator",
    detail:
      "The statement and period are chosen, and a PDF preview opens. A period with no data shows a notice.",
  },
  {
    name: "View personal financial records",
    actor: "Member",
    detail:
      "The member dashboard opens first, then tabs for the detailed records.",
  },
];

const activityFigures: (Figure & { summary: string })[] = [
  {
    file: "activity-login.webp",
    width: 1600,
    height: 1694,
    title: "User login",
    alt: "Activity diagram for user login: the user enters credentials, the system checks them, shows an error and returns on failure, or opens the dashboard for the user's role",
    summary: "Checks the credentials, then opens the dashboard for the role.",
  },
  {
    file: "activity-registration.webp",
    width: 1600,
    height: 1694,
    title: "Member registration",
    alt: "Activity diagram for member registration: select register, fill the form, submit, check the fields, highlight invalid fields and retry, or save the record, start the share capital account at zero, and confirm",
    summary: "Validates the form, saves the member, and starts a zero account.",
  },
  {
    file: "activity-contribution.webp",
    width: 1600,
    height: 1836,
    title: "Share capital contribution",
    alt: "Activity diagram for recording a share capital contribution: select the member, enter the details, validate, post a debit to cash and a credit to share capital, update the balance, and confirm",
    summary: "Posts the journal, updates the balance, and confirms.",
  },
  {
    file: "activity-statement.webp",
    width: 1600,
    height: 1813,
    title: "Financial statement",
    alt: "Activity diagram for generating a financial statement: choose the type and period, compile the general ledger, work out balances, apply the CDA classifications, render the statement, and export a PDF",
    summary: "Compiles the ledger, applies CDA classes, and exports a PDF.",
  },
];

const erdFigure: Figure = {
  file: "erd.webp",
  width: 1600,
  height: 853,
  title: "Entity relationship diagram",
  alt: "Entity relationship diagram: a Member has a share capital account, share capital transactions, investment accounts, fee collections, a patronage refund, and a user account; a journal entry has general ledger entries; a user account generates audit log entries",
};

const architectureFigure: Figure = {
  file: "architecture.webp",
  width: 1600,
  height: 1270,
  title: "System architecture",
  alt: "Three-tier architecture: a presentation tier with Admin, Officer, and Member interfaces; an application tier with authentication, share capital, statement, patronage, and report services; and a data tier with a local store, optional sync, and optional remote backup",
};

const tiers = [
  {
    title: "Presentation",
    detail:
      "Three interfaces, one per role, built for Android. They work offline and show when the device is not connected and when changes are waiting to sync.",
  },
  {
    title: "Application",
    detail:
      "Services for sign-in, share capital, statements, patronage refunds, and compliance reports.",
  },
  {
    title: "Data",
    detail:
      "A local store keeps every record safely on the device. Optional sync can copy it to a backup when a connection returns.",
  },
];

const swatches = [
  { name: "Background", value: "#13131f" },
  { name: "Accent", value: "#00CFFF" },
];

const typefaces = [
  { name: "Cabinet Grotesk", use: "Display headings" },
  { name: "Satoshi", use: "Body text" },
];

const screens = [
  {
    title: "Login",
    detail:
      "The wordmark and tagline, a username, a password with a show and hide toggle, and a Forgot password link. It works offline.",
  },
  {
    title: "Administrator dashboard",
    detail:
      "Four cards (active members, total share capital, period net surplus, next compliance deadline), quick actions, and a banner when a CDA deadline is within 30 days.",
  },
  {
    title: "Officer dashboard",
    detail:
      "Cards for pending contributions, overdue fees, and today's transactions, and the five latest postings.",
  },
  {
    title: "Member registry",
    detail:
      "A searchable list with status badges. Each row shows the name, the type, and the share capital balance. A floating button adds a member.",
  },
  {
    title: "New member form",
    detail:
      "Personal information and membership details in two sections. Required fields carry an asterisk, and Submit stays disabled until they are filled.",
  },
  {
    title: "Member profile",
    detail:
      "Name, status, join date, and contact at the top, then tabs for Share Capital, Investments and Savings, Fee Obligations, and Profile.",
  },
  {
    title: "Contribution form",
    detail:
      "The member's name and balance up front for confirmation, then amount, date, and payment reference, and a success screen that offers another entry.",
  },
  {
    title: "Fee collection",
    detail:
      "Outstanding fees with due dates and overdue badges. Tapping one opens the entry form and, after confirming, a receipt.",
  },
  {
    title: "Statement generator",
    detail:
      "Four statement cards, date pickers for the period, progress while compiling, and a PDF preview to save, share, or email.",
  },
  {
    title: "Member dashboard",
    detail:
      "A summary card of balance, fees owed, and refund status, with tabs for Share Capital, Savings, Fees, and Profile. Everything is read-only.",
  },
];

const decisions = [
  {
    icon: <LuLayoutDashboard size={20} />,
    title: "One interface per role",
    description:
      "Each role has its own dashboard and menu, so no one sees functions they cannot use.",
  },
  {
    icon: <LuWifiOff size={20} />,
    title: "Offline made visible",
    description:
      "Every core task works without a connection, and the app shows when it is offline and when changes are waiting to sync.",
  },
  {
    icon: <LuTriangleAlert size={20} />,
    title: "Errors that guide",
    description:
      "Invalid fields are highlighted, zero amounts and overpayments get a clear message, and Submit stays off until required fields are done.",
  },
  {
    icon: <LuLock size={20} />,
    title: "Trust and accountability",
    description:
      "Approved entries are locked, every change is logged with its user and time, and members can look but not edit.",
  },
  {
    icon: <LuBookOpen size={20} />,
    title: "Deadlines in view",
    description:
      "The Administrator dashboard shows the next compliance deadline and warns when it is within 30 days.",
  },
  {
    icon: <LuLock size={20} />,
    title: "Safe, quick sign-in",
    description:
      "Passwords are stored as hashes, and the Member portal can offer fingerprint or face sign-in so members can return quickly.",
  },
];

const testing = [
  {
    title: "Functional testing",
    detail:
      "Every requirement has at least one test case, including bad input, zero-amount entries, and offline use. The testers are one Administrator, two Officers, and three Members from a pilot cooperative.",
  },
  {
    title: "Offline resilience",
    detail:
      "A dedicated run in airplane mode checks that registration, share capital, fee collection, and posting all finish, and that data survives a restart.",
  },
  {
    title: "Usability testing",
    detail:
      "Officers and members rate the app with the System Usability Scale. Results are not in yet.",
  },
];

const nextSteps = [
  "Finish the System Usability Scale evaluation with officers and members, and publish the results.",
  "Test the Figma prototype with the pilot cooperative and refine the flows.",
  "Run an accessibility check with a screen reader, large text, and contrast before the usability tests with officers and members, and fix what it finds.",
  "Add the screens to this case study.",
];

const FigureWindow = ({
  figure,
  level = 4,
  footer,
}: {
  figure: Figure;
  level?: 3 | 4 | 5;
  footer?: ReactNode;
}) => (
  <Window
    icon={<LuImage size={16} />}
    title={figure.title}
    level={level}
    footer={footer}
  >
    <img
      src={`${IMAGES}/${figure.file}`}
      width={figure.width}
      height={figure.height}
      loading="lazy"
      decoding="async"
      alt={figure.alt}
      className="w-full"
    />
  </Window>
);

const Coco = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <div className="flex justify-center rounded-xl md:rounded-2xl border bg-white p-9">
          <img
            src={`${IMAGES}/cover.png`}
            width={1600}
            height={1600}
            alt="CoCo: Coop Companion logo: three people held in an open hand inside a green circle, above the name CoCo and the words Coop Companion"
            className="w-full max-w-sm"
          />
        </div>
        <NoteWindow title="About this project">
          <p className={noteText}>
            CoCo: Coop Companion is a mobile-first, offline-capable app for
            Philippine cooperatives. It brings membership, share capital,
            investments, fee collection, accounting, and CDA and BIR compliance
            reports into one Android app, with a separate interface for each
            of three roles: Administrator, Officer, and Member.
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
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 white-button"
          >
            View the prototype
            <LuExternalLink size={16} aria-hidden />
          </a>
        </div>
      </Section>

      <Section id="problem-and-goal" level={2} title="The Problem and the Goal">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <NoteWindow title="The problem" level={3}>
            <p className={noteText}>
              As of 2022, over 20,000 cooperatives were registered in the
              Philippines, and many small ones still keep paper books. Financial management is
              the biggest problem category for cooperatives, at 34.45% of all
              problems found in one review of Philippine studies (Padua and
              Cuevas, 2020). Existing software needs the internet, which
              rural cooperatives often lack.
            </p>
          </NoteWindow>
          <NoteWindow title="The goal" level={3}>
            <p className={noteText}>
              Design one mobile app that handles members, share capital,
              fees, and accounting offline, produces the CDA and BIR reports,
              and lets every member check their own records, without a
              visit to the office.
            </p>
          </NoteWindow>
        </div>
      </Section>

      <ScopeAndStandards
        rows={[
          {
            label: "In scope",
            text: "Membership, share capital, investments and savings, fees, accounting, statutory funds and refunds, CDA reports, and a member portal.",
          },
          {
            label: "Out of scope",
            text: "Online payments, loans, links to banks or government platforms, and managing a federation of cooperatives.",
          },
          {
            label: "Performance",
            text: "Android 8.0 and above, every core function offline, any query or posting within three seconds, and sync within sixty seconds of reconnecting.",
          },
          {
            label: "Standards",
            text: "The CDA chart of accounts and report formats, role-based access, and an audit trail.",
          },
        ]}
      />

      <Section id="my-role" level={2} title="My Role">
        <NoteWindow title="My role">
          <p className={noteText}>
            I worked on this project as the UX/UI designer, from the
            requirements to the screens and the prototype. My responsibilities
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
        empathize={{
          status: "Done",
          text: "Structured interviews with a cooperative treasurer and a board secretary, plus observation of the office. One cooperative, not a large survey.",
        }}
        define={{
          status: "Done",
          text: "Personas, problem statements, journeys, and requirements and scope.",
        }}
        ideate={{
          status: "Partly",
          text: "Context and data-flow diagrams, use cases, and activity diagrams worked out how the three roles use the system.",
        }}
        prototype={{
          status: "Done",
          text: "A design system, screens for three roles, and a Figma prototype.",
        }}
        test={{
          status: "Planned",
          text: "Three test layers: functional, offline, and usability with the System Usability Scale. Results are not in yet.",
        }}
      />

      <FolderGroup>
        <FolderSection
          label={`${parts[0].number}. ${parts[0].title}`}
          count={parts[0].topics.length}
          peek={parts[0].peek}
        >
          <div className="space-y-15">
            <Section
              id="user-research"
              title="User Research"
              trail={parts[0].title}
            >
              <NoteWindow title="Research notes">
                <p className={noteText}>
                  Requirements came from two methods: structured interviews
                  with a cooperative treasurer and a board secretary, and
                  observation of the office during working hours, both done with
                  the respondents’ permission. The interviews showed no way to
                  send collection reminders, no way for members to check their
                  balances, a risk of losing paper ledgers, and difficulty preparing the CDA
                  reports from handwritten records. They also showed that cloud-only software
                  is not practical for members with patchy internet. These are
                  findings from one cooperative, not a large survey.
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
                    <p className={`p-6 ${cardText}`}>{point.problem}</p>
                  </Window>
                ))}
              </div>
              <Window
                icon={<LuBookOpen size={16} />}
                title="Key terms"
                level={4}
                footer={`${terms.length} terms`}
              >
                <dl className="divide-y divide-line/40 text-sm">
                  {terms.map((item) => (
                    <div
                      key={item.term}
                      className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[9rem_1fr] sm:gap-3"
                    >
                      <dt className="font-medium">{item.term}</dt>
                      <dd className="text-cream/70">{item.meaning}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
            </Section>

            <Section id="persona" title="Persona" trail={parts[0].title}>
              <NoteWindow title="Persona notes">
                <p className={noteText}>
                  There are three kinds of user, and each gets its own
                  interface. They are roles, not individual people, because the
                  research was done with officers of one cooperative.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {roles.map((item) => (
                  <Window
                    key={item.role}
                    icon={<LuUserRound size={16} />}
                    title={item.role}
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
                        <p className="min-w-0 flex-1 text-left text-sm font-medium">
                          {item.who}
                        </p>
                      </div>
                      <p className="text-xs text-cream/60">What they need</p>
                      <p className={cardText}>{item.needs}</p>
                    </div>
                  </Window>
                ))}
              </div>
              <Window
                icon={<LuInfo size={16} />}
                title="Problem statement"
                level={4}
              >
                <div id="problem-statement" className="p-6">
                  <p className={cardText}>
                    Cooperative officers, administrators, and members need one
                    mobile system that works without internet, because paper
                    records and cloud-only tools make the books slow to close,
                    put deadlines at risk, and leave members unable to see their
                    own balance.
                  </p>
                </div>
              </Window>
            </Section>

            <UserStories
              trail={parts[0].title}
              stories={[
                {
                  who: "Administrator",
                  story:
                    "As a cooperative administrator, I want to manage users and see every financial report and the audit trail, so that the books stay accurate and CDA deadlines are met.",
                },
                {
                  who: "Cooperative Officer",
                  story:
                    "As a cooperative officer, I want to register members and record contributions, fees, and postings in one place, so that I stop working out balances by hand and the books close faster.",
                },
                {
                  who: "Cooperative Member",
                  story:
                    "As a cooperative member, I want to check my share capital, contributions, and refund on my phone, so that I do not have to visit the office to see my balance.",
                },
              ]}
            />

            <Section
              id="user-journey"
              title="User Journey"
              trail={parts[0].title}
            >
              <NoteWindow title="Journey notes">
                <p className={noteText}>
                  This journey compares one contribution, from the member’s
                  visit to the year-end reports, as it works today and with
                  CoCo.
                </p>
              </NoteWindow>
              <Window
                icon={<LuRoute size={16} />}
                title="From a contribution to the year-end reports"
                level={4}
                footer={`${journey.length} stages`}
              >
                <ol className="divide-y divide-line/40">
                  {journey.map((step, index) => (
                    <li
                      key={step.today}
                      className="flex items-start gap-3 px-6 py-3"
                    >
                      <span
                        aria-hidden
                        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                      >
                        {index + 1}
                      </span>
                      <div className="min-w-0 flex-1 space-y-1 text-left text-sm">
                        <p className="text-cream/70">
                          <span className="text-cream/60">Today: </span>
                          {step.today}
                        </p>
                        <p className="font-medium">
                          <span className="font-normal text-cream/60">
                            With CoCo:{" "}
                          </span>
                          {step.coco}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Window>
            </Section>
          </div>
        </FolderSection>

        <FolderSection
          label={`${parts[1].number}. ${parts[1].title}`}
          count={parts[1].topics.length}
          peek={parts[1].peek}
        >
          <div className="space-y-15">
            <Section
              id="requirements"
              title="Requirements and Scope"
              trail={parts[1].title}
            >
              <NoteWindow title="Requirements notes">
                <p className={noteText}>
                  The findings were sorted into five groups of requirements.
                  These are the ones that shaped the design most.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {requirements.map((group) => (
                  <Window
                    key={group.category}
                    icon={<LuClipboardList size={16} />}
                    title={`${group.category} requirements`}
                    level={4}
                    footer={`${group.items.length} items`}
                  >
                    <ul className="divide-y divide-line/40">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 px-6 py-3"
                        >
                          <LuCircleCheck
                            size={16}
                            aria-hidden
                            className="mt-1 shrink-0 text-accent"
                          />
                          <p className={cardText}>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </Window>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuCircleCheck size={16} />}
                  title="In scope"
                  level={4}
                  footer={`${inScope.length} areas`}
                >
                  <ul className="divide-y divide-line/40">
                    {inScope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 px-6 py-3"
                      >
                        <LuCircleCheck
                          size={16}
                          aria-hidden
                          className="mt-1 shrink-0 text-accent"
                        />
                        <p className={cardText}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </Window>
                <Window
                  icon={<LuCircleX size={16} />}
                  title="Out of scope"
                  level={4}
                  footer={`${outOfScope.length} areas`}
                >
                  <ul className="divide-y divide-line/40">
                    {outOfScope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 px-6 py-3"
                      >
                        <LuCircleX
                          size={16}
                          aria-hidden
                          className="mt-1 shrink-0 text-cream/60"
                        />
                        <p className={cardText}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </Window>
              </div>
            </Section>

            <Section
              id="context-and-data-flow"
              title="Context and Data Flow"
              trail={parts[1].title}
            >
              <NoteWindow title="Flow notes">
                <p className={noteText}>
                  Before drawing screens, I mapped what goes in and out of the
                  system for each role. The Administrator gives settings and
                  accounts and gets statements and audit logs. The Officer gives
                  member data and transactions and gets receipts. The Member
                  gives a login and profile updates and gets personal records.
                </p>
              </NoteWindow>
              <FigureWindow
                figure={contextFigure}
                footer="One system, three kinds of user."
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {dataFlows.map((figure) => (
                  <FigureWindow
                    key={figure.file}
                    figure={{
                      ...figure,
                      title: `Data flow: ${figure.title}`,
                    }}
                    footer={figure.summary}
                  />
                ))}
              </div>
            </Section>

            <Section
              id="use-cases"
              title="Use Cases"
              trail={parts[1].title}
            >
              <NoteWindow title="Use case notes">
                <p className={noteText}>
                  Six use cases cover the core work. Each was written with its
                  steps and what happens when something goes wrong, so the
                  screens could be designed for errors as well as the happy
                  path.
                </p>
              </NoteWindow>
              <Window
                icon={<LuListChecks size={16} />}
                title="Six key use cases"
                level={4}
                footer={`${useCases.length} use cases`}
              >
                <ol className="divide-y divide-line/40">
                  {useCases.map((item, index) => (
                    <li
                      key={item.name}
                      className="flex items-start gap-3 px-6 py-3"
                    >
                      <span
                        aria-hidden
                        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                      >
                        {index + 1}
                      </span>
                      <p className="min-w-0 flex-1 text-left text-sm">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-cream/60"> · {item.actor}</span>
                        <span className="block text-cream/70">
                          {item.detail}
                        </span>
                      </p>
                    </li>
                  ))}
                </ol>
              </Window>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {useCaseFigures.map((figure) => (
                  <FigureWindow
                    key={figure.file}
                    figure={{
                      ...figure,
                      title: `Use cases: ${figure.title}`,
                    }}
                    footer={figure.summary}
                  />
                ))}
              </div>
            </Section>

            <Section
              id="activity-diagrams"
              title="Activity Diagrams"
              trail={parts[1].title}
            >
              <NoteWindow title="Activity notes">
                <p className={noteText}>
                  Four activity diagrams show the key tasks step by step,
                  including the decision points where a screen has to react,
                  such as invalid fields or a failed sign-in.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {activityFigures.map((figure) => (
                  <FigureWindow
                    key={figure.file}
                    figure={figure}
                    footer={figure.summary}
                  />
                ))}
              </div>
            </Section>

            <Section
              id="data-and-architecture"
              title="Data and Architecture"
              trail={parts[1].title}
            >
              <NoteWindow title="Structure notes">
                <p className={noteText}>
                  Everything the screens show comes from a small set of
                  records: members, share capital accounts and transactions,
                  investments, fees, ledger entries, patronage refunds, user
                  accounts, and an audit log. The audit log is written by the
                  system, and users cannot edit it.
                </p>
              </NoteWindow>
              <FigureWindow
                figure={erdFigure}
                footer="The members, accounts, ledger, and audit records, and how they connect."
              />
              <FigureWindow
                figure={architectureFigure}
                footer="Three tiers: the role-based interfaces, the services behind them, and local storage."
              />
              <Window
                icon={<LuLayers size={16} />}
                title="The three tiers"
                level={4}
                footer={`${tiers.length} tiers`}
              >
                <dl className="divide-y divide-line/40 text-sm">
                  {tiers.map((tier) => (
                    <div
                      key={tier.title}
                      className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[9rem_1fr] sm:gap-3"
                    >
                      <dt className="font-medium">{tier.title}</dt>
                      <dd className="text-cream/70">{tier.detail}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
            </Section>
          </div>
        </FolderSection>

        <FolderSection
          label={`${parts[2].number}. ${parts[2].title}`}
          count={parts[2].topics.length}
          peek={parts[2].peek}
        >
          <div className="space-y-15">
            <Section
              id="design-system"
              title="Design System"
              trail={parts[2].title}
            >
              <NoteWindow title="Design notes">
                <p className={noteText}>
                  Every screen uses one design system: a dark background with a
                  cyan accent for primary actions, a friendly display face for
                  headings, and a clear body face for text.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuPalette size={16} />}
                  title="Colors"
                  level={4}
                  footer={`${swatches.length} colors`}
                >
                  <ul className="divide-y divide-line/40">
                    {swatches.map((swatch) => (
                      <li
                        key={swatch.name}
                        className="flex items-center gap-3 px-6 py-3"
                      >
                        <span
                          aria-hidden
                          className="size-8 shrink-0 rounded-full border"
                          style={{ backgroundColor: swatch.value }}
                        />
                        <p className="min-w-0 flex-1 text-left text-sm">
                          <span className="font-medium">{swatch.name}</span>
                          <span className="text-cream/60">
                            {" "}
                            · {swatch.value}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </Window>
                <Window
                  icon={<LuBookOpen size={16} />}
                  title="Typefaces"
                  level={4}
                  footer={`${typefaces.length} typefaces`}
                >
                  <dl className="divide-y divide-line/40 text-sm">
                    {typefaces.map((face) => (
                      <div key={face.name} className="space-y-1 px-6 py-3">
                        <dt className="font-medium">{face.name}</dt>
                        <dd className="text-cream/70">{face.use}</dd>
                      </div>
                    ))}
                  </dl>
                </Window>
              </div>
            </Section>

            <Section id="screens" title="Screens" trail={parts[2].title}>
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  Ten key screens cover the three roles. The prototype link at
                  the top of this page opens the Figma version.
                </p>
              </NoteWindow>
              <ImagePlaceholder>
                The key screens: login, the three dashboards, the member
                registry, and the contribution form
              </ImagePlaceholder>
              <Window
                icon={<LuListChecks size={16} />}
                title="Key screens"
                level={4}
                footer={`${screens.length} screens`}
              >
                <ol className="divide-y divide-line/40">
                  {screens.map((screen, index) => (
                    <li
                      key={screen.title}
                      className="flex items-start gap-3 px-6 py-3"
                    >
                      <span
                        aria-hidden
                        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                      >
                        {index + 1}
                      </span>
                      <p className="min-w-0 flex-1 text-left text-sm">
                        <span className="font-medium">{screen.title}</span>
                        <span className="block text-cream/70">
                          {screen.detail}
                        </span>
                      </p>
                    </li>
                  ))}
                </ol>
              </Window>
            </Section>

            <Section
              id="design-decisions"
              title="Design Decisions"
              trail={parts[2].title}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
          </div>
        </FolderSection>

        <FolderSection
          label={`${parts[3].number}. ${parts[3].title}`}
          count={parts[3].topics.length}
          peek={parts[3].peek}
        >
          <div className="space-y-15">
            <UxQualities
              trail={parts[3].title}
              usable="Each role gets its own interface and menu. Zero amounts and overpayments get a clear message, and Submit stays off until required fields are filled. The contribution form shows the member’s name and balance first so the officer can confirm. Usability scores are still to come."
              equitable="Every core task works offline for cooperatives with weak connections, and the app shows when changes are waiting to sync. Members can check their balance without visiting the office."
              enjoyable="The evidence here is small: a success screen that offers another entry, a deadline banner, and a receipt after each fee."
              useful="It replaces handwritten ledgers and two to three weeks of year-end compiling with live balances, an automatic double-entry journal, and the four statements generated for any period."
            />

            <Section id="testing" title="Testing" trail={parts[3].title}>
              <NoteWindow title="Testing notes">
                <p className={noteText}>
                  Testing is planned in three layers. The usability results
                  are still to come, so there is no score to report yet.
                </p>
              </NoteWindow>
              <Window
                icon={<LuDatabase size={16} />}
                title="Test plan"
                level={4}
                footer={`${testing.length} layers`}
              >
                <dl className="divide-y divide-line/40 text-sm">
                  {testing.map((item) => (
                    <div
                      key={item.title}
                      className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[10rem_1fr] sm:gap-3"
                    >
                      <dt className="font-medium">{item.title}</dt>
                      <dd className="text-cream/70">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
            </Section>

            <Section id="takeaways" title="Takeaways" trail={parts[3].title}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <NoteWindow title="Impact" level={4}>
                  <p className={noteText}>
                    A design prototype with no usage data yet: a complete set of
                    flows, diagrams, and screens for three roles, ready to be
                    tested with a pilot cooperative.
                  </p>
                </NoteWindow>
                <NoteWindow title="What I learned" level={4}>
                  <p className={noteText}>
                    Offline has to be seen, not just supported: people need to
                    know whether their work is saved. Designing for three roles
                    meant giving each one only what it needs.
                  </p>
                </NoteWindow>
              </div>
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
        </FolderSection>
      </FolderGroup>
    </div>
  </ProjectLayout>
);

export default Coco;
