import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-title">
      <SectionHeading
        index="05"
        label="Skills"
        title="Platforms, protocols and tooling"
        headingId="skills-title"
        intro="The stack I use day to day, grouped the way the work arrives: languages and systems, networking, wireless and access, security compliance, tooling, and the production line."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            className="card card-lift skill-card"
            delay={(index % 3) + 1}
          >
            <div className="skill-head">
              <h3 className="skill-title">{group.title}</h3>
              <span className="skill-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <ul className="tag-list">
              {group.skills.map((skill) => (
                <li className="tag" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
