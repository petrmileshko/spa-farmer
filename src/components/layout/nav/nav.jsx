import Button from "../../ui/button/button";
import { StyledNav } from "./style";

function Nav() {
  const handlerButton = (evt) => {
    console.log("Click from Header section");
  };
  return (
    <StyledNav>
      <Button onClick={handlerButton} link="/buy">
        Купить
      </Button>
    </StyledNav>
  );
}

export default Nav;
