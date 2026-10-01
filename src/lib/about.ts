import type { Education, Job, SiteKind } from "../data/about";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthIndex = (text: string) => {
  const [month, year] = text.trim().split(" ");
  return Number(year) * 12 + MONTHS.indexOf(month);
};

// "February 2026 - Present" as a first and last month; "Present" ends this month.
const rangeOf = (date: string, now: Date) => {
  const [from, to] = date.split(" - ");
  return {
    start: monthIndex(from),
    end:
      to.trim() === "Present"
        ? now.getFullYear() * 12 + now.getMonth()
        : monthIndex(to),
  };
};

// Whole months, counting both the first and the last month (LinkedIn's rule).
const durationLabel = (months: number) => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [
    years ? `${years} yr${years > 1 ? "s" : ""}` : "",
    rest ? `${rest} mo${rest > 1 ? "s" : ""}` : "",
  ]
    .filter(Boolean)
    .join(" ");
};

const durationOf = (date: string, now: Date) => {
  const { start, end } = rangeOf(date, now);
  return durationLabel(end - start + 1);
};

/** One line of the Task-Manager-style table at the top of an experience or education card. */
export type ProcessRow = {
  name: string;
  started: string;
  duration: string;
  running: boolean;
};

const processRow = (
  name: string,
  date: string,
  now: Date,
): ProcessRow => ({
  name,
  started: date.split(" - ")[0],
  duration: durationOf(date, now),
  running: date.endsWith("Present"),
});

export type CompanyGroup = {
  /** The most recent role, which supplies the card's logo, link and location. */
  first: Job;
  roles: (Job & { duration: string })[];
  rows: ProcessRow[];
  /** The whole time at the company, from the first role's start to the last one's end. */
  totalDuration: string;
  /** Whether every role has the same employment type (then it is shown once). */
  sameType: boolean;
};

// Consecutive jobs at the same company are shown as one card, like LinkedIn does.
export const groupJobsByCompany = (jobs: Job[], now: Date): CompanyGroup[] => {
  const groups = jobs.reduce<Job[][]>((acc, job) => {
    const last = acc[acc.length - 1];
    if (last && last[0].company === job.company) last.push(job);
    else acc.push([job]);
    return acc;
  }, []);

  return groups.map((group) => {
    const first = group[0];
    const ranges = group.map((job) => rangeOf(job.date, now));
    const total =
      Math.max(...ranges.map((r) => r.end)) -
      Math.min(...ranges.map((r) => r.start)) +
      1;
    return {
      first,
      roles: group.map((job) => ({
        ...job,
        duration: durationOf(job.date, now),
      })),
      rows: group.map((job) => processRow(job.title, job.date, now)),
      totalDuration: durationLabel(total),
      sameType: group.every(
        (job) => job.employmentType === first.employmentType,
      ),
    };
  });
};

/** Everything an Experiences or Education accordion card shows, so both folders render alike. */
export type AboutCard = {
  key: string;
  kind: "job" | "school";
  /** The title bar text. */
  title: string;
  site?: { href: string; kind: SiteKind };
  rows: ProcessRow[];
  /** Status words for the table; the default is Running / Ended. */
  labels?: { running: string; ended: string };
  image: { src: string; alt: string; className?: string };
  /** The underlined first line next to the logo. */
  heading: string;
  lines: { text: string; bold?: boolean }[];
  /** Education: a paragraph under the details. */
  description?: string;
  /** One role at a company: its bullet points. */
  bullets?: string[];
  /** Several roles at a company: a timeline, one entry per role. */
  timeline?: {
    key: string;
    title: string;
    type?: string;
    period: string;
    bullets: string[];
  }[];
};

export const jobCard = ({
  first,
  roles,
  rows,
  totalDuration,
  sameType,
}: CompanyGroup): AboutCard => {
  const base = {
    key: first.company,
    kind: "job" as const,
    title: first.company,
    site: first.site,
    rows,
    image: {
      src: first.imgSrc,
      alt: first.imgAlt,
      className: first.imgClass,
    },
  };
  if (roles.length === 1) {
    return {
      ...base,
      heading: first.title,
      lines: [
        { text: `${first.company} • ${first.employmentType}`, bold: true },
        { text: first.date },
        { text: first.location },
      ],
      bullets: first.responsibilities,
    };
  }
  return {
    ...base,
    heading: first.company,
    lines: [
      {
        text: `${sameType ? `${first.employmentType} • ` : ""}${totalDuration}`,
      },
      { text: first.location },
    ],
    timeline: roles.map((role) => ({
      key: role.date,
      title: role.title,
      type: sameType ? undefined : role.employmentType,
      period: `${role.date} • ${role.duration}`,
      bullets: role.responsibilities,
    })),
  };
};

export const schoolCard = (edu: Education, now: Date): AboutCard => ({
  key: edu.school,
  kind: "school",
  title: edu.school,
  site: edu.site,
  rows: [processRow(edu.degree, edu.dates, now)],
  labels: { running: "Studying", ended: "Graduated" },
  image: { src: edu.imgSrc, alt: edu.alt },
  heading: edu.school,
  lines: [
    { text: edu.degree, bold: true },
    { text: edu.location },
    { text: edu.dates },
  ],
  description: edu.description,
});
