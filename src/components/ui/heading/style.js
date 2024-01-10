import styled from "styled-components";

export const StyledHeading = styled.h2`
  margin: 0;
  font-size: ${(props) => (props.size ? `${props.size}px` : "36px")};
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  text-align: ${(props) => (props.size ? "initial" : "center")};
  color: #333;
`;
