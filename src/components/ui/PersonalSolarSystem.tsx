// ─────────────────────────────────────────────────────────────────────────────
//  PERSONAL SOLAR SYSTEM — clean single-center CSS rotation approach
//
//  STRUCTURE:
//    <section>  ← hero (position: relative, overflow: hidden)
//      <div>    ← absolute, inset-0, z-index: 2
//        <div>  ← SINGLE CENTER ANCHOR at left:50%, top:50%
//          <div class="animate-orbit-outer">  ← outer ellipse, centered here
//            ...planets (counter-rotating so labels stay upright)
//          </div>
//          <div class="animate-orbit-inner">  ← inner ellipse, same center
//            ...planets (counter-rotating so labels stay upright)
//          </div>
//        </div>
//      </div>
//
//  PLANET POSITIONING:
//    Each planet is `position: absolute` within its orbit container.
//    It is placed at:  left = (50 + 50*cos(θ))%, top = (50 + 50*sin(θ))%
//    Then a `translate(-50%, -50%)` centers the dot ON the ellipse border.
//    A counter-rotation animation keeps the label visually upright.
//
//  LABEL DIRECTION:
//    cos(θ) >= 0  →  label to the RIGHT of dot
//    cos(θ)  < 0  →  label to the LEFT  of dot (flex-row-reverse)
// ─────────────────────────────────────────────────────────────────────────────

interface PlanetDef {
  id: string
  label: string
  subtitle?: string
  angleDeg: number   // angle on ellipse perimeter, degrees
  color: string
  glow: string
  dotPx: number      // dot diameter in px
}

// ─── Inner orbit: Career Focus (3 planets, 120° apart) ───────────────────────
const INNER_PLANETS: PlanetDef[] = [
  {
    id: 'cloud',
    label: 'CLOUD',
    angleDeg: 270,          // top
    color: '#D8B4E2',
    glow: 'rgba(216,180,226,0.7)',
    dotPx: 10,
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    angleDeg: 30,           // lower-right
    color: '#F4A7BB',
    glow: 'rgba(244,167,187,0.75)',
    dotPx: 11,
  },
  {
    id: 'data',
    label: 'DATA',
    angleDeg: 150,          // lower-left
    color: '#E9D5FF',
    glow: 'rgba(232,213,255,0.7)',
    dotPx: 10,
  },
]

// ─── Outer orbit: Exploration (4 planets, 90° apart) ─────────────────────────
const OUTER_PLANETS: PlanetDef[] = [
  {
    id: 'space',
    label: 'SPACE',
    subtitle: 'Astrophysics & satellite data',
    angleDeg: 315,          // upper-right
    color: '#F4A7BB',
    glow: 'rgba(244,167,187,0.6)',
    dotPx: 8,
  },
  {
    id: 'scientific-ml',
    label: 'SCIENTIFIC ML',
    subtitle: 'Physical sciences + ML',
    angleDeg: 225,          // upper-left
    color: '#D8B4E2',
    glow: 'rgba(216,180,226,0.55)',
    dotPx: 7.5,
  },
  {
    id: 'engineering',
    label: 'ENGINEERING',
    subtitle: 'Systems & software craft',
    angleDeg: 135,          // lower-left
    color: '#E9D5FF',
    glow: 'rgba(232,213,255,0.55)',
    dotPx: 7.5,
  },
  {
    id: 'design',
    label: 'DESIGN',
    subtitle: 'Visual craft & UX',
    angleDeg: 45,           // lower-right
    color: '#C084FC',
    glow: 'rgba(192,132,252,0.55)',
    dotPx: 7.5,
  },
]

