import React from "react";
import "../styles/IncubationCentre.css";
import {
  INCUBATION_CENTRE,
  startupStages,
  onboardingSteps,
  startups,
} from "../content/initiatives";

const IncubationCentre = () => {
  return (
    <div className="incubation-centre">
      {/* Incubation Centre Banner */}
      <div
        className="incubationCentre__bg"
        style={{ backgroundImage: `url(${INCUBATION_CENTRE.banner.image})` }}
      >
        <p className="incubationCentre__bgText">{INCUBATION_CENTRE.banner.text}</p>
      </div>

      {/* Startup Stages Section */}
      <section className="incubation-stages">
        <h2 className="incubation-title">{INCUBATION_CENTRE.stagesTitle}</h2>
        <div className="stages-container">
          {startupStages.map((stage) => (
            <div key={stage.id} className="stage-card">
              <img src={stage.icon} alt={stage.title} className="stage-icon" />
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding Process Section */}
      <section className="onboarding-process">
        <h2 className="incubation-title">{INCUBATION_CENTRE.onboardingTitle}</h2>
        <div className="onboarding-steps">
          {onboardingSteps.map((step) => (
            <div key={step.id} className="onboarding-card">
              <div className="step-number">
                <img
                  src={step.icon}
                  alt={`Step ${step.id}`}
                  className="step-icon"
                />
                <h3>STEP {step.id.toString().padStart(2, "0")}</h3>
              </div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Startups by EDCIC Section */}
      <section className="startups-section">
        <h2 className="incubation-title">{INCUBATION_CENTRE.startupsTitle}</h2>
        {startups.map((startup) => (
          <div key={startup.id} className="startup-card">
            <div className="startup-text">
              <h3>{startup.name}</h3>
              <p>{startup.description}</p>
            </div>
            <img
              src={startup.image}
              alt={startup.name}
              className="startup-image"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default IncubationCentre;
