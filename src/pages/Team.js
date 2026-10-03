import React from "react";
import "../styles/team.css";
import { Phone, Linkedin, Mail } from "lucide-react";
import { teamMembers, TEAM_PAGE } from "../team/members";

// Photos are matched to members by name: "Ribhav Parasramka" -> photos/ribhav-parasramka.(png|jpg|jpeg|webp)
const photoContext = require.context("../team/photos", false, /\.(png|jpe?g|webp)$/i);
const photos = {};
photoContext.keys().forEach((key) => {
  const slug = key.replace(/^\.\//, "").replace(/\.[^.]+$/, "").toLowerCase();
  photos[slug] = photoContext(key);
});
const placeholderModule = require("../team/photos/placeholder.svg");
const placeholder = placeholderModule.default || placeholderModule;

const slugify = (name) =>
  name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const getImage = (member) => photos[slugify(member.name)] || placeholder;

const Team = () => {
  return (
    <div className="team">
      <h1 className="team__header">{TEAM_PAGE.title}</h1>

      <div className="team__members">
        {teamMembers.map((member) => (
              <div key={member.email} className="team__card">
                <img
                  src={getImage(member)}
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