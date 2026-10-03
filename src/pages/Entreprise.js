import React from "react";
import "../styles/Entreprise.css";
import { REGISTRATION_LINKS } from "../config/site";
import { ENTREPRISE } from "../content/events";

const Entreprise = () => {
  const redirectToForm = () => {
    window.open(REGISTRATION_LINKS.entreprise, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="entreprise__container">
      {/* Banner Section */}
      <section className="entreprise__banner">
        <div className="entreprise__bannerContent">
          <div className="entreprise__text">
            <h1>{ENTREPRISE.title}</h1>
            <p>{ENTREPRISE.tagline}</p>
            <button
              className="entreprise__registerButton"
              onClick={redirectToForm}
            >
              {ENTREPRISE.registerButton}
            </button>
          </div>
          <img
            className="entreprise__bannerLogo"
            src={ENTREPRISE.logo}
            alt={ENTREPRISE.bannerLogoAlt}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="entreprise__about">
        <h2>{ENTREPRISE.aboutTitle}</h2>
        <div className="entreprise__aboutContent">
          <p className="entreprise__textContentPara">{ENTREPRISE.aboutText}</p>
          <img
            className="entreprise__eventImage"
            src={ENTREPRISE.logo}
            alt={ENTREPRISE.aboutImageAlt}
          />
        </div>
      </section>
    </div>
  );
};

export default Entreprise;
