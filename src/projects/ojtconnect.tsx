import type { ReactNode } from "react";
import {
  LuAccessibility,
  LuChartColumn,
  LuCircleCheck,
  LuExternalLink,
  LuFileStack,
  LuGauge,
  LuImage,
  LuImages,
  LuInfo,
  LuLayoutDashboard,
  LuListChecks,
  LuMonitorSmartphone,
  LuRoute,
  LuSquare,
  LuTimer,
  LuUserRound,
  LuGraduationCap,
  LuShieldAlert,
  LuUsers,
  LuBuilding2,
  LuLandmark,
  LuLayers,
  LuMap,
  LuEyeOff,
} from "react-icons/lu";
import { ProjectLayout } from "../components/ProjectLayout";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import {
  Anchor,
  ImagePlaceholder,
  NoteWindow,
  Section,
  Window,
  cardText,
  noteText,
} from "../components/CaseStudy";
import { useScrollRows } from "../hooks/use-scroll-rows";

const IMAGES = "/assets/images/projects/ojtconnect";

const facts = [
  { label: "Role", value: "Product Designer and Frontend Developer" },
  { label: "Duration", value: "February 2026 to present (ongoing)" },
  {
    label: "Portals",
    value:
      "On-the-Job Trainee, Host Training Establishment, Higher Education Institution, and Government Regulator",
  },
  { label: "Release", value: "Version 2.0, June 2026" },
  { label: "Works on", value: "All screen sizes" },
  {
    label: "Tools",
    value: "Figma, React, TypeScript, Tailwind CSS, Claude Code",
  },
];

// The numbers the live site shows in its hero and its internship list.
const liveStats = [
  { value: "502+", label: "Universities" },
  { value: "2,226+", label: "Interns" },
  { value: "108", label: "Internship positions" },
  { value: "23", label: "Job categories" },
];

// The case study after the introduction, in four parts. Each is a folder on the page that opens to
// show its sections; `peek` is the picture that sticks out of the folder.
type Topic = { id: string; label: string };
type Part = {
  number: number;
  id: string;
  title: string;
  peek: string;
  topics: Topic[];
};

