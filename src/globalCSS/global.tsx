import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  :root {
    --light-clr: #fff;
    --dark-clr: #23272a;
    --brand-clr: #7289da;
    --off-white-clr: #f6f6f6;
    --general-font-size: 2rem;
    --primary-title-font-size: 4.8rem;
    --secondary-title-font-size: 4rem;
    --main-font-family-light: "Whitney Light", sans-serif;
    --main-font-family-medium: "Whitney Medium", sans-serif;
    --main-font-family-bold: "Whitney Bold", sans-serif;
    --num-of-grid-columns: 4;
    --section-spacing: 5.6rem 2.4rem;
    --container-width: 126rem;
  }

  body {
    font-size: var(--general-font-size);
    font-family: var(--main-font-family-light);
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: var(---dark-clr);
  }

  ul {
    list-style-type: none;
  } 
`;
