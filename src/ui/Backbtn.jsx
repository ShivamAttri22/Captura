import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-brand-50);
  position: absolute;
  top: 30px;
  left: 30px;
  color: ${(props) => props.color || "black"};
`;

function Backbtn({ to, color }) {
  return (
    <StyledBackButton color={color} to={to}>
      <FaLongArrowAltLeft size={20} />
      <span>Go back </span>
    </StyledBackButton>
  );
}

export default Backbtn;
