// Makes the favicon set from public/assets/images/site/logo.png, into public/:
//   favicon.ico (48px), favicon-32x32.png, apple-touch-icon.png (180px), icon-192.png, icon-512.png
// The tab icons keep the logo's transparent background; the phone-style icons sit on the site's dark
// brown so they are not drawn on white or black by the device.
//
// Run it by hand after changing the logo, then commit the result:
//   npm run icons
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const SOURCE = "public/assets/images/site/logo.png";
const DARK = { r: 28, g: 20, b: 16, alpha: 1 }; // #1c1410, the page's theme colour
const CLEAR = { r: 0, g: 0, b: 0, alpha: 0 };

// The logo runs edge to edge, so it gets a margin (a share of the icon's size) to breathe.
const icon = async (size, margin, background) => {
  const inner = Math.round(size * (1 - margin * 2));
  const edge = Math.round(size * margin);
  const padded = sharp(SOURCE)
    .resize(inner, inner, { fit: "contain", background: CLEAR })
    .extend({
      top: edge,
      left: edge,
      bottom: size - inner - edge,
      right: size - inner - edge,
      background: CLEAR,
    });
  if (background.alpha !== 1) return padded.png({ compressionLevel: 9 });
  // A solid background (the phone icons) is painted behind the whole logo, margin included. Sharp
  // flattens before it adds the margin, so the padded image is flattened in a second pass.
  const { r, g, b } = background;
  return sharp(await padded.png().toBuffer())
    .flatten({ background: { r, g, b } })
    .png({ compressionLevel: 9 });
};

await (await icon(32, 0.04, CLEAR)).toFile("public/favicon-32x32.png");
await (await icon(180, 0.14, DARK)).toFile("public/apple-touch-icon.png");
await (await icon(192, 0.14, DARK)).toFile("public/icon-192.png");
await (await icon(512, 0.14, DARK)).toFile("public/icon-512.png");

// A .ico file is a small header followed by images; modern browsers accept a PNG inside it.
const png = await (await icon(48, 0.04, CLEAR)).toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // one image
header.writeUInt8(48, 6); // width
header.writeUInt8(48, 7); // height
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(png.length, 14); // image size
header.writeUInt32LE(22, 18); // image offset
writeFileSync("public/favicon.ico", Buffer.concat([header, png]));

console.log(
  "icons: favicon.ico, favicon-32x32.png, apple-touch-icon.png, icon-192.png, icon-512.png",
);
