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

export const About: React.FC = () => {
  const [scrollTicks, setScrolledTicks] = useState(0)
  const { state, dispatch } = useSliderState()
  const [isAnimating, setIsAnimating] = useState(false)

  useWheel('#about-content', handleWheel(2, state, dispatch, scrollTicks, setScrolledTicks))

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
      '#tech-stack-row-3'
    ])

    if (state.currentSlide === 2) {
      setIsAnimating(true)
      const t1 = gsap.timeline({ defaults: { duration: 0.5 } })
      const t2 = gsap.timeline({ defaults: { duration: 0.5 } })

      t1.delay(2)
        .fromTo('#about-header', { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
        .fromTo('#about-article', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })

      t2.delay(2)
        .fromTo('#tech-stack-header', { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
        .fromTo('#tech-stack-row-0', { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
        .fromTo('#tech-stack-row-1', { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
        .fromTo('#tech-stack-row-2', { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
        .fromTo('#tech-stack-row-3', { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
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
            <AboutHeading>O mnie</AboutHeading>
          </AboutHeader>
          <div id="about-article">
            <AboutText>
              Cztery lata temu zacząłem swoją przygodę z programowaniem codziennie rozwijając swoje
              umiejętności. W tym czasie stworzyłem wiele projektów ucząc się na własnych błędach.
              Nadal planuje pogłębiać swoją wiedzę oraz rozwijać się w branży IT.
            </AboutText>
            <AboutText>
              W każdy projekt wkładam wszelkie starania aby jego końcowa wersja była jak najlepsza.
              Cenię sobie czystość, czytelność, a przede wszystkim jakość kodu. Codziennie uczę się
              nowych rzeczy tak aby być na bieżąco z coraz to nowszymi technologiami.
            </AboutText>
          </div>
        </AboutArticle>
        <TechStackWrapper>
          <AboutHeader id="tech-stack-header">
            <AboutHeading>Czego używam</AboutHeading>
          </AboutHeader>
          <TechStackNeuron>
            <TechStackLayers>
              {techStack.map((items, i) => (
                <TechStackContent key={i} id={`tech-stack-row-${i}`}>
                  {items.map(({ logo, name }, j) => (
                    <TechStackItem key={j} title={name}>
                      <TechStackLogo alt={name} src={logo}></TechStackLogo>
                    </TechStackItem>
                  ))}
                </TechStackContent>
              ))}
            </TechStackLayers>
          </TechStackNeuron>
        </TechStackWrapper>
      </AboutContent>
    </AboutWrapper>
  )
}
