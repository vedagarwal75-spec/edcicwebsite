// components/Associations.js
import React from "react";
import "../styles/OurAssociations.css";

import { associations } from "../content/associations";

const Associations = () => {
  return (
    <section className="associations">
      <h2 className="associations__title">OUR ASSOCIATIONS</h2>
      <div className="associations__grid">
        {associations.map((partner, index) => (
          <div key={index} className="associations__card">
            <img
              src={partner.logo}
              alt={partner.name}
            className="associations__logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Associations;
