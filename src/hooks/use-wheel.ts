import { useEffect } from 'react'
import { throttle } from 'lodash'

export const useWheel = (onWheel: (e: WheelEvent) => void) => {
  useEffect(() => {
    window.addEventListener('wheel', handleScroll)

    return () => window.removeEventListener('wheel', handleScroll)
  })

  const handleScroll = throttle((e: WheelEvent) => {
    onWheel(e)
  }, 100)
}
