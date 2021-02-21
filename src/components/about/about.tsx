import { Button } from '@components/button/button'
import * as React from 'react'
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

const techStack = [
  [
    {
      logo: '/tech-stack/js.png',
      lines: [<Line w="94px" />, <Line w="222px" r={65} />]
    },
    {
      logo: '/tech-stack/ts.png',
      lines: [<Line w="137px" r={47} />, <Line w="222px" r={65} />]
    },
    {
      logo: '/tech-stack/node.png',
      lines: [<Line w="137px" r={47} />, <Line w="312px" r={72.7} />]
    },
    {
      logo: '/tech-stack/nest.svg',
      lines: [<Line w="165px" r={65} />]
    }
  ],
  [
    {
      logo: '/tech-stack/html.png',
      lines: [<Line w="137px" r={-47} />, <Line w="222px" r={65} />]
    },
    {
      logo: '/tech-stack/css.png',
      lines: [<Line w="94px" />, <Line w="137px" r={-47} />]
    },
    {
      logo: '/tech-stack/angular.png',
      lines: [<Line w="137px" r={-47} />, <Line w="137px" r={47} />]
    },
    {
      logo: '/tech-stack/react.png',
      lines: [<Line w="86px" r={35.8} />]
    }
  ],
  [
    {
      logo: '/tech-stack/graphql.png',
      lines: [<Line w="137px" r={-47} />, <Line w="137px" r={47} />]
    },
    {
      logo: '/tech-stack/gatsby.png',
      lines: [<Line w="94px" />, <Line w="137px" r={47} />]
    },
    {
      logo: '/tech-stack/postgresql.png',
      lines: [<Line w="94px" />, <Line w="137px" r={47} />]
    },
    {
      logo: '/tech-stack/mongodb.png',
      lines: [<Line w="86px" r={-35.8} />]
    }
  ],
  [
    {
      logo: '/tech-stack/python.webp',
      lines: [<Line w="94px" />]
    },
    {
      logo: '/tech-stack/docker.png',
      lines: [<Line w="94px" />, <Line w="137px" r={-47} />]
    },
    {
      logo: '/tech-stack/github.png',
      lines: [<Line w="94px" />]
    },
    {
      logo: '/tech-stack/npm.png',
      lines: [<Line w="165px" r={-65} />]
    }
  ]
]

export const About = () => (
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
              <TechStackLogo src="/tech-stack/js.png"></TechStackLogo>
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
