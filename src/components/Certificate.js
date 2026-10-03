import React from "react";
import styled from "styled-components";
import { CERTIFICATE } from "../content/home";

const CertificateContainer = styled.div`
  background-color: #001d4a; /* Dark blue background */
  color: #ffffff;
  text-align: center;
  padding: 50px 20px;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .certificate-image {
    max-width: 50%;
    height: 50%;
    margin: 0 auto;
    border: 5px solid #ffffff; /* Optional border for the image */
    border-radius: 10px; /* Rounded corners for a cleaner look */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Add subtle shadow for depth */
    object-fit: contain;
  }
  .certificate__text {
    padding-bottom: 50px;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
  }
`;

const Certificate = () => {
  return (
    <CertificateContainer>
      <h1 className="title">{CERTIFICATE.title}</h1>
      <p className="certificate__text">{CERTIFICATE.text}</p>
      <img
        src={CERTIFICATE.image}
        alt={CERTIFICATE.imageAlt}
        className="certificate-image"
      />
    </CertificateContainer>
  );
};

export default Certificate;
