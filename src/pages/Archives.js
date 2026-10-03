import React from "react";
import { ARCHIVES } from "../content/misc";

const Archives = () => {
  return (
    <div className="archives-page">
      <div className="container">
        <h1>{ARCHIVES.title}</h1>
        <p>{ARCHIVES.text}</p>
      </div>
    </div>
  );
};

export default Archives;