const parts: Part[] = [
  {
    number: 1,
    id: "understanding-the-users",
    title: "Understanding the users",
    peek: `${IMAGES}/intern_dashboard_original.png`,
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
    peek: `${IMAGES}/digital_wireframe.png`,
    topics: [
      { id: "digital-wireframes", label: "Digital wireframes" },
      { id: "low-fidelity-prototype", label: "Low-fidelity prototype" },
    ],
  },
  {
    number: 3,
    id: "refining-the-design",
    title: "Refining the design",
    peek: `${IMAGES}/intern_dashboard_redesign.png`,
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
    peek: `${IMAGES}/ojtconnect.png`,
    topics: [
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "Designing and building the On-the-Job Trainee, Host Training Establishment, Higher Education Institution, and Government Regulator portals, and the public website",
  "Wireframing and prototyping in Figma",
  "Building a shared component library and design system",
  "Mobile-first card and table views",
  "Onboarding flows",
  "Accessibility and performance improvements",
  "Quality assurance testing across portals",
];

// The four portals and what each one offers. The features come from the functional requirements
// (FRD v2.0, the Government Portal metrics framework) and, for the trainee and host sides, from
// the feature sections of the live site.
const portals = [
  {
    id: "trainee",
    icon: <LuUserRound size={16} />,
    title: "On-the-Job Trainee portal",
    audience:
      "Students looking for an internship, applying, and following their training through to the evaluation.",
    features: [
      {
        title: "Find OJT",
        detail:
          "Search by keyword, filter by industry, location, and company, save favorites, and apply within the plan limit.",
      },
      {
        title: "Application tracking",
        detail:
          "See every application move through pending, reviewed, interview, accepted, or rejected, and withdraw a pending one.",
      },
      {
        title: "Resume builder",
        detail:
          "A guided builder with PDF download. Versions grow with the plan: 1, 3, or 5.",
      },
      {
        title: "OJT hours tracking",
        detail:
          "Log daily hours and see hours completed against remaining, with On Track, At Risk, and Delayed status (Plus and Pro).",
      },
      {
        title: "Profile score",
        detail:
          "A score with a breakdown, recommendations, and a rank among peers at the same school (Pro).",
      },
      {
        title: "Feedback review",
        detail:
          "Read the host’s ratings and comments: a final evaluation, or mid-term and final on Pro.",
      },
    ],
  },
  {
    id: "hte",
    icon: <LuBuilding2 size={16} />,
    title: "Host Training Establishment portal",
    audience:
      "Companies, local and international, that post positions, hire, and evaluate interns.",
    features: [
      {
        title: "Position management",
        detail:
          "Create, edit, duplicate, and close positions, and set them public or school-specific.",
      },
      {
        title: "Applicant pool",
        detail:
          "Filter by school, program, position, and status, then shortlist, schedule interviews, send offers, and compare applicants.",
      },
      {
        title: "Employed talents",
        detail:
          "Follow each intern’s hours, supervisor, and progress, and mark them completed.",
      },
      {
        title: "Feedback submissions",
        detail:
          "A star rating, four category ratings, strengths, areas to improve, and a recommendation, saved as a draft first.",
      },
      {
        title: "Evaluations by plan",
        detail:
          "One final form, or a mid-term at 50% of hours plus a final, depending on the school’s plan.",
      },
      {
        title: "Team roles and analytics",
        detail:
          "Admin, Recruiter, and Supervisor roles, and company performance against the platform average.",
      },
    ],
  },
  {
    id: "hei",
    icon: <LuGraduationCap size={16} />,
    title: "Higher Education Institution portal",
    audience:
      "Universities and colleges running their OJT programs, on Starter, Plus, or Pro.",
    features: [
      {
        title: "Dashboard",
        detail:
          "Registered students over 12 months, students applied and hired, and the top positions and companies, with an application funnel from Plus.",
      },
      {
        title: "Student management",
        detail:
          "Search and filter students, bulk upload by CSV (Plus and Pro), and export lists.",
      },
      {
        title: "OJT monitoring",
        detail:
          "Hours completed against required, progress bars, and On Track, At Risk, and Delayed alerts (Plus and Pro).",
      },
      {
        title: "Employer feedback",
        detail:
          "From a simple table on Starter to side-by-side mid-term and final comparisons on Pro.",
      },
      {
        title: "Benchmarks",
        detail:
          "Placement rate and time to placement against regional schools, plus a leaderboard (Pro).",
      },
      {
        title: "Agreements and documents",
        detail:
          "Manage MOUs and MOAs, check students’ documents, issue certificates of appreciation, and export CSV for reporting.",
      },
    ],
  },
  {
    id: "regulator",
    icon: <LuLandmark size={16} />,
    title: "Government Regulator portal",
    audience:
      "Agencies that oversee on-the-job training and need the national picture without individual student data.",
    features: [
      {
        title: "National oversight",
        detail:
          "One dashboard that brings student outcomes, school performance, and employer hiring together.",
      },
      {
        title: "Student and school summary",
        detail:
          "Active partner schools, registered students, applicants, interviews, placements, and OJT completions.",
      },
      {
        title: "Jobs and company summary",
        detail:
          "Active companies and posts, applicants awaiting review, interviews, offers, and filled positions.",
      },
      {
        title: "Measures that compare",
        detail:
          "Participation, conversion, drop-off, placement rate, response time, days to placement, and completion rate.",
      },
      {
        title: "Charts and drill-downs",
        detail:
          "Placement funnel, trends, school benchmark, supply and demand gap, regional map, and time to placement.",
      },
      {
        title: "Filters and privacy",
        detail:
          "Filter by period, region, school, program, industry, and company. Every figure shows its change and benchmark, and individual student data stays protected.",
      },
    ],
  },
];

// What each Higher Education Institution plan includes (BRD v1.0, FRD v2.0).
const tiers = [
  {
    name: "Starter",
    who: "Small colleges, or one department",
    price: "₱20,000/term + ₱300 per student",
    rows: [
      ["Students", "Up to 500"],
      ["Applications", "3 per term"],
      ["Resume versions", "1"],
      ["Evaluation", "1 final"],
    ],
    includes:
      "Verified institution badge, opportunities hub, contract capture, basic analytics, and the daily time log and supervisor feedback CHED asks for.",
  },
  {
    name: "Plus",
    who: "Medium schools, or several departments",
    price: "₱40,000/term + ₱450 per student",
    rows: [
      ["Students", "Up to 1,000"],
      ["Applications", "5 per term"],
      ["Resume versions", "3"],
      ["Evaluation", "1 detailed final"],
    ],
    includes:
      "Everything in Starter, plus OJT monitoring and documentation, real-time funnel metrics, bulk student upload with help from the team, and advanced analytics.",
  },
  {
    name: "Pro",
    who: "Large schools with full OJT programs",
    price: "₱70,000/term + ₱600 per student",
    rows: [
      ["Students", "Up to 1,500"],
      ["Applications", "10 per term"],
      ["Resume versions", "5"],
      ["Evaluation", "Mid-term and final"],
    ],
    includes:
      "Everything in Plus, plus partner company management, profile score ranking, a certified completion repository, monthly feedback reports, and benchmarking with a leaderboard.",
  },
];

const painPoints = [
  {
    group: "Trainees",
    icon: <LuShieldAlert size={20} />,
    title: "Fake or unclear listings",
    problem:
      "Students can’t easily tell a legitimate internship from a scam or a fake recruiter.",
    response: "Verified companies only, and the platform says so up front.",
  },
  {
    group: "Trainees",
    icon: <LuGauge size={20} />,
    title: "Hitting limits",
    problem: "Students have capped applications and resume versions.",
    response:
      "Warning banners, a profile score, and a resume builder guide them before they hit a limit.",
  },
  {
    group: "Host companies",
    icon: <LuUsers size={20} />,
    title: "Sorting applicants by hand",
    problem:
      "A stack of applications favors long résumés and hides capable fresh graduates.",
    response:
      "Recommended applicants, filters, and side-by-side comparison in the applicant pool.",
  },
  {
    group: "Host companies",
    icon: <LuTimer size={20} />,
    title: "Manual hour checks",
    problem: "Companies verify daily hours and give feedback by hand.",
    response:
      "Time-record review and feedback forms are built into the host portal.",
  },
  {
    group: "Institutions",
    icon: <LuFileStack size={20} />,
    title: "Scattered paperwork",
    problem:
      "Institutions must keep agreements, time logs, evaluations, and certificates for the Commission on Higher Education.",
    response:
      "The designs centralize these documents and track them in one place.",
  },
  {
    group: "Institutions",
    icon: <LuChartColumn size={20} />,
    title: "Hard-to-get data",
    problem:
      "Institutions need placement, conversion, and tracer data before, during, and after internships.",
    response:
      "Tiered analytics dashboards, employer feedback reports, and CSV export answer this.",
  },
  {
    group: "Regulators",
    icon: <LuMap size={20} />,
    title: "No national view",
    problem:
      "Outcomes sit inside separate schools and companies, so no one sees placement across the whole pipeline.",
    response:
      "A national oversight dashboard with regional filters and benchmarks.",
  },
  {
    group: "Regulators",
    icon: <LuEyeOff size={20} />,
    title: "Protecting student data",
    problem: "Oversight needs outcomes, not individual student records.",
    response:
      "Headline counts and rates only, so individual student data stays protected.",
  },
];

const personas = [
  {
    icon: <LuUserRound size={24} />,
    name: "On-the-Job Trainee",
    statement:
      "The trainee is a student who needs a legitimate placement that fits their course and skills, and one place to follow every application, hour, and evaluation, because scam listings and scattered spreadsheets make it hard to know where they stand.",
  },
  {
    icon: <LuBuilding2 size={24} />,
    name: "Host Training Establishment Supervisor",
    statement:
      "The supervisor is a company staff member who needs to post verified roles, shortlist applicants quickly, and follow each trainee’s hours and performance, because sorting a stack of applications and chasing updates slows hiring and hides who is doing well.",
  },
  {
    icon: <LuGraduationCap size={24} />,
    name: "OJT Coordinator",
    statement:
      "The coordinator is a university staff member who manages internships for many students. They need to track students’ hours, documents, and employer feedback in one place, because the Commission on Higher Education and accreditors require documented, auditable internships.",
  },
  {
    icon: <LuLandmark size={24} />,
    name: "Government Regulator Analyst",
    statement:
      "The analyst is a government staff member who oversees on-the-job training. They need to see placement, completion, and employer demand across schools and regions without seeing individual students, because oversight depends on trustworthy numbers and protected data.",
  },
];

type Phase = {
  phase: string;
  title: string;
  rows: [string, string][];
};

const journeys: { portal: string; phases: Phase[] }[] = [
  {
    portal: "Trainee",
    phases: [
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
            "Logs daily hours and tasks, chats with the host, and uploads required documents.",
          ],
          [
            "Needs",
            "See hours completed versus remaining and the internship status.",
          ],
          [
            "Challenge",
            "Hours are recorded by hand and progress is hard to see.",
          ],
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
            "Views the host’s feedback, the certificate of completion, and the final status.",
          ],
          ["Needs", "Proof of completion and clear feedback."],
          [
            "Challenge",
            "Feedback and certificates are scattered across emails and paper.",
          ],
          [
            "Design response",
            "A feedback page, plus completion and hire status.",
          ],
        ],
      },
    ],
  },
  {
    portal: "Host Training Establishment",
    phases: [
      {
        phase: "Before",
        title: "Posting and hiring",
        rows: [
          [
            "Actions",
            "Creates positions, reviews the applicant pool, and shortlists and interviews.",
          ],
          ["Needs", "Reach capable trainees and shortlist quickly."],
          [
            "Challenge",
            "Long résumés win attention and sorting by hand is slow.",
          ],
          [
            "Design response",
            "A step-by-step Create Position form and an applicant pool with filters.",
          ],
        ],
      },
      {
        phase: "During",
        title: "Training and tracking",
        rows: [
          [
            "Actions",
            "Verifies each trainee’s daily hours and tasks, and flags those who go missing.",
          ],
          ["Needs", "See hours and daily work without chasing updates."],
          [
            "Challenge",
            "Hours and status updates arrive by spreadsheet and message.",
          ],
          [
            "Design response",
            "An Employed Talents list with counts and a feedback reminder.",
          ],
        ],
      },
      {
        phase: "After",
        title: "Evaluation and outcome",
        rows: [
          [
            "Actions",
            "Rates the trainee, uploads the certificate, and marks them completed or hired.",
          ],
          ["Needs", "A formal way to evaluate and keep a record."],
          [
            "Challenge",
            "Feedback gets lost in files and never reaches the school.",
          ],
          [
            "Design response",
            "A Feedback History, shared with the trainee’s school.",
          ],
        ],
      },
    ],
  },
  {
    portal: "Higher Education Institution",
    phases: [
      {
        phase: "Before",
        title: "Setting up",
        rows: [
          [
            "Actions",
            "Picks a plan, signs agreements with companies, and uploads students in bulk.",
          ],
          ["Needs", "Bring a whole class onto the platform quickly."],
          ["Challenge", "Registering hundreds of students one by one."],
          [
            "Design response",
            "Bulk upload, agreement tracking, and plan limits shown up front.",
          ],
        ],
      },
      {
        phase: "During",
        title: "Monitoring",
        rows: [
          ["Actions", "Follows each student’s hours, status, and documents."],
          ["Needs", "Know every student is on track without a site visit."],
          [
            "Challenge",
            "Check-ins happen in group chats and by visiting host companies.",
          ],
          [
            "Design response",
            "OJT monitoring with alerts for at-risk students.",
          ],
        ],
      },
      {
        phase: "After",
        title: "Reporting",
        rows: [
          [
            "Actions",
            "Reads company feedback, issues certificates, and compares results with other schools.",
          ],
          [
            "Needs",
            "Evidence of outcomes for the school and for accreditation.",
          ],
          ["Challenge", "Outcome data is scattered or missing."],
          ["Design response", "Feedback reports, benchmarks, and CSV export."],
        ],
      },
    ],
  },
  {
    portal: "Government Regulator",
    phases: [
      {
        phase: "Before",
        title: "Setting the scope",
        rows: [
          [
            "Actions",
            "Picks a reporting period and filters by region, school, program, and industry.",
          ],
          ["Needs", "Look at exactly the group and period being reviewed."],
          [
            "Challenge",
            "Data from many schools and companies is hard to line up.",
          ],
          [
            "Design response",
            "Portal-wide filters, applied to every card and chart.",
          ],
        ],
      },
      {
        phase: "During",
        title: "Monitoring the pipeline",
        rows: [
          [
            "Actions",
            "Reads the headline cards, the placement funnel, and company response times.",
          ],
          ["Needs", "See where students and applicants drop off."],
          ["Challenge", "Early and late losses look the same in raw counts."],
          [
            "Design response",
            "Funnel with drop-off rates, and every figure shown against the previous period.",
          ],
        ],
      },
      {
        phase: "After",
        title: "Judging outcomes",
        rows: [
          [
            "Actions",
            "Compares schools, regions, and programs against demand, and checks completion.",
          ],
          [
            "Needs",
            "Know whether placement and completion meet the benchmark.",
          ],
          [
            "Challenge",
            "No shared benchmark, and no individual data to lean on.",
          ],
          [
            "Design response",
            "School benchmarks, supply and demand gap, and a regional map, with student data protected.",
          ],
        ],
      },
    ],
  },
];

