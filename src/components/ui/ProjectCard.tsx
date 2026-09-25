import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '../../data/projects'
import StatusBadge from './StatusBadge'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col bg-card border border-lavender/10 rounded-2xl p-6 md:p-7 hover:border-pink-soft/25 transition-colors duration-300"
      style={{
        boxShadow: '0 1px 24px rgba(11, 8, 18, 0.5)',
      }}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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

      {/* Description */}
      <p className="font-body text-sm text-lavender/55 leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

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
