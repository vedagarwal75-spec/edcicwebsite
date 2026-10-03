import React from "react";
import "../styles/initium.css";
import Stats from "../components/Stats";
import WhatIsInitium from "../components/WhatIsInitium";
import { INITIUM } from "../content/events";

const Initium = () => {
  return (
    <div>
      <div className="initium__container">
        <div className="initium__top">
          <p className="initium__text-left">{INITIUM.topLeft}</p>
          <p className="initium__text-center">{INITIUM.topCenter}</p>
          <p className="initium__text-right">{INITIUM.topRight}</p>
        </div>
        <div className="initium__logo-container">
          <img
            src={INITIUM.logo}
            alt={INITIUM.logoAlt}
            className="initium__logo"
          />
        </div>
      </div>
      <Stats />
      <WhatIsInitium />
    </div>
  );
};

export default Initium;