type Step = { title: string; detail: string };
const flows: { portal: string; steps: Step[]; footer?: ReactNode }[] = [
  {
    portal: "Trainee flow",
    steps: [
      { title: "Log in", detail: "Student email and password" },
      { title: "Dashboard", detail: "Quick stats and notifications" },
      { title: "Find OJT", detail: "Search and filter positions" },
      { title: "View position", detail: "Details and company info" },
      { title: "Apply", detail: "Checks the plan limit" },
      { title: "My Applications", detail: "Track status" },
      { title: "Log hours", detail: "Daily time record" },
      { title: "Host feedback", detail: "Evaluation and certificate" },
    ],
    footer: (
      <>
        <strong className="font-medium text-cream">Limit reached: </strong>a
        warning banner explains the cap.
      </>
    ),
  },
  {
    portal: "Host Training Establishment flow",
    steps: [
      { title: "Register", detail: "Company details, then verification" },
      { title: "Dashboard", detail: "Key counts, calendar, active postings" },
      { title: "Create position", detail: "Step-by-step job details" },
      { title: "Applicant pool", detail: "Filters and recommended applicants" },
      { title: "Interview and hire", detail: "Schedule, offer, and decide" },
      { title: "Employed talents", detail: "Follow hours and progress" },
      { title: "Feedback", detail: "Evaluate the trainee" },
    ],
  },
  {
    portal: "Higher Education Institution flow",
    steps: [
      { title: "Choose a plan", detail: "Starter, Plus, or Pro" },
      { title: "Upload students", detail: "Bulk import by CSV" },
      { title: "Dashboard", detail: "Institutional overview" },
      { title: "Students", detail: "Filter, import, and export" },
      { title: "OJT monitoring", detail: "Progress and hours" },
      { title: "Employer feedback", detail: "Ratings and themes" },
      { title: "Benchmarks", detail: "Compare with other schools" },
    ],
  },
  {
    portal: "Government Regulator flow",
    steps: [
      { title: "Log in", detail: "Government account" },
      { title: "Set the scope", detail: "Period, region, school, industry" },
      { title: "Headline cards", detail: "Counts with change and benchmark" },
      { title: "Student summary", detail: "Funnel, trends, and drop-off" },
      { title: "Jobs summary", detail: "Hiring funnel and response times" },
      { title: "Drill down", detail: "School benchmark and demand gap" },
    ],
  },
];

