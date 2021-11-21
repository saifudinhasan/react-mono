import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ dark?: any }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins';
    color: #555;
  }
`