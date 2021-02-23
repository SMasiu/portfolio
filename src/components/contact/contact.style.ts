import styled from 'styled-components'

export const ContactWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const ContactContent = styled.section`
  position: relative;
  max-width: 1800px;
`

export const ContactInnerWrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
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

export const ContactItem = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
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
  width: 600px;
`

export const Watermark = styled.p`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30vh;
  opacity: 0.1;
  background-blend-mode: soft-light;
`
