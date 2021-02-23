import { useSliderState } from '@global-state/slider-store'
import { SliderActions } from '../../types/global-state.type'
import * as React from 'react'
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
  GithubIcon
} from './header.style'

interface NavigationOption {
  name: string
  slide: number
}

const navigationOptions: NavigationOption[] = [
  { name: 'Home', slide: 1 },
  { name: 'About', slide: 2 },
  { name: 'Projects', slide: 3 },
  { name: 'Contact', slide: 4 }
]

export const Header = () => {
  const { state, dispatch } = useSliderState()

  const handleNavigationClick = (slide: number) => {
    if (slide !== state.currentSlide) {
      dispatch({ type: SliderActions.SET_SLIDE, payload: { currentSlide: slide } })
    }
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Nav>
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
            <Email href="mailto:szymon.masko32@gmail.com">szymon.masko32@gmail.com</Email>
          </Address>
          <SocialLink to="">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink to="">
            <GithubIcon />
          </SocialLink>
        </SocialWrapper>
      </HeaderContent>
    </HeaderWrapper>
  )
}
