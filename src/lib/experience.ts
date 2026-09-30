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
