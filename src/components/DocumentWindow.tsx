import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import { WindowBar } from "./WindowBar";

// The window a blog post or a project page is shown in: title bar with the file name, an address
// bar with a back arrow and the path, the title with a line of details, and the page itself. On desktop the main panel already is the box, so the window adds none of its own;
// below lg, where the panel has no box, the window is its own card.
export const DocumentWindow = ({
  icon,
  fileName,
  backTo,
  backLabel,
  crumbs,
  title,
  meta,
  children,
}: {
  icon: ReactNode;
  fileName: string;
  backTo: string;
  backLabel: string;
  /** Path segments after "This PC"; missing ones are skipped. */
  crumbs: (string | undefined)[];
  title?: string;
  meta?: ReactNode;
  children: ReactNode;
}) => (
  <article className="shrink-0 animate-fade-in overflow-clip max-lg:glass-card">
    {/* Both bars stay at the top while the post scrolls. The article clips with overflow-clip (not
        hidden) so it is not a scroll container of its own and the bars stick to the panel. */}
    <div className="sticky top-0 z-10 bg-[rgb(28_20_16/0.99)] backdrop-blur-md">
      <WindowBar icon={icon} title={fileName} />
      <div className="flex items-center gap-2 border-b border-line/40 px-4 py-2 text-left text-xs text-cream/60 sm:px-8">
        <Link
          to={backTo}
          aria-label={backLabel}
          title={backLabel}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-cream/50 transition-colors hover:text-cream"
        >
          <LuArrowLeft size={16} aria-hidden />
        </Link>
        <span className="min-w-0 truncate">
          This PC
          {crumbs
            .filter((c): c is string => Boolean(c))
            .map((c) => (
              <span key={c}>
                {" "}
                <span aria-hidden>›</span>{" "}
                <span className="capitalize">{c}</span>
              </span>
            ))}
        </span>
      </div>
    </div>

    <div className="mx-auto max-w-5xl space-y-8 p-4 text-sm sm:p-8 sm:text-base lg:p-8">
      {title && (
        <header className="space-y-4 text-left">
          <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
            {title}
          </h1>
          {meta && (
            <p className="flex flex-wrap items-center gap-2 text-xs text-cream/60">
              {meta}
            </p>
          )}
        </header>
      )}
      {children}
    </div>
  </article>
);
