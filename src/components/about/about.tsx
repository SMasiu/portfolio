import { Button } from '@components/button/button'
import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  AboutArticle,
  AboutContent,
  AboutHeader,
  AboutHeading,
  AboutWrapper,
  AboutText,
  TechStackWrapper,
  TechStackContent,
  TechStackItem,
  TechStackLogo,
  TechStackFooter,
  AboutIllustrationWrapper,
  TechStackNeuron,
  TechStackLayers
} from './about.style'
import AboutIllustration from '@icons/about.svg'
import { techStackItems } from '@common/tech-stack'
import { useSliderState } from '@global-state/slider-store'
import { useWheel } from '@hooks/use-wheel'
import { handleWheel } from '@common/handle-wheel'
import gsap from 'gsap'
import { afterSlideOut } from '@common/animation'
import { SliderActions } from '../../types/global-state.type'

const techStack = [
  [techStackItems.js, techStackItems.ts, techStackItems.node, techStackItems.nest],
  [techStackItems.html, techStackItems.css, techStackItems.angular, techStackItems.react],
  [
    techStackItems.graphql,
    techStackItems.gatsby,
    techStackItems.postgresql,
    techStackItems.mongodb
  ],
  [techStackItems.python, techStackItems.docker, techStackItems.github, techStackItems.npm]
]

export interface AboutProps {
  sliderWrapper: HTMLElement
}

export const About: React.FC<AboutProps> = ({ sliderWrapper }) => {
  const [scrollTicks, setScrolledTicks] = useState(0)
  const { state, dispatch } = useSliderState()
  const [isAnimating, setIsAnimating] = useState(false)

  useWheel(handleWheel(2, state, dispatch, scrollTicks, setScrolledTicks, sliderWrapper))

  useEffect(() => {
    if (state.disableSlide) {
      return
    }

    const afterT1 = afterSlideOut(['#about-header', '#about-article'])
    const afterT2 = afterSlideOut([
      '#tech-stack-header',
      '#tech-stack-row-0',
      '#tech-stack-row-1',
      '#tech-stack-row-2',
      '#tech-stack-row-3',
      '#tech-stack-button'
    ])

    if (state.currentSlide === 2) {
      setIsAnimating(true)
      const t1 = gsap.timeline({ defaults: { duration: 0.5 } })
      const t2 = gsap.timeline({ defaults: { duration: 0.5 } })

      t1.delay(1)
        .fromTo('#about-header', { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
        .fromTo('#about-article', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })

      t2.delay(1)
        .fromTo('#tech-stack-header', { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
        .fromTo('#tech-stack-row-0', { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
        .fromTo('#tech-stack-row-1', { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
        .fromTo('#tech-stack-row-2', { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
        .fromTo('#tech-stack-row-3', { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
        .fromTo('#tech-stack-button', { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
        .then(() => {
          setIsAnimating(false)
        })
    } else if (!isAnimating && state.lastSlide === 2) {
      const t1 = gsap.timeline({ defaults: { duration: 0.5 } })
      const t2 = gsap.timeline({ defaults: { duration: 0.25 } })

      t1.to('#about-header', { opacity: 0, y: -100 })
        .to('#about-article', {
          opacity: 0,
          x: -50
        })
        .then(afterT1)

      t2.to('#tech-stack-header', { opacity: 0, y: -100 })
        .to('#tech-stack-row-0', { opacity: 0, x: 100 })
        .to('#tech-stack-row-1', { opacity: 0, x: 100 })
        .to('#tech-stack-row-2', { opacity: 0, x: 100 })
        .to('#tech-stack-row-3', { opacity: 0, x: 100 })
        .to('#tech-stack-button', { opacity: 0, y: 50 })
        .then(afterT2)
    }
  }, [state.currentSlide])

  return (
    <AboutWrapper>
      <AboutIllustrationWrapper>
        <AboutIllustration />
      </AboutIllustrationWrapper>
      <AboutContent>
        <AboutArticle>
          <AboutHeader id="about-header">
            <AboutHeading>About me</AboutHeading>
          </AboutHeader>
          <div id="about-article">
            <AboutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolor dolorum
              temporibus ipsum veniam tempore nisi minima laborum, maiores iste deleniti labore hic
              voluptatibus vel?
            </AboutText>
            <AboutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolor dolorum
              temporibus ipsum veniam tempore nisi minima laborum, maiores iste deleniti labore hic
              voluptatibus vel?
            </AboutText>
          </div>
        </AboutArticle>
        <TechStackWrapper>
          <AboutHeader id="tech-stack-header">
            <AboutHeading>Tech stack</AboutHeading>
          </AboutHeader>
          <TechStackNeuron>
            <TechStackLayers>
              {techStack.map((items, i) => (
                <TechStackContent key={i} id={`tech-stack-row-${i}`}>
                  {items.map(({ logo }, j) => (
                    <TechStackItem key={j}>
                      <TechStackLogo src={logo}></TechStackLogo>
                    </TechStackItem>
                  ))}
                </TechStackContent>
              ))}
            </TechStackLayers>
          </TechStackNeuron>
          <TechStackFooter>
            {/* <Button>Play</Button> */}
            <Button id="tech-stack-button">View full list</Button>
          </TechStackFooter>
        </TechStackWrapper>
      </AboutContent>
    </AboutWrapper>
  )
}
