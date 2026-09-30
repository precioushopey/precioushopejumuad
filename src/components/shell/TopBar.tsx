import { PhFlag } from "../PhFlag";
import { SearchPill } from "./SearchPill";

export const TopBar = () => (
  <header className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between md:gap-4 lg:pl-[5.5rem]">
    <p className="min-w-0 text-balance text-xl font-medium sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
      Hello, I’m{" "}
      <span className="font-display text-accent">Precious Hope </span>
      {/* Last word + flag never split, so the flag can't wrap onto a line by itself. */}
      <span className="whitespace-nowrap">
        <span className="font-display text-accent">Jumuad</span>{" "}
        <PhFlag className="inline-block h-[0.7em] w-[1.4em] align-[-0.05em] rounded-[3px]" />
      </span>
    </p>
    <SearchPill />
  </header>
);
