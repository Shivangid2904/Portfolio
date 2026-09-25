import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Things I've Built"
          subtitle="a few things I've sent into orbit ✦"
          accent="✦ projects"
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Note about in-progress */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 font-body text-xs text-lavender/30 text-center italic"
        >
          Projects marked IN PROGRESS are still being developed — their current status is shown honestly, without claiming unfinished work as complete.
        </motion.p>
      </div>
    </section>
  )
}
