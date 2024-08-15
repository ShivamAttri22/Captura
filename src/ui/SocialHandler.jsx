import { useState } from "react";
import { FaDiscord, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  background-color: var(--color-brand-50);
  border-color: var(--color-brand-200);
  gap: 1rem;
  align-items: center;
  padding: 2rem;
  z-index: 999;
  color: var(--color-brand-200);
  /* border: 3px solid; */
  &:hover {
    background-color: var(--color-brand-200);
    border: 2px solid var(--color-brand-200);
    color: var(--color-brand-50);
  }
`;
const StyledOverlay = styled.ul`
  display: flex;
  gap: 2.4rem;
  background: transparent;
  position: fixed;
  bottom: 65px;
  right: 165px;
  padding: 1rem;
  z-index: -1;
  animation: overlay 2s;
  animation-fill-mode: forwards;
  @keyframes overlay {
    0% {
      transform: translateX(120px);
    }
    100% {
      transform: translateX(-20px);
    }
    0% {
      transform: translateX(120px);
    }
  }
`;
const StyleLink = styled(Link)`
  color: var(--color-brand-200);
  &:hover {
    color: var(--color-brand-300);
  }
`;
function SocialHandler() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((open) => !open);
  }
  return (
    <StyledContainer>
      <StyledButton onClick={handleClick}>
        <div> Follow us</div>
        <IoIosArrowBack size={30} />
      </StyledButton>
      {isOpen && (
        <StyledOverlay>
          <li>
            <StyleLink to="">
              <FaInstagram size={25} />
            </StyleLink>
          </li>
          <li>
            <StyleLink to="">
              <FaXTwitter size={25} />
            </StyleLink>
          </li>
          <li>
            <StyleLink to="">
              <FaDiscord size={25} />
            </StyleLink>
          </li>
        </StyledOverlay>
      )}
    </StyledContainer>
  );
}

export default SocialHandler;
