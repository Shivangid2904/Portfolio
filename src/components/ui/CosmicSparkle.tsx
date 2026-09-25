import React from 'react'

interface CosmicSparkleProps {
  size?: number
  className?: string
  style?: React.CSSProperties
  twinkle?: 'slow' | 'gentle' | 'none'
  color?: string
}

export default function CosmicSparkle({
  size = 14,
  className = '',
  style,
  twinkle = 'gentle',
  color = 'currentColor',
}: CosmicSparkleProps) {
  const animClass =
    twinkle === 'slow'
      ? 'animate-twinkle-slow'
      : twinkle === 'gentle'
      ? 'animate-twinkle-gentle'
      : ''

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={`pointer-events-none select-none inline-block ${animClass} ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path d="M 12 0 Q 12 12 24 12 Q 12 12 12 24 Q 12 12 0 12 Q 12 12 12 0 Z" />
    </svg>
  )
}
