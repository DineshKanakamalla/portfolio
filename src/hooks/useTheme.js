import { useCallback, useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'theme'

function readStoredTheme() {
  if (typeof window === 'undefined') return null
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch (error) {
    return null
  }
}

function systemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Theme is class-based (`dark` on <html>) so Tailwind and the CSS custom
 * properties in index.css switch together. The initial value mirrors the
 * bootstrap script in index.html: saved choice first, system preference second.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => readStoredTheme() || systemTheme())
  const isUserChoice = useRef(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme

    if (isUserChoice.current) {
      try {
        window.localStorage.setItem(STORAGE_KEY, theme)
      } catch (error) {
        /* private mode — the class above still applies for this session */
      }
    }
  }, [theme])

  // Keep following the OS until the visitor makes an explicit choice.
  useEffect(() => {
    if (!window.matchMedia) return undefined
    const query = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (event) => {
      if (readStoredTheme()) return
      setTheme(event.matches ? 'dark' : 'light')
    }

    if (query.addEventListener) {
      query.addEventListener('change', handleChange)
      return () => query.removeEventListener('change', handleChange)
    }

    query.addListener(handleChange)
    return () => query.removeListener(handleChange)
  }, [])

  const toggleTheme = useCallback(() => {
    isUserChoice.current = true
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}