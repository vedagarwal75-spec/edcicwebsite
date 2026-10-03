import React from "react";
import PrismComponent from "../components/Prism";
import { PRISM } from "../content/events";
import "../styles/Prism.css";

const Prism = () => {
  return (
    <div className="prism__container">
      {/* Animated Prism Background */}
      <div className="prism__background">
        <PrismComponent
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
          suspendWhenOffscreen={true}
        />
      </div>
      
      {/* Banner Section */}
      <section className="prism__banner">
        <div className="prism__bannerContent">
          <div className="prism__text">
            <h1>{PRISM.title}</h1>
            <p>{PRISM.tagline}</p>
            <div className="prism__subtitle">{PRISM.subtitle}</div>
          </div>
          <img
            className="prism__bannerLogo"
            src={PRISM.bannerImage}
            alt={PRISM.bannerImageAlt}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="prism__about">
        <h2>{PRISM.aboutTitle}</h2>
        <div className="prism__aboutContent">
          <p className="prism__textContentPara">{PRISM.aboutText}</p>
          <img
            className="prism__eventImage"
            src={PRISM.aboutImage}
            alt={PRISM.aboutImageAlt}
          />
        </div>
      </section>

    </div>
  );
};

export default Prism;
