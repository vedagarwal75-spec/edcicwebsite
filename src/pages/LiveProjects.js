import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { LIVE_PROJECTS } from "../content/initiatives";
const LiveProjectsSection = styled.section`
  background: linear-gradient(to bottom, #00004c, #101070);
  color: #fff;
  text-align: center;
  padding: 60px 20px;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 40px;
    line-height: 1.6;
  }

  .benefits {
    margin: 60px 0;
  }

  .benefits h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .benefits-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }

  .benefit-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 200px;
  }

  .benefit-card img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: #fff;
  }

  .benefit-card h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .collaboration-section {
    margin-top: 60px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .contact-btn {
    margin-top: 20px;
    padding: 12px 25px;
    background: #fff;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #e0e0e0;
    }
  }
`;

const LiveProjects = () => {
  return (
    <LiveProjectsSection>
      <h1>{LIVE_PROJECTS.title}</h1>
      <p>{LIVE_PROJECTS.text}</p>

      <div className="benefits">
        <h2>{LIVE_PROJECTS.benefitsTitle}</h2>
        <div className="benefits-grid">
          {LIVE_PROJECTS.benefits.map((benefit) => (
            <div key={benefit.title} className="benefit-card">
              <img src={benefit.image} alt={benefit.title} />
              <h3>{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="collaboration-section">
        {LIVE_PROJECTS.collaborationText}
      </div>
      <Button
        component={Link}
        to={LIVE_PROJECTS.contactButton.url}
        sx={{
          textTransform: "none",
          fontSize: "14px",
          fontWeight: "bold",
          color: "inherit",
        }}
        className="contact-btn"
      >
        {LIVE_PROJECTS.contactButton.text}
      </Button>
    </LiveProjectsSection>
  );
};

export default LiveProjects;
