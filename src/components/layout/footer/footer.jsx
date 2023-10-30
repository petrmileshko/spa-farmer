import Logo from "../../ui/logo/logo";
import { StyledFooter, FooterCopy } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <FooterCopy>Создано 2021</FooterCopy>
    </StyledFooter>
  );
}

export default Footer;
