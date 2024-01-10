import styled from "styled-components";

export const TextInput = styled.input`
  display: flex;
  height: 48px;
  width: 100%;
  background-color: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;

  ::placeholder {
    color: #333333;
  }
`;

export default TextInput;
