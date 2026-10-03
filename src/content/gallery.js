// Gallery photos = every image in src/assets/gallery/, shown in file-name order
// (image1, image2, ... image10, image11). To add a photo, drop it in that folder;
// to remove one, delete it. To control the order, rename the files.

const context = require.context("../assets/gallery", false, /\.(png|jpe?g|webp)$/i);

export const galleryImages = context
  .keys()
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => context(key));

export const GALLERY_TITLE = "Gallery";
