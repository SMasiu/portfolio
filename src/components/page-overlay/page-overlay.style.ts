import styled, { css } from 'styled-components'
import ArrowLeft from '@icons/arrow-left.svg'
import ArrowRight from '@icons/arrow-right.svg'

export const PageOverlayWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const OverlayContent = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`

export const changeSlideArrowWrapper = css`
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 50px;
`

export const NextButton = styled(ArrowRight)`
  ${arrowButton}
`

export const PreviousButton = styled(ArrowLeft)`
  ${arrowButton}
`

export const OverlayFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  position: absolute;
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
