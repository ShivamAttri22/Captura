import styled from "styled-components";
import SocialHandler from "../ui/SocialHandler";
import {
  StyledHeading,
  StyledHome,
  StyledImage,
  StyledLink,
  StyledParagraph,
  StyledSpan,
  StyledSubtitle,
  StyledTextAreaDiv,
} from "./css/Homecss";
import Featured from "../ui/Featured";
import Newsletter from "../ui/Newsletter";
import Footer from "../ui/Footer";

const StyledHeroSection = styled.section`
  width: 100rem;
  margin: 0 auto 0;
  padding: 12rem 0;
  height: 100vh;
`;
const HeroBg = styled.div`
  background-color: var(--color-brand-50);
`;
const StyledFeaturedSection = styled.section`
  padding: 6rem;

  background-color: var(--color-brand-0);

  > h1 {
    font-family: "Antic Didone", sans-serif;
    font-size: 5rem;
    color: var(--color-brand-300);
  }
  > div {
    text-align: center;
    > h1 {
      font-family: "Antic Didone", sans-serif;
      font-size: 3.2rem;
      color: #80a0a2;
      letter-spacing: 2px;
    }
  }
  > div:before {
    position: absolute;
    border-radius: 10px;
    bottom: -11rem;
    right: 50%;
    transform: translateX(50%);
    display: block;
    content: "";
    width: 70px;
    height: 3px;
    background-color: #80a0a2;
  }
`;

const StyledNewsLetterSection = styled.div``;
const FooterSection = styled.section``;
function Home() {
  return (
    <StyledHome>
      <HeroBg>
        <StyledHeroSection>
          <StyledImage
            src="https://i.pinimg.com/564x/21/90/d0/2190d02fe3f22b359fe6bfc3f4e228d1.jpg"
            alt="mustang"
          />
          <StyledTextAreaDiv>
            <StyledHeading>Photography That Speaks Volumes</StyledHeading>
            <StyledSubtitle>Lifestyle Photography</StyledSubtitle>
            <StyledParagraph>
              At <StyledSpan>Captura</StyledSpan>, we believe photography is
              about more than just capturing moments—it's about expressing
              emotions and creating lasting memories. Explore our portfolio and
              let our images transport you to a world where beauty and
              storytelling converge.
            </StyledParagraph>
            <StyledLink to="/explore">See more photos →</StyledLink>
          </StyledTextAreaDiv>
        </StyledHeroSection>
      </HeroBg>
      <StyledFeaturedSection>
        <div>
          <h1>Featured</h1>
        </div>
        <Featured />
      </StyledFeaturedSection>
      <StyledNewsLetterSection>
        <Newsletter />
      </StyledNewsLetterSection>
      <FooterSection>
        <Footer />
      </FooterSection>
    </StyledHome>
  );
}

export default Home;
