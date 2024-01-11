import styled, { css } from "styled-components";
import { Ul, Li } from "/src/components/styled";

export const TabToggler = styled.button`
  display: block;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  background-color: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.$isSelect
      ? css`
          background-color: #88aa4d;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #ffffff;
        `
      : css`
          background-color: #f7f7f7;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #333333;
          &:hover {
            color: #88aa4d;
          }
        `}
`;

export const TabHeader = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const TabItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabContent = styled.div`
  max-height: ${(props) => props.$maxTabContentHeiht || "none"};
  font-size: 14px;
  text-align: left;
  overflow-y: overlay;
`;
