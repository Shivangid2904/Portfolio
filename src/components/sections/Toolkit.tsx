import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import SkillPill from '../ui/SkillPill'
import CosmicSparkle from '../ui/CosmicSparkle'
import { skillGroups } from '../../data/skills'

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative py-16 sm:py-20 px-6 overflow-hidden" aria-label="Skills and toolkit">
      {/* Subtle cosmic accent in section margin */}
      <CosmicSparkle
        size={13}
        className="absolute top-14 left-8 lg:left-16 text-pink-soft/30 hidden sm:block pointer-events-none"
        twinkle="slow"
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="My Toolkit"
          accent="✦ skills"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="bg-card border border-lavender/10 rounded-2xl p-6 hover:border-lavender/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" aria-hidden="true">{group.emoji}</span>
                <h3 className="font-display text-xl text-purple-lilac font-light">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${group.label} skills`}>
                {group.skills.map((skill) => {
                  const isCore = group.coreSkills?.includes(skill) ?? false
                  return (
                    <div key={skill} role="listitem">
                      <SkillPill
                        label={skill}
                        featured={isCore}
                      />
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend + disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-2.5" aria-label="Skill distinction legend">
            <span className="inline-flex items-center gap-1.5 font-body text-[11px] px-2.5 py-0.5 rounded-full border border-pink-soft/35 bg-pink-soft/8 text-pink-soft font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-soft/80" aria-hidden="true" />
              Core
            </span>
            <span className="font-body text-xs text-lavender/45">= primary focus across projects</span>
          </div>
          <span className="hidden sm:inline font-body text-xs text-lavender/20">·</span>
          <p className="font-body text-xs text-lavender/35 italic text-center">
            More comfortable with some than others — always learning.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

