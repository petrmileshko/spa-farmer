import { StyledButton } from "./style";

function Button({ children, link }) {
  return (
    <StyledButton
      {...(link ? { href: link } : { as: "button", type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
