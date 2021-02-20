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
          <LinkedInIcon />
        </SocialLink>
        <SocialLink to="">
          <GithubIcon />
        </SocialLink>
      </SocialWrapper>
    </HeaderContent>
  </HeaderWrapper>
)
