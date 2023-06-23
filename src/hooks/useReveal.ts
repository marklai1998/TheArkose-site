import { useEffect, useRef } from 'react'
import scrollReveal from 'scrollreveal'

export const useReveal = <T extends HTMLElement>(
  config: scrollReveal.ScrollRevealObjectOptions
) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return
    scrollReveal().reveal(ref.current, config)
  }, [config, ref])

  return [ref]
}
