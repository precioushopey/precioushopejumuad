import type { ReactNode } from "react";
import {
  LuCircleCheck,
  LuExternalLink,
  LuEye,
  LuImage,
  LuInfo,
  LuListChecks,
  LuPalette,
  LuRoute,
  LuSquare,
  LuTriangleAlert,
  LuType,
  LuUserRound,
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
} from "../components/CaseStudy";

const IMAGES = "/assets/images/projects/talemakers";

const heroImages = [1, 2, 3, 4, 5, 6].map(
  (n) => `${IMAGES}/talemakers${n}.png`,
);

const facts = [
  { label: "Type", value: "Mobile app concept for children" },
  { label: "Role", value: "UX/UI designer" },
  {
    label: "Client",
    value: "Roostercat, which lists TaleMakers as “In Development”",
  },
  {
    label: "Platform",
    value: "Mobile app, in portrait and landscape layouts",
  },
  {
    label: "Tools",
    value: "Figma, Canva, Illustrator, Aseprite",
  },
  { label: "Typeface", value: "Baloo, from Google Fonts" },
  { label: "Status", value: "Prototype stage, not yet launched" },
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
    peek: `${IMAGES}/talemakers1.png`,
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
    peek: `${IMAGES}/talemakers2.png`,
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
    peek: `${IMAGES}/ui-mybooks.jpg`,
    topics: [
      { id: "wireframes", label: "Wireframes" },
      { id: "mid-fidelity", label: "Mid-fidelity screens" },
      { id: "story-editor", label: "The story editor" },
      { id: "reading", label: "Reading a story" },
      { id: "brand-book", label: "Brand book" },
      { id: "high-fidelity", label: "High-fidelity screens" },
      { id: "components", label: "Components and assets" },
      { id: "accessibility", label: "Accessibility check" },
      { id: "testing", label: "Testing" },
    ],
  },
  {
    number: 4,
    title: "Going forward",
    peek: `${IMAGES}/talemakers3.png`,
    topics: [
      { id: "ux-qualities", label: "Good UX check" },
      { id: "takeaways", label: "Takeaways" },
      { id: "next-steps", label: "Next steps" },
    ],
  },
];

const responsibilities = [
  "Ten grey wireframes, then blue mid-fidelity screens",
  "The brand book: logo, typography, colors, and interface",
  "High-fidelity screens in portrait and landscape",
  "Interactive mockups and animated UI samples",
];

const journey = [
  "Launch: a splash screen with the logo and a loading bar",
  "Enter a name and choose an avatar, with no password to remember",
  "The main menu: My Books, Shared Books, Friends, and Settings",
  "Add a book: name it and pick a cover color",
  "Write it: add pages, then text, objects, animated characters, tiles, and music, confirming each element",
  "Save the book, and share it with friends",
  "Find friends by name or ID, and add them",
  "Open a friend’s shared book",
  "Read it, with a page counter, autoplay, mute, and fullscreen",
  "Turn music and sound on or off in Settings",
];

type Shot = {
  file: string;
  title: string;
  width: number;
  height: number;
  alt: string;
};

const midFiShots: Shot[] = [
  {
    file: "midfi-login.jpg",
    title: "Enter your name",
    width: 360,
    height: 800,
    alt: "Mid-fidelity screen with the Storyteller wordmark, a field labelled Enter your name, and an Enter button",
  },
  {
    file: "midfi-avatar.jpg",
    title: "Choose your avatar",
    width: 360,
    height: 800,
    alt: "Mid-fidelity screen with a round avatar placeholder, arrows to change it, the text Choose your avatar, and a Save button",
  },
  {
    file: "midfi-menu.jpg",
    title: "Main menu",
    width: 360,
    height: 800,
    alt: "Mid-fidelity main menu with five buttons: My Books, Shared Books, Friends, Settings, and Exit",
  },
  {
    file: "midfi-mybooks.jpg",
    title: "My Books",
    width: 360,
    height: 800,
    alt: "Mid-fidelity My Books screen with two books, each with delete and share icons, and a bottom bar with Back, Add Book, and Shared Books",
  },
  {
    file: "midfi-shared.jpg",
    title: "Shared Books",
    width: 360,
    height: 800,
    alt: "Mid-fidelity Shared Books screen listing two books shared by a friend named Cyan",
  },
  {
    file: "midfi-friends.jpg",
    title: "Friends",
    width: 360,
    height: 800,
    alt: "Mid-fidelity Friends screen with one friend, Cyan, who has 3 books, and an Unfriend link",
  },
  {
    file: "midfi-addfriend.jpg",
    title: "Add a friend",
    width: 360,
    height: 800,
    alt: "Add Friend panel with a search field for a name or ID and a Search button",
  },
  {
    file: "midfi-settings.jpg",
    title: "Settings",
    width: 360,
    height: 800,
    alt: "Settings panel with an avatar, a name, an ID, and toggles for music and sound, and a Save button",
  },
];

