import { Navbar } from "../components/Navbar";

const CpExpress = () => {
  return (
    <div>
      <Navbar />
      <main className="py-24 px-8">
        <div className="container mx-auto max-w-5xl space-y-6">
          <h1 className="relative -ml-30 sm:-ml-40 font-noto text-5xl sm:text-6xl font-bold text-center text-glow">
            Coming
            <span className="absolute top-2 -ml-2 pinyon-script text-7xl sm:text-8xl">
              Soon
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
};

export default CpExpress;
