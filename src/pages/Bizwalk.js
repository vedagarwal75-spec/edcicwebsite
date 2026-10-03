import React from "react";
import "../styles/bizwalk.css";
import { BIZWALK } from "../content/initiatives";

const Bizwalk = () => {
  return (
    <div className="bizwalk__container">
      <div className="bizwalk__content">
        <h1 className="bizwalk__title">{BIZWALK.title}</h1>
        <h2 className="bizwalk__subtitle">{BIZWALK.subtitle}</h2>
        <p className="bizwalk__description">{BIZWALK.text}</p>
      </div>
      <div className="bizwalk__images">
        {BIZWALK.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Bizwalk Event ${index + 1}`}
            className="bizwalk__image"
          />
        ))}
      </div>
    </div>
  );
};

export default Bizwalk;
