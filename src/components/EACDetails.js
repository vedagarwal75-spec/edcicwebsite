import React from "react";
import "../styles/EACDetails.css";
import { EAC_DETAILS } from "../content/eac";

const EACDetails = () => {
  return (
    <div className="eacDetails">
      <div className="eacDetails__section">
        <h2 className="eacDetails__title">{EAC_DETAILS.startupsTitle}</h2>
        {EAC_DETAILS.startupBenefits.map((benefit, index) => (
          <div key={benefit} className="eacDetails__item">
            <span className="eacDetails__number">{index + 1}</span>
            <span className="eacDetails__text">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="eacDetails__section_2">
        <h2 className="eacDetails__title_2">{EAC_DETAILS.criteriaTitle}</h2>
        {EAC_DETAILS.registrationCriteria.map((criteria, index) => (
          <div key={criteria} className="eacDetails__item">
            <span className="eacDetails__number">{index + 1}</span>
            <span className="eacDetails__text">{criteria}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EACDetails;
