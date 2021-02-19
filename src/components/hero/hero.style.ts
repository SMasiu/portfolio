import styled, { css } from 'styled-components'

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background: rgb(232, 203, 192);
  background: linear-gradient(135deg, rgba(232, 203, 192, 1) 0%, rgba(99, 111, 164, 1) 100%);

  /* background: rgb(190, 147, 197);
  background: linear-gradient(270deg, rgba(190, 147, 197, 1) 0%, rgba(123, 198, 204, 1) 100%); */
`

export const HeroContent = styled.section`
  max-width: 1800px;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const HeroAboutArticle = styled.article`
  padding-top: 40%;
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
  padding-top: 30%;
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
