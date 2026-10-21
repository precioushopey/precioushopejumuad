import type { ReactNode } from "react";
import {
  LuAccessibility,
  LuCircleCheck,
  LuExternalLink,
  LuEye,
  LuImage,
  LuInfo,
  LuLayoutDashboard,
  LuListChecks,
  LuPalette,
  LuRoute,
  LuSquare,
  LuTriangleAlert,
  LuType,
} from "react-icons/lu";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { ProjectLayout } from "../components/ProjectLayout";
import {
  BusinessCase,
  NoteWindow,
  Section,
  Window,
  cardText,
  ProcessStrip,
  ScopeAndStandards,
  UxQualities,
  noteText,
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/relive";

const facts = [
  { label: "Role", value: "UX/UI Designer, TLH Team" },
  { label: "Year", value: "2026" },
  {
    label: "Platform",
    value: "Mobile app, designed on 390 px wide phone frames",
  },
  { label: "Deliverables", value: "53 mobile screens and a design system" },
  { label: "Tools", value: "Figma" },
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
    title: "Understanding the users",
    peek: `${IMAGES}/referral.jpg`,
    topics: [
      { id: "who-its-for", label: "Who it is for" },
      { id: "user-journey", label: "User journey" },
    ],
  },
  {
    number: 3,
    title: "Design",
    peek: `${IMAGES}/opportunities.jpg`,
    topics: [
      { id: "design-system", label: "Design system" },
      { id: "screen-map", label: "Screen map" },
      { id: "first-score", label: "The free first score" },
      { id: "trust-and-intake", label: "Trust and intake" },
      { id: "full-assessment", label: "The full assessment" },
      { id: "plan", label: "Opportunities and plan" },
      { id: "enrolment", label: "Enrolment" },
      { id: "pay", label: "Payment and confirmation" },
      { id: "home-and-chat", label: "Home and Dean AI" },
      { id: "states", label: "Filled and unfilled states" },
      { id: "accessibility", label: "Accessibility check" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/dashboard.jpg`,
    topics: [
      { id: "ux-qualities", label: "Good UX check" },
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "The patient app flow, from first screen to home screen",
  "53 high-fidelity mobile screens",
  "Filled and unfilled versions of each form step",
  "The design system: foundations, atoms, molecules, and organisms",
];

const audiences = [
  {
    icon: <LuRoute size={20} />,
    title: "Patients",
    description:
      "People who start with a free score, or arrive through a clinic with an invite code, and then complete a medical intake on their phone. The site describes patients filling in a lifestyle and medical questionnaire on first login and then following their protocols.",
  },
  {
    icon: <LuLayoutDashboard size={20} />,
    title: "Clinics",
    description:
      "Holistic and multidisciplinary clinics: doctors, nutritionists, therapists, and care coordinators. The site says clinics get a branded patient app and manage every patient in one system. The clinic side is not part of my work here.",
  },
];

const journeySteps = [
  {
    title: "Start",
    detail: "Free assessment, or a clinic invite code",
  },
  {
    title: "Quick profile",
    detail: "Basics and lifestyle questions",
  },
  {
    title: "First score",
    detail:
      "Dean Longevity Score out of 100, actual age against biological age",
  },
  {
    title: "Invite friends",
    detail: "Invite 3 friends to unlock the full report, or skip",
  },
  {
    title: "Unlock the roadmap",
    detail: "Six locked report items, then Meet Dean AI",
  },
  {
    title: "Full assessment",
    detail:
      "Consent, location, details, phone code, goals, conditions, medications, allergies, safety screening, labs",
  },
  {
    title: "Key opportunities",
    detail: "Full Dean Health Score and the areas to focus on first",
  },
  {
    title: "Program and plan",
    detail: "Recommended program, how it works, Essential, Plus, or Elite",
  },
  {
    title: "Enrol",
    detail: "Account, shipping, identity check, and signed documents",
  },
  {
    title: "Review and pay",
    detail: "Order summary, payment method, then “You’re all set!”",
  },
  {
    title: "Home and chat",
    detail: "A dashboard with next tasks and a chat with Dean AI",
  },
];

const systemTokens = [
  {
    icon: <LuPalette size={16} />,
    label: "Color",
    value:
      "Brand teal and ink scales, plus success, warning, error, and primary colors with light and dark versions, and four surface colors",
  },
  {
    icon: <LuType size={16} />,
    label: "Type",
    value: "Lato in ten levels, from Display at 32 px to Overline at 10 px",
  },
  {
    icon: <LuSquare size={16} />,
    label: "Space and shape",
    value:
      "A 4 pt spacing grid from 4 to 40 px, 20 px side margins, five corner radii, four elevation levels, and a teal glow for the main button",
  },
  {
    icon: <LuRoute size={16} />,
    label: "Motion",
    value:
      "Six timings, such as 150 ms for small changes, 300 ms between screens, and a 700 ms spring for the score reveal",
  },
  {
    icon: <LuImage size={16} />,
    label: "Icons",
    value: "Lucide, 1.5 to 2 px stroke with rounded caps",
  },
];

const systemBoards = [
  {
    file: "foundations.jpg",
    title: "Foundations",
    width: 1440,
    height: 2906,
    alt: "Foundations board: brand teal, ink, semantic and surface color scales, a ten-level Lato type scale, spacing tokens, corner radii, elevation levels, motion timings, and a Lucide icon set",
    caption: "Color, type, spacing, shape, elevation, motion, and icons.",
  },
  {
    file: "atoms.jpg",
    title: "Atoms",
    width: 1440,
    height: 2679,
    alt: "Atoms board: buttons in primary, loading, disabled, and secondary states, text inputs, an OTP input, checkboxes, a toggle, badges, status pills, avatars, a divider, and text badges",
    caption: "Buttons, inputs, checkboxes, toggles, badges, and avatars.",
  },
  {
    file: "molecules.jpg",
    title: "Molecules",
    width: 1447,
    height: 2486,
    alt: "Molecules board: a header, radio cards, check lists, cards, info notes, tags, pricing cards, a loading checklist, a spinner, and progress bars",
    caption: "Header, radio and pricing cards, notes, tags, and progress.",
  },
  {
    file: "organisms.jpg",
    title: "Organisms",
    width: 1440,
    height: 3275,
    alt: "Organisms board: circular score gauges, score breakdown bars, a loading circle, a bottom tab bar, a step progress bar, chat messages and a chat input, preliminary insight cards, a program hero card, and an order summary",
    caption:
      "Score gauges, breakdown bars, tab bar, chat, insight cards, and order summary.",
  },
];

type Shot = { file: string; title: string; alt: string };

const firstScoreShots: Shot[] = [
  {
    file: "hook.jpg",
    title: "Hook",
    alt: "Hook screen with the headline What's Your Real Biological Age, a sample score card showing actual age 43 and biological age 52, a Start Free Assessment button, and an option to enter a clinic invite code",
  },
  {
    file: "lifestyle.jpg",
    title: "Lifestyle",
    alt: "Lifestyle questions about sleep, exercise, energy, stress, alcohol, nicotine, and wearables, each answered with a row of tappable chips",
  },
  {
    file: "score.jpg",
    title: "First score",
    alt: "Longevity score screen showing 72 out of 100, Good, with actual age 43, estimated biological age 52, an aging gap of plus 9 years, and a score breakdown",
  },
  {
    file: "referral.jpg",
    title: "Invite friends",
    alt: "Referral screen asking to invite 3 friends, with progress at 2 of 3, share options, a list of rewards, and a disabled button reading 1 more invite to unlock",
  },
];

const firstScoreNotes = [
  "The first screen promises a result in 90 seconds and shows what the result looks like before asking for anything.",
  "Answers are chips, not typing: one tap per question, with the current choice filled in teal.",
  "The score splits into four parts (Metabolic, Energy, Recovery, Longevity), so a single number has a reason behind it.",
  "The invite step has a visible “Skip for now”, so the gate is never a dead end.",
];

const trustShots: Shot[] = [
  {
    file: "unlock.jpg",
    title: "Unlock the roadmap",
    alt: "Screen titled Unlock your full health roadmap, listing six locked report items: Metabolic, Recovery, Energy, and Longevity scores, Risk Flags, Recommended Program, and Lab Recommendations",
  },
  {
    file: "meet-dean.jpg",
    title: "Meet Dean AI",
    alt: "Meet Dean AI screen with a friendly robot avatar, a note that Dean AI does not replace a licensed physician, and four trust icons: Secure and Private, Physician Reviewed, AI Powered, and Science Backed",
  },
  {
    file: "consent.jpg",
    title: "Before we begin",
    alt: "Consent screen with four checked cards: not an emergency service, AI guidance not diagnosis, data sharing consent, and privacy policy and terms, plus a note that the data is encrypted",
  },
  {
    file: "safety.jpg",
    title: "Safety screening",
    alt: "Clinical safety screening with a yellow important notice and four yes or no questions about pregnancy, surgery, hospitalization, and bleeding disorders",
  },
];

const trustNotes = [
  "Dean AI says what it is not before it says what it does: guidance, not diagnosis, and treatment needs medical review.",
  "Consent is four short cards with a one-line reason each, not one long block of terms.",
  "The safety screen opens with a yellow notice explaining that some answers trigger extra physician review “for your safety”.",
  "Steps such as consent and medications were drawn in more than one state. See Filled and Unfilled States below.",
];

const assessmentShots: Shot[] = [
  {
    file: "conditions.jpg",
    title: "Medical conditions",
    alt: "Medical conditions screen with icon cards for conditions such as diabetes, heart disease, and kidney disease, several selected, and a None of the Above option",
  },
  {
    file: "medications-yes.jpg",
    title: "Medications",
    alt: "Medications screen with Yes, I take medications selected, revealing fields for medication name, dosage, frequency, and timing, and an Add another medication link",
  },
  {
    file: "labs.jpg",
    title: "Labs decision",
    alt: "Labs screen with three paths: upload existing labs, I need labs, and I'm not sure please guide me, plus a note on why labs matter",
  },
  {
    file: "lab-upload-done.jpg",
    title: "Lab upload",
    alt: "Lab upload screen with a completed PDF upload, a Connect lab provider option marked Coming soon, and a list of what will be analyzed grouped by metabolic, hormonal, and vitamins and nutrients panels",
  },
];

const assessmentNotes = [
  "Long lists become icon cards that can be tapped in any number, and “None of the Above” is its own full-width option.",
  "Choosing “Yes, I take medications” opens the fields for name, dosage, frequency, and timing, with “Add another medication” below, so people who take none never see them.",
  "Labs have three paths (upload existing results, order through Relive, or ask Dean AI), a “Connect lab provider” option marked Coming soon, and a “Skip for now” link under the upload.",
  "The segmented progress bar at the top fills as the person goes, so a long flow shows how far along they are.",
];

const planShots: Shot[] = [
  {
    file: "opportunities.jpg",
    title: "Key opportunities",
    alt: "Key opportunities screen with three impact cards: Optimize Metabolic Function and Improve Sleep Quality marked high impact, and Increase Zone-2 Cardio marked moderate impact",
  },
  {
    file: "pricing.jpg",
    title: "Choose your plan",
    alt: "Plan screen with three options: Essential at 99 dollars a month, Plus at 179 dollars a month marked Recommended, and Elite at 299 dollars a month, each with a list of inclusions",
  },
];

const planNotes = [
  "Impact tags (high, moderate) rank what to work on, so the plan feels earned from the person’s own results.",
  "One plan is marked Recommended and highlighted, and the line above the three says what all of them include.",
];

const enrolShots: Shot[] = [
  {
    file: "create-account.jpg",
    title: "Create your account",
    alt: "Create your account screen with email and password fields, an explanation of how the email is used, and options to continue with Apple, phone code, or Google",
  },
  {
    file: "shipping.jpg",
    title: "Shipping details",
    alt: "Shipping and delivery details form with full name, state, city, zip code, street address, apartment, and phone fields, and a disabled Continue button",
  },
  {
    file: "identity-filled.jpg",
    title: "Verify your identity",
    alt: "Identity verification with three steps: a photo ID uploaded, a selfie captured, and a date of birth confirmed, and an enabled Continue button",
  },
  {
    file: "sign-docs.jpg",
    title: "Sign documents",
    alt: "Review and sign documents screen with seven checked cards, from the telehealth consent agreement to the cancellation policy, and one agreement checkbox",
  },
];

const enrolNotes = [
  "Account creation offers Apple, a phone code, or Google as well as email and password, and says how the email will be used.",
  "The identity check is a three-step vertical stepper (photo ID, selfie, date of birth) that states why it is needed and that identity data is encrypted and not stored permanently.",
  "The seven documents are seven separate checked cards with one agreement at the bottom, not one long page of terms.",
];

const payShots: Shot[] = [
  {
    file: "checkout.jpg",
    title: "Review and pay",
    alt: "Review and pay screen with an order summary totalling 268 dollars, payment methods Apple Pay, Google Pay, and credit or debit card, and a disabled button reading Select a payment method",
  },
  {
    file: "confirmation.jpg",
    title: "You’re all set",
    alt: "Confirmation screen reading You're all set, with a list of what happens next: physician review, lab order, care team assigned, and Dean AI ready, each with a status pill, and a Go to My Dashboard button",
  },
];

const payNotes = [
  "The pay button stays disabled and says “Select a payment method”. The summary notes that the monthly subscription begins after physician approval.",
  "The confirmation lists what happens next, each with a status pill: three Pending items (physician review within 24 hours, lab order, care team) and one Available (Dean AI).",
];

const statePairs = [
  {
    title: "Consent",
    before: {
      file: "consent-empty.jpg",
      caption: "Unchecked: button disabled",
    },
    after: { file: "consent.jpg", caption: "Checked: button enabled" },
    alt: "Consent step",
  },
  {
    title: "Medications",
    before: {
      file: "medications-no.jpg",
      caption: "“No”: short, button enabled",
    },
    after: { file: "medications-yes.jpg", caption: "“Yes”: fields appear" },
    alt: "Medications step",
  },
  {
    title: "Lab upload",
    before: { file: "lab-upload-empty.jpg", caption: "Empty: button disabled" },
    after: {
      file: "lab-upload-done.jpg",
      caption: "Uploaded: “Skip for now” appears",
    },
    alt: "Lab upload step",
  },
  {
    title: "Identity",
    before: { file: "identity-empty.jpg", caption: "Empty: button disabled" },
    after: { file: "identity-filled.jpg", caption: "Complete: button enabled" },
    alt: "Identity step",
  },
];

const stateNotes = [
  "Most form steps were drawn at least twice, with the frames named for the state, such as Unfilled, Filled, Checked, and Unchecked.",
  "On the consent, lab upload, identity, and shipping steps, the main button is greyed out while the step is empty and turns teal only when it is complete.",
];

const homeShots = [
  {
    file: "dashboard.jpg",
    title: "Home",
    width: 390,
    height: 1516,
    alt: "Home screen with a five-step journey (Assessment, Medical Review, Labs, Care Plan, Program), the Dean Health Score of 72 up 2 from last week, program progress at 10 percent, pending orders, today's tasks, an Ask Dean AI button, and a bottom tab bar",
  },
  {
    file: "chat.jpg",
    title: "Dean AI chat",
    width: 390,
    height: 844,
    alt: "Chat with Dean AI: a greeting, quick reply buttons such as Build my 7-day plan and Explain my score, a typing indicator, a message field, and a reminder that Dean AI is not a substitute for medical advice",
  },
];

const homeNotes = [
  "A five-step journey bar (Assessment, Medical Review, Labs, Care Plan, Program) shows where the person is in care, not just in the app.",
  "Pending orders carry status pills such as “Under review” and “Kit shipping”, so waiting has a reason.",
  "Quick replies in the chat, such as “Build my 7-day plan” and “Explain my score”, save typing a first question.",
  "Under the message field, a line says Dean AI gives guidance only and is not a substitute for medical advice.",
];

const accessibility = [
  {
    icon: <LuEye size={20} />,
    title: "Main button",
    description:
      "White text on the brand teal (#0B9E9A) measures 3.3:1. Normal text at this size needs 4.5:1 to meet WCAG AA. The system’s own teal-700 (#0C7F7C) reaches 4.8:1.",
  },
  {
    icon: <LuEye size={20} />,
    title: "Teal links",
    description:
      "Links such as Sign In and Retake Assessment use the same teal on the light page background: 3.1:1. Teal-700 reaches 4.6:1.",
  },
  {
    icon: <LuTriangleAlert size={20} />,
    title: "Fine print",
    description:
      "The privacy line under the main button is light grey (ink-300) on the page background: 2.4:1. The next step in the ink scale (ink-400) reaches 4.5:1.",
  },
  {
    icon: <LuTriangleAlert size={20} />,
    title: "Clipped text",
    description:
      "On the medical conditions screen, long labels such as “High Blood Pressure” and “PCOS/Hormonal Disorder” are cut off inside their cards, and two of the lab option cards run past the right edge. Text that is cut off cannot be read at all.",
  },
  {
    icon: <LuAccessibility size={20} />,
    title: "Not checked yet",
    description:
      "Screen reader order, focus states, text scaling, and touch-target sizes are not documented on the board, and I have not tested with assistive technology.",
  },
];

const nextSteps = [
  "Run moderated usability tests on phones, starting with the intake and the pay step.",
  "Fix the contrast of the teal for text and the main button, using the system’s darker teal, and re-measure the fine print.",
  "Fix the clipped labels on the conditions cards and the lab option cards, then check every screen at larger text sizes.",
  "Draw error, offline, and empty states. The board shows filled and unfilled versions of each step, and loading screens, but no error screens.",
  "Have the clinical and legal team review the claims on screen, such as the HIPAA Compliant badge, the score, and the money-back guarantee, before launch.",
];

// A phone-sized screenshot with a caption.
const Shot = ({
  file,
  alt,
  caption,
  width = 390,
  height = 844,
}: {
  file: string;
  alt: string;
  caption: ReactNode;
  width?: number;
  height?: number;
}) => (
  <figure className="space-y-3">
    <img
      src={`${IMAGES}/${file}`}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt}
      className="mx-auto h-auto w-full max-w-72 rounded-xl border md:rounded-2xl"
    />
    <figcaption className="text-left text-xs text-cream/60">
      {caption}
    </figcaption>
  </figure>
);

const NoteList = ({ title, notes }: { title: string; notes: string[] }) => (
  <Window
    icon={<LuListChecks size={16} />}
    title={title}
    level={4}
    footer={`${notes.length} notes`}
  >
    <ul className="divide-y divide-line/40">
      {notes.map((note) => (
        <li key={note} className="flex items-start gap-3 px-6 py-3">
          <LuCircleCheck
            size={16}
            aria-hidden
            className="mt-1 shrink-0 text-accent"
          />
          <p className={cardText}>{note}</p>
        </li>
      ))}
    </ul>
  </Window>
);

const Relive = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <img
          src={`${IMAGES}/relive.webp`}
          width={1600}
          height={900}
          alt="Four Relive app screens side by side: the hook screen asking What's Your Real Biological Age, the longevity score of 72, the plan choice, and the Dean AI chat"
          className="w-full"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            Relive X360 is a platform for clinics: a branded patient app, plus
            tools to manage care, scheduling, and reports. I designed the
            patient app, a mobile flow that takes someone from a free longevity
            score to a medical intake, a plan, payment, and a home screen with
            an AI coach called Dean AI, along with the design system under it.
          </p>
        </NoteWindow>
        <BusinessCase
          headline="The patient app gives value before it asks for anything: a free longevity score in about 90 seconds, before any account or medical question."
          conversion="The long clinic intake (consent, medical history, safety questions, labs, identity, and payment) is earned one short screen at a time after the score, instead of greeting a new visitor with a form."
          efficiency="Terms come as stacked cards with one agreement at the bottom instead of one long page, and review and pay sits on one screen with an order summary."
          roi="Score, intake, plan, and payment run as one path, and once someone enrolls, the home screen and the Dean AI chat show what to do today, so patients keep going."
          evidence="Based on the designed screens; no research or usage data is documented."
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
        <div className="flex justify-center">
          <a
            href="https://relivex360.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 white-button"
          >
            Visit Relive X360
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
                    Signing up for clinic-led care means a long intake: consent,
                    medical history, safety questions, labs, identity, and
                    payment. On a phone, that is a lot to ask of someone who has
                    not yet seen any value.
                  </p>
                </NoteWindow>
                <NoteWindow title="The goal" level={3}>
                  <p className={noteText}>
                    Give the person something useful first, a longevity score in
                    about 90 seconds. Then earn the rest of the intake one short
                    screen at a time, and end on a home screen and a chat that
                    keep them going.
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
                  text: "The patient mobile app, from the first screen to the home screen and chat, and the design system under it.",
                },
                {
                  label: "Not covered",
                  text: "The clinic-side dashboard, scheduling, and reports that the site describes.",
                },
                {
                  label: "Standards",
                  text: "The screens carry consent cards, a HIPAA Compliant badge, and Dean AI disclaimers. Whether those claims hold is for the clinical and legal team to confirm.",
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
                  I worked on this project as a UX/UI designer on the TLH Team.
                  My responsibilities were:
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
                text: "Research notes still to come. This page shows the design work only, with no interviews or desk research.",
              }}
              define={{
                status: "Partly",
                text: "The audiences (patients and clinics) and a journey from the first score to the home screen. A persona and problem statements are still to add.",
              }}
              ideate={{
                status: "To add",
                text: "Ideation work still to come, such as sketches or “How might we” questions.",
              }}
              prototype={{
                status: "Done",
                text: "53 high-fidelity mobile screens on a four-level design system, with filled and unfilled versions of each form step.",
              }}
              test={{
                status: "To add",
                text: "No usability tests are documented yet. The accessibility check in the Design folder is measured from the screens only.",
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
              id="who-its-for"
              title="Who It Is For"
              trail={parts[1].title}
            >
              <NoteWindow title="Research notes">
                <p className={noteText}>
                  This page does not include interviews or surveys. What it
                  describes comes from the product site and from the screens
                  themselves, such as the “I have a clinic invite code” button
                  on the first screen, which shows patients can arrive through a
                  clinic as well as on their own.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {audiences.map((audience) => (
                  <Window
                    key={audience.title}
                    icon={audience.icon}
                    title={audience.title}
                    level={4}
                  >
                    <p className={`p-6 ${cardText}`}>{audience.description}</p>
                  </Window>
                ))}
              </div>
            </Section>

            <Section
              collapsible
              id="user-journey"
              title="User Journey"
              trail={parts[1].title}
            >
              <NoteWindow title="Journey notes">
                <p className={noteText}>
                  The journey runs from a free score to a paying member with a
                  home screen. Each stage asks for one kind of thing, and the
                  heavier asks (medical history, identity, payment) come after
                  the person has already seen their own results.
                </p>
              </NoteWindow>
              <Window
                icon={<LuRoute size={16} />}
                title="Journey: from first score to home"
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
              id="design-system"
              title="Design System"
              trail={parts[2].title}
            >
              <NoteWindow title="System notes">
                <p className={noteText}>
                  The screens are built from a version 1.0 design system in four
                  boards: foundations, atoms, molecules, and organisms. The
                  system is tagged for 390 px iOS screens, Tailwind v4, Lato,
                  and Lucide icons.
                </p>
              </NoteWindow>
              <Window
                icon={<LuPalette size={16} />}
                title="What the foundations define"
                level={4}
                footer={`${systemTokens.length} groups`}
              >
                <dl className="divide-y divide-line/40 text-sm">
                  {systemTokens.map((token) => (
                    <div
                      key={token.label}
                      className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[9rem_1fr] sm:gap-3"
                    >
                      <dt className="flex items-center gap-2 text-xs leading-6 text-cream/60">
                        <span aria-hidden className="text-accent">
                          {token.icon}
                        </span>
                        {token.label}
                      </dt>
                      <dd className="text-cream/80">{token.value}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {systemBoards.map((board) => (
                  <Window
                    key={board.file}
                    icon={<LuImage size={16} />}
                    title={board.file}
                    level={5}
                    footer={board.caption}
                  >
                    <img
                      src={`${IMAGES}/${board.file}`}
                      width={board.width}
                      height={board.height}
                      loading="lazy"
                      decoding="async"
                      alt={board.alt}
                      className="w-full"
                    />
                  </Window>
                ))}
              </div>
            </Section>

            <Section
              collapsible
              id="screen-map"
              title="Screen Map"
              trail={parts[2].title}
            >
              <NoteWindow title="Map notes">
                <p className={noteText}>
                  All 53 screens on one board, laid out in four rows from the
                  splash and hook screens to the home screen and chat. Related
                  states sit side by side.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="screen-map.jpg"
                footer="The full patient app board, 53 screens."
              >
                <img
                  src={`${IMAGES}/screen-map.jpg`}
                  width={1600}
                  height={1055}
                  loading="lazy"
                  decoding="async"
                  alt="Overview of all 53 Relive mobile screens in four rows, from the splash and hook screens through the questionnaire, medical intake, plan, enrolment, and payment, to the home screen and chat"
                  className="w-full"
                />
              </Window>
            </Section>

            <Section
              collapsible
              id="first-score"
              title="The Free First Score"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  The flow opens with value, not a form. A short quiz ends in a
                  score the person can read at a glance, before any account or
                  medical question.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {firstScoreShots.map((shot) => (
                  <Shot
                    key={shot.file}
                    file={shot.file}
                    alt={shot.alt}
                    caption={shot.title}
                  />
                ))}
              </div>
              <NoteList title="Design notes" notes={firstScoreNotes} />
            </Section>

            <Section
              collapsible
              id="trust-and-intake"
              title="Trust and Intake"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  In health, the words are part of the interface. These screens
                  say what the product is and is not before the medical
                  questions start, and each question screen holds one topic.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {trustShots.map((shot) => (
                  <Shot
                    key={shot.file}
                    file={shot.file}
                    alt={shot.alt}
                    caption={shot.title}
                  />
                ))}
              </div>
              <NoteList title="Design notes" notes={trustNotes} />
            </Section>

            <Section
              collapsible
              id="full-assessment"
              title="The Full Assessment"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  After consent and the safety questions come the medical
                  details: conditions, medications, allergies, and labs. These
                  are the longest steps, so they are broken into one topic per
                  screen, and anything optional is easy to skip or leave empty.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {assessmentShots.map((shot) => (
                  <Shot
                    key={shot.file}
                    file={shot.file}
                    alt={shot.alt}
                    caption={shot.title}
                  />
                ))}
              </div>
              <NoteList title="Design notes" notes={assessmentNotes} />
            </Section>

            <Section
              collapsible
              id="plan"
              title="Opportunities and Plan"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  Once the assessment is done, the person sees what to work on
                  first, then a plan. The plan follows from their own results.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6">
                {planShots.map((shot) => (
                  <Shot
                    key={shot.file}
                    file={shot.file}
                    alt={shot.alt}
                    caption={shot.title}
                  />
                ))}
              </div>
              <NoteList title="Design notes" notes={planNotes} />
            </Section>

            <Section
              collapsible
              id="enrolment"
              title="Enrolment"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  Enrolment asks for the heaviest details: an account, a
                  delivery address, identity, and signed documents. They come
                  after the plan, once the person has chosen to go ahead.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {enrolShots.map((shot) => (
                  <Shot
                    key={shot.file}
                    file={shot.file}
                    alt={shot.alt}
                    caption={shot.title}
                  />
                ))}
              </div>
              <NoteList title="Design notes" notes={enrolNotes} />
            </Section>

            <Section
              collapsible
              id="pay"
              title="Payment and Confirmation"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  Payment is the last step, and the confirmation turns waiting
                  into a short list of what happens next.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6">
                {payShots.map((shot) => (
                  <Shot
                    key={shot.file}
                    file={shot.file}
                    alt={shot.alt}
                    caption={shot.title}
                  />
                ))}
              </div>
              <NoteList title="Design notes" notes={payNotes} />
            </Section>

            <Section
              collapsible
              id="home-and-chat"
              title="Home and Dean AI"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  Once someone has enrolled, the app changes from a funnel to a
                  home screen: where they are in care, what is pending, and what
                  to do today, with Dean AI one tap away.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
                {homeShots.map((shot) => (
                  <Shot
                    key={shot.file}
                    file={shot.file}
                    alt={shot.alt}
                    caption={shot.title}
                    width={shot.width}
                    height={shot.height}
                  />
                ))}
              </div>
              <NoteList title="Design notes" notes={homeNotes} />
            </Section>

            <Section
              collapsible
              id="states"
              title="Filled and Unfilled States"
              trail={parts[2].title}
            >
              <NoteWindow title="State notes">
                <p className={noteText}>
                  A form screen looks different empty, partly done, and
                  complete. Drawing each state keeps the design honest about
                  what the person sees at every moment, and gives developers
                  something to build from.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {statePairs.map((pair) => (
                  <Window
                    key={pair.title}
                    icon={<LuImage size={16} />}
                    title={pair.title}
                    level={4}
                  >
                    <div className="grid grid-cols-2 gap-6 p-6">
                      {[pair.before, pair.after].map((state) => (
                        <figure key={state.file} className="space-y-3">
                          <img
                            src={`${IMAGES}/${state.file}`}
                            width={390}
                            height={844}
                            loading="lazy"
                            decoding="async"
                            alt={`${pair.alt}: ${state.caption}`}
                            className="h-auto w-full rounded-xl border"
                          />
                          <figcaption className="text-left text-xs text-cream/60">
                            {state.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </Window>
                ))}
              </div>
              <NoteList title="Design notes" notes={stateNotes} />
            </Section>

            <Section
              collapsible
              id="accessibility"
              title="Accessibility Check"
              trail={parts[2].title}
            >
              <NoteWindow title="How this was checked">
                <p className={noteText}>
                  I measured contrast from the exported screens with the WCAG
                  formula. These are findings on the designs as drawn, and the
                  fix for each is already in the design system.
                </p>
              </NoteWindow>
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
              usable="Each screen asks one thing, with a segmented progress bar at the top and the main button fixed at the bottom. The button stays disabled until the step is done and says what is missing, such as “1 more invite to unlock” and “Select a payment method”."
              equitable="Evidence is thin. Questions use plain words, and choices include “I’m not sure – guide me” and “None of the above”. But the main button, the teal links, and the fine print fall below WCAG AA contrast (see the accessibility check), and nothing has been tested with assistive technology."
              enjoyable="A first score in about 90 seconds, with a gauge and four sub-scores, is a reward before any account exists. A 700 ms spring for the score reveal is defined in the system, but I have not tested how it feels."
              useful="The person gets a score, ranked opportunities, a recommended plan, and a home screen with today’s tasks and Dean AI, so every stage ends with a next step. Whether the advice is right is for the clinical team, not the design."
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
                    No usage data or user testing yet. What exists is 53 screens
                    and a version 1.0 system with tokens for color, type,
                    spacing, shape, elevation, and motion.
                  </p>
                </NoteWindow>
                <NoteWindow title="What I learned" level={4}>
                  <p className={noteText}>
                    A long clinical flow needs structure more than it needs
                    fewer questions: one topic per screen, visible progress, and
                    both empty and filled states drawn. In a health product, the
                    consent and disclaimer copy is part of the interface and
                    needs the same care as the layout.
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

export default Relive;
