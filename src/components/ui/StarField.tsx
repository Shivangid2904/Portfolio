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

    interface SparkleStar {
      x: number
      y: number
      size: number
      opacity: number
      isPink: boolean
      twinkleOffset: number
    }

    const sparkleStars: SparkleStar[] = []
    const SPARKLE_COUNT = 10

    const drawSparkle = (cx: number, cy: number, size: number, isPink: boolean, opacity: number) => {
      ctx.save()
      ctx.fillStyle = isPink ? `rgba(244, 167, 187, ${opacity})` : `rgba(232, 213, 255, ${opacity})`
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

      sparkleStars.length = 0
      for (let i = 0; i < SPARKLE_COUNT; i++) {
        sparkleStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 3,
          opacity: Math.random() * 0.25 + 0.15,
          isPink: i % 3 === 0,
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

      // Draw subtle 4-point sparkle stars
      for (const sp of sparkleStars) {
        const twinkle = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 0.7 + sp.twinkleOffset))
        drawSparkle(sp.x, sp.y, sp.size, sp.isPink, sp.opacity * twinkle)
      }

      animationId = requestAnimationFrame(draw)
    }

    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const star of stars) {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 213, 255, ${star.opacity * 0.7})`
        ctx.fill()
      }
      for (let i = 0; i < 20; i++) {
        const star = stars[(i * 8) % STAR_COUNT]
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 1.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(244, 167, 187, ${star.opacity * 0.6})`
        ctx.fill()
      }
      for (const sp of sparkleStars) {
        drawSparkle(sp.x, sp.y, sp.size, sp.isPink, sp.opacity * 0.5)
      }
    }


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
    init()
    startOrStop()

    const handleResize = () => {
      resize()
      init()
      startOrStop()
    }

    const handleMotionChange = () => {
      startOrStop()
    }

    window.addEventListener('resize', handleResize)
    mediaQuery.addEventListener('change', handleMotionChange)

    return () => {
      cancelAnimationFrame(animationId)
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
