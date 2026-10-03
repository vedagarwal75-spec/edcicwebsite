import React from "react";
import { Box } from "@mui/material";
import { VISION } from "../content/home";
import "../styles/OurVision.css";

const OurVision = () => {
  return (
    <Box className="ourVision__container">
      <div className="ourVision__content">
        <p className="ourVision__heading">{VISION.heading}</p>
        <p className="ourVision__body">{VISION.text}</p>
      </div>
    </Box>
  );
};

export default OurVision;
