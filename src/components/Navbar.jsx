import React, { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../data/profile'

/**
 * Sticky header: brand, section nav with scroll-spy, theme switch and a
 * collapsible mobile menu.
 */
export default function Navbar({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState(navItems[0].id)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll-spy: highlight the section currently occupying the viewport centre.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (mostVisible) setActiveId(mostVisible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.5, 0.8, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const isDark = theme === 'dark'
  const closeMenu = () => setIsMenuOpen(false)

  // Mobile menu: Escape dismisses it, and so does a tap outside the header.
  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setIsMenuOpen(false)
      if (toggleRef.current) toggleRef.current.focus()
    }

    const handlePointerDown = (event) => {
      if (headerRef.current && headerRef.current.contains(event.target)) return
      setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen])

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`} ref={headerRef}>
      <div className="nav-shell">
        <a className="brand" href="#hero" aria-label={`${profile.name} — back to top`}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-copy">
            <span className="brand-name">{profile.shortName}</span>
            <span className="brand-role">{profile.focus}</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Section navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link${activeId === item.id ? ' is-active' : ''}`}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="button button-ghost nav-cta" href={`mailto:${profile.email}`}>
            Get in touch
          </a>

          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-pressed={isDark}
          >
            <svg
              key={theme}
              className="theme-icon"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isDark ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
                </>
              ) : (
                <>
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                </>
              )}
            </svg>
          </button>

          <button
            type="button"
            className="icon-button nav-toggle"
            ref={toggleRef}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="mobile-menu"
          aria-label="Mobile section navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-link${activeId === item.id ? ' is-active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}