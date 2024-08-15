import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  overflow: hidden;
  background: white;
  height: 60rem;
  border-radius: 8px;
  /* width: 80%; */
  max-width: 100rem;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 5rem;
  cursor: pointer;
`;

function Modal({ setIsOpen, isOpen, children }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={() => setIsOpen((open) => !open)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setIsOpen((open) => !open)}>
          &times;
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
