import { useEffect, useRef } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Star {
  /** Fractional position 0–1 of initial x across viewport width */
  xFrac: number
  /** Fractional position 0–1 of initial y across virtual tall canvas */
  yFrac: number
  radius: number
  opacity: number
  twinkleOffset: number
  /** 0 = most distant (moves least), 1 = mid, 2 = closest (moves most) */
  layer: 0 | 1 | 2
}

interface SparkleStar {
  xFrac: number
  yFrac: number
  size: number
  opacity: number
  isPink: boolean
  twinkleOffset: number
}

// ─── Constants ─────────────────────────────────────────────────────────────────

/** Parallax multiplier per layer (fraction of scrollY added to star y offset).
 *  Extremely small values so the effect is barely perceptible but continuous. */
const PARALLAX_FACTOR = [0.01, 0.022, 0.038] as const

/** On mobile use even gentler parallax */
const PARALLAX_FACTOR_MOBILE = [0.005, 0.012, 0.02] as const

/** Virtual canvas height multiplier: track stars across 3× viewport height for wrapping */
const VIRTUAL_HEIGHT_MULT = 3

const STAR_COUNT = 160
const SPARKLE_COUNT = 10

// ─── Helpers ──────────────────────────────────────────────────────────────────

function randBetween(a: number, b: number) {
  return a + Math.random() * (b - a)
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let scrollY = window.scrollY
    let targetScrollY = scrollY

    const isMobile = () => window.innerWidth < 768

    // Track scroll lazily for smoothness (lerp toward target)
    const onScroll = () => {
      targetScrollY = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── Data stores ──────────────────────────────────────────────────────────
    const stars: Star[] = []
    const sparkleStars: SparkleStar[] = []

    // ── Resize ────────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // ── Init stars ────────────────────────────────────────────────────────────
    const initStars = () => {
      stars.length = 0
      for (let i = 0; i < STAR_COUNT; i++) {
        const layer = (i % 3) as 0 | 1 | 2
        // Smaller radius → farther layer
        const radiusBase =
          layer === 0
            ? randBetween(0.2, 0.7)
            : layer === 1
            ? randBetween(0.5, 1.0)
            : randBetween(0.8, 1.4)

        stars.push({
          xFrac: Math.random(),
          yFrac: Math.random(),
          radius: radiusBase,
          opacity: randBetween(0.12, 0.7),
          twinkleOffset: Math.random() * Math.PI * 2,
          layer,
        })
      }

      sparkleStars.length = 0
      for (let i = 0; i < SPARKLE_COUNT; i++) {
        sparkleStars.push({
          xFrac: Math.random(),
          yFrac: Math.random(),
          size: randBetween(3, 5.5),
          opacity: randBetween(0.15, 0.38),
          isPink: i % 3 === 0,
          twinkleOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    // ── Draw helpers ─────────────────────────────────────────────────────────
    const drawSparkle = (
      cx: number,
      cy: number,
      size: number,
      isPink: boolean,
      opacity: number
    ) => {
      ctx.save()
      ctx.fillStyle = isPink
        ? `rgba(244, 167, 187, ${opacity})`
        : `rgba(232, 213, 255, ${opacity})`
      ctx.beginPath()
      ctx.moveTo(cx, cy - size)
      ctx.quadraticCurveTo(cx, cy, cx + size, cy)
      ctx.quadraticCurveTo(cx, cy, cx, cy + size)
      ctx.quadraticCurveTo(cx, cy, cx - size, cy)
      ctx.quadraticCurveTo(cx, cy, cx, cy - size)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    // ── Main draw loop ────────────────────────────────────────────────────────
    let t = 0
    const factors = isMobile() ? PARALLAX_FACTOR_MOBILE : PARALLAX_FACTOR

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.008

      // Smoothly lerp scroll position (0.08 lerp = ~60fps smooth, ~80ms lag)
      scrollY += (targetScrollY - scrollY) * 0.08

      const W = canvas.width
      const H = canvas.height
      const virtualH = H * VIRTUAL_HEIGHT_MULT

      // ── Stars (parallax depth) ──────────────────────────────────────────────
      for (const star of stars) {
        const parallaxOffset = scrollY * factors[star.layer]
        const rawY = (star.yFrac * virtualH - parallaxOffset) % virtualH
        const screenY = ((rawY % H) + H) % H // wrap to viewport

        const twinkle =
          0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t + star.twinkleOffset))
        ctx.beginPath()
        ctx.arc(star.xFrac * W, screenY, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 213, 255, ${star.opacity * twinkle})`
        ctx.fill()
      }

      // ── Pink-tinted accent stars (layer 2 = closest) ───────────────────────
      for (let i = 0; i < 20; i++) {
        const star = stars[(i * 8) % STAR_COUNT]
        const parallaxOffset = scrollY * factors[2]
        const rawY = (star.yFrac * virtualH - parallaxOffset) % virtualH
        const screenY = ((rawY % H) + H) % H
        const twinkle =
          0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * 1.3 + star.twinkleOffset))
        ctx.beginPath()
        ctx.arc(star.xFrac * W, screenY, star.radius * 1.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(244, 167, 187, ${star.opacity * twinkle * 0.8})`
        ctx.fill()
      }

      // ── Sparkle stars ─────────────────────────────────────────────────────
      for (const sp of sparkleStars) {
        const parallaxOffset = scrollY * factors[2]
        const rawY = (sp.yFrac * virtualH - parallaxOffset) % virtualH
        const screenY = ((rawY % H) + H) % H
        const twinkle =
          0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 0.7 + sp.twinkleOffset))
        drawSparkle(
          sp.xFrac * W,
          screenY,
          sp.size,
          sp.isPink,
          sp.opacity * twinkle
        )
      }

      animationId = requestAnimationFrame(draw)
    }

    // ── Reduced-motion static render ─────────────────────────────────────────
    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const W = canvas.width
      const H = canvas.height
      const virtualH = H * VIRTUAL_HEIGHT_MULT

      for (const star of stars) {
        const rawY = (star.yFrac * virtualH) % H
        ctx.beginPath()
        ctx.arc(star.xFrac * W, rawY, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 213, 255, ${star.opacity * 0.7})`
        ctx.fill()
      }
      for (let i = 0; i < 20; i++) {
        const star = stars[(i * 8) % STAR_COUNT]
        const rawY = (star.yFrac * virtualH) % H
        ctx.beginPath()
        ctx.arc(star.xFrac * W, rawY, star.radius * 1.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(244, 167, 187, ${star.opacity * 0.6})`
        ctx.fill()
      }
      for (const sp of sparkleStars) {
        const rawY = (sp.yFrac * virtualH) % H
        drawSparkle(sp.xFrac * W, rawY, sp.size, sp.isPink, sp.opacity * 0.5)
      }
    }

    // ── Lifecycle ─────────────────────────────────────────────────────────────
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const startOrStop = () => {
      cancelAnimationFrame(animationId)
      if (mediaQuery.matches) {
        drawStatic()
      } else {
        draw()
      }
    }

    resize()
    initStars()
    startOrStop()

    const handleResize = () => {
      resize()
      initStars()
      startOrStop()
    }

    const handleMotionChange = () => {
      startOrStop()
    }

    window.addEventListener('resize', handleResize)
    mediaQuery.addEventListener('change', handleMotionChange)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleResize)
      mediaQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
