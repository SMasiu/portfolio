import { colorTheme } from '@styles/theme'
import styled, { css } from 'styled-components'

export type HamburgerWrapperProps = {
  open: boolean
}

export const HamburgerItemWrapper = styled.span`
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  display: block;
`

export const HamburgerItemWrapper1 = styled(HamburgerItemWrapper)`
  top: 0;
  transition: transform 0.3s;
  will-change: transform;
`

export const HamburgerItemWrapper2 = styled(HamburgerItemWrapper)`
  top: calc(50% - 1px);
  transition: opacity 0.3s;
  will-change: opacity;
`

export const HamburgerItemWrapper3 = styled(HamburgerItemWrapper)`
  bottom: 0;
  transition: transform 0.3s;
  will-change: transform;
`

export const HamburgerItem = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 1px;
  transition-duration: 0.3s;
  transition-property: transform, background-color;
  will-change: transform, background-color;
`

export const HamburgerItem1 = styled(HamburgerItem)``
export const HamburgerItem3 = styled(HamburgerItem)``

export const HamburgerWrapper = styled.section<HamburgerWrapperProps>`
  width: 24px;
  height: 16px;
  position: relative;
  cursor: pointer;

  ${HamburgerItem} {
    background-color: ${colorTheme.secondary200};
  }

  ${({ open }: HamburgerWrapperProps) =>
    open &&
    css`
      ${HamburgerItemWrapper2} {
        opacity: 0;
      }

      ${HamburgerItemWrapper1} {
        transform: translateY(7px);
      }

      ${HamburgerItem1} {
        transform: rotate(-45deg);
      }

      ${HamburgerItemWrapper3} {
        transform: translateY(-7px);
      }

      ${HamburgerItem3} {
        transform: rotate(45deg);
      }
    `};
`
