import { useEffect, useRef, useMemo } from 'react'

// ─── Deterministic Seeded Pseudo-Random Generator (LCG) ───────────────────────
// Given a seed string or number, generates identical sequences without React re-render shifts.

function hashSeed(seed: string | number): number {
  if (typeof seed === 'number') return seed
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (Math.imul(31, hash) + seed.charCodeAt(i)) >>> 0
  }
  return hash || 1
}

function createLcg(seedVal: number) {
  let s = (seedVal >>> 0) || 1
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967295
  }
}

// ─── Color Palette Helpers ────────────────────────────────────────────────────
const C_LAVENDER = (a: number) => `rgba(216,180,226,${a.toFixed(3)})`
const C_LILAC    = (a: number) => `rgba(232,213,255,${a.toFixed(3)})`
const C_PINK     = (a: number) => `rgba(244,167,187,${a.toFixed(3)})`
const C_SLATE    = (a: number) => `rgba(150,130,170,${a.toFixed(3)})`

// ─── Types ────────────────────────────────────────────────────────────────────

interface MicroDot {
  x: number
  y: number
  r: number
  opacity: number
  color: string
}

interface RockPolygon {
  points: string
  opacity: number
  strokeOpacity: number
}

interface BeltData {
  hazeId: string
  microDots: MicroDot[]
  debris: MicroDot[]
  rocks: RockPolygon[]
}

// ─── Belt Generation Function ─────────────────────────────────────────────────

function generateBeltData(seedStr: string): BeltData {
  const seedNum = hashSeed(seedStr)
  const rng = createLcg(seedNum)

  // 1. Micro-stardust (36 tiny specks)
  const microDots: MicroDot[] = Array.from({ length: 36 }, () => {
    const isPink = rng() > 0.84
    const isLilac = rng() > 0.5
    const op = rng() * 0.14 + 0.05
    return {
      x: rng() * 1180 + 10,
      y: rng() * 48 + 11,
      r: rng() * 0.8 + 0.35,
      opacity: op,
      color: isPink ? C_PINK(op) : isLilac ? C_LILAC(op) : C_LAVENDER(op),
    }
  })

  // 2. Debris particles (28 slightly denser specks)
  const debris: MicroDot[] = Array.from({ length: 28 }, () => {
    const op = rng() * 0.16 + 0.07
    return {
      x: rng() * 1160 + 20,
      y: rng() * 42 + 14,
      r: rng() * 1.1 + 0.6,
      opacity: op,
      color: C_SLATE(op),
    }
  })

  // 3. Miniature irregular space rocks (7 small faceted rock silhouettes)
  const rocks: RockPolygon[] = Array.from({ length: 7 }, (_, i) => {
    // Distribute rocks across the horizontal belt with jitter
    const segmentWidth = 1100 / 7
    const cx = 50 + i * segmentWidth + (rng() - 0.5) * (segmentWidth * 0.6)
    const cy = rng() * 32 + 19
    const baseR = rng() * 1.5 + 2.2 // 2.2px to 3.7px: small, subtle, never huge
    const numVerts = Math.floor(rng() * 3) + 5 // 5 to 7 vertices

    const pts: string[] = []
    for (let v = 0; v < numVerts; v++) {
      const angle = (v / numVerts) * Math.PI * 2 + rng() * 0.3
      const radiusVariation = baseR * (0.7 + rng() * 0.5)
      const px = (cx + Math.cos(angle) * radiusVariation).toFixed(1)
      const py = (cy + Math.sin(angle) * (radiusVariation * 0.75)).toFixed(1)
      pts.push(`${px},${py}`)
    }

    const op = rng() * 0.12 + 0.08
    return {
      points: pts.join(' '),
      opacity: op,
      strokeOpacity: op * 1.2,
    }
  })

  return {
    hazeId: `belt-haze-${seedStr.replace(/[^a-zA-Z0-9]/g, '-')}`,
    microDots,
    debris,
    rocks,
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

interface SpaceTransitionProps {
  /** Unique seed string to give each section divider distinct particle positioning */
  seed: string
  /** Parallax intensity factor. Kept minimal for subtle depth. Default: 0.025 */
  parallaxSpeed?: number
}

export default function SpaceTransition({
  seed,
  parallaxSpeed = 0.025,
}: SpaceTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  // Generate deterministic belt data once per seed
  const data = useMemo(() => generateBeltData(seed), [seed])

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    let rafId = 0
    let currentY = 0
    let isVisible = false

    const tick = () => {
      if (!isVisible) return

      const rect = container.getBoundingClientRect()
      const screenCenter = window.innerHeight / 2
      const distFromCenter = rect.top - screenCenter
      // Restrained, slow target offset strictly bounded between -10px and +10px
      const targetY = Math.max(-10, Math.min(10, -distFromCenter * parallaxSpeed))

      // Smooth lerp: ~60ms lag
      currentY += (targetY - currentY) * 0.06
      inner.style.transform = `translate3d(0, ${currentY.toFixed(1)}px, 0)`

      rafId = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) {
          cancelAnimationFrame(rafId)
          rafId = requestAnimationFrame(tick)
        } else {
          cancelAnimationFrame(rafId)
        }
      },
      { rootMargin: '120px 0px 120px 0px' }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [parallaxSpeed])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden pointer-events-none select-none my-1 sm:my-2"
      aria-hidden="true"
    >
      <div
        ref={innerRef}
        className="w-full will-change-transform h-[54px] sm:h-[68px]"
      >
        <svg
          viewBox="0 0 1200 70"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id={data.hazeId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D8B4E2" stopOpacity="0.035" />
              <stop offset="50%" stopColor="#C084FC" stopOpacity="0.015" />
              <stop offset="100%" stopColor="#0B0812" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Whisper-thin cosmic dust haze */}
          <ellipse
            cx="600"
            cy="35"
            rx="520"
            ry="22"
            fill={`url(#${data.hazeId})`}
          />

          {/* Fine micro-stardust */}
          {data.microDots.map((d, i) => (
            <circle
              key={`stardust-${i}`}
              cx={d.x}
              cy={d.y}
              r={d.r}
              fill={d.color}
            />
          ))}

          {/* Debris particles */}
          {data.debris.map((d, i) => (
            <circle
              key={`debris-${i}`}
              cx={d.x}
              cy={d.y}
              r={d.r}
              fill={d.color}
            />
          ))}

          {/* Miniature irregular space rocks */}
          {data.rocks.map((r, i) => (
            <polygon
              key={`rock-${i}`}
              points={r.points}
              fill={C_SLATE(r.opacity)}
              stroke={C_LAVENDER(r.strokeOpacity)}
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
