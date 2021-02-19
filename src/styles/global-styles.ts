import { createGlobalStyle } from 'styled-components'
import { colorTheme, fontFamilyTheme } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colorTheme.primary100};
    color: ${colorTheme.secondary100};
    font-family: ${fontFamilyTheme.primary};
  }
`
