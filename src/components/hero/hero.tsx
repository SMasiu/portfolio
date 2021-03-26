import { Button } from '@components/button/button'
import { Scroll } from '@components/scroll/scroll'
import * as React from 'react'
import { useEffect } from 'react'
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
import { useState } from 'react'
import { useSliderState } from '@global-state/slider-store'
import { useWheel } from '@hooks/use-wheel'
import { handleWheel } from '@common/handle-wheel'
import gsap from 'gsap'
import HeroSvg from '@icons/hero.svg'
import { afterSlideOut } from '@common/animation'

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

export interface HeroProps {
  onPageChange: (slide: number) => void
}

export const Hero: React.FC<HeroProps> = ({ onPageChange }) => {
  const [scrollTicks, setScrolledTicks] = useState(0)
  const { state, dispatch } = useSliderState()
  const [loadedPage, setLoadedPage] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useWheel('#hero-content', handleWheel(1, state, dispatch, scrollTicks, setScrolledTicks))

  useEffect(() => {
    if (state.disableSlide) {
      return
    }

    const afterT1 = afterSlideOut(['#hero-header', '#hero-article'])
    const afterT3 = afterSlideOut(['#hero-watermark'])
    const afterT4 = afterSlideOut([
      '#hero-text',
      '#hero-review-2',
      '#hero-review-1',
      '#hero-review-0'
    ])
    const afterT5 = afterSlideOut([
      '#hero-il-rect-0',
      '#hero-il-rect-1',
      '#hero-il-rect-2',
      '#hero-il-rect-3',
      '#hero-il-graph'
    ])

    if (state.currentSlide === 1) {
      setIsAnimating(true)

      const delay = loadedPage ? 2 : 1
      const t1 = gsap.timeline({ defaults: { duration: 1 } })
      const t3 = gsap.timeline({ defaults: { duration: 1 } })
      const t4 = gsap.timeline({ defaults: { duration: 0.5 } })
      const t5 = gsap.timeline({ defaults: { duration: 0.5 } })

      t1.delay(delay)
        .fromTo('#hero-header', { opacity: 0, x: -100 }, { opacity: 1, x: 0 })
        .fromTo('#hero-article', { opacity: 0, y: -50 }, { opacity: 1, y: 0 })
        .then(() => {
          if (!loadedPage) setLoadedPage(true)
        })

      t3.delay(delay).fromTo('#hero-watermark', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })

      t4.delay(delay)
        .fromTo('#hero-review-0', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
        .fromTo('#hero-review-1', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
        .fromTo('#hero-review-2', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
        .fromTo('#hero-text', { opacity: 0, y: -50 }, { opacity: 1, y: 0 })

      t5.delay(delay)
        .fromTo('#hero-il-rect-0', { scale: 0, opacity: 0, y: -50 }, { scale: 1, opacity: 1, y: 0 })
        .fromTo('#hero-il-rect-1', { scale: 0, opacity: 0, y: -50 }, { scale: 1, opacity: 1, y: 0 })
        .fromTo('#hero-il-rect-2', { scale: 0, opacity: 0, y: -50 }, { scale: 1, opacity: 1, y: 0 })
        .fromTo('#hero-il-rect-3', { scale: 0, opacity: 0, y: -50 }, { scale: 1, opacity: 1, y: 0 })
        .fromTo('#hero-il-graph', { opacity: 0 }, { opacity: 1 })
        .then(() => {
          setIsAnimating(false)
        })
    } else if (!isAnimating && state.lastSlide === 1) {
      const t1 = gsap.timeline({ defaults: { duration: 0.5 } })
      const t3 = gsap.timeline({ defaults: { duration: 1 } })
      const t4 = gsap.timeline({ defaults: { duration: 0.25 } })
      const t5 = gsap.timeline({ defaults: { duration: 0.2 } })

      t1.to('#hero-header', { opacity: 0, x: -100 })
        .to('#hero-article', { opacity: 0, y: -50 })
        .then(() => {
          afterT1()
        })

      t3.to('#hero-watermark', { scale: 0, opacity: 0 }).then(afterT3)

      t4.to('#hero-text', { opacity: 0, y: -50 })
        .to('#hero-review-2', { opacity: 0, x: -50 })
        .to('#hero-review-1', { opacity: 0, x: -50 })
        .to('#hero-review-0', { opacity: 0, x: -50 })
        .then(afterT4)

      t5.to('#hero-il-rect-0', { scale: 0, opacity: 0, y: -50 })
        .to('#hero-il-rect-1', { scale: 0, opacity: 0, y: -50 })
        .to('#hero-il-rect-2', { scale: 0, opacity: 0, y: -50 })
        .to('#hero-il-rect-3', { scale: 0, opacity: 0, y: -50 })
        .to('#hero-il-graph', { opacity: 0 })
        .then(afterT5)
    }
  }, [state.currentSlide])

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
        <HeroWatermarkText id="hero-watermark">Web Dev</HeroWatermarkText>
      </HeroWatermark>
      <ScrollWrapper>
        <Scroll />
      </ScrollWrapper>
      <HeroContent>
        <HeroAboutArticle>
          <HeroHeader id="hero-header">
            <HeroTitle>Szymon Maśko</HeroTitle>
            <HeroSubTitle>Web developer</HeroSubTitle>
          </HeroHeader>
          <div id="hero-article">
            <HeroAbout>
              Cztery lata temu zacząłem swoją przygodę z programowaniem codziennie rozwijając swoje
              umiejętności. W tym czasie stworzyłem wiele projektów ucząc się na własnych błędach.
              Nadal planuje pogłębiać swoją wiedzę oraz rozwijać się w branży IT.
            </HeroAbout>
            <Button onClick={() => onPageChange(2)}>Czytaj więcej</Button>
          </div>
        </HeroAboutArticle>
        <HeroProductSection>
          <Device>
            <Glass id="hero-device"></Glass>
            <DeviceText id="hero-text">
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
            <DevicePerson>
              <HeroSvg />
            </DevicePerson>
            <DeviceReviews>
              {reviews.map(({ profileUrl, fakeText, rate }, i) => (
                <Review key={i} id={`hero-review-${i}`}>
                  <ReviewHeader>
                    <ReviewProfile alt="Profile" src={profileUrl}></ReviewProfile>
                    <ReviewStarsWrapper>
                      {generateStars(rate).map((url, i) => (
                        <ReviewStar alt="star" src={url} key={i}></ReviewStar>
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
