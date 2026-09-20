import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { aboutParagraphs, principles } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <SectionHeading
        index="02"
        label="About"
        title="Embedded software with a bias toward reliability"
        headingId="about-title"
        intro="I work where firmware, Linux and networking meet: protocol stacks, security hardening and device management on one side, the test and provisioning tooling that proves a build on the other."
      />

      <div className="about-grid">
        <Reveal className="about-copy">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal as="ul" className="principle-list" delay={2}>
          {principles.map((principle, index) => (
            <li className="principle" key={principle.title}>
              <span className="principle-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="principle-text">
                <strong>{principle.title}</strong>
                {principle.text}
              </span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
