import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const files = [
  ...["src/pages", "src/projects", "src/blogs"].flatMap((dir) =>
    readdirSync(dir)
      .filter((f) => f.endsWith(".tsx") && !(dir === "src/pages" && f === "home.tsx"))
      .map((f) => join(dir, f))
  ),
  "src/components/SkillsSection.tsx",
  "src/components/ContactSection.tsx",
];

// pinyon-script accents were a small-x-height script, so their sizes step down for the display font.
const sizeMap = {
  "text-8xl": "text-5xl",
  "text-6xl": "text-4xl",
  "text-5xl": "text-3xl",
  "text-4xl": "text-2xl",
  "text-3xl": "text-xl",
  "text-2xl": "text-lg",
};

const remapPinyon = (classes) =>
  classes
    .split(/\s+/)
    .map((token) => {
      if (token === "pinyon-script") return "font-display";
      const m = token.match(/^((?:[a-z]+:)?)(text-\dxl)$/);
      return m && sizeMap[m[2]] ? m[1] + sizeMap[m[2]] : token;
    })
    .join(" ");

let changed = 0;
for (const file of files) {
  const before = readFileSync(file, "utf8");
  let s = before;

  s = s.replace(/^import \{ Navbar \} from "[^"]+";\r?\n/gm, "");
  s = s.replace(/^import \{ SparkleBackground \} from "[^"]+";\r?\n/gm, "");
  s = s.replace(/^\s*<SparkleBackground \/>\s*\r?\n/gm, "");
  s = s.replace(/^\s*<Navbar \/>\s*\r?\n/gm, "");
  s = s.replace(/^\s*\{\/\* (Navbar|Background Effects) \*\/\}\s*\r?\n/gm, "");
  s = s.replace(/<header[^>]*>\s*<\/header>\s*\r?\n?/g, "");

  // Outer wrapper: the shell now owns the viewport height and the top padding.
  s = s.replace(/min-h-screen overflow-x-hidden ?/g, "");
  s = s.replace(/\bpy-24\b/g, "py-4");

  // Accent words and fonts.
  s = s.replace(/className="([^"]*pinyon-script[^"]*)"/g, (_, c) => `className="${remapPinyon(c)}"`);
  s = s.replace(/\bfont-noto\s*/g, "");

  // Dark brown reading boxes become light glass.
  s = s.replace(/bg-\[#462317\]\/80/g, "bg-white/60");

  if (s !== before) {
    writeFileSync(file, s);
    changed++;
    console.log("updated", file);
  }
}
console.log(`\n${changed} files updated`);
