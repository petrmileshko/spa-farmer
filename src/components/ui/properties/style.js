import styled from "styled-components";
import { Li } from "/src/components/styled";

export const Ptoperty = styled(Li)`
  margin-bottom: 8px;
  font-size: 14px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const PropertyLabel = styled.span`
  font-weight: bold;
`;
