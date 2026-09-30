// Philippine time (Asia/Manila, UTC+8, no daylight saving), independent of the visitor's timezone.
const TIME_ZONE = "Asia/Manila";

const partsFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hourCycle: "h23",
});

const labelFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

/** Hours (0-23), minutes and seconds on the clock in Manila at instant `now`. */
export const manilaClock = (now: Date = new Date()) => {
  const get = (type: string) =>
    Number(
      partsFormatter.formatToParts(now).find((p) => p.type === type)?.value ??
        0,
    );
  // Some engines report midnight as 24 even with h23; normalise it.
  return {
    hours: get("hour") % 24,
    minutes: get("minute"),
    seconds: get("second"),
  };
};

/** Readable Manila time, e.g. "3:42 PM". */
export const manilaTimeLabel = (now: Date = new Date()): string =>
  labelFormatter.format(now);