const midFiNotes = [
  "Signing in is a name and an avatar, with no password field, so a child has nothing to remember or mistype.",
  "The bottom bar uses big round buttons with a label under each icon: Back, Add Book, Shared Books.",
  "Books are color-coded, and each one in My Books carries its own share and delete icons.",
  "Friends are found by name or ID, and a friend’s card shows how many books they have.",
];

const editorShots: Shot[] = [
  {
    file: "editor-title.jpg",
    title: "Name the book",
    width: 360,
    height: 800,
    alt: "Editor start screen with the field Your book title, nine color swatches for the book cover, an Enter button, and a toolbar with Text, Object, and Animated",
  },
  {
    file: "editor-text.jpg",
    title: "Add text",
    width: 360,
    height: 800,
    alt: "Editor with a text box being typed in red, confirm and cancel buttons above it, and a color picker of nine colors above the toolbar",
  },
  {
    file: "editor-objects.jpg",
    title: "Add an object",
    width: 360,
    height: 800,
    alt: "Editor with an object picker open showing two categories of placeholder objects",
  },
  {
    file: "editor-tiles.jpg",
    title: "Build a scene with tiles",
    width: 360,
    height: 800,
    alt: "Editor with a small scene of a stone path, a fountain, and a tree, and a Select Tiles to Add panel with three floor tiles",
  },
  {
    file: "editor-music.jpg",
    title: "Add music",
    width: 360,
    height: 800,
    alt: "Editor with a Music panel showing a track named Medieval Background music and a Remove Music button",
  },
];

const editorNotes = [
  "A book starts with a title and one of nine cover colors.",
  "A strip of page chips (Title Page, numbered pages, and a plus to add one) sits above the tools, so the whole book is always in view.",
  "The tools grow from three (Text, Object, Animated) to five with Add Tiles and Add Music, so a page can become a small scene with a soundtrack.",
  "Every element a child adds gets a cross and a tick to cancel or keep it, and the top bar has undo and save.",
];

const readShots: Shot[] = [
  {
    file: "read-preview.jpg",
    title: "Book page",
    width: 360,
    height: 800,
    alt: "A book page with a red book cover, the title The Untitled Story, an Authored By line naming Cyan, and a Read button",
  },
  {
    file: "read-story.jpg",
    title: "Reading",
    width: 360,
    height: 800,
    alt: "Reader showing page 1 of 20 with a star and a paragraph of text, and controls for back, autoplay, mute, and fullscreen",
  },
  {
    file: "loading.jpg",
    title: "Loading",
    width: 360,
    height: 800,
    alt: "Loading screen with the Storyteller wordmark and a progress bar at 60 percent",
  },
];

const uiShots: Shot[] = [
  {
    file: "ui-splash.jpg",
    title: "Splash",
    width: 1108,
    height: 2034,
    alt: "TaleMakers splash screen: the logo, an open book, and a Loading label on a blue gradient with a pattern of books",
  },
  {
    file: "ui-menu.jpg",
    title: "Main menu",
    width: 1108,
    height: 2034,
    alt: "Main menu welcoming the user back as TaleMaker, with counts of tales written, tales read, and friends, three colored menu buttons, and an orange Start writing now button",
  },
  {
    file: "ui-mybooks.jpg",
    title: "My Books",
    width: 1108,
    height: 2034,
    alt: "My Books list with five books in different cover colors, each with a created date and share and delete buttons, and tabs for Main Menu, Add Book, and Shared Books",
  },
  {
    file: "ui-shared.jpg",
    title: "Shared Books",
    width: 1108,
    height: 2034,
    alt: "Shared Books list with five books shared by a friend named Cyan, in a yellow-themed screen with tabs for Main Menu, My Books, and Friends",
  },
  {
    file: "ui-friends.jpg",
    title: "Friends",
    width: 1108,
    height: 2034,
    alt: "Friends list in a green-themed screen with five friends and how many books each has, and tabs for Main Menu, Add Friends, and Shared Books",
  },
  {
    file: "ui-addbook.jpg",
    title: "Add Book",
    width: 1108,
    height: 2034,
    alt: "Add Book screen with a title field, seven cover colors, a Save button, page chips, and a toolbar of Text, Characters, Objects, Tiles, and Music",
  },
];

