import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="section-shell" aria-labelledby="education-title">
      <SectionHeading
        index="06"
        label="Education"
        title="Academic background"
        headingId="education-title"
        intro="A postgraduate specialisation in embedded systems on top of an electronics and communication engineering degree."
      />

      <div className="education-grid">
        {education.map((item, index) => (
          <Reveal key={item.programme} className="card card-lift education-card" delay={index + 1}>
            <h3 className="education-title">{item.programme}</h3>
            <p className="education-school">{item.school}</p>
            <div className="education-meta">
              <span>{item.period}</span>
              <span className="education-score">{item.score}</span>
            </div>
            <p className="education-note">{item.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
