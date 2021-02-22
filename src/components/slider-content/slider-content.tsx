import { SliderLegend } from '@components/slider-legend/slider-legend'
import * as React from 'react'
import {
  SliderContentWrapper,
  SliderFooter,
  SliderLegendWrapper,
  SliderMainWrapper
} from './slider-content.style'

export const SliderContent: React.FC = ({ children }) => (
  <SliderContentWrapper>
    <SliderMainWrapper>{children}</SliderMainWrapper>
    <SliderFooter>
      <SliderLegendWrapper>
        <SliderLegend />
      </SliderLegendWrapper>
    </SliderFooter>
  </SliderContentWrapper>
)
