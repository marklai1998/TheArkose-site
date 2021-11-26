import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

export const useReveal = <T extends HTMLElement>(
  config: scrollReveal.ScrollRevealObjectOptions
) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return
    ScrollReveal().reveal(ref.current, config)
  }, [ref])

  return [ref]
}
