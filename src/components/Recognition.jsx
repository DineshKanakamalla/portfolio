import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { awards, strengths } from '../data/profile'

export default function Recognition() {
  return (
    <section id="recognition" className="section-shell" aria-labelledby="recognition-title">
      <SectionHeading
        index="07"
        label="Recognition"
        title="Award, and how I tend to work"
        headingId="recognition-title"
        intro="Recognition from the firmware teams I work with, alongside the strengths reviewers and colleagues keep pointing at."
      />

      <div className="awards-grid">
        {awards.map((award, index) => (
          <Reveal
            key={award.title}
            as="article"
            className="card card-lift award-card"
            delay={index + 1}
          >
            <span className="award-badge">
              <span className="pulse-dot" aria-hidden="true" />
              {award.year}
            </span>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-org">{award.org}</p>
            {award.text ? <p className="award-text">{award.text}</p> : null}
          </Reveal>
        ))}

        <Reveal className="card card-lift strengths-card" delay={2}>
          <h3 className="skill-title">Working style</h3>
          <ul className="detail-list">
            {strengths.map((item) => (
              <li key={item.slice(0, 32)}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
