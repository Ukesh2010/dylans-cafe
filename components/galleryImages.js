import Image from "next/image";
import React from "react";

const images = [
  "gallery-01.jpg",
  "gallery-02.jpg",
  "gallery-03.jpg",
  "gallery-04.jpg",
  "gallery-05.jpg",
  "gallery-06.jpg",
  "gallery-07.jpg",
];

const GalleryImages = () => (
  <>
    <div className="gallery-container">
      {images.map((image) => (
        <div className="media-image">
          <Image
            className="img"
            src={"/images/gallery/" + image}
            layout="responsive"
            width={240}
            height={240}
            objectFit="cover"
            alt={"food image" + image}
          />
        </div>
      ))}
    </div>
  </>
);

export default GalleryImages;
