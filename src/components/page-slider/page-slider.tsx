import { About } from '@components/about/about'
import { Contact } from '@components/contact/contact'
import { Hero } from '@components/hero/hero'
import { PageOverlay } from '@components/page-overlay/page-overlay'
import { Projects } from '@components/projects/projects'
import { SliderContent } from '@components/slider-content/slider-content'
import * as React from 'react'
import { useEffect } from 'react'
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
  const currentSlide = state.currentSlide

  useEffect(() => {
    slideTo(currentSlide)
  })

  const slideTo = (slide: number) => {
    const ids = ['#hero-content', '#about-content', '#projects-content', '#contact-content']

    ids.forEach((id) => {
      gsap.to(id, {
        x: `${-100 * (slide - 1)}%`,
        duration: 1,
        ease: 'power2.inOut'
      })
    })
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
        <HeroContent id="hero-content">
          <SliderContent>
            <Hero />
          </SliderContent>
        </HeroContent>
        <AboutContent id="about-content">
          <SliderContent>
            <About />
          </SliderContent>
        </AboutContent>
        <ProjectsContent id="projects-content">
          <SliderContent>
            <Projects />
          </SliderContent>
        </ProjectsContent>
        <ContactWrapper id="contact-content">
          <SliderContent>
            <Contact />
          </SliderContent>
        </ContactWrapper>
      </PageSlides>
    </PageSliderWrapper>
  )
}
