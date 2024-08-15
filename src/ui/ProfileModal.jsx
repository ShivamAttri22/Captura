import React, { useState } from "react";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useLogout } from "../authentication/useLogout";

const DropdownContainer = styled.div`
  position: relative;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  width: 35px; /* Adjust as needed */
  height: 35px; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;

  svg {
    color: var(--color-grey-700); /* Adjust as needed */
    &:hover {
      color: var(--color-grey-400);
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 5rem;
  border-radius: 10px;
  right: -40px;
  background: #d2d7d3;
  border: 1px solid #ddd;
  padding: 0px 0;
  width: 200px;

  z-index: 1000;
`;

const ModalContent = styled.ul`
  display: flex;
  flex-direction: column;
  > li:last-child {
    border-bottom: none;
  }
`;

const ModalItem = styled.li`
  display: flex;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #0000002f;

  &:hover {
    background-color: #a5a8a5;
    color: white;
  }
  > button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  };

  return (
    <DropdownContainer>
      <ProfileButton onClick={toggleDropdown}>
        <IoChevronDown size={20} />
      </ProfileButton>

      {isOpen && (
        <Modal>
          <ModalContent>
            <ModalItem>
              <StyledLink to="/favourites">
                <FaRegHeart /> Favourites
              </StyledLink>
            </ModalItem>

            <ModalItem>
              <button onClick={handleLogout}>
                <MdLogout /> Logout
              </button>
            </ModalItem>
          </ModalContent>
        </Modal>
      )}
    </DropdownContainer>
  );
}

export default ProfileDropdown;
