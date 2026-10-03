import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { EVENTS_SECTION } from "../content/home";

const EventsContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #001d4a; /* Dark blue background */
  color: #fff;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 50px;
    line-height: 1.6;
  }

  .events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 0 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    .event-card {
      background: #ffffff;
      color: #001d4a;
      padding: 20px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-decoration: none; /* Remove underline from links */

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
      }

      .image-container {
        width: 100%;
        max-width: 200px; /* Ensures all images fit within the same width */
        aspect-ratio: 3 / 4; /* Ensures a consistent aspect ratio for all images */
        overflow: hidden;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f4f4f4;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures images fill the container without distortion */
        }
      }

      h3 {
        font-size: 1.5rem;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        line-height: 1.4;
      }
    }
  }
`;

const Events = () => {
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <EventsContainer>
      <h2>{EVENTS_SECTION.title}</h2>
      <p>{EVENTS_SECTION.text}</p>
      <div className="events-grid" onClick={returnToTop}>
        {EVENTS_SECTION.events.map((event) => (
          <Link key={event.url} to={event.url} className="event-card">
            <div className="image-container">
              <img src={event.image} alt={event.imageAlt} />
            </div>
            <h3>{event.name}</h3>
            <p>{event.tagline}</p>
          </Link>
        ))}
      </div>
    </EventsContainer>
  );
};

export default Events;
