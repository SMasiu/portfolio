import { About } from '@components/about/about'
import { Contact } from '@components/contact/contact'
import { Hero } from '@components/hero/hero'
import { PageOverlay } from '@components/page-overlay/page-overlay'
import { Projects } from '@components/projects/projects'
import { SliderContent } from '@components/slider-content/slider-content'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
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

  const heroContentRef = useRef()
  const aboutContentRef = useRef()
  const projectsContentRef = useRef()
  const contactContentRef = useRef()

  useEffect(() => {
    if (currentSlide !== lastState) {
      slideTo(currentSlide)
      setLastState(currentSlide)
    }
  })

  const slideTo = (slide: number) => {
    if (!state.preventSlide) {
      dispatch({ type: SliderActions.PREVENT_SLIDE })
      const slides = [
        heroContentRef.current,
        aboutContentRef.current,
        projectsContentRef.current,
        contactContentRef.current
      ]

      slides.forEach((id) => {
        gsap.to(id, {
          x: `${-100 * (slide - 1)}%`,
          duration: 1,
          ease: 'power2.inOut'
        })
      })

      setTimeout(() => {
        dispatch({ type: SliderActions.ENABLE_SLIDE })
      }, 1000)
    }
  }

  const handleChangeSlide = (slide: number) => {
    if (slide >= 0 && slide <= slidesCount) {
      slideTo(slide)

      dispatch({ type: SliderActions.SET_SLIDE, payload: { currentSlide: slide } })
    }
  }

  return (
    <PageSliderWrapper>
      <PageOverlay slide={currentSlide} onPageChange={handleChangeSlide} />
      <PageSlides>
        <HeroContent ref={heroContentRef}>
          <SliderContent>
            <Hero sliderWrapper={heroContentRef.current} />
          </SliderContent>
        </HeroContent>
        <AboutContent ref={aboutContentRef}>
          <SliderContent>
            <About sliderWrapper={aboutContentRef.current} />
          </SliderContent>
        </AboutContent>
        <ProjectsContent ref={projectsContentRef}>
          <SliderContent>
            <Projects sliderWrapper={projectsContentRef.current} />
          </SliderContent>
        </ProjectsContent>
        <ContactWrapper ref={contactContentRef}>
          <SliderContent>
            <Contact sliderWrapper={contactContentRef.current} />
          </SliderContent>
        </ContactWrapper>
      </PageSlides>
    </PageSliderWrapper>
  )
}
