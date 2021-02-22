import { techStackItems } from '@common/tech-stack'
import { ProjectType } from '../../types/project.type'
import * as React from 'react'
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

export const Projects = () => (
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
