import { useState } from "react";
import { StyledForm } from "./style";
import Button from "../../ui/button/button";

const handlerButton = (evt) => {
  console.log("Нажата кнопка в форме");
};

function Order() {
  const [inputValue, setInputValue] = useState("");
  return (
    <StyledForm>
      <label htmlFor="name">Имя:</label>
      <input
        type="text"
        value={inputValue}
        onChange={(evt) => {
          setInputValue(evt.target.value);
        }}
        id="name"
      />
      <Button onClick={handlerButton} type="submit">
        Заказать
      </Button>
    </StyledForm>
  );
}

export default Order;
