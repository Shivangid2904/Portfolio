import { useEffect, useState } from 'react'

// ─── Solar System Configuration ───────────────────────────────────────────────
// Three subtle elliptical orbit rings centered on "Shivangi Dubey"
// Inner Orbit: AI / ML, Data
// Middle Orbit: Cloud, Engineering, Space
// Outer Orbit: Design, Scientific ML (hidden on mobile to prevent crowding)

export default function PersonalSolarSystem() {
  const [scale, setScale] = useState(1)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 480) {
        setScale(0.44) // Mobile: compact scale to prevent overflow
      } else if (w < 640) {
        setScale(0.54) // Phablet
      } else if (w < 768) {
        setScale(0.66) // Small tablet
      } else if (w < 1024) {
        setScale(0.80) // Tablet
      } else if (w < 1280) {
        setScale(0.92) // Small desktop / laptop
      } else {
        setScale(1.0)  // Full desktop
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none flex items-center justify-center"
      style={{
        zIndex: 2,
        width: 'min(82vw, 940px)',
        height: 'min(54vh, 480px)',
        maxWidth: '940px',
        maxHeight: '480px',
      }}
      aria-hidden="true"
    >
      {/* Scaled responsive wrapper */}
      <div
        className="relative flex items-center justify-center transition-transform duration-300"
        style={{
          transform: `scale(${scale})`,
          width: '920px',
          height: '520px',
        }}
      >
        {/* Central Sun Aura right behind the name */}
        <div
          className="absolute w-56 h-36 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(244,167,187,0.06) 0%, rgba(192,132,252,0.03) 45%, transparent 70%)',
            filter: 'blur(24px)',
            zIndex: 1,
          }}
        />

        {/* 3D Elliptical Projection Plane (scaleY transforms circular tracks into orbits) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: 'scaleY(0.55)',
            transformOrigin: 'center center',
          }}
        >
          {/* ═══════════════════════════════════════════════════════════════════
              1. INNER ORBIT (AI / ML & Data)
              Diameter: 420px (Visual width 420px, height ~231px)
             ═══════════════════════════════════════════════════════════════════ */}
          <div
            className="absolute rounded-full pointer-events-none animate-orbit-inner"
            style={{
              width: '420px',
              height: '420px',
              top: '50%',
              left: '50%',
              border: '1px dashed rgba(216, 180, 226, 0.15)',
              boxShadow: '0 0 15px rgba(216, 180, 226, 0.03)',
            }}
          >
            {/* Planet: AI / ML (Angle: 15° — upper-right) */}
            <div
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: 'calc(50% + 203px)',
                top: 'calc(50% + 54px)',
              }}
              onMouseEnter={() => setHoveredNode('ai-ml')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="animate-counter-inner">
                <div className="flex items-center gap-2 group -translate-x-3 -translate-y-3">
                  {/* Glowing Planet Dot */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className="w-2.5 h-2.5 rounded-full bg-[#F4A7BB] transition-transform duration-200 group-hover:scale-125"
                      style={{
                        boxShadow:
                          hoveredNode === 'ai-ml'
                            ? '0 0 12px 2px rgba(244, 167, 187, 0.8)'
                            : '0 0 6px 1px rgba(244, 167, 187, 0.45)',
                      }}
                    />
                    {hoveredNode === 'ai-ml' && (
                      <div className="absolute w-5 h-5 rounded-full border border-[#F4A7BB]/60 animate-ping" />
                    )}
                  </div>
                  {/* Label */}
                  <span
                    className={`font-body text-[10px] sm:text-[11px] font-medium uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                      hoveredNode === 'ai-ml'
                        ? 'text-white drop-shadow-[0_0_8px_rgba(244,167,187,0.8)]'
                        : 'text-purple-lilac/85'
                    }`}
                  >
                    AI / ML
                  </span>
                </div>
              </div>
            </div>

            {/* Planet: Data (Angle: 195° — lower-left) */}
            <div
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: 'calc(50% - 203px)',
                top: 'calc(50% - 54px)',
              }}
              onMouseEnter={() => setHoveredNode('data')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="animate-counter-inner">
                <div className="flex flex-row-reverse items-center gap-2 group -translate-x-full -translate-y-3">
                  {/* Glowing Planet Dot */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className="w-2.5 h-2.5 rounded-full bg-[#E9D5FF] transition-transform duration-200 group-hover:scale-125"
                      style={{
                        boxShadow:
                          hoveredNode === 'data'
                            ? '0 0 12px 2px rgba(232, 213, 255, 0.8)'
                            : '0 0 6px 1px rgba(232, 213, 255, 0.45)',
                      }}
                    />
                    {hoveredNode === 'data' && (
                      <div className="absolute w-5 h-5 rounded-full border border-[#E9D5FF]/60 animate-ping" />
                    )}
                  </div>
                  {/* Label */}
                  <span
                    className={`font-body text-[10px] sm:text-[11px] font-medium uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                      hoveredNode === 'data'
                        ? 'text-white drop-shadow-[0_0_8px_rgba(232,213,255,0.8)]'
                        : 'text-purple-lilac/85'
                    }`}
                  >
                    Data
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              2. MIDDLE ORBIT (Cloud, Engineering, Space)
              Diameter: 650px (Visual width 650px, height ~357px)
             ═══════════════════════════════════════════════════════════════════ */}
          <div
            className="absolute rounded-full pointer-events-none animate-orbit-mid"
            style={{
              width: '650px',
              height: '650px',
              top: '50%',
              left: '50%',
              border: '1px dashed rgba(244, 167, 187, 0.10)',
              boxShadow: '0 0 20px rgba(244, 167, 187, 0.02)',
            }}
          >
            {/* Planet: Space (Angle: 25° — upper-right) */}
            <div
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: 'calc(50% + 294px)',
                top: 'calc(50% + 137px)',
              }}
              onMouseEnter={() => setHoveredNode('space')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="animate-counter-mid">
                <div className="flex items-center gap-2 group -translate-x-3 -translate-y-3">
                  <div className="relative flex items-center justify-center">
                    <div
                      className="w-2 h-2 rounded-full bg-[#F4A7BB] transition-transform duration-200 group-hover:scale-125"
                      style={{
                        boxShadow:
                          hoveredNode === 'space'
                            ? '0 0 10px 2px rgba(244, 167, 187, 0.7)'
                            : '0 0 5px 1px rgba(244, 167, 187, 0.35)',
                      }}
                    />
                  </div>
                  <span
                    className={`font-body text-[9.5px] sm:text-[10px] font-medium uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                      hoveredNode === 'space'
                        ? 'text-white drop-shadow-[0_0_8px_rgba(244,167,187,0.7)]'
                        : 'text-lavender/75'
                    }`}
                  >
                    Space
                  </span>
                </div>
              </div>
            </div>

            {/* Planet: Cloud (Angle: 145° — upper-left) */}
            <div
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: 'calc(50% - 266px)',
                top: 'calc(50% + 186px)',
              }}
              onMouseEnter={() => setHoveredNode('cloud')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="animate-counter-mid">
                <div className="flex flex-row-reverse items-center gap-2 group -translate-x-full -translate-y-3">
                  <div className="relative flex items-center justify-center">
                    <div
                      className="w-2 h-2 rounded-full bg-[#D8B4E2] transition-transform duration-200 group-hover:scale-125"
                      style={{
                        boxShadow:
                          hoveredNode === 'cloud'
                            ? '0 0 10px 2px rgba(216, 180, 226, 0.7)'
                            : '0 0 5px 1px rgba(216, 180, 226, 0.35)',
                      }}
                    />
                  </div>
                  <span
                    className={`font-body text-[9.5px] sm:text-[10px] font-medium uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                      hoveredNode === 'cloud'
                        ? 'text-white drop-shadow-[0_0_8px_rgba(216,180,226,0.7)]'
                        : 'text-lavender/75'
                    }`}
                  >
                    Cloud
                  </span>
                </div>
              </div>
            </div>

            {/* Planet: Engineering (Angle: 265° — lower) */}
            <div
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: 'calc(50% - 28px)',
                top: 'calc(50% - 323px)',
              }}
              onMouseEnter={() => setHoveredNode('engineering')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="animate-counter-mid">
                <div className="flex items-center gap-2 group -translate-x-1/2 -translate-y-full">
                  <div className="relative flex items-center justify-center">
                    <div
                      className="w-2 h-2 rounded-full bg-[#E9D5FF] transition-transform duration-200 group-hover:scale-125"
                      style={{
                        boxShadow:
                          hoveredNode === 'engineering'
                            ? '0 0 10px 2px rgba(232, 213, 255, 0.7)'
                            : '0 0 5px 1px rgba(232, 213, 255, 0.35)',
                      }}
                    />
                  </div>
                  <span
                    className={`font-body text-[9.5px] sm:text-[10px] font-medium uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                      hoveredNode === 'engineering'
                        ? 'text-white drop-shadow-[0_0_8px_rgba(232,213,255,0.7)]'
                        : 'text-lavender/75'
                    }`}
                  >
                    Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              3. OUTER ORBIT (Scientific ML & Design)
              Diameter: 880px (Visual width 880px, height ~484px)
              Automatically hidden on mobile (< 768px) to prevent crowding
             ═══════════════════════════════════════════════════════════════════ */}
          <div
            className="hidden md:block absolute rounded-full pointer-events-none animate-orbit-outer"
            style={{
              width: '880px',
              height: '880px',
              top: '50%',
              left: '50%',
              border: '1px dashed rgba(192, 132, 252, 0.07)',
            }}
          >
            {/* Planet: Scientific ML (Angle: 160° — left flank) */}
            <div
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: 'calc(50% - 413px)',
                top: 'calc(50% + 150px)',
              }}
              onMouseEnter={() => setHoveredNode('scientific-ml')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="animate-counter-outer">
                <div className="flex flex-row-reverse items-center gap-1.5 group -translate-x-full -translate-y-3">
                  <div className="relative flex items-center justify-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-[#D8B4E2] transition-transform duration-200 group-hover:scale-125"
                      style={{
                        boxShadow:
                          hoveredNode === 'scientific-ml'
                            ? '0 0 8px 1px rgba(216, 180, 226, 0.6)'
                            : '0 0 4px 1px rgba(216, 180, 226, 0.25)',
                      }}
                    />
                  </div>
                  <span
                    className={`font-body text-[9px] italic tracking-wide whitespace-nowrap transition-colors duration-200 ${
                      hoveredNode === 'scientific-ml'
                        ? 'text-white drop-shadow-[0_0_6px_rgba(216,180,226,0.7)]'
                        : 'text-lavender/55'
                    }`}
                  >
                    Scientific ML
                  </span>
                </div>
              </div>
            </div>

            {/* Planet: Design (Angle: 340° — right flank) */}
            <div
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: 'calc(50% + 413px)',
                top: 'calc(50% - 150px)',
              }}
              onMouseEnter={() => setHoveredNode('design')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="animate-counter-outer">
                <div className="flex items-center gap-1.5 group -translate-x-2 -translate-y-3">
                  <div className="relative flex items-center justify-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-[#C084FC] transition-transform duration-200 group-hover:scale-125"
                      style={{
                        boxShadow:
                          hoveredNode === 'design'
                            ? '0 0 8px 1px rgba(192, 132, 252, 0.6)'
                            : '0 0 4px 1px rgba(192, 132, 252, 0.25)',
                      }}
                    />
                  </div>
                  <span
                    className={`font-body text-[9px] italic tracking-wide whitespace-nowrap transition-colors duration-200 ${
                      hoveredNode === 'design'
                        ? 'text-white drop-shadow-[0_0_6px_rgba(192,132,252,0.7)]'
                        : 'text-lavender/55'
                    }`}
                  >
                    Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
