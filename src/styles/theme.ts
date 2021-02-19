import { ColorTheme, FontFamilyTheme, FontSizeTheme, Theme } from './theme.type'

export const colorTheme: ColorTheme = {
  primary100: '#fefefe',
  primary200: '#fefefe',
  primary300: '#fefefe',
  secondary100: '#3b3b3b',
  secondary200: '#3b3b3b',
  secondary300: '#3b3b3b'
}

export const fontSizeTheme: FontSizeTheme = {
  sm: '14px',
  md: '16px',
  lg: '18px'
}

export const fontFamilyTheme: FontFamilyTheme = {
  primary: `'Comfortaa', sans-serif`
}

export const theme: Theme = {
  colors: colorTheme,
  fontSize: fontSizeTheme,
  fontFamily: fontFamilyTheme
}
