import styled from "styled-components";
import { Section } from "/src/components/styled";

export const Panel = styled(Section)`
  padding: 0 20px;
  padding-top: ${(props) =>
    props.$paddingTop ? `${props.$paddingTop}px` : "20px"};
  padding-bottom: ${(props) =>
    props.$paddingBottom ? `${props.$paddingBottom}px` : "20px"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  margin-bottom: ${(props) => props.$marginBottom || 0}px;
  width: ${(props) => props.$width || "auto"};
  display: block;
  background-color: #ffffff;
`;

export default Panel;
