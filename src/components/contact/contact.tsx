import * as React from 'react'
import { useState } from 'react'
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

  return (
    <ContactWrapper>
      <Watermark>Contact</Watermark>
      <ContactContent>
        <ContactInnerWrapper>
          <ContactDataWrapper>
            <ContactHeader>
              <ContactHeading>Contact</ContactHeading>
            </ContactHeader>
            {contact.map(({ icon, label, value }, i) => (
              <ContactItem key={i}>
                <ContactLabelWrapper>
                  <ContactIconWrapper>{icon}</ContactIconWrapper>
                  <ContactLabel>{label}</ContactLabel>
                </ContactLabelWrapper>
                {value && <ContactValue>{value}</ContactValue>}
              </ContactItem>
            ))}
          </ContactDataWrapper>
          <ContactIllustrationWrapper>
            <ContactIllustration src="/undraw_delivery_address_03n0.svg" />
          </ContactIllustrationWrapper>
        </ContactInnerWrapper>
      </ContactContent>
    </ContactWrapper>
  )
}
