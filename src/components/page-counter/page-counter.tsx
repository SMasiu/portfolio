import * as React from 'react'
import {
  PageCounterContent,
  PageCurrent,
  PageCurrentIndex,
  PageName,
  PageOf
} from './page-counter.style'

export const PageCounter = () => (
  <PageCounterContent>
    <PageCurrent>
      <PageName>Home - </PageName>
      <PageCurrentIndex>01</PageCurrentIndex>
    </PageCurrent>
    <PageOf>/04</PageOf>
  </PageCounterContent>
)
