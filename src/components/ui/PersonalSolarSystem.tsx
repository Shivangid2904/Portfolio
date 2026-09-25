import { useEffect, useRef, useState } from 'react'

// ─── Interfaces ───────────────────────────────────────────────────────────────

interface PlanetConfig {
  id: string
  name: string
  category: 'core' | 'exploration'
  rx: number
  ry: number
  tiltDeg: number
  initialAngle: number
  speed: number // rad/sec
  color: string
  glowColor: string
  dotRadius: number
}

// ─── Solar System Configuration ───────────────────────────────────────────────

const PLANETS: PlanetConfig[] = [
  // ── Core Professional Areas (Inner Orbits, slightly faster periods) ──
  {
    id: 'ai-ml',
    name: 'AI / ML',
    category: 'core',
    rx: 290,
    ry: 180,
    tiltDeg: 4,
    initialAngle: 0.65, // ~37° upper-right
    speed: 0.032, // ~195s revolution
    color: '#F4A7BB',
    glowColor: 'rgba(244, 167, 187, 0.35)',
    dotRadius: 3.4,
  },
  {
    id: 'data',
    name: 'Data',
    category: 'core',
    rx: 220,
    ry: 140,
    tiltDeg: -6,
    initialAngle: 3.75, // ~215° lower-left
    speed: 0.042, // ~150s revolution
    color: '#E9D5FF',
    glowColor: 'rgba(232, 213, 255, 0.35)',
    dotRadius: 3.2,
  },
  {
    id: 'cloud',
    name: 'Cloud',
    category: 'core',
    rx: 220,
    ry: 140,
    tiltDeg: -6,
    initialAngle: 2.15, // ~123° upper-left
    speed: 0.042, // ~150s revolution
    color: '#D8B4E2',
    glowColor: 'rgba(216, 180, 226, 0.35)',
    dotRadius: 3.2,
  },
  {
    id: 'engineering',
    name: 'Engineering',
    category: 'core',
    rx: 290,
    ry: 180,
    tiltDeg: 4,
    initialAngle: 5.25, // ~300° lower-right
    speed: 0.032, // ~195s revolution
    color: '#E9D5FF',
    glowColor: 'rgba(232, 213, 255, 0.30)',
    dotRadius: 3.4,
  },

  // ── Exploration Areas (Outer Orbits, wider paths, slower periods) ──
  {
    id: 'space',
    name: 'Space',
    category: 'exploration',
    rx: 490,
    ry: 300,
    tiltDeg: 7,
    initialAngle: 1.05, // ~60° upper-right
    speed: 0.020, // ~314s revolution
    color: '#F4A7BB',
    glowColor: 'rgba(244, 167, 187, 0.22)',
    dotRadius: 2.4,
  },
  {
    id: 'scientific-ml',
    name: 'Scientific ML',
    category: 'exploration',
    rx: 400,
    ry: 245,
    tiltDeg: -10,
    initialAngle: 2.65, // ~151° upper-left
    speed: 0.026, // ~240s revolution
    color: '#D8B4E2',
    glowColor: 'rgba(216, 180, 226, 0.22)',
    dotRadius: 2.4,
  },
  {
    id: 'privacy-ai',
    name: 'Privacy-aware AI',
    category: 'exploration',
    rx: 400,
    ry: 245,
    tiltDeg: -10,
    initialAngle: 4.15, // ~237° lower-left
    speed: 0.026, // ~240s revolution
    color: '#C084FC',
    glowColor: 'rgba(192, 132, 252, 0.22)',
    dotRadius: 2.4,
  },
  {
    id: 'design',
    name: 'Design',
    category: 'exploration',
    rx: 490,
    ry: 300,
    tiltDeg: 7,
    initialAngle: 5.65, // ~323° lower-right
    speed: 0.020, // ~314s revolution
    color: '#E9D5FF',
    glowColor: 'rgba(232, 213, 255, 0.20)',
    dotRadius: 2.4,
  },
]

// ─── Pre-computed Orbit Rings ──────────────────────────────────────────────────

interface OrbitRing {
  id: string
  rx: number
  ry: number
  tiltDeg: number
  stroke: string
  dash: string
  width: number
}

const ORBIT_RINGS: OrbitRing[] = [
  {
    id: 'core-inner',
    rx: 220,
    ry: 140,
    tiltDeg: -6,
    stroke: 'rgba(216, 180, 226, 0.08)',
    dash: '3 8',
    width: 0.8,
  },
  {
    id: 'core-outer',
    rx: 290,
    ry: 180,
    tiltDeg: 4,
    stroke: 'rgba(244, 167, 187, 0.07)',
    dash: '4 10',
    width: 0.8,
  },
  {
    id: 'expl-inner',
    rx: 400,
    ry: 245,
    tiltDeg: -10,
    stroke: 'rgba(216, 180, 226, 0.05)',
    dash: '2 12',
    width: 0.7,
  },
  {
    id: 'expl-outer',
    rx: 490,
    ry: 300,
    tiltDeg: 7,
    stroke: 'rgba(192, 132, 252, 0.04)',
    dash: '2 14',
    width: 0.7,
  },
]

// ─── Mathematical Coordinate Helper ───────────────────────────────────────────

