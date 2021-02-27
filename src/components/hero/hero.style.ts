import { mediaTheme } from '@styles/theme'
import styled, { css } from 'styled-components'

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 100px 0 200px;

  @media (min-width: ${mediaTheme.sm}) {
    padding: 0;
    min-height: 600px;
  }
`

export const HeroWatermark = styled.div`
  position: absolute;
  opacity: 0.1;
  background-blend-mode: soft-light;
  font-size: 35px;
  transform: translate(-50%, -50%);
  bottom: 12.5%;
  left: 50%;

  @media (min-width: ${mediaTheme.sm}) {
    bottom: auto;
    top: 72.5%;
    left: 47.5%;
    font-size: 30vh;
  }
`

export const HeroWatermarkText = styled.p`
  line-height: 150%;
`

export const HeroContent = styled.section`
  max-width: 1800px;
  height: 100%;
  margin: auto;
  display: grid;
  align-items: center;
  position: relative;
  grid-template-columns: 1fr;
  width: 90%;

  @media (min-width: 600px) {
    width: 80%;
  }

  @media (min-width: ${mediaTheme.sm}) {
    width: 100%;
    grid-template-columns: 2fr 3fr;
  }
`

export const HeroAboutArticle = styled.article`
  margin: auto;
  padding: 50px 0 100px;

  @media (min-width: ${mediaTheme.sm}) {
    padding: 50px;
  }
`

export const HeroHeader = styled.header``

export const HeroTitle = styled.h1`
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 50px;
`

export const HeroSubTitle = styled.h2`
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 26px;
`

export const HeroAbout = styled.p`
  max-width: 600px;
  margin-top: 25px;
  margin-bottom: 10px;
`

export const HeroProductSection = styled.section`
  @media (min-width: ${mediaTheme.sm}) {
    margin-left: 100px;
    margin-top: -100px;
  }
`

export const Device = styled.section`
  width: 90%;
  position: relative;
  margin: auto;

  @media (min-width: ${mediaTheme.sm}) {
    width: 100%;
    margin-left: -100px;
    margin-top: 100px;
    max-width: 700px;
  }
`

export const Glass = styled.section`
  width: 100%;
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  position: relative;
  backdrop-filter: blur(1px);
  filter: blur(1px);
  background-clip: padding-box;
  box-shadow: 10px 10px 10px;
  border: 3px solid #141414;
  z-index: 800;
  padding-bottom: 50%;

  @media (min-width: 475px) {
    padding-bottom: 40%;
  }

  @media (min-width: ${mediaTheme.sm}) {
    border-width: 7px;
    padding-bottom: 0;
    height: 350px;
  }

  @media (min-width: 1600px) {
    height: 400px;
  }
`

export const DevicePerson = styled.img`
  position: absolute;
  left: 0;
  height: auto;
  transform: scaleX(-1) translate(5%, 35%);
  width: 100%;
  bottom: 25px;

  @media (min-width: 475px) {
    bottom: 0;
    width: 50%;
    transform: scaleX(-1) translate(10%, 20%);
  }

  @media (min-width: ${mediaTheme.sm}) {
    height: 100%;
    bottom: auto;
    top: 0;
    transform: scaleX(-1) translate(75px, 95px);
    width: 100%;
  }

  @media (min-width: 1600px) {
    transform: scaleX(-1) translate(100px, 100px);
  }
`

export const DeviceReviews = styled.section`
  position: absolute;
  transform: translateY(-50%);
  right: 20px;
  display: none;
  top: 130px;

  @media (min-width: 475px) {
    display: block;
  }

  @media (min-width: 475px) {
    top: 175px;
  }

  @media (min-width: ${mediaTheme.sm}) {
    top: calc(50% + 25px);
  }

  @media (min-width: 1600px) {
    top: 50%;
    right: auto;
    left: calc(100% - 95px);
  }
`

export const Review = styled.article`
  padding: 10px 5px;
  border-radius: 5px;
  background-color: #fff;
  margin: 5px;
  width: 200px;

  &:last-child {
    display: none;
  }

  @media (min-width: 600px) {
    width: 250px;

    &:last-child {
      display: block;
    }
  }

  @media (min-width: 800px) {
    width: 300px;
    padding: 15px;
    border-radius: 15px;
  }

  @media (min-width: ${mediaTheme.sm}) {
    padding: 15px;
    border-radius: 15px;
    margin: 10px 0;
    width: 250px;
  }

  @media (min-width: 1600px) {
    margin: 25px 0;
    width: 275px;
  }
`

export const ReviewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ReviewProfile = styled.img`
  width: 20px;

  @media (min-width: 1600px) {
    width: 45px;
  }
`

export const ReviewStarsWrapper = styled.section``

export const ReviewStar = styled.img`
  width: 10px;
  margin: 0 3px;

  @media (min-width: 1600px) {
    width: 15px;
  }
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
    height: ${(height ?? 10) * 0.5}px;

    @media (min-width: 800px) {
      height: ${(height ?? 10) * 0.75}px;
    }

    @media (min-width: 1600px) {
      height: ${height ?? 10}px;
    }
  `}
`

export const DeviceText = styled.section`
  position: absolute;
  top: 20px;
  left: 25px;
  display: none;

  @media (min-width: 475px) {
    display: block;
  }
`

export const DeviceTextRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
`

export const ScrollWrapper = styled.section`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`
