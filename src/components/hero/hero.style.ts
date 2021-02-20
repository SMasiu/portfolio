import styled, { css } from 'styled-components'
import ArrowLeft from '@icons/arrow-left.svg'
import ArrowRight from '@icons/arrow-right.svg'

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background: rgb(232, 203, 192);
  background: linear-gradient(135deg, rgba(232, 203, 192, 1) 0%, rgba(99, 111, 164, 1) 100%);
  position: relative;
`

export const HeroWatermark = styled.div`
  position: absolute;
  top: 72.5%;
  left: 47.5%;
  transform: translate(-50%, -50%);
  font-size: 30vh;
  opacity: 0.1;
  background-blend-mode: soft-light;
`

export const HeroWatermarkText = styled.p`
  line-height: 150%;
`

export const HeroContent = styled.section`
  max-width: 1800px;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  position: relative;
`

export const HeroAboutArticle = styled.article`
  padding: 50px;
`

export const HeroHeader = styled.header``

export const HeroTitle = styled.h1`
  font-size: 50px;
`

export const HeroAbout = styled.p`
  max-width: 600px;
  margin-top: 25px;
  margin-bottom: 10px;
`

export const HeroSubTitle = styled.h2`
  font-size: 26px;
`

export const HeroProductSection = styled.section`
  margin-top: -100px;
  margin-left: 100px;
`

export const Device = styled.section`
  width: 700px;
  height: 400px;
  position: relative;
`

export const Glass = styled.section`
  width: 100%;
  height: 100%;
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  padding: 3em;
  border-radius: 1em;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(1px);
  filter: blur(1px);
  background-clip: padding-box;
  box-shadow: 10px 10px 10px;
  border: 7px solid #141414;
  z-index: 800;
`

export const DevicePerson = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: scaleX(-1) translate(100px, 100px);
`

export const DeviceReviews = styled.section`
  position: absolute;
  top: 50%;
  left: calc(100% - 95px);
  transform: translateY(-50%);
`

export const Review = styled.article`
  margin: 25px 0;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
  width: 300px;
`

export const ReviewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ReviewProfile = styled.img`
  width: 45px;
`

export const ReviewStarsWrapper = styled.section``

export const ReviewStar = styled.img`
  width: 15px;
  margin: 0 3px;
`

export const ReviewFakeTextWrapper = styled.section`
  margin: 0 5px;
  display: flex;
  flex-wrap: wrap;
`

export interface FakeTextProps {
  width: number
  height?: number
  color?: string
}

export const FakeText = styled.span<FakeTextProps>`
  display: block;
  border-radius: 25px;
  margin-right: 5px;
  margin-top: 5px;
  ${({ width, height, color }) => css`
    width: ${width}px;
    background-color: ${color || '#ccc'};
    height: ${height ?? 10}px;
  `}
`

export const DeviceText = styled.section`
  position: absolute;
  top: 20px;
  left: 25px;
`

export const DeviceTextRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
`

export const SliderDotsWrapper = styled.section`
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
`

export const SliderDotWrapper = styled.span`
  display: block;
  border-radius: 50%;
  padding: 15px;
`

export const SliderDot = styled.span`
  display: block;
  border: 2px solid #444;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

export const PreviousWrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NextWrapper = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NextButton = styled(ArrowRight)`
  width: 50px;
`

export const PreviousButton = styled(ArrowLeft)`
  width: 50px;
`

export const PageCounter = styled.section`
  position: absolute;
  right: 25px;
  bottom: 25px;
`

export const PageCounterContent = styled.section`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 1;
  font-weight: 300;
`

export const PageCurrent = styled.section`
  display: flex;
  align-items: flex-end;
`

export const PageName = styled.p`
  margin-right: 5px;
  margin-bottom: 17px;
`

export const PageCurrentIndex = styled.p`
  padding: 15px 5px 0 0;
  font-size: 75px;
`

export const PageOf = styled.p`
  position: absolute;
  top: 0;
  right: 0;
`
