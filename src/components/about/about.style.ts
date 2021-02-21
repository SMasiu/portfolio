import { colorTheme } from '@styles/theme'
import styled, { css } from 'styled-components'

export const AboutWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`

export const AboutContent = styled.section`
  max-width: 1800px;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  position: relative;
`

export const AboutArticle = styled.article`
  padding: 50px;
`

export const AboutHeader = styled.header`
  margin-bottom: 25px;
`

export const AboutHeading = styled.h3`
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 2px;
`

export const AboutText = styled.p`
  margin-bottom: 10px;
  max-width: 600px;
`

export const TechStackWrapper = styled.section``

export const TechStackNeuron = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
`

export const TechStackLayers = styled.section``

export const TechStackOutputLayer = styled.section`
  display: flex;
  align-self: center;
  justify-content: flex-end;
`

export const TechStackContent = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`

export const TechStackItem = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border: 1px solid ${colorTheme.secondary200};
  border-radius: 50%;
`

export interface LineProps {
  w: string
  r?: number
  b?: string
}

export const Line = styled.span<LineProps>`
  position: absolute;
  left: 100%;
  transform-origin: left;
  display: block;
  height: 0;
  opacity: 0.4;
  ${({ w, r, b }) => css`
    border-top: 1px ${b || 'solid'} ${colorTheme.secondary200};
    width: ${w};
    transform: rotate(${r ?? 0}deg);
  `}
`

export const TechStackLogo = styled.img`
  width: 40px;
  height: auto;
`

export const TechStackFooter = styled.footer`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`

export const AboutIllustrationWrapper = styled.figure`
  position: absolute;
  width: 650px;
  transform: scaleX(-1) translate(50%, -50%);
  left: 40%;
  top: 50%;
`
