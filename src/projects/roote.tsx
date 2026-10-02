import type { ReactNode } from "react";
import {
  LuAccessibility,
  LuBadgeCheck,
  LuCircleCheck,
  LuExternalLink,
  LuGithub,
  LuImage,
  LuInfo,
  LuLanguages,
  LuListChecks,
  LuLock,
  LuMousePointerClick,
  LuRoute,
  LuSmartphone,
  LuSquare,
  LuUserRound,
} from "react-icons/lu";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { ProjectLayout } from "../components/ProjectLayout";
import {
  ImagePlaceholder,
  NoteWindow,
  Section,
  Window,
  cardText,
  noteText,
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/roote";

const facts = [
  { label: "Role", value: "UX/UI Designer and Front-End Developer" },
  { label: "Duration", value: "September 2026 to October 2026" },
  {
    label: "Languages",
    value: "Six, including right-to-left layouts for Hebrew and Arabic",
  },
  { label: "Status", value: "Concept build, no live users yet" },
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
      { id: "problem-statement", label: "Problem statements" },
      { id: "user-journey", label: "User journey maps" },
    ],
  },
  {
    number: 2,
    title: "Starting the design",
    peek: `${IMAGES}/wireframe-goal.png`,
    topics: [
      { id: "paper-wireframes", label: "Paper wireframes" },
      { id: "digital-wireframes", label: "Digital wireframes" },
      { id: "low-fidelity-prototype", label: "Low-fidelity prototype" },
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
      { id: "accessibility", label: "Accessibility" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/today.png`,
    topics: [
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
      "The primary market reads Hebrew, so the whole journey must work in six languages, including right-to-left layouts.",
  },
];

const journeySteps = [
  "Discover",
  "Analyze",
  "Report",
  "Plan",
  "Checkout",
  "Daily program",
];

const flowSteps = [
  { title: "Home", detail: "One primary action: start the free analysis" },
  {
    title: "Free analysis",
    detail: "Short questionnaire, one choice per step",
  },
  { title: "Report", detail: "A personal report built from the answers" },
  { title: "Plan", detail: "A treatment plan with products and prices" },
  { title: "Checkout", detail: "Order summary, then payment" },
];

const wireframes = [
  {
    file: "wireframe-goal.png",
    title: "Hair-goal step",
    alt: "Wireframe of the hair-goal step: a progress rail across the top and a list of goal cards, each with a title and a one-line description",
    notes: [
      "The hair-goal step offers clear choices with short descriptions.",
      "Cards with a title and one-line description are easy to scan.",
      "A progress rail shows where the user is and how much is left.",
    ],
  },
  {
    file: "wireframe-checkout.png",
    title: "Checkout",
    alt: "Wireframe of checkout: the order summary with the product, subtotal, shipping, and total, and the payment form under it ending in a Place order button",
    notes: [
      "The order summary sits beside the checkout form.",
      "The summary lists each product with photo, quantity, and price.",
      "Payment sits under the summary and ends in one Place order button.",
    ],
  },
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
  "Add test payment mode and coupon codes to checkout.",
  "Run usability tests with real customers and iterate.",
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
          src={`${IMAGES}/report-desktop.png`}
          width={1440}
          height={900}
          alt="ROOTÉ personalized plan page: the heading “Your personalized plan is ready”, a download button, and photos of the front, top, crown, and hairline"
          className="w-full rounded-xl md:rounded-2xl border"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            ROOTÉ.US is a web app for people with hair loss: a free hair
            diagnosis, a personal report, a treatment plan with checkout, and a
            daily program app. It is available in six languages, including
            right-to-left.
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
          </NoteWindow>
          <NoteWindow title="The goal" level={3}>
            <p className={noteText}>
              Design one journey (diagnose, explain, plan, buy, follow up) that
              feels personal and never invents medical or pricing claims.
            </p>
          </NoteWindow>
        </div>
      </Section>

      <Section id="my-role" level={2} title="My Role">
        <NoteWindow title="My role">
          <p className={noteText}>
            I worked on this project as a UX/UI designer and front-end
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
                </div>
              </Window>
            </Section>

            <Section
              id="user-journey"
              title="User Journey"
              trail={parts[0].title}
            >
              <Window
                icon={<LuRoute size={16} />}
                title="Journey stages"
                footer={`${journeySteps.length} stages`}
              >
                <ol className="grid grid-cols-2 gap-3 p-6 sm:grid-cols-3">
                  {journeySteps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <span
                        aria-hidden
                        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs text-accent"
                      >
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Window>
              <ImagePlaceholder>
                User journey map: discover, analyze, report, plan, checkout, and
                daily program
              </ImagePlaceholder>
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
              id="paper-wireframes"
              title="Paper Wireframes"
              trail={parts[1].title}
            >
              <NoteWindow title="Wireframe notes">
                <p className={noteText}>
                  The questionnaire, report, and checkout were sketched as short
                  steps with one primary action each.
                </p>
              </NoteWindow>
              <ImagePlaceholder>
                Photos of the paper wireframes: the questionnaire steps, the
                report layout, and checkout
              </ImagePlaceholder>
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
                    icon={<LuSmartphone size={16} />}
                    title={wireframe.title}
                    level={4}
                  >
                    <div className="space-y-3 p-6">
                      <img
                        src={`${IMAGES}/${wireframe.file}`}
                        width={780}
                        height={1360}
                        loading="lazy"
                        decoding="async"
                        alt={wireframe.alt}
                        className="mx-auto aspect-[9/16] w-full max-w-64 rounded-xl border object-cover object-top"
                      />
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
                  The flow runs from home to the free analysis, the report, the
                  plan, and checkout. The prototype link is still to be added.
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
                  prototype link is still to be added; the code is on GitHub.
                </p>
              </NoteWindow>
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
                    A concept build with no live users yet: a complete journey
                    in six languages that stakeholders can review end to end.
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
