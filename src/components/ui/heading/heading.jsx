import { StyledHeading } from "./style";

function Heading({ level, size, children }) {
  const headingLevel = `h${level}`;

  return (
    <StyledHeading {...(level ? { as: headingLevel } : { as: "h2" })} size={size}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
