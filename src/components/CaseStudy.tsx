import type { ReactNode } from "react";
import {
  LuAccessibility,
  LuCircleCheck,
  LuFolderOpen,
  LuImagePlus,
  LuListChecks,
  LuRoute,
  LuSmile,
  LuStickyNote,
  LuTarget,
  LuUserRound,
} from "react-icons/lu";
import { WindowBar } from "./WindowBar";

// Building blocks shared by the case-study pages in `src/projects/` (OJT Connect, ROOTÉ): app
// windows, ruled notes, and the address-bar section headings.

export const noteText =
  "hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80";
export const cardText = "text-left text-sm leading-6 text-cream/80";

// Ruled lines like the notes on the About page; every line of text is 24px tall so it sits on a rule.
export const ruled =
  "bg-[repeating-linear-gradient(transparent_0_23px,rgb(245_234_214/0.08)_23px_24px)] bg-[position:0_1.25rem]";

// An invisible target 48px above a heading, so a contents link lands with the heading in view (the
// site's section jump scrolls 48px past the target's top). The element holding it must be `relative`.
export const Anchor = ({ id }: { id: string }) => (
  <span id={id} aria-hidden className="absolute -top-12 left-0" />
);

// An app window: a title bar (an optional heading), the content, and an optional status bar.
export const Window = ({
  icon,
  title,
  level,
  status,
  footer,
  children,
}: {
  icon: ReactNode;
  title: string;
  level?: 2 | 3 | 4 | 5;
  status?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}) => (
  <div className="glass-card overflow-hidden text-left">
    <WindowBar icon={icon} title={title} headingLevel={level} status={status} />
    <div className="relative">{children}</div>
    {footer && (
      <div className="border-t border-line/40 px-6 py-2 text-xs text-cream/60">
        {footer}
      </div>
    )}
  </div>
);

// A window holding a note on ruled paper.
export const NoteWindow = ({
  title,
  level,
  children,
}: {
  title: string;
  level?: 2 | 3 | 4 | 5;
  children: ReactNode;
}) => (
  <div className="glass-card overflow-hidden bg-cream/[0.07] text-left">
    <WindowBar
      icon={<LuStickyNote size={16} />}
      title={title}
      headingLevel={level}
    />
    <div className={`space-y-6 px-6 pt-6 pb-6 ${ruled}`}>{children}</div>
  </div>
);

// The heading of a section, drawn as the address bar of a file explorer: the part it belongs to,
// then its own title.
export const Section = ({
  id,
  level = 3,
  title,
  trail,
  hideTitle,
  children,
}: {
  id: string;
  level?: 2 | 3;
  title: string;
  trail?: string;
  hideTitle?: boolean;
  children: ReactNode;
}) => {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <section className="relative space-y-6">
      <Anchor id={id} />
      {hideTitle ? (
        <Heading className="sr-only">{title}</Heading>
      ) : (
        <div className="flex flex-wrap items-center gap-x-2 rounded-full border border-line bg-cream/[0.07] px-6 py-2 text-left">
          <LuFolderOpen
            size={16}
            aria-hidden
            className="shrink-0 text-accent"
          />
          {trail && (
            <span aria-hidden className="text-xs text-cream/60">
              {trail} ›
            </span>
          )}
          <Heading className="font-semibold text-base">{title}</Heading>
        </div>
      )}
      {children}
    </section>
  );
};

type Row = { label: string; text: string };

// What the project covers and what it must follow. Goals, timeline, languages and tools are already
// in "The goal" and Properties, so this holds only the rest: scope, limits, and standards.
export const ScopeAndStandards = ({ rows }: { rows: Row[] }) => (
  <Section id="scope-and-standards" level={2} title="Scope and Standards">
    <Window
      icon={<LuListChecks size={16} />}
      title="Requirements"
      footer={`${rows.length} items`}
    >
      <dl className="divide-y divide-line/40 text-sm">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[10rem_1fr] sm:gap-3"
          >
            <dt className="font-medium">{row.label}</dt>
            <dd className="text-cream/70">{row.text}</dd>
          </div>
        ))}
      </dl>
    </Window>
  </Section>
);

