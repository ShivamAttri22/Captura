import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Styled components
const Section = styled.section`
  padding: 50px 0;
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ImageList = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  padding: 0 20px;
`;

const ImageItem = styled.div`
  flex: 0 0 auto;
  margin: 0 15px;
  text-align: center;
`;

const Image = styled.img`
  width: 250px;
  height: 350px;
  object-fit: cover;
`;

const Caption = styled.div`
  margin-top: 10px;
`;
const ImageFrame = styled.div`
  padding: 10px;
  background-color: #fff;
  border: 10px solid #2d2a2b;
  box-shadow: rgba(0, 0, 0, 0.449) 10px 5px 10px;
`;
const CustomArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #80a0a2ba;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;

  &.carousel-control-prev {
    left: 0;
  }

  &.carousel-control-next {
    right: 0;
  }

  &:hover {
    background-color: #485b5db9;
  }
`;

const Featured = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1722861315999-5de71ce7cdda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      title: "Marieke Rizvi",
      description: "Serenity",
    },
    {
      url: "https://images.unsplash.com/photo-1721332149274-586f2604884d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
      title: "Matthew Hardy-Brown",
      description: "Stalk",
    },
    {
      url: "https://images.unsplash.com/photo-1722648404028-6454d2a93602?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sam Dougherty",
      description: "Top of Innsbruck",
    },
    {
      url: "https://images.unsplash.com/photo-1722022233014-2c01fea16fa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
      title: "Sam Dougherty",
      description: "Rodeo",
    },
  ];

  return (
    <Section>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        centerMode
        centerSlidePercentage={33.33}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <CustomArrow
              className="carousel-control-prev"
              onClick={onClickHandler}
              aria-label={label}
            >
              &lsaquo;
            </CustomArrow>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <CustomArrow
              className="carousel-control-next"
              onClick={onClickHandler}
              aria-label={label}
            >
              &rsaquo;
            </CustomArrow>
          )
        }
      >
        {images.map((image, index) => (
          <ImageItem key={index}>
            <ImageFrame>
              <Image src={image.url} alt={image.title} />
            </ImageFrame>
            <Caption>
              <strong>{image.title}</strong>
              <br />
              {image.description}
            </Caption>
          </ImageItem>
        ))}
      </Carousel>
    </Section>
  );
};

export default Featured;
