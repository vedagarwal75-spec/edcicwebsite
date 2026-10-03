import React from "react";
import "../styles/Gallery.css";
import { galleryImages } from "../content/gallery";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="gallery__heading">Gallery</h1>
      <div className="gallery__images">
        {galleryImages.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="gallery__image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
