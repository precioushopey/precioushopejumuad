import type { ReactNode } from "react";
import {
  LuAccessibility,
  LuBookOpen,
  LuCircleCheck,
  LuExternalLink,
  LuImage,
  LuInfo,
  LuKeyboard,
  LuListChecks,
  LuRoute,
  LuSquare,
  LuStore,
  LuTriangleAlert,
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

const IMAGES = "/assets/images/projects/wecare";

const facts = [
  { label: "Role", value: "UX Designer and Front-End Developer, TLH Team" },
  { label: "Duration", value: "August 2026 to October 2026 (ongoing)" },
  { label: "Market", value: "Germany and Austria" },
  { label: "Languages", value: "German and English" },
  { label: "Tools", value: "React, Vite, Tailwind CSS, shadcn/ui" },
  {
    label: "Status",
    value: "Private preview and local only for now",
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
    peek: `${IMAGES}/ia.jpg`,
    topics: [
      { id: "information-architecture", label: "Information architecture" },
      { id: "digital-screens", label: "Digital screens" },
      { id: "working-prototype", label: "Working prototype" },
      { id: "feedback", label: "Audit and stakeholder feedback" },
    ],
  },
  {
    number: 3,
    title: "Refining the design",
    peek: `${IMAGES}/match.jpg`,
    topics: [
      { id: "mockups", label: "Mockups" },
      { id: "high-fidelity-designs", label: "High-fidelity designs" },
      { id: "accessibility", label: "Accessibility" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/home-mobile.jpg`,
    topics: [
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "Information architecture",
  "German and English copy",
  "The assessment and checkout flows",
  "The design system",
  "Accessibility",
  "Iterating on stakeholder feedback",
];

const painPoints = [
  {
    icon: <LuStore size={20} />,
    title: "Shop-like feel",
    problem:
      "Cannabis sites open with strains and THC. WeCare leads with four everyday problems and keeps product photos until after the assessment.",
  },
  {
    icon: <LuBookOpen size={20} />,
    title: "Jargon",
    problem:
      "Format and strength terms confuse first-timers, so options carry plain hints and new users are never led with the stronger option.",
  },
  {
    icon: <LuRoute size={20} />,
    title: "Unclear steps",
    problem:
      "People did not know a doctor reviews first. The thank-you page, review notes, and orders list now say what happens next.",
  },
  {
    icon: <LuTriangleAlert size={20} />,
    title: "Hidden errors",
    problem:
      "Checkout errors were small and far from the button. A summary above the submit button and bold inline messages fix that.",
  },
];

const journeySteps = [
  { title: "Homepage or problem page", detail: "Picks one of four problems" },
  { title: "Before you begin", detail: "Confirms 18+, reads four short notes" },
  {
    title: "Six questions",
    detail: "Taps through, auto-advance, 60 to 90 seconds",
  },
  { title: "Final checks", detail: "Safety questions go to the doctor" },
  { title: "Your match", detail: "One recommended solution, one alternative" },
  { title: "Checkout", detail: "Phone code by SMS, address, summary" },
  { title: "Thank you", detail: "Order summary and shipping cut-off" },
  { title: "Track your order", detail: "Phone code sign-in, no password" },
];

const screens = [
  {
    file: "assessment.jpg",
    title: "Digital screens: assessment",
    alt: "Assessment screen, question 4 of 6, asking whether the person has tried anything before, with large answer tiles and a progress line at the top",
    intro:
      "One question per screen, large tap targets, and auto-advance. Designed from the finding that jargon puts first-timers off.",
    notes: [
      "A progress line and “Question 4 of 6” keep it short.",
      "Hints under options explain the jargon.",
    ],
  },
  {
    file: "match.jpg",
    title: "Digital screens: your match",
    alt: "Match screen with the recommended solution Night Now, a short description, an ingredients link, amount options, and an Add to cart button",
    intro:
      "One dominant recommendation, a doctor-review note, and the delivery line, so the next step is never a surprise.",
    notes: [
      "The delivery line states the shipping cut-off.",
      "The alternative option sits below, not beside.",
    ],
  },
];

const feedback = [
  {
    round: "Round 1: UX audit (September 2026)",
    items: [
      "Checkout errors hard to see: summary added.",
      "Thank-you page confusing: rewritten.",
    ],
  },
  {
    round: "Round 2: stakeholder reviews (September to October 2026)",
    items: [
      "In-app cancel button dropped: email instead.",
      "Score pill read as a fake result: removed.",
      "Pre-steps broke the “six questions” promise: reframed.",
      "Device and accessibility checks still to do.",
    ],
  },
];

const gallery = [
  {
    file: "home-mobile.jpg",
    title: "Home",
    alt: "Mobile home screen with the headline Find the right support for Sleep, a short description, and a Start Free Assessment button",
  },
  {
    file: "assessment.jpg",
    title: "Assessment",
    alt: "Mobile assessment screen asking whether the person has tried anything before",
  },
  {
    file: "match.jpg",
    title: "Your match",
    alt: "Mobile match screen with the recommended solution and amount options",
  },
  {
    file: "checkout-mobile.jpg",
    title: "Checkout",
    alt: "Mobile checkout screen asking to verify a phone number, with a mobile number field and a Send code button",
  },
];

const accessibility = [
  {
    icon: <LuKeyboard size={20} />,
    title: "Keyboard and screen readers",
    description:
      "Real radio and checkbox inputs sit behind large tiles, and a skip link jumps to the main content.",
  },
  {
    icon: <LuTriangleAlert size={20} />,
    title: "Clear errors",
    description:
      "Invalid fields use aria-invalid and an icon plus text, and a summary links to each problem.",
  },
  {
    icon: <LuAccessibility size={20} />,
    title: "Contrast and motion",
    description:
      "Option circles keep 3:1 contrast, and entrance animation is off under reduced motion.",
  },
];

const nextSteps = [
  "Run moderated usability tests with first-time users on phones, plus a real-device and accessibility pass.",
  "Connect real services: SMS verification, payment, pharmacy prices and certificates, and order emails.",
  "Have counsel review claims, legal texts, and delivery promises before launch.",
];

// A phone-sized screenshot with a caption.
const Shot = ({
  file,
  alt,
  caption,
  className = "",
}: {
  file: string;
  alt: string;
  caption: ReactNode;
  className?: string;
}) => (
  <figure className="space-y-3">
    <img
      src={`${IMAGES}/${file}`}
      width={780}
      height={1400}
      loading="lazy"
      decoding="async"
      alt={alt}
      className={`aspect-[9/16] w-full rounded-xl md:rounded-2xl border object-cover object-top ${className}`}
    />
    <figcaption className="text-left text-xs text-cream/60">
      {caption}
    </figcaption>
  </figure>
);

const WeCare = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <img
          src={`${IMAGES}/home-desktop.jpg`}
          width={1600}
          height={950}
          alt="WeCare home page: a navigation bar with four problems, the headline “Find the right support for Sleep”, a Start Free Assessment button, and a photo of a woman with a tablet"
          className="w-full rounded-xl md:rounded-2xl border"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            WeCare is a web platform for Germany and Austria that helps adults
            find support for sleep, pain, stress and anxiety, or migraine. A
            short assessment leads to one recommended solution, a doctor’s
            review, and delivery.
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
            href="https://www.wecare360.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 white-button"
          >
            Visit WeCare
            <LuExternalLink size={16} aria-hidden />
          </a>
        </div>
      </Section>

      <Section id="problem-and-goal" level={2} title="The Problem and the Goal">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <NoteWindow title="The problem" level={3}>
            <p className={noteText}>
              Medical cannabis sites feel like shops and lead with strains and
              THC. People who want help with sleep, pain, stress, or migraine
              get lost before they reach a doctor.
            </p>
          </NoteWindow>
          <NoteWindow title="The goal" level={3}>
            <p className={noteText}>
              Lead with the problem, not the product: six short questions, one
              clear match, and a doctor’s review before anything is dispensed.
            </p>
          </NoteWindow>
        </div>
      </Section>

      <Section id="my-role" level={2} title="My Role">
        <NoteWindow title="My role">
          <p className={noteText}>
            I worked on this project as a UX designer and front-end developer on
            the TLH Team. My responsibilities were:
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
                  We did not run interviews. Research was desk-based: a teardown
                  of a competing service (quick-green), a UX audit of our own
                  build, and repeated walkthroughs with the product owner and
                  partners. We assumed visitors would want to browse products
                  first. The research showed they need a problem-first path,
                  plain language, and a visible doctor step.
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
                    width={1600}
                    height={901}
                    loading="lazy"
                    decoding="async"
                    alt="Persona card for the prospective patient: an adult in Germany or Austria who wants to find out what could help and whether they qualify, with goals, frustrations, and a scenario"
                    className="w-full rounded-xl border"
                  />
                  <div id="problem-statement" className="space-y-3 pt-3">
                    <p className="text-xs text-cream/60">Problem statement</p>
                    <p className={cardText}>
                      An adult in Germany or Austria needs a fast way to see
                      what could help, because they know the problem but not the
                      product.
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
                  The goal is to get from a problem to a placed order in
                  minutes. Each stage has one job, and the doctor step stays
                  visible.
                </p>
              </NoteWindow>
              <Window
                icon={<LuRoute size={16} />}
                title="Journey: from problem to order"
                level={4}
                footer={`${journeySteps.length} stages`}
              >
                <ol className="divide-y divide-line/40">
                  {journeySteps.map((step, index) => (
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
          </div>
        </FolderSection>

        <FolderSection
          label={`${parts[1].number}. ${parts[1].title}`}
          count={parts[1].topics.length}
          peek={parts[1].peek}
        >
          <div className="space-y-15">
            <Section
              id="information-architecture"
              title="Information Architecture"
              trail={parts[1].title}
            >
              <NoteWindow title="Structure notes">
                <p className={noteText}>
                  No paper sketches were kept. The first structure came from the
                  written spec: four problems in the navigation, a guided funnel
                  in its own shell, and the doctor layer behind the assessment.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="ia.jpg"
                footer="Primary navigation, the guided funnel, checkout, and the footer."
              >
                <img
                  src={`${IMAGES}/ia.jpg`}
                  width={1020}
                  height={920}
                  loading="lazy"
                  decoding="async"
                  alt="Information architecture: a primary navigation with the four problems, a homepage, four problem pages, a guided funnel in its own shell, checkout, a my-area section, a footer-only section, and a note that no shop or strain catalogue is in the navigation"
                  className="w-full"
                />
              </Window>
            </Section>

            <Section
              id="digital-screens"
              title="Digital Screens"
              trail={parts[1].title}
            >
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
                        width={780}
                        height={1400}
                        loading="lazy"
                        decoding="async"
                        alt={screen.alt}
                        className="mx-auto aspect-[9/16] w-full max-w-64 rounded-xl border object-cover object-top"
                      />
                      <p className={cardText}>{screen.intro}</p>
                      <ul className="space-y-1.5">
                        {screen.notes.map((note) => (
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
              id="working-prototype"
              title="Working Prototype"
              trail={parts[1].title}
            >
              <NoteWindow title="Prototype notes">
                <p className={noteText}>
                  The flow runs as a working React app: homepage, assessment,
                  match, checkout, and thank you. It is a private preview and
                  runs locally for now.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="checkout-desktop.jpg"
                footer="Checkout on desktop: phone verification, shipping address, and the order summary."
              >
                <img
                  src={`${IMAGES}/checkout-desktop.jpg`}
                  width={1600}
                  height={1075}
                  loading="lazy"
                  decoding="async"
                  alt="Desktop checkout: a progress bar with Questions and Your match done, a phone number verification step, a shipping address form, and an order summary with the product, subtotal, and total"
                  className="w-full"
                />
              </Window>
            </Section>

            <Section
              id="feedback"
              title="Audit and Stakeholder Feedback"
              trail={parts[1].title}
            >
              <NoteWindow title="Feedback notes">
                <p className={noteText}>
                  No moderated usability sessions were run yet. Findings come
                  from a UX audit (September 2026) and stakeholder walkthroughs
                  (September to October 2026).
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {feedback.map((round) => (
                  <Window
                    key={round.round}
                    icon={<LuListChecks size={16} />}
                    title={round.round}
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
                  Before: one long checkbox with a draft note. After: a fifth
                  note for the platform terms and a short, larger confirmation,
                  as the product owner asked.
                </p>
              </NoteWindow>
              <Window
                icon={<LuListChecks size={16} />}
                title="Consent step"
                level={4}
                footer="One long checkbox became a fifth note and a short confirmation."
              >
                <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
                  <figure className="space-y-3">
                    <img
                      src={`${IMAGES}/consent-before.jpg`}
                      width={780}
                      height={1560}
                      loading="lazy"
                      decoding="async"
                      alt="Consent step before the review: four notes and one long checkbox about terms of service and a draft privacy policy"
                      className="mx-auto w-full max-w-72 rounded-xl border"
                    />
                    <figcaption className="text-xs text-cream/60">
                      Before the review
                    </figcaption>
                  </figure>
                  <figure className="space-y-3">
                    <img
                      src={`${IMAGES}/consent-after.jpg`}
                      width={780}
                      height={1560}
                      loading="lazy"
                      decoding="async"
                      alt="Consent step after the review: a fifth note about the platform terms and a short, larger confirmation checkbox"
                      className="mx-auto w-full max-w-72 rounded-xl border"
                    />
                    <figcaption className="text-xs text-cream/60">
                      After the review
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
                  A working React app (Vite, Tailwind, shadcn/ui) in German and
                  English. It is a private preview and runs locally for now.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {gallery.map((screen) => (
                  <Shot
                    key={screen.title}
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
                    No usage data yet. A stakeholder reviewing the live preview
                    wrote “Thank you page looks good now! well done” and called
                    the orders list “very clean and clear”.
                  </p>
                </NoteWindow>
                <NoteWindow title="What I learned" level={4}>
                  <p className={noteText}>
                    Problem-first beats product-first. Honest placeholders, with
                    no invented prices or claims, build trust. Legal and doctor
                    steps need design, not just copy.
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

export default WeCare;
