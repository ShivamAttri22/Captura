import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: 10rem;
    /* margin-top: 0.5rem; */
  `,
  medium: css`
    width: 15rem;
    /* margin-top: 0.5rem; */
  `,
  large: css``,
};

const StyledLogo = styled.img`
  ${(props) => sizes[props.size]}
`;

function Logo({ size }) {
  return <StyledLogo size={size} src="/logo1.png" />;
}

export default Logo;
