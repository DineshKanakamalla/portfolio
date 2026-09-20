import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/profile'

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

/** CAN bus topology: controller, sensor nodes and the bus they share. */
function CanArt() {
  const nodes = [95, 243, 375]

  return (
    <svg className="project-art" viewBox="0 0 480 220" aria-hidden="true" focusable="false">
      <rect className="art-surface" x="0" y="0" width="480" height="220" />
      <g className="art-soft">
        {[60, 120, 180, 240, 300, 360, 420].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="220" />
        ))}
      </g>

      <path className="art-line" d="M30 150 H450" />

      <g className="art-ink">
        <rect x="60" y="84" width="70" height="42" rx="8" />
        <rect x="200" y="72" width="86" height="54" rx="10" />
        <rect x="340" y="84" width="70" height="42" rx="8" />
      </g>

      <g className="art-line">
        {nodes.map((cx) => (
          <path key={cx} d={`M${cx} 150 V${cx === 243 ? 126 : 126}`} />
        ))}
      </g>

      <g className="art-ink">
        {nodes.map((cx) => (
          <circle key={cx} cx={cx} cy="166" r="5" />
        ))}
      </g>

      <path className="art-fill" d="M30 150 H450 V186 H30 Z" />
      <rect className="art-sweep art-band" x="0" y="0" width="120" height="220" />
    </svg>
  )
}

/** Patch antenna: radiating element, feed point and radiation lobes. */
function AntennaArt() {
  return (
    <svg className="project-art" viewBox="0 0 480 220" aria-hidden="true" focusable="false">
      <rect className="art-surface" x="0" y="0" width="480" height="220" />
      <g className="art-soft">
        {[60, 120, 180, 240, 300, 360, 420].map((x) => (
          <line key={x} x1={x} y1="150" x2={x} y2="210" />
        ))}
        {[166, 182, 198].map((y) => (
          <line key={y} x1="40" y1={y} x2="440" y2={y} />
        ))}
      </g>

      <rect className="art-line" x="150" y="56" width="120" height="76" rx="8" />
      <path className="art-line" d="M210 132 V152" />
      <circle className="art-ink" cx="210" cy="158" r="4" />

      <path className="art-line" d="M290 94 A40 40 0 0 1 290 134" opacity="0.8" />
      <path className="art-line" d="M310 74 A70 70 0 0 1 310 154" opacity="0.6" />
      <path className="art-line" d="M330 54 A100 100 0 0 1 330 174" opacity="0.4" />
      <path className="art-line" d="M130 94 A40 40 0 0 0 130 134" opacity="0.3" />

      <g className="art-ink">
        <rect x="48" y="58" width="46" height="5" rx="2.5" opacity="0.5" />
        <rect x="48" y="72" width="30" height="5" rx="2.5" opacity="0.35" />
      </g>

      <rect className="art-sweep art-band" x="0" y="0" width="120" height="220" />
    </svg>
  )
}

/** Wi-Fi AP: AC controller handing an AP its configuration over a secured control channel. */
function AccessPointArt() {
  return (
    <svg className="project-art" viewBox="0 0 480 220" aria-hidden="true" focusable="false">
      <rect className="art-surface" x="0" y="0" width="480" height="220" />
      <g className="art-soft">
        {[60, 120, 180, 240, 300, 360, 420].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="220" />
        ))}
      </g>

      <g className="art-ink">
        <rect x="44" y="52" width="96" height="60" rx="10" />
      </g>
      <g className="art-line">
        <path d="M60 70h64" opacity="0.7" />
        <path d="M60 84h44" opacity="0.5" />
      </g>

      <path className="art-line" d="M92 112 V126 Q92 152 118 152 H330" />

      <g className="art-ink">
        <rect x="196" y="134" width="36" height="28" rx="6" />
      </g>
      <path className="art-line" d="M205 134 v-7 a9 9 0 0 1 18 0 v7" />

      <g className="art-ink">
        <rect x="330" y="130" width="104" height="44" rx="10" />
      </g>

      <path className="art-line" d="M382 130 V100" />
      <path className="art-line" d="M348 100 A46 46 0 0 1 416 100" opacity="0.7" />
      <path className="art-line" d="M336 88 A64 64 0 0 1 428 88" opacity="0.45" />
      <circle className="art-ink" cx="382" cy="90" r="4" />

      <path className="art-fill" d="M44 178 H436 V198 H44 Z" />
      <rect className="art-sweep art-band" x="0" y="0" width="120" height="220" />
    </svg>
  )
}

