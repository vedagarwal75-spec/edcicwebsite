// Entrepreneurship Awareness Camp (EAC) page content: text, people and photos.
// To change a photo, replace the file in src/assets/ (same name) or change the import below.
// To add/remove/reorder people or photos, edit the lists.

import banner from "../assets/eacBg.png";

import VC1 from "../assets/eac_vc/VC1.jpg";
import VC2 from "../assets/eac_vc/VC2.jpg";
import VC3 from "../assets/eac_vc/VC3.jpg";
import VC4 from "../assets/eac_vc/VC4.jpg";

import pitch1 from "../assets/eac/img1.JPG";
import pitch2 from "../assets/eac/img2.JPG";
import pitch3 from "../assets/eac/img3.JPG";
import pitch4 from "../assets/eac/img4.JPG";

import speaker1 from "../assets/eac/speakerSession/eac_img5.png";
import speaker2 from "../assets/eac/speakerSession/eac_img6.png";
import speaker3 from "../assets/eac/speakerSession/eac_img7.png";

import mentor1 from "../assets/eac/mentorship/eac_img1.JPG";
import mentor2 from "../assets/eac/mentorship/eac_img2.JPG";
import mentor3 from "../assets/eac/mentorship/eac_img3.JPG";
import mentor4 from "../assets/eac/mentorship/eac_img4.JPG";

export const EAC_BANNER = {
  image: banner,
  imageAlt: "Entrepreneurship Awareness Camp",
  subtitle: "EDCIC'S Flagship Event",
  title: "ENTREPRENEURSHIP AWARENESS CAMP",
  location: "St. Xavier’s College (Autonomous), Kolkata",
};

export const EAC_DETAILS = {
  startupsTitle: "FOR STARTUPS",
  startupBenefits: [
    "An opportunity to pitch in front of renowned investors",
    "A chance for one-on-one mentorship from industry experts",
    "Forming long-lasting connections through networking sessions",
  ],
  criteriaTitle: "CRITERIA FOR REGISTRATION",
  registrationCriteria: [
    "Fill the google form",
    "Get invited by Edcic after the screening process!",
  ],
};

export const EAC_PAGE = {
  about: {
    title: "WHAT IS EAC?",
    text:
      "With a vision to revolutionize innovation by inculcating a culture of spirit-driven entrepreneurship in the country, EAC is the flagship event of Entrepreneurship Development Cell which aims to bridge the gap between entrepreneurs and the resources they yearn for; through building connections with mentors and investors from an experienced, varied and distinguished pool of professionals from all over the country. With the help of Entrepreneurship Awareness Camp we seek to empower young and budding entrepreneurs through a 3-day curriculum involving a series of workshops by industry experts providing competency in the strategic decision processes of a start-up, panel discussions, and a platform to pitch their startups to eminent investors followed by an opportunity for networking to mobilize their feedback and guidance.",
  },
  mentorship: {
    title: "MENTORSHIP THROUGH STARTUP CLASSES",
    text:
      "We aim at creating a synergy between creativity and implementation by providing invaluable guidance crucial for the start-ups in their embryonic stage.",
    images: [mentor1, mentor2, mentor3, mentor4],
  },
  panel: {
    title: "Panel Discussion",
    speakers: [
      { name: "Parag Dhol", image: VC1 },
      { name: "Ankit Agarwal", image: VC2 },
      { name: "Rohit Bafna", image: VC4 },
      { name: "Madanmohan Rao", image: VC3 },
    ],
  },
  investorPitch: {
    title: "INVESTOR PITCH",
    // Each item is a separate paragraph
    paragraphs: [
      "The Investor Session at the Entrepreneurship Awareness Camp (EAC), organized by EDCIC, serves as a transformative opportunity for aspiring entrepreneurs to scale their ideas. With a history of raising ₹25 lakhs for startups, this platform has proven to be a catalyst for growth and success.",
      "A standout success story is Tea Fit, a startup that secured investment during EAC and later gained national recognition on Shark Tank India. EAC’s dynamic environment brings together seasoned investors, mentors, and ambitious founders, fostering innovation, collaboration, and sustainable business development.",
    ],
    images: [pitch1, pitch2, pitch3, pitch4],
  },
  featuredSpeakers: {
    title: "Featured Speakers",
    speakers: [
      { name: "Tripti Shinghal Somani", image: speaker1 },
      { name: "Ish Anand", image: speaker2 },
      { name: "Prashanth Tandon", image: speaker3 },
    ],
  },
};
