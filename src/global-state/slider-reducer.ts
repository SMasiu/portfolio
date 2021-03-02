import { SliderGlobalState, SliderAction, SliderActions } from '../types/global-state.type'

export const reducer = (state: SliderGlobalState, action: SliderAction): SliderGlobalState => {
  switch (action.type) {
    case SliderActions.SET_SLIDE:
      return { ...state, currentSlide: action.payload.currentSlide, lastSlide: state.currentSlide }
    case SliderActions.PREVENT_SLIDE:
      return { ...state, preventSlide: true }
    case SliderActions.ENABLE_SLIDE:
      return { ...state, preventSlide: false }
    case SliderActions.SET_DISABLED:
      return { ...state, disableSlide: action.payload.disableSlide }
    default:
      return { ...state }
  }
}
