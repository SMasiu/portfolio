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
    date: new Date(2020, 11, 4),
    about: `
      Aplikacja MyCovid zrosła nagrodzona 1 miejscem podczas hakatonu BIT Festival.
      Aplikacja służy do wyszukiwania i wyświetlania rzetelnych informacji na temat SARS-CoV-2.
      Zbiera ona informacje z różnych źródeł takich jak twitter,
      youtube czy też strony rządowe i strony Światowej Organizacji Zdrowia.
      Pozwala ona użytkownikowi na łatwy i prosty dostęp do informacji skupiając je wszystkie w jednym miejscu.
      Dzięki niej można również śledzić na bieżąco statystyki liczby zachorowań z całego kraju.
    `,
    techStack: [techStackItems.js, techStackItems.react, techStackItems.html, techStackItems.css],
    links: [],
    image: 'projects/my-covid-1.png'
  },

  {
    name: 'Language App',
    date: new Date(2020, 9, 15),
    about: `
      Aplikacja Language App pomaga w uczeniu się tłumaczeń słów.
      Pozwala ona użytkownikom dodawać własne słowa,
      ich tłumaczenia a następnie tworzyć z nich testy które mają na celu pomóc nam zapamiętać dane słowa.
      Program posiada dodatkowo zestaw narzędzi do automatycznego tłumaczenia oraz dodawania słów.
    `,
    techStack: [
      techStackItems.nest,
      techStackItems.angular,
      techStackItems.postgresql,
      techStackItems.ts
    ],
    links: [{ name: 'Kod', icon: 'github.svg', url: 'https://github.com/SMasiu/language_app_v2' }],
    image: 'projects/language-app-1.png'
  },
  {
    name: 'Project Manager',
    date: new Date(2020, 5, 15),
    about: `
      Aplikacja Project Manager służy do zarządzania projektami, zadaniami oraz teamami.
      Pozwala tworzyć teamy dodawać do nich innych użytkowników oraz zadania do zrobienia.
      Aplikacja pozwala zarządzać rolami użytkowników oraz ich zadaniami.
      Dzięki aplikacji każdy członek teamu ma wgląd do zadań dzięki czemu dokładnie wie co ma robić.
    `,
    techStack: [
      techStackItems.nest,
      techStackItems.angular,
      techStackItems.postgresql,
      techStackItems.ts
    ],
    links: [
      {
        name: 'Kod',
        icon: 'github.svg',
        url: 'https://github.com/SMasiu/project-manager-backend'
      },
      {
        name: 'Kod',
        icon: 'github.svg',
        url: 'https://github.com/SMasiu/project-manager-frontend'
      }
    ],
    image: 'projects/project-manager-1.png'
  },
  {
    name: 'GraphJS',
    date: new Date(2020, 1, 20),
    about: `
      GraphJS jest biblioteką Javascriptu pozwalającą użytkownikowi na wyświetlanie danych na wykresach różnego typu.
      Posiada ona możliwość dostosowania wielu parametrów tak aby wygląd wykresu pasował do całej reszty aplikacji.
      Wspiera ona TypeScript jak i również inne popularne frameworki/biblioteki takie jak React.js czy też Angular.    
    `,
    techStack: [techStackItems.js, techStackItems.ts],
    links: [
      { name: 'Kod', icon: 'github.svg', url: 'https://github.com/SMasiu/GraphJS' },
      { name: 'Npm', icon: 'npm.svg', url: 'https://www.npmjs.com/package/web-graphs' }
    ],
    image: 'projects/web-graphs-1.png'
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
