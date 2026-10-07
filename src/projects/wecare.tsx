import type { ReactNode } from "react";
import {
  LuAccessibility,
  LuBookOpen,
  LuCircleCheck,
  LuCircleX,
  LuExternalLink,
  LuImage,
  LuInfo,
  LuKeyboard,
  LuLayoutDashboard,
  LuListChecks,
  LuPalette,
  LuRefreshCw,
  LuRoute,
  LuSmartphone,
  LuShieldCheck,
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
  ProcessStrip,
  ScopeAndStandards,
  UserStories,
  UxQualities,
  noteText,
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/wecare";

const facts = [
  { label: "Role", value: "UX Designer and Front-End Developer, TLH Team" },
  { label: "Duration", value: "August 2026 to October 2026 (ongoing)" },
  { label: "Market", value: "Germany and Austria" },
  { label: "Languages", value: "German and English" },
  {
    label: "Tools",
    value: "Figma, React, Vite, Tailwind CSS, shadcn/ui, Claude Code",
  },
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
    title: "Project overview",
    peek: `${IMAGES}/cover.png`,
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
    peek: `${IMAGES}/persona.jpg`,
    topics: [
      { id: "user-research", label: "User research" },
      { id: "persona", label: "Personas" },
      { id: "user-stories", label: "User stories" },
      { id: "user-journey", label: "User journey maps" },
    ],
  },
  {
    number: 3,
    title: "Design",
    peek: `${IMAGES}/match.jpg`,
    topics: [
      { id: "information-architecture", label: "Information architecture" },
      { id: "problem-pages", label: "Problem pages" },
      { id: "recommendation-logic", label: "Recommendation logic" },
      { id: "digital-screens", label: "Digital screens" },
      { id: "working-prototype", label: "Working prototype" },
      { id: "feedback", label: "Audit and stakeholder feedback" },
      { id: "mockups", label: "Mockups" },
      { id: "high-fidelity-designs", label: "High-fidelity designs" },
      { id: "wording-and-trust", label: "Wording and trust" },
      { id: "follow-up", label: "Dashboard and follow-up" },
      { id: "accessibility", label: "Accessibility" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/home-mobile.jpg`,
    topics: [
      { id: "ux-qualities", label: "Good UX check" },
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
  {
    title: "Follow-up",
    detail:
      "Planned: a check-in after 14 to 21 days leads to a reorder or a new match",
  },
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
  {
    icon: <LuSmartphone size={20} />,
    title: "Context of use",
    description:
      "Phone-first for first-time buyers in Germany and Austria, in German and English, with a phone-code sign-in so there is no password to remember.",
  },
];

const nextSteps = [
  "Run moderated usability tests with first-time users on phones, plus a real-device and accessibility pass.",
  "Connect real services: SMS verification, payment, pharmacy prices and certificates, and order emails.",
  "Build the follow-up check-in and the dashboard, then test the repeat-order path.",
  "Have counsel review claims, legal texts, and delivery promises before launch.",
];

const problemPageParts = [
  "Hero: a question about the problem and one assessment button",
  "A short explanation in plain words",
  "Common situations people recognise",
  "How WeCare helps, in four steps",
  "Products only after the assessment, never as the main focus",
];

const matchRules = [
  "Each problem has one main match and one secondary option.",
  "A stronger answer or earlier experience can move the secondary option up to a stronger one.",
  "New users are led with the gentlest format. Stronger formats are never the first recommendation.",
  "Items that are not for a health problem, like lifestyle formats and accessories, stay out of the match.",
];

const productRoles = [
  {
    role: "Main solutions",
    detail: "Oils, shown as the match after the assessment",
  },
  {
    role: "Advanced formats",
    detail: "Only for experienced users, after the assessment",
  },
  { role: "Lifestyle formats", detail: "Not tied to any of the four problems" },
  {
    role: "Accessories",
    detail: "Offered after checkout, never as a solution",
  },
];

const sayWords = [
  "“Your recommended solution is ready”",
  "“Body comfort”, “daily balance”, “head tension support”",
  "“Continue” or “Check availability”",
  "“This does not replace medical advice”",
];

const avoidWords = [
  "“You are approved for treatment”",
  "“Cure”, “migraine treatment”, or “treats anxiety”",
  "“Buy cannabis”, “Order CBD now”, “Get treatment now”",
  "Strong medical claims of any kind",
];

const trustItems = [
  "A lab-test page for each product: CBD, CBG, CBN, and THC levels, batch number, test date, and safety testing",
  "Nine legal and trust pages: terms, privacy, cookies, imprint, product disclaimer, shipping, refunds, contact, and lab tests",
  "A required checkbox that the product is not meant to diagnose, treat, cure, or prevent disease",
];

const dashboardMenu = [
  "My assessment",
  "My recommendation",
  "My orders",
  "Follow-up",
  "Support",
  "Profile",
];

const followUpAnswers = [
  "Good",
  "I want something stronger",
  "I want something lighter",
  "I want to try another format",
  "I need support",
];

const followUpOutcomes = [
  "Reorder the same product",
  "Try the secondary recommendation",
  "Retake the assessment",
  "Contact support",
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
          src={`${IMAGES}/wecare.webp`}
          width={1600}
          height={900}
          alt="WeCare home page shown on a desktop monitor, a laptop, a tablet, and a phone, with the headline “Find the right support for Stress & Anxiety”, a Start Free Assessment button, and a photo of a woman with a tablet"
          className="w-full"
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
                    Medical cannabis sites feel like shops and lead with strains
                    and THC. People who want help with sleep, pain, stress, or
                    migraine get lost before they reach a doctor.
                  </p>
                </NoteWindow>
                <NoteWindow title="The goal" level={3}>
                  <p className={noteText}>
                    Lead with the problem, not the product: six short questions,
                    one clear match, and a doctor’s review before anything is
                    dispensed.
                  </p>
                  <p className={noteText}>
                    The path is problem, short assessment, matched solution,
                    product or support, then follow-up. It should never feel
                    like a cannabis shop, a product catalogue, or a heavy
                    medical system.
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
                  text: "The assessment, match, checkout, and order tracking, with follow-up planned.",
                },
                {
                  label: "Not connected yet",
                  text: "SMS verification, payment, pharmacy prices and certificates, and order emails.",
                },
                {
                  label: "Standards",
                  text: "Careful wording with no medical claims, nine legal and trust pages, and counsel review before launch.",
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
                  I worked on this project as a UX designer and front-end
                  developer on the TLH Team. My responsibilities were:
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
                text: "Desk-based, no interviews: a teardown of a competing service, a look at digital healthcare platforms, and walkthroughs with the product owner and partners.",
              }}
              define={{
                status: "Done",
                text: "Four everyday problems, a persona, problem statements, and a journey from homepage to follow-up.",
              }}
              ideate={{
                status: "To add",
                text: "Ideation work still to come, such as “How might we” questions or rapid sketches. For now: no sketches were kept, and ideas took shape in the written spec, the information architecture, and the recommendation rules.",
              }}
              prototype={{
                status: "Done",
                text: "A working prototype, mockups, and high-fidelity designs for phone and desktop.",
              }}
              test={{
                status: "Partly",
                text: "A UX audit and stakeholder walkthroughs led to changes. Moderated usability tests are still to come.",
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
                  We did not run interviews. Research was desk-based: a teardown
                  of a competing service (quick-green), a look at how
                  established digital healthcare platforms lead with health
                  problems before products, a UX audit of our own build, and
                  repeated walkthroughs with the product owner and partners. We
                  assumed visitors would want to browse products first. The
                  research showed they need a problem-first path, plain
                  language, and a visible doctor step.
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
              id="persona"
              title="Persona"
              trail={parts[1].title}
            >
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

            <UserStories
              collapsible
              trail={parts[1].title}
              stories={[
                {
                  who: "Adult in Germany or Austria",
                  story:
                    "As an adult in Germany or Austria who knows my problem but not the product, I want to see what could help in a few minutes, so that I can reach a doctor’s review without browsing a catalogue.",
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
                  The goal is to get from a problem to a placed order in
                  minutes, then keep helping afterward. Each stage has one job,
                  and the doctor step stays visible.
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
          label={`${parts[2].number}. ${parts[2].title}`}
          count={parts[2].topics.length}
          peek={parts[2].peek}
        >
          <div className="space-y-6">
            <Section
              collapsible
              id="information-architecture"
              title="Information Architecture"
              trail={parts[2].title}
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
              collapsible
              id="problem-pages"
              title="Problem Pages"
              trail={parts[2].title}
            >
              <NoteWindow title="Page notes">
                <p className={noteText}>
                  Only four problems are shown at the start, and each has its
                  own landing page. Ads speak about the problem, not a product,
                  so the page a visitor lands on starts with the same question.
                  The navigation lists the four problems, How it works, and the
                  FAQ, with Login and the assessment button on the right. It has
                  no shop links.
                </p>
              </NoteWindow>
              <Window
                icon={<LuListChecks size={16} />}
                title="Every problem page"
                level={4}
                footer={`${problemPageParts.length} parts`}
              >
                <ol className="divide-y divide-line/40">
                  {problemPageParts.map((part, index) => (
                    <li key={part} className="flex items-start gap-3 px-6 py-3">
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
            </Section>

            <Section
              collapsible
              id="recommendation-logic"
              title="Recommendation Logic"
              trail={parts[2].title}
            >
              <NoteWindow title="Logic notes">
                <p className={noteText}>
                  The six answers are the input to a simple set of rules. The
                  rules decide what is recommended and, as importantly, what is
                  kept out of the first result.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuRoute size={16} />}
                  title="Matching rules"
                  level={4}
                  footer={`${matchRules.length} rules`}
                >
                  <ul className="divide-y divide-line/40">
                    {matchRules.map((rule, index) => (
                      <li
                        key={rule}
                        className="flex items-start gap-3 px-6 py-3"
                      >
                        <span
                          aria-hidden
                          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                        >
                          {index + 1}
                        </span>
                        <p className={cardText}>{rule}</p>
                      </li>
                    ))}
                  </ul>
                </Window>
                <Window
                  icon={<LuStore size={16} />}
                  title="What each product is for"
                  level={4}
                  footer={`${productRoles.length} roles`}
                >
                  <dl className="divide-y divide-line/40 text-sm">
                    {productRoles.map((item) => (
                      <div key={item.role} className="space-y-1 px-6 py-3">
                        <dt className="font-medium">{item.role}</dt>
                        <dd className="text-cream/70">{item.detail}</dd>
                      </div>
                    ))}
                  </dl>
                </Window>
              </div>
            </Section>

            <Section
              collapsible
              id="digital-screens"
              title="Digital Screens"
              trail={parts[2].title}
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
              collapsible
              id="working-prototype"
              title="Working Prototype"
              trail={parts[2].title}
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
              collapsible
              id="feedback"
              title="Audit and Stakeholder Feedback"
              trail={parts[2].title}
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

            <Section
              collapsible
              id="mockups"
              title="Mockups"
              trail={parts[2].title}
            >
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
              collapsible
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
              <Window
                icon={<LuPalette size={16} />}
                title="Design direction"
                level={4}
              >
                <p className={`p-6 ${cardText}`}>
                  Clean, premium, calm, European, and trustworthy: soft colors,
                  clean cards, an icon for each problem, large buttons, short
                  text, and a progress bar. No cannabis-heavy visuals, no
                  discounts, and no “buy now” feeling.
                </p>
              </Window>
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
              collapsible
              id="wording-and-trust"
              title="Wording and Trust"
              trail={parts[2].title}
            >
              <NoteWindow title="Wording notes">
                <p className={noteText}>
                  In a regulated space the words are part of the design. Copy
                  follows a short list of rules about what the page may and may
                  not promise, and the result page says a recommendation is
                  ready, never that someone is approved.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuCircleCheck size={16} />}
                  title="Use"
                  level={4}
                  footer={`${sayWords.length} examples`}
                >
                  <ul className="divide-y divide-line/40">
                    {sayWords.map((item) => (
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
                  title="Never use"
                  level={4}
                  footer={`${avoidWords.length} examples`}
                >
                  <ul className="divide-y divide-line/40">
                    {avoidWords.map((item) => (
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
              <Window
                icon={<LuShieldCheck size={16} />}
                title="Trust and compliance"
                level={4}
                footer={`${trustItems.length} items`}
              >
                <ul className="divide-y divide-line/40">
                  {trustItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 px-6 py-3">
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
            </Section>

            <Section
              collapsible
              id="follow-up"
              title="Dashboard and Follow-Up"
              trail={parts[2].title}
            >
              <NoteWindow title="Follow-up notes">
                <p className={noteText}>
                  The structure plans for repeat orders without pressure. The
                  dashboard stays small, and a check-in after 14 to 21 days asks
                  how the recommended solution is working.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Window
                  icon={<LuLayoutDashboard size={16} />}
                  title="Dashboard menu"
                  level={4}
                  footer={`${dashboardMenu.length} items`}
                >
                  <ul className="divide-y divide-line/40">
                    {dashboardMenu.map((item) => (
                      <li key={item} className="px-6 py-3">
                        <p className={cardText}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </Window>
                <div className="space-y-6">
                  <Window
                    icon={<LuRefreshCw size={16} />}
                    title="“How was your experience?”"
                    level={4}
                    footer={`${followUpAnswers.length} answers`}
                  >
                    <ul className="divide-y divide-line/40">
                      {followUpAnswers.map((item) => (
                        <li key={item} className="px-6 py-3">
                          <p className={cardText}>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </Window>
                  <Window
                    icon={<LuRoute size={16} />}
                    title="What happens next"
                    level={4}
                    footer={`${followUpOutcomes.length} options`}
                  >
                    <ul className="divide-y divide-line/40">
                      {followUpOutcomes.map((item) => (
                        <li key={item} className="px-6 py-3">
                          <p className={cardText}>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </Window>
                </div>
              </div>
            </Section>

            <Section
              collapsible
              id="accessibility"
              title="Accessibility Considerations"
              trail={parts[2].title}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
              usable="Every step says what happens next: a progress line (“Question 4 of 6”), a delivery cut-off on the match screen, and a thank-you page that explains the doctor review. After the UX audit, checkout errors show in a summary above the submit button."
              equitable="Plain hints explain jargon, and first-time users are never led with the stronger option. The pages are in German and English. They support keyboards and screen readers, with a skip link, 3:1 contrast on option circles, and reduced-motion support."
              enjoyable="The site leads with four everyday problems, not strains and THC levels, so it does not feel like a shop. Six tap-through questions with auto-advance take 60 to 90 seconds."
              useful="A short assessment ends in one recommended solution and one alternative, so people do not have to pick a product themselves. A doctor reviews before any order."
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
                    No usage data yet. A stakeholder reviewing the live preview
                    wrote “Thank you page looks good now! well done” and called
                    the orders list “very clean and clear”.
                  </p>
                </NoteWindow>
                <NoteWindow title="What I learned" level={4}>
                  <p className={noteText}>
                    Problem-first beats product-first. Honest placeholders, with
                    no invented prices or claims, build trust. Legal and doctor
                    steps need design, not just copy, and so do the words: a
                    short list of what the page may and may not say kept the
                    whole flow consistent.
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

export default WeCare;
