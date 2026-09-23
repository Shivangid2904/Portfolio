import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

interface TimelineItem {
  emoji: string
  title: string
  subtitle: string
  period: string
  note?: string
  bullets?: string[]
  tag?: string
}

const timeline: TimelineItem[] = [
  {
    emoji: '🎓',
    title: 'SRM University-AP',
    subtitle: 'B.Tech — Computer Science & Engineering, AI & ML Specialisation',
    period: '2023 — May 2027 (expected)',
    note: 'CGPA: 9.24 / 10',
    tag: 'Education',
  },
  {
    emoji: '☁️',
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Amazon Web Services',
    period: '2026',
    tag: 'Certification',
  },
  {
    emoji: '🌷',
    title: 'Convenor — Smart Tech Club',
    subtitle: 'SRM University-AP',
    period: 'August 2025 – May 2026',
    bullets: [
      'Led the student technical community and club initiatives as Convenor',
      'Organised technical workshops covering AI/ML, Cloud, and Cybersecurity',
      'Hosted campus hackathons and collaborative sessions for students to explore and build together',
    ],
    tag: 'Leadership',
  },
  {
    emoji: '🎨',
    title: 'Design Intern — Back and Forth Pvt. Ltd.',
    subtitle: 'Unipool (ride-sharing product)',
    period: 'May – July 2025',
    bullets: [
      'Designed and developed Unipool\'s ride-sharing prototype interface',
      'Built reusable UI components with HTML, CSS, and Tailwind CSS',
      'Translated user-centered design requirements into responsive web pages',
    ],
    tag: 'Experience',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 px-6" aria-label="Experience and journey">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="My Journey"
          accent="✦ journey"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-pink-soft/20 via-lavender/15 to-transparent md:left-8" aria-hidden="true" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full border border-pink-soft/30 bg-deep flex items-center justify-center md:left-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-soft/60" />
                </div>

                {/* Content */}
                <div className="bg-card border border-lavender/10 rounded-2xl p-5 md:p-6 hover:border-lavender/20 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl" aria-hidden="true">{item.emoji}</span>
                      <div>
                        <h3 className="font-display text-xl text-purple-lilac font-medium leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm text-lavender/55">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      {item.tag && (
                        <span className="font-body text-xs px-2.5 py-0.5 rounded-full border border-lavender/15 text-lavender/40">
                          {item.tag}
                        </span>
                      )}
                      <span className="font-body text-xs text-lavender/35">{item.period}</span>
                    </div>
                  </div>

                  {item.bullets && (
                    <ul className="mt-3 space-y-1.5 list-none">
                      {item.bullets.map((bullet, bi) => (
                        <li key={bi} className="font-body text-sm text-lavender/55 flex gap-2.5">
                          <span className="text-pink-soft/50 mt-0.5 flex-shrink-0">✦</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.note && (
                    <p className="mt-3 font-body text-xs text-lavender/35 italic">{item.note}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
