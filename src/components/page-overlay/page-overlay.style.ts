import styled, { css } from 'styled-components'
import ArrowLeft from '@icons/arrow-left.svg'
import ArrowRight from '@icons/arrow-right.svg'
import { mediaTheme } from '@styles/theme'

export const PageOverlayWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  @media (min-width: ${mediaTheme.sm}) {
    display: block;
  }
`

export const OverlayContent = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`

export const changeSlideArrowWrapper = css`
  position: fixed;
  top: 0;
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  cursor: pointer;
`

export const PreviousWrapper = styled.section`
  ${changeSlideArrowWrapper}
  left: 0;
`

export const NextWrapper = styled.section`
  ${changeSlideArrowWrapper}
  right: 0;
`

export const arrowButton = css`
  width: 35px;
`

export const NextButton = styled(ArrowRight)`
  ${arrowButton}
`

export const PreviousButton = styled(ArrowLeft)`
  ${arrowButton}
`

export const OverlayFooter = styled.footer`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  bottom: 0;
  width: 100%;
  padding: 0 35px 10px;
`

export const CopyRight = styled.section`
  margin-bottom: 20px;
`

export const CopyRightText = styled.p`
  font-size: 13px;
  letter-spacing: 2px;
`

export const PageCounterWrapper = styled.section`
  justify-self: flex-end;
`
