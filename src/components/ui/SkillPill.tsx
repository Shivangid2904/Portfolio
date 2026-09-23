interface SkillPillProps {
  label: string
  featured?: boolean
}

export default function SkillPill({ label, featured }: SkillPillProps) {
  return (
    <span
      className={`inline-block font-body text-xs px-3 py-1.5 rounded-full border transition-colors ${
        featured
          ? 'border-pink-soft/40 bg-pink-soft/8 text-pink-soft/90'
          : 'border-lavender/15 bg-lavender/5 text-lavender/70 hover:border-lavender/30 hover:text-lavender/90'
      }`}
    >
      {label}
    </span>
  )
}
