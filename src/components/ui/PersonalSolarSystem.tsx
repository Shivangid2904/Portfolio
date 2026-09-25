import { useEffect, useRef, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlanetConfig {
  id: string
  name: string
  orbit: 'inner' | 'outer'
  rx: number
  ry: number
  tiltDeg: number
  initialAngle: number
  speed: number // rad/sec
  color: string
  glowColor: string
  dotRadius: number
  sublabel: string
}

// ─── Planet Definitions ───────────────────────────────────────────────────────
// Protected central safe zone: width ~640px, height ~540px.
// All orbits pass safely outside this zone.
// Inner orbit: AI/ML, Data, Cloud (Core professional focus)
// Outer orbit: Engineering, Design, Scientific ML, Space (Exploration / expansion)

const PLANETS: PlanetConfig[] = [
  // ── Inner Orbit (Core focus — active building blocks) ──
  {
    id: 'ai-ml',
    name: 'AI / ML',
    orbit: 'inner',
    rx: 440,
    ry: 295,
    tiltDeg: -5,
    initialAngle: 0.55, // ~31° upper-right flank
    speed: 0.018, // ~350s revolution (very slow, quiet, meditative)
    color: '#F4A7BB',
    glowColor: 'rgba(244, 167, 187, 0.40)',
    dotRadius: 3.4,
    sublabel: 'Core Focus',
  },
  {
    id: 'cloud',
    name: 'Cloud',
    orbit: 'inner',
    rx: 440,
    ry: 295,
    tiltDeg: -5,
    initialAngle: 2.55, // ~146° upper-left flank
    speed: 0.018,
    color: '#D8B4E2',
    glowColor: 'rgba(216, 180, 226, 0.40)',
    dotRadius: 3.2,
    sublabel: 'Core Focus',
  },
  {
    id: 'data',
    name: 'Data',
    orbit: 'inner',
    rx: 440,
    ry: 295,
    tiltDeg: -5,
    initialAngle: 4.25, // ~243° lower-left flank
    speed: 0.018,
    color: '#E9D5FF',
    glowColor: 'rgba(232, 213, 255, 0.40)',
    dotRadius: 3.2,
    sublabel: 'Core Focus',
  },

  // ── Outer Orbit (Secondary / Exploration — hidden on mobile) ──
  {
    id: 'space',
    name: 'Space',
    orbit: 'outer',
    rx: 620,
    ry: 405,
    tiltDeg: 6,
    initialAngle: 1.10, // ~63° upper-right
    speed: 0.012, // ~520s revolution (ultra-slow)
    color: '#F4A7BB',
    glowColor: 'rgba(244, 167, 187, 0.25)',
    dotRadius: 2.6,
    sublabel: 'Exploration',
  },
  {
    id: 'scientific-ml',
    name: 'Scientific ML',
    orbit: 'outer',
    rx: 620,
    ry: 405,
    tiltDeg: 6,
    initialAngle: 2.85, // ~163° upper-left
    speed: 0.012,
    color: '#D8B4E2',
    glowColor: 'rgba(216, 180, 226, 0.25)',
    dotRadius: 2.5,
    sublabel: 'Exploration',
  },
  {
    id: 'engineering',
    name: 'Engineering',
    orbit: 'outer',
    rx: 620,
    ry: 405,
    tiltDeg: 6,
    initialAngle: 4.65, // ~266° lower-left
    speed: 0.012,
    color: '#E9D5FF',
    glowColor: 'rgba(232, 213, 255, 0.25)',
    dotRadius: 2.6,
    sublabel: 'Exploration',
  },
  {
    id: 'design',
    name: 'Design',
    orbit: 'outer',
    rx: 620,
    ry: 405,
    tiltDeg: 6,
    initialAngle: 5.85, // ~335° lower-right
    speed: 0.012,
    color: '#C084FC',
    glowColor: 'rgba(192, 132, 252, 0.25)',
    dotRadius: 2.5,
    sublabel: 'Exploration',
  },
]

// ─── Mathematical Coordinate Helper ───────────────────────────────────────────

function getOrbitPosition(
  angle: number,
  rx: number,
  ry: number,
  tiltDeg: number
): { x: number; y: number } {
  const x0 = rx * Math.cos(angle)
  const y0 = ry * Math.sin(angle)
  const rad = (tiltDeg * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)
  return {
    x: x0 * cos - y0 * sin,
    y: x0 * sin + y0 * cos,
  }
}

// ─── Label Alignment Helper (Always points outward from center) ───────────────

function getLabelOffset(x: number, y: number) {
  if (x >= 40) {
    return { dx: '12', dy: '3.5', anchor: 'start' }
  } else if (x <= -40) {
    return { dx: '-12', dy: '3.5', anchor: 'end' }
  } else if (y < 0) {
    return { dx: '0', dy: '-11', anchor: 'middle' }
  } else {
    return { dx: '0', dy: '15', anchor: 'middle' }
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PersonalSolarSystem() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const nodeRefs = useRef<{ [key: string]: SVGGElement | null }>({})

  // Parallax lerp state
  const mouseRef = useRef({ x: 0, y: 0, currentX: 0, currentY: 0 })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let rafId: number
    const startTime = performance.now()

    // Gentle mouse parallax listener
    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseRef.current.x = (e.clientX - cx) * 0.008
      mouseRef.current.y = (e.clientY - cy) * 0.008
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000 // seconds

      // 1. Mouse parallax lerp
      const m = mouseRef.current
      m.currentX += (m.x - m.currentX) * 0.05
      m.currentY += (m.y - m.currentY) * 0.05

      if (svgRef.current) {
        svgRef.current.style.transform = `translate3d(${m.currentX.toFixed(1)}px, ${m.currentY.toFixed(1)}px, 0)`
      }

      // 2. Slow continuous orbital motion
      PLANETS.forEach((planet) => {
        const el = nodeRefs.current[planet.id]
        if (!el) return

        const angle = mq.matches
          ? planet.initialAngle
          : planet.initialAngle + elapsed * planet.speed

        const { x, y } = getOrbitPosition(
          angle,
          planet.rx,
          planet.ry,
          planet.tiltDeg
        )

        // Translate the planet group
        el.setAttribute('transform', `translate(${x.toFixed(1)}, ${y.toFixed(1)})`)

        // Dynamically adjust label offset & text-anchor so it ALWAYS points outward
        const { dx, dy, anchor } = getLabelOffset(x, y)
        const nameText = el.querySelector<SVGTextElement>('.planet-name-text')
        const badgeText = el.querySelector<SVGTextElement>('.planet-badge-text')

        if (nameText) {
          nameText.setAttribute('x', dx)
          nameText.setAttribute('y', dy)
          nameText.setAttribute('text-anchor', anchor)
        }

        if (badgeText) {
          const badgeDy = (parseFloat(dy) - 13).toString()
          badgeText.setAttribute('x', dx)
          badgeText.setAttribute('y', badgeDy)
          badgeText.setAttribute('text-anchor', anchor)
        }
      })

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-[900px] sm:w-[1150px] md:w-[1380px] lg:w-[1600px] h-[600px] sm:h-[750px] md:h-[900px] lg:h-[1020px] flex items-center justify-center"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        viewBox="-750 -450 1500 900"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full will-change-transform"
      >
        <defs>
          {/* Subtle sun aura behind the center of the hero */}
          <radialGradient id="sunCentralAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4A7BB" stopOpacity="0.05" />
            <stop offset="45%" stopColor="#C084FC" stopOpacity="0.02" />
            <stop offset="85%" stopColor="#0B0812" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central aura */}
        <ellipse
          cx="0"
          cy="-50"
          rx="220"
          ry="140"
          fill="url(#sunCentralAura)"
        />

        {/* ── Inner Orbit Ring (Core Focus) ── */}
        <ellipse
          cx="0"
          cy="0"
          rx={440}
          ry={295}
          transform="rotate(-5)"
          fill="none"
          stroke="rgba(216, 180, 226, 0.08)"
          strokeWidth="0.8"
          strokeDasharray="4 10"
          strokeLinecap="round"
        />

        {/* ── Outer Orbit Ring (Exploration — hidden on mobile to prevent crowding) ── */}
        <ellipse
          cx="0"
          cy="0"
          rx={620}
          ry={405}
          transform="rotate(6)"
          fill="none"
          stroke="rgba(192, 132, 252, 0.045)"
          strokeWidth="0.75"
          strokeDasharray="3 14"
          strokeLinecap="round"
          className="hidden md:block"
        />

        {/* ── Planet Nodes ── */}
        {PLANETS.map((planet) => {
          const isHovered = hoveredId === planet.id
          const isCore = planet.orbit === 'inner'

          return (
            <g
              key={planet.id}
              ref={(el) => (nodeRefs.current[planet.id] = el)}
              className={`pointer-events-auto cursor-pointer transition-opacity duration-300 ${
                isCore ? '' : 'hidden md:block'
              }`}
              onMouseEnter={() => setHoveredId(planet.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Outer soft atmospheric halo */}
              <circle
                cx="0"
                cy="0"
                r={isHovered ? planet.dotRadius * 3.4 : planet.dotRadius * 2.2}
                fill={planet.glowColor}
                className="transition-all duration-300"
              />

              {/* Ping ring on hover */}
              {isHovered && (
                <circle
                  cx="0"
                  cy="0"
                  r={planet.dotRadius * 2.8}
                  fill="none"
                  stroke={planet.color}
                  strokeWidth="0.75"
                  opacity="0.85"
                />
              )}

              {/* Core planet dot */}
              <circle
                cx="0"
                cy="0"
                r={isHovered ? planet.dotRadius + 0.8 : planet.dotRadius}
                fill={planet.color}
                className="transition-all duration-200"
              />

              {/* Category micro-badge on hover */}
              {isHovered && (
                <text
                  x="12"
                  y="-9.5"
                  textAnchor="start"
                  fill="#FFB7D5"
                  fontSize="7.5"
                  fontFamily="'Inter', system-ui, sans-serif"
                  fontWeight="500"
                  letterSpacing="0.12em"
                  className="planet-badge-text uppercase select-none pointer-events-none"
                >
                  ✦ {planet.sublabel}
                </text>
              )}

              {/* Node label */}
              <text
                x="12"
                y="3.5"
                textAnchor="start"
                fill={
                  isHovered
                    ? '#FFFFFF'
                    : isCore
                    ? '#E9D5FF'
                    : 'rgba(216, 180, 226, 0.55)'
                }
                fillOpacity={isHovered ? 1 : isCore ? 0.85 : 0.55}
                fontSize={isCore ? '10.5' : '9.5'}
                fontFamily="'Inter', system-ui, sans-serif"
                fontWeight={isCore ? '500' : '400'}
                fontStyle={isCore ? 'normal' : 'italic'}
                letterSpacing={isCore ? '0.12em' : '0.08em'}
                className="planet-name-text select-none uppercase tracking-wider transition-all duration-200"
                style={{
                  textShadow: isHovered
                    ? '0 0 10px rgba(244,167,187,0.7)'
                    : 'none',
                }}
              >
                {planet.name}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
