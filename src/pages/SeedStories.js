import React from "react";
import "../styles/SeedStories.css";
import { SEED_STORIES } from "../config/site";
import { SEED_STORIES_PAGE as P } from "../content/initiatives";

const SeedStories = () => {
  return (
    <div className="seedStories">
      {/* Parallax Background Section */}
      <div
        className="seedStories__parallax"
        style={{ backgroundImage: `url(${P.backgroundImage})` }}
      >
        <h1 className="seedStories__heading">{P.heading}</h1>
      </div>

      {/* Video Section */}
      <div className="seedStories__videoSection">
        <h1 className="seedStories__heading">{P.videoHeading}</h1>
        <a
          href={`https://www.youtube.com/watch?v=${SEED_STORIES.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="seedStories__videoLink"
        >
          <img
            src={`https://img.youtube.com/vi/${SEED_STORIES.videoId}/0.jpg`}
            alt={P.videoThumbnailAlt}
            className="seedStories__videoThumbnail"
          />
        </a>
        <button
          className="seedStories__subscribeButton"
          onClick={() =>
            window.open(SEED_STORIES.channelUrl, "_blank", "noopener,noreferrer")
          }
        >
          {P.subscribeButton}
        </button>
      </div>

      {/* Middle Section */}
      <div className="seedStories__middlePart">
        <p className="seedStories__intro">{P.introTitle}</p>
        {P.stories.map((story) => {
          const image = (
            <img
              src={story.image}
              alt={P.imageAlt}
              className="seedStories__img"
            />
          );
          const text = <p className="seedStories__description">{story.text}</p>;
          return (
            <div key={story.text} className="seedStories__story">
              {story.imageSide === "right" ? (
                <>
                  {text}
                  {image}
                </>
              ) : (
                <>
                  {image}
                  {text}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeedStories;
