import React from 'react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-copy">
          <p className="footer-role">
            {profile.role} · {profile.tagline}
          </p>
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.
          </p>
        </div>
        <nav className="footer-links" aria-label="Contact links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
