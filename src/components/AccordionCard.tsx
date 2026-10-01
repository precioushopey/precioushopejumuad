import { useId, useState, type ReactNode } from "react";
import { LuChevronDown } from "react-icons/lu";
import { WindowBar } from "./WindowBar";

// A window card with its summary always visible and the details hidden until the chevron button
// in the title bar is pressed.
export const AccordionCard = ({
  icon,
  title,
  link,
  summary,
  children,
}: {
  icon?: ReactNode;
  title: string;
  /** An icon link in the title bar, e.g. to the company's site. */
  link?: { href: string; label: string; icon: ReactNode };
  summary: ReactNode;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="glass-card overflow-hidden">
      <WindowBar
        icon={icon}
        title={title}
        onClick={() => setOpen(!open)}
        status={
          <span className="flex items-center gap-3">
            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                aria-label={link.label}
                title={link.label}
                className="flex h-4 w-4 items-center justify-center text-cream/50 transition-colors hover:text-cream"
              >
                {link.icon}
              </a>
            )}
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={`${open ? "Hide" : "Show"} details for ${title}`}
              className="flex h-4 w-4 items-center justify-center text-cream/50 transition-colors group-hover:text-cream"
            >
              <LuChevronDown
                aria-hidden
                size={14}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
          </span>
        }
      />
      {summary}
      {/* Animates the height by growing a 0fr grid row to 1fr. While closed the content is
          invisible and inert, so it can't be tabbed into or read out. */}
      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none ${
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <div
          className={`min-h-0 overflow-hidden transition-opacity duration-300 motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
