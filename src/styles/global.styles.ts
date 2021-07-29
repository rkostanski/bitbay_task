import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    src: url('assets/fonts/montserrat/Montserrat-Light.woff2') format('woff2'),
      url('assets/fonts/montserrat/Montserrat-Light.woff') format('woff'),
      url('assets/fonts/montserrat/Montserrat-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('assets/fonts/montserrat/Montserrat-Bold.woff2') format('woff2'),
      url('assets/fonts/montserrat/Montserrat-Bold.woff') format('woff'),
      url('assets/fonts/montserrat/Montserrat-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('assets/fonts/montserrat/Montserrat-Regular.woff2') format('woff2'),
      url('assets/fonts/montserrat/Montserrat-Regular.woff') format('woff'),
      url('assets/fonts/montserrat/Montserrat-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  html, body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;
