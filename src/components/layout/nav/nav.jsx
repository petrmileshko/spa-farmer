import Button from "../../ui/button/button";
import { StyledNav } from "./style";
import { useState } from "react";
import PopUp from "../../ui/popup/popup";

function Nav({ isBuyPAge }) {
  const [isShow, setIsShow] = useState(false);

  const handlerButton = (evt) => {
    console.log("Нажата кнопка в шапке");
    setIsShow(!isShow);
  };

  return isBuyPAge ? (
    <StyledNav>
      <a href="/">Главная</a>
    </StyledNav>
  ) : (
    <StyledNav>
      <PopUp modalShow={isShow} onClose={() => setIsShow(false)} />
      <Button onClick={handlerButton} link="/buy">
        Купить
      </Button>
    </StyledNav>
  );
}

export default Nav;
