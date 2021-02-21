import { Hero } from '@components/hero/hero'
import { PageOverlay } from '@components/page-overlay/page-overlay'
import * as React from 'react'
import { PageSliderWrapper, PageSlides } from './page-slider.style'

export const PageSlider = () => (
  <PageSliderWrapper>
    <PageOverlay />
    <PageSlides>
      <Hero />
    </PageSlides>
  </PageSliderWrapper>
)
