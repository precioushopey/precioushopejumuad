import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";

const NotFound = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8">
      <SparkleBackground />

      <header>
        <Navbar />
      </header>

      <main>
        <div className="flex justify-center font-bold text-glow animate-fade-in">
          <h1 className="font-noto text-3xl sm:text-6xl">Not</h1>
          <h2 className="pinyon-script text-5xl sm:text-8xl">Found</h2>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
