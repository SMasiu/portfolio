import { Button } from '@components/button/button'
import { Scroll } from '@components/scroll/scroll'
import * as React from 'react'
import {
  Device,
  DevicePerson,
  DeviceReviews,
  DeviceText,
  DeviceTextRow,
  FakeText,
  Glass,
  HeroAbout,
  HeroAboutArticle,
  HeroContent,
  HeroHeader,
  HeroProductSection,
  HeroSection,
  HeroSubTitle,
  HeroTitle,
  HeroWatermark,
  HeroWatermarkText,
  Review,
  ReviewFakeTextWrapper,
  ReviewHeader,
  ReviewProfile,
  ReviewStar,
  ReviewStarsWrapper,
  ScrollWrapper
} from './hero.style'

const reviews = [
  {
    profileUrl: 'review-profile-1.svg',
    fakeText: [40, 30, 60, 30, 40, 50, 45],
    rate: 5
  },
  {
    profileUrl: 'review-profile-2.svg',
    fakeText: [20, 10, 50, 55, 60],
    rate: 4
  },
  {
    profileUrl: 'review-profile-3.svg',
    fakeText: [70, 40, 30, 50, 30, 40, 10, 50],
    rate: 5
  }
]

export const Hero = () => {
  const generateStars = (rate: number) => {
    const images: string[] = []
    for (let i = 1; i <= 5; i++) {
      images.push(rate - i >= 0 ? 'star.svg' : 'star-empty.svg')
    }
    return images
  }

  return (
    <HeroSection>
      <HeroWatermark>
        <HeroWatermarkText>Web Dev</HeroWatermarkText>
      </HeroWatermark>
      <ScrollWrapper>
        <Scroll />
      </ScrollWrapper>
      <HeroContent>
        <HeroAboutArticle>
          <HeroHeader>
            <HeroTitle>Szymon Maśko</HeroTitle>
            <HeroSubTitle>Web developer</HeroSubTitle>
          </HeroHeader>
          <HeroAbout>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum
            necessitatibus pariatur adipisci explicabo cumque eos quos alias commodi quibusdam vel.
          </HeroAbout>
          <Button>View more</Button>
        </HeroAboutArticle>
        <HeroProductSection>
          <Device>
            <Glass></Glass>
            <DeviceText>
              <DeviceTextRow>
                <FakeText width={200} height={20} color={'#2c2c2c'}></FakeText>
                <FakeText width={140} height={20} color={'#2c2c2c'}></FakeText>
              </DeviceTextRow>
              <DeviceTextRow>
                <FakeText width={70} color={'#f8f8f8'}></FakeText>
                <FakeText width={80} color={'#f8f8f8'}></FakeText>
                <FakeText width={60} color={'#f8f8f8'}></FakeText>
                <FakeText width={40} color={'#f8f8f8'}></FakeText>
                <FakeText width={50} color={'#f8f8f8'}></FakeText>
                <FakeText width={80} color={'#f8f8f8'}></FakeText>
                <FakeText width={50} color={'#f8f8f8'}></FakeText>
                <FakeText width={60} color={'#f8f8f8'}></FakeText>
              </DeviceTextRow>
            </DeviceText>
            <DevicePerson src="undraw_annotation_7das.svg"></DevicePerson>
            <DeviceReviews>
              {reviews.map(({ profileUrl, fakeText, rate }, i) => (
                <Review key={i}>
                  <ReviewHeader>
                    <ReviewProfile src={profileUrl}></ReviewProfile>
                    <ReviewStarsWrapper>
                      {generateStars(rate).map((url, i) => (
                        <ReviewStar src={url} key={i}></ReviewStar>
                      ))}
                    </ReviewStarsWrapper>
                  </ReviewHeader>
                  <ReviewFakeTextWrapper>
                    {fakeText.map((width, i) => (
                      <FakeText width={width} key={i}></FakeText>
                    ))}
                  </ReviewFakeTextWrapper>
                </Review>
              ))}
            </DeviceReviews>
          </Device>
        </HeroProductSection>
      </HeroContent>
    </HeroSection>
  )
}