const highFiNotes = [
  "Each section has its own color: orange for My Books, yellow for Shared Books, green for Friends, blue for the Main Menu, and purple for Settings. The tabs and the matching menu buttons follow it, such as the green Friends tab and the green Friends button.",
  "The main menu opens with a greeting and three counts (Tales Written, Tales Read, Friends), then big buttons, then one orange “Start writing now!” button for the main task.",
  "The landscape screens at the top of this page keep the same colors and move the tabs to the left edge. The main menu has a capybara mascot, and Settings has sliders for music and sound.",
  "The editor toolbar now reads Text, Characters, Objects, Tiles, and Music, with a color-picker for the cover.",
];

const brandRules = [
  {
    icon: <LuPalette size={16} />,
    label: "Mission",
    value:
      "“To make storytelling joyful, creative, and inclusive for all children through an accessible and playful mobile app experience.”",
  },
  {
    icon: <LuEye size={16} />,
    label: "Vision",
    value:
      "To give every child, regardless of learning style or ability, a fun and safe place to express themselves.",
  },
  {
    icon: <LuImage size={16} />,
    label: "Logo",
    value:
      "A book icon and the name in Baloo, with stars and a glow behind it. It sits upper left on most screens and centered on the splash, never bottom left, with no drop shadows, glows, or rotations added.",
  },
  {
    icon: <LuType size={16} />,
    label: "Type",
    value:
      "Baloo for headlines, buttons, navigation, and body text: titles 24 to 36 pt, buttons 20 to 28 pt, body 18 to 24 pt, in sentence case, avoiding all caps.",
  },
  {
    icon: <LuPalette size={16} />,
    label: "Color",
    value:
      "Orange (#F7931E) for the header and main buttons, blue (#40C2E8) for backgrounds, and one accent per section: red for My Books, yellow for Shared Books, green for Friends, blue for the Main Menu, and purple for Settings.",
  },
];

const accessibility = [
  {
    icon: <LuCircleCheck size={20} />,
    title: "What the brand book sets",
    description:
      "Left-aligned paragraphs, no justified text, a line height of 1.5, wide letter spacing, sentence case, and a rounded, heavy typeface at 18 to 24 pt for body text. These are sensible reading rules for young readers.",
  },
  {
    icon: <LuEye size={20} />,
    title: "Brand colors against white",
    description:
      "White on the brand orange (#F7931E) measures 2.3:1, and white on the brand blue (#40C2E8) measures 2.1:1. The interface sets its white text on a dark outline, which helps, but the outline is not part of the ratio, so the real screens should be tested.",
  },
  {
    icon: <LuTriangleAlert size={20} />,
    title: "Early buttons",
    description:
      "In the blue mid-fidelity screens, the white labels on the light-cyan buttons measure about 1.5:1. A few labels were also all caps (such as Search), which the later brand book rules out.",
  },
  {
    icon: <LuInfo size={20} />,
    title: "Claims to verify",
    description:
      "The brand book says wide spacing and clean shapes follow Dyslexia Association guidelines, and that blue helps children with ADHD or autism. It does not cite sources, and I have not checked them. Touch-target sizes and screen readers are not documented.",
  },
];