// ─── Single Planet component ──────────────────────────────────────────────────
function Planet({
  p,
  counterClass,
}: {
  p: PlanetDef
  counterClass: string
}) {
  const rad = (p.angleDeg * Math.PI) / 180
  const leftPct = 50 + 50 * Math.cos(rad)
  const topPct  = 50 + 50 * Math.sin(rad)

  // Labels go outward: right half → label right; left half → label left
  const labelRight = Math.cos(rad) >= -0.1

  return (
    // Outer wrapper: sits at the ellipse boundary
    <div
      className="absolute"
      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
    >
      {/*
       * Counter-rotating inner wrapper — keeps content upright as orbit spins.
       * translate(-50%, -50%) centers the dot exactly on the ellipse border.
       */}
      <div
        className={`${counterClass} flex items-center select-none`}
        style={{
          transform: 'translate(-50%, -50%)',
          flexDirection: labelRight ? 'row' : 'row-reverse',
          gap: '6px',
          cursor: 'default',
          pointerEvents: 'all',
        }}
      >
        {/* Planet dot + glow */}
        <div
          className="relative flex-shrink-0"
          style={{ width: p.dotPx, height: p.dotPx }}
        >
          <div
            style={{
              width: p.dotPx,
              height: p.dotPx,
              borderRadius: '50%',
              backgroundColor: p.color,
              boxShadow: `0 0 8px 2px ${p.glow}`,
            }}
          />
        </div>

        {/* Label block */}
        <div
          className="flex flex-col whitespace-nowrap"
          style={{ alignItems: labelRight ? 'flex-start' : 'flex-end' }}
        >
          <span
            style={{
              color: p.color,
              opacity: 0.82,
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: "'Inter', system-ui, sans-serif",
              lineHeight: 1.3,
            }}
          >
            {p.label}
          </span>
          {p.subtitle && (
            <span
              style={{
                color: 'rgba(216,180,226,0.42)',
                fontSize: '7px',
                fontFamily: "'Inter', system-ui, sans-serif",
                lineHeight: 1.3,
              }}
              className="hidden sm:block"
            >
              {p.subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function PersonalSolarSystem() {
  return (
    /*
     * Fills the entire hero section.
     * overflow: hidden prevents any orbit fragment escaping section bounds.
     * pointer-events: none so planets don't block text selection.
     */
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 2, pointerEvents: 'none' }}
    >
      {/*
       * SINGLE CENTER ANCHOR — every orbit shares this exact point.
       * left: 50%, top: 50% = geometric center of the hero section.
       * width/height: 0 so it doesn't affect layout.
       */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 0,
          height: 0,
        }}
      >
        {/* ═══════════════════════════════════════════════════════════════════
            OUTER ORBIT
            Desktop:  ~1060 × 570 px  (safe inside 1280px viewport)
            Scales:  clamp(660px, 86vw, 1060px) wide
                     clamp(355px, 55vh, 570px) tall
           ═══════════════════════════════════════════════════════════════════ */}
        <div
          className="animate-orbit-outer"
          style={{
            position: 'absolute',
            width:  'clamp(660px, 86vw, 1060px)',
            height: 'clamp(355px, 55vh, 570px)',
            borderRadius: '50%',
            border: '1px dashed rgba(192,132,252,0.13)',
            boxShadow: '0 0 40px rgba(192,132,252,0.015) inset',
          }}
        >
          {OUTER_PLANETS.map((p) => (
            <Planet key={p.id} p={p} counterClass="animate-counter-outer" />
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            INNER ORBIT
            Desktop:  ~790 × 440 px
            Scales:  clamp(480px, 72vw, 790px) wide
                     clamp(266px, 43vh, 440px) tall
           ═══════════════════════════════════════════════════════════════════ */}
        <div
          className="animate-orbit-inner"
          style={{
            position: 'absolute',
            width:  'clamp(480px, 72vw, 790px)',
            height: 'clamp(266px, 43vh, 440px)',
            borderRadius: '50%',
            border: '1px dashed rgba(216,180,226,0.18)',
            boxShadow: '0 0 30px rgba(216,180,226,0.025) inset',
          }}
        >
          {INNER_PLANETS.map((p) => (
            <Planet key={p.id} p={p} counterClass="animate-counter-inner" />
          ))}
        </div>

        {/* Faint central glow aura behind the hero name */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 'clamp(300px, 42vw, 520px)',
            height: 'clamp(160px, 28vh, 280px)',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(244,167,187,0.06) 0%, rgba(192,132,252,0.025) 55%, transparent 72%)',
            filter: 'blur(28px)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}
