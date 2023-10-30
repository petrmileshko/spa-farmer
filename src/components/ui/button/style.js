import styled from "styled-components";

export const StyledButton = styled.a`
  display: flex;
  min-width: 220px;
  min-height: 60px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  font-family: Inter;
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

  &:hover {
    background: #fc7427;
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    background: #fc7427;
    box-shadow: none;
  }
`;
