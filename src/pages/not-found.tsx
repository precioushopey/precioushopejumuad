import { Navbar } from "../components/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <main className="py-24 px-8">
        <div className="container mx-auto max-w-5xl space-y-6">
          <h1 className="relative -ml-30 sm:-ml-40 font-noto text-5xl sm:text-6xl font-bold text-center text-glow">
            Not
            <span className="absolute top-1 -ml-4 pinyon-script text-7xl sm:text-8xl">
              Found
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
