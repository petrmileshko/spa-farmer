import { StyledButton } from "./style";

function Button({
  children,
  link,
  onClick,
  className,
  disabled,
  maxWidth,
  ...props
}) {
  return (
    <StyledButton
      disabled={disabled}
      $maxWidth={maxWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
export default Button;
