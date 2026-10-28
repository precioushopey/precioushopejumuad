import {
  LuAccessibility,
  LuCircleCheck,
  LuEye,
  LuImage,
  LuInfo,
  LuListChecks,
  LuPalette,
  LuRoute,
  LuSave,
  LuSquare,
  LuUserRound,
  LuWifiOff,
  LuWorkflow,
} from "react-icons/lu";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { ProjectLayout } from "../components/ProjectLayout";
import {
  BusinessCase,
  ImagePlaceholder,
  NoteWindow,
  ProcessStrip,
  ScopeAndStandards,
  SdlcStrip,
  Section,
  UserStories,
  UxQualities,
  Window,
  cardText,
  noteText,
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/coopfeud";
const PEEK = `${IMAGES}/board-welcome.webp`;

const facts = [
  { label: "Event", value: "Coop Month, October 23, 2026" },
  { label: "Role", value: "UX designer and front-end developer" },
  { label: "Duration", value: "Three days, October 20 to 22, 2026" },
  { label: "Audiences", value: "The host, the audience, and the competing teams" },
  {
    label: "Built with",
    value:
      "React 19, TypeScript, Tailwind CSS v4, Zustand, and Tauri 2 for a Windows installer",
  },
  { label: "Status", value: "Used live at the event; private, offline app" },
];

type Topic = { id: string; label: string };
type Part = {
  number: number;
  title: string;
  topics: Topic[];
};

const parts: Part[] = [
  {
    number: 1,
    title: "Project overview",
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
    topics: [
      { id: "user-research", label: "Audience assumptions" },
      { id: "persona", label: "Audience profiles" },
      { id: "user-stories", label: "User stories" },
      { id: "user-journey", label: "User flow" },
    ],
  },
  {
    number: 3,
    title: "Design",
    topics: [
      { id: "design-decisions", label: "Key design decisions" },
      { id: "screens", label: "Screens" },
      { id: "design-system", label: "Design system" },
      { id: "accessibility", label: "Accessibility" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    topics: [
      { id: "ux-qualities", label: "Good UX check" },
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "The host console: setup tabs, round controls, and a guided Next step card",
  "The audience display: question card, answer board, Fast Money board, bracket tree, name wheel, and champion screen",
  "The visual design: a game-show board look with colour, type, and animation tokens",
  "The sound system and the timers that cue it",
  "Backup and restore of a game in progress",
  "The bracket tournament and its defaults",
];

const audiences = [
  {
    name: "Host",
    statement:
      "The host needs to run a live, multi-round game without losing their place, because one wrong tap in front of an audience is hard to undo.",
  },
  {
    name: "Audience",
    statement:
      "The audience needs a clear board they can read from across a room, because they follow the game from the screen or projector, not the host console.",
  },
];

const flow = [
  "Set up the Event, Teams, and Survey tabs, then the Matches",
  "Open the Tournament and spin the wheel to draw the bracket",
  "For each match: face-off, play or pass, reveal answers, strikes, steal, and result",
  "Return to the bracket",
  "Champion screen",
];

const decisions = [
  {
    icon: <LuWorkflow size={20} />,
    title: "A guided host console",
    description:
      "Every phase leads with one Next step card that holds the primary buttons, and overrides sit in a collapsed Corrections drawer. Keyboard shortcuts cover the common actions. The alternatives considered were not written down.",
  },
  {
    icon: <LuWifiOff size={20} />,
    title: "Offline first",
    description:
      "Fonts are bundled instead of loaded from Google Fonts, and the app makes no external requests, because a venue may have no internet.",
  },
  {
    icon: <LuEye size={20} />,
    title: "The display sees only public state",
    description:
      "The audience view receives a filtered copy of the game that hides unrevealed answers, so a screen on a projector can never show one early.",
  },
  {
    icon: <LuRoute size={20} />,
    title: "The bracket plans by match name",
    description:
      "Planned questions are keyed by names such as Final, not by position, so a plan survives any team count if registration changes on the day.",
  },
  {
    icon: <LuCircleCheck size={20} />,
    title: "The host countdown never strikes",
    description:
      "A five-second host-triggered countdown is cancelled by any answer, strike, or pause, so it can never count as a strike. The reason was not written beyond event-day polish.",
  },
  {
    icon: <LuSave size={20} />,
    title: "Backup and restore",
    description:
      "Backup and Restore sit in the top bar, with a toast after each match, so a game in progress can be saved and loaded again.",
  },
];

const palette = [
  { label: "Board 900 (deep blue)", value: "#050b2e" },
  { label: "Board 400 (light blue)", value: "#3f63d6" },
  { label: "Gold 400 (points)", value: "#ffd54a" },
  { label: "Gold 500", value: "#ffc400" },
  { label: "Gold 600", value: "#e0a800" },
  { label: "Strike red", value: "#e11d2a" },
  { label: "Bank blue", value: "#7dd3fc" },
];

const accessibility = [
  {
    icon: <LuAccessibility size={20} />,
    title: "Focus and motion",
    description:
      "A visible focus style is set, and a reduced-motion rule is in the stylesheet.",
  },
  {
    icon: <LuCircleCheck size={20} />,
    title: "Labels and live regions",
    description:
      "ARIA labels, live regions, and roles appear across the screens, with a few screen-reader-only labels.",
  },
  {
    icon: <LuListChecks size={20} />,
    title: "Not yet measured",
    description:
      "No contrast values, keyboard-only pass, or screen-reader test are documented, so no accessibility level is claimed.",
  },
];

const nextSteps = [
  "Add the screenshots, a short recording of one full match, and a journey map to this case study.",
  "Let the app work across several devices; for now it syncs only on one computer.",
  "Add component tests and CI, which the project does not have.",
  "Support more than two teams in the face-off and steal rules.",
];

const CoopFeud = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <img
          src={`${IMAGES}/board-welcome.webp`}
          width={1920}
          height={1080}
          alt="The Coop Feud Claveria audience board welcome screen: a blue dotted background, an oval badge with the words Coop Feud in gold and white, a red Claveria banner, and a Round 1 label in the corner"
          className="w-full"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            Coop Feud is a local survey-game system for a live event. One
            operator runs the host controls while the audience watches a
            read-only board on a second screen or projector. It runs offline and
            includes a bracket tournament, a name wheel, a Fast Money bonus
            round, timers, and sound cues. It was used at the Coop Month event
            on October 23, 2026.
          </p>
        </NoteWindow>
        <BusinessCase
          headline="A face-to-face game night that one host can run from a laptop, without internet or a second operator."
          conversion="The audience gets a board built to read from across a room, and the bracket, wheel, and champion screen keep a ten-team tournament moving."
          efficiency="A guided Next step card, keyboard shortcuts, and backup and restore let a single host run every match without a spreadsheet or a script."
          roi="The app was built in three days and is a template for other events."
          evidence="No audience numbers, timings, or other results were measured."
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
      </Section>

      <FolderGroup>
        <FolderSection
          label={`${parts[0].number}. ${parts[0].title}`}
          count={parts[0].topics.length}
          peek={PEEK}
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
                    The event had no reliable internet, so a game that depends
                    on a backend, a CDN, or sync between devices could not be
                    trusted. How the game was run before is not documented.
                  </p>
                </NoteWindow>
                <NoteWindow title="The goal" level={3}>
                  <p className={noteText}>
                    Run a ten-team, single-elimination survey-game tournament
                    with a guided host, on one computer, with a second screen
                    for the audience.
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
                  text: "A host console, an audience display, a game-rules engine, a Fast Money bonus round, question templates, backups, a bracket tournament, a sound system, and a Windows installer.",
                },
                {
                  label: "Not built",
                  text: "A backend, so sync works only on the same computer. Undo lives in memory only. Face-off, play or pass, and steal assume two teams. Players raise their hands instead of using buzzers.",
                },
                {
                  label: "Constraints",
                  text: "An offline venue, so no external requests. A three-day timeline. Answers that include English, Bisaya, and Tagalog terms.",
                },
                {
                  label: "Standards",
                  text: "Original styling with no TV-show logos, fonts, or music. Licensed sound files that may be used but not redistributed, so the project stays private. Strict TypeScript options and a linter.",
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
                  I worked on this project as the UX designer and front-end
                  developer, with a partner who wrote the first version of the
                  app and the Windows installer. I used Claude Code throughout.
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
                text: "No interviews or research notes are kept for this project.",
              }}
              define={{
                status: "Partly",
                text: "The rules, the ten-team format, and the constraints are written in the README, the project notes, and commit messages, but there is no problem statement.",
              }}
              ideate={{
                status: "To add",
                text: "No sketches or alternatives were kept.",
              }}
              prototype={{
                status: "Partly",
                text: "The working app is the prototype. Its look changed in steps: a game-show board restyle, a game-show stage redesign, then a landing page and logo restyle.",
              }}
              test={{
                status: "Partly",
                text: "Automated tests cover the game rules, and a 13-step manual checklist exists. The app was used live at the event, and no usability sessions are documented.",
              }}
            />

            <SdlcStrip
              trail={parts[0].title}
              collapsible
              planning={{
                status: "Partly",
                text: "A three-day plan ending at the event on October 23, 2026. No spec file is kept.",
              }}
              requirements={{
                status: "Partly",
                text: "The README’s game rules and live-game steps act as the requirements.",
              }}
              design={{
                status: "Partly",
                text: "The architecture is written in the project notes, and the look lives in design tokens. There are no design files.",
              }}
              development={{
                status: "Done",
                text: "14 commits across three days, from October 20 to 22, 2026.",
              }}
              testing={{
                status: "Partly",
                text: "138 test cases in 13 files cover the rules engine, with a manual checklist on top. There are no component tests and no CI.",
              }}
              deployment={{
                status: "Done",
                text: "Run from the repository on the venue computers, with a Windows installer target built with Tauri. There is no web hosting.",
              }}
              maintenance={{
                status: "Not yet",
                text: "The event was one-off, so no maintenance is planned.",
              }}
            />
          </div>
        </FolderSection>

        <FolderSection
          label={`${parts[1].number}. ${parts[1].title}`}
          count={parts[1].topics.length}
          peek={PEEK}
        >
          <div className="space-y-6">
            <Section
              collapsible
              id="user-research"
              title="Audience Assumptions"
              trail={parts[1].title}
            >
              <NoteWindow title="Research notes">
                <p className={noteText}>
                  No formal user research is documented. The design rests on two
                  audiences that come from how the game is played: the host who
                  runs it and the audience who watches it.
                </p>
              </NoteWindow>
            </Section>

            <Section
              collapsible
              id="persona"
              title="Audience Profiles"
              trail={parts[1].title}
            >
              <NoteWindow title="Persona notes">
                <p className={noteText}>
                  Two audiences, each with the problem statement that guided its
                  design. Both are assumed, not taken from interviews.
                </p>
              </NoteWindow>
              <div
                id="problem-statement"
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {audiences.map((audience) => (
                  <Window
                    key={audience.name}
                    icon={<LuUserRound size={16} />}
                    title="Audience"
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
                        <h5 className="text-left font-medium text-lg leading-6">
                          {audience.name}
                        </h5>
                      </div>
                      <p className="text-left text-xs text-cream/60">
                        Problem statement (assumed, not from interviews)
                      </p>
                      <p className={cardText}>{audience.statement}</p>
                    </div>
                  </Window>
                ))}
              </div>
            </Section>

            <UserStories
              collapsible
              trail={parts[1].title}
              stories={[
                {
                  who: "Host",
                  story:
                    "As the host, I want to run a live, multi-round game without losing my place, so that one wrong tap in front of an audience does not ruin a match.",
                },
                {
                  who: "Audience",
                  story:
                    "As an audience member, I want a clear board I can read from across the room, so that I can follow the game from the screen.",
                },
              ]}
            />

            <Section
              collapsible
              id="user-journey"
              title="User Flow"
              trail={parts[1].title}
            >
              <NoteWindow title="Flow notes">
                <p className={noteText}>
                  This is the host’s flow, taken from the project notes and the
                  app. It is not from research, and where users struggle is not
                  documented.
                </p>
              </NoteWindow>
              <Window
                icon={<LuRoute size={16} />}
                title="Host flow"
                level={4}
                footer={`${flow.length} steps`}
              >
                <ol className="divide-y divide-line/40">
                  {flow.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-center gap-3 px-6 py-3"
                    >
                      <span
                        aria-hidden
                        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent"
                      >
                        {index + 1}
                      </span>
                      <p className={`min-w-0 flex-1 ${cardText}`}>{step}</p>
                    </li>
                  ))}
                </ol>
              </Window>
              <ImagePlaceholder>
                A journey map for one full match.
              </ImagePlaceholder>
            </Section>
          </div>
        </FolderSection>

        <FolderSection
          label={`${parts[2].number}. ${parts[2].title}`}
          count={parts[2].topics.length}
          peek={PEEK}
        >
          <div className="space-y-6">
            <Section
              collapsible
              id="design-decisions"
              title="Key Design Decisions"
              trail={parts[2].title}
            >
              <NoteWindow title="Decision notes">
                <p className={noteText}>
                  The reasons below come from the project notes and commit
                  messages. Where a reason was not written down, the card says
                  so.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

            <Section
              collapsible
              id="screens"
              title="Screens"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  The app has a landing page, a host console, and an audience
                  display. The host console has setup tabs (Event, Teams,
                  Survey, and Rounds or Matches) and live panels for each round
                  phase. The display shows a welcome logo, a question card, the
                  answer board, the Fast Money board, the bracket tree, the name
                  wheel, and the champion screen. Screenshots are still to
                  come.
                </p>
              </NoteWindow>
              <Window
                icon={<LuImage size={16} />}
                title="Audience board: welcome"
                level={4}
                footer="The welcome screen the audience sees before a round starts."
              >
                <img
                  src={`${IMAGES}/board-welcome.webp`}
                  width={1920}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  alt="The audience board welcome screen with the Coop Feud Claveria logo on a blue dotted background and a Round 1 label"
                  className="w-full"
                />
              </Window>
              <Window
                icon={<LuImage size={16} />}
                title="Host console: setup"
                level={4}
                footer="The Event tab, with the setup tabs, the sound buttons, and Backup and Restore along the top."
              >
                <img
                  src={`${IMAGES}/host-setup.webp`}
                  width={1568}
                  height={772}
                  loading="lazy"
                  decoding="async"
                  alt="The host console on the Event tab: the Coop Feud logo, a Host badge, a Setting up status, sound and Backup buttons, tabs for Event, Teams, Survey, and Matches, and forms for the event title, date, game settings, bracket format, and Fast Money"
                  className="w-full"
                />
              </Window>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <ImagePlaceholder>
                  The audience board mid-round, with the marquee frame.
                </ImagePlaceholder>
                <ImagePlaceholder>
                  The host console with the Next step card.
                </ImagePlaceholder>
                <ImagePlaceholder>
                  The bracket tree and the name wheel.
                </ImagePlaceholder>
                <ImagePlaceholder>
                  The Fast Money board and the champion screen.
                </ImagePlaceholder>
              </div>
            </Section>

            <Section
              collapsible
              id="design-system"
              title="Design System"
              trail={parts[2].title}
            >
              <NoteWindow title="System notes">
                <p className={noteText}>
                  The look is an original game-show board, with a blue board,
                  gold points, red strikes, and marquee bulbs, and no TV-show
                  logos, fonts, or music. Anton is the display font and Inter the
                  body font, both bundled. Shared classes such as panel, answer
                  row, score box, and rank badge keep the screens consistent,
                  and named animation tokens cover reveals, strikes, and the
                  marquee.
                </p>
              </NoteWindow>
              <Window
                icon={<LuPalette size={16} />}
                title="Colour tokens"
                level={4}
                footer={`${palette.length} colours`}
              >
                <dl className="divide-y divide-line/40 text-sm">
                  {palette.map((color) => (
                    <div
                      key={color.label}
                      className="flex items-center gap-3 px-6 py-3"
                    >
                      <span
                        aria-hidden
                        className="size-8 shrink-0 rounded-full border"
                        style={{ backgroundColor: color.value }}
                      />
                      <dt className="min-w-0 flex-1 font-medium">
                        {color.label}
                      </dt>
                      <dd className="text-xs text-cream/60">{color.value}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
              <ImagePlaceholder>
                The design tokens laid out as a swatch.
              </ImagePlaceholder>
            </Section>

            <Section
              collapsible
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
          peek={PEEK}
        >
          <div className="space-y-6">
            <UxQualities
              collapsible
              trail={parts[3].title}
              usable="Each phase leads with one Next step card, overrides are tucked into a Corrections drawer, and the whole game can be backed up and restored. It was used live at the event, and no usability sessions were run."
              equitable="Focus styles, a reduced-motion rule, and ARIA labels are in place, and answers accept English, Bisaya, and Tagalog terms. No contrast or screen-reader check is documented."
              enjoyable="A game-show board with gold points, red strikes, marquee bulbs, sound cues, and a name wheel gives the night its show feel. There is no audience feedback on this page."
              useful="One host can run a ten-team tournament offline, from the first face-off to the champion screen."
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
                    The app ran the event on October 23, 2026. No audience
                    numbers or timings were measured, so there is nothing to
                    report beyond that.
                  </p>
                </NoteWindow>
                <NoteWindow title="What changed along the way" level={4}>
                  <p className={noteText}>
                    The steal sting was removed, the animated logo became a
                    still badge, a victory fanfare that never played was fixed,
                    and flaky timer tests were repaired twice. What I learned
                    from the project is still to add.
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

export default CoopFeud;
