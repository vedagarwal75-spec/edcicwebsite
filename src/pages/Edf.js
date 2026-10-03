import React from "react";
import styled from "styled-components";
import { EDF as EDF_CONTENT } from "../content/initiatives";

const EDFSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  height: 100dvh;
  padding: 40px 20px;
  color: #fff;
  background: linear-gradient(to bottom, #00004c, #101070);
`;

/* Parallax Background Section */
const ParallaxSection = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${EDF_CONTENT.backgroundImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Added overlay to improve text visibility */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  }

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    z-index: 1; /* Ensure text is above the overlay */
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    overflow-wrap: anywhere;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }

  /* fixed backgrounds are broken/janky on phones */
  @media (hover: none) and (pointer: coarse) {
    background-attachment: scroll;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  .highlight-section {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .contact-btn {
    padding: 12px 25px;
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    background: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #e0e0e0;
    }
  }
`;

/* Responsive Adjustments */
const ResponsiveWrapper = styled.div`
  @media (max-width: 768px) {
    .parallax-section {
      height: 40vh; /* Reduce height for smaller screens */
    }

    h1 {
      font-size: 2.5rem; /* Increased size on mobile */
    }

    p {
      font-size: 1rem;
    }
  }
`;

const EDF = () => {
  return (
    <ResponsiveWrapper>
      {/* Parallax Background Section */}
      <ParallaxSection className="parallax-section">
        <h1>{EDF_CONTENT.title}</h1>
      </ParallaxSection>

      {/* Main Content Section */}
      <EDFSection>
        <ContentWrapper>
          {EDF_CONTENT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="highlight-section">{EDF_CONTENT.highlight}</div>
          <button className="contact-btn">{EDF_CONTENT.contactButton}</button>
        </ContentWrapper>
      </EDFSection>
    </ResponsiveWrapper>
  );
};

export default EDF;
