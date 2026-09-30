import { SearchPill } from "./SearchPill";

export const TopBar = () => (
  <header className="flex items-center justify-between gap-4 lg:pl-8">
    <p className="min-w-0 truncate text-xl font-medium sm:text-3xl">
      Hello, I’m{" "}
      <span className="font-display text-accent">Precious Hope</span>
    </p>
    <SearchPill />
  </header>
);
