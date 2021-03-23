import { useSliderState } from '@global-state/slider-store'
import * as React from 'react'
import {
  PageCounterContent,
  PageCurrent,
  PageCurrentIndex,
  PageName,
  PageOf
} from './page-counter.style'
import { sliderLegend } from '@common/legend'

export const PageCounter = () => {
  const { state } = useSliderState()

  return (
    <PageCounterContent>
      <PageCurrent>
        <PageName>{sliderLegend[state.currentSlide - 1].name} - </PageName>
        <PageCurrentIndex>0{state.currentSlide}</PageCurrentIndex>
      </PageCurrent>
      <PageOf>/04</PageOf>
    </PageCounterContent>
  )
}
