import React from 'react'
import Reveal from './Reveal'
import { heroFacts, profile } from '../data/profile'

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

/** Decorative PCB illustration — the visual anchor of the hero. */
function BoardGraphic() {
  const pinRows = [186, 210, 234, 258]
  const pinCols = [146, 166, 186, 206]

  return (
    <svg className="board-svg" viewBox="0 0 440 340" aria-hidden="true" focusable="false">
      <rect className="art-board" x="14" y="14" width="412" height="312" rx="26" />
      <rect className="art-sheen" x="14" y="14" width="412" height="168" rx="26" />

      <circle className="art-hole" cx="42" cy="42" r="6" />
      <circle className="art-hole" cx="398" cy="42" r="6" />
      <circle className="art-hole" cx="42" cy="298" r="6" />
      <circle className="art-hole" cx="398" cy="298" r="6" />

      <rect className="art-port" x="30" y="120" width="18" height="44" rx="4" />
      <rect className="art-port" x="30" y="196" width="18" height="44" rx="4" />

      <path className="art-trace" d="M48 142 H120 Q136 142 136 158 V170 H170" />
      <path className="art-trace" d="M48 218 H120 Q136 218 136 202 V186 H170" />
      <path className="art-trace" d="M200 128 V84 Q200 68 184 68 H140" />
      <path className="art-trace" d="M244 128 V92 Q244 76 260 76 H320" />
      <path className="art-trace" d="M200 214 V252 Q200 268 184 268 H110" />
      <path className="art-trace" d="M244 214 V258 H280" />

      <path className="art-trace trace" d="M274 150 H330 Q346 150 346 134 V120 H372" />
      <path className="art-trace trace" d="M274 190 H320 Q336 190 336 206 V244 H380" />

      <circle className="art-pin node" cx="140" cy="68" r="3.4" />
      <circle className="art-pin node" cx="320" cy="76" r="3.4" />
      <circle className="art-pin node" cx="110" cy="268" r="3.4" />
      <circle className="art-pin node" cx="280" cy="258" r="3.4" />
      <circle className="art-pin node" cx="380" cy="244" r="3.4" />

      <rect className="art-port" x="370" y="104" width="20" height="18" rx="4" />
      <path className="art-trace" d="M368 100 A18 18 0 0 1 392 100" />
      <path className="art-trace" d="M360 100 A26 26 0 0 1 400 100" opacity="0.7" />
      <path className="art-trace" d="M352 100 A34 34 0 0 1 408 100" opacity="0.45" />

      <g className="art-pin">
        {pinRows.map((x) => (
          <rect key={`top-${x}`} x={x} y="117" width="10" height="9" rx="3" />
        ))}
        {pinRows.map((x) => (
          <rect key={`bottom-${x}`} x={x} y="216" width="10" height="9" rx="3" />
        ))}
        {pinCols.map((y) => (
          <rect key={`left-${y}`} x="158" y={y} width="9" height="10" rx="3" />
        ))}
        {pinCols.map((y) => (
          <rect key={`right-${y}`} x="277" y={y} width="9" height="10" rx="3" />
        ))}
        <rect x="188" y="152" width="30" height="6" rx="3" />
        <rect x="188" y="166" width="52" height="6" rx="3" opacity="0.7" />
        <rect x="188" y="180" width="40" height="6" rx="3" opacity="0.5" />
        <circle cx="252" cy="196" r="4" />
      </g>

      <rect className="art-chip" x="170" y="128" width="104" height="86" rx="12" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true" />
      <span className="orb orb-a" aria-hidden="true" />
      <span className="orb orb-b" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow-index">01</span>
            <span>{profile.name}</span>
          </Reveal>

          <Reveal as="h1" id="hero-title" className="hero-title" delay={1}>
            Firmware and networking for hardware that has to <em>keep working</em>
          </Reveal>

          <Reveal as="p" className="hero-role" delay={2}>
            {profile.role} · {profile.location}
          </Reveal>

          <Reveal as="p" className="hero-lead" delay={3}>
            I write Embedded C for Linux-based network devices — Wi-Fi access points, xPON ONUs
            and Ethernet switches. My work sits in the control plane: protocol stacks, security
            hardening, device management, and the tooling that proves a build before it ships.
          </Reveal>

          <Reveal className="hero-actions" delay={4}>
            <a className="button button-primary" href="#projects">
              View selected work
            </a>
            <a className="button button-ghost" href={`mailto:${profile.email}`}>
              Start a conversation
            </a>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub profile
              <ArrowIcon />
            </a>
          </Reveal>

          <Reveal className="hero-facts" delay={5}>
            {heroFacts.map((fact) => (
              <div key={fact.value}>
                <p className="fact-value">{fact.value}</p>
                <p className="fact-label">{fact.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={3}>
          <div className="board-frame">
            <BoardGraphic />

            <div className="board-card board-card-a float-a">
              <span className="board-label">
                <span className="pulse-dot" aria-hidden="true" />
                Current focus
              </span>
              <span className="board-value">Wi-Fi AP firmware · CAPWAP</span>
            </div>

            <div className="board-card board-card-b float-b">
              <span className="board-label">Also building</span>
              <span className="board-value">xPON ONU · Switch NMS</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