const nextSteps = [
  "Test the prototype with children, and with the parents or teachers who would put it in their hands.",
  "Fix the contrast of white text on the brand orange and blue, and re-measure the real screens.",
  "Add sources for the brand book’s claims about dyslexia, ADHD, and autism, or soften them.",
  "Design how shared books are kept safe, since the vision promises “a fun and safe place” and the screens do not yet show it.",
  "Continue into development, which Roostercat lists as in progress.",
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

// A screenshot in a row of phone screens, with a caption.
const PhoneShot = ({
  shot,
  maxWidth = "max-w-56",
}: {
  shot: Shot;
  maxWidth?: string;
}) => (
  <figure className="space-y-3">
    <img
      src={`${IMAGES}/${shot.file}`}
      width={shot.width}
      height={shot.height}
      loading="lazy"
      decoding="async"
      alt={shot.alt}
      className={`mx-auto h-auto w-full ${maxWidth} rounded-xl border`}
    />
    <figcaption className="text-left text-xs text-cream/60">
      {shot.title}
    </figcaption>
  </figure>
);

const FullImage = ({
  file,
  width,
  height,
  alt,
  title,
  caption,
}: {
  file: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  caption: string;
}) => (
  <Window icon={<LuImage size={16} />} title={title} level={4} footer={caption}>
    <img
      src={`${IMAGES}/${file}`}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt}
      className="w-full"
    />
  </Window>
);

