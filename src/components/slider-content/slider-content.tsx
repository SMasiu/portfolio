import { SliderLegend } from '@components/slider-legend/slider-legend'
import * as React from 'react'
import {
  SliderContentWrapper,
  SliderFooter,
  SliderLegendWrapper,
  SliderMainWrapper
} from './slider-content.style'

export interface SliderContentProps {
  pageIndex: number
  onPageChange: (slide: number) => void
}

export const SliderContent: React.FC<SliderContentProps> = ({
  pageIndex,
  onPageChange,
  children
}) => (
  <SliderContentWrapper>
    <SliderMainWrapper>{children}</SliderMainWrapper>
    <SliderFooter>
      <SliderLegendWrapper>
        <SliderLegend pageIndex={pageIndex} onPageChange={onPageChange} />
      </SliderLegendWrapper>
    </SliderFooter>
  </SliderContentWrapper>
)
