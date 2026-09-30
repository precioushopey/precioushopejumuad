// When design work started: March 1, 2024 (months are 0-indexed).
const DESIGN_START = { year: 2024, month: 2, day: 1 };

const WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
const word = (n: number) => WORDS[n] ?? String(n);

/** Whole months from the design start date to `now` (never negative). */
export const monthsOfExperience = (now: Date = new Date()): number => {
  const months =
    (now.getFullYear() - DESIGN_START.year) * 12 +
    (now.getMonth() - DESIGN_START.month) -
    (now.getDate() < DESIGN_START.day ? 1 : 0);
  return Math.max(0, months);
};

/**
 * Human wording for the experience so far, meant to follow "over":
 * "8 months", "one year", "two years", "two and a half years", "three years"...
 * Half years round down, so it is always true to say "over <label>".
 */
export const experienceLabel = (now: Date = new Date()): string => {
  const months = monthsOfExperience(now);
  if (months < 1) return "a month";
  if (months < 12) return months === 1 ? "a month" : `${months} months`;
  const years = Math.floor(months / 12);
  const half = months % 12 >= 6;
  if (half) return `${word(years)} and a half years`;
  return years === 1 ? "one year" : `${word(years)} years`;
};

/** Midnight at the start of a calendar day in the Philippines (UTC+8, no daylight saving). */
export const manilaMidnight = (
  year: number,
  month: number,
  day: number,
): Date => new Date(Date.UTC(year, month, day) - 8 * 60 * 60 * 1000);

/** The day all experience is measured from (March 1, 2024). */
export const EXPERIENCE_START = manilaMidnight(
  DESIGN_START.year,
  DESIGN_START.month,
  DESIGN_START.day,
);

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * How much of my total experience (since EXPERIENCE_START) I have spent on a skill I started on
 * `start`, as a whole percent from 0 to 100. The first skill (started on EXPERIENCE_START) is 100%,
 * and every later one is the share of the time since then, so the numbers keep growing.
 * Use manilaMidnight() for start dates so the result is the same in every visitor's timezone.
 */
export const skillShare = (start: Date, now: Date = new Date()): number => {
  const total = now.getTime() - EXPERIENCE_START.getTime();
  if (total <= 0) return 0;
  const spent = now.getTime() - start.getTime();
  return Math.round(Math.max(0, Math.min(1, spent / total)) * 100);
};

/** The numbers behind skillShare, for showing how a ring was worked out (whole days). */
export const skillBreakdown = (start: Date, now: Date = new Date()) => ({
  percent: skillShare(start, now),
  days: Math.max(0, Math.floor((now.getTime() - start.getTime()) / DAY_MS)),
  totalDays: Math.max(
    0,
    Math.floor((now.getTime() - EXPERIENCE_START.getTime()) / DAY_MS),
  ),
});

/** e.g. "Sep 1, 2025", always as the date in the Philippines. */
export const formatManilaDate = (date: Date): string =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Manila",
  });