const mockups = [
  {
    portal: "Trainee dashboard",
    versions: [
      {
        label: "Original design",
        image: "intern_dashboard_original.png",
        alt: "Original trainee dashboard: a top bar, a bookmarks button, a search field, and a grid of position cards",
      },
      {
        label: "Redesign",
        image: "intern_dashboard_redesign.png",
        alt: "Redesigned trainee dashboard with a sidebar menu, a welcome message, a plan banner, an application limit notice, and company analytics",
      },
    ],
    change:
      "From a top bar and a page of position cards to a dashboard with a sidebar menu, the application limit notice, and company analytics.",
  },
  {
    portal: "Host Training Establishment dashboard",
    versions: [
      {
        label: "Original design",
        image: "employer_dashboard_original.png",
        alt: "Original host dashboard with an interviews today list, a listings overview table, and recommended profiles",
      },
      {
        label: "Redesign",
        image: "employer_dashboard_redesign.png",
        alt: "Redesigned host dashboard with a sidebar menu, key counts for applicants and positions, a calendar, and active job postings",
      },
    ],
    change:
      "From an interviews list and a listings table to a dashboard with a sidebar menu, key counts, a calendar, active job postings, and upcoming schedules.",
  },
  {
    portal: "Higher Education Institution dashboard",
    versions: [
      {
        label: "Original design",
        image: "institution_dashboard_original.png",
        alt: "Original institution dashboard with a registered students chart, student statistics, and placement benchmark cards",
      },
      {
        label: "Redesign",
        image: "institution_dashboard_redesign.png",
        alt: "Redesigned institution dashboard with a sidebar menu, an institutional overview of enrollment, placement, and conversion numbers, and a semester filter",
      },
    ],
    change:
      "From charts and benchmark cards on one page to an institutional overview with a sidebar menu, key placement and conversion numbers, a semester filter, and export.",
  },
];

