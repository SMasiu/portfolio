import * as React from 'react'
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
  Watermark
} from './project.style'
import { ProjectType } from '../../types/project.type'

export interface ProjectWrapperProps {
  project: ProjectType
}

export const Project: React.FC<ProjectWrapperProps> = ({ project }) => (
  <ProjectWrapper>
    <Watermark src={project.watermark} />
    <ProjectContainer>
      <TimelineDate>
        <DateText>{project.date.toLocaleDateString()}</DateText>
        <TimelinePoint />
      </TimelineDate>
      <ProjectTimeLine />
      <ProjectHeader>
        <ProjectName>{project.name}</ProjectName>
      </ProjectHeader>
      <ProjectContent>
        <ProjectDescription>
          <AboutProject>
            <ProjectContentHeading>About project</ProjectContentHeading>
            <AboutText>{project.about}</AboutText>
          </AboutProject>
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
