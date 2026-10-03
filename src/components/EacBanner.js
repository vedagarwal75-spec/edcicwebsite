import React from "react";
import "../styles/EacBanner.css";
import { EAC_BANNER } from "../content/eac";

const EACBanner = () => {
  return (
    <div className="eacBanner">
      <img
        src={EAC_BANNER.image}
        alt={EAC_BANNER.imageAlt}
        className="eacBanner__image"
      />
      <div className="eacBanner__overlay">
        <p className="eacBanner__subtitle">{EAC_BANNER.subtitle}</p>
        <h1 className="eacBanner__title">{EAC_BANNER.title}</h1>
        <p className="eacBanner__location">{EAC_BANNER.location}</p>
      </div>
    </div>
  );
};

export default EACBanner;
