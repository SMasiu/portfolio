import { useSliderState } from '@global-state/slider-store'
import { SliderActions } from '../../types/global-state.type'
import * as React from 'react'
import { useState } from 'react'
import {
  HeaderWrapper,
  ListItem,
  ListLink,
  Nav,
  NavList,
  SocialLink,
  SocialWrapper,
  HeaderContent,
  Address,
  Email,
  LinkedInIcon,
  GithubIcon,
  HamburgerWrapper
} from './header.style'
import { Hamburger } from '@components/hamburger/hamburger'

interface NavigationOption {
  name: string
  slide: number
  elementId: string
}

const navigationOptions: NavigationOption[] = [
  { name: 'Start', slide: 1, elementId: '#hero-content' },
  { name: 'O mnie', slide: 2, elementId: '#about-content' },
  { name: 'Projekty', slide: 3, elementId: '#projects-content' },
  { name: 'Kontakt', slide: 4, elementId: '#contact-content' }
]

export const Header = () => {
  const { state, dispatch } = useSliderState()
  const [openNav, setOpenNav] = useState(false)

  const handleNavigationClick = (slide: number) => {
    if (!state.disableSlide) {
      if (slide !== state.currentSlide) {
        dispatch({ type: SliderActions.SET_SLIDE, payload: { currentSlide: slide } })
      }
    } else {
      setOpenNav(false)
      document.querySelector(navigationOptions[slide - 1].elementId).scrollIntoView()
    }
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Nav open={openNav}>
          <NavList>
            {navigationOptions.map(({ name, slide }, i) => (
              <ListItem key={i} onClick={() => handleNavigationClick(slide)}>
                <ListLink>{name}</ListLink>
              </ListItem>
            ))}
          </NavList>
        </Nav>
        <SocialWrapper>
          <Address>
            <Email>szymon.masko32@gmail.com</Email>
          </Address>
          <SocialLink
            aria-label="Check out my LinkedIn profile"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/szymon-ma%C5%9Bko-763b22196"
          >
            <LinkedInIcon />
          </SocialLink>
          <SocialLink
            aria-label="Check out my Github profile"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SMasiu"
          >
            <GithubIcon />
          </SocialLink>
        </SocialWrapper>
        <HamburgerWrapper>
          <Hamburger open={openNav} onClick={() => setOpenNav(!openNav)} />
        </HamburgerWrapper>
      </HeaderContent>
    </HeaderWrapper>
  )
}
