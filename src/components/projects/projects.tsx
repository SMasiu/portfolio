import { techStackItems } from '@common/tech-stack'
import { ProjectType } from '../../types/project.type'
import * as React from 'react'
import { ProjectsWrapper } from './projects.style'
import { Project } from '@components/project/project'

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
    {projects.map((project, i) => (
      <Project project={project} key={i} />
    ))}
  </ProjectsWrapper>
)
