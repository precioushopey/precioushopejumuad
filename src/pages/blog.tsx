import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";

const Blog = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <SparkleBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Navbar />
      <main className="py-24 px-8">
        <div className="container mx-auto max-w-5xl space-y-6">
          <div className="flex justify-center font-bold text-glow animate-fade-in">
            <h1 className="font-noto text-3xl sm:text-6xl">Coming</h1>
            <h2 className="pinyon-script text-5xl sm:text-8xl">Soon</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
