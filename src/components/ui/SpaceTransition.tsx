import { useEffect, useRef } from 'react'

// ─── Seeded LCG for deterministic, consistent particle positions ──────────────
// Same seed → identical coordinates on every render without state or re-render shifts.

function makeLcg(seed: number) {
  let s = (seed >>> 0) || 1
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967295
  }
}

// ─── Color helpers ────────────────────────────────────────────────────────────

const C_LAVENDER = (a: number) => `rgba(216,180,226,${a.toFixed(3)})`
const C_PINK     = (a: number) => `rgba(244,167,187,${a.toFixed(3)})`
const C_MUTED    = (a: number) => `rgba(150,130,170,${a.toFixed(3)})`
const C_LILAC    = (a: number) => `rgba(232,213,255,${a.toFixed(3)})`

// ─── Particle Types ───────────────────────────────────────────────────────────

interface Dot {
  x: number
  y: number
  r: number
  op: number
  pink?: boolean
}

interface Rock {
  x: number
  y: number
  rx: number
  ry: number
  angle: number
  op: number
}

// ─── Particle Generators (computed once at module load) ───────────────────────

function genAsteroidBelt(): { dots: Dot[]; rocks: Rock[] } {
  const rng = makeLcg(0x1a2b3c)
  const dots: Dot[] = Array.from({ length: 36 }, () => ({
    x: rng() * 1360 + 20,
    y: rng() * 60 + 45,
    r: rng() * 1.5 + 0.5,
    op: rng() * 0.14 + 0.06,
    pink: rng() > 0.88,
  }))

  const rocks: Rock[] = Array.from({ length: 7 }, () => {
    const baseR = rng() * 3.5 + 2.2
    return {
      x: rng() * 1200 + 100,
      y: rng() * 45 + 55,
      rx: baseR,
      ry: baseR * (0.5 + rng() * 0.45),
      angle: rng() * 360,
      op: rng() * 0.12 + 0.08,
    }
  })

  return { dots, rocks }
}

function genOrbitalArc(): { dots: Dot[] } {
  const rng = makeLcg(0xf00ba4)
  // Curve: Q (0, 75) -> (700, 32) -> (1400, 75)
  const dots: Dot[] = Array.from({ length: 26 }, (_, i) => {
    const t = (i + 0.5) / 26
    const bx = t * 1400
    // Quadratic bezier y
    const by = (1 - t) * (1 - t) * 75 + 2 * (1 - t) * t * 32 + t * t * 75
    return {
      x: bx + (rng() - 0.5) * 40,
      y: by + (rng() - 0.5) * 22,
      r: rng() * 1.3 + 0.45,
      op: rng() * 0.15 + 0.06,
      pink: rng() > 0.82,
    }
  })

  return { dots }
}

function genDustField(): Dot[] {
  const rng = makeLcg(0xdeadbeef)
  return Array.from({ length: 54 }, () => ({
    x: rng() * 1380 + 10,
    y: rng() * 100 + 15,
    r: rng() * 1.1 + 0.35,
    op: rng() * 0.12 + 0.04,
    pink: rng() > 0.85,
  }))
}

function genParticleTrail(): Dot[] {
  const rng = makeLcg(0x42cafe)
  return Array.from({ length: 32 }, (_, i) => {
    const t = i / 31
    // Gentle diagonal stream
    const bx = 60 + t * 1280
    const by = 88 - t * 45 + Math.sin(t * Math.PI) * 16
    return {
      x: bx + (rng() - 0.5) * 60,
      y: by + (rng() - 0.5) * 26,
      r: rng() * 1.4 + 0.4,
      op: rng() * 0.14 + 0.05,
      pink: rng() > 0.78,
    }
  })
}

