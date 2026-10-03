// Content of the initiative pages: Incubation Centre, Live Projects, EDF, Bizwalk, Envisage, Seed Stories.
// Edit the text here. To change a picture, replace the file in src/assets/ (same name)
// or change the import. Links (YouTube, PDF) live in src/config/.

import backgroundImage from "../assets/incubation_img.jpg";
import ideaStageIcon from "../assets/ic8.jpg";
import prototypeStageIcon from "../assets/ic9.jpg";
import incubationStageIcon from "../assets/ic10.jpg";
import step1Icon from "../assets/ic1.jpg";
import step2Icon from "../assets/ic2.jpg";
import step3Icon from "../assets/ic3.jpg";
import step4Icon from "../assets/ic4.jpg";
import rhizospheriXImage from "../assets/rhizo1.jpg";
import agnikImage from "../assets/agnik1.jpg";
import lp1 from "../assets/lp1.jpg";
import lp2 from "../assets/lp2.jpg";
import lp3 from "../assets/lp3.jpg";
import lp4 from "../assets/lp4.jpg";
import lp5 from "../assets/lp5.jpg";

import edfBackground from "../assets/EDF_image.jpg";

import bizwalk1 from "../assets/bizwalk/bizwalk_img1.jpg";
import bizwalk2 from "../assets/bizwalk/bizwalk_img2.jpg";
import bizwalk3 from "../assets/bizwalk/bizwalk_img3.jpg";
import bizwalk4 from "../assets/bizwalk/bizwalk_img4.jpg";

import seedStoriesBg from "../assets/seed_stories_image.jpg";
import seedStories1 from "../assets/ss4.jpg";
import seedStories2 from "../assets/ss1.jpg";
import seedStories3 from "../assets/ss2.jpg";

import team1 from "../assets/boardImages/img2.png";
import team2 from "../assets/boardImages/img3.png";
import team3 from "../assets/boardImages/img4.png";
import team5 from "../assets/boardImages/img1.png";
import img13 from "../assets/boardImages/img13.png";
import img14 from "../assets/boardImages/img14.png";
import akm from "../assets/boardImages/akm.png";

// ---------------------------------------------------------------- Incubation Centre
export const INCUBATION_CENTRE = {
  banner: { image: backgroundImage, text: "INCUBATION CENTRE" },
  stagesTitle: "TYPES OF STARTUPS INCUBATED BY EDCIC",
  onboardingTitle: "STARTUP ONBOARDING PROCESS",
  startupsTitle: "STARTUPS BY EDCIC",
};

// Startup Stages Data
export const startupStages = [
  {
    id: 1,
    title: "Idea Stage Startup",
    description:
      "At the idea stage, we provide startups with inclusive support in transforming their ideas into viable business propositions.",
    icon: ideaStageIcon,
  },
  {
    id: 2,
    title: "Prototype Stage Startups",
    description:
      "At the prototype stage, we assist startups in the patenting process, offer guidance on intellectual property rights, and protection strategies.",
    icon: prototypeStageIcon,
  },
  {
    id: 3,
    title: "Incubation Stage Startups",
    description:
      "At the incubation stage, startups need to scale their operations. We provide them access to funding opportunities and business development resources.",
    icon: incubationStageIcon,
  },
];

// Onboarding Steps Data
export const onboardingSteps = [
  {
    id: 1,
    title: "Form Fill and Screening",
    description:
      "The first step in our startup onboarding process is the completion of a detailed form designed to capture essential information about the startup.",
    icon: step1Icon,
  },
  {
    id: 2,
    title: "Team Interaction",
    description:
      "Once the initial screening is completed, selected startups are invited for a one-on-one interaction with a member(s) of our incubation team.",
    icon: step2Icon,
  },
  {
    id: 3,
    title: "Pitch Deck Submission",
    description:
      "Startups are required to submit their pitch deck. The pitch deck should provide a comprehensive overview of the startup.",
    icon: step3Icon,
  },
  {
    id: 4,
    title: "MOU and Confidentiality Agreement Signing",
    description:
      "The final step in the onboarding process is the signing of a Memorandum of Understanding outlining roles and responsibilities.",
    icon: step4Icon,
  },
];

// Startups Data
export const startups = [
  {
    id: 1,
    name: "RHIZOSPHERI - X",
    description: `Rhizospheri - X is a company focused on bio-based solutions to improve soil health and crop productivity through beneficial microbes. 
    The team, with expertise in microbiology, agronomy, and sustainability, is dedicated to advancing eco-friendly agriculture. Several professors 
    have provided invaluable guidance and support, ensuring the company remains at the forefront of eco-friendly agricultural innovation.

    EDCIC has been instrumental in Rhizospheri - X’s success, providing expert guidance on sustainability, research collaboration, and product development.`,
    image: rhizospheriXImage,
  },
  {
    id: 2,
    name: "AGNIK'S BIOFARMING",
    description: `Agnik focuses on empowering students and professionals with opportunities in various industries. 
    With a keen focus on networking, mentorship, and entrepreneurial learning, Agnik has been shaping the future of students entering the corporate world.`,
    image: agnikImage,
  },
];

