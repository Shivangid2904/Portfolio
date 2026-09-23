import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
  twinkleOffset: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const stars: Star[] = []
    const STAR_COUNT = 160

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      stars.length = 0
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2,
          opacity: Math.random() * 0.6 + 0.1,
          speed: Math.random() * 0.015 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.008

      for (const star of stars) {
        const twinkle = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t + star.twinkleOffset))
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 213, 255, ${star.opacity * twinkle})`
        ctx.fill()
      }

      // Draw a few pink-tinted stars
      for (let i = 0; i < 20; i++) {
        const star = stars[i * 8 % STAR_COUNT]
        const twinkle = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * 1.3 + star.twinkleOffset))
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 1.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(244, 167, 187, ${star.opacity * twinkle * 0.8})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    resize()
    init()

    if (!prefersReduced) {
      draw()
    } else {
      // Draw static version once
      for (const star of stars) {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 213, 255, ${star.opacity})`
        ctx.fill()
      }
    }

    window.addEventListener('resize', () => {
      resize()
      init()
    })

    return () => {
      cancelAnimationFrame(animationId)
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
