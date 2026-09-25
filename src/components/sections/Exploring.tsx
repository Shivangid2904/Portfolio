import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import CosmicSparkle from '../ui/CosmicSparkle'

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
    <section id="exploring" className="relative py-28 px-6 overflow-hidden" aria-label="Currently exploring">
      {/* Soft atmospheric ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[350px] sm:h-[450px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(192,132,252,0.035) 0%, rgba(244,167,187,0.02) 45%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      {/* Faint constellation accent in whitespace */}
      <svg
        className="absolute top-12 right-4 sm:right-12 md:right-20 w-40 h-24 pointer-events-none opacity-40 hidden sm:block"
        viewBox="0 0 160 100"
        fill="none"
        aria-hidden="true"
      >
        <polyline
          points="20,70 65,30 115,45 145,15"
          stroke="rgba(216,180,226,0.18)"
          strokeWidth="0.75"
          strokeDasharray="2 4"
        />
        <circle cx="20" cy="70" r="1.75" fill="rgba(244,167,187,0.7)" />
        <circle cx="65" cy="30" r="2.25" fill="rgba(232,213,255,0.85)" />
        <circle cx="115" cy="45" r="1.75" fill="rgba(244,167,187,0.6)" />
        <circle cx="145" cy="15" r="2.5" fill="rgba(232,213,255,0.9)" />
      </svg>

      {/* Subtle cosmic sparkles in whitespace */}
      <CosmicSparkle
        size={14}
        className="absolute top-16 left-8 md:left-16 text-pink-soft/35 hidden sm:block pointer-events-none"
        twinkle="slow"
      />
      <CosmicSparkle
        size={12}
        className="absolute bottom-12 right-12 text-purple-lilac/30 hidden md:block pointer-events-none"
        twinkle="gentle"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          title="Currently Curious About"
          subtitle="things I'm exploring, not claiming to have mastered"
          accent="✦ exploring"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {curiosities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
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

