import * as React from 'react'
import { useEffect } from 'react'
import {
  AboutProject,
  AboutText,
  ProjectContent,
  ProjectContentHeading,
  ProjectHeader,
  ProjectName,
  ProjectWrapper,
  UsedTechStack,
  TechStackItem,
  TechStackImg,
  TechStackName,
  ProjectContainer,
  LinksWrapper,
  LinkItem,
  LinkIcon,
  LinkName,
  LinkDescription,
  LinkUrl,
  LinkDivider,
  ProjectTimeLine,
  TimelineDate,
  DateText,
  TimelinePoint,
  ProjectDescription,
  ProjectPreview,
  ProjectImageWrapper,
  ProjectImage,
  Watermark,
  AboutMoreInfoWrapper
} from './project.style'
import { ProjectType } from '../../types/project.type'
import useIsInViewport from 'use-is-in-viewport'
import gsap from 'gsap'

export interface ProjectWrapperProps {
  project: ProjectType
}

export const Project: React.FC<ProjectWrapperProps> = ({ project }) => {
  const [isInViewport, targetRef] = useIsInViewport()

  const id = project.name.replace(' ', '-')

  useEffect(() => {
    if (isInViewport) {
      const t1 = gsap.timeline()
      t1.delay(0.5).fromTo(`#${id}`, { opacity: 0, x: -100 }, { opacity: 1, x: 0 })
    }
  }, [isInViewport])

  return (
    <ProjectWrapper>
      {/* <Watermark src={project.watermark} /> */}
      <ProjectContainer ref={targetRef}>
        <TimelineDate>
          <DateText>{project.date.toLocaleDateString()}</DateText>
          <TimelinePoint />
        </TimelineDate>
        <ProjectTimeLine />
        <ProjectHeader id={id}>
          <ProjectName>{project.name}</ProjectName>
        </ProjectHeader>
        <ProjectContent>
          <ProjectDescription>
            <AboutProject>
              <ProjectContentHeading>About project</ProjectContentHeading>
              <AboutText>{project.about}</AboutText>
            </AboutProject>
            <AboutMoreInfoWrapper>
              <UsedTechStack>
                <ProjectContentHeading>Used technologies</ProjectContentHeading>
                {project.techStack.map(({ name, logo }, i) => (
                  <TechStackItem key={i}>
                    <TechStackImg src={logo} />
                    <TechStackName>{name}</TechStackName>
                  </TechStackItem>
                ))}
              </UsedTechStack>
              <LinksWrapper>
                <ProjectContentHeading>Links</ProjectContentHeading>
                {project.links.map(({ name, icon, url }, i) => (
                  <LinkItem key={i}>
                    <LinkDescription>
                      <LinkIcon src={icon}></LinkIcon>
                      <LinkName>{name}</LinkName>
                      <LinkDivider />
                      <LinkUrl>{url}</LinkUrl>
                    </LinkDescription>
                  </LinkItem>
                ))}
              </LinksWrapper>
            </AboutMoreInfoWrapper>
          </ProjectDescription>
          <ProjectPreview>
            <ProjectImageWrapper>
              <ProjectImage src={project.image} />
            </ProjectImageWrapper>
          </ProjectPreview>
        </ProjectContent>
      </ProjectContainer>
    </ProjectWrapper>
  )
}
