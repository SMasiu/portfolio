import { colorTheme, mediaTheme } from '@styles/theme'
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
  padding: 0 50px;
  max-width: 1800px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${mediaTheme.sm}) {
    padding: 0;
    width: 90%;
  }
`

export interface NavProps {
  open: boolean
}

export const Nav = styled.nav<NavProps>`
  @media (max-width: ${mediaTheme.sm}) {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 100%;
    transition: transform 0.3s;
    will-change: transform;
    ${({ open }) => css`
      transform: translateX(${open ? '-100%' : '0'});
    `}
  }
`

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: ${mediaTheme.sm}) {
    flex-direction: column;
    width: 100%;
  }
`

export const ListItem = styled.li`
  padding: 35px 25px;

  @media (max-width: ${mediaTheme.sm}) {
    width: 100%;
  }
`

export const ListLink = styled.p`
  color: ${colorTheme.secondary200};
  text-decoration: none;
  text-align: center;
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
  padding: 35px 10px 35px 0;
  color: ${colorTheme.secondary200};
  text-decoration: none;
  font-style: normal;
`

export const HamburgerWrapper = styled.section`
  display: none;
  @media (max-width: ${mediaTheme.sm}) {
    display: block;
  }
`
