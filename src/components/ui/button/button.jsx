import { StyledButton } from "./style";

function Button({ children, link, onClick, ...props }) {
  let newOnClick = (evt) => {
    evt.preventDefault();
    onClick && onClick(evt);
  };
  return (
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
