import * as React from 'react'
import { useEffect, useState } from 'react'
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
  AboutMoreInfoWrapper
} from './project.style'
import { ProjectType } from '../../types/project.type'
import useIsInViewport from 'use-is-in-viewport'
import gsap from 'gsap'
import { useSliderState } from '@global-state/slider-store'
import { afterSlideOut } from '@common/animation'

export interface ProjectWrapperProps {
  project: ProjectType
}

export const Project: React.FC<ProjectWrapperProps> = ({ project }) => {
  const [isInViewport, targetRef] = useIsInViewport()
  const [rendered, setRendered] = useState(false)
  const { state } = useSliderState()
  const [isAnimating, setIsAnimating] = useState(false)

  const id = project.name.replace(' ', '-')

  useEffect(() => {
    if (state.disableSlide) {
      return
    }

    if (state.currentSlide === 3) {
      if (isInViewport) {
        setIsAnimating(true)
        const t1 = gsap.timeline({ defaults: { duration: 0.5 } })
        const t2 = gsap.timeline({ defaults: { duration: 0.5 } })
        const t3 = gsap.timeline({ defaults: { duration: 1 } })

        t1.delay(0.5)
          .fromTo(createSelector('header'), { opacity: 0, x: -100 }, { opacity: 1, x: 0 })
          .fromTo(createSelector('about'), { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
          .fromTo(createSelector('tech'), { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
          .fromTo(createSelector('links'), { opacity: 0, x: -50 }, { opacity: 1, x: 0 })

        if (!rendered) {
          t2.delay(0.5)
            .fromTo(
              createSelector('date-point'),
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1 }
            )
            .fromTo(createSelector('date-text'), { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
            .fromTo(createSelector('date-line'), { scaleY: 0 }, { scaleY: 1 })
            .then(() => {
              setRendered(true)
            })
        }

        t3.delay(0.5)
          .fromTo(createSelector('image'), { x: 100, opacity: 0 }, { x: 0, opacity: 1 })
          .then(() => {
            setIsAnimating(false)
          })
      }
    } else if (!isAnimating && state.lastSlide === 3) {
      if (isInViewport) {
        const header = createSelector('header')
        const about = createSelector('about')
        const tech = createSelector('tech')
        const links = createSelector('links')

        const dateLine = createSelector('date-line')
        const dateText = createSelector('date-text')
        const datePoint = createSelector('date-point')

        const image = createSelector('image')

        const t1 = gsap.timeline({ defaults: { duration: 0.25 } })
        const t2 = gsap.timeline({ defaults: { duration: 0.25 } })
        const t3 = gsap.timeline({ defaults: { duration: 0.5 } })

        t1.to(links, { opacity: 0, x: -50 })
          .to(tech, { opacity: 0, x: -50 })
          .to(about, { opacity: 0, x: -50 })
          .to(header, { opacity: 0, x: -100 })
          .then(afterSlideOut([header, about, tech, links]))

        t2.to(dateLine, { scaleY: 0 })
          .to(dateText, { x: -50, opacity: 0 })
          .to(datePoint, { scale: 0, opacity: 0 })
          .then(afterSlideOut([dateLine, dateText, datePoint]))

        t3.to(image, { x: 100, opacity: 0 }).then(afterSlideOut([image]))
      }
    }
  }, [isInViewport, state.currentSlide])

  const createId = (suffix: string) => `project-${id}-${suffix}`

  const createSelector = (suffix: string) => `#${createId(suffix)}`

  return (
    <ProjectWrapper>
      <ProjectContainer ref={targetRef}>
        <TimelineDate>
          <DateText id={createId('date-text')}>{project.date.toLocaleDateString()}</DateText>
          <TimelinePoint id={createId('date-point')} />
        </TimelineDate>
        <ProjectTimeLine id={createId('date-line')} />
        <ProjectHeader id={createId('header')}>
          <ProjectName>{project.name}</ProjectName>
        </ProjectHeader>
        <ProjectContent>
          <ProjectDescription>
            <AboutProject id={createId('about')}>
              <ProjectContentHeading>O projekcie</ProjectContentHeading>
              <AboutText>{project.about}</AboutText>
            </AboutProject>
            <AboutMoreInfoWrapper>
              <UsedTechStack id={createId('tech')}>
                <ProjectContentHeading>Użyte technologie</ProjectContentHeading>
                {project.techStack.map(({ name, logo }, i) => (
                  <TechStackItem key={i}>
                    <TechStackImg src={logo} alt={name} />
                    <TechStackName>{name}</TechStackName>
                  </TechStackItem>
                ))}
              </UsedTechStack>
              <LinksWrapper id={createId('links')}>
                {(project.links.length ? true : false) && (
                  <ProjectContentHeading>Linki</ProjectContentHeading>
                )}
                {project.links.map(({ name, icon, url }, i) => (
                  <LinkItem key={i} target="_blank" href={url} rel="noreferrer">
                    <LinkDescription>
                      <LinkIcon src={icon} alt={'link'}></LinkIcon>
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
            <ProjectImageWrapper id={createId('image')}>
              <ProjectImage src={project.image} alt="Project preview" />
            </ProjectImageWrapper>
          </ProjectPreview>
        </ProjectContent>
      </ProjectContainer>
    </ProjectWrapper>
  )
}