function genOrbitalPath(): { dots: Dot[] } {
  const rng = makeLcg(0x9a8b7c)
  // Subtle downward dipping arc
  return {
    dots: Array.from({ length: 22 }, (_, i) => {
      const t = (i + 0.5) / 22
      const bx = t * 1400
      const by = (1 - t) * (1 - t) * 35 + 2 * (1 - t) * t * 78 + t * t * 35
      return {
        x: bx + (rng() - 0.5) * 35,
        y: by + (rng() - 0.5) * 18,
        r: rng() * 1.2 + 0.4,
        op: rng() * 0.13 + 0.05,
        pink: rng() > 0.85,
      }
    }),
  }
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const ASTEROID_DATA = genAsteroidBelt()
const ORBITAL_DATA  = genOrbitalArc()
const DUST_DATA     = genDustField()
const TRAIL_DATA    = genParticleTrail()
const PATH_DATA     = genOrbitalPath()

// ─── SVG Variants ─────────────────────────────────────────────────────────────

function AsteroidBeltSVG() {
  return (
    <svg
      viewBox="0 0 1400 150"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[150px] overflow-visible"
      preserveAspectRatio="none"
    >
      {/* Barely visible horizontal dust band */}
      <line
        x1="0"
        y1="75"
        x2="1400"
        y2="75"
        stroke={C_MUTED(0.02)}
        strokeWidth="50"
      />

      {/* Tiny debris particles */}
      {ASTEROID_DATA.dots.map((d, i) => (
        <circle
          key={`dot-${i}`}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={d.pink ? C_PINK(d.op) : C_LAVENDER(d.op)}
        />
      ))}

      {/* Slightly larger irregular asteroid rocks */}
      {ASTEROID_DATA.rocks.map((r, i) => (
        <ellipse
          key={`rock-${i}`}
          cx={r.x}
          cy={r.y}
          rx={r.rx}
          ry={r.ry}
          transform={`rotate(${r.angle} ${r.x} ${r.y})`}
          fill={C_MUTED(r.op)}
          stroke={C_LAVENDER(r.op * 0.75)}
          strokeWidth="0.5"
        />
      ))}
    </svg>
  )
}

function OrbitalArcSVG() {
  const arcPath = 'M 0,75 Q 700,32 1400,75'
  const whisperPath = 'M 100,85 Q 700,44 1300,85'

  return (
    <svg
      viewBox="0 0 1400 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[120px] overflow-visible"
      preserveAspectRatio="none"
    >
      {/* Primary faint dashed orbital arc */}
      <path
        d={arcPath}
        fill="none"
        stroke={C_LAVENDER(0.065)}
        strokeWidth="0.85"
        strokeDasharray="3 9"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Whisper harmonic arc */}
      <path
        d={whisperPath}
        fill="none"
        stroke={C_PINK(0.035)}
        strokeWidth="0.65"
        strokeDasharray="2 12"
        vectorEffect="non-scaling-stroke"
      />

      {/* Dust particles clustered along orbital path */}
      {ORBITAL_DATA.dots.map((d, i) => (
        <circle
          key={`orb-${i}`}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={d.pink ? C_PINK(d.op) : C_LAVENDER(d.op)}
        />
      ))}

      {/* Two delicate anchor micro-sparkles */}
      <circle cx={420} cy={44} r={1.6} fill={C_LILAC(0.24)} />
      <circle cx={960} cy={42} r={1.4} fill={C_PINK(0.20)} />
    </svg>
  )
}

function DustFieldSVG() {
  return (
    <svg
      viewBox="0 0 1400 130"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[130px] overflow-visible"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="dustCenterHaze" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D8B4E2" stopOpacity="0.035" />
          <stop offset="60%" stopColor="#C084FC" stopOpacity="0.015" />
          <stop offset="100%" stopColor="#0B0812" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Gentle central haze */}
      <ellipse cx="700" cy="65" rx="450" ry="45" fill="url(#dustCenterHaze)" />

      {/* Scattered cosmic stardust particles */}
      {DUST_DATA.map((d, i) => (
        <circle
          key={`dust-${i}`}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={d.pink ? C_PINK(d.op) : C_LILAC(d.op)}
        />
      ))}
    </svg>
  )
}