// The high-fidelity screens, one row per portal. Each row slides sideways as the page scrolls, and
// the rows take turns: left, right, left, right. A screen without a `file` shows an "Image needed"
// placeholder; add the image to `mockup/` and set `file` to fill it. `contain` shows the whole
// picture instead of cropping it to a 16:9 frame.
type Screen = {
  file?: string;
  title: string;
  alt: string;
  needs?: string;
  contain?: boolean;
};
const screenRows: {
  portal: string;
  direction: "left" | "right";
  screens: Screen[];
}[] = [
  {
    portal: "On-the-Job Trainee portal",
    direction: "left",
    screens: [
      {
        file: "1.webp",
        title: "Dashboard",
        alt: "Trainee dashboard with a welcome message, an application limit notice, a company filter, and company analytics",
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
    portal: "Host Training Establishment portal",
    direction: "right",
    screens: [
      {
        file: "6.webp",
        title: "Dashboard",
        alt: "Host dashboard with key counts, a calendar, and active job postings",
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
        alt: "Employed Talents screen with trainee counts, a feedback reminder, filters, and a table of trainees",
      },
      {
        file: "10.webp",
        title: "Feedback History",
        alt: "Feedback History screen with feedback counts, a confirmation notice, filters, and a table of trainees",
      },
    ],
  },
  {
    portal: "Higher Education Institution portal",
    direction: "left",
    screens: [
      {
        file: "11.webp",
        title: "Dashboard",
        alt: "Institution dashboard with an institutional overview of enrollment, placement, and conversion numbers",
      },
      {
        file: "12.webp",
        title: "Students",
        alt: "Students screen with counts, an on-track notice, import and export buttons, filters, and a table of students",
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
  {
    portal: "Government Regulator portal",
    direction: "right",
    screens: [
      {
        file: "gov-1.png",
        title: "Student and school: conversion and outcomes",
        alt: "Chart mockups: a placement funnel, a student outcome trend, a school benchmark against the national figure, and an opportunity gap",
        contain: true,
      },
      {
        file: "gov-2.png",
        title: "Student and school: matching and access",
        alt: "Chart mockups: program and demand alignment, regional distribution, time to placement, and top destinations and roles",
        contain: true,
      },
      {
        file: "gov-3.png",
        title: "Jobs and company: recruitment performance",
        alt: "Chart mockups: jobs and applications over time, a jobs-to-hire funnel, a company benchmark, and industry demand",
        contain: true,
      },
      {
        file: "gov-4.png",
        title: "Jobs and company: market capacity",
        alt: "Chart mockups: top companies by hires, supply and demand gap, regional job demand, and time to fill",
        contain: true,
      },
      {
        title: "Headline dashboard",
        alt: "",
        needs:
          "Government dashboard: the headline count cards and portal-wide filters",
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

// The rows of final screens. A component of its own so the scroll hook starts when the folder that
// holds it is opened, not when the page loads.
const ScreenRows = () => {
  const rowsRef = useScrollRows<HTMLDivElement>();
  return (
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
                <li key={screen.title} className="w-72 shrink-0 sm:w-[26rem]">
                  <figure className="space-y-3">
                    {screen.file ? (
                      <img
                        src={`${IMAGES}/mockup/${screen.file}`}
                        width={1280}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        alt={screen.alt}
                        className={`aspect-video w-full rounded-xl md:rounded-2xl border ${screen.contain ? "bg-cream/5 object-contain" : "object-cover object-top"}`}
                      />
                    ) : (
                      <ImagePlaceholder>{screen.needs}</ImagePlaceholder>
                    )}
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
  );
};

const OjtConnect = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <img
          src={`${IMAGES}/ojtconnect.png`}
          width={1600}
          height={900}
          alt="OJT Connect home page shown on a laptop and a phone, with the headline “A connection that leads to a foundation of experiences”, an internship search bar, and a list of internships"
          className="w-full"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            OJT Connect is a web platform that connects early-career Filipino
            talent with verified companies and gives universities, colleges, and
            the government a way to run and oversee on-the-job training.
            Trainees find placements and track every application, host companies
            hire and evaluate them, institutions follow each student’s progress,
            and the regulator sees the national picture. I designed and built
            its four portals: On-the-Job Trainee, Host Training Establishment,
            Higher Education Institution, and Government Regulator.
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
        <Window
          icon={<LuChartColumn size={16} />}
          title="On the live site"
          footer="As shown on ojtconnect.com on October 2, 2026."
        >
          <dl className="grid grid-cols-2 gap-6 p-6 lg:grid-cols-4">
            {liveStats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-2xl font-semibold text-accent">
                  {stat.value}
                </dd>
                <dt className="text-xs text-cream/60">{stat.label}</dt>
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

      <Section id="portals" level={2} title="The Four Portals">
        <NoteWindow title="One platform, four portals">
          <p className={noteText}>
            Each group gets a portal made for what it needs to get done. These
            are the features each one offers, taken from the functional
            requirements (FRD v2.0) and the Government Portal metrics framework,
            and, for trainees and host companies, from the feature sections of
            the live site.
          </p>
        </NoteWindow>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {portals.map((portal) => (
            <Window
              key={portal.id}
              icon={portal.icon}
              title={portal.title}
              level={3}
              footer={`${portal.features.length} features`}
            >
              <p className={`px-6 pt-6 ${cardText}`}>{portal.audience}</p>
              <ul className="divide-y divide-line/40 pt-3">
                {portal.features.map((feature) => (
                  <li
                    key={feature.title}
                    className="flex items-start gap-3 px-6 py-3"
                  >
                    <LuCircleCheck
                      size={16}
                      aria-hidden
                      className="mt-1 shrink-0 text-accent"
                    />
                    <p className={cardText}>
                      <strong className="font-medium text-cream">
                        {feature.title}.{" "}
                      </strong>
                      {feature.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </Window>
          ))}
        </div>
        <h3 className="text-left font-medium text-lg">
          What each institution plan includes
        </h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Window
              key={tier.name}
              icon={<LuLayers size={16} />}
              title={tier.name}
              level={4}
              footer={tier.who}
            >
              <div className="space-y-3 p-6">
                <p className="text-left text-sm font-medium">{tier.price}</p>
                <dl className="divide-y divide-line/40 text-sm">
                  {tier.rows.map(([term, detail]) => (
                    <div
                      key={term}
                      className="flex justify-between gap-3 py-1.5"
                    >
                      <dt className="text-xs text-cream/60">{term}</dt>
                      <dd className="text-right">{detail}</dd>
                    </div>
                  ))}
                </dl>
                <p className={cardText}>{tier.includes}</p>
              </div>
            </Window>
          ))}
        </div>
        <p className="text-xs text-cream/60">
          Every plan includes one admin seat. Extra seats: Coordinator
          ₱5,000/term, Read-only ₱2,000/term.
        </p>
      </Section>

      <Section id="problem-and-goal" level={2} title="The Problem and the Goal">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <NoteWindow title="The problem" level={3}>
            <p className={noteText}>
              On-the-job training is still handled by hand across emails, group
              chats, paper, and spreadsheets. Trainees can’t easily tell real
              listings from scams, host companies sort applications and hours by
              hand, schools check progress through chats and site visits, and
              regulators have no national view of what happens.
            </p>
          </NoteWindow>
          <NoteWindow title="The goal" level={3}>
            <p className={noteText}>
              Give trainees, host companies, institutions, and government one
              platform to match, apply, hire, monitor, evaluate, and report on
              training placements, with a portal built for each group, on all
              screen sizes.
            </p>
          </NoteWindow>
        </div>
      </Section>

      <Section id="my-role" level={2} title="My Role">
        <NoteWindow title="My role">
          <p className={noteText}>
            I worked on this project as a product designer and frontend
            developer. Designing a screen and then building it myself, instead
            of handing it off, is what made this project my gateway to becoming
            a design engineer. My responsibilities were:
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
                  Research for this project was requirements-based. I worked
                  from written user stories for each user group and checked them
                  against the Commission on Higher Education’s internship policy
                  (Memorandum Order No. 23, series of 2009) and its draft policy
                  for virtual and hybrid internships. Accreditation
                  expectations, such as graduate tracer studies, and the data
                  institutions need before, during, and after internships also
                  shaped the scope. Direct user interviews and usability studies
                  are still to come.
                </p>
              </NoteWindow>
              <h4 className="text-left font-medium text-lg">
                Pain points by group
              </h4>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {painPoints.map((point) => (
                  <Window
                    key={point.title}
                    icon={point.icon}
                    title={point.title}
                    level={5}
                    status={point.group}
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

            <Section id="persona" title="Personas" trail={parts[0].title}>
              <Anchor id="problem-statement" />
              <NoteWindow title="Persona notes">
                <p className={noteText}>
                  One role-based persona for each portal, each with the problem
                  statement that guided its design.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {personas.map((persona) => (
                  <Window
                    key={persona.name}
                    icon={<LuUserRound size={16} />}
                    title="Role-based persona"
                    level={4}
                  >
                    <div className="space-y-3 p-6">
                      <div className="flex items-center gap-3 border-b pb-3">
                        <span
                          aria-hidden
                          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                        >
                          {persona.icon}
                        </span>
                        <h5 className="text-left font-medium text-lg leading-6">
                          {persona.name}
                        </h5>
                      </div>
                      <p className="text-left text-xs text-cream/60">
                        Problem statement
                      </p>
                      <p className={cardText}>{persona.statement}</p>
                    </div>
                  </Window>
                ))}
              </div>
            </Section>

            <Section
              id="user-journey"
              title="User Journeys"
              trail={parts[0].title}
            >
              <NoteWindow title="Journey notes">
                <p className={noteText}>
                  The journey of each group across three phases: before, during,
                  and after the internship. I built them from the functional
                  requirements and the metrics framework, not from interviews.
                </p>
              </NoteWindow>
              {journeys.map((journey) => (
                <div key={journey.portal} className="space-y-3">
                  <h4 className="text-left font-medium text-lg">
                    {journey.portal} journey
                  </h4>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {journey.phases.map((phase) => (
                      <Window
                        key={phase.phase}
                        icon={<LuRoute size={16} />}
                        title={`${phase.phase}: ${phase.title}`}
                        level={5}
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
                </div>
              ))}
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
              id="digital-wireframes"
              title="Digital Wireframes"
              trail={parts[1].title}
            >
              <NoteWindow title="Wireframe notes">
                <p className={noteText}>
                  The whole set of digital wireframes for the intern portal,
                  laid out in one Figma file. Every screen is drawn for the
                  Starter, Plus, and Pro plans, so I could compare how each plan
                  looks side by side. The other three portals are shown below
                  it.
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
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  [
                    "Host Training Establishment portal",
                    "Figma overview of the host wireframes",
                  ],
                  [
                    "Higher Education Institution portal",
                    "Figma overview of the institution wireframes",
                  ],
                  [
                    "Government Regulator portal",
                    "Figma overview of the government wireframes",
                  ],
                ].map(([title, needs]) => (
                  <Window
                    key={title}
                    icon={<LuImage size={16} />}
                    title={title}
                    level={4}
                  >
                    <div className="p-6">
                      <ImagePlaceholder>{needs}</ImagePlaceholder>
                    </div>
                  </Window>
                ))}
              </div>
            </Section>

            <Section
              id="low-fidelity-prototype"
              title="Low-Fidelity Prototype"
              trail={parts[1].title}
            >
              <NoteWindow title="Prototype notes">
                <p className={noteText}>
                  The flow of each group through the product. The trainee logs
                  in, finds a position, applies within the plan limit, tracks
                  the application, then logs hours and views the host’s
                  feedback. The host, institution, and regulator flows follow
                  the same approach: one short path for the main job each group
                  came to do. I built them from the screens in Figma.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {flows.map((flow) => (
                  <Window
                    key={flow.portal}
                    icon={<LuRoute size={16} />}
                    title={flow.portal}
                    level={4}
                    footer={flow.footer ?? `${flow.steps.length} steps`}
                  >
                    <ol className="divide-y divide-line/40">
                      {flow.steps.map((step, index) => (
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
                          <p className="min-w-0 flex-1 text-left text-sm">
                            <span className="font-medium">{step.title}</span>
                            <span className="text-cream/70">
                              {" "}
                              · {step.detail}
                            </span>
                          </p>
                        </li>
                      ))}
                    </ol>
                  </Window>
                ))}
              </div>
            </Section>
          </div>
        </FolderSection>
        <FolderSection
          label={`${parts[2].number}. ${parts[2].title}`}
          count={parts[2].topics.length}
          peek={parts[2].peek}
        >
          <div className="space-y-15">
            <Section id="mockups" title="Mockups" trail={parts[2].title}>
              <NoteWindow title="Mockup notes">
                <p className={noteText}>
                  Each portal began as a simple first mockup and was then
                  redesigned into a dashboard with a sidebar menu and the key
                  numbers for that group. Here are the trainee, host, and
                  institution dashboards, from the original design to the
                  redesign.
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
                          className="aspect-video w-full rounded-xl md:rounded-2xl border object-cover object-top"
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
                  The final screens: five from each of the trainee, host, and
                  institution portals, and the chart mockups for the Government
                  Regulator portal. Scroll the page and the rows slide in turn,
                  one way and then the other.
                </p>
              </NoteWindow>
              <ScreenRows />
              <p className="text-xs text-cream/60">
                All screens use sample data.
              </p>
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
          </div>
        </FolderSection>
        <FolderSection
          label={`${parts[3].number}. ${parts[3].title}`}
          count={parts[3].topics.length}
          peek={parts[3].peek}
        >
          <div className="space-y-15">
            <Section id="takeaways" title="Takeaways" trail={parts[3].title}>
              <NoteWindow title="Takeaways">
                <p className={noteText}>
                  Designing for four very different groups taught me to build
                  shared patterns (components, cards, empty states) so each
                  portal feels consistent, while still respecting each group’s
                  permissions and goals. Testing on real screen sizes early
                  caught problems that desktop-only checks missed.
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
        </FolderSection>
      </FolderGroup>
    </div>
  </ProjectLayout>
);

export default OjtConnect;
