import * as React from 'react'
import {
  Connector,
  LegendBreakPoint,
  LegendItem,
  LegendItemText,
  SliderLegendWrapper
} from './slider-legend.style'

const legend = [{ name: 'Home' }, { name: 'About' }, { name: 'Projects' }, { name: 'Contact' }]

export const SliderLegend = () => (
  <SliderLegendWrapper>
    {legend.map(({ name }, i) => (
      <LegendItem key={i}>
        <LegendItemText>{name}</LegendItemText>
        <LegendBreakPoint />
        <Connector visited={i === 0} />
      </LegendItem>
    ))}
  </SliderLegendWrapper>
)
