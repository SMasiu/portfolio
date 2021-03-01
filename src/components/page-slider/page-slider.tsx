import { About } from '@components/about/about'
import { Contact } from '@components/contact/contact'
import { Hero } from '@components/hero/hero'
import { PageOverlay } from '@components/page-overlay/page-overlay'
import { Projects } from '@components/projects/projects'
import { SliderContent } from '@components/slider-content/slider-content'
import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  AboutContent,
  ContactWrapper,
  HeroContent,
  PageSliderWrapper,
  PageSlides,
  ProjectsContent
} from './page-slider.style'
import gsap from 'gsap'
import { slidesCount } from '@common/slider'
import { useSliderState } from '@global-state/slider-store'
import { SliderActions } from '../../types/global-state.type'

export const PageSlider = () => {
  const { state, dispatch } = useSliderState()
  const [lastState, setLastState] = useState(1)
  const currentSlide = state.currentSlide

  const heroContentElem: HTMLElement = document.querySelector('#hero-content')
  const aboutContentElem: HTMLElement = document.querySelector('#about-content')
  const projectsContentElem: HTMLElement = document.querySelector('#projects-content')
  const contactContentElem: HTMLElement = document.querySelector('#contact-content')

  useEffect(() => {
    if (currentSlide !== lastState) {
      slideTo(currentSlide)
      setLastState(currentSlide)
    }
  })

  const slideTo = (slide: number) => {
    if (!state.preventSlide) {
      dispatch({ type: SliderActions.PREVENT_SLIDE })
      const slides = ['#hero-content', '#about-content', '#projects-content', '#contact-content']

      slides.forEach((id) => {
        gsap.to(id, {
          x: `${-100 * (slide - 1)}%`,
          duration: 1,
          ease: 'power2.inOut',
          delay: 1
        })
      })

      setTimeout(() => {
        dispatch({ type: SliderActions.ENABLE_SLIDE })
      }, 1000)
    }
  }

  const handleChangeSlide = (slide: number) => {
    if (slide >= 0 && slide <= slidesCount) {
      dispatch({ type: SliderActions.SET_SLIDE, payload: { currentSlide: slide } })
      slideTo(slide)
    }
  }

  return (
    <PageSliderWrapper>
      <PageOverlay slide={currentSlide} onPageChange={handleChangeSlide} />
      <PageSlides>
        <HeroContent id="hero-content">
          <SliderContent>
            <Hero sliderWrapper={heroContentElem} />
          </SliderContent>
        </HeroContent>
        <AboutContent id="about-content">
          <SliderContent>
            <About sliderWrapper={aboutContentElem} />
          </SliderContent>
        </AboutContent>
        <ProjectsContent id="projects-content">
          <SliderContent>
            <Projects sliderWrapper={projectsContentElem} />
          </SliderContent>
        </ProjectsContent>
        <ContactWrapper id="contact-content">
          <SliderContent>
            <Contact sliderWrapper={contactContentElem} />
          </SliderContent>
        </ContactWrapper>
      </PageSlides>
    </PageSliderWrapper>
  )
}
