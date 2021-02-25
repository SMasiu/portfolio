export interface GlobalStore<T> {
  state: SliderGlobalState
  dispatch?: React.Dispatch<T>
}

export interface SliderGlobalState {
  currentSlide: number
  disableSlide: boolean
  preventSlide: boolean
}

export enum SliderActions {
  SET_SLIDE = 'SET_SLIDE',
  PREVENT_SLIDE = 'PREVENT_SLIDE',
  ENABLE_SLIDE = 'ENABLE_SLIDE',
  SET_DISABLED = 'SET_DISABLED'
}

export interface SliderAction {
  type: SliderActions
  payload?: any
}
