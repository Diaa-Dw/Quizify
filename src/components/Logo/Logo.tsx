import { Link } from "react-router-dom";
import { LogoContainer, StyledLogo } from "./logo.style";

function Logo() {
  return (
    <LogoContainer to='/'>
      <StyledLogo src='/logo.png' alt='logo' />
    </LogoContainer>
  );
}

export default Logo;
