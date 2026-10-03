import React from "react";
import "../styles/ourNetwork2.css";
import { networkMembers, NETWORK_TITLE } from "../content/network";

const OurNetwork = () => {
  return (
    <section className="ourNetwork">
      <h2 className="ourNetwork__title">{NETWORK_TITLE}</h2>
      <div className="ourNetwork__grid">
        {networkMembers.map((member, index) => (
          <div key={member.name} className="ourNetwork__card">
            <img
              src={member.image}
              alt={member.name}
            className="ourNetwork__image"
            />
            <h3 className="ourNetwork__name">{member.name}</h3>
            <p className="ourNetwork__description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurNetwork;
