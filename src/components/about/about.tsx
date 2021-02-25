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
  Line,
  TechStackNeuron,
  TechStackLayers,
  TechStackOutputLayer
} from './about.style'
import AboutIllustration from '@icons/about.svg'
import { techStackItems } from '@common/tech-stack'
import { useSliderState } from '@global-state/slider-store'
import { useWheel } from '@hooks/use-wheel'
import { handleWheel } from '@common/handle-wheel'

const techStack = [
  [
    {
      ...techStackItems.js,
      lines: [<Line w="94px" key={1} />, <Line w="222px" r={65} key={2} />]
    },
    {
      ...techStackItems.ts,
      lines: [<Line w="137px" r={47} key={1} />, <Line w="222px" r={65} key={2} />]
    },
    {
      ...techStackItems.node,
      lines: [<Line w="137px" r={47} key={1} />, <Line w="312px" r={72.7} key={2} />]
    },
    {
      ...techStackItems.nest,
      lines: [<Line w="165px" r={65} key={1} />]
    }
  ],
  [
    {
      ...techStackItems.html,
      lines: [<Line w="137px" r={-47} key={1} />, <Line w="222px" r={65} key={2} />]
    },
    {
      ...techStackItems.css,
      lines: [<Line w="94px" key={1} />, <Line w="137px" r={-47} key={2} />]
    },
    {
      ...techStackItems.angular,
      lines: [<Line w="137px" r={-47} key={1} />, <Line w="137px" r={47} key={2} />]
    },
    {
      ...techStackItems.react,
      lines: [<Line w="86px" r={35.8} key={2} />]
    }
  ],
  [
    {
      ...techStackItems.graphql,
      lines: [<Line w="137px" r={-47} key={1} />, <Line w="137px" r={47} key={2} />]
    },
    {
      ...techStackItems.gatsby,
      lines: [<Line w="94px" key={1} />, <Line w="137px" r={47} key={2} />]
    },
    {
      ...techStackItems.postgresql,
      lines: [<Line w="94px" key={1} />, <Line w="137px" r={47} key={2} />]
    },
    {
      ...techStackItems.mongodb,
      lines: [<Line w="86px" r={-35.8} key={1} />]
    }
  ],
  [
    {
      ...techStackItems.python,
      lines: [<Line w="94px" key={1} />]
    },
    {
      ...techStackItems.docker,
      lines: [<Line w="94px" key={1} />, <Line w="137px" r={-47} key={2} />]
    },
    {
      ...techStackItems.github,
      lines: [<Line w="94px" key={1} />]
    },
    {
      ...techStackItems.npm,
      lines: [<Line w="165px" r={-65} key={1} />]
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
                  {items.map(({ logo, lines }, j) => (
                    <TechStackItem key={j}>
                      <TechStackLogo src={logo}></TechStackLogo>
                      {lines}
                    </TechStackItem>
                  ))}
                </TechStackContent>
              ))}
            </TechStackLayers>
            <TechStackOutputLayer>
              <TechStackItem>
                <TechStackLogo src="/web-dev.svg"></TechStackLogo>
              </TechStackItem>
            </TechStackOutputLayer>
          </TechStackNeuron>
          <TechStackFooter>
            <Button>Play</Button>
            <Button>View full list</Button>
          </TechStackFooter>
        </TechStackWrapper>
      </AboutContent>
    </AboutWrapper>
  )
}
