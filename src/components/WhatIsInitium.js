import React from "react";
import "../styles/registrationProcess.css";
import { INITIUM } from "../content/events";

const WhatIsInitium = () => {
  return (
    <div className="whatIsInitium__container">
      <h2 className="whatIsInitium__title">{INITIUM.aboutTitle}</h2>
      <div className="whatIsInitium__content">
        <div className="whatIsInitium__images">
          <img
            src={INITIUM.aboutImage}
            alt={INITIUM.aboutImageAlt}
            className="whatIsInitium__image"
          />
        </div>
        <p className="whatIsInitium__text">{INITIUM.aboutText}</p>
      </div>
    </div>
  );
};

export default WhatIsInitium;
