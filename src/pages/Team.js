import React from "react";
import "../styles/team.css";
import { Phone, Linkedin, Mail } from "lucide-react";
import { teamMembers } from "../team/members";

// Resolves the `image` file name in team/members.js to the bundled asset.
const teamImages = require.context("../team", false, /\.(png|jpe?g|webp|svg)$/);
const getImage = (file) => teamImages(`./${file}`);

const Team = () => {
  return (
    <div className="team">
      <h1 className="team__header">Meet Our Team</h1>

      <div className="team__members">
        {teamMembers.map((member) => (
              <div key={member.email} className="team__card">
                <img
                  src={getImage(member.image)}
                  alt={member.name}
                  className="team__memberImg"
                />
                <h2 className="team__memberName">{member.name}</h2>
                <p className="team__memberPosition">{member.position}</p>

                <div className="team__memberEmail">
                  <Mail className="team__icon" />
                  <a href={`mailto:${member.email}`}>Mail Here!</a>
                </div>
                <div className="team__memberContact">
                  <Phone className="team__icon" />
                  <span>{member.phone}</span>
                </div>
                {member.linkedin && (
                  <div className="team__memberLinkedIn">
                    <Linkedin className="team__icon" />
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                )}
              </div>
        ))}
      </div>
    </div>
  );
};

export default Team;