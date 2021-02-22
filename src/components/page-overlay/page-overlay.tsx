import { PageCounter } from '@components/page-counter/page-counter'
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
  PreviousWrapper
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
