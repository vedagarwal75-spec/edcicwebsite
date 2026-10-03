import React from "react";
import "../styles/360.css";
import { WORKSHOP_360 as W } from "../content/events";

const Workshop360 = () => {
  return (
    <div className="workshop360__wrapper">
      {/* Section 1: Logo & Title */}
      <div className="workshop360__container">
        <div className="workshop360__content">
          <h1 className="workshop360__title">{W.title}</h1>
          <img src={W.logo} alt={W.logoAlt} className="workshop360__logo" />
        </div>
      </div>

      {/* Section 2: Description */}
      <div className="workshop360__description">
        <h2 className="workshop360__heading">{W.aboutTitle}</h2>
        <p className="workshop360__text">
          <strong>{W.organizer}</strong> {W.presentsText}
          <strong> {W.workshopName}</strong> {W.introText}
          <br />
          <br />
          {W.moreText}
        </p>
      </div>

      {/* Section 3: Past Workshops */}
      <div className="workshop360__past">
        <h2 className="workshop360__pastTitle">{W.pastTitle}</h2>
        <div className="workshop360__pastContainer">
          {W.pastWorkshops.map((workshop) => (
            <div key={workshop.title} className="workshop360__pastItem">
              <div className="workshop360__pastText">{workshop.title}</div>
              <img
                src={workshop.image}
                alt={workshop.title}
                className="workshop360__pastImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshop360;
