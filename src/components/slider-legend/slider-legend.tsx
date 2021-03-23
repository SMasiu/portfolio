import { sliderLegend } from '@common/legend'
import * as React from 'react'
import {
  Connector,
  LegendBreakPoint,
  LegendItem,
  LegendItemText,
  SliderLegendWrapper
} from './slider-legend.style'

export interface SliderLegendProps {
  pageIndex: number
  onPageChange: (slide: number) => void
}

export const SliderLegend: React.FC<SliderLegendProps> = ({ pageIndex, onPageChange }) => (
  <SliderLegendWrapper>
    {sliderLegend.map(({ name }, i) => (
      <LegendItem key={i} onClick={() => onPageChange(i + 1)}>
        <LegendItemText>{name}</LegendItemText>
        <LegendBreakPoint />
        <Connector visited={pageIndex > i + 1} />
      </LegendItem>
    ))}
  </SliderLegendWrapper>
)
