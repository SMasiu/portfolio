import { PageCounter } from '@components/page-counter/page-counter'
import { Scroll } from '@components/scroll/scroll'
import * as React from 'react'
import {
  CopyRight,
  CopyRightText,
  NextButton,
  NextWrapper,
  OverlayContent,
  OverlayFooter,
  PageCounterWrapper,
  PageOverlayWrapper,
  PreviousButton,
  PreviousWrapper,
  ScrollWrapper
} from './page-overlay.style'

export const PageOverlay = () => (
  <PageOverlayWrapper>
    <OverlayContent>
      <PreviousWrapper>
        <PreviousButton />
      </PreviousWrapper>

      <NextWrapper>
        <NextButton />
      </NextWrapper>

      <ScrollWrapper>
        <Scroll />
      </ScrollWrapper>

      <OverlayFooter>
        <CopyRight>
          <CopyRightText>&copy; Szymon Maśko 2021</CopyRightText>
        </CopyRight>

        <PageCounterWrapper>
          <PageCounter />
        </PageCounterWrapper>
      </OverlayFooter>
    </OverlayContent>
  </PageOverlayWrapper>
)
