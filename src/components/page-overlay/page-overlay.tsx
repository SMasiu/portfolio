import { slidesCount } from '@common/slider'
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

export interface PageOverlayProps {
  slide: number
  onPageChange: (slide: number) => void
}

export const PageOverlay: React.FC<PageOverlayProps> = ({ slide, onPageChange }) => (
  <PageOverlayWrapper>
    <OverlayContent>
      {slide !== 1 && (
        <PreviousWrapper onClick={() => onPageChange(slide - 1)}>
          <PreviousButton />
        </PreviousWrapper>
      )}
      {slide !== slidesCount && (
        <NextWrapper onClick={() => onPageChange(slide + 1)}>
          <NextButton />
        </NextWrapper>
      )}

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
