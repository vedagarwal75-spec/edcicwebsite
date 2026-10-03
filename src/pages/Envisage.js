import React from "react";
import "../styles/Envisage.css";
import { Download } from "@mui/icons-material";
import { ENVISAGE } from "../config/documents";
import { ENVISAGE_PAGE } from "../content/initiatives";

const Envisage = () => {
  return (
    <div className="envisage__container">
      <h1 className="envisage__title">{ENVISAGE_PAGE.title}</h1>
      <p className="envisage__description">{ENVISAGE_PAGE.text}</p>

      {/* PDF Preview & Download Section */}
      <div className="envisage__download-section">
        <img
          src={ENVISAGE.preview}
          alt={ENVISAGE_PAGE.previewAlt}
          className="envisage__pdf-preview"
        />
        <a
          href={ENVISAGE.pdf}
          download={ENVISAGE.downloadName}
          className="envisage__download-btn"
        >
          <Download className="envisage__download-icon" />
          {ENVISAGE_PAGE.downloadButton}
        </a>
      </div>

      {/* Editorial Team Section */}
      <h2 className="envisage__team-title">{ENVISAGE_PAGE.teamTitle}</h2>
      <div className="envisage__team-grid">
        {ENVISAGE_PAGE.team.map((member) => (
          <div key={member.name} className="envisage__team-card">
            <img
              src={member.image}
              alt={member.name}
              className="envisage__team-img"
            />
            <h3 className="envisage__team-name">{member.name}</h3>
            <p className="envisage__team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Envisage;
