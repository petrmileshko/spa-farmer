import styled from "styled-components";

export const StyledPopUp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  width: 50%;
  padding: 40px;
  background-color: red;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

export const ClosePop = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  background-color: white;
`;
