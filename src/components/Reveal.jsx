import React, { useEffect, useRef, useState } from 'react'

/**
 * Reveal — adds the `.reveal` / `.is-visible` pair used in index.css.
 * Elements animate once as they enter the viewport; when reduced motion is
 * requested the stylesheet shows them immediately, so no JS branching is needed.
 *
 * <Reveal as="li" delay={2}>…</Reveal>
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 5)}` : ''
  const classes = ['reveal', delayClass, isVisible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}