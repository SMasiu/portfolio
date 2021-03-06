import { createGlobalStyle } from 'styled-components'
import { colorTheme, fontFamilyTheme } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${colorTheme.primary100};
    color: ${colorTheme.secondary100};
    font-family: ${fontFamilyTheme.primary};
  }

  button {
    background-color: ${colorTheme.primary100};
    color: ${colorTheme.secondary100};
    font-family: ${fontFamilyTheme.primary};
  }

  input {
    color: ${colorTheme.secondary100};
    font-family: ${fontFamilyTheme.primary};
  }

  svg {
    display: block;
    width: 100%;
    fill: ${colorTheme.secondary100};
  }

  .about-illustration {
    @media (min-width: 1400px) {
      opacity: 0.2;
      mix-blend-mode: soft-light;
    }
  }
`
