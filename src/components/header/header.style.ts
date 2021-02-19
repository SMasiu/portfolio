import { colorTheme } from '@styles/theme'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

export const Nav = styled.nav`
  max-width: 1800px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
`

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`

export const ListItem = styled.li`
  padding: 35px 25px;
`

export const ListLink = styled(Link)`
  color: ${colorTheme.secondary200};
  text-decoration: none;
`
