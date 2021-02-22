import { About } from '@components/about/about'
import { Hero } from '@components/hero/hero'
import { PageOverlay } from '@components/page-overlay/page-overlay'
import { SliderContent } from '@components/slider-content/slider-content'
import * as React from 'react'
import { PageSliderWrapper, PageSlides } from './page-slider.style'

export const PageSlider = () => (
  <PageSliderWrapper>
    <PageOverlay />
    <PageSlides>
      {/* <Hero /> */}
      <SliderContent>
        <About />
      </SliderContent>
    </PageSlides>
  </PageSliderWrapper>
)
