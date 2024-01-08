import { StyledPopUp, ClosePop } from "./style";
import { useEffect } from "react";
import Order from "../order/order";

function PopUp({ modalShow, onClose }) {
  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);

  return modalShow ? (
    <StyledPopUp>
      <Order />
      <ClosePop onClick={() => onClose()}>X</ClosePop>
    </StyledPopUp>
  ) : null;
}

export default PopUp;
