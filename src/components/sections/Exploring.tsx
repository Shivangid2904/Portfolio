import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const curiosities = [
  {
    emoji: '🔍',
    title: 'Advanced RAG & retrieval',
    body: "I've been experimenting with different chunking strategies, hybrid dense/sparse retrieval, and what actually makes a RAG pipeline useful vs. just technically functional. IntelliAsk started this, but there's a lot more to figure out.",
  },
  {
    emoji: '🌫️',
    title: 'Model uncertainty and explainability',
    body: "SHAP was my entry point with ExoLife, but I'm curious about calibration, conformal prediction, and how to make ML models honest about what they don't know, especially when the stakes matter.",
  },
  {
    emoji: '🔭',
    title: 'Scientific ML and astrophysics data',
    body: "Something I keep returning to. NASA's exoplanet datasets are strange and beautiful to work with. I'm interested in how ML handles the kinds of uncertainty and class imbalance that come with real scientific data.",
  },
  {
    emoji: '⚡',
    title: 'Serverless cloud architectures',
    body: "Still figuring out when serverless is genuinely the right choice vs. when it's convenient. Working on the CVE platform gave me a starting point, but there's a lot I haven't tried yet.",
  },
]

export default function Exploring() {
  return (
    <section id="exploring" className="relative py-28 px-6" aria-label="Currently exploring">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Currently Curious About"
          subtitle="things I'm exploring, not claiming to have mastered"
          accent="✦ exploring"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {curiosities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-lavender/10 rounded-2xl p-6 hover:border-pink-soft/15 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5" aria-hidden="true">{item.emoji}</span>
                <div>
                  <h3 className="font-display text-xl text-purple-lilac font-medium mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-lavender/55 leading-relaxed">{item.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
