import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageGrid from "../ui/ImageGrid";
import Modal from "../ui/Modal";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const StyledHeart = styled(FaRegHeart)`
  :hover {
    fill: red;
  }
`;
const StyledTags = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  background-color: var(--color-brand-200);
  color: var(--color-brand-50);
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;
const Container = styled.div`
  padding: 20px 12rem;
  
  margin: 0 auto;
  margin-top: 9.6rem;
`;

const Header = styled.h1`
  text-align: center;

  margin-bottom: 10rem;
`;
const ModalImage = styled.img`
  height: 60rem;
  overflow: hidden;
`;
const ModalContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  > div:nth-child(1) {
    overflow: hidden;
  }
  > div:nth-child(2) {
    padding: 4.4rem 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div:nth-child(1) {
      > h1 {
        padding-bottom: 5rem;
        font-family: "Antic Didone", sans-serif;
        color: var(--color-brand-400);
      }
      > p {
        font-family: "Lato", sans-serif;
        margin-bottom: 2rem;
        font-weight: 300;
      }
      > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
    > div:nth-child(2) {
      > hr {
        margin-bottom: 4rem;
      }
      > div {
        display: flex;
        justify-content: end;
        > span {
          margin-right: 2rem;
          :hover {
          }
        }
      }
    }
  }
`;
const Explore = () => {
  const [image, setImage] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <Header>August 7 , 2024</Header>
      <ImageGrid setIsOpen={setIsOpen} setImage={setImage} />
      <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <ModalContainer>
          <div>
            <ModalImage
              src="https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <div>
              <h1>{image[0]?.title} </h1>
              {/* MAX letters for title - 25 */}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                a rerum fugit dolor culpa delectus quisquam assumenda sed quasi
                excepturi error, dolores sapiente aspernatur ab, magnam
                repudiandae doloremque neque laboriosam accusamus veritatis!
                Soluta possimus sint aliquam, laboriosam iusto vitae asperiores
                voluptatibus facilis provident, harum cupiditate! Rem enim quo
                sapiente voluptas.
              </p>
              <ul>
                <StyledTags>#Laptop</StyledTags>
                <StyledTags>#IT</StyledTags>
                <StyledTags>#SSD</StyledTags>
              </ul>
            </div>
            <div>
              <hr></hr>
              <div>
                <span
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? (
                    <FaHeart size={30} color="red" />
                  ) : (
                    <StyledHeart size={30} />
                  )}
                </span>
              </div>
            </div>
          </div>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Explore;
