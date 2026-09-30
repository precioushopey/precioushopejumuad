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
      {/* Same style as the labels under the ring gauges. */}
      <p className="text-xs text-cream/70">
        <time dateTime={now.toISOString()}>{manilaTimeLabel(now)}</time> PH Time
      </p>
    </div>
  );
};
