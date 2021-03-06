import { mediaTheme } from '@styles/theme'
import styled from 'styled-components'

export const SliderContentWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`

export const SliderMainWrapper = styled.main``

export const SliderFooter = styled.footer`
  display: none;
  @media (min-width: ${mediaTheme.sm}) {
    display: block;
  }
`

export const SliderLegendWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
`
