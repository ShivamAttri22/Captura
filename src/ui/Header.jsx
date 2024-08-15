import { HiOutlineHeart } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

import styled, { css } from "styled-components";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { useContext, useEffect, useState } from "react";
import { getUser } from "../services/ApiAuth";
import ProfileDropdown from "./ProfileModal";
import { useGetUser } from "../authentication/useGetUser";
import { useUser } from "../context/UserContext";

const StyledHeader = styled.ul`
  height: 6.4rem;
  justify-content: space-between;
  font-size: 1.6rem;
  display: flex;
  gap: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1.6rem;
  padding-left: 2.4rem;
  padding-right: 4.8rem;
  list-style: none;
  position: sticky;
  z-index: 999;

  top: 0;
  left: 0;
  right: 0;
  background-color: #d2d7d3;
  position: fixed;
  color: var(--color-brand-300);
  > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
`;
const StyledNavLink = styled(NavLink)`
  &:hover {
    color: var(--color-brand-200);

    border-bottom: 4px solid var(--color-brand-200);
    padding-bottom: 4.2rem;
  }
  &.active {
    border-bottom: 4px solid var(--color-brand-200);
    padding-bottom: 4.2rem;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 4.8rem;
`;

const StyledLogin = styled(Link)`
  background-color: var(--color-brand-200);
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 500;
  font-size: 1.4rem;

  text-transform: uppercase;
  font-family: "Antic Didone", sans-serif;
  border: 2px solid var(--color-brand-200);
  transition: all 1s;
  letter-spacing: 2px;

  &:hover {
    background-color: transparent;
    border: 2px solid var(--color-brand-200);
    color: var(--color-brand-200);
  }
`;
const StyledLink = styled(Link)`
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  width: 40px; /* Adjust as needed */
  height: 40px; /* Adjust as needed */
  transition: all 0.4s;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
function Header({ type }) {
  const { isLoggedin } = useUser();

  // useEffect(
  //   function () {
  //     if (getUser) {
  //       setisLoggedin(true);
  //     }
  //   },
  //   [getUser, isLoggedin]
  // );
  return (
    <StyledHeader type={type}>
      <StyledDiv>
        <Link to="/">
          <Logo size="small" />
        </Link>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to={"/create"}>Create</StyledNavLink>
        <StyledNavLink to="/explore">Explore</StyledNavLink>
      </StyledDiv>
      <SearchBar />
      <StyledDiv>
        {isLoggedin && (
          <>
            <StyledLink to="/profile">
              <img
                src="https://wallpapercave.com/wp/wp2509450.jpg"
                alt="Profile"
              />
            </StyledLink>
            <ProfileDropdown />
          </>
        )}{" "}
        {!isLoggedin && <StyledLogin to="/login">Login </StyledLogin>}
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
