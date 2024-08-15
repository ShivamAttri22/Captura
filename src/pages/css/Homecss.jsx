import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHome = styled.div``;

export const StyledImage = styled.img`
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  height: 45rem;
  width: 50rem;
  position: absolute;
  top: 170px;
`;
export const StyledTextAreaDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: var(--color-brand-0);
  padding: 6.4rem 4.8rem 0 30rem;
  width: 75rem;
  height: 55rem;
  margin-left: auto;

  word-break: break-all;
  word-wrap: normal;
`;
export const StyledHeading = styled.h1`
  font-family: "Antic Didone", Sans-serif;
  color: var(--color-brand-400);
  line-height: 1.2;
  font-weight: 400;
  font-size: 4.8rem;
  margin-bottom: 1.6rem;
`;
export const StyledParagraph = styled.p`
  word-break: break-all;
  word-wrap: normal;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--color-grey-400);
`;
export const StyledSubtitle = styled.h3`
  font-family: "Antic Didone", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 4px;
  margin-bottom: 3.2rem;
  color: var(--color-grey-600);
`;
export const StyledLink = styled(Link)`
  background-color: var(--color-brand-200);
  display: inline-block;
  padding: 1.5rem 3rem;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 5rem;
  text-transform: uppercase;
  font-family: "Antic Didone", sans-serif;
  border: 3px solid;
  transition: all 1s;
  &:hover {
    background-color: var(--color-brand-0);
    border: 3px solid var(--color-brand-200);
    color: var(--color-brand-200);
  }
`;
export const StyledSpan = styled.span`
  text-decoration: underline var(--color-brand-200) 1.5px;
`;
