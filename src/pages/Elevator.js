import React, { useState } from "react";
import "../styles/elevator.css";
import ElevatorLanding from "../components/ElevatorLanding";
import { ELEVATOR } from "../content/events";

const ElevatorInfo = () => {
  const [showLanding, setShowLanding] = useState(true);

  const handleAnimationComplete = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return <ElevatorLanding onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <div className="elevatorInfo__container elevatorInfo__fadeIn">
      {/* Elevator Logo */}
      <div className="elevatorInfo__header">
        <img
          src={ELEVATOR.logo}
          alt={ELEVATOR.logoAlt}
          className="elevatorInfo__logo"
        />
      </div>

      <div className="elevatorInfo__section">
        <h2 className="elevatorInfo__title">{ELEVATOR.aboutTitle}</h2>
        <p className="elevatorInfo__description">
          {ELEVATOR.aboutLines.map((line, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>
      </div>

      <hr className="elevatorInfo__divider" />

      <div className="elevatorInfo__section">
        <h2 className="elevatorInfo__title">{ELEVATOR.whyTitle}</h2>
        <div className="elevatorInfo__grid">
          {ELEVATOR.benefits.map((benefit) => (
            <div key={benefit.label} className="elevatorInfo__item">
              <img
                src={benefit.icon}
                alt={benefit.label}
                className="elevatorInfo__icon"
              />
              <p>{benefit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElevatorInfo;
