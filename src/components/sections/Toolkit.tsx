import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { skillGroups } from '../../data/skills'

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative py-28 px-6" aria-label="Skills and toolkit">
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
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-xs px-3 py-1.5 rounded-full border border-lavender/12 bg-lavender/5 text-lavender/65 hover:border-pink-soft/25 hover:text-lavender/85 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 font-body text-xs text-lavender/25 text-center italic"
        >
          I'm more comfortable with some of these than others, always learning.
        </motion.p>
      </div>
    </section>
  )
}
