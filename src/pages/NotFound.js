import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import { SITE } from "../config/site";
import { NOT_FOUND } from "../content/misc";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={SITE.logo} alt="Logo" className="not-found-logo" />
      <h1 className="not-found-title">{NOT_FOUND.title}</h1>
      <p className="not-found-description">{NOT_FOUND.text}</p>
      <Link to="/" className="not-found-link">
        {NOT_FOUND.linkText}
      </Link>
    </div>
  );
};

export default NotFound;
