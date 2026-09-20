import React from 'react'
import Reveal from './Reveal'

/**
 * Shared section header: eyebrow index + label, title and optional intro.
 * `headingId` is referenced by the section's aria-labelledby.
 */
export default function SectionHeading({ index, label, title, intro, headingId }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span>{label}</span>
      </p>
      <h2 className="section-title" id={headingId}>
        {title}
      </h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </Reveal>
  )
}