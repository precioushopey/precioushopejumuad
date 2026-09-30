import { useId, useState, type ReactNode } from "react";
import { LuChevronDown } from "react-icons/lu";
import { WindowBar } from "./WindowBar";

// A window card with its summary always visible and the details hidden until the chevron button
// in the title bar is pressed.
export const AccordionCard = ({
  icon,
  title,
  summary,
  children,
}: {
  icon?: ReactNode;
  title: string;
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
        }
      />
      {summary}
      <div id={panelId} hidden={!open}>
        {children}
      </div>
    </div>
  );
};
