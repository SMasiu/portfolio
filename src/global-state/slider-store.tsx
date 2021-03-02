import { GlobalStore, SliderAction, SliderGlobalState } from '../types/global-state.type'
import * as React from 'react'
import { useContext, useReducer, createContext } from 'react'
import { reducer } from './slider-reducer'

const defaultState: SliderGlobalState = {
  currentSlide: 1,
  lastSlide: null,
  preventSlide: false,
  disableSlide: document.body.clientWidth <= 1024
}

const Context = createContext<GlobalStore<SliderAction>>({ state: defaultState })

export const useSliderState = () => useContext(Context)

export const SliderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return <Context.Provider value={{ state, dispatch }} children={children} />
}
