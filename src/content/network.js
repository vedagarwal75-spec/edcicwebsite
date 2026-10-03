// People shown on the "Our Network" page, in this order.
// `image` is a file name inside src/assets/network/ (drop the new photo there).
// Optionally add  description: "..."  to show a line under the name.

const photos = require.context("../assets/network", false, /\.(png|jpe?g|webp)$/i);

const networkList = [
  { name: "Arjun Malhotra", image: "arjunMalhotra.png" },
  { name: "Harshita Sabharwal", image: "harshitaSabharwal.png" },
  { name: "Manoj Kohli", image: "manojKohli.png" },
  { name: "Nayan Mehta", image: "nayanMehta.png" },
  { name: "Philip Kotler", image: "philipkotler.png" },
  { name: "Prashant Tandon", image: "prashantTandon.png" },
  { name: "Sanjeev Bikchandani", image: "sanjeevBakchandani.png" },
  { name: "Soumen Ray", image: "soumenRay.png" },
  { name: "Sourav Ganguly", image: "souravGanguly.png" },
  { name: "Suhail Sameer", image: "suhailSameer.png" },
  { name: "Vivek Sharma", image: "vivekSharma.png" },
  { name: "V Krishnan", image: "vKrishnan.png" },
];

export const networkMembers = networkList.map(({ image, ...rest }) => ({
  ...rest,
  image: photos(`./${image}`),
}));

export const NETWORK_TITLE = "OUR NETWORK";