function ParticleTrailSVG() {
  const guidePath = 'M 60,88 C 360,78 940,32 1340,24'

  return (
    <svg
      viewBox="0 0 1400 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[120px] overflow-visible"
      preserveAspectRatio="none"
    >
      {/* Ghost guide path */}
      <path
        d={guidePath}
        fill="none"
        stroke={C_LAVENDER(0.045)}
        strokeWidth="0.75"
        strokeDasharray="2 10"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Streaming stardust particles */}
      {TRAIL_DATA.map((d, i) => (
        <circle
          key={`trail-${i}`}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={d.pink ? C_PINK(d.op) : C_LAVENDER(d.op)}
        />
      ))}
    </svg>
  )
}

function OrbitalPathSVG() {
  const arcPath = 'M 0,35 Q 700,82 1400,35'

  return (
    <svg
      viewBox="0 0 1400 110"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[110px] overflow-visible"
      preserveAspectRatio="none"
    >
      <path
        d={arcPath}
        fill="none"
        stroke={C_LAVENDER(0.055)}
        strokeWidth="0.75"
        strokeDasharray="2 8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {PATH_DATA.dots.map((d, i) => (
        <circle
          key={`path-${i}`}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={d.pink ? C_PINK(d.op) : C_LAVENDER(d.op)}
        />
      ))}
    </svg>
  )
}

// ─── Variant Types ────────────────────────────────────────────────────────────

export type TransitionVariant =
  | 'asteroid-belt'
  | 'orbital-arc'
  | 'dust-field'
  | 'particle-trail'
  | 'orbital-path'

const VARIANT_HEIGHT: Record<TransitionVariant, number> = {
  'asteroid-belt': 150,
  'orbital-arc':   120,
  'dust-field':    130,
  'particle-trail': 120,
  'orbital-path':  110,
}

function renderVariant(v: TransitionVariant) {
  switch (v) {
    case 'asteroid-belt':
      return <AsteroidBeltSVG />
    case 'orbital-arc':
      return <OrbitalArcSVG />
    case 'dust-field':
      return <DustFieldSVG />
    case 'particle-trail':
      return <ParticleTrailSVG />
    case 'orbital-path':
      return <OrbitalPathSVG />
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

interface SpaceTransitionProps {
  variant: TransitionVariant
  /** Subtle parallax rate: fraction of distance from screen center applied as translateY */
  parallaxSpeed?: number
}

export default function SpaceTransition({
  variant,
  parallaxSpeed = 0.04,
}: SpaceTransitionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const h = VARIANT_HEIGHT[variant]

  useEffect(() => {
    const wrapper = wrapperRef.current
    const inner = innerRef.current
    if (!wrapper || !inner) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    let rafId = 0
    let currentY = 0
    let isVisible = false

    const updateParallax = () => {
      if (!isVisible) return

      const rect = wrapper.getBoundingClientRect()
      const screenCenter = window.innerHeight / 2
      const distFromCenter = rect.top - screenCenter
      // Restrained, bounded target offset (±18px max)
      const targetY = Math.max(-18, Math.min(18, -distFromCenter * parallaxSpeed))

      currentY += (targetY - currentY) * 0.08
      inner.style.transform = `translate3d(0, ${currentY.toFixed(1)}px, 0)`

      rafId = requestAnimationFrame(updateParallax)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) {
          cancelAnimationFrame(rafId)
          rafId = requestAnimationFrame(updateParallax)
        } else {
          cancelAnimationFrame(rafId)
        }
      },
      { rootMargin: '200px 0px 200px 0px' }
    )

    observer.observe(wrapper)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [parallaxSpeed])

  return (
    <div
      ref={wrapperRef}
      className="relative w-full pointer-events-none select-none"
      style={{ height: 0, zIndex: 1, overflow: 'visible' }}
      aria-hidden="true"
    >
      <div
        ref={innerRef}
        className="w-full will-change-transform opacity-80 sm:opacity-100"
        style={{
          position: 'absolute',
          left: 0,
          top: `${-(h / 2)}px`,
          width: '100%',
        }}
      >
        {renderVariant(variant)}
      </div>
    </div>
  )
}
