import React from "react";
import "../styles/aboutUs.css";
import { Container, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ABOUT_US } from "../content/about";

const highlightStyle = {
  contentStyle: {
    background: "white",
    color: "#010250",
    border: "none",
    borderRadius: "12px",
  },
  contentArrowStyle: { borderRight: "7px solid white" },
};

const AboutUs = () => {
  return (
    <div className="aboutUs__container">
      <Container maxWidth="100%">
        {/* Intro Section */}
        <div className="aboutUsLanding">
          <Typography variant="h2" align="center" gutterBottom>
            {ABOUT_US.title}
          </Typography>
        </div>
        <div className="aboutUsTimeline">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontSize: "3.2rem", margin: "20px", color: "white" }}
          >
            {ABOUT_US.timelineTitle}
          </Typography>

          {/* Timeline Section */}
          <VerticalTimeline>
            {ABOUT_US.timeline.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="vertical-timeline-element--work"
                date={item.date}
                iconStyle={{ background: "white", color: "#010250" }}
                {...(item.highlight ? highlightStyle : {})}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="vertical-timeline-element-subtitle"
                >
                  {item.subtitle || item.date}
                </Typography>
                <Typography>{item.text}</Typography>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
