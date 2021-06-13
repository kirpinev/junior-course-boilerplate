import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: OpenSans, "Helvetica Neue", Arial, sans-serif;
  }
`;
