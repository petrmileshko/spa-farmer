import logoSvg from "/src/assets/logo.svg";
import "../logo/style.css";

function Logo() {
  return (
    <a className="logo__link" href="/">
      <img src={logoSvg} alt="логотип Фермер" />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;
