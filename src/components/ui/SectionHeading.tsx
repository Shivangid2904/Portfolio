interface SectionHeadingProps {
  title: string
  subtitle?: string
  accent?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  title,
  subtitle,
  accent,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      {accent && (
        <p className="font-body text-xs tracking-[0.2em] uppercase text-pink-soft/70 mb-3">
          {accent}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-purple-lilac font-light leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm text-lavender/50 mt-3 italic">{subtitle}</p>
      )}
      <div className={`mt-4 h-px bg-gradient-to-r from-pink-soft/30 to-transparent ${align === 'center' ? 'mx-auto w-24' : 'w-16'}`} />
    </div>
  )
}
