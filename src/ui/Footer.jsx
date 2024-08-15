import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--color-brand-200);
  padding: 9.6rem 0;
  font-size: 14px;
  color: #ffffff;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 150px;
  margin: 10px;
`;

const FooterTitle = styled.h4`
  margin-bottom: 10px;
  font-weight: bold;
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #eaeaea;
  padding-top: 10px;
`;

const FooterSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  a {
    margin: 0 5px;
    color: #333;

    &:hover {
      color: #000;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Info</FooterTitle>
          <FooterLink to="/">Deliveries</FooterLink>
          <FooterLink to="/">Return Policy</FooterLink>
          <FooterLink to="/">Privacy Policy</FooterLink>
          <FooterLink to="/">Shipping Policy</FooterLink>
          <FooterLink to="/">Terms of Service</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Menu</FooterTitle>
          <FooterLink to="/">Collections</FooterLink>
          <FooterLink to="/">Artists</FooterLink>
          <FooterLink to="/">About</FooterLink>
          <FooterLink to="/">Meet The Artist</FooterLink>
          <FooterLink to="/">Snaaps 35mm</FooterLink>
          <FooterLink to="/">Contact</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>About</FooterTitle>
          <FooterLink to="/">About</FooterLink>
          <FooterLink to="/">Contact</FooterLink>
          <FooterLink to="/">Stockists</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Captura</FooterTitle>
          <p>create anywhere.</p>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>
        <FooterSocialIcons>
          <Link to="/">
            <FaInstagram size={20} color="white" />
          </Link>
          <Link to="/">
            <FaFacebook size={20} color="white" />
          </Link>
          <Link to="/">
            <FaTwitter size={20} color="white" />
          </Link>
          <Link to="/">
            <FaTiktok size={20} color="white" />
          </Link>
          <Link to="/">
            <FaPinterest size={20} color="white" />
          </Link>
        </FooterSocialIcons>
        <p>© 2024, Captura</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
