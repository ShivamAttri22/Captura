import { useEffect, useState } from "react";
import styled from "styled-components";
import { useImage } from "../context/ImageContext";

const Dummyimages = [
  {
    src: "https://i.pinimg.com/236x/dc/70/4e/dc704e3463866b09bf12acebc33681ae.jpg",
    alt: "Image 1",
    id: 1,
  },
  {
    src: "https://i.pinimg.com/236x/58/a3/67/58a367791a1ecf76058aec4f7613ef9b.jpg",
    alt: "Image 2",
    id: 2,
  },
  {
    src: "https://i.pinimg.com/236x/47/0c/5a/470c5a90a43fb8dfe35952a3bb6760ec.jpg",
    alt: "Image 3",
    id: 3,
  },
  {
    src: "https://i.pinimg.com/236x/73/33/a1/7333a11bb373f95a9e81bf79df2d2027.jpg",
    alt: "Image 4",
    id: 4,
  },
  {
    src: "https://i.pinimg.com/236x/67/16/8d/67168d0d674b2cc0ae81cf88aac30711.jpg",
    alt: "Image 5",
    id: 5,
  },
  {
    src: "https://i.pinimg.com/236x/a1/7d/ee/a17deea1aac451c700ed03b7d7f480a3.jpg",
    alt: "Image 6",
    id: 6,
  },
  {
    src: "https://i.pinimg.com/236x/a1/7d/ee/a17deea1aac451c700ed03b7d7f480a3.jpg",
    alt: "Image 7",
    id: 7,
  },
];
const StyledItemGrid = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  padding: 1rem; */
  column-count: 4;
  column-gap: 20px;
`;
const Image = styled.img`
  width: 100%;

  border-radius: 20px;
`;
const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 15px;

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    background: linear-gradient(to bottom right, black, #00000029);
    border-radius: 20px;
    opacity: 0.7;
    pointer-events: none;
  }
`;
function ImageGrid({ setImage, setIsOpen }) {
  const { images } = useImage();

  function handleClick(id) {
    setIsOpen((open) => !open);
    images.map((image) => {
      const ImageId = image.id;

      if (id === ImageId) {
        const modalData = images.filter((item) => item.id === id);
        setImage(modalData);
      }
      return null;
    });
  }

  return (
    <StyledItemGrid>
      {Dummyimages.map((item) => (
        <Overlay key={item.alt}>
          <Image
            onClick={() => handleClick(item.id)}
            src={item.src}
            alt={item.alt}
          />
        </Overlay>
      ))}
    </StyledItemGrid>
  );
}

export default ImageGrid;
