import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  height: 100%;
  margin: 0;
  margin-left: calc(100vw - 100%);
}

body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  position: relative;
  min-height: 100%;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: #333333;
}
`;
