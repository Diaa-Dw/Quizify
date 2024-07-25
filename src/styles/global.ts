import { createGlobalStyle } from "styled-components";
import { respondTo } from "./_responsive";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    background: linear-gradient(to right, #4f2aa4, #7c5cc1);
    color: ${({ theme }) => theme.colors.text};
      ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  ${respondTo.medium`
  padding: 0.4rem;

  `}
}

`;