// One "As a ..., I want ..., so that ..." line for each persona, in the words of the persona and
// problem statement it comes from.
export const UserStories = ({
  trail,
  stories,
}: {
  trail?: string;
  stories: { who: string; story: string }[];
}) => (
  <Section id="user-stories" title="User Stories" trail={trail}>
    <Window
      icon={<LuUserRound size={16} />}
      title="User stories"
      level={4}
      footer={`${stories.length} ${stories.length === 1 ? "story" : "stories"}`}
    >
      <dl className="divide-y divide-line/40 text-sm">
        {stories.map((item) => (
          <div
            key={item.who}
            className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[10rem_1fr] sm:gap-3"
          >
            <dt className="font-medium">{item.who}</dt>
            <dd className="text-cream/70">{item.story}</dd>
          </div>
        ))}
      </dl>
    </Window>
  </Section>
);

type Phase = { status: string; text: string };

const phaseMeta = [
  { key: "empathize", title: "1. Empathize" },
  { key: "define", title: "2. Define" },
  { key: "ideate", title: "3. Ideate" },
  { key: "prototype", title: "4. Prototype" },
  { key: "test", title: "5. Test" },
] as const;

// The design thinking phases at a glance, one honest line each. `status` is Done, Partly, Planned,
// or To add (a placeholder for work still to be written up); the folders below hold the detail.
export const ProcessStrip = ({
  empathize,
  define,
  ideate,
  prototype,
  test,
}: Record<(typeof phaseMeta)[number]["key"], Phase>) => {
  const phases = { empathize, define, ideate, prototype, test };
  return (
    <Section id="process" level={2} title="Design Process">
      <Window
        icon={<LuRoute size={16} />}
        title="Design thinking"
        footer="The phases repeat as feedback comes in."
      >
        <dl className="divide-y divide-line/40 text-sm">
          {phaseMeta.map((phase) => (
            <div
              key={phase.key}
              className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[10rem_1fr] sm:gap-3"
            >
              <dt>
                <span className="block font-medium">{phase.title}</span>
                <span className="block text-xs text-cream/60">
                  {phases[phase.key].status}
                </span>
              </dt>
              <dd className="text-cream/70">{phases[phase.key].text}</dd>
            </div>
          ))}
        </dl>
      </Window>
    </Section>
  );
};

const qualityMeta = [
  { key: "usable", title: "Usable", icon: <LuCircleCheck size={16} /> },
  { key: "equitable", title: "Equitable", icon: <LuAccessibility size={16} /> },
  { key: "enjoyable", title: "Enjoyable", icon: <LuSmile size={16} /> },
  { key: "useful", title: "Useful", icon: <LuTarget size={16} /> },
] as const;

// How a project holds up against the four qualities of good UX: usable, equitable, enjoyable, and
// useful. Each case study passes one short, honest sentence or two per quality.
export const UxQualities = ({
  trail,
  usable,
  equitable,
  enjoyable,
  useful,
}: {
  trail?: string;
  usable: string;
  equitable: string;
  enjoyable: string;
  useful: string;
}) => {
  const text = { usable, equitable, enjoyable, useful };
  return (
    <Section id="ux-qualities" title="Good UX Check" trail={trail}>
      <p className={cardText}>
        Good UX is usable, equitable, enjoyable, and useful. Here is how this
        project holds up against each.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {qualityMeta.map((quality) => (
          <Window
            key={quality.key}
            icon={quality.icon}
            title={quality.title}
            level={4}
          >
            <p className={`p-6 ${cardText}`}>{text[quality.key]}</p>
          </Window>
        ))}
      </div>
    </Section>
  );
};

// Stands in for a screenshot that is still to come: says what the picture should show.
export const ImagePlaceholder = ({ children }: { children: ReactNode }) => (
  <div className="flex aspect-video w-full flex-col items-center justify-center gap-1.5 rounded-xl md:rounded-2xl border border-dashed border-accent/50 bg-accent/5 p-6 text-center">
    <LuImagePlus size={24} aria-hidden className="text-accent" />
    <p className="text-xs font-medium text-accent">Image needed</p>
    <p className="max-w-xs text-xs leading-5 text-cream/60">{children}</p>
  </div>
);
