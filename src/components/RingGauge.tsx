import {
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Props = {
  value: number;
  max: number;
  label: string;
  /** Optional explanation shown on hover, keyboard focus and tap. */
  tip?: ReactNode;
  /** Where the tip sits relative to the gauge; use "right" for gauges near the panel's right edge. */
  tipAlign?: "center" | "right";
};

const RADIUS = 38;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Counts the centre number up from 0 in step with the ring's sweep (see .ring-sweep in index.css).
const useCountUp = (target: number) => {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(target);
      return;
    }
    const DELAY = 1000;
    const DURATION = 1600;
    let frame = 0;
    const start = performance.now() + DELAY;
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - start) / DURATION, 0), 1);
      setShown(
        Math.round(
          target * (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
        ),
      );
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return shown;
};

export const RingGauge = ({
  value,
  max,
  label,
  tip,
  tipAlign = "center",
}: Props) => {
  const fraction = max > 0 ? Math.min(value / max, 1) : 0;
  const tipId = useId();
  const shown = useCountUp(value);
  return (
    <div
      role={tip ? "group" : "img"}
      aria-label={`${value} ${label}`}
      aria-describedby={tip ? tipId : undefined}
      tabIndex={tip ? 0 : undefined}
      className={`relative flex flex-col items-center gap-1 ${
        tip ? "group cursor-help rounded-2xl" : ""
      }`}
    >
      <div className="relative h-20 w-20">
        <svg
          viewBox="0 0 100 100"
          aria-hidden
          className="h-full w-full -rotate-90"
        >
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="9"
          />
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - fraction)}
            className="ring-sweep"
            style={{ "--ring-full": CIRCUMFERENCE } as CSSProperties}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-medium">
          {shown}
        </span>
      </div>
      <span className="text-xs text-cream/70">{label}</span>
      {tip && (
        <span
          id={tipId}
          role="tooltip"
          className={`pointer-events-none absolute bottom-full z-30 mb-2 w-52 rounded-xl border border-line bg-black/90 px-3 py-2 text-left text-[11px] leading-snug text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 ${
            tipAlign === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
          }`}
        >
          {tip}
        </span>
      )}
    </div>
  );
};
