import { mediaTheme } from '@styles/theme'
import styled from 'styled-components'

export const AboutWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 600px;
`

export const AboutContent = styled.section`
  max-width: 1400px;
  width: 90%;
  height: 100%;
  margin: auto;
  display: grid;
  align-items: center;
  position: relative;
  grid-template-columns: 1fr;

  @media (min-width: ${mediaTheme.sm}) {
    grid-template-columns: 2fr 3fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 2fr 1fr;
  }
`

export const AboutArticle = styled.article`
  padding-bottom: 50px;

  @media (min-width: ${mediaTheme.sm}) {
    padding: 50px;
  }
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

export const TechStackWrapper = styled.section`
  @media (min-width: ${mediaTheme.sm}) {
    padding-right: 50px;
  }
`

export const TechStackNeuron = styled.section``

export const TechStackLayers = styled.section``

export const TechStackContent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  row-gap: 25px;
  &:not(:last-child) {
    margin-bottom: 25px;
  }

  @media (min-width: 450px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${mediaTheme.sm}) {
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
  }
`

export const TechStackItem = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 5px;
  box-shadow: 0 2px 5px #00000022;
  padding: 5px;
`

export const TechStackLogo = styled.img`
  width: 75%;
  height: auto;

  @media (min-width: ${mediaTheme.sm}) {
    width: 40px;
  }
`

export const TechStackFooter = styled.footer`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`

export const AboutIllustrationWrapper = styled.figure`
  position: absolute;
  width: 90%;
  left: 5%;
  bottom: 0;
  opacity: 0.1;
  mix-blend-mode: soft-light;

  @media (min-width: 450px) {
    bottom: -100px;
  }

  @media (min-width: ${mediaTheme.sm}) {
    bottom: auto;
    width: 650px;
    transform: scaleX(-1) translate(50%, -50%);
    left: 40%;
    top: 50%;
  }

  @media (min-width: 1400px) {
    opacity: 1;
  }
`
