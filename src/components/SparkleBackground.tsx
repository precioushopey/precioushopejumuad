import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
};

export const SparkleBackground = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    generateSparkles();

    const handleResize = () => {
      generateSparkles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateSparkles = () => {
    const numberOfSparkles = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < numberOfSparkles; i++) {
      newSparkles.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setSparkles(newSparkles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle animate-pulse-subtle absolute rounded-full bg-white"
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            opacity: sparkle.opacity,
            animationDuration: `${sparkle.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
