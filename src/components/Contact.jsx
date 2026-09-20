import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

/**
 * Direct contact details instead of a fake form: the previous version alerted
 * "Form submitted" without sending anything, which is worse than no form.
 */
export default function Contact() {
  const details = [
    {
      key: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`
    },
    { key: 'Location', value: profile.location },
    { key: 'Focus', value: profile.focus },
    { key: 'Notice period', value: profile.noticePeriod },
    { key: 'Languages', value: profile.languages },
    { key: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github }
  ]

  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-title">
      <SectionHeading
        index="08"
        label="Contact"
        title="Let's talk about embedded and networking work"
        headingId="contact-title"
      />

      <Reveal className="card contact-panel">
        <div className="contact-copy">
          <p>
            I am open to conversations about embedded software, Linux networking and firmware
            security — whether that is a role, a design question or a second opinion on a
            stubborn bug.
          </p>
          <p>
            {profile.availability}. Email is the quickest way to reach me, and I am on a{' '}
            {profile.noticePeriod} notice period.
          </p>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              Email {profile.shortName}
            </a>
            <a
              className="button button-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <a
              className="button button-ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>
        </div>

        <ul className="contact-list">
          {details.map((detail) => (
            <li className="contact-item" key={detail.key}>
              <span className="contact-key">{detail.key}</span>
              {detail.href ? (
                <a
                  className="contact-value"
                  href={detail.href}
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={detail.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                >
                  {detail.value}
                </a>
              ) : (
                <span className="contact-value">{detail.value}</span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
