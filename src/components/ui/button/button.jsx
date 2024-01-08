import { StyledButton, StyledSubmitButton } from "./style";

function Button({ children, link, onClick, type, ...props }) {
  let newOnClick = (evt) => {
    evt.preventDefault();
    onClick && onClick(evt);
    console.log(`Координаты: ${event.clientX} : ${event.clientY}.`);
  };
  return type === "submit" ? (
    <StyledSubmitButton onClick={newOnClick}>{children}</StyledSubmitButton>
  ) : (
    <StyledButton
      {...(link ? { href: link } : { as: "button", type: "button" })}
      onClick={newOnClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
