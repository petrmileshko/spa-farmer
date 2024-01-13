import { StyledNav, StyledButton } from "./style";
import Button from "../../ui/button/button";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";
import { Ul, Li } from "/src/components/styled";

const links = [
  {
    to: AppRoute.MAIN,
    item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>,
  },
  {
    to: AppRoute.BUYPAGE,
    item: <Button link={AppRoute.BUYPAGE}>Купить</Button>,
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <StyledNav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
    </StyledNav>
  );
}

export default Nav;
