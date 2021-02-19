import * as React from 'react'
import { HeaderWrapper, ListItem, ListLink, Nav, NavList } from './header.style'

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
    <Nav>
      <NavList>
        {navigationOptions.map(({ name, link }) => (
          <ListItem>
            <ListLink to={link}>{name}</ListLink>
          </ListItem>
        ))}
      </NavList>
    </Nav>
  </HeaderWrapper>
)
