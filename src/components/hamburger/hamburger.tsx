import * as React from 'react'
import {
  HamburgerWrapper,
  HamburgerItemWrapper1,
  HamburgerItemWrapper2,
  HamburgerItemWrapper3,
  HamburgerItem,
  HamburgerItem1,
  HamburgerItem3
} from './hamburger.style'

export interface HamburgerProps {
  open: boolean
  onClick: () => void
}

export const Hamburger: React.FC<HamburgerProps> = ({ open, onClick }) => (
  <HamburgerWrapper open={open} onClick={() => onClick()}>
    <HamburgerItemWrapper1>
      <HamburgerItem1 />
    </HamburgerItemWrapper1>
    <HamburgerItemWrapper2>
      <HamburgerItem />
    </HamburgerItemWrapper2>
    <HamburgerItemWrapper3>
      <HamburgerItem3 />
    </HamburgerItemWrapper3>
  </HamburgerWrapper>
)
