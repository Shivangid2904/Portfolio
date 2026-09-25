import { motion, useReducedMotion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '../../data/projects'
import StatusBadge from './StatusBadge'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      whileHover={shouldReduceMotion ? undefined : { y: -3, transition: { duration: 0.18, ease: 'easeOut' } }}
      className="group relative flex flex-col bg-card border border-lavender/10 rounded-2xl p-6 md:p-7 hover:border-pink-soft/25 transition-colors duration-200"
      style={{
        boxShadow: '0 1px 24px rgba(11, 8, 18, 0.5)',
      }}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(244,167,187,0.04) 0%, transparent 70%)' }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">{project.emoji}</span>
          <div>
            <p className="font-body text-xs text-lavender/40 tracking-wide mb-0.5">{project.category}</p>
            <h3 className="font-display text-xl text-purple-lilac font-medium leading-tight">{project.name}</h3>
          </div>
        </div>
        <StatusBadge status={project.status} />
      </div>

      {/* Hook */}
      <p className="font-display text-base italic text-lavender/70 mb-3 leading-relaxed">
        "{project.hook}"
      </p>

      {/* Verified metrics chips — only rendered when verified data exists */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Key project metrics">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              role="listitem"
              className="flex flex-col items-center px-3 py-1.5 rounded-lg border border-lavender/12 bg-lavender/4"
            >
              <span className="font-body text-xs font-semibold text-pink-soft leading-tight">{m.value}</span>
              <span className="font-body text-[10px] text-lavender/40 leading-tight mt-0.5">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="font-body text-sm text-lavender/55 leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Preview screenshot — only rendered when a verified asset exists */}
      {project.previewImg && (
        <div className="mb-5 rounded-xl overflow-hidden border border-lavender/8">
          <img
            src={project.previewImg}
            alt={project.previewAlt ?? `${project.name} preview`}
            className="w-full object-cover"
            style={{ maxHeight: '180px', objectPosition: 'top' }}
            loading="lazy"
          />
        </div>
      )}

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-body text-xs px-2.5 py-1 rounded-full border border-lavender/12 bg-lavender/4 text-lavender/60"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-lavender/8 flex-wrap">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-xs text-lavender/50 hover:text-pink-soft transition-colors duration-200"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-xs font-medium text-pink-soft border border-pink-soft/30 bg-pink-soft/8 rounded-full px-3 py-1 hover:bg-pink-soft/15 transition-colors duration-200"
            aria-label={`${project.demoLabel ?? 'Live demo'} for ${project.name}`}
          >
            <ExternalLink size={13} />
            {project.demoLabel ?? 'Live Demo'}
          </a>
        )}
        <span className="ml-auto font-body text-xs text-lavender/30">{project.period}</span>
      </div>
    </motion.article>
  )
}

