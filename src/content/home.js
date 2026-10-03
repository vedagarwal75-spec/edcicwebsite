// Everything shown on the Home page: text, links and images.
// Edit the text/links here; to change a picture, replace the file in src/assets/ (same name)
// or point the import at another file.

import heroImage from "../assets/edcic_team.jpeg";
import principalImage from "../assets/principal.jpeg";
import certificateImage from "../assets/certificate.png";

import prismLogo from "../assets/eac/prism.jpg";
import elevatorLogo from "../assets/elevator.jpg";
import enterpriseLogo from "../assets/entreprise.jpg";
import workshopLogo from "../assets/360.jpg";
import initiumLogo from "../assets/initium.jpeg";
import eacLogo from "../assets/eac.jpg";

import incubationImage from "../assets/incubation_centre.jpg";
import liveProjectsImage from "../assets/live_projects.jpg";
import seedStoriesImage from "../assets/seed_stories.jpg";
import edfImage from "../assets/edf.jpg";
import envisageImage from "../assets/envisage.jpg";
import bizwalkImage from "../assets/bizwalk.jpg";

export const HERO = {
  image: heroImage,
  title: "Entrepreneurship Development Cell and Incubation Centre",
  text:
    "The Entrepreneurship Development Cell and Incubation Centre of St. Xavier's College (Autonomous), Kolkata seeks to transform how entrepreneurship is perceived in society.",
  buttons: [
    { text: "EAC", url: "/eac" },
    { text: "Live Projects", url: "/live-projects" },
    { text: "Seed Stories", url: "/start-up-voice" },
    { text: "EDF", url: "/edf" },
    { text: "Incubation Centre", url: "/incubation-centre" },
  ],
  knowMore: { text: "Know More", url: "/about" },
};

export const PRINCIPAL_NOTE = {
  label: "TESTIMONIAL",
  image: principalImage,
  name: "REVEREND FATHER DOMINIC SAVIO SJ",
  imageAlt: "Reverend Father Dominic Savio SJ",
  quote:
    "The power to think differently and ahead of the times for the betterment of mankind is what sets entrepreneurs apart. India’s young generation today has that power. History has witnessed that countries which have encouraged entrepreneurs have grown at a faster pace. Entrepreneurs create opportunities, create jobs, create value and create wonders out of nothing. E-Cell provides exposure to entrepreneurship at an early age, helping many students realize their potential as individuals and world citizens.",
};

export const VISION = {
  heading: "Our Vision",
  text:
    "Entrepreneurs have a clear vision. These are the thinkers, innovators, the action takers who change society for a better tomorrow. Our vision is to enable these action-takers to efficiently traverse their road to an enterprise by giving them exposure, mentorship, network, funding opportunities, and wisdom to turn their dreams into reality.",
};

export const EVENTS_SECTION = {
  title: "Our Events",
  text:
    "We firmly believe that entrepreneurship is the key to fostering innovation in India and promoting the values surrounding entrepreneurship will result in attainment of the full capacity of the youths aptitude.",
  events: [
    { name: "PRISM", tagline: "Ignite the Uncharted", url: "/events/prism", image: prismLogo, imageAlt: "Prism '24 Logo" },
    { name: "Elevator", tagline: "The Idea Expo", url: "/events/elevator", image: elevatorLogo, imageAlt: "Elevator Logo" },
    { name: "Entreprise", tagline: "Think Big, Think Global", url: "/events/entreprise", image: enterpriseLogo, imageAlt: "Enterprise Logo" },
    { name: "360° Workshop", tagline: "Learn and Grow", url: "/events/workshop", image: workshopLogo, imageAlt: "360 Workshop Logo" },
    { name: "Initium", tagline: "The Internship Expo", url: "/events/initium", image: initiumLogo, imageAlt: "Initium Logo" },
    { name: "EAC", tagline: "Entrepreneurship Awareness Camp", url: "/events/eac", image: eacLogo, imageAlt: "EAC Logo" },
  ],
};

export const INITIATIVES_SECTION = {
  title: "Our Initiatives",
  initiatives: [
    { title: "Incubation Centre", url: "/initiatives/incubation", image: incubationImage },
    { title: "Live Projects", url: "/initiatives/live-projects", image: liveProjectsImage },
    { title: "Seed Stories", url: "/seed-stories", image: seedStoriesImage },
    { title: "Entrepreneurship Development Fund", url: "/initiatives/edf", image: edfImage },
    { title: "Envisage", url: "/initiatives/envisage", image: envisageImage },
    { title: "Bizwalk", url: "/initiatives/bizwalk", image: bizwalkImage },
  ],
};

export const CERTIFICATE = {
  title: "Institution’s Innovation Council",
  text:
    "The Institution’s Innovation Council (IIC) at St. Xavier’s College, Kolkata, fosters a dynamic innovation ecosystem, encouraging students to transform ideas into prototypes. It connects students with mentors, industry experts, and research institutions, focusing on bridging scientific research with commercial applications. The IIC aims to drive sustainable development and promote holistic student growth through mentorship, collaboration, and interdisciplinary learning.",
  image: certificateImage,
  imageAlt: "Certificate of Establishment",
};
