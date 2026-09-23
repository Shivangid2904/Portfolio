import type { ProjectStatus } from '../../data/projects'

interface StatusBadgeProps {
  status: ProjectStatus
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  if (status === 'in-progress') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-body font-medium tracking-wide text-pink-soft border border-pink-soft/30 bg-pink-soft/5 rounded-full px-3 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-pink-soft animate-pulse-soft" />
        IN PROGRESS
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-body font-medium tracking-wide text-lavender/80 border border-lavender/20 bg-lavender/5 rounded-full px-3 py-1">
      <span className="text-lavender">✦</span>
      BUILT
    </span>
  )
}
