import styled from "styled-components";

export const Main = styled.main`
  width: ${(props) =>
    props.theme.pageWidth ? props.theme.pageWidth : "1280px"};
  min-height: 100%;
  margin: 0 auto;
  padding-bottom: 80px;
`;
