// Logos shown on the "Our Associations" page, in this order.
// `logo` is a file name inside src/assets/ourAssociations/ (drop the new logo there).

const logos = require.context("../assets/ourAssociations", false, /\.(png|jpe?g|webp|svg)$/i);

const associationList = [
  { name: "91.9 Friends FM", logo: "91.9FriendsFM.jpg" },
  { name: "Aakash", logo: "aakash.jpg" },
  { name: "Aditya Birla Group", logo: "adityaBirlaGroup.png" },
  { name: "Ambuja Neotia", logo: "ambujaNeotia.jpg" },
  { name: "Amust", logo: "amust.jpg" },
  { name: "Axxela", logo: "axxela.jpg" },
  { name: "Blinkit", logo: "blinkIt.jpg" },
  { name: "BYJU'S", logo: "byjus.jpg" },
  { name: "Collegify", logo: "collegify.jpg" },
  { name: "Edugraph", logo: "edugraph.jpg" },
  { name: "Exchange22", logo: "exchange22.jpg" },
  { name: "Global Reach", logo: "globalReach.jpg" },
  { name: "HDFC Bank", logo: "hdfc.jpg" },
  { name: "Hirect", logo: "hirect.jpg" },
  { name: "INOX", logo: "inox.jpg" },
  { name: "Internshala", logo: "internshala.jpg" },
  { name: "Lalbaba", logo: "lalbaba.jpg" },
  { name: "NASSCOM", logo: "nasscom.jpg" },
  { name: "Nearbuy", logo: "nearbuy.jpg" },
  { name: "Orient Electric", logo: "orientElectric.jpg" },
  { name: "Paytm", logo: "paytm.jpg" },
  { name: "PS Group", logo: "psGroup.jpg" },
  { name: "Rahee", logo: "rahee.jpg" },
  { name: "Red Bull", logo: "redBull.jpg" },
  { name: "Sanmarg", logo: "sanmarg.jpg" },
  { name: "Selvelone", logo: "selvelone.jpg" },
  { name: "t2", logo: "t2.jpg" },
  { name: "TiE Kolkata", logo: "teKolkata.jpg" },
  { name: "WIN Pens", logo: "winPens.jpg" },
  { name: "Zomato", logo: "zomato.png" },
];

export const associations = associationList.map(({ name, logo }) => ({
  name,
  logo: logos(`./${logo}`),
}));
