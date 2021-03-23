import { colorTheme } from '@styles/theme'
import styled, { css } from 'styled-components'

export const SliderLegendWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`

export const LegendItem = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;

  ${() => css`
    &:last-child ${Connector} {
      display: none;
    }
  `}
`

export const LegendItemText = styled.p`
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
`

export const LegendBreakPoint = styled.span`
  display: block;
  margin-top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid ${colorTheme.secondary200};
`

export interface ConnectorProps {
  visited: boolean
}

export const Connector = styled.span<ConnectorProps>`
  position: absolute;
  left: calc(50% + 5px);
  bottom: 4px;
  display: block;
  width: calc(100% + 5px);
  height: 0;
  ${({ visited }) => css`
    border: 1px ${visited ? 'solid' : 'dashed'} ${colorTheme.secondary200};
  `}
`
