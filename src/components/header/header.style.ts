import { colorTheme } from '@styles/theme'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import LinkedIn from '@icons/linked-in.svg'
import Github from '@icons/github.svg'

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  font-weight: 300;
  letter-spacing: 2px;
`

export const HeaderContent = styled.section`
  display: flex;
  margin: auto;
  max-width: 1800px;
  justify-content: space-between;
`

export const Nav = styled.nav``

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`

export const ListItem = styled.li`
  padding: 35px 25px;
`

export const ListLink = styled.p`
  color: ${colorTheme.secondary200};
  text-decoration: none;
`

export const SocialWrapper = styled.nav`
  display: flex;
  align-items: center;
`

export const SocialLink = styled(Link)`
  display: block;
  padding: 25px 10px;
`

export const SocialIcon = css`
  width: 20px;
`

export const LinkedInIcon = styled(LinkedIn)`
  ${SocialIcon}
`

export const GithubIcon = styled(Github)`
  ${SocialIcon}
`

export const Address = styled.address``

export const Email = styled.a`
  display: block;
  padding: 35px 25px;
  color: ${colorTheme.secondary200};
  text-decoration: none;
  font-style: normal;
`
