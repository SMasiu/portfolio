import { colorTheme, mediaTheme } from '@styles/theme'
import styled from 'styled-components'

export const ContactWrapper = styled.section`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  padding-bottom: 25px;

  @media (min-width: ${mediaTheme.sm}) {
    width: 100%;
    padding: 0 100px;
  }

  @media (min-width: 1200px) {
    padding: 0 50px;
  }
`

export const ContactContent = styled.section`
  position: relative;
  max-width: 1800px;
`

export const ContactInnerWrapper = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: ${mediaTheme.sm}) {
    grid-template-columns: 2fr 3fr;
  }
`

export const ContactDataWrapper = styled.section``

export const ContactHeader = styled.header`
  margin-bottom: 25px;
`

export const ContactHeading = styled.h3`
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 2px;
`

export const ContactItemsWrapper = styled.address`
  display: grid;
  grid-template-columns: 1fr;
  font-style: normal;

  @media (min-width: 700px) {
    column-gap: 25px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${mediaTheme.sm}) {
    grid-template-columns: 1fr;
  }
`

export const ContactItem = styled.section`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`

export const ContactLink = styled.a`
  color: ${colorTheme.secondary200};
  text-decoration: none;
`

export const ContactLabelWrapper = styled.section`
  display: flex;
  align-items: center;
`

export const ContactIconWrapper = styled.div`
  width: 25px;
`

export const ContactLabel = styled.p`
  margin-left: 10px;
  letter-spacing: 2px;
  font-weight: 300;
`

export const ContactValue = styled.p`
  margin-top: 5px;
  letter-spacing: 2px;
`

export const ContactIllustrationWrapper = styled.section``

export const ContactIllustration = styled.img`
  width: 100%;

  @media (min-width: ${mediaTheme.sm}) {
    width: 600px;
  }
`

export const Watermark = styled.p`
  position: absolute;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  background-blend-mode: soft-light;
  left: 50%;
  bottom: 5%;
  font-size: 65px;

  @media (min-width: 600px) {
    font-size: 100px;
  }

  @media (min-width: ${mediaTheme.sm}) {
    font-size: 20vh;
  }

  @media (min-width: 1400px) {
    bottom: auto;
    top: 70%;
    font-size: 30vh;
  }
`
