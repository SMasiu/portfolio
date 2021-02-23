import { SliderGlobalState, SliderAction, SliderActions } from '../types/global-state.type'

export const reducer = (state: SliderGlobalState, action: SliderAction): SliderGlobalState => {
  switch (action.type) {
    case SliderActions.SET_SLIDE:
      return { ...state, currentSlide: action.payload.currentSlide }
    default:
      return { ...state }
  }
}
