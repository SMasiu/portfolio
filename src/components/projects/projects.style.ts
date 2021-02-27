import { colorTheme, mediaTheme } from '@styles/theme'
import styled from 'styled-components'

export const ProjectsWrapper = styled.section`
  padding-top: 50px;
  position: relative;
  width: 100%;
  height: auto;

  @media (min-width: ${mediaTheme.sm}) {
    height: 100%;
    padding-top: 100px;
  }

  @media (min-width: 1400px) {
    padding-top: 0;
  }
`

export const ProjectContent = styled.section``

export const ProjectsFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

export const Code = styled.section``

export const CodeLabel = styled.p`
  margin-bottom: 10px;
  text-align: center;
  letter-spacing: 2px;
`

export const CodeInputs = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CodeDivider = styled.span`
  width: 10px;
  height: 2px;
  border-radius: 2px;
  margin: 0 10px;
  background-color: ${colorTheme.secondary200};
`
