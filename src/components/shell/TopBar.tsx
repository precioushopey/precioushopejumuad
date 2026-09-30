import { SearchPill } from "./SearchPill";

export const TopBar = () => (
  <header className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between md:gap-4 lg:pl-[5.5rem]">
    <p className="min-w-0 text-balance text-xl font-medium sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
      Hello, I’m{" "}
      <span className="font-display text-accent">Precious Hope Jumuad</span>
    </p>
    <SearchPill />
  </header>
);
