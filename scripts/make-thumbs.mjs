// Makes small WebP copies (at most 480px wide) of the images the site shows in tiles, avatars and
// logos, so a 48px tile does not download a 1000px picture. Copies go to
// public/assets/images/thumbs/<same path>.webp and src/lib/thumb.ts points at them.
//
// Run it by hand after adding or changing an image, then commit the result:
//   node scripts/make-thumbs.mjs
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import sharp from "sharp";

const ROOT = "public/assets/images";
const OUT = join(ROOT, "thumbs");
const FOLDERS = ["projects", "blog", "experience", "education", "certifications"];
const SINGLES = ["profile/precious.png"];
const MAX_WIDTH = 480;

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const sources = [
  ...FOLDERS.flatMap((folder) => walk(join(ROOT, folder))),
  ...SINGLES.map((file) => join(ROOT, file)),
].filter((file) => /\.(png|jpe?g|jfif|webp)$/i.test(file));

let made = 0;
for (const source of sources) {
  const rel = relative(ROOT, source).split(sep).join("/");
  const target = join(OUT, rel.replace(/\.[^.]+$/, ".webp"));
  if (existsSync(target) && statSync(target).mtimeMs >= statSync(source).mtimeMs) continue;
  mkdirSync(dirname(target), { recursive: true });
  await sharp(source, { failOn: "none" })
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 })
    .toFile(target);
  made++;
}
console.log(`thumbs: ${made} written, ${sources.length - made} already up to date`);
