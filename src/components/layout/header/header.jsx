import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { StyledHeader } from "./style";

function Header({ isBuyPage }) {
  return (
    <StyledHeader>
      <Logo />
      <Nav isBuyPAge={isBuyPage} />
    </StyledHeader>
  );
}

export default Header;