function getOrbitCoords(
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

// ─── Component ────────────────────────────────────────────────────────────────

export default function PersonalSolarSystem() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const nodeRefs = useRef<{ [key: string]: SVGGElement | null }>({})
  const coordsRef = useRef<{ [key: string]: { x: number; y: number } }>({})

  // Parallax lerp state
  const mouseRef = useRef({ x: 0, y: 0, currentX: 0, currentY: 0 })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let rafId: number
    const startTime = performance.now()

    // Mouse movement listener for subtle holographic depth
    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseRef.current.x = (e.clientX - cx) * 0.012
      mouseRef.current.y = (e.clientY - cy) * 0.012
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000 // elapsed seconds

      // 1. Subtle mouse parallax lerp
      const m = mouseRef.current
      m.currentX += (m.x - m.currentX) * 0.05
      m.currentY += (m.y - m.currentY) * 0.05

      if (svgRef.current) {
        svgRef.current.style.transform = `translate3d(${m.currentX.toFixed(1)}px, ${m.currentY.toFixed(1)}px, 0)`
      }

      // 2. Continuous Keplerian orbital travel
      PLANETS.forEach((planet) => {
        const el = nodeRefs.current[planet.id]
        if (!el) return

        // If reduced motion, keep initial angle
        const angle = mq.matches
          ? planet.initialAngle
          : planet.initialAngle + elapsed * planet.speed

        const { x, y } = getOrbitCoords(
          angle,
          planet.rx,
          planet.ry,
          planet.tiltDeg
        )

        coordsRef.current[planet.id] = { x, y }

        // Translate the planet group
        el.setAttribute('transform', `translate(${x.toFixed(1)}, ${y.toFixed(1)})`)

        // Dynamically adjust text position & anchor so it always points outward
        const textElements = el.querySelectorAll<SVGTextElement>('text')
        const isRightSide = x >= 0
        const dx = isRightSide ? 9 : -9
        const anchor = isRightSide ? 'start' : 'end'

        textElements.forEach((textEl) => {
          textEl.setAttribute('x', dx.toString())
          textEl.setAttribute('text-anchor', anchor)
        })
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
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-[740px] sm:w-[940px] md:w-[1140px] lg:w-[1260px] h-[480px] sm:h-[600px] md:h-[700px] lg:h-[760px]"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        viewBox="-580 -340 1160 680"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full will-change-transform"
      >
        <defs>
          {/* Faint sun/central star glow around Shivangi's name */}
          <radialGradient id="sunCentralAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4A7BB" stopOpacity="0.08" />
            <stop offset="40%" stopColor="#C084FC" stopOpacity="0.03" />
            <stop offset="85%" stopColor="#0B0812" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central aura representing the sun */}
        <ellipse
          cx="0"
          cy="0"
          rx="180"
          ry="110"
          fill="url(#sunCentralAura)"
        />

        {/* ── Orbital rings ── */}
        {ORBIT_RINGS.map((ring) => (
          <ellipse
            key={ring.id}
            cx="0"
            cy="0"
            rx={ring.rx}
            ry={ring.ry}
            transform={`rotate(${ring.tiltDeg})`}
            fill="none"
            stroke={ring.stroke}
            strokeWidth={ring.width}
            strokeDasharray={ring.dash}
            strokeLinecap="round"
          />
        ))}

        {/* ── Planet Nodes ── */}
        {PLANETS.map((planet) => {
          const isHovered = hoveredId === planet.id
          const isCore = planet.category === 'core'

          return (
            <g
              key={planet.id}
              ref={(el) => (nodeRefs.current[planet.id] = el)}
              className="pointer-events-auto cursor-pointer"
              onMouseEnter={() => setHoveredId(planet.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Outer soft halo */}
              <circle
                cx="0"
                cy="0"
                r={isHovered ? planet.dotRadius * 3.2 : planet.dotRadius * 2}
                fill={planet.glowColor}
                className="transition-all duration-300"
              />

              {/* Interactive ping ring on hover */}
              {isHovered && (
                <circle
                  cx="0"
                  cy="0"
                  r={planet.dotRadius * 2.6}
                  fill="none"
                  stroke={planet.color}
                  strokeWidth="0.75"
                  opacity="0.8"
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

              {/* Interactive category micro-badge on hover */}
              {isHovered && (
                <text
                  y="-9"
                  x="9"
                  textAnchor="start"
                  fill="#FFB7D5"
                  fontSize="7.5"
                  fontFamily="'Inter', system-ui, sans-serif"
                  fontWeight="500"
                  letterSpacing="0.12em"
                  className="uppercase select-none pointer-events-none"
                >
                  ✦ {isCore ? 'Core' : 'Exploring'}
                </text>
              )}

              {/* Main Node label */}
              <text
                y="3.5"
                x="9"
                textAnchor="start"
                fill={
                  isHovered
                    ? '#FFFFFF'
                    : isCore
                    ? '#E9D5FF'
                    : 'rgba(216, 180, 226, 0.55)'
                }
                fillOpacity={isHovered ? 1 : isCore ? 0.85 : 0.55}
                fontSize={isCore ? '10.5' : '9'}
                fontFamily="'Inter', system-ui, sans-serif"
                fontWeight={isCore ? '500' : '400'}
                fontStyle={isCore ? 'normal' : 'italic'}
                letterSpacing={isCore ? '0.12em' : '0.08em'}
                className={`select-none uppercase tracking-wider transition-all duration-200 ${
                  isCore ? '' : 'hidden sm:inline'
                }`}
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
