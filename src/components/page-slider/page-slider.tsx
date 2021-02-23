import { About } from '@components/about/about'
import { Contact } from '@components/contact/contact'
import { Hero } from '@components/hero/hero'
import { PageOverlay } from '@components/page-overlay/page-overlay'
import { Projects } from '@components/projects/projects'
import { SliderContent } from '@components/slider-content/slider-content'
import * as React from 'react'
import { PageSliderWrapper, PageSlides } from './page-slider.style'

export const PageSlider = () => (
  <PageSliderWrapper>
    <PageOverlay />
    <PageSlides>
      {/* <SliderContent>
        <Hero />
      </SliderContent> */}
      {/* <SliderContent>
        <About />
      </SliderContent> */}
      {/* <SliderContent>
        <Projects />
      </SliderContent> */}
      <SliderContent>
        <Contact />
      </SliderContent>
    </PageSlides>
  </PageSliderWrapper>
)
