import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: flex;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  min-height: 60px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  color: #fff;
  background-color: ${(props) =>
    props.theme.buttonBackground ? props.theme.buttonBackground : "#000"};
  border: none;
  background-image: none;
  box-shadow: none;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHoverActive};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;

export const StyledSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  min-width: 80px;
  min-height: 10px;
  padding: 6px 18px;
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  color: #000000;
  background-color: #00ff00;
  border: none;
  background-image: none;
  box-shadow: none;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover:not(:disabled) {
    background: #ff00ff;
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active:not(:disabled) {
    background: #ff0000;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.3;
    cursor: none;
  }
`;
