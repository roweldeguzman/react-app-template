import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default globalStyles;