const TaleMakers = () => (
  <ProjectLayout>
    <div className="space-y-15 pt-6">
      <Section id="overview" level={2} title="Project Overview" hideTitle>
        <Carousel
          images={heroImages}
          alt="TaleMakers screens: splash, main menu, My Books, Shared Books, Friends, and Settings"
        />
        <NoteWindow title="About this project">
          <p className={noteText}>
            TaleMakers is a mobile app concept born from a simple but powerful
            idea: what if children could become the authors of their own
            adventures? Designed to nurture creativity, storytelling, and
            digital literacy, the app lets kids create animated storybooks using
            a playful mix of characters, backgrounds, and music. Though still in
            the prototype stage, TaleMakers already shows promise as an
            inclusive platform where every child, regardless of ability or
            learning style, can explore, express, and share their unique voice
            in an imaginative space.
          </p>
        </NoteWindow>
        <BusinessCase
          headline="TaleMakers is built so a child can start creating with nothing in the way."
          conversion="A child signs in with just a name and an avatar, so there is no long sign-up between a child and the first story."
          efficiency="Big labeled round buttons, and one element at a time in the editor with a cross and a tick to cancel or keep it, keep every step simple for short attention spans."
          roi="The return is still untested: TaleMakers is a prototype that only peers and the client have tried, not children."
          evidence="A prototype, not yet launched, so there are no usage figures."
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
          <LinkButton
            href="https://www.figma.com/proto/8fOWyiK87SDeMOOhH0oDZM/TaleMakers-App?node-id=1418-1728&p=f&t=FteYo7hMhkxWz2K9-1&scaling=scale-down-width&content-scaling=fixed&page-id=1418%3A1727&starting-point-node-id=1418%3A1728"
            primary
          >
            Read the Brand Book
          </LinkButton>
          <LinkButton href="https://roostercat.games/">
            See it on Roostercat’s site
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
                    One clear insight surfaced: children needed more than just
                    content, they needed agency. The challenge was to design an
                    environment that felt intuitive, joyful, and empowering,
                    while also respecting short attention spans and varied
                    developmental levels.
                  </p>
                </NoteWindow>
                <NoteWindow title="The goal" level={3}>
                  <p className={noteText}>
                    To make storytelling joyful, creative, and inclusive for all
                    children through an accessible and playful mobile app: a
                    place where a child writes, decorates, and shares their own
                    animated storybooks, and where every child, regardless of
                    learning style or ability, has a fun and safe place to
                    express themselves.
                  </p>
                </NoteWindow>
              </div>
              <NoteWindow title="The challenge" level={3}>
                <p className={noteText}>
                  Designing for children is never just about making things
                  “cute.” It’s about clarity, accessibility, emotional safety,
                  and deep engagement, all in one seamless experience. The
                  biggest challenge was creating a user interface that felt
                  powerful yet simple, animated yet calm, and expressive without
                  being overwhelming. Every design decision needed to honor how
                  children think, explore, and feel.
                </p>
              </NoteWindow>
            </Section>

            <ScopeAndStandards
              trail={parts[0].title}
              collapsible
              rows={[
                {
                  label: "Scope",
                  text: "The child’s side of the app: a name and an avatar to sign in, My Books, a story editor, Shared Books, Friends, a reader, and music and sound settings.",
                },
                {
                  label: "Not shown",
                  text: "Parent or teacher accounts, and how shared books are kept safe or moderated. None of these appear in the screens.",
                },
                {
                  label: "Standards",
                  text: "A brand book with rules for the logo, type, color, and interface. The typeface, Baloo, is open source under the SIL Open Font License.",
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
                  I worked on TaleMakers as a UX/UI designer for my client,
                  Roostercat. My responsibilities were:
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
                status: "Done",
                text: "Observed how children interact with games and educational apps: patterns of play, frustration, and joy.",
              }}
              define={{
                status: "Done",
                text: "Children need agency, in an interface that respects short attention spans and different developmental levels.",
              }}
              ideate={{
                status: "Done",
                text: "Drag-and-drop scenes, tap-to-animate characters, and background music, sketched as ten grey wireframes.",
              }}
              prototype={{
                status: "Done",
                text: "Wireframes, blue mid-fidelity screens, a brand book, and high-fidelity screens in Figma, with animated UI samples.",
              }}
              test={{
                status: "Partly",
                text: "Early sessions with peers and feedback from the client. No tests with children yet.",
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
                  I began by placing myself in a child’s shoes, wondering what
                  makes storytelling exciting, what captures attention, and how
                  to make it feel magical yet simple. I observed how kids
                  interact with games and educational apps, noticing patterns of
                  play, moments of frustration, and bursts of joy. This was
                  observation, not interviews or surveys, and no figures from it
                  are kept on this page.
                </p>
              </NoteWindow>
            </Section>

            <Section
              collapsible
              id="users"
              title="The Users"
              trail={parts[1].title}
            >
              <NoteWindow title="User notes">
                <p className={noteText}>
                  The app is for children, and the brand book says plainly for
                  which children: “every child, regardless of learning style or
                  ability.” The design leans on large, rounded type, color-coded
                  sections, and big round buttons.
                </p>
              </NoteWindow>
              <Window
                icon={<LuUserRound size={16} />}
                title="The young author"
                level={4}
              >
                <p className={`p-6 ${cardText}`}>
                  A child who wants to make their own tale: to write it,
                  decorate it with characters, scenes, and music, and show it to
                  friends. The screens use a name and an avatar instead of a
                  password.
                </p>
              </Window>
            </Section>

            <UserStories
              collapsible
              trail={parts[1].title}
              stories={[
                {
                  who: "Child author",
                  story:
                    "As a child, I want to make my own storybook with characters, backgrounds, and music, so that I can tell my own tale and share it with my friends.",
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
                  This follows the screens in the Figma file, from launching the
                  app to reading a friend’s book. Each stage has one job, and a
                  child can always go back with the same round button.
                </p>
              </NoteWindow>
              <Window
                icon={<LuRoute size={16} />}
                title="Journey: from launch to a shared story"
                level={4}
                footer={`${journey.length} stages`}
              >
                <NumberedList items={journey} />
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
              id="wireframes"
              title="Wireframes"
              trail={parts[2].title}
            >
              <NoteWindow title="Wireframe notes">
                <p className={noteText}>
                  The first screens were grey wireframes, and the app was still
                  called Storyteller. Ten screens cover the menu, My Books,
                  Shared Books, searching for friends, creating a new book, and
                  a Write a Story editor. Torn-paper labels give them a
                  storybook feel even in grey.
                </p>
              </NoteWindow>
              <FullImage
                file="wireframes.jpg"
                width={1600}
                height={1209}
                title="wireframes.jpg"
                caption="Ten grey screens: a menu, book lists, a friend search, and the first editor."
                alt="Ten grey wireframe screens titled Storyteller: a menu with My Books, Shared Books, Friends, and Settings, My Books with a New Book button, Shared Books, a friend search and its results, a Create new book form, and a Write a Story editor with Text, Object, and Animated tools"
              />
              <NoteList
                title="What the wireframes already had"
                notes={[
                  "The menu, the two book lists, and friend search that the final app still uses.",
                  "A Create new book form with a title, an author, and a description.",
                  "An editor with a page control (Prev, Page, Add) and three tools: Text, Object, and Animated.",
                ]}
              />
            </Section>

            <Section
              collapsible
              id="mid-fidelity"
              title="Mid-Fidelity Screens"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  The wireframes turned into blue, rounded screens with chunky
                  buttons. They set the structure of the app in the Storyteller
                  look, before the TaleMakers brand.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {midFiShots.map((shot) => (
                  <PhoneShot key={shot.file} shot={shot} />
                ))}
              </div>
              <NoteList title="Design notes" notes={midFiNotes} />
            </Section>

            <Section
              collapsible
              id="story-editor"
              title="The Story Editor"
              trail={parts[2].title}
            >
              <NoteWindow title="Editor notes">
                <p className={noteText}>
                  Making a book is the heart of the app. The editor is where the
                  drag-and-drop scenes, the tap-to-animate characters, and the
                  background music came together.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {editorShots.map((shot) => (
                  <PhoneShot key={shot.file} shot={shot} />
                ))}
              </div>
              <NoteList title="Design notes" notes={editorNotes} />
            </Section>

            <Section
              collapsible
              id="reading"
              title="Reading a Story"
              trail={parts[2].title}
            >
              <NoteWindow title="Reader notes">
                <p className={noteText}>
                  A finished book has a page of its own and a reader that works
                  like a small picture book.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-3 gap-6">
                {readShots.map((shot) => (
                  <PhoneShot key={shot.file} shot={shot} maxWidth="max-w-48" />
                ))}
              </div>
              <NoteList
                title="Design notes"
                notes={[
                  "A book’s page shows its cover, its title, and who authored it, with one Read button.",
                  "The reader has a page counter (such as 1 of 20), back, autoplay, mute, and fullscreen, and a share icon at the top.",
                ]}
              />
            </Section>

            <Section
              collapsible
              id="brand-book"
              title="Brand Book"
              trail={parts[2].title}
            >
              <NoteWindow title="Brand notes">
                <p className={noteText}>
                  The app was renamed from Storyteller to TaleMakers, and the
                  brand book sets how it looks: the logo, typography, colors,
                  and the interface. The name “captures the app’s purpose, that
                  is to help kids make and tell their own tales”.
                </p>
              </NoteWindow>
              <FullImage
                file="brand-cover.jpg"
                width={1600}
                height={889}
                title="Visual identity guidelines"
                caption="The cover of the brand book."
                alt="The TaleMakers brand book cover: the logo on an open book with stars, on a blue gradient with a pattern of books, and the title Visual Identity Guidelines"
              />
              <Window
                icon={<LuPalette size={16} />}
                title="The rules in short"
                level={4}
                footer={`${brandRules.length} rules`}
              >
                <dl className="divide-y divide-line/40 text-sm">
                  {brandRules.map((rule) => (
                    <div
                      key={rule.label}
                      className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[8rem_1fr] sm:gap-3"
                    >
                      <dt className="flex items-center gap-2 text-xs leading-6 text-cream/60">
                        <span aria-hidden className="text-accent">
                          {rule.icon}
                        </span>
                        {rule.label}
                      </dt>
                      <dd className="text-cream/80">{rule.value}</dd>
                    </div>
                  ))}
                </dl>
              </Window>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FullImage
                  file="brand-logo.jpg"
                  width={1600}
                  height={1449}
                  title="Logo"
                  caption="The master logo, its placement, and its color variations."
                  alt="Brand book logo section: the name and its meaning, where the logo is placed, and the primary, secondary, and unacceptable versions"
                />
                <FullImage
                  file="brand-typography.jpg"
                  width={1600}
                  height={1307}
                  title="Typography"
                  caption="Baloo, its size scale, and the accessibility notes."
                  alt="Brand book typography section: Baloo with a scale from 18 to 48 points, accessibility notes, and the font license"
                />
              </div>
              <FullImage
                file="brand-colors.jpg"
                width={1600}
                height={1502}
                title="Color palette"
                caption="Primary colors, one accent per section, and the reasoning."
                alt="Brand book color palette: primary brand colors, accent colors named for each tab, and guidelines explaining the choice of orange, blue, and the accents"
              />
            </Section>

            <Section
              collapsible
              id="high-fidelity"
              title="High-Fidelity Screens"
              trail={parts[2].title}
            >
              <NoteWindow title="Screen notes">
                <p className={noteText}>
                  With the brand set, the screens became warm and bright: an
                  orange header, a blue pattern behind it, cream cards with
                  brown outlines, and color-coded tabs. These are the portrait
                  phone screens from the brand book. The landscape screens at
                  the top of this page are the same design for a wider screen.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {uiShots.map((shot) => (
                  <PhoneShot key={shot.file} shot={shot} maxWidth="max-w-64" />
                ))}
              </div>
              <NoteList title="Design notes" notes={highFiNotes} />
            </Section>

            <Section
              collapsible
              id="components"
              title="Components and Assets"
              trail={parts[2].title}
            >
              <NoteWindow title="Component notes">
                <p className={noteText}>
                  Alongside the screens, the Figma file keeps boards of the
                  parts they are built from.
                </p>
              </NoteWindow>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FullImage
                  file="components.jpg"
                  width={1600}
                  height={936}
                  title="Component sheet"
                  caption="Buttons in five colors, round icon buttons, nine book colors, and a color picker."
                  alt="Component board on a blue background: Play, Next, and Continue buttons in five colors, round icon buttons, a progress bar, nine book icons in different colors, and a color picker"
                />
                <FullImage
                  file="font-board.jpg"
                  width={1280}
                  height={1100}
                  title="Early font and texture board"
                  caption="The first typeface was Irish Grover, with torn-paper label textures."
                  alt="Font board showing the typeface Irish Grover Regular and a set of white torn-paper label shapes on blue"
                />
              </div>
            </Section>

            <Section
              collapsible
              id="accessibility"
              title="Accessibility Check"
              trail={parts[2].title}
            >
              <NoteWindow title="How this was checked">
                <p className={noteText}>
                  The brand book makes an accessibility argument, so I checked
                  what it says against the screens. Contrast was measured with
                  the WCAG formula, from the brand colors and from the exported
                  screens.
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

            <Section
              collapsible
              id="testing"
              title="Testing"
              trail={parts[2].title}
            >
              <NoteWindow title="Testing notes">
                <p className={noteText}>
                  Early testing sessions with peers and feedback from my client
                  helped validate the app’s direction. While the current version
                  is still evolving, those small tests gave insights into what
                  works, what delights, and where the design needs to simplify
                  or expand. No tests with children are documented yet.
                </p>
              </NoteWindow>
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
              usable="A child signs in with a name and an avatar, moves around with big labeled round buttons, and adds one element at a time in the editor, each with a cross and a tick to cancel or keep it. Only peers and the client have tried it, not children."
              equitable="The brand book sets a rounded heavy typeface at 18 to 24 pt, left-aligned text with a 1.5 line height, and sentence case, for children with different learning styles. But white on the brand orange and blue measures 2.3:1 and 2.1:1 as plain colors, and no tests with children of different abilities are documented."
              enjoyable="Color-coded sections and book covers, a row of counts (Tales Written, Tales Read, Friends), a capybara mascot, and a bright “Start writing now!” button give it a playful feel. The delight reported so far comes from peers and the client."
              useful="A child can write and decorate a book with text, characters, tiles, and music, share it, add friends, and read friends’ books. All of these screens exist, but the app has not launched, so there is no evidence of its effect."
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
                    While not yet launched, the prototype has already resonated
                    with my peers and client who see its potential. The early
                    results highlight a user experience that is both
                    approachable and imaginative, laying the groundwork for the
                    next stages of development.
                  </p>
                </NoteWindow>
                <NoteWindow title="Impact" level={4}>
                  <p className={noteText}>
                    Though still in its early stages, TaleMakers is already
                    beginning to spark excitement among creatives. Roostercat
                    lists it as “In Development” for mobile, described as an app
                    where kids can create characters, build worlds, and share
                    adventures. Its vision is to empower every child to become a
                    storyteller, with confidence, imagination, and digital
                    fluency as the hope.
                  </p>
                </NoteWindow>
              </div>
              <div className="flex justify-center">
                <LinkButton href="https://roostercat.games/" primary>
                  See it on Roostercat’s site
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

export default TaleMakers;
