import type { ReactNode } from "react";
import {
  LuAccessibility,
  LuCircleCheck,
  LuImage,
  LuInfo,
  LuListChecks,
  LuListTodo,
  LuRepeat,
  LuRoute,
  LuSquare,
  LuTrendingUp,
  LuTruck,
  LuUserRound,
} from "react-icons/lu";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { ProjectLayout } from "../components/ProjectLayout";
import {
  NoteWindow,
  Section,
  Window,
  cardText,
  noteText,
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/sanovida";

const facts = [
  { label: "Role", value: "UX Designer and Front-End Prototyper" },
  { label: "Duration", value: "August 2026 to September 2026" },
  { label: "Context", value: "Google UX Design Certificate" },
  { label: "Audience", value: "Spanish-speaking women in Mexico" },
  { label: "Languages", value: "Spanish and English" },
  { label: "Status", value: "Interactive prototype, no user data yet" },
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
    peek: `${IMAGES}/persona.jpg`,
    topics: [
      { id: "user-research", label: "User research" },
      { id: "persona", label: "Personas" },
      { id: "problem-statement", label: "Problem statements" },
      { id: "user-journey", label: "User journey maps" },
    ],
  },
  {
    number: 2,
    title: "Starting the design",
    peek: `${IMAGES}/screen-map.jpg`,
    topics: [
      { id: "flows-and-screen-map", label: "Flows and screen map" },
      { id: "digital-wireframes", label: "Digital wireframes" },
      { id: "low-fidelity-prototype", label: "Low-fidelity prototype" },
      { id: "walkthrough-findings", label: "Walkthrough findings" },
    ],
  },
  {
    number: 3,
    title: "Refining the design",
    peek: `${IMAGES}/plan-mockup.jpg`,
    topics: [
      { id: "mockups", label: "Mockups" },
      { id: "high-fidelity-designs", label: "High-fidelity designs" },
      { id: "accessibility", label: "Accessibility" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/home-mockup.jpg`,
    topics: [
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "Journey and flow design",
  "Information architecture",
  "UX copy in Spanish and English",
  "Design tokens and a UI kit",
  "An interactive React prototype",
  "A written product specification",
];

const painPoints = [
  {
    icon: <LuTruck size={20} />,
    title: "The shipping wait",
    problem:
      "Days pass with nothing to do and interest fades. A Day 0 home with a delivery tracker and “while you wait” actions fills the gap.",
  },
  {
    icon: <LuRepeat size={20} />,
    title: "Repeated questions",
    problem:
      "Re-asking quiz and checkout answers feels like friction. Onboarding keeps only the questions not yet asked.",
  },
  {
    icon: <LuListTodo size={20} />,
    title: "Unclear routine",
    problem:
      "Meals, workouts, and five products are easy to lose track of. A Morning, Afternoon, and Evening stepper shows what is next.",
  },
  {
    icon: <LuTrendingUp size={20} />,
    title: "Invisible progress",
    problem:
      "Results take weeks. Trend charts, a calendar, and an adherence score keep motivation up, and Sano AI nudges when it dips.",
  },
];

const journeyStages = [
  { title: "Discover", detail: "Browses the plan on the landing page" },
  { title: "Quiz", detail: "Answers six questions" },
  { title: "Checkout", detail: "Pays and enters the delivery address" },
  { title: "Wait", detail: "The kit ships: the lowest point" },
  { title: "Daily", detail: "Follows the 21-day routine" },
  { title: "Day 21", detail: "Reviews results, then repurchases or shares" },
];

const wireframes = [
  {
    file: "wireframe-home.jpg",
    title: "Home",
    alt: "Home wireframe: a greeting, a plan card with an adherence ring, an AI nudge banner, a Morning, Afternoon, and Evening stepper, and a task checklist",
    goal: "Goal: answer “what do I do now?” in one glance.",
    notes: [
      "The adherence ring is one glanceable score of progress so far.",
      "The daily stepper groups tasks Morning, Afternoon, Evening.",
    ],
  },
  {
    file: "wireframe-plan.jpg",
    title: "Plan",
    alt: "Plan wireframe: tab pills for Nutrition, Workouts, Routine, and Goals, daily stats, a water goal, and meal cards",
    goal: "Goal: make food, workouts, and products easy to browse.",
    notes: [
      "Tab pills split Nutrition, Workouts, Routine, and Goals.",
      "Meal cards have “mark eaten” and sit under a daily water goal.",
    ],
  },
];

const walkthroughs = [
  {
    round: "Round 1",
    items: [
      "Quiz “Next” button scrolled off-screen on mobile.",
      "“WhatsApp” tab opens an in-app screen, not WhatsApp.",
      "Settings accepts invalid emails and numbers.",
    ],
  },
  {
    round: "Round 2",
    items: [
      "Onboarding repeated the landing quiz and checkout.",
      "Home checklist toggles were not tied to real actions.",
      "First-time users got no explanation of Home.",
    ],
  },
];

const comparisons = [
  {
    title: "Home",
    before: "wireframe-home.jpg",
    after: "home-mockup.jpg",
    beforeAlt: "Home wireframe in grey boxes",
    afterAlt:
      "Final Home mockup with a green and pink gradient, an adherence ring at 83 percent, a daily stepper, and a task checklist",
    note: "The Home structure held. Visual identity was layered on: a green and pink gradient, Lora headings, and the adherence ring.",
  },
  {
    title: "Plan",
    before: "wireframe-plan.jpg",
    after: "plan-mockup.jpg",
    beforeAlt: "Plan wireframe in grey boxes",
    afterAlt:
      "Final Plan mockup with Nutrition, Workouts, and Routine tabs, daily stats, a water goal, and meal cards with food photos",
    note: "The Plan structure held: tab pills, daily stats, water goal, and meal cards, now with food imagery and clear states.",
  },
];

const gallery = [
  {
    file: "home-mockup.jpg",
    title: "Home",
    alt: "Home screen with the adherence ring, a daily stepper, and a task checklist",
  },
  {
    file: "plan-mockup.jpg",
    title: "Plan",
    alt: "Plan screen with Nutrition tab, daily stats, a water goal, and meal cards",
  },
  {
    file: "progress-mockup.jpg",
    title: "Progress",
    alt: "Progress screen with the adherence ring, a weekly progress chart, an AI insight, and weight and energy cards",
  },
];

const accessibility = [
  {
    icon: <LuAccessibility size={20} />,
    title: "Labels",
    description:
      "Icon-only buttons (bell, tabs, back, AI coach) have aria-labels, and form fields have visible labels.",
  },
  {
    icon: <LuCircleCheck size={20} />,
    title: "Explained locks",
    description:
      "Disabled buttons and “available at 6 PM” labels explain why an action is locked instead of failing silently.",
  },
  {
    icon: <LuInfo size={20} />,
    title: "Type, themes, language",
    description:
      "16px base type, light and dark themes, and full Spanish and English. A formal contrast audit is still pending.",
  },
];

const nextSteps = [
  "Usability-test with 5 to 8 target users in Mexico to validate onboarding, the daily stepper, and the Day 21 flow.",
  "Run an accessibility audit (contrast, focus order, screen reader) and fix known gaps: input validation and the WhatsApp tab.",
  "Build for production with a real backend, auth, payments, email activation, and notifications, porting from the spec.",
];

const BeforeAfter = ({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) => (
  <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
    {[
      { file: before, alt: beforeAlt, label: "Before: wireframe" },
      { file: after, alt: afterAlt, label: "After: final mockup" },
    ].map((item) => (
      <figure key={item.label} className="space-y-3">
        <img
          src={`${IMAGES}/${item.file}`}
          width={530}
          height={866}
          loading="lazy"
          decoding="async"
          alt={item.alt}
          className="mx-auto w-full max-w-64 rounded-xl border"
        />
        <figcaption className="text-xs text-cream/60">{item.label}</figcaption>
      </figure>
    ))}
  </div>
);

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
      width={505}
      height={1024}
      loading="lazy"
      decoding="async"
      alt={alt}
      className="w-full rounded-xl md:rounded-2xl border"
    />
    <figcaption className="text-left text-xs text-cream/60">
      {caption}
    </figcaption>
  </figure>
);

const SanoVida = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <img
          src={`${IMAGES}/hero.jpg`}
          width={1600}
          height={900}
          alt="Three SanoVida app screens: Home with an adherence ring, Plan with meal cards, and Progress with a weekly chart"
          className="w-full rounded-xl md:rounded-2xl border"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            SanoVida is a mobile companion app for a 21-day health, fitness, and
            routine program. It guides Spanish-speaking women in Mexico from
            quiz and checkout through daily habits, tracking, and AI coaching. I
            made it as a project for the Google UX Design Certificate.
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

      <Section id="problem-and-goal" level={2} title="The Problem and the Goal">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <NoteWindow title="The problem" level={3}>
            <p className={noteText}>
              Customers of a 21-day wellness kit had no guided companion:
              nothing to do while the kit ships, no daily structure once it
              arrives, and no visible progress or coaching.
            </p>
          </NoteWindow>
          <NoteWindow title="The goal" level={3}>
            <p className={noteText}>
              Design one end-to-end journey (quiz, plan, 21-day program,
              repurchase) that keeps customers engaged, builds daily habits, and
              makes progress visible.
            </p>
          </NoteWindow>
        </div>
      </Section>

      <Section id="my-role" level={2} title="My Role">
        <NoteWindow title="My role">
          <p className={noteText}>
            I worked on this project as a UX designer and front-end prototyper
            for the SanoVida App, from flows and UX copy to a working
            interactive prototype. My responsibilities were:
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
                  Research was desk-based, not participant interviews. A
                  stakeholder customer-journey document (ad, landing page, quiz,
                  checkout, app) and the 21-day program defined the audience:
                  Spanish-speaking women in Mexico. I assumed the app had to
                  collect everything itself. The journey showed the landing quiz
                  and checkout already capture most data, so in-app onboarding
                  was cut to four short steps, and the wait while the kit ships
                  became a design priority.
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
                <div className="space-y-3 p-6">
                  <img
                    src={`${IMAGES}/persona.jpg`}
                    width={1152}
                    height={652}
                    loading="lazy"
                    decoding="async"
                    alt="Persona card for Ana Hernández, 32, Mexico City, Spanish-speaking, starting her first structured wellness program, with her goal, struggles, and needs"
                    className="w-full rounded-xl border"
                  />
                  <div id="problem-statement" className="space-y-3 pt-3">
                    <p className="text-xs text-cream/60">Problem statement</p>
                    <p className={cardText}>
                      Ana is a Spanish-speaking woman starting her first
                      structured wellness program who needs a simple daily
                      routine and visible proof of progress, because without
                      them her motivation fades before results appear.
                    </p>
                  </div>
                </div>
              </Window>
            </Section>

            <Section
              id="user-journey"
              title="User Journey"
              trail={parts[0].title}
            >
              <NoteWindow title="Journey notes">
                <p className={noteText}>
                  The goal is to keep Ana engaged at every handoff. The lowest
                  point is the shipping wait, so Day 0 gets its own home.
                </p>
              </NoteWindow>
              <Window
                icon={<LuRoute size={16} />}
                title="Ana’s journey"
                level={4}
                footer={`${journeyStages.length} stages`}
              >
                <div className="space-y-3 p-6">
                  <img
                    src={`${IMAGES}/journey.jpg`}
                    width={1024}
                    height={922}
                    loading="lazy"
                    decoding="async"
                    alt="Ana’s journey map across six stages: discover, quiz, checkout, wait, daily, and Day 21, with an emotion line that dips lowest at the wait, and what she does, feels, and the design opportunity at each stage"
                    className="w-full rounded-xl border"
                  />
                  <ol className="divide-y divide-line/40">
                    {journeyStages.map((stage, index) => (
                      <li
                        key={stage.title}
                        className="flex items-center gap-3 py-3"
                      >
                        <span
                          aria-hidden
                          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                        >
                          {index + 1}
                        </span>
                        <p className="min-w-0 flex-1 text-left text-sm">
                          <span className="font-medium">{stage.title}</span>
                          <span className="text-cream/70">
                            {" "}
                            · {stage.detail}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
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
              id="flows-and-screen-map"
              title="Flows and Screen Map"
              trail={parts[1].title}
            >
              <NoteWindow title="Structure notes">
                <p className={noteText}>
                  Before pixels, I mapped the funnel and the app as flows: one
                  linear path, a 5-tab core, and no duplicate questions.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="screen-map.jpg"
                footer="The marketing site, onboarding, and the five tabs of the 21-day program."
              >
                <img
                  src={`${IMAGES}/screen-map.jpg`}
                  width={1024}
                  height={922}
                  loading="lazy"
                  decoding="async"
                  alt="Screen map: system 1, the marketing site (landing, quiz, plan reveal, consult, checkout); system 2 onboarding in four questions; the 21-day program in five tabs (Inicio, Plan, Progreso, WhatsApp, Perfil); and the end of program (Day 21 summary, testimony, repurchase)"
                  className="w-full"
                />
              </Window>
            </Section>

            <Section
              id="digital-wireframes"
              title="Digital Wireframes"
              trail={parts[1].title}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {wireframes.map((wireframe) => (
                  <Window
                    key={wireframe.file}
                    icon={<LuImage size={16} />}
                    title={wireframe.title}
                    level={4}
                  >
                    <div className="space-y-3 p-6">
                      <img
                        src={`${IMAGES}/${wireframe.file}`}
                        width={530}
                        height={866}
                        loading="lazy"
                        decoding="async"
                        alt={wireframe.alt}
                        className="mx-auto w-full max-w-64 rounded-xl border"
                      />
                      <p className={cardText}>{wireframe.goal}</p>
                      <ul className="space-y-1.5">
                        {wireframe.notes.map((note) => (
                          <li
                            key={note}
                            className="flex items-start gap-3 text-left text-xs leading-5 text-cream/70"
                          >
                            <LuCircleCheck
                              size={14}
                              aria-hidden
                              className="mt-0.5 shrink-0 text-accent"
                            />
                            {note}
                          </li>
                        ))}
                      </ul>
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
                  A clickable flow that runs locally: splash, Sano AI intro,
                  profile, habits, health check, analyzing, plan reveal, and the
                  Day 0 home.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="lowfi-prototype.jpg"
                footer="The onboarding questions in the clickable prototype."
              >
                <img
                  src={`${IMAGES}/lowfi-prototype.jpg`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  alt="A phone tilted on its side showing the onboarding question “Un poco más sobre tu estilo de vida” over a green and pink gradient"
                  className="w-full"
                />
              </Window>
            </Section>

            <Section
              id="walkthrough-findings"
              title="Walkthrough Findings"
              trail={parts[1].title}
            >
              <NoteWindow title="Findings notes">
                <p className={noteText}>
                  No participant sessions were run. These findings come from two
                  rounds of internal walkthroughs of the clickable prototype.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {walkthroughs.map((round) => (
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
              {comparisons.map((comparison) => (
                <Window
                  key={comparison.title}
                  icon={<LuImage size={16} />}
                  title={comparison.title}
                  level={4}
                  footer={comparison.note}
                >
                  <BeforeAfter
                    before={comparison.before}
                    after={comparison.after}
                    beforeAlt={comparison.beforeAlt}
                    afterAlt={comparison.afterAlt}
                  />
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
                  The prototype runs locally: one route holds the landing page
                  and quiz, and another holds the 21-day app.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {gallery.map((screen) => (
                  <Shot
                    key={screen.title}
                    file={screen.file}
                    alt={screen.alt}
                    caption={screen.title}
                  />
                ))}
              </div>
              <Window
                icon={<LuImage size={16} />}
                title="landing-hero.jpg"
                footer="Hero image from the landing page and quiz."
              >
                <img
                  src={`${IMAGES}/landing-hero.jpg`}
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                  alt="A smiling woman in a green sports top holding a water bottle in front of palm trees and the sea"
                  className="w-full"
                />
              </Window>
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
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <NoteWindow title="Impact" level={4}>
                  <p className={noteText}>
                    There is no user data yet; this is a prototype. The result
                    is a clickable end-to-end journey plus a specification (50
                    requirements, 27 user stories, 19 business rules) that gives
                    stakeholders and developers one shared reference.
                  </p>
                </NoteWindow>
                <NoteWindow title="What I learned" level={4}>
                  <p className={noteText}>
                    The handoff between the marketing site and the app mattered
                    more than any single screen. Tying every AI nudge to real
                    data kept the product honest. Next time I would test with
                    real users sooner.
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

export default SanoVida;
