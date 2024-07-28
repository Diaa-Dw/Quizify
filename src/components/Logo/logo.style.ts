import styled from "styled-components";
import { Link } from "react-router-dom";
import { respondTo } from "../../styles/_responsive";
export const LogoContainer = styled(Link)`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  z-index: 100;
`;

export const StyledLogo = styled.img`
  width: 6.5rem;

  ${respondTo.medium`
  width:4rem;

`}
`;
