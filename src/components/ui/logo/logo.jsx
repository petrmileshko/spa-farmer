import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { LogoLink, LogoText, LogoMain } from "./style";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <LogoMain>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </LogoMain>
  ) : (
    <LogoLink to={AppRoute.MAIN}>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}

export default Logo;