/** xPON: OLT and splitter fanning out to ONUs, with the hardening shield. */
function OnuArt() {
  return (
    <svg className="project-art" viewBox="0 0 480 220" aria-hidden="true" focusable="false">
      <rect className="art-surface" x="0" y="0" width="480" height="220" />
      <g className="art-soft">
        {[80, 160, 240, 320, 400].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="220" />
        ))}
      </g>

      <g className="art-ink">
        <rect x="34" y="82" width="64" height="56" rx="9" />
      </g>

      <path className="art-line" d="M98 110 H150" />
      <g className="art-ink">
        <rect x="150" y="94" width="34" height="32" rx="7" />
      </g>

      <path className="art-line" d="M184 110 H216 Q234 110 234 90 V62 H300" />
      <path className="art-line" d="M184 110 H300" />
      <path className="art-line" d="M184 110 H216 Q234 110 234 130 V158 H300" />

      <g className="art-ink">
        <rect x="300" y="42" width="104" height="40" rx="9" />
        <rect x="300" y="90" width="104" height="40" rx="9" />
        <rect x="300" y="138" width="104" height="40" rx="9" />
      </g>

      <path className="art-line" d="M424 98 l16 -9 16 9 v15 q0 17 -16 24 q-16 -7 -16 -24 z" />
      <path className="art-line" d="M432 112 l6 6 10 -13" />

      <rect className="art-sweep art-band" x="0" y="0" width="120" height="220" />
    </svg>
  )
}

/** Reverse engineering: a binary dump on the left, recovered control flow on the right. */
function ReverseArt() {
  const rows = [0, 1, 2, 3, 4, 5]
  const cols = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <svg className="project-art" viewBox="0 0 480 220" aria-hidden="true" focusable="false">
      <rect className="art-surface" x="0" y="0" width="480" height="220" />
      <g className="art-soft">
        {[60, 120, 180, 240, 300, 360, 420].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="220" />
        ))}
      </g>

      <g className="art-ink">
        {rows.map((r) =>
          cols.map((c) => (
            <rect
              key={`byte-${r}-${c}`}
              x={40 + c * 17}
              y={42 + r * 20}
              width={12}
              height={9}
              rx={2}
              opacity={(r * cols.length + c) % 5 === 0 ? 0.85 : 0.3}
            />
          ))
        )}
      </g>

      <rect className="art-band" x="38" y="98" width="134" height="24" rx="4" />
      <path className="art-line" d="M180 110 H232" />

      <g className="art-ink">
        <rect x="244" y="40" width="122" height="34" rx="8" />
        <rect x="306" y="100" width="122" height="34" rx="8" />
        <rect x="244" y="158" width="122" height="34" rx="8" />
      </g>
      <path className="art-line" d="M305 74 V100" />
      <path className="art-line" d="M367 134 V158" />

      <path className="art-line" d="M244 26 h176" opacity="0.4" />
      <path className="art-line" d="M244 206 h176" opacity="0.4" />
      <circle className="art-ink" cx="414" cy="58" r="4" />

      <rect className="art-sweep art-band" x="0" y="0" width="120" height="220" />
    </svg>
  )
}

const artMap = {
  ap: AccessPointArt,
  onu: OnuArt,
  reverse: ReverseArt,
  can: CanArt,
  antenna: AntennaArt
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-title">
      <SectionHeading
        index="04"
        label="Projects"
        title="Selected engineering work"
        headingId="projects-title"
        intro="Wi-Fi access point and access-network firmware from the job, binary analysis below the source level, plus the embedded and RF projects that got me here."
      />

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Art = artMap[project.art] || CanArt

          return (
            <Reveal
              key={project.title}
              as="article"
              className="card card-lift project-card"
              delay={index + 1}
            >
              <div className="project-media">
                <Art />
              </div>

              <div className="project-body">
                <p className="project-kicker">{project.kicker}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-copy">{project.description}</p>

                <div className="tag-list">
                  {project.tech.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-foot">
                  {project.link ? (
                    <a
                      className="text-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View repository
                      <ArrowIcon />
                    </a>
                  ) : (
                    <p className="project-note">
                      {project.note || 'Design study — report available on request'}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