// ---------------------------------------------------------------- Live Projects
export const LIVE_PROJECTS = {
  title: "Live Projects",
  text:
    "Live projects are educational assignments that allow students to work on real-world projects with external clients. They are a way for students to apply theoretical knowledge to practical situations.",
  benefitsTitle: "Benefits of Live Projects for Startups",
  benefits: [
    { title: "Valuable Guidance", image: lp1 },
    { title: "Fresh Talent", image: lp2 },
    { title: "Increased Productivity", image: lp3 },
    { title: "Brand Awareness", image: lp4 },
    { title: "Talent Scouting", image: lp5 },
  ],
  collaborationText: "Wanna collaborate with EDCIC on a Live Project?",
  contactButton: { text: "Contact Us", url: "/contact" },
};

// ---------------------------------------------------------------- EDF
export const EDF = {
  backgroundImage: edfBackground,
  title: "ENTREPRENEURSHIP DEVELOPMENT FUND",
  // Each item is a separate paragraph
  paragraphs: [
    "EDCIC’s vision to revolutionise innovation & entrepreneurship in the country through its students took form as it started a non-commercial initiative called the St. Xavier’s Entrepreneurship Development Fund (EDF). This serves as a building block among young Xaverians (both former & current) in their entrepreneurial journey, connecting them with mentors, investors, & industry experts.",
    "If a prototype is deemed unique and feasible, funding up to 50k can be provided from EDF to support development and growth.",
  ],
  highlight:
    "Are you an alumni or student of St. Xavier’s College (Autonomous), Kolkata running their own startup?",
  contactButton: "Contact us",
};

// ---------------------------------------------------------------- Bizwalk
export const BIZWALK = {
  title: "BIZWALK",
  subtitle: "THE STARTUP WALK",
  text:
    "Bizwalk is an initiative designed to provide students with firsthand exposure to the operations of established startups. Through guided visits, students have the opportunity to observe daily workflows, interact with founders or senior management, and gain valuable insights into the entrepreneurial ecosystem.",
  images: [bizwalk1, bizwalk2, bizwalk3, bizwalk4],
};

// ---------------------------------------------------------------- Envisage
// (the newsletter PDF itself is set in src/config/documents.js)
export const ENVISAGE_PAGE = {
  title: "ENVISAGE : OUR ANNUAL NEWSLETTER",
  text:
    "Envisage, the annual newsletter of the Entrepreneurship Development Cell & Incubation Centre (EDCIC) at St. Xavier’s College (Autonomous), Kolkata, is a curated window into the dynamic world of startups, innovation, and business strategy. Designed to inspire and inform, it captures the pulse of the entrepreneurial landscape through expert insights, industry trends, and real-world success stories.",
  previewAlt: "Envisage Newsletter Preview",
  downloadButton: "Download PDF",
  teamTitle: "EDITORIAL TEAM 2024-25",
  team: [
    { name: "Dr. Arup Kumar Mitra", role: "Deputy President", image: akm },
    { name: "Ansh Arya", role: "Director", image: team5 },
    { name: "Aarav Mittal", role: "Joint Secretary", image: team1 },
    { name: "Rishab Dugar", role: "Joint Secretary", image: team3 },
    { name: "Vedant Saboo", role: "Joint Secretary", image: team2 },
    { name: "Harshita Mundra", role: "Editorial Head", image: img14 },
    { name: "Pranit Parasrampuria", role: "Editorial Head", image: img13 },
  ],
};

// ---------------------------------------------------------------- Seed Stories
// (the YouTube video id and channel link are set in src/config/site.js)
export const SEED_STORIES_PAGE = {
  heading: "Seed Stories",
  backgroundImage: seedStoriesBg,
  videoHeading: "Watch Our Latest Video Here!",
  videoThumbnailAlt: "YouTube Video Thumbnail",
  subscribeButton: "Subscribe to EDCIC Channel",
  introTitle: "WHAT IS SEED STORIES?",
  imageAlt: "Seed Stories",
  // Alternating image / text blocks. imageSide: which side the picture is on.
  stories: [
    {
      image: seedStories1,
      imageSide: "left",
      text:
        "Introducing Seed Stories, a podcast by the Entrepreneurship Development Cell and Incubation Centre, where we explore the journeys of startup founders—their challenges, breakthroughs, and lessons.",
    },
    {
      image: seedStories2,
      imageSide: "right",
      text:
        "Our mission is to inspire and empower aspiring entrepreneurs by sharing real, raw stories of perseverance, passion, and resilience.",
    },
    {
      image: seedStories3,
      imageSide: "left",
      text:
        "These stories go beyond building businesses; they’re about the courage to fail, the strength to start over, and the drive to push forward. Whether you're just starting or already on your journey, let Seed Stories ignite your passion and remind you that every step you take brings you closer to making an impact.",
    },
  ],
};
