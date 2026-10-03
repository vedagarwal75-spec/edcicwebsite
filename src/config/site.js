// Site-wide text, contact details and external links.
// Change a value here and it updates everywhere it is used.

import logo from "../assets/logo.jpeg";
import footerLogo from "../assets/edcic.png";
import contactBackground from "../assets/contact_background.jpeg";

export const SITE = {
  copyright: "© 2025 edcicsxc. All Rights Reserved.",
  // Round logo in the navbar / 404 page, logo in the footer, background of the Contact page.
  // To change them, replace the files in src/assets/ (same name) or point the imports above elsewhere.
  logo,
  footerLogo,
  contactBackground,
  footerSiteMapTitle: "Site Map",
  contactHeading: "Contact Us Now!",
};

export const EMAILS = {
  pr: "pr@edcicsxc.com",
  core: "core@edcicsxc.com",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/edcicsxc",
  facebook: "https://www.facebook.com/edcsxc",
  youtube: "https://www.youtube.com/@EDCICSXC",
  linkedin:
    "https://www.linkedin.com/company/entrepreneurship-development-cell-st.-xavier's-college-autonomous-kolkata/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
  // Contact page opens the LinkedIn posts feed
  linkedinPosts:
    "https://www.linkedin.com/company/entrepreneurship-development-cell-st.-xavier's-college-autonomous-kolkata/posts/?feedView=all",
};

export const SEED_STORIES = {
  // YouTube video shown on the Seed Stories page (the id after "v=" in the URL)
  videoId: "jdyypQDmhmY",
  channelUrl: SOCIAL_LINKS.youtube,
};

export const REGISTRATION_LINKS = {
  // Where the "Register Now" button on the Entreprise page goes
  entreprise: "https://www.github.com",
};
