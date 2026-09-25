interface SkillPillProps {
  label: string
  featured?: boolean
}

export default function SkillPill({ label, featured }: SkillPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-body text-xs px-3 py-1 rounded-full border transition-colors ${
        featured
          ? 'border-pink-soft/35 bg-pink-soft/8 text-pink-soft font-medium shadow-[0_0_10px_rgba(244,180,196,0.06)]'
          : 'border-lavender/15 bg-lavender/5 text-lavender/70 font-normal hover:border-lavender/30 hover:text-lavender/90'
      }`}
      aria-label={featured ? `${label} (Core skill)` : label}
    >
      {featured && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-pink-soft/80 flex-shrink-0"
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
    </span>
  )
}

