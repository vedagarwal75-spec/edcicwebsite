// Content of the individual event pages: Prism, Initium, 360 Workshop, Entreprise, Elevator.
// Edit the text here. To change a picture, replace the file in src/assets/ (same name)
// or change the import. Links (e.g. registration) live in src/config/site.js.

import prismWhite from "../assets/prismwhite.jpg";
import prismPurple from "../assets/prismpurple.jpg";

import initiumLogo from "../assets/initium.png";
import whatIsInitiumImage from "../assets/whatIsInitium.png";

import workshopLogo from "../assets/360logo2.png";
import dhairya from "../assets/360/pageDhairyaGangwani_5.png";
import pawan from "../assets/360/pagePawanLalwani_2.png";
import shubhang from "../assets/360/pageShubhangiMadan_3.png";
import vaibhav from "../assets/360/pageVaibhavGoyal_4.png";
import neil from "../assets/360/pageNeilBorate_1.png";

import entrepriseLogo from "../assets/entreprise_logo.png";

import elevatorLogo from "../assets/elevatorLogo.png";
import networkingIcon from "../assets/networking.jpg";
import prizesIcon from "../assets/prizes.png";
import mentoringIcon from "../assets/mentoring.jpeg";
import workshopsIcon from "../assets/workshops.jpg";
import fundraisingIcon from "../assets/fundraising.webp";

export const PRISM = {
  title: "PRISM",
  tagline: "A one of a kind corporate simulation event.",
  subtitle: "Experience the future of corporate simulation",
  bannerImage: prismWhite,
  bannerImageAlt: "Prism '24 Logo",
  aboutTitle: "What is Prism?",
  aboutText:
    "Prism is a one-of-a-kind 2-day corporate simulation event organized especially for the first years of our college to showcase their competency while contending against those who are driven to reach the pinnacle. It aims to test the business acumen of the participants, challenge their management skills, and help them imbibe corporate insights that pave their future with greater victories to conquer. Serving as a platform to exhibit their potential and challenge the conventional, Prism tests their stride in the various realms of management.",
  aboutImage: prismPurple,
  aboutImageAlt: "Prism Event",
};

export const INITIUM = {
  topLeft: "ENTREPRENEURSHIP DEVELOPMENT CELL AND INCUBATION CENTRE",
  topCenter: "&",
  topRight: "THE PLACEMENT CELL",
  logo: initiumLogo,
  logoAlt: "Initium Logo",
  stats: [
    { number: "1000 +", label: "Registrations" },
    { number: "80 +", label: "Internships" },
    { number: "65 +", label: "Companies" },
  ],
  aboutTitle: "What is Initium?",
  aboutImage: whatIsInitiumImage,
  aboutImageAlt: "Initium Event",
  aboutText:
    "The Entrepreneurship Development Cell in collaboration with the Placement Cell brings enormous opportunities to students of St. Xavier’s College (Autonomous), Kolkata with Initium: The Internship Exposition. It gives aspiring students an opportunity to work as interns in rising startups and established companies across the country. It opens up doors for first-hand learning, professional training, and getting a taste of the startup culture before stepping into it.",
};

export const WORKSHOP_360 = {
  title: "360 Degree Workshop",
  logo: workshopLogo,
  logoAlt: "360 Workshop Logo",
  aboutTitle: "What is 360 Degree Workshop?",
  // Rendered as: <bold>organizer</bold> presents to you <bold>name</bold> - intro, then a blank line, then more
  organizer: "The Entrepreneurship Development Cell, St. Xavier's College (Autonomous), Kolkata",
  presentsText: "presents to you",
  workshopName: "360 Degree Workshop",
  introText: "- a series of upskilling workshops. Get ready for a transformative journey!",
  moreText:
    "Our upcoming 360-degree workshop is a powerhouse of knowledge and inspiration, featuring six dynamic speaker sessions that will reshape your perspective and drive your success.",
  pastTitle: "Our Past Workshops",
  pastWorkshops: [
    { title: "Workshop on Personal Finance by Mr. Neil Borate", image: neil },
    { title: "Workshop on Power BI by Mr. Pavan Lalwani", image: pawan },
    { title: "Workshop on LinkedIn networking by Ms. Dhairya Gangwani ", image: dhairya },
    { title: "Workshop on freelancing by Ms. Shubhangi Madan", image: shubhang },
    { title: "Workshop on Artificial Intelligence by Mr. Vaibhav Goyal", image: vaibhav },
  ],
};

export const ENTREPRISE = {
  title: "Entreprise",
  tagline: "A one of a kind corporate simulation event.",
  registerButton: "Register Now",
  logo: entrepriseLogo,
  bannerLogoAlt: "Entreprise '24 Logo",
  aboutTitle: "What is Entreprise?",
  aboutText:
    "Entreprise is a one-of-a-kind 2-day corporate simulation event organized especially for the first years of our college to showcase their competency while contending against those who are driven to reach the pinnacle. It aims to test the business acumen of the participants, challenge their management skills, and help them imbibe corporate insights that pave their future with greater victories to conquer. Serving as a platform to exhibit their potential and challenge the conventional, Entreprise tests their stride in the various realms of management.",
  aboutImageAlt: "Entreprise Event",
};

export const ELEVATOR = {
  logo: elevatorLogo,
  logoAlt: "Elevator The Idea Expo",
  aboutTitle: "What is Elevator?",
  // Each item is a separate line
  aboutLines: [
    "The Idea Expo is a National Level Business Plan Competition organized by the Entrepreneurship Development Cell and Incubation Centre, St. Xavier's College (Autonomous), Kolkata.",
    "In Elevator 2024, aspiring entrepreneurs have an opportunity to showcase their innovative ideas. It serves as a catalyst providing budding entrepreneurs with the tools, resources, and mentorship they need to transform their visionary concepts into tangible realities.",
  ],
  whyTitle: "Why Elevator?",
  benefits: [
    { label: "Networking", icon: networkingIcon },
    { label: "Prizes", icon: prizesIcon },
    { label: "Mentoring", icon: mentoringIcon },
    { label: "Workshops", icon: workshopsIcon },
    { label: "Fundraising", icon: fundraisingIcon },
  ],
};
