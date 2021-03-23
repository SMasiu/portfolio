import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  ContactContent,
  ContactDataWrapper,
  ContactHeader,
  ContactHeading,
  ContactIconWrapper,
  ContactIllustration,
  ContactIllustrationWrapper,
  ContactInnerWrapper,
  ContactItem,
  ContactItemsWrapper,
  ContactLabel,
  ContactLabelWrapper,
  ContactLink,
  ContactValue,
  ContactWrapper,
  Watermark
} from './contact.style'
import PhoneIcon from '@icons/phone-call.svg'
import EmailIcon from '@icons/mail.svg'
import PinIcon from '@icons/pin.svg'
import LinkedInIcon from '@icons/linked-in.svg'
import GithubIcon from '@icons/github.svg'
import { useSliderState } from '@global-state/slider-store'
import { useWheel } from '@hooks/use-wheel'
import { handleWheel } from '@common/handle-wheel'
import gsap from 'gsap'
import { afterSlideOut } from '@common/animation'

export interface ContactItem {
  label: string
  value: string
  icon: JSX.Element
  link?: string
}

const contact: ContactItem[] = [
  {
    label: 'Email',
    value: 'szymon.masko32@gmail.com',
    icon: <EmailIcon />
  },
  {
    label: 'Phone',
    value: '+48 506 979 491',
    icon: <PhoneIcon />
  },
  {
    label: 'Location',
    value: 'Poland, Gliwice',
    icon: <PinIcon />
  },
  {
    label: 'GitHub',
    value: '',
    icon: <GithubIcon />,
    link: 'https://www.linkedin.com/in/szymon-ma%C5%9Bko-763b22196'
  },
  {
    label: 'LinkedIn',
    value: '',
    icon: <LinkedInIcon />,
    link: 'https://github.com/SMasiu'
  }
]

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper({ children }) : children

export const Contact: React.FC = () => {
  const [scrollTicks, setScrolledTicks] = useState(0)
  const { state, dispatch } = useSliderState()
  const [isAnimating, setIsAnimating] = useState(false)

  useWheel('#contact-content', handleWheel(4, state, dispatch, scrollTicks, setScrolledTicks))

  useEffect(() => {
    if (state.disableSlide) {
      return
    }
    if (state.currentSlide === 4) {
      setIsAnimating(true)
      const t1 = gsap.timeline({ defaults: { duration: 0.5 } })
      t1.delay(2)
        .fromTo('#contact-header', { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
        .fromTo('#contact-item-0', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
        .fromTo('#contact-item-1', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
        .fromTo('#contact-item-2', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
        .fromTo('#contact-item-3', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
        .fromTo('#contact-item-4', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
        .fromTo('#contact-watermark', { opacity: 0, scale: 0 }, { opacity: 0.1, scale: 1 })
        .then(() => {
          setIsAnimating(false)
        })
    } else if (!isAnimating && state.lastSlide === 4) {
      const t1 = gsap.timeline({ defaults: { duration: 0.2 } })
      t1.to('#contact-watermark', { opacity: 0, scale: 0.5 })
        .to('#contact-item-4', { opacity: 0, x: -50 })
        .to('#contact-item-3', { opacity: 0, x: -50 })
        .to('#contact-item-2', { opacity: 0, x: -50 })
        .to('#contact-item-1', { opacity: 0, x: -50 })
        .to('#contact-item-0', { opacity: 0, x: -50 })
        .to('#contact-header', { opacity: 0, y: -100 })
        .then(
          afterSlideOut([
            '#contact-watermark',
            '#contact-item-4',
            '#contact-item-3',
            '#contact-item-2',
            '#contact-item-1',
            '#contact-item-0',
            '#contact-header'
          ])
        )
    }
  }, [state.currentSlide])

  const createContactItem = ({ icon, label, value, link }: ContactItem, i: number) => {
    return (
      <ContactItem key={i} id={`contact-item-${i}`}>
        <ConditionalWrapper
          condition={link}
          wrapper={({ children }) => (
            <ContactLink target="_blank" rel="noreferrer" href={link}>
              {children}
            </ContactLink>
          )}
        >
          <ContactLabelWrapper>
            <ContactIconWrapper>{icon}</ContactIconWrapper>
            <ContactLabel>{label}</ContactLabel>
          </ContactLabelWrapper>
          {value && <ContactValue>{value}</ContactValue>}
        </ConditionalWrapper>
      </ContactItem>
    )
  }

  return (
    <ContactWrapper>
      <Watermark id="contact-watermark">Contact</Watermark>
      <ContactContent>
        <ContactInnerWrapper>
          <ContactDataWrapper>
            <ContactHeader id="contact-header">
              <ContactHeading>Contact</ContactHeading>
            </ContactHeader>
            <ContactItemsWrapper>{contact.map(createContactItem)}</ContactItemsWrapper>
          </ContactDataWrapper>
          <ContactIllustrationWrapper>
            <ContactIllustration src="undraw_delivery_address_03n0.svg" alt="Contact" />
          </ContactIllustrationWrapper>
        </ContactInnerWrapper>
      </ContactContent>
    </ContactWrapper>
  )
}
