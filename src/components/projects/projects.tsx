import { techStackItems } from '@common/tech-stack'
import { ProjectType } from '../../types/project.type'
import * as React from 'react'
import { useState } from 'react'
import { ProjectContent, ProjectsWrapper } from './projects.style'
import { Project } from '@components/project/project'
import { useSliderState } from '@global-state/slider-store'
import { useWheel } from '@hooks/use-wheel'
import { handleWheel } from '@common/handle-wheel'

const projects: ProjectType[] = [
  {
    name: 'My Covid',
    date: new Date(),
    about: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Ab non nobis deleniti eligendi suscipit magni voluptatem laudantium dolorem,
        laborum cum error animi minus repellendus. Exercitationem modi neque vitae quod non,
        voluptatem minima perspiciatis vero sapiente.
      `,
    techStack: [techStackItems.js, techStackItems.react, techStackItems.html, techStackItems.css],
    links: [{ name: 'Code', icon: 'star-empty.svg', url: 'https://mycovid.pl' }],
    image: 'projects/web-graphs-1.png',
    watermark: 'projects/statistics.svg'
  },
  {
    name: 'My Covid2',
    date: new Date(),
    about: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Ab non nobis deleniti eligendi suscipit magni voluptatem laudantium dolorem,
        laborum cum error animi minus repellendus. Exercitationem modi neque vitae quod non,
        voluptatem minima perspiciatis vero sapiente.
      `,
    techStack: [techStackItems.js, techStackItems.react, techStackItems.html, techStackItems.css],
    links: [{ name: 'Code', icon: 'star-empty.svg', url: 'https://mycovid.pl' }],
    image: 'projects/web-graphs-1.png',
    watermark: 'projects/statistics.svg'
  },
  {
    name: 'My Covid3',
    date: new Date(),
    about: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Ab non nobis deleniti eligendi suscipit magni voluptatem laudantium dolorem,
        laborum cum error animi minus repellendus. Exercitationem modi neque vitae quod non,
        voluptatem minima perspiciatis vero sapiente.
      `,
    techStack: [techStackItems.js, techStackItems.react, techStackItems.html, techStackItems.css],
    links: [{ name: 'Code', icon: 'star-empty.svg', url: 'https://mycovid.pl' }],
    image: 'projects/web-graphs-1.png',
    watermark: 'projects/statistics.svg'
  }
]

export const Projects: React.FC = () => {
  const [scrollTicks, setScrolledTicks] = useState(0)
  const { state, dispatch } = useSliderState()

  useWheel('#projects-content', handleWheel(3, state, dispatch, scrollTicks, setScrolledTicks))

  return (
    <ProjectsWrapper>
      <ProjectContent>
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </ProjectContent>
    </ProjectsWrapper>
  )
}
