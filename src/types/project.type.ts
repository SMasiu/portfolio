import { TechStackType } from './tech-stack.type'

export interface ProjectLink {
  icon: string
  name: string
  url: string
}

export interface ProjectType {
  name: string
  date: Date
  about: string
  techStack: TechStackType[]
  links: ProjectLink[]
  image: string
}
