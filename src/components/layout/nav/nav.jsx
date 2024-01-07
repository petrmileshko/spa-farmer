import Button from "../../ui/button/button";
import { StyledNav } from "./style";
import { useState } from "react";
import PopUp from "../../ui/popup/popup";

function Nav() {
  const [isShow, setIsShow] = useState(false);

  const handlerButton = (evt) => {
    console.log("Нажата кнопка в шапке");
    setIsShow(!isShow);
  };

  return (
    <StyledNav>
      <PopUp modalShow={isShow} onClose={() => setIsShow(false)} />
      <Button onClick={handlerButton} link="/buy">
        Купить
      </Button>
    </StyledNav>
  );
}

export default Nav;
