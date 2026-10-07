import type { ReactNode } from "react";
import {
  LuAccessibility,
  LuBadgeCheck,
  LuCalendarDays,
  LuCircleCheck,
  LuExternalLink,
  LuFileText,
  LuGithub,
  LuImage,
  LuInfo,
  LuLanguages,
  LuListChecks,
  LuLock,
  LuMousePointerClick,
  LuPalette,
  LuRoute,
  LuSmartphone,
  LuSquare,
  LuUserRound,
} from "react-icons/lu";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { ProjectLayout } from "../components/ProjectLayout";
import {
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

const IMAGES = "/assets/images/projects/roote";

const facts = [
  { label: "Role", value: "UX/UI Designer, Front-End Developer, and Packaging Designer" },
  { label: "Duration", value: "September 2026 to October 2026" },
  {
    label: "Languages",
    value: "Six, including right-to-left layouts for Hebrew and Arabic",
  },
  { label: "Status", value: "Live at roote.us, built as a concept for stakeholder review" },
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
    peek: `${IMAGES}/home.png`,
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
    peek: `${IMAGES}/digital-wireframes-overview.webp`,
    topics: [
      { id: "digital-wireframes", label: "Digital wireframes" },
      { id: "low-fidelity-prototype", label: "Low-fidelity prototype" },
      { id: "diagnosis-flow", label: "Diagnosis flow" },
      { id: "stakeholder-feedback", label: "Stakeholder feedback" },
    ],
  },
  {
    number: 3,
    title: "Refining the design",
    peek: `${IMAGES}/report.png`,
    topics: [
      { id: "mockups", label: "Mockups" },
      { id: "high-fidelity-designs", label: "High-fidelity designs" },
      { id: "report-plan-app", label: "Report, plan and app" },
      { id: "accessibility", label: "Accessibility" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/today.png`,
    topics: [
      { id: "ux-qualities", label: "Good UX check" },
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "User flows",
  "The questionnaire",
  "Report and checkout design",
  "Right-to-left layouts",
  "Accessibility",
  "Building the front end",
  "Bottle, label artwork, and carton design",
  "Acting on stakeholder feedback",
];

const painPoints = [
  {
    icon: <LuMousePointerClick size={20} />,
    title: "Unclear next step",
    problem:
      "Users need one clear action after each screen, so every page ends in a single primary call to action.",
  },
  {
    icon: <LuLock size={20} />,
    title: "Trust at payment",
    problem:
      "Entering a card on a new brand feels risky, so checkout needs visible security cues, a clear summary, and a way to get help.",
  },
  {
    icon: <LuBadgeCheck size={20} />,
    title: "Honest claims",
    problem:
      "Unverified prices and medical claims erode trust, so anything not confirmed shows as a visible pending marker, never an invented figure.",
  },
  {
    icon: <LuLanguages size={20} />,
    title: "Language and reading direction",
    problem:
      "Most customers are in Israel, so visitors from there get Hebrew with right-to-left layout by default, with a switch to other languages.",
  },
];

const journeyMap = [
  {
    stage: "Discover",
    does: "Arrives from a search or a social ad with a hair-loss worry",
    response: "A clear promise and one action: start the free analysis",
  },
  {
    stage: "Analyze",
    does: "Uploads photos and answers five short questions",
    response: "An animated analysis and a questionnaire that fills the wait",
  },
  {
    stage: "Report",
    does: "Gives an email address to get the results",
    response: "A personal PDF that explains the situation in plain words",
  },
  {
    stage: "Plan",
    does: "Reads the recommended treatment and plan length",
    response: "One recommended plan, with no products to choose between",
  },
  {
    stage: "Checkout",
    does: "Opens an account, confirms the plan, and pays",
    response: "A clear summary, visible security cues, and a way to get help",
  },
  {
    stage: "Daily program",
    does: "Follows the plan day by day",
    response: "The app shows what to do today and sends reminders",
  },
  {
    stage: "Follow-up",
    does: "Tracks progress over months",
    response: "Progress photos, before and after, and a repeat analysis",
  },
];

const flowSteps = [
  {
    title: "Home",
    detail: "One primary action: start the free hair analysis, never “Shop now”",
  },
  {
    title: "Free analysis",
    detail: "Photos and a short questionnaire, one choice per step",
  },
  { title: "Report", detail: "A personal report built from the analysis" },
  {
    title: "Plan",
    detail: "A recommended plan, so the customer does not pick products",
  },
  { title: "Checkout", detail: "Account, plan length, order summary, payment" },
];

const diagnosisSteps = [
  {
    title: "Introduction",
    detail: "A short screen: a few minutes, an AI analysis, then a personal plan",
  },
  { title: "Gender", detail: "Two large visual choices" },
  {
    title: "Hair photos",
    detail: "Upload, with a guide to shooting the front, top, crown, and hairline",
  },
  {
    title: "AI analysis",
    detail:
      "An animated screen shows density, hair-loss area, hairline, scalp, and thinning being checked",
  },
  {
    title: "Questionnaire",
    detail: "Shown while the analysis runs, so the wait is never a loading screen",
  },
  {
    title: "Email",
    detail: "“Send my personalized results” delivers the report",
  },
];

const questions = [
  "Where the hair loss is",
  "When it first started",
  "Past treatments",
  "Family history",
  "The main goal",
];

const reportParts = [
  "The customer's photo",
  "AI analysis: what was found in the photo",
  "Hair-loss type and problem area",
  "Current situation, in a short plain explanation",
  "Personalized treatment plan: treatments, how often, how long",
  "Recommended program length",
  "Pricing for the full plan",
  "One large button: Start my program",
];

const planLengths = ["90 days", "120 days", "180 days", "270 days", "360 days"];

const appFeatures = [
  "The personal plan and what to do each day",
  "Reminders for each treatment",
  "Progress photos and before and after comparison",
  "Messages and guidance",
  "A prompt when it is time to order the next stage",
  "A repeat AI hair analysis later on",
];

const feedback = [
  {
    round: "Round 1",
    items: [
      "Header Products link should scroll to the product section.",
      "Payment should sit under the order summary on the right.",
      "Rename “Something else” to “All answers” and recommend a product.",
    ],
  },
  {
    round: "Round 2",
    items: [
      "Add a secure checkout block with card brands and support contact.",
      "Add Facebook and Instagram icons to the footer.",
      "Product cards show name and price below the photo (already done).",
    ],
  },
];

const screens = [
  {
    file: "home.png",
    title: "Home",
    alt: "Home screen with a headline about a hair system shaped around you and a button to start the free hair analysis",
  },
  {
    file: "question.png",
    title: "Question",
    alt: "Questionnaire screen asking for the main hair goal, with a progress rail and a list of answers",
  },
  {
    file: "report.png",
    title: "Report",
    alt: "Report screen titled Your personalized plan is ready, with photos of the front, top, crown, and hairline",
  },
  {
    file: "today.png",
    title: "Today",
    alt: "Today screen of the daily program app",
  },
];

const accessibility = [
  {
    icon: <LuLanguages size={20} />,
    title: "Six languages",
    description:
      "Six languages, with right-to-left layouts for Hebrew and Arabic.",
  },
  {
    icon: <LuAccessibility size={20} />,
    title: "Motion and contrast",
    description:
      "Reduced-motion fallbacks and strong text contrast throughout.",
  },
  {
    icon: <LuCircleCheck size={20} />,
    title: "Clear forms",
    description:
      "Required fields are marked, with inline errors and focus on the first error.",
  },
];

const nextSteps = [
  "Define what each questionnaire answer recommends.",
  "Have every medical claim and price checked by the client's regulatory and legal review before it goes live.",
  "Add test payment mode and coupon codes to checkout.",
  "Run usability tests with real customers and iterate.",
  "Run an accessibility check with a screen reader, the keyboard alone, and large text, including the right-to-left layouts, and fix what it finds.",
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
      className="aspect-[9/16] w-full rounded-xl md:rounded-2xl border object-cover object-top"
    />
    <figcaption className="text-left text-xs text-cream/60">
      {caption}
    </figcaption>
  </figure>
);

const Roote = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <img
          src={`${IMAGES}/roote.us.webp`}
          width={1600}
          height={900}
          alt="ROOTÉ home page shown on a desktop monitor, a laptop, a tablet, and a phone, with the headline “A personalized hair growth system for you” and a Start Free Hair Analysis button"
          className="w-full"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            ROOTÉ.US is a web app for people with hair loss: a free hair
            diagnosis, a personal report, a treatment plan with checkout, and a
            daily program app. It is available in six languages, including
            right-to-left.
          </p>
          <p className={noteText}>
            Beyond the app, I designed the bottles, the label artwork, and the
            carton for the product line.
          </p>
          <p className={noteText}>
            ROOTÉ.US is an American brand based in California, but most of its
            customers are in Israel, so the experience is built first for them:
            Hebrew and right-to-left by default for visitors from Israel, with
            English and more languages one switch away.
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
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://roote.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 white-button"
          >
            Visit ROOTÉ
            <LuExternalLink size={16} aria-hidden />
          </a>
          <a
            href="https://github.com/precioushopey/roote.us"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transparent-button"
          >
            View the code
            <LuGithub size={16} aria-hidden />
          </a>
        </div>
      </Section>

      <Section id="problem-and-goal" level={2} title="The Problem and the Goal">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <NoteWindow title="The problem" level={3}>
            <p className={noteText}>
              People with hair loss want a credible, personal plan without a
              clinic visit. Most sites feel like a quiz made to sell shampoo.
            </p>
            <p className={noteText}>
              ROOTÉ.US sells a personal solution to hair loss, not a catalog, so
              it cannot work like a regular online store.
            </p>
          </NoteWindow>
          <NoteWindow title="The goal" level={3}>
            <p className={noteText}>
              Design one journey (diagnose, explain, plan, buy, follow up) that
              feels personal and never invents medical or pricing claims.
            </p>
            <p className={noteText}>
              The customer should feel that ROOTÉ.US studied their hair, built
              a plan for them, and stays with them afterward. That is why the
              main button reads “Free hair analysis”, not “Shop now”.
            </p>
          </NoteWindow>
        </div>
      </Section>

      <ScopeAndStandards
        rows={[
          {
            label: "Scope",
            text: "The web app (analysis, report, plan, checkout, and daily program) plus bottle, label, and carton design.",
          },
          {
            label: "Still to define",
            text: "What each questionnaire answer recommends, and test payment mode and coupon codes.",
          },
          {
            label: "Standards",
            text: "Claims and prices go through the client’s regulatory and legal review before going live.",
          },
        ]}
      />

      <Section id="my-role" level={2} title="My Role">
        <NoteWindow title="My role">
          <p className={noteText}>
            I worked on this project as a UX/UI designer and front-end
            developer, and I also designed the product packaging. My
            responsibilities were:
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
          status: "Partly",
          text: "From the client brief, requirements, user flows, and stakeholder reviews. These are team findings, not user interviews.",
        }}
        define={{
          status: "Done",
          text: "Pain points, personas, problem statements, and a journey from discovery to follow-up.",
        }}
        ideate={{
          status: "To add",
          text: "Ideation work still to come, such as “How might we” questions or rapid sketches. For now: no sketches were kept, and the questionnaire, report, and checkout took shape in the requirements and the diagnosis flow.",
        }}
        prototype={{
          status: "Done",
          text: "Digital wireframes, a low-fidelity prototype, mockups, high-fidelity designs, and a built front end.",
        }}
        test={{
          status: "Partly",
          text: "Two rounds of stakeholder feedback changed the design. Tests with real customers are still to come.",
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
                  Discovery used the client brief, the project requirements and
                  user flows, and ongoing stakeholder reviews. We assumed a
                  generic quiz result would feel like a sales funnel, so results
                  must be personal and honest. Reviews showed trust cues matter
                  at checkout and every answer needs a real outcome. These are
                  team findings, not user interviews.
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

            <Section id="persona" title="Persona" trail={parts[0].title}>
              <Window
                icon={<LuUserRound size={16} />}
                title="Role-based persona"
              >
                <div id="problem-statement" className="space-y-3 p-6">
                  <div className="flex items-center gap-3 border-b pb-3">
                    <span
                      aria-hidden
                      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                    >
                      <LuUserRound size={24} />
                    </span>
                    <h4 className="font-medium text-lg">
                      The prospective customer
                    </h4>
                  </div>
                  <p className="text-xs text-cream/60">Problem statement</p>
                  <p className={cardText}>
                    A prospective customer has hair loss, and needs a credible,
                    personal plan, because generic quizzes feel untrustworthy.
                  </p>
                  <p className="text-xs text-cream/60">Context</p>
                  <p className={cardText}>
                    Men and women who arrive from Google, Instagram, Facebook,
                    TikTok, or other ads, mostly from Israel. They decide
                    quickly, so the site uses little text, short cards, and
                    visual explanations.
                  </p>
                </div>
              </Window>
            </Section>

            <UserStories
              trail={parts[0].title}
              stories={[
                {
                  who: "Prospective customer",
                  story:
                    "As a prospective customer with hair loss, I want a credible, personal plan, so that it does not feel like a generic quiz.",
                },
              ]}
            />

            <Section
              id="user-journey"
              title="User Journey"
              trail={parts[0].title}
            >
              <Window
                icon={<LuRoute size={16} />}
                title="Journey map"
                footer={`${journeyMap.length} stages`}
              >
                <ol className="divide-y divide-line/40">
                  {journeyMap.map((item, index) => (
                    <li
                      key={item.stage}
                      className="flex items-start gap-3 px-6 py-3"
                    >
                      <span
                        aria-hidden
                        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                      >
                        {index + 1}
                      </span>
                      <div className="min-w-0 flex-1 space-y-1 text-left text-sm">
                        <p className="font-medium">{item.stage}</p>
                        <p className="text-cream/70">
                          <span className="text-cream/60">Customer: </span>
                          {item.does}
                        </p>
                        <p className="text-cream/70">
                          <span className="text-cream/60">ROOTÉ: </span>
                          {item.response}
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
              id="digital-wireframes"
              title="Digital Wireframes"
              trail={parts[1].title}
            >
              <NoteWindow title="Wireframe notes">
                <p className={noteText}>
                  No paper sketches were kept. The questionnaire, report, and
                  checkout were drawn straight into digital wireframes as short
                  steps with one primary action each.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="Figma files"
                footer="The bottle and box label file, and the ROOTÉ.US web design file with its page designs and flow screens."
              >
                <img
                  src={`${IMAGES}/digital-wireframes-overview.webp`}
                  width={1600}
                  height={860}
                  loading="lazy"
                  decoding="async"
                  alt="Two Figma files side by side. On the left, ROOTÉ bottle and box label designs with bottles and label artwork. On the right, ROOTÉ.US Web Design zoomed out: tall page designs for Home, Magazine, Products, AI Section, FAQ, Hair Thinning, Gray hair, Support, Account, and Cart, and two rows of smaller flow screens underneath"
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
                  The flow runs from home to the free analysis, the report, the
                  plan, and checkout, and carries on into the app. You can try it
                  on the live site.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="goal-desktop.png"
                footer="The hair-goal step on desktop."
              >
                <img
                  src={`${IMAGES}/goal-desktop.png`}
                  width={1440}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  alt="Desktop version of the hair-goal step with a progress rail and a list of goal cards"
                  className="w-full"
                />
              </Window>
              <Window
                icon={<LuRoute size={16} />}
                title="Customer flow"
                level={4}
                footer={`${flowSteps.length} steps`}
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
                      <p className="min-w-0 flex-1 text-left text-sm">
                        <span className="font-medium">{step.title}</span>
                        <span className="text-cream/70"> · {step.detail}</span>
                      </p>
                    </li>
                  ))}
                </ol>
              </Window>
            </Section>

            <Section
              id="diagnosis-flow"
              title="Diagnosis Flow"
              trail={parts[1].title}
            >
              <NoteWindow title="Flow notes">
                <p className={noteText}>
                  The free analysis is its own focused flow, away from the main
                  site. It has to feel like a real analysis, not a marketing
                  form, so the AI step is shown on screen. The questionnaire
                  runs while the analysis does, which turns the waiting time
                  into progress.
                </p>
              </NoteWindow>
              <Window
                icon={<LuRoute size={16} />}
                title="Free analysis steps"
                level={4}
                footer={`${diagnosisSteps.length} steps`}
              >
                <ol className="divide-y divide-line/40">
                  {diagnosisSteps.map((step, index) => (
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
                        <span className="text-cream/70"> · {step.detail}</span>
                      </p>
                    </li>
                  ))}
                </ol>
              </Window>
              <Window
                icon={<LuListChecks size={16} />}
                title="Questionnaire"
                level={4}
                footer={`${questions.length} questions`}
              >
                <ul className="divide-y divide-line/40">
                  {questions.map((question, index) => (
                    <li
                      key={question}
                      className="flex items-start gap-3 px-6 py-3"
                    >
                      <span
                        aria-hidden
                        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                      >
                        {index + 1}
                      </span>
                      <p className={cardText}>{question}</p>
                    </li>
                  ))}
                </ul>
              </Window>
              <NoteWindow title="Design choice">
                <p className={noteText}>
                  Five questions, each on its own screen with about three
                  answers to pick from, in a modern, animated style. A long
                  form would feel like a chore, and a short one keeps people
                  moving until the report is ready.
                </p>
              </NoteWindow>
            </Section>

            <Section
              id="stakeholder-feedback"
              title="Stakeholder Feedback"
              trail={parts[1].title}
            >
              <NoteWindow title="Feedback notes">
                <p className={noteText}>
                  The design went through two rounds of stakeholder feedback on
                  the live prototype.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {feedback.map((round) => (
                  <Window
                    key={round.round}
                    icon={<LuListChecks size={16} />}
                    title={`${round.round} findings`}
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
                  Two changes came out of the stakeholder reviews, shown here
                  before and after.
                </p>
              </NoteWindow>
              <Window
                icon={<LuLock size={16} />}
                title="Checkout"
                level={4}
                footer="Payment moved under the order summary, and a trust block was added."
              >
                <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
                  <figure className="space-y-3">
                    <img
                      src={`${IMAGES}/checkout-before.png`}
                      width={570}
                      height={680}
                      loading="lazy"
                      decoding="async"
                      alt="Checkout before the review: the payment form with fields for name, card number, expiry, and a payment method"
                      className="mx-auto w-full max-w-72 rounded-xl border"
                    />
                    <figcaption className="text-xs text-cream/60">
                      Before review
                    </figcaption>
                  </figure>
                  <figure className="space-y-3">
                    <img
                      src={`${IMAGES}/checkout-after.png`}
                      width={568}
                      height={1090}
                      loading="lazy"
                      decoding="async"
                      alt="Checkout after the review: the order summary with the payment form under it, a Place order button, and a secure checkout block with card brands and a support contact"
                      className="mx-auto w-full max-w-72 rounded-xl border"
                    />
                    <figcaption className="text-xs text-cream/60">
                      After review
                    </figcaption>
                  </figure>
                </div>
              </Window>
              <Window
                icon={<LuMousePointerClick size={16} />}
                title="Products link"
                level={4}
                footer="The Products link now scrolls to the home page product section."
              >
                <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
                  <figure className="space-y-3">
                    <img
                      src={`${IMAGES}/products-before.png`}
                      width={780}
                      height={1360}
                      loading="lazy"
                      decoding="async"
                      alt="Home screen before the review, with the header and the hero"
                      className="mx-auto aspect-[9/16] w-full max-w-72 rounded-xl border object-cover object-top"
                    />
                    <figcaption className="text-xs text-cream/60">
                      Before review
                    </figcaption>
                  </figure>
                  <figure className="space-y-3">
                    <img
                      src={`${IMAGES}/products-after.png`}
                      width={780}
                      height={1360}
                      loading="lazy"
                      decoding="async"
                      alt="Home screen after the review, showing the personalized system section the Products link scrolls to"
                      className="mx-auto aspect-[9/16] w-full max-w-72 rounded-xl border object-cover object-top"
                    />
                    <figcaption className="text-xs text-cream/60">
                      After review
                    </figcaption>
                  </figure>
                </div>
              </Window>
            </Section>

            <Section
              id="high-fidelity-designs"
              title="High-Fidelity Designs"
              trail={parts[2].title}
            >
              <NoteWindow title="Design notes">
                <p className={noteText}>
                  The polished screens from home to the daily program. The
                  live site and the code on GitHub are linked at the top.
                </p>
              </NoteWindow>
              <Window
                icon={<LuPalette size={16} />}
                title="Design direction"
                level={4}
              >
                <p className={`p-6 ${cardText}`}>
                  Modern, premium, clean, and medical but approachable. Little
                  text, with cards, short statements, icons, animated sections,
                  and short AI videos explaining the problem, the analysis, and
                  the plan.
                </p>
              </Window>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {screens.map((screen) => (
                  <Shot
                    key={screen.file}
                    file={screen.file}
                    alt={screen.alt}
                    caption={screen.title}
                  />
                ))}
              </div>
            </Section>

            <Section
              id="report-plan-app"
              title="Report, Plan and App"
              trail={parts[2].title}
            >
              <NoteWindow title="From report to results">
                <p className={noteText}>
                  The report is emailed as a personal PDF. Its button brings the
                  customer back to the site with the plan already chosen, so
                  there is nothing to shop for: they open an account, confirm the
                  plan length, and pay. Checkout is where the app picks up.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuFileText size={16} />}
                  title="Personal report"
                  level={4}
                  footer={`${reportParts.length} parts`}
                >
                  <ol className="divide-y divide-line/40">
                    {reportParts.map((part, index) => (
                      <li
                        key={part}
                        className="flex items-start gap-3 px-6 py-3"
                      >
                        <span
                          aria-hidden
                          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                        >
                          {index + 1}
                        </span>
                        <p className={cardText}>{part}</p>
                      </li>
                    ))}
                  </ol>
                </Window>
                <div className="space-y-6">
                  <Window
                    icon={<LuCalendarDays size={16} />}
                    title="Plan length"
                    level={4}
                    footer="The report recommends one of these."
                  >
                    <ul className="flex flex-wrap gap-3 p-6">
                      {planLengths.map((length) => (
                        <li key={length} className="pill-outline text-xs">
                          {length}
                        </li>
                      ))}
                    </ul>
                  </Window>
                  <Window
                    icon={<LuSmartphone size={16} />}
                    title="After checkout: the app"
                    level={4}
                    footer={`${appFeatures.length} features`}
                  >
                    <ul className="space-y-3 p-6 text-sm leading-6">
                      {appFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <LuCircleCheck
                            size={16}
                            aria-hidden
                            className="mt-1 shrink-0 text-accent"
                          />
                          <span className="text-cream/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Window>
                </div>
              </div>
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
            <UxQualities
              trail={parts[3].title}
              usable="Every page ends in one primary action, and the plan screen shows one recommended plan with no products to choose between. Checkout shows security cues, a clear summary, and a way to get help."
              equitable="Six languages, with Hebrew and right-to-left layout by default for visitors from Israel. Reduced-motion fallbacks, strong contrast, marked required fields, and inline errors with focus on the first one."
              enjoyable="The questionnaire runs while the animated analysis works, so the wait never looks like a loading screen. Results arrive as a personal report in plain words."
              useful="It turns a hair-loss worry into a path: a free analysis, a personal report, one recommended plan, and a daily program app with progress photos."
            />

            <Section id="takeaways" title="Takeaways" trail={parts[3].title}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <NoteWindow title="Impact" level={4}>
                  <p className={noteText}>
                    A concept build for stakeholder review, now live: a complete
                    journey in six languages that stakeholders can review end
                    to end.
                  </p>
                </NoteWindow>
                <NoteWindow title="What I learned" level={4}>
                  <p className={noteText}>
                    Honesty builds trust, and small choices like where payment
                    sits change how safe a flow feels.
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

export default Roote;
