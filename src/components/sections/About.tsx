import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import CosmicSparkle from '../ui/CosmicSparkle'

const interests = [
  'machine learning',
  'data analytics',
  'cloud systems',
  'scientific ML',
  'space & astrophysics data',
  'privacy-aware AI',
]

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 px-6 overflow-hidden" aria-label="About Shivangi">
      {/* Delicate celestial accent in whitespace */}
      <CosmicSparkle
        size={13}
        className="absolute top-14 right-8 lg:right-16 text-pink-soft/30 hidden sm:block pointer-events-none"
        twinkle="slow"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="A little about me"
              accent="✦ about"
            />

            <div className="space-y-5 font-body text-[15px] leading-relaxed text-lavender/65">
              <p>
                I'm a Computer Science student at SRM University AP, specialising in AI & Machine Learning.
                My work sits somewhere across ML, data, cloud systems, and occasionally datasets about distant planets.
              </p>
              <p>
                I like building things that start from a question. Not "what can I add to my resume", but
                genuinely, <em className="text-lavender/80 italic">"I wonder if this is possible."</em> That curiosity
                is usually what gets a project started.
              </p>
              <p>
                Right now I'm especially interested in privacy-aware systems, model explainability,
                geospatial data, and scientific ML. I'm also slowly making sense of space mission datasets,
                which is equal parts frustrating and fascinating.
              </p>
              <p>
                Outside of code, I care a lot about interfaces that feel human, which is probably why I ended up
                doing design work at Unipool and served as Convenor of Smart Tech Club.
              </p>
            </div>

            {/* Interests pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="font-body text-xs px-3 py-1.5 rounded-full border border-lavender/15 text-lavender/50 bg-lavender/4"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — quick facts card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-lavender/10 rounded-2xl p-7 space-y-6"
          >
            <h3 className="font-display text-2xl text-purple-lilac font-light">Quick facts ✦</h3>

            <div className="space-y-4">
              {[
                { label: 'Degree', value: 'B.Tech, Computer Science & Engineering' },
                { label: 'Specialisation', value: 'AI & Machine Learning' },
                { label: 'University', value: 'SRM University AP' },
                { label: 'CGPA', value: '9.24 / 10' },
                { label: 'Expected Graduation', value: 'May 2027' },
                { label: 'Certification', value: 'AWS Certified Cloud Practitioner (2026)' },
              ].map((fact) => (
                <div key={fact.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 pb-3 border-b border-lavender/6 last:border-0 last:pb-0">
                  <span className="font-body text-xs text-lavender/35 tracking-wide uppercase w-full sm:w-36 flex-shrink-0">
                    {fact.label}
                  </span>
                  <span className="font-body text-sm text-lavender/75">{fact.value}</span>
                </div>
              ))}
            </div>

            {/* Small decorative element */}
            <div className="pt-2 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-soft/20" />
              <span className="font-body text-xs text-pink-soft/40 tracking-widest">India ✦</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
