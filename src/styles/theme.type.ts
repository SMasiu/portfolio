export interface ColorTheme {
  primary100: string
  primary200: string
  primary300: string
  secondary100: string
  secondary200: string
  secondary300: string
}

export interface FontSizeTheme {
  sm: string
  md: string
  lg: string
}

export interface FontFamilyTheme {
  primary: string
}

export interface Theme {
  colors: ColorTheme
  fontSize: FontSizeTheme
  fontFamily: FontFamilyTheme
}
