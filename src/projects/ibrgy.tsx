import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";

const Ibrgy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8">
      <SparkleBackground />

      <header>
        <Navbar />
        <div className="flex justify-center font-bold text-glow animate-fade-in">
          <h1 className="font-noto text-3xl sm:text-6xl">Coming</h1>
          <h2 className="pinyon-script text-5xl sm:text-8xl">Soon</h2>
        </div>
      </header>

      <main className="space-y-18"></main>
    </div>
  );
};

export default Ibrgy;
