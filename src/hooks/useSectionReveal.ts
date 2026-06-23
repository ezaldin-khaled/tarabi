import { useEffect, useRef } from 'react'

export function useSectionReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, className: 'section-reveal' }
}
