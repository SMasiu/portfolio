export interface GlobalStore<T> {
  state: SliderGlobalState
  dispatch?: React.Dispatch<T>
}

export interface SliderGlobalState {
  currentSlide: number
  preventSlide: boolean
}

export enum SliderActions {
  SET_SLIDE = 'SET_SLIDE',
  PREVENT_SLIDE = 'PREVENT_SLIDE',
  ENABLE_SLIDE = 'ENABLE_SLIDE'
}

export interface SliderAction {
  type: SliderActions
  payload?: any
}
