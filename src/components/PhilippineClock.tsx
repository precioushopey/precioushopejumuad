import { useEffect, useState } from "react";
import { manilaClock, manilaTimeLabel } from "../lib/manilaTime";
import { AnalogClock } from "./AnalogClock";

// Always shows Philippine time, wherever the visitor is.
export const PhilippineClock = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const { hours, minutes, seconds } = manilaClock(now);

  return (
    <div className="flex shrink-0 flex-col items-center gap-1 text-cream">
      <AnalogClock
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        className="h-24 w-24"
      />
      <p className="text-sm font-medium">
        <time dateTime={now.toISOString()}>{manilaTimeLabel(now)}</time>
      </p>
      <p className="max-w-[8rem] text-center text-[11px] leading-tight text-cream/70">
        My current time in the Philippines
      </p>
    </div>
  );
};
