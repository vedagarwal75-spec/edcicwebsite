import React from "react";
import EacBanner from "../components/EacBanner";
import EACDetails from "../components/EACDetails";
import { EAC_PAGE } from "../content/eac";
import "../styles/EacPage.css";

const EacPage = () => {
  const { about, mentorship, panel, investorPitch, featuredSpeakers } = EAC_PAGE;

  return (
    <div className="eac-page">
      <EacBanner />
      <EACDetails />
      <section className="eac-description">
        <h2 className="eac-description__title">{about.title}</h2>
        <p className="eac-description__text">{about.text}</p>
      </section>

      <section className="eac-mentorship">
        <h2 className="eac-mentorship__title">{mentorship.title}</h2>
        <p className="eac-mentorship__text">{mentorship.text}</p>
        <div className="eac-mentorship__images">
          {mentorship.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Mentorship session ${index + 1}`}
              className="eac-mentorship__image"
            />
          ))}
        </div>
      </section>

      <section className="eac-featured-speakers">
        <h2 className="eac-featured-speakers__title">{panel.title}</h2>
        <div className="eac-featured-speakers__carousel">
          <div className="eac-featured-speakers__cards">
            {panel.speakers.map((speaker) => (
              <div key={speaker.name} className="eac-featured-speakers__card">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="eac-featured-speakers__image"
                />
                <p className="eac-featured-speakers__name">{speaker.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="eac-investor-pitch">
        <div className="eac-investor-pitch__text">
          <h2 className="eac-investor-pitch__title">{investorPitch.title}</h2>
          <p>
            {investorPitch.paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
                {paragraph}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="eac-investor-pitch__cards">
          {investorPitch.images.map((image, index) => (
            <div key={index} className="eac-investor-pitch__card">
              <img
                src={image}
                alt={`Investor Pitch ${index + 1}`}
                className="eac-investor-pitch__image"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="eac-panel-discussion">
        <h2 className="eac-panel-discussion__title">{featuredSpeakers.title}</h2>
        <div className="eac-panel-discussion__cards">
          {featuredSpeakers.speakers.map((speaker) => (
            <div key={speaker.name} className="eac-panel-discussion__card">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="eac-panel-discussion__image"
              />
              <p className="eac-panel-discussion__name">{speaker.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EacPage;
