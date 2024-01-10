import { useState } from "react";
import { StyledForm, Label } from "./style";
import Button from "../../ui/button/button";

function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onChange = (evt, setChange) => setChange(evt.target.value);
  const isButtonEnable = name && phone && address;

  const handlerButton = (evt) => {
    evt.preventDefault();
    console.log(
      `${name}, спасибо за заказ. Мы доставим его как можно скорее по адресу: ${address}`
    );
  };

  return (
    <StyledForm>
      <Label>
        Имя:{" "}
        <input
          name="name"
          value={name}
          onChange={(e) => onChange(e, setName)}
        />
      </Label>
      <Label>
        Телефон:{" "}
        <input
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => onChange(e, setPhone)}
        />
      </Label>
      <Label>
        Адрес доставки:{" "}
        <input
          name="address"
          value={address}
          onChange={(e) => onChange(e, setAddress)}
        />
      </Label>
      <Button disabled={!isButtonEnable} onClick={handlerButton} type="submit">
        Заказать
      </Button>
    </StyledForm>
  );
}

export default Order;
