import * as React from 'react'
import {
  HeaderWrapper,
  ListItem,
  ListLink,
  Nav,
  NavList,
  SocialLink,
  SocialWrapper,
  SocialIcon,
  HeaderContent,
  Address,
  Email
} from './header.style'

interface NavigationOption {
  name: string
  link: string
}

const navigationOptions: NavigationOption[] = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: ''
  },
  {
    name: 'Projects',
    link: ''
  }
]

export const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Nav>
        <NavList>
          {navigationOptions.map(({ name, link }) => (
            <ListItem>
              <ListLink to={link}>{name}</ListLink>
            </ListItem>
          ))}
        </NavList>
      </Nav>
      <SocialWrapper>
        <Address>
          <Email href="mailto:szymon.masko32@gmail.com">szymon.masko32@gmail.com</Email>
        </Address>
        <SocialLink to="">
          <SocialIcon src="linkedin.svg"></SocialIcon>
        </SocialLink>
        <SocialLink to="">
          <SocialIcon src="github.svg"></SocialIcon>
        </SocialLink>
      </SocialWrapper>
    </HeaderContent>
  </HeaderWrapper>
)
