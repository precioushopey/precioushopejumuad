import { Link } from "react-router-dom";

export const TopBar = () => (
  <header className="flex items-center justify-between gap-4 px-5 py-5 sm:px-8">
    <Link to="/" className="font-display text-xl sm:text-2xl">
      Precious Hope
    </Link>
    <div className="flex items-center gap-3">
      <img
        src="/assets/images/logo.png"
        alt=""
        className="h-9 w-9 rounded-full border border-white object-cover"
      />
    </div>
  </header>
);
