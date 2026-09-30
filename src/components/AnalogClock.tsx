import { useEffect, useState } from "react";

const hand = (deg: number, length: number, width: number, color = "currentColor") => (
  <line
    x1="50"
    y1="50"
    x2="50"
    y2={50 - length}
    stroke={color}
    strokeWidth={width}
    strokeLinecap="round"
    transform={`rotate(${deg} 50 50)`}
  />
);

export const AnalogClock = ({ className = "" }: { className?: string }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} fill="none">
      {Array.from({ length: 12 }, (_, i) => (
        <line
          key={i}
          x1="50"
          y1="6"
          x2="50"
          y2={i % 3 === 0 ? 14 : 11}
          stroke="currentColor"
          strokeOpacity="0.7"
          strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
          strokeLinecap="round"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      {hand(hours * 30, 24, 3)}
      {hand(minutes * 6, 34, 2.5)}
      {hand(seconds * 6, 38, 1.2, "var(--color-accent)")}
      <circle cx="50" cy="50" r="2.5" fill="var(--color-accent)" />
    </svg>
  );
};
