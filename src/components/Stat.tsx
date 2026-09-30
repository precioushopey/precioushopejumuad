import { useEffect, useId, useState, type ReactNode } from "react";

type Props = {
  value: number;
  label: string;
  /** Optional explanation shown on hover, keyboard focus and tap. */
  tip?: ReactNode;
  /** Where the tip sits relative to the stat; use "right" near the panel's right edge. */
  tipAlign?: "center" | "right";
};

// Counts the number up from 0 once the cards have faded in.
const useCountUp = (target: number) => {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(target);
      return;
    }
    const DELAY = 800;
    const DURATION = 1200;
    let frame = 0;
    const start = performance.now() + DELAY;
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - start) / DURATION, 0), 1);
      setShown(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return shown;
};

// A plain statistic: a big number with its label underneath, on a soft yellow tile.
export const Stat = ({ value, label, tip, tipAlign = "center" }: Props) => {
  const tipId = useId();
  const shown = useCountUp(value);
  return (
    <div
      role={tip ? "group" : undefined}
      aria-label={tip ? `${value} ${label}` : undefined}
      aria-describedby={tip ? tipId : undefined}
      tabIndex={tip ? 0 : undefined}
      className={`relative flex min-w-0 max-w-32 flex-1 flex-col items-center gap-1.5 rounded-2xl bg-accent/10 px-2 py-4 sm:px-4 ${
        tip ? "group cursor-help" : ""
      }`}
    >
      <span
        aria-hidden={tip ? true : undefined}
        className="text-4xl font-medium leading-none text-accent"
      >
        {shown}
      </span>
      <span className="text-xs text-cream/70">{label}</span>
      {tip && (
        <span
          id={tipId}
          role="tooltip"
          className={`pointer-events-none absolute bottom-full z-30 mb-2 w-52 rounded-xl border border-line bg-black/90 px-4 py-2 text-left text-[11px] leading-snug text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 ${
            tipAlign === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
          }`}
        >
          {tip}
        </span>
      )}
    </div>
  );
};
