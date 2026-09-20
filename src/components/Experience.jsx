import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="section-shell" aria-labelledby="experience-title">
      <SectionHeading
        index="03"
        label="Experience"
        title="Where the firmware actually ships"
        headingId="experience-title"
        intro="Senior Development Engineer at Smartlink Holdings, working with Digisol Systems: controller-managed Wi-Fi access points, xPON ONU firmware and the Python management server for Ethernet switches."
      />

      <div className="timeline">
        {experience.map((job, index) => (
          <Reveal
            key={`${job.role}-${index}`}
            as="article"
            className="card card-lift timeline-item"
            delay={index + 1}
          >
            <span className="timeline-dot" aria-hidden="true" />
            <div className="experience-head">
              <div>
                <h3 className="experience-role">{job.role}</h3>
                <p className="experience-company">{job.company}</p>
              </div>
            </div>

            <div className="experience-meta">
              {job.tags.map((tag) => (
                <span className="meta-chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            {job.note ? <p className="experience-note">{job.note}</p> : null}

            {job.groups ? (
              <div className="experience-groups">
                {job.groups.map((group) => (
                  <div className="experience-group" key={group.title}>
                    <h4 className="group-title">{group.title}</h4>
                    <ul className="detail-list">
                      {group.points.map((point) => (
                        <li key={point.slice(0, 32)}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="detail-list">
                {job.highlights.map((highlight) => (
                  <li key={highlight.slice(0, 32)}>{highlight}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
