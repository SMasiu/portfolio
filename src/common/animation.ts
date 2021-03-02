import gsap from 'gsap'

export const afterSlideOut = (ids: string[]) => () => {
  setTimeout(() => {
    gsap.set(ids, { clearProps: 'all' })
  }, 1000)
}
