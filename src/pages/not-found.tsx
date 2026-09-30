import { Link } from "react-router-dom";
import { LuChevronLeft } from "react-icons/lu";

const NotFound = () => {
  return (
    <div className="container mx-auto max-w-5xl space-y-6 py-4 px-8">
      <div>
        <div className="flex justify-center gap-x-2 font-bold text-glow animate-fade-in">
          <h1 className="text-3xl sm:text-6xl">Not</h1>
          <h2 className="font-display text-3xl sm:text-5xl">Found</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/" className="w-fit flex items-center gap-x-2 white-button">
          <LuChevronLeft size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
