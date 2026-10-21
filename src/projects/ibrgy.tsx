import type { ReactNode } from "react";
import {
  LuCircleCheck,
  LuClock,
  LuDatabase,
  LuExternalLink,
  LuFileText,
  LuGauge,
  LuImage,
  LuInfo,
  LuListChecks,
  LuLock,
  LuRoute,
  LuServer,
  LuSquare,
  LuTriangleAlert,
  LuUserRound,
  LuUsers,
} from "react-icons/lu";
import Carousel from "../components/Carousel";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { ProjectLayout } from "../components/ProjectLayout";
import {
  BusinessCase,
  NoteWindow,
  ProcessStrip,
  ScopeAndStandards,
  Section,
  UserStories,
  UxQualities,
  Window,
  cardText,
  noteText,
  SdlcStrip,
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/ibrgy";

const heroImages = [`${IMAGES}/ibrgy1.png`, `${IMAGES}/ibrgy2.png`];

const facts = [
  {
    label: "Type",
    value: "Web-based barangay document request management system",
  },
  {
    label: "Context",
    value:
      "Capstone project for CPE312 Software Design and Engineering, University of Science and Technology of Southern Philippines",
  },
  {
    label: "Team",
    value: "Four students: Balala, Concillo, Jumuad, and Maliao",
  },
  {
    label: "Timeline",
    value: "Planned from March 2023, manuscript dated January 2024",
  },
  {
    label: "Method",
    value: "Modified Waterfall software development life cycle",
  },
  { label: "Platform", value: "Web app for desktop and laptop browsers" },
  {
    label: "Tools",
    value: "Figma, React, JavaScript, Tailwind CSS, Node.js, Firebase",
  },
  { label: "Status", value: "Completed, with a live demo" },
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
    peek: `${IMAGES}/ibrgy1.png`,
    topics: [
      { id: "problem-and-goal", label: "The problem and the goal" },
      { id: "scope-and-standards", label: "Scope and standards" },
      { id: "my-role", label: "My role" },
      { id: "process", label: "Design process" },
      { id: "sdlc", label: "Development life cycle" },
    ],
  },
  {
    number: 2,
    title: "Understanding the users",
    peek: `${IMAGES}/diagram-process.jpg`,
    topics: [
      { id: "user-research", label: "User research" },
      { id: "users", label: "The users" },
      { id: "user-stories", label: "User stories" },
      { id: "user-journey", label: "User journey" },
    ],
  },
  {
    number: 3,
    title: "Design",
    peek: `${IMAGES}/screen-documents.jpg`,
    topics: [
      { id: "requirements", label: "System requirements" },
      { id: "system-design", label: "System design" },
      { id: "screens", label: "The screens" },
      { id: "implementation", label: "Implementation" },
      { id: "testing", label: "Testing and results" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/ibrgy2.png`,
    topics: [
      { id: "ux-qualities", label: "Good UX check" },
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const objectives = [
  "Design and develop a web-based system for managing document requests.",
  "Test the functionality of the system for both target users.",
  "Evaluate its usability for residents who request and personnel who manage.",
];

const painPoints = [
  {
    icon: <LuClock size={20} />,
    title: "Rigid hours",
    problem:
      "Documents are issued only on weekdays from 8:00 am to 5:00 pm, apart from emergencies such as Barangay Protection Orders.",
  },
  {
    icon: <LuUsers size={20} />,
    title: "Long queues",
    problem:
      "The barangay serves 100 to 200 clients a day. Residents wait in a long queue to be assigned to the table for their document.",
  },
  {
    icon: <LuTriangleAlert size={20} />,
    title: "Missing signers",
    problem:
      "Some documents cannot be finished if the person who must sign them is not in the barangay that day.",
  },
  {
    icon: <LuFileText size={20} />,
    title: "Back and forth",
    problem:
      "When a requirement is incomplete or invalid, the resident has to leave and come back with the right one.",
  },
];

const users = [
  {
    icon: <LuUserRound size={20} />,
    title: "Resident",
    description:
      "The person who requests barangay documents and certificates from the personnel. Residents sign up, view the documents offered, fill in a request form, and follow the status of the request.",
  },
  {
    icon: <LuLock size={20} />,
    title: "Barangay personnel",
    description:
      "The person responsible for issuing and releasing the documents. Personnel post the documents offered, view requests, check the requirements, and verify or deny each request.",
  },
];

const currentProcess = [
  "Present the request and requirements at the information desk, and write the name, signature, time, and date in the log book",
  "Get the requirements validated: a zone clearance signed by the zone leader, a cedula, a valid ID with a picture and recent address, and personal appearance",
  "Pay the cashier and receive an official receipt",
  "Have a picture taken and the document encoded at the department for that document, which takes about 3 to 5 minutes",
  "Wait for the document to be signed and sealed by the chairperson, councilors, and secretary",
];

const iBrgyJourney = [
  "Sign up or log in with an email and password, a Google account, or a Facebook account",
  "View the documents offered, with a description and the requirements for each",
  "Fill in the request form, upload the requirements, and choose a preferred pick-up date",
  "Submit, and download a claiming slip with the request details and cost",
  "The personnel are notified, check the requirements, and verify or deny the request",
  "The resident is notified as the status changes, from Processing to For pick-up and Released, or Denied",
  "Pick up the finished document at the barangay",
];

const requirements = [
  {
    title: "Input",
    items: [
      "Collect user information at sign-up and login information",
      "Collect the type of document requested",
      "Prompt for the details that document needs",
      "Collect the request information and requirements",
    ],
  },
  {
    title: "Process",
    items: [
      "Verify account registration",
      "Compile the request data and pass it to the personnel",
      "Calculate the total cost of the documents requested",
      "Generate the scheduled date for claiming",
    ],
  },
  {
    title: "Output",
    items: [
      "List the documents that can be requested, with a description of each",
      "Produce the claiming slip",
      "Display the requested documents list and live request counts",
      "Display the status of each request",
    ],
  },
  {
    title: "Control",
    items: [
      "Login security at the application level",
      "Only registered users can log in",
      "Authentication for both types of users",
      "A separate interface and options for each user type",
    ],
  },
  {
    title: "Performance",
    items: [
      "A seamless and responsive interface",
      "Real-time data shared between users",
      "Many users at the same time",
      "Available 24 hours a day, every day",
    ],
  },
];

const diagrams = [
  {
    file: "diagram-process.jpg",
    width: 1254,
    height: 1476,
    title: "Current process",
    alt: "Activity diagram of the current document request process: requesting, validation of the request with a branch for people without a zone clearance, payment, typing the information for a cedula, barangay clearance, certificate of indigency, or certificate of residency, then sealing and signing",
    caption: "How a document is requested today, as the team observed it.",
  },
  {
    file: "diagram-use-case-resident.jpg",
    width: 1338,
    height: 1590,
    title: "Use cases: resident",
    alt: "Use case diagram for the resident: sign up, log in, view documents, request a document, and confirm a request, with included steps such as verify account, select document, submit request, and generate claim slip",
    caption: "What a resident can do, including the error paths.",
  },
  {
    file: "diagram-use-case-personnel.jpg",
    width: 1320,
    height: 1362,
    title: "Use cases: personnel",
    alt: "Use case diagram for barangay personnel: log in, post a document, view requests, and confirm a request, with included steps such as create document post, verify request, deny request, and print document",
    caption: "What the barangay personnel can do.",
  },
  {
    file: "diagram-database.jpg",
    width: 1572,
    height: 1740,
    title: "Database design",
    alt: "Database design with tables for residents, barangay personnel, addresses, date of birth, authentication, cedula, barangay certificate, certificate of indigency, certificate of residency, document category, and request category",
    caption: "Entities for both user types and for each document.",
  },
];

const screens = [
  {
    file: "screen-home.jpg",
    title: "Resident dashboard",
    alt: "Resident dashboard welcoming the user back, with a View Document List button, About Us, Citizen's Charter, and Contact Us tiles, and a calendar panel",
    caption:
      "A resident’s home: one large button for the document list, quick links, and a calendar of their requests.",
  },
  {
    file: "screen-documents.jpg",
    title: "Documents offered",
    alt: "Documents offered screen listing Community Tax Certificate (Cedula), Barangay Clearance, Certificate of Residency, Certificate of Indigency, and Other Documents, each with a Request button",
    caption:
      "Every document the barangay offers, each with its own Request button.",
  },
  {
    file: "screen-request-form.jpg",
    title: "Request form",
    alt: "Request form for the Community Tax Certificate with fields for height, weight, monthly income, a file upload for the requirement, and a preferred pick-up date, and a cost badge",
    caption:
      "A form per document, with its cost shown up front and the fields that document needs.",
  },
  {
    file: "screen-claiming-slip.jpg",
    title: "Request submitted",
    alt: "A Request Submitted message over the request form, thanking the resident, asking them to wait for the personnel and see notifications, with a Download Claiming Slip button",
    caption:
      "After submitting, a clear confirmation says what happens next and offers the claiming slip.",
  },
  {
    file: "screen-post-document.jpg",
    title: "Post a document (personnel)",
    alt: "Personnel screen for the documents offered, with edit buttons beside each document and an add button to post a new one",
    caption: "Personnel can edit the documents offered and add a new one.",
  },
  {
    file: "screen-requests-list.jpg",
    title: "Requests list (personnel)",
    alt: "Requests list for the Community Tax Certificate showing each request with the date requested, claiming date, and a status of Processing or Released",
    caption:
      "A request list per document, with the dates and a colored status for each request.",
  },
];

const stack = [
  {
    label: "Interface",
    value: "HTML5, React, and Tailwind CSS",
  },
  {
    label: "Server",
    value:
      "Node.js, with five APIs for user profiles, sign-in, document posts, requests, and notifications",
  },
  {
    label: "Data",
    value:
      "Firebase Cloud Firestore, with collections for users, posts, requests, and notifications",
  },
  {
    label: "Sign-in",
    value:
      "Firebase Authentication with email and password, Google, or Facebook",
  },
  { label: "Files", value: "Firebase Storage, for uploaded requirements" },
  {
    label: "Browsers",
    value: "Chrome 60+, Safari 10.1+, Edge 12+, or Firefox ESR",
  },
];

const testStages = [
  "Unit testing, to check each unit against the original requirements",
  "Integration testing, to find flaws in how units work together",
  "System testing, to check the whole system against the functional and technical requirements",
  "User acceptance testing, with a functional test form and the System Usability Scale",
];

const susItems = [
  {
    item: "“I thought the system was easy to use.”",
    result: "7 strongly agreed and 1 agreed",
  },
  {
    item: "“I thought there was too much inconsistency in this system.”",
    result: "All 8 strongly disagreed",
  },
  {
    item: "“I would need the support of a technical person to be able to use this system.”",
    result: "6 strongly disagreed and 2 disagreed",
  },
  {
    item: "“I felt very confident using the system.”",
    result: "5 strongly agreed, 2 agreed, and 1 was neutral",
  },
];

const limits = [
  "Only 8 people took part: 5 residents and 3 barangay personnel.",
  "The team guided and instructed the users in how to use each function during both tests.",
  "The requirements came from one interview with a barangay kagawad and an on-site observation.",
  "The manuscript does not report how the system performed in daily use at a barangay.",
];

const nextSteps = [
  "Add a way for residents and barangay personnel to communicate, to make requesting and verifying easier.",
  "Add features that take in residents’ feedback about the request process.",
  "Work on the features behind the usability test results, and gather more samples for better results.",
];

const LinkButton = ({
  href,
  children,
  primary,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-2 ${primary ? "white-button" : "transparent-button border"}`}
  >
    {children}
    <LuExternalLink size={16} aria-hidden />
  </a>
);

const NumberedList = ({ items }: { items: string[] }) => (
  <ol className="divide-y divide-line/40">
    {items.map((item, index) => (
      <li key={item} className="flex items-start gap-3 px-6 py-3">
        <span
          aria-hidden
          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
        >
          {index + 1}
        </span>
        <p className={cardText}>{item}</p>
      </li>
    ))}
  </ol>
);

const Ibrgy = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <Carousel
          images={heroImages}
          alt="The iBRGY welcome page and the barangay personnel dashboard"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            iBRGY is a web-based Barangay Request Management System. Residents
            request documents such as a cedula, a barangay clearance, and
            certificates of residency or indigency online and follow the
            request, instead of queueing at the barangay hall. Barangay
            personnel check each request, verify or deny it, and keep track of
            all requests in one place. We built it as our capstone project for
            Software Design and Engineering.
          </p>
        </NoteWindow>
        <BusinessCase
          headline="iBRGY moves barangay document requests online, so residents stop queueing at the hall and coming back for missing requirements."
          conversion="A resident picks a document, fills in one form, and gets a claiming slip, then follows the request’s status instead of waiting in line to ask."
          efficiency="Personnel verify or deny each request and track all of them in one place, instead of a few staff serving a long queue by hand."
          roi="In the usability test, 7 of 8 participants strongly agreed it was easy to use, and it scored 91.25 on the System Usability Scale."
          evidence="A capstone project, tested with 8 people (5 residents and 3 personnel)."
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
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <LinkButton href="https://ibrgy.netlify.app/" primary>
            See Live Demo
          </LinkButton>
          <LinkButton href="https://drive.google.com/drive/folders/106qju_uRAZ9Md0lmTMTWLMOWU1Zu_eRo?usp=sharing">
            See User Manual
          </LinkButton>
          <LinkButton href="https://drive.google.com/drive/folders/1WZWou71qFtARwjpr4Vg7k7uQ7SRc8k8M?usp=sharing">
            Project Files
          </LinkButton>
        </div>
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
                    Requesting a document at a barangay is manual and paper
                    based. Residents queue, often come back because a
                    requirement was incomplete or invalid, and a few personnel
                    serve a large volume of requests. It is slow and
                    inconvenient for residents and personnel alike.
                  </p>
                </NoteWindow>
                <NoteWindow title="The goal" level={3}>
                  <p className={noteText}>
                    Create a web-based system that automates document requests
                    and removes the lengthy servicing of requests and issuing of
                    documents: residents can request without visiting the
                    barangay hall, and the system manages the request and shows
                    it to the personnel to verify.
                  </p>
                </NoteWindow>
              </div>
              <Window
                icon={<LuListChecks size={16} />}
                title="Objectives"
                level={4}
                footer={`${objectives.length} objectives`}
              >
                <NumberedList items={objectives} />
              </Window>
              <NoteWindow title="The challenge" level={3}>
                <p className={noteText}>
                  Translating barangay workflows into an online space was not
                  only a technical hurdle but a cultural shift: reshaping
                  paper-driven habits and earning trust in a digital interface.
                  Every step, from submitting a form to approval, had to be
                  clear, and edge cases such as incomplete fields or missing
                  uploads had to be handled gracefully.
                </p>
              </NoteWindow>
            </Section>

            <ScopeAndStandards
              trail={parts[0].title}
              collapsible
              rows={[
                {
                  label: "Scope",
                  text: "A resident logs in, picks a document, sets the quantity and a claiming schedule, and submits. The system generates the request details and notifies the personnel, who verify or deny the request. A claiming slip follows once the request is confirmed.",
                },
                {
                  label: "Not covered",
                  text: "Only the management of document requests. Payment and request complaints are outside the system.",
                },
                {
                  label: "Standards",
                  text: "A consent letter to the barangay before the interview, four levels of testing, and John Brooke’s System Usability Scale for usability.",
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
                  I worked on iBRGY as one of four team members. The manuscript
                  records me as the note taker in the requirements interview
                  with a barangay kagawad on May 2, 2023.
                </p>
              </NoteWindow>
            </Section>

            <ProcessStrip
              trail={parts[0].title}
              collapsible
              empathize={{
                status: "Done",
                text: "An in-person interview with a barangay kagawad and an on-site observation of how documents are issued.",
              }}
              define={{
                status: "Done",
                text: "Two user types, a table of system requirements, and a problem statement.",
              }}
              ideate={{
                status: "Done",
                text: "Context and data flow diagrams, use cases, activity diagrams, and a database design.",
              }}
              prototype={{
                status: "Done",
                text: "Interface designs for both users, then a working web app.",
              }}
              test={{
                status: "Done",
                text: "Four levels of testing. A usability test with 5 residents and 3 personnel scored 91.25 on the System Usability Scale.",
              }}
            />

            <SdlcStrip
              trail={parts[0].title}
              collapsible
              model="Modified Waterfall"
              planning={{
                status: "Done",
                text: "Planned from March 2023 by a team of four as our Software Design and Engineering capstone.",
              }}
              requirements={{
                status: "Done",
                text: "An interview on May 2, 2023, with a barangay kagawad in Barangay Carmen, and an on-site observation of how documents are issued.",
              }}
              design={{
                status: "Done",
                text: "A context diagram, data flow diagrams for each user, use cases, activity diagrams, a database design, and a system architecture, then the screens.",
              }}
              development={{
                status: "Done",
                text: "The interface and the server in JavaScript (HTML5, React, and Tailwind CSS), with Firebase for the data, the sign-in, and the uploaded files.",
              }}
              testing={{
                status: "Done",
                text: "Unit, integration, and system testing, then user acceptance testing with 5 residents and 3 personnel, which scored 91.25 on the System Usability Scale.",
              }}
              deployment={{
                status: "To add",
                text: "The page doesn’t say whether the system was deployed for the barangay after the capstone; the code is on GitHub.",
              }}
              maintenance={{
                status: "Planned",
                text: "Next: a way for residents and personnel to communicate, features that take in residents’ feedback, and work on the usability test results.",
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
              title="User Research"
              trail={parts[1].title}
            >
              <NoteWindow title="Research notes">
                <p className={noteText}>
                  The requirements came from two methods. The first was an
                  interview on May 2, 2023, with a barangay kagawad in Barangay
                  Carmen, after a consent letter was sent to the barangay. The
                  second was an on-site observation of how documents are issued.
                  The kagawad named the most requested documents, including the
                  cedula, the certificate of residency, and the certificate of
                  indigency, said each costs 50 pesos except the certificate of
                  indigency, which is free, and said there were no other issues
                  when requirements are complete and valid. The challenges below
                  come from the team’s observation.
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
            </Section>

            <Section
              collapsible
              id="users"
              title="The Users"
              trail={parts[1].title}
            >
              <NoteWindow title="User notes">
                <p className={noteText}>
                  The analysis found two types of users. The system keeps a
                  separate interface and options for each.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {users.map((user) => (
                  <Window
                    key={user.title}
                    icon={user.icon}
                    title={user.title}
                    level={4}
                  >
                    <p className={`p-6 ${cardText}`}>{user.description}</p>
                  </Window>
                ))}
              </div>
            </Section>

            <UserStories
              collapsible
              trail={parts[1].title}
              stories={[
                {
                  who: "Resident",
                  story:
                    "As a resident, I want to request a document without going to the barangay hall and waiting in a queue, so that I save time and effort and can request at my own pace.",
                },
                {
                  who: "Barangay personnel",
                  story:
                    "As barangay personnel, I want each request to arrive with its details, schedule, quantity, and cost, so that I can monitor and process document requests systematically.",
                },
              ]}
            />

            <Section
              collapsible
              id="user-journey"
              title="User Journey"
              trail={parts[1].title}
            >
              <NoteWindow title="Journey notes">
                <p className={noteText}>
                  The left side is the manual process as the team observed it.
                  The right side is the same trip with iBRGY: the checking moves
                  online, and the resident only returns to pick up the finished
                  document.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuRoute size={16} />}
                  title="Before: at the barangay hall"
                  level={4}
                  footer={`${currentProcess.length} steps`}
                >
                  <NumberedList items={currentProcess} />
                </Window>
                <Window
                  icon={<LuRoute size={16} />}
                  title="After: with iBRGY"
                  level={4}
                  footer={`${iBrgyJourney.length} steps`}
                >
                  <NumberedList items={iBrgyJourney} />
                </Window>
              </div>
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
              id="requirements"
              title="System Requirements"
              trail={parts[2].title}
            >
              <NoteWindow title="Requirement notes">
                <p className={noteText}>
                  The analysis turned the interview and observation into a table
                  of requirements in five categories. This is a summary of that
                  table.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {requirements.map((group) => (
                  <Window
                    key={group.title}
                    icon={<LuListChecks size={16} />}
                    title={group.title}
                    level={4}
                    footer={`${group.items.length} requirements`}
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
            </Section>

            <Section
              collapsible
              id="system-design"
              title="System Design"
              trail={parts[2].title}
            >
              <NoteWindow title="Design notes">
                <p className={noteText}>
                  Before building the interface, the team modeled the system: a
                  context diagram and data flow diagrams for each user, use
                  cases, activity diagrams, a database design, and a system
                  architecture.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {diagrams.map((diagram) => (
                  <Window
                    key={diagram.file}
                    icon={<LuImage size={16} />}
                    title={diagram.title}
                    level={4}
                    footer={diagram.caption}
                  >
                    <img
                      src={`${IMAGES}/${diagram.file}`}
                      width={diagram.width}
                      height={diagram.height}
                      loading="lazy"
                      decoding="async"
                      alt={diagram.alt}
                      className="w-full bg-white"
                    />
                  </Window>
                ))}
              </div>
              <Window
                icon={<LuImage size={16} />}
                title="System architecture"
                level={4}
                footer="The resident and personnel reach the same database through the internet; a printer is optional for claiming slips."
              >
                <img
                  src={`${IMAGES}/diagram-architecture.jpg`}
                  width={1428}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  alt="System architecture: a resident using a phone or computer and a barangay personnel member using a computer, both connected through the internet to a shared database, with an optional printer for the claiming slip"
                  className="w-full bg-white"
                />
              </Window>
            </Section>

            <Section
              collapsible
              id="screens"
              title="The Screens"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  These are screens from the finished system, shown with test
                  data. The design is a dark navy side drawer with a yellow
                  header, one large button per main task, and a status color on
                  every request.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {screens.map((screen) => (
                  <Window
                    key={screen.file}
                    icon={<LuImage size={16} />}
                    title={screen.title}
                    level={4}
                  >
                    <div className="space-y-3 p-6">
                      <img
                        src={`${IMAGES}/${screen.file}`}
                        width={1600}
                        height={845}
                        loading="lazy"
                        decoding="async"
                        alt={screen.alt}
                        className="w-full rounded-xl border"
                      />
                      <p className={cardText}>{screen.caption}</p>
                    </div>
                  </Window>
                ))}
              </div>
            </Section>

            <Section
              collapsible
              id="implementation"
              title="Implementation"
              trail={parts[2].title}
            >
              <NoteWindow title="Build notes">
                <p className={noteText}>
                  The interface and the server are built in JavaScript, with
                  Firebase handling the data, the sign-in, and the uploaded
                  files.
                </p>
              </NoteWindow>
              <Window
                icon={<LuServer size={16} />}
                title="What it runs on"
                level={4}
                footer={`${stack.length} parts`}
              >
                <dl className="divide-y divide-line/40 text-sm">
                  {stack.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[8rem_1fr] sm:gap-3"
                    >
                      <dt className="flex items-center gap-2 text-xs leading-6 text-cream/60">
                        <LuDatabase
                          size={14}
                          aria-hidden
                          className="text-accent"
                        />
                        {item.label}
                      </dt>
                      <dd className="text-cream/80">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
            </Section>

            <Section
              collapsible
              id="testing"
              title="Testing and Results"
              trail={parts[2].title}
            >
              <NoteWindow title="Testing notes">
                <p className={noteText}>
                  The system went through four levels of testing. The last, user
                  acceptance testing, had 5 residents and 3 barangay personnel
                  try it with a functional test form and the System Usability
                  Scale.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuListChecks size={16} />}
                  title="Testing levels"
                  level={4}
                  footer={`${testStages.length} levels`}
                >
                  <NumberedList items={testStages} />
                </Window>
                <Window
                  icon={<LuGauge size={16} />}
                  title="Usability: SUS score"
                  level={4}
                >
                  <div className="space-y-3 p-6">
                    <p className="text-4xl font-semibold">91.25</p>
                    <p className={cardText}>
                      Grade A+, adjectival rating “Best Imaginable”, from 8
                      participants, scored with John Brooke’s method.
                    </p>
                  </div>
                </Window>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuCircleCheck size={16} />}
                  title="Functional test: residents"
                  level={4}
                >
                  <p className={`p-6 ${cardText}`}>
                    All 10 items passed for all 5 residents: registration,
                    login, choosing a document, entering details and
                    requirements, listing and describing documents, producing
                    the claiming slip, a responsive interface, and many users at
                    once.
                  </p>
                </Window>
                <Window
                  icon={<LuCircleCheck size={16} />}
                  title="Functional test: personnel"
                  level={4}
                >
                  <p className={`p-6 ${cardText}`}>
                    Six of seven items passed for all 3 personnel. “A seamless
                    and responsive user interface” was confirmed by 2 of the 3,
                    the one item that did not pass for everyone.
                  </p>
                </Window>
              </div>
              <Window
                icon={<LuGauge size={16} />}
                title="Four SUS statements and how participants rated them"
                level={4}
                footer="Out of 8 participants"
              >
                <dl className="divide-y divide-line/40 text-sm">
                  {susItems.map((row) => (
                    <div
                      key={row.item}
                      className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[1fr_14rem] sm:gap-3"
                    >
                      <dt className="text-cream/80">{row.item}</dt>
                      <dd className="font-medium">{row.result}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
              <Window
                icon={<LuTriangleAlert size={16} />}
                title="What these results do not show"
                level={4}
                footer={`${limits.length} limits`}
              >
                <ul className="divide-y divide-line/40">
                  {limits.map((limit) => (
                    <li
                      key={limit}
                      className="flex items-start gap-3 px-6 py-3"
                    >
                      <LuTriangleAlert
                        size={16}
                        aria-hidden
                        className="mt-1 shrink-0 text-cream/60"
                      />
                      <p className={cardText}>{limit}</p>
                    </li>
                  ))}
                </ul>
              </Window>
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
              usable="A resident picks a document, fills in one form, and gets a claiming slip, with a status of Processing, For pick-up, Released, or Denied after that. In the usability test, 7 of 8 participants strongly agreed it was easy to use and all 8 strongly disagreed that it was inconsistent. The team guided the testers, and only 8 took part."
              equitable="Residents can request from home instead of fitting the barangay’s weekday 8-to-5 hours, and can sign up with an email, Google, or Facebook. The system was designed for desktop and laptop browsers, and no accessibility checks are documented."
              enjoyable="Not measured directly. On “I felt very confident using the system”, 5 participants strongly agreed, 2 agreed, and 1 was neutral."
              useful="Residents skip the queue for the documents offered (a cedula, a barangay clearance, and certificates of residency and indigency, among others), and personnel get a request list with live counts and notifications. Time saved in real use was not measured."
            />

            <Section
              collapsible
              id="takeaways"
              title="Takeaways"
              trail={parts[3].title}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <NoteWindow title="Result" level={4}>
                  <p className={noteText}>
                    The functional tests passed on all but one item, and the
                    usability test scored 91.25 (A+, “Best Imaginable”). The
                    manuscript concludes the system works and is acceptable to
                    residents and barangay personnel.
                  </p>
                </NoteWindow>
                <NoteWindow title="Impact" level={4}>
                  <p className={noteText}>
                    In testing, residents could request documents and follow
                    them from home, and personnel could manage every request
                    from one dashboard. Whether a barangay now runs on iBRGY,
                    and how much time it saves, is not documented here.
                  </p>
                </NoteWindow>
              </div>
              <div className="flex justify-center">
                <LinkButton
                  href="https://github.com/capstone-ibrgy/ibrgy"
                  primary
                >
                  View GitHub Repository
                </LinkButton>
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

export default Ibrgy;
