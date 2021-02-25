import { mediaTheme } from '@styles/theme'
import styled from 'styled-components'

export const PageSliderWrapper = styled.section`
  width: 100%;
  background: rgb(232, 203, 192);
  background: linear-gradient(135deg, rgba(232, 203, 192, 1) 0%, rgba(99, 111, 164, 1) 100%);
  @media (min-width: ${mediaTheme.sm}) {
    height: 100vh;
    min-height: 800px;
  }
`

export const PageSlides = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`

export const SlideContent = styled.section`
  position: static;
  top: 0;
  width: 100%;
  @media (max-width: ${mediaTheme.sm}) {
    transform: translate(0, 0) !important;
  }

  @media (min-width: ${mediaTheme.sm}) {
    height: 100%;
    overflow-y: auto;
    position: fixed;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`

export const HeroContent = styled(SlideContent)`
  left: 0;
`

export const AboutContent = styled(SlideContent)`
  left: 100%;
`

export const ProjectsContent = styled(SlideContent)`
  left: 200%;
`

export const ContactWrapper = styled(SlideContent)`
  left: 300%;
`
