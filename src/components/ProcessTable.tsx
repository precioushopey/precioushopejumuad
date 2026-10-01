import type { ProcessRow } from "../lib/about";

// Task-Manager-style summary at the top of each experience card: one row per role.
export const ProcessTable = ({
  rows,
  labels = { running: "Running", ended: "Ended" },
}: {
  rows: ProcessRow[];
  labels?: { running: string; ended: string };
}) => (
  <table className="w-full table-fixed border-b border-line/40 text-left text-xs">
    <thead className="text-cream/50">
      <tr>
        <th className="px-3 py-2 sm:px-6 font-normal">Name</th>
        <th className="w-[5.75rem] py-2 pr-3 font-normal sm:w-28">Status</th>
        <th className="hidden w-36 py-2 pr-3 font-normal sm:table-cell">
          Started
        </th>
        <th className="w-[5.25rem] py-2 pr-3 text-left font-normal sm:w-32 sm:pr-6">
          Duration
        </th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={index} className="border-t border-line/20">
          <td className="px-3 py-2 sm:px-6 font-medium">{row.name}</td>
          <td className="whitespace-nowrap py-2 pr-3">
            <span className="flex items-center gap-1.5">
              <span
                aria-hidden
                className={`h-1.5 w-1.5 rounded-full ${row.running ? "bg-accent" : "bg-cream/40"}`}
              />
              {row.running ? labels.running : labels.ended}
            </span>
          </td>
          <td className="hidden whitespace-nowrap py-2 pr-3 text-cream/70 sm:table-cell">
            {row.started}
          </td>
          <td className="whitespace-nowrap py-2 pr-3 sm:pr-6 text-left text-cream/70">
            {row.duration}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
