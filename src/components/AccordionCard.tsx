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
        status={
          <span className="flex items-center gap-1">
            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="flex h-6 w-6 items-center justify-center rounded-full text-cream/50 transition-colors hover:text-cream"
              >
                {link.icon}
              </a>
            )}
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={`${open ? "Hide" : "Show"} details for ${title}`}
              onClick={() => setOpen(!open)}
              className="flex h-6 w-6 items-center justify-center rounded-full text-cream/50 transition-colors hover:text-cream"
            >
              <LuChevronDown
                aria-hidden
                size={16}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
          </span>
        }
      />
      {summary}
      <div id={panelId} hidden={!open}>
        {children}
      </div>
    </div>
  );
};
