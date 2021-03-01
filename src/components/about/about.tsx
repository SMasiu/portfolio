import { Button } from '@components/button/button'
import * as React from 'react'
import { useState } from 'react'
import {
  AboutArticle,
  AboutContent,
  AboutHeader,
  AboutHeading,
  AboutWrapper,
  AboutText,
  TechStackWrapper,
  TechStackContent,
  TechStackItem,
  TechStackLogo,
  TechStackFooter,
  AboutIllustrationWrapper,
  TechStackNeuron,
  TechStackLayers
} from './about.style'
import AboutIllustration from '@icons/about.svg'
import { techStackItems } from '@common/tech-stack'
import { useSliderState } from '@global-state/slider-store'
import { useWheel } from '@hooks/use-wheel'
import { handleWheel } from '@common/handle-wheel'

const techStack = [
  [
    {
      ...techStackItems.js
    },
    {
      ...techStackItems.ts
    },
    {
      ...techStackItems.node
    },
    {
      ...techStackItems.nest
    }
  ],
  [
    {
      ...techStackItems.html
    },
    {
      ...techStackItems.css
    },
    {
      ...techStackItems.angular
    },
    {
      ...techStackItems.react
    }
  ],
  [
    {
      ...techStackItems.graphql
    },
    {
      ...techStackItems.gatsby
    },
    {
      ...techStackItems.postgresql
    },
    {
      ...techStackItems.mongodb
    }
  ],
  [
    {
      ...techStackItems.python
    },
    {
      ...techStackItems.docker
    },
    {
      ...techStackItems.github
    },
    {
      ...techStackItems.npm
    }
  ]
]

export interface AboutProps {
  sliderWrapper: HTMLElement
}

export const About: React.FC<AboutProps> = ({ sliderWrapper }) => {
  const [scrollTicks, setScrolledTicks] = useState(0)
  const { state, dispatch } = useSliderState()

  useWheel(handleWheel(2, state, dispatch, scrollTicks, setScrolledTicks, sliderWrapper))

  return (
    <AboutWrapper>
      <AboutIllustrationWrapper>
        <AboutIllustration />
      </AboutIllustrationWrapper>
      <AboutContent>
        <AboutArticle>
          <AboutHeader>
            <AboutHeading>About me</AboutHeading>
          </AboutHeader>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolor dolorum temporibus
            ipsum veniam tempore nisi minima laborum, maiores iste deleniti labore hic voluptatibus
            vel?
          </AboutText>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolor dolorum temporibus
            ipsum veniam tempore nisi minima laborum, maiores iste deleniti labore hic voluptatibus
            vel?
          </AboutText>
        </AboutArticle>
        <TechStackWrapper>
          <AboutHeader>
            <AboutHeading>Tech stack</AboutHeading>
          </AboutHeader>
          <TechStackNeuron>
            <TechStackLayers>
              {techStack.map((items, i) => (
                <TechStackContent key={i}>
                  {items.map(({ logo }, j) => (
                    <TechStackItem key={j}>
                      <TechStackLogo src={logo}></TechStackLogo>
                    </TechStackItem>
                  ))}
                </TechStackContent>
              ))}
            </TechStackLayers>
          </TechStackNeuron>
          <TechStackFooter>
            {/* <Button>Play</Button> */}
            <Button>View full list</Button>
          </TechStackFooter>
        </TechStackWrapper>
      </AboutContent>
    </AboutWrapper>
  )
}
