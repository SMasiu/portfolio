import { SliderAction, SliderActions, SliderGlobalState } from '../types/global-state.type'
import { slidesCount } from './slider'

const CHANGE_TICKS = 6

export const handleWheel = (
  slideIndex: number,
  state: SliderGlobalState,
  dispatch: React.Dispatch<SliderAction>,
  scrollTicks: number,
  setScrolledTicks: (num: number) => void
) => (e: WheelEvent, sliderWrapper: HTMLElement) => {
  const { currentSlide, preventSlide, disableSlide } = state
  if (state.currentSlide === slideIndex) {
    if (currentSlide !== slidesCount && scrollTicks <= -CHANGE_TICKS) {
      dispatch({ type: SliderActions.SET_SLIDE, payload: { currentSlide: slideIndex + 1 } })
    } else if (currentSlide !== 1 && scrollTicks >= CHANGE_TICKS) {
      dispatch({ type: SliderActions.SET_SLIDE, payload: { currentSlide: slideIndex - 1 } })
    }
    if (
      !sliderWrapper ||
      (sliderWrapper.scrollTop + sliderWrapper.clientHeight === sliderWrapper.scrollHeight &&
        e.deltaY > 0) ||
      (sliderWrapper.scrollTop === 0 && e.deltaY < 0)
    ) {
      const maxTicks = currentSlide === 1 ? 0 : CHANGE_TICKS
      const minTicks = currentSlide === slidesCount ? 0 : -CHANGE_TICKS
      const newScrollTicks = scrollTicks + (e.deltaY > 0 ? -1 : 1)
      if (
        !disableSlide &&
        !preventSlide &&
        newScrollTicks >= minTicks &&
        newScrollTicks <= maxTicks
      ) {
        setScrolledTicks(newScrollTicks)
      }
    }
  } else {
    setScrolledTicks(0)
  }
}
