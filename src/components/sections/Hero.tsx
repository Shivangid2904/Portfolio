import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react'
import { meta } from '../../data/meta'
import CosmicSparkle from '../ui/CosmicSparkle'
import PersonalSolarSystem from '../ui/PersonalSolarSystem'

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle nebula glow behind Hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[720px] h-[400px] sm:h-[500px] rounded-full pointer-events-none animate-nebula"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(244,167,187,0.06) 0%, rgba(192,132,252,0.035) 45%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Hero cosmic sparkles — placed gently in whitespace */}
      <CosmicSparkle
        size={15}
        className="absolute top-[16%] left-[12%] text-pink-soft/40 hidden md:block"
        twinkle="slow"
      />
      <CosmicSparkle
        size={17}
        className="absolute top-[22%] right-[14%] text-purple-lilac/45 hidden sm:block"
        twinkle="gentle"
      />
      <CosmicSparkle
        size={13}
        className="absolute top-[72%] left-[16%] text-purple-lilac/35 hidden md:block"
        twinkle="gentle"
      />
      <CosmicSparkle
        size={16}
        className="absolute top-[68%] right-[15%] text-pink-soft/35 hidden sm:block"
        twinkle="slow"
      />

      {/* 3 slightly brighter stars with soft atmospheric halos */}
      <div
        className="absolute top-[30%] left-[8%] w-1.5 h-1.5 rounded-full bg-pink-soft/50 shadow-[0_0_8px_1px_rgba(244,167,187,0.35)] hidden lg:block pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[15%] right-[24%] w-1 h-1 rounded-full bg-purple-lilac/60 shadow-[0_0_6px_1px_rgba(232,213,255,0.4)] hidden md:block pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[62%] right-[8%] w-1.5 h-1.5 rounded-full bg-lavender/50 shadow-[0_0_8px_1px_rgba(216,180,226,0.3)] hidden lg:block pointer-events-none"
        aria-hidden="true"
      />

      {/* Personal Solar System — orbits encircle the entire central safe zone */}
      <PersonalSolarSystem />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.25em] uppercase text-pink-soft/60 mb-8"
        >
          ✦ &nbsp; AI · ML · Cloud · Space Data
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl text-purple-lilac font-light leading-none tracking-tight mb-6"
          style={{
            textShadow:
              '0 0 35px rgba(244,167,187,0.12), 0 0 70px rgba(192,132,252,0.07)',
          }}
        >
          Shivangi
          <br />
          <span className="text-pink-soft/90">Dubey</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-xl md:text-2xl text-lavender/60 italic font-light mb-6 leading-relaxed"
        >
          Somewhere between AI, space, and things I get curious enough to build.
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body text-sm md:text-lg text-lavender/85 max-w-xl leading-relaxed mb-10"
        >
          CS student at SRM University AP, specialising in AI & Machine Learning.
          I explore machine learning, cloud systems, data analytics, and occasionally distant planets.
        </motion.p>

        {/* Subtle metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10"
        >
          {[
            'SRM University AP',
            'AI & ML Specialisation',
            'AWS Certified Cloud Practitioner',
          ].map((item) => (
            <span key={item} className="font-body text-xs text-lavender/30 tracking-wide">
              {item}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="font-body text-sm px-6 py-2.5 rounded-full bg-pink-soft/10 border border-pink-soft/30 text-pink-soft hover:bg-pink-soft/20 hover:border-pink-soft/50 transition-all duration-200"
          >
            Explore Projects
          </button>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm px-5 py-2.5 rounded-full border border-lavender/20 text-lavender/60 hover:border-lavender/40 hover:text-lavender/80 transition-all duration-200 flex items-center gap-2"
            aria-label="GitHub profile"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm px-5 py-2.5 rounded-full border border-lavender/20 text-lavender/60 hover:border-lavender/40 hover:text-lavender/80 transition-all duration-200 flex items-center gap-2"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </motion.div>

        {/* Icon links row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-5"
        >
          <a
            href={`mailto:${meta.email}`}
            className="text-lavender/30 hover:text-pink-soft transition-colors duration-200"
            aria-label="Send email"
          >
            <Mail size={18} />
          </a>
          <a
            href={meta.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender/30 hover:text-pink-soft transition-colors duration-200"
            aria-label="View Resume"
          >
            <FileText size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-lavender/25 hover:text-lavender/50 transition-colors duration-200 animate-float"
        aria-label="Scroll to about section"
        style={{ zIndex: 10 }}
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  )
}
