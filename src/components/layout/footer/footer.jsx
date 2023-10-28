import Logo from "../../ui/logo/logo";
import "../footer/style.css";

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <span className="footer__copy">Создано 2021</span>
    </footer>
  );
}

export default Footer;
