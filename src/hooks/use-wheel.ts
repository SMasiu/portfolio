import { useEffect, useState } from 'react'
import { throttle, debounce } from 'lodash'
import { useSliderState } from '@global-state/slider-store'
import { SliderActions } from '../types/global-state.type'

export const useWheel = (
  elementId: string,
  onWheel: (e: WheelEvent, elem: HTMLElement) => void
) => {
  const { state, dispatch } = useSliderState()
  const [elem, setElem] = useState<HTMLElement>(null)

  useEffect(() => {
    setElem(document.querySelector(elementId) as HTMLElement)
    window.addEventListener('resize', handleResize)
    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleResize = debounce(() => {
    const isDisabled = document.body.clientWidth <= 1024
    if (state.disableSlide !== isDisabled) {
      dispatch({ type: SliderActions.SET_DISABLED, payload: { disableSlide: isDisabled } })
    }
  }, 250)

  const handleScroll = throttle((e: WheelEvent) => {
    onWheel(e, elem)
  }, 100)
}
