"use client";

import { css } from "@emotion/react";

export const GlobalStyles = css`
  @font-face {
    font-family: "Cantarell";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/Cantarell-Bold.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Cantarell";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Cantarell-Regular.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Montserrat-Regular.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/Montserrat-Bold.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/Montserrat-SemiBold.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Fira Sans Condensed";
    font-style: normal;
    font-weight: 200;
    src: url("/fonts/FiraSansCondensed-Light.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Montserrat-Medium.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    src: url("/fonts/Montserrat-ExtraLight.ttf") format("truetype");
    font-display: swap;
  }

  :root {
    --background: #ffffff;
    --foreground: #171717;

    --main-color: #fbf7fa;
    --secondary-color: #fdfdfd;

    --gray: #262b33;
    --extra-gray: #222222;
    --light-gray: #959199;
    --extra-light-gray: #c5c2c7;
    --dark-gray: #403c43;
    --dark-gray-rgb: 64, 60, 67;

    --black: #1b1a1d;

    --violet-dark: #241f2f;
    --violet-primary: #422585;
    --violet-light: #7861a9;
  }

  html {
    scroll-behavior: smooth;

    scroll-padding-top: 100px;
  }

  body {
    color: var(--foreground);
    background: var(--background);
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;

    padding: 0;
    margin: 0;
  }

  .p-GridCell {
    vertical-align: bottom !important;
  }
`;
