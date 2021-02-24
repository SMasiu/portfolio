import { techStackItems } from '@common/tech-stack'
import { ProjectType } from '../../types/project.type'
import * as React from 'react'
import { useState } from 'react'
import {
  Code,
  CodeDivider,
  CodeInputs,
  CodeLabel,
  ProjectContent,
  ProjectsFooter,
  ProjectsWrapper
} from './projects.style'
import { Project } from '@components/project/project'
import { Input } from '@components/input/input'
import { useSliderState } from '@global-state/slider-store'
import { useWheel } from '@hooks/use-wheel'
import { SliderActions } from '../../types/global-state.type'
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
    links: [{ name: 'Code', icon: '/star-empty.svg', url: 'https://mycovid.pl' }],
    image: '/projects/web-graphs-1.png',
    watermark: '/projects/statistics.svg'
  },
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
    links: [{ name: 'Code', icon: '/star-empty.svg', url: 'https://mycovid.pl' }],
    image: '/projects/web-graphs-1.png',
    watermark: '/projects/statistics.svg'
  },
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
    links: [{ name: 'Code', icon: '/star-empty.svg', url: 'https://mycovid.pl' }],
    image: '/projects/web-graphs-1.png',
    watermark: '/projects/statistics.svg'
  }
]

export interface ProjectsProps {
  sliderWrapper: HTMLElement
}

export const Projects: React.FC<ProjectsProps> = ({ sliderWrapper }) => {
  const [scrollTicks, setScrolledTicks] = useState(0)
  const { state, dispatch } = useSliderState()

  useWheel(handleWheel(3, state, dispatch, scrollTicks, setScrolledTicks, sliderWrapper))

  return (
    <ProjectsWrapper>
      <ProjectContent>
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </ProjectContent>
      <ProjectsFooter>
        <Code>
          <CodeLabel>Code</CodeLabel>
          <CodeInputs>
            <Input />
            <CodeDivider />
            <Input />
            <CodeDivider />
            <Input />
          </CodeInputs>
        </Code>
      </ProjectsFooter>
    </ProjectsWrapper>
  )
}
