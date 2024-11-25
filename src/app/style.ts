"use client";

import { css } from "@emotion/react";

export const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@300..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Montserrat-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/Montserrat-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/Montserrat-SemiBold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    src: url("/fonts/Montserrat-ExtraLight.ttf") format("truetype");
  }
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Montserrat-Medium.ttf") format("truetype");
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

  body {
    color: var(--foreground);
    background: var(--background);
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    scroll-behavior: smooth;

    padding: 0;
    margin: 0;
  }
`;
