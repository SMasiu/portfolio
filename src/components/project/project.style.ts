import { colorTheme } from '@styles/theme'
import styled, { css } from 'styled-components'

export const ProjectWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 61px);

  ${() => css`
    &:last-child {
      ${ProjectTimeLine} {
        display: none;
      }
    }
  `}
`

export const ProjectContainer = styled.section`
  position: relative;
  max-width: 1800px;
`

export const ProjectHeader = styled.header`
  margin-bottom: 25px;
`

export const ProjectName = styled.h3`
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 2px;
`

export const ProjectContent = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 50px;
`

export const ProjectDescription = styled.section``

export const AboutProject = styled.article`
  max-width: 600px;
`

export const UsedTechStack = styled.section``

export const ProjectContentHeading = styled.h4`
  margin: 15px 0 10px;
`

export const AboutText = styled.p``

export const TechStackItem = styled.section`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const TechStackImg = styled.img`
  width: 25px;
  margin-right: 10px;
`

export const TechStackName = styled.p``

export const LinksWrapper = styled.section``

export const LinkItem = styled.a``

export const LinkDescription = styled.section`
  display: flex;
  align-items: center;
`

export const LinkIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`

export const LinkName = styled.p``

export const LinkDivider = styled.span`
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${colorTheme.secondary200};
  margin: 0 15px;
`

export const LinkUrl = styled.p``

export const ProjectPreview = styled.section``

export const ProjectImageWrapper = styled.figure``

export const ProjectImage = styled.img`
  width: 100%;
`

export const ProjectTimeLine = styled.span`
  width: 1px;
  height: calc(100vh - 69px);
  background-color: ${colorTheme.secondary200};
  position: absolute;
  left: -100px;
  top: 12px;
`
export const TimelineDate = styled.section`
  position: absolute;
  width: 100px;
  left: -195px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DateText = styled.p``

export const TimelinePoint = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border: 2px solid ${colorTheme.secondary200};
  border-radius: 50%;
`

export const Watermark = styled.img`
  position: absolute;
  opacity: 0.1;
  mix-blend-mode: soft-light;
  width: 600px;
  left: 20%;
`
