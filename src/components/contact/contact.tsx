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

const contact = [
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
    icon: <GithubIcon />
  },
  {
    label: 'LinkedIn',
    value: '',
    icon: <LinkedInIcon />
  }
]

export interface ContactProps {
  sliderWrapper: HTMLElement
}

export const Contact: React.FC<ContactProps> = ({ sliderWrapper }) => {
  const [scrollTicks, setScrolledTicks] = useState(0)
  const { state, dispatch } = useSliderState()

  useWheel(handleWheel(4, state, dispatch, scrollTicks, setScrolledTicks, sliderWrapper))

  useEffect(() => {
    if (!state.disableSlide) {
      if (state.currentSlide === 4) {
        const t1 = gsap.timeline({ defaults: { duration: 0.5 } })
        t1.delay(2)
          .fromTo('#contact-header', { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
          .fromTo('#contact-item-0', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
          .fromTo('#contact-item-1', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
          .fromTo('#contact-item-2', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
          .fromTo('#contact-item-3', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
          .fromTo('#contact-item-4', { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
          .fromTo('#contact-watermark', { opacity: 0, scale: 0 }, { opacity: 0.1, scale: 1 })
      } else {
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
    }
  }, [state.currentSlide])

  return (
    <ContactWrapper>
      <Watermark id="contact-watermark">Contact</Watermark>
      <ContactContent>
        <ContactInnerWrapper>
          <ContactDataWrapper>
            <ContactHeader id="contact-header">
              <ContactHeading>Contact</ContactHeading>
            </ContactHeader>
            <ContactItemsWrapper>
              {contact.map(({ icon, label, value }, i) => (
                <ContactItem key={i} id={`contact-item-${i}`}>
                  <ContactLabelWrapper>
                    <ContactIconWrapper>{icon}</ContactIconWrapper>
                    <ContactLabel>{label}</ContactLabel>
                  </ContactLabelWrapper>
                  {value && <ContactValue>{value}</ContactValue>}
                </ContactItem>
              ))}
            </ContactItemsWrapper>
          </ContactDataWrapper>
          <ContactIllustrationWrapper>
            <ContactIllustration src="/undraw_delivery_address_03n0.svg" />
          </ContactIllustrationWrapper>
        </ContactInnerWrapper>
      </ContactContent>
    </ContactWrapper>
  )
}
