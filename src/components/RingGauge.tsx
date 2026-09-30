type Props = { value: number; max: number; label: string };

const RADIUS = 38;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const RingGauge = ({ value, max, label }: Props) => {
  const fraction = max > 0 ? Math.min(value / max, 1) : 0;
  return (
    <div
      role="img"
      aria-label={`${value} ${label}`}
      className="flex flex-col items-center gap-1"
    >
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 100 100" aria-hidden className="h-full w-full -rotate-90">
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
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-medium">
          {value}
        </span>
      </div>
      <span className="text-xs text-cream/70">{label}</span>
    </div>
  );
};
