import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/contact.css";
import { EMAILS, SITE, SOCIAL_LINKS } from "../config/site";

const Contact = () => {
  return (
    <div
      className="contact__container"
      style={{ backgroundImage: `url(${SITE.contactBackground})` }}
    >
      <h2 className="contact__heading">{SITE.contactHeading}</h2>
      <div className="contact__icons">
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="contact__icon" />
        </a>
        <a
          href={SOCIAL_LINKS.linkedinPosts}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="contact__icon" />
        </a>
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="contact__icon" />
        </a>
        <a
          href={SOCIAL_LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="contact__icon" />
        </a>
      </div>
      <p className="contact__email">
        <a href={`mailto:${EMAILS.pr}`}>{EMAILS.pr}</a><br/>
        <a href={`mailto:${EMAILS.core}`}>{EMAILS.core}</a>
      </p>
    </div>
  );
};

export default Contact;
