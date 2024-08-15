import React from "react";
import styled from "styled-components";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 20px;
`;

const Photo = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

const PhotoGallery = ({ photos }) => (
  <Gallery>
    {photos.map((photo, index) => (
      <Photo key={index} src={photo} alt={`photo-${index}`} />
    ))}
  </Gallery>
);

export default PhotoGallery;
