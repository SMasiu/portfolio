export interface GlobalStore<T> {
  state: SliderGlobalState
  dispatch?: React.Dispatch<T>
}

export interface SliderGlobalState {
  currentSlide: number
}

export enum SliderActions {
  SET_SLIDE = 'SET_SLIDE'
}

export interface SliderAction {
  type: SliderActions
  payload: any
}
