import type { ReactNode } from "react";
import { LuFolderOpen, LuImagePlus, LuStickyNote } from "react-icons/lu";
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

// Stands in for a screenshot that is still to come: says what the picture should show.
export const ImagePlaceholder = ({ children }: { children: ReactNode }) => (
  <div className="flex aspect-video w-full flex-col items-center justify-center gap-1.5 rounded-xl md:rounded-2xl border border-dashed border-accent/50 bg-accent/5 p-6 text-center">
    <LuImagePlus size={24} aria-hidden className="text-accent" />
    <p className="text-xs font-medium text-accent">Image needed</p>
    <p className="max-w-xs text-xs leading-5 text-cream/60">{children}</p>
  </div>
);
