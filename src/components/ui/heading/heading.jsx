import { StyledHeading } from "./style";

function Heading({ level, children }) {
  const headingLevel = `h${level}`;

  return (
    <StyledHeading {...(level ? { as: headingLevel } : { as: "h2" })}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
