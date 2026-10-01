// The small WebP copy of an image (made by scripts/make-thumbs.mjs), for tiles, avatars and logos.
// Full-size pictures stay for the places that show them large. Anything outside the folders that
// script covers is returned unchanged.
const COVERED =
  /^\/assets\/images\/(projects|blog|experience|education|certifications)\/|^\/assets\/images\/profile\/precious\.png$/;

export const thumb = (src: string) =>
  COVERED.test(src)
    ? src
        .replace("/assets/images/", "/assets/images/thumbs/")
        .replace(/\.[^./]+$/, ".webp")
    : src;
