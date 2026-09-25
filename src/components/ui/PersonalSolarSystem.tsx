import { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
//  DESIGN SYSTEM
//  SVG viewBox: 1400 × 900, origin at center (−700 to +700 x, −450 to +450 y)
//  Safe zone (hero text column): x ∈ [−310, +310], y ∈ [−250, +250]
//
//  Orbits are genuine ellipses in SVG coordinates.
//  Planets travel along them via RAF; no conflicting CSS transform chains.
//  Labels counter-rotate so they are ALWAYS upright.
//  Tooltip appears beside the planet, auto-choosing left/right of center.
// ─────────────────────────────────────────────────────────────────────────────

// SVG coordinate space
const VW = 1400
const VH = 900
const CX = 0    // center x in viewBox coords (SVG uses translate)
const CY = -30  // center y — shifted slightly up so text sits above mid

// ─── Orbit definitions ────────────────────────────────────────────────────────
// Each orbit is an axis-aligned ellipse. We tilt slightly via SVG rotate.
const ORBITS = {
  inner: { rx: 290, ry: 155, tilt: -4,  dash: '5 10',  strokeOpacity: 0.13, label: 'CAREER FOCUS'         },
  mid:   { rx: 430, ry: 228, tilt:  5,  dash: '4 12',  strokeOpacity: 0.09, label: 'TECHNICAL EXPLORATION' },
  outer: { rx: 600, ry: 318, tilt: -8,  dash: '3 15',  strokeOpacity: 0.06, label: 'BEYOND THE CORE'       },
}

// ─── Planet definitions ───────────────────────────────────────────────────────
interface PlanetDef {
  id: string
  label: string
  orbit: 'inner' | 'mid' | 'outer'
  angle0: number   // initial angle in radians (0 = right, CCW)
  speed: number    // rad/s (positive = CCW)
  color: string
  glow: string
  r: number        // dot radius
  category: string // tooltip category line
  showLabel: boolean // show ambient label (non-hover)
  mobileHidden: boolean
}

const PLANETS: PlanetDef[] = [
  // ── INNER: Career Focus ──
  {
    id: 'ai-ml',
    label: 'AI / ML',
    orbit: 'inner',
    angle0: 0.4,           // ~23° — upper right flank
    speed: 0.012,          // ~524s revolution
    color: '#F4A7BB',
    glow: 'rgba(244,167,187,0.5)',
    r: 4.5,
    category: 'CAREER FOCUS',
    showLabel: true,
    mobileHidden: false,
  },
  {
    id: 'data',
    label: 'DATA',
    orbit: 'inner',
    angle0: 2.1,           // ~120° — upper left flank
    speed: 0.012,
    color: '#E9D5FF',
    glow: 'rgba(232,213,255,0.5)',
    r: 4.2,
    category: 'CAREER FOCUS',
    showLabel: true,
    mobileHidden: false,
  },
  {
    id: 'cloud',
    label: 'CLOUD',
    orbit: 'inner',
    angle0: 3.85,          // ~220° — lower left, below center
    speed: 0.012,
    color: '#D8B4E2',
    glow: 'rgba(216,180,226,0.5)',
    r: 4.2,
    category: 'CAREER FOCUS',
    showLabel: true,
    mobileHidden: false,
  },

  // ── MIDDLE: Technical Exploration ──
  {
    id: 'engineering',
    label: 'ENGINEERING',
    orbit: 'mid',
    angle0: 5.5,           // ~315° — lower right
    speed: 0.008,          // ~785s revolution
    color: '#E9D5FF',
    glow: 'rgba(232,213,255,0.45)',
    r: 3.8,
    category: 'TECHNICAL EXPLORATION',
    showLabel: true,
    mobileHidden: false,
  },
  {
    id: 'scientific-ml',
    label: 'SCIENTIFIC ML',
    orbit: 'mid',
    angle0: 1.7,           // ~97° — upper left
    speed: 0.008,
    color: '#D8B4E2',
    glow: 'rgba(216,180,226,0.4)',
    r: 3.6,
    category: 'TECHNICAL EXPLORATION',
    showLabel: true,
    mobileHidden: false,
  },
  {
    id: 'space-data',
    label: 'SPACE DATA',
    orbit: 'mid',
    angle0: 4.3,           // ~246° — lower left
    speed: 0.008,
    color: '#F4A7BB',
    glow: 'rgba(244,167,187,0.4)',
    r: 3.6,
    category: 'TECHNICAL EXPLORATION',
    showLabel: false,      // ambient label hidden; tooltip only
    mobileHidden: true,
  },

  // ── OUTER: Beyond the Core ──
  {
    id: 'space',
    label: 'SPACE',
    orbit: 'outer',
    angle0: 0.9,           // ~52° — upper right
    speed: 0.005,          // ~1257s revolution
    color: '#F4A7BB',
    glow: 'rgba(244,167,187,0.35)',
    r: 3.0,
    category: 'BEYOND THE CORE',
    showLabel: false,
    mobileHidden: true,
  },
  {
    id: 'design',
    label: 'DESIGN',
    orbit: 'outer',
    angle0: 3.5,           // ~200° — lower left
    speed: 0.005,
    color: '#C084FC',
    glow: 'rgba(192,132,252,0.35)',
    r: 3.0,
    category: 'BEYOND THE CORE',
    showLabel: false,
    mobileHidden: true,
  },
  {
    id: 'research',
    label: 'RESEARCH',
    orbit: 'outer',
    angle0: 5.1,           // ~292° — lower right
    speed: 0.005,
    color: '#D8B4E2',
    glow: 'rgba(216,180,226,0.30)',
    r: 2.8,
    category: 'BEYOND THE CORE',
    showLabel: false,
    mobileHidden: true,
  },
]

// ─── Maths helpers ────────────────────────────────────────────────────────────

function ellipsePoint(angle: number, rx: number, ry: number, tiltDeg: number) {
  // Point on axis-aligned ellipse, then rotated by tilt
  const x0 = rx * Math.cos(angle)
  const y0 = ry * Math.sin(angle)
  const t = (tiltDeg * Math.PI) / 180
  return {
    x: x0 * Math.cos(t) - y0 * Math.sin(t),
    y: x0 * Math.sin(t) + y0 * Math.cos(t),
  }
}


// ─── Tooltip component ────────────────────────────────────────────────────────
interface TooltipProps {
  planet: PlanetDef
  px: number // SVG x
  py: number // SVG y
}
function Tooltip({ planet, px, py }: TooltipProps) {
  // Decide which side to render the tooltip on
  const onRight = px >= 0
  const tipW = 140
  const tipH = 52
  const gap = 14
  const tx = onRight ? px + planet.r + gap : px - planet.r - gap - tipW
  const ty = py - tipH / 2

  return (
    <g>
      {/* Glass backdrop */}
      <rect
        x={tx}
        y={ty}
        width={tipW}
        height={tipH}
        rx="6"
        ry="6"
        fill="rgba(11,8,18,0.85)"
        stroke={planet.color}
        strokeWidth="0.6"
        strokeOpacity="0.5"
        filter="url(#tipGlow)"
      />
      {/* Category line */}
      <text
        x={tx + tipW / 2}
        y={ty + 16}
        textAnchor="middle"
        fill={planet.color}
        fontSize="7.5"
        fontFamily="'Inter', system-ui, sans-serif"
        fontWeight="600"
        letterSpacing="0.14em"
        fillOpacity="0.9"
      >
        {planet.category}
      </text>
      {/* Label line */}
      <text
        x={tx + tipW / 2}
        y={ty + 33}
        textAnchor="middle"
        fill="#E9D5FF"
        fontSize="10"
        fontFamily="'Inter', system-ui, sans-serif"
        fontWeight="500"
        letterSpacing="0.08em"
        fillOpacity="0.95"
      >
        {planet.label}
      </text>
    </g>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PersonalSolarSystem() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  // Store computed positions for tooltip rendering (SVG coords)
  const posRef = useRef<Record<string, { x: number; y: number }>>({})
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let raf: number
    const t0 = performance.now()

    function frame(now: number) {
      const elapsed = (now - t0) / 1000 // seconds
      const newPos: Record<string, { x: number; y: number }> = {}

      PLANETS.forEach((p) => {
        const orb = ORBITS[p.orbit]
        const angle = mq.matches ? p.angle0 : p.angle0 + elapsed * p.speed
        const pos = ellipsePoint(angle, orb.rx, orb.ry, orb.tilt)
        newPos[p.id] = { x: pos.x + CX, y: pos.y + CY }

        // Update each planet group directly via DOM for performance
        const el = document.getElementById(`planet-${p.id}`)
        if (el) {
          el.setAttribute('transform', `translate(${(pos.x + CX).toFixed(2)}, ${(pos.y + CY).toFixed(2)})`)
        }

        // Make the inner text upright by counter-rotating
        const labelEl = document.getElementById(`label-${p.id}`)
        if (labelEl) {
          // Labels are in planet-local space, so no extra rotation needed
          // — they are rendered as SVG text whose parent is always at new pos
        }
      })

      posRef.current = newPos
      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Trigger re-render to draw tooltips at correct positions
  useEffect(() => {
    if (hoveredId) {
      const interval = setInterval(() => forceUpdate(n => n + 1), 50)
      return () => clearInterval(interval)
    }
  }, [hoveredId])

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <svg
      ref={svgRef}
      viewBox={`${-VW / 2} ${-VH / 2} ${VW} ${VH}`}
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 3 }}
      aria-hidden="true"
    >
      <defs>
        {/* Subtle glow filter for tooltip */}
        <filter id="tipGlow" x="-10%" y="-20%" width="120%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Planet glow filter */}
        <filter id="planetGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Central sun aura */}
        <radialGradient id="sunAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#F4A7BB" stopOpacity="0.06" />
          <stop offset="50%"  stopColor="#C084FC" stopOpacity="0.025" />
          <stop offset="100%" stopColor="#0B0812" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central sun aura (very subtle, behind orbits) */}
      <ellipse cx={CX} cy={CY} rx="190" ry="120" fill="url(#sunAura)" />

      {/* ── Orbit rings ── */}
      {(Object.keys(ORBITS) as Array<keyof typeof ORBITS>).map((orbitKey) => {
        const orb = ORBITS[orbitKey]
        const isOuterOrMid = orbitKey === 'outer' || orbitKey === 'mid'
        return (
          <ellipse
            key={orbitKey}
            cx={CX}
            cy={CY}
            rx={orb.rx}
            ry={orb.ry}
            transform={`rotate(${orb.tilt}, ${CX}, ${CY})`}
            fill="none"
            stroke="rgba(216,180,226,1)"
            strokeOpacity={orb.strokeOpacity * (isMobile && isOuterOrMid ? 0.5 : 1)}
            strokeWidth="0.8"
            strokeDasharray={orb.dash}
            strokeLinecap="round"
            className={orbitKey === 'outer' ? 'hidden md:block' : ''}
          />
        )
      })}

      {/* ── Planet nodes ── */}
      {PLANETS.map((planet) => {
        if (isMobile && planet.mobileHidden) return null
        const isHovered = hoveredId === planet.id
        const orb = ORBITS[planet.orbit]
        // Initial render position (will be overridden by RAF DOM updates)
        const initPos = ellipsePoint(planet.angle0, orb.rx, orb.ry, orb.tilt)
        const ix = (initPos.x + CX).toFixed(2)
        const iy = (initPos.y + CY).toFixed(2)

        // Determine label anchor direction
        const px = posRef.current[planet.id]?.x ?? initPos.x + CX
        const isRight = px >= 0

        return (
          <g
            key={planet.id}
            id={`planet-${planet.id}`}
            transform={`translate(${ix}, ${iy})`}
            style={{ pointerEvents: 'all', cursor: 'pointer' }}
            role="button"
            aria-label={`${planet.label} — ${planet.category}`}
            tabIndex={0}
            onMouseEnter={() => { setHoveredId(planet.id); forceUpdate(n => n + 1) }}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => { setHoveredId(planet.id); forceUpdate(n => n + 1) }}
            onBlur={() => setHoveredId(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setHoveredId(hoveredId === planet.id ? null : planet.id)
                forceUpdate(n => n + 1)
              }
            }}
          >
            {/* Outer halo */}
            <circle
              cx="0"
              cy="0"
              r={isHovered ? planet.r * 2.8 : planet.r * 1.8}
              fill={planet.glow}
              opacity={isHovered ? 0.7 : 0.45}
            />

            {/* Hover ring pulse */}
            {isHovered && (
              <circle
                cx="0"
                cy="0"
                r={planet.r * 2.2}
                fill="none"
                stroke={planet.color}
                strokeWidth="0.8"
                strokeOpacity="0.7"
              />
            )}

            {/* Core planet dot */}
            <circle
              cx="0"
              cy="0"
              r={isHovered ? planet.r + 1.2 : planet.r}
              fill={planet.color}
              filter="url(#planetGlow)"
            />

            {/* Ambient label (non-hover, only for planets with showLabel=true) */}
            {planet.showLabel && !isHovered && (
              <text
                x={isRight ? planet.r + 8 : -(planet.r + 8)}
                y="4"
                textAnchor={isRight ? 'start' : 'end'}
                fill="#E9D5FF"
                fillOpacity="0.65"
                fontSize={planet.orbit === 'inner' ? '10' : '9'}
                fontFamily="'Inter', system-ui, sans-serif"
                fontWeight={planet.orbit === 'inner' ? '500' : '400'}
                letterSpacing="0.1em"
                className="select-none"
              >
                {planet.label}
              </text>
            )}
          </g>
        )
      })}

      {/* ── Tooltips rendered LAST so they appear above planets ── */}
      {hoveredId && (() => {
        const planet = PLANETS.find(p => p.id === hoveredId)
        if (!planet) return null
        const pos = posRef.current[hoveredId]
        if (!pos) return null
        return <Tooltip planet={planet} px={pos.x} py={pos.y} />
      })()}
    </svg>
  )
}
