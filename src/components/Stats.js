import React from "react";
import "../styles/stats.css";
import { INITIUM } from "../content/events";

const Stats = () => {
  return (
    <div className="stats__container">
      {INITIUM.stats.map((stat) => (
        <div key={stat.label} className="stats__item">
          <h2 className="stats__number">{stat.number}</h2>
          <p className="stats__label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
