import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Cpu, Database, Eye, Layers, BarChart3, Binary } from 'lucide-react'
import StarField from '../ui/StarField'

/* ─── Scroll-reveal wrapper ────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.3, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Compact Section Divider ──────────────────────────────────────────────── */
function Divider() {
  return (
    <div
      className="w-full h-px my-8 md:my-10"
      style={{ background: 'linear-gradient(to right, transparent, rgba(216,180,226,0.12), transparent)' }}
      aria-hidden="true"
    />
  )
}

export default function ExoLifeCaseStudy() {
  const reduced = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-deep text-lavender/80 antialiased selection:bg-pink-soft/20 selection:text-purple-lilac">
      {/* Ambient Cosmic Radial Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse 70% 50% at 15% 10%, rgba(192,132,252,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 85% 85%, rgba(244,167,187,0.03) 0%, transparent 60%)',
        }}
      />
      <StarField />

      <div className="relative" style={{ zIndex: 10 }}>
        {/* ── Fixed Minimal Navbar ──────────────────────────────────────────── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-13 border-b border-lavender/8"
          style={{ background: 'rgba(11,8,18,0.85)', backdropFilter: 'blur(12px)' }}
          aria-label="Case Study Navigation"
        >
          <Link
            to="/"
            className="flex items-center gap-2 font-body text-xs md:text-sm text-lavender/50 hover:text-lavender transition-colors duration-200 group"
            aria-label="Back to Projects"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Shivangid2904/ExoLife-Exoplanet-Habitability-Assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-xs text-lavender/50 hover:text-lavender transition-colors duration-200"
              aria-label="ExoLife on GitHub"
            >
              <Github size={13} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://exolife-exoplanet-habitability.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-xs font-medium text-pink-soft border border-pink-soft/30 bg-pink-soft/8 rounded-full px-3 py-1 hover:bg-pink-soft/15 transition-colors duration-200"
              aria-label="Open ExoLife Live Demo"
            >
              <ExternalLink size={12} />
              <span>Live Demo</span>
            </a>
          </div>
        </nav>

        {/* ── 1. HERO SECTION ───────────────────────────────────────────────── */}
        <header className="pt-20 md:pt-24 pb-6 px-6 md:px-10 max-w-5xl mx-auto">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/80 border border-pink-soft/20 bg-pink-soft/5 rounded-full px-2.5 py-0.5 font-medium">
              ML Engineering Case Study
            </span>
            <span className="font-body text-[11px] text-lavender/30">·</span>
            <span className="font-body text-xs text-lavender/45">Astrophysics &amp; Explainable AI</span>
          </motion.div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-purple-lilac font-light tracking-tight leading-tight mb-3"
          >
            ExoLife
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-body text-base md:text-lg text-lavender/90 leading-snug font-normal max-w-3xl mb-3"
          >
            An explainable ML system for assessing exoplanet habitability from NASA catalog data, with a leakage-aware physics-informed proxy model, model benchmarking, and SHAP explanations.
          </motion.p>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="font-body text-xs md:text-sm text-lavender/50 leading-relaxed max-w-2xl mb-5"
          >
            Tackles extreme class imbalance and isolates indirect astrophysical indicators (mass, orbital eccentricity, stellar metallicity) to assess predictive signal beyond direct labeling thresholds.
          </motion.p>

          {/* Compact Tech Row */}
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="flex items-center flex-wrap gap-2 text-xs font-body text-lavender/55 mb-6 py-2 border-y border-lavender/8"
            aria-label="Core Tech Stack"
          >
            <span className="text-[10px] uppercase tracking-wider text-pink-soft/75 font-semibold mr-1">Stack:</span>
            <span className="text-lavender/75">Python</span>
            <span className="text-lavender/25">·</span>
            <span className="text-lavender/75">scikit-learn</span>
            <span className="text-lavender/25">·</span>
            <span className="text-lavender/75">XGBoost</span>
            <span className="text-lavender/25">·</span>
            <span className="text-lavender/75">SHAP</span>
            <span className="text-lavender/25">·</span>
            <span className="text-lavender/75">SMOTE</span>
            <span className="text-lavender/25">·</span>
            <span className="text-lavender/75">Pandas</span>
            <span className="text-lavender/25">·</span>
            <span className="text-lavender/75">Streamlit</span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.22 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="https://exolife-exoplanet-habitability.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs md:text-sm font-medium text-pink-soft border border-pink-soft/40 bg-pink-soft/10 rounded-full px-5 py-2 hover:bg-pink-soft/20 transition-colors duration-200"
              aria-label="Open ExoLife Live Demo"
            >
              <ExternalLink size={13} />
              <span>Live Demo &#8599;</span>
            </a>
            <a
              href="https://github.com/Shivangid2904/ExoLife-Exoplanet-Habitability-Assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-lavender/60 hover:text-lavender transition-colors duration-200 border border-lavender/12 rounded-full px-5 py-2 hover:border-lavender/25"
              aria-label="View ExoLife GitHub Source"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
            <span className="font-body text-xs text-lavender/35 ml-auto hidden sm:inline">
              Built 2025 · NASA Exoplanet Archive
            </span>
          </motion.div>
        </header>

        {/* ── Main Content Container ────────────────────────────────────────── */}
        <main className="px-6 md:px-10 max-w-5xl mx-auto pb-20" id="case-study-content">

          {/* ── 2. QUICK PROJECT SNAPSHOT ───────────────────────────────────── */}
          <Reveal delay={0.05}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
              <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/4">
                <span className="font-display text-2xl md:text-3xl text-pink-soft font-light block leading-tight">3,757</span>
                <span className="font-body text-xs text-lavender/85 font-medium block mt-0.5">Planets Analyzed</span>
                <span className="font-body text-[10px] text-lavender/40 block mt-0.5">NASA Archive post-cleaning</span>
              </div>
              <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/4">
                <span className="font-display text-2xl md:text-3xl text-pink-soft font-light block leading-tight">49</span>
                <span className="font-body text-xs text-lavender/85 font-medium block mt-0.5">Labelled Habitable</span>
                <span className="font-body text-[10px] text-lavender/40 block mt-0.5">1.3% positive class</span>
              </div>
              <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/4">
                <span className="font-display text-2xl md:text-3xl text-pink-soft font-light block leading-tight">75.7 : 1</span>
                <span className="font-body text-xs text-lavender/85 font-medium block mt-0.5">Class Imbalance</span>
                <span className="font-body text-[10px] text-lavender/40 block mt-0.5">Severe skew (non-hab : hab)</span>
              </div>
              <div className="border border-pink-soft/30 rounded-xl p-4 bg-pink-soft/5">
                <span className="font-display text-2xl md:text-3xl text-pink-soft font-light block leading-tight">5-Fold</span>
                <span className="font-body text-xs text-lavender/90 font-medium block mt-0.5">Stratified Validation</span>
                <span className="font-body text-[10px] text-pink-soft/75 block mt-0.5">Preserves class proportions</span>
              </div>
            </div>
          </Reveal>

          <Divider />

          {/* ── 3. WHAT I BUILT (CONCISE & VISUAL) ───────────────────────────── */}
          <section aria-labelledby="section-built">
            <Reveal>
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold">
                    System Architecture
                  </p>
                  <h2 id="section-built" className="font-display text-2xl md:text-3xl text-purple-lilac font-light">
                    What I Built
                  </h2>
                </div>
                <span className="font-body text-xs text-lavender/40 hidden sm:inline">6 core engineered components</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4 hover:border-lavender/20 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft">
                    <Database size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">Data &amp; Preprocessing</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Cleaned, imputed, and processed 3,757 NASA exoplanet records with SMOTE resampling to handle extreme minority class sparsity.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4 hover:border-lavender/20 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft">
                    <Binary size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">Baseline Model</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Trained full-parameter classifiers (radius, equilibrium temp, flux) to determine the upper-bound metric baseline.
                  </p>
                </div>

                <div className="border border-pink-soft/25 bg-pink-soft/5 rounded-xl p-4 hover:border-pink-soft/35 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft">
                    <Cpu size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/95 uppercase tracking-wide">Physics-Informed Proxy Model</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Excluded direct labeling parameters to eliminate target leakage, testing if habitability can be inferred from orbital dynamics alone.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4 hover:border-lavender/20 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft">
                    <BarChart3 size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">Model Benchmarking</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Benchmarked 5 algorithms via Stratified 5-Fold Cross-Validation, emphasizing PR-AUC and Recall over naive accuracy.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4 hover:border-lavender/20 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft">
                    <Eye size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">SHAP Explainability</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Generated local waterfall attributions to expose which physical features pushed predictions toward or away from habitability.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4 hover:border-lavender/20 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft">
                    <Layers size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">Streamlit Deployment</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Interactive web application on Render allowing custom planetary parameter inputs and presets for Kepler-22b and Kepler-186f.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ── 4. LIVE SYSTEM PREVIEW ────────────────────────────────────── */}
            <Reveal delay={0.08}>
              <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden">
                <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-soft animate-pulse" />
                    <span className="font-body text-xs font-semibold text-lavender/85 tracking-wider uppercase">
                      Live System Preview
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/Shivangid2904/ExoLife-Exoplanet-Habitability-Assessment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs text-lavender/50 hover:text-lavender transition-colors hidden sm:inline"
                    >
                      View Code
                    </a>
                    <a
                      href="https://exolife-exoplanet-habitability.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs font-medium text-pink-soft hover:text-pink-rose transition-colors flex items-center gap-1"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
                <img
                  src="https://github.com/user-attachments/assets/a70de6f9-e96d-4d85-80f0-34966e5c9cc5"
                  alt="ExoLife live interactive habitability assessment interface"
                  className="w-full h-auto object-cover max-h-[350px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 5. TECHNICAL ARCHITECTURE & PIPELINE ──────────────────────────── */}
          <section aria-labelledby="section-pipeline">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Engineering Workflow
              </p>
              <h2 id="section-pipeline" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Technical Architecture
              </h2>
            </Reveal>

            {/* Clean Visual Engineering Pipeline */}
            <Reveal delay={0.05}>
              <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/2 mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2" role="list" aria-label="End-to-End ML Pipeline">
                  {[
                    { step: '01', title: 'NASA Data', sub: '3,757 records' },
                    { step: '02', title: 'Preprocessing', sub: 'Imputation & scale' },
                    { step: '03', title: 'Label Design', sub: 'Astrophysical rules' },
                    { step: '04', title: 'Imbalance (SMOTE)', sub: '75.7:1 rebalance' },
                    { step: '05', title: 'Dual Models', sub: 'Baseline vs Proxy Model' },
                    { step: '06', title: 'Evaluation', sub: 'Stratified 5-fold' },
                    { step: '07', title: 'SHAP Explain', sub: 'Waterfall plots' },
                    { step: '08', title: 'Deployment', sub: 'Streamlit on Render' },
                  ].map((p) => (
                    <div
                      key={p.step}
                      role="listitem"
                      className="flex flex-col p-2.5 rounded-lg border border-lavender/10 bg-lavender/4 text-center"
                    >
                      <span className="font-body text-[10px] text-pink-soft/80 font-bold">{p.step}</span>
                      <span className="font-body text-xs font-semibold text-lavender/85 leading-tight mt-1 mb-1">{p.title}</span>
                      <span className="font-body text-[10px] text-lavender/40">{p.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Target Leakage & Proxy Model Card */}
            <Reveal delay={0.08}>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-lavender/90 mb-1">Baseline Model (With Label-Defining Features)</p>
                  <p className="font-body text-xs text-lavender/50 leading-relaxed mb-2">
                    Trained with all available features including <code className="text-lavender/70">pl_rade</code> (radius), <code className="text-lavender/70">pl_eqt</code> (temp), and <code className="text-lavender/70">pl_insol</code> (flux).
                  </p>
                  <span className="font-body text-[11px] text-lavender/40 italic block">
                    High scores here primarily confirm the model learned the labeling threshold.
                  </span>
                </div>

                <div className="border border-pink-soft/30 rounded-xl p-4 bg-pink-soft/5">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">Physics-Informed Proxy Model (Target-Leakage Free)</p>
                  <p className="font-body text-xs text-lavender/65 leading-relaxed mb-2">
                    Restricted strictly to 8 indirect indicators: <code className="text-pink-soft/90">pl_bmasse, pl_orbper, pl_orbeccen, st_teff, st_rad, st_mass, st_met, sy_dist</code>.
                  </p>
                  <span className="font-body text-[11px] text-pink-soft/80 font-medium block">
                    Reaches F1 0.636, suggesting predictive signal beyond direct label-defining features.
                  </span>
                </div>
              </div>
            </Reveal>

            {/* EDA View */}
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-lavender/10 overflow-hidden bg-card/60">
                <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                  <span className="font-body text-xs text-lavender/65">Exploratory Data Analysis · Distributions &amp; Imbalance</span>
                  <span className="font-body text-[10px] text-pink-soft/75 uppercase tracking-wider">Archive View</span>
                </div>
                <img
                  src="https://github.com/user-attachments/assets/3f4e7eed-5b00-44b8-b798-664dd682c3e0"
                  alt="Exploratory data analysis dashboard showing class imbalance and feature distributions across NASA exoplanets"
                  className="w-full h-auto object-cover max-h-[300px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 6. MODEL RESULTS & BENCHMARKING ───────────────────────────────── */}
          <section aria-labelledby="section-results">
            <Reveal>
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold">
                    Empirical Evaluation
                  </p>
                  <h2 id="section-results" className="font-display text-2xl md:text-3xl text-purple-lilac font-light">
                    Model Results
                  </h2>
                </div>
                <span className="font-body text-xs text-lavender/40 hidden sm:inline">Single Holdout Split &amp; Stratified 5-Fold CV</span>
              </div>
            </Reveal>

            {/* Neutral Benchmarking Table: Single Holdout Test Split */}
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-lavender/10 bg-lavender/3 mb-4 overflow-hidden">
                <div className="px-4 py-2.5 border-b border-lavender/10 bg-lavender/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-xs font-semibold text-lavender/90">
                      Model Benchmark Comparison
                    </span>
                    <span className="font-body text-[11px] text-lavender/50">
                      · Evaluation Method: Single Holdout Test Split
                    </span>
                  </div>
                  <span className="font-body text-[10px] uppercase font-semibold text-pink-soft/80 border border-pink-soft/20 bg-pink-soft/5 rounded px-2 py-0.5">
                    Single Split Values
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-body text-xs" aria-label="Model Benchmark Comparison Table (Single Holdout Test Split)">
                    <thead>
                      <tr className="border-b border-lavender/10 text-lavender/40 text-[10px] tracking-wider uppercase bg-lavender/4">
                        <th className="py-2.5 px-4 font-semibold">Model</th>
                        <th className="py-2.5 px-3 font-semibold">Accuracy</th>
                        <th className="py-2.5 px-3 font-semibold">Precision</th>
                        <th className="py-2.5 px-3 font-semibold">Recall</th>
                        <th className="py-2.5 px-3 font-semibold">F1 Score</th>
                        <th className="py-2.5 px-3 font-semibold">PR-AUC</th>
                        <th className="py-2.5 px-4 font-semibold">Key Experimental Observation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-lavender/6">
                      <tr className="bg-lavender/2">
                        <td className="py-2.5 px-4 font-semibold text-lavender/90">XGBoost</td>
                        <td className="py-2.5 px-3 text-lavender/80">0.992</td>
                        <td className="py-2.5 px-3 text-lavender/80">0.750</td>
                        <td className="py-2.5 px-3 text-lavender/80">0.600</td>
                        <td className="py-2.5 px-3 font-semibold text-pink-soft">0.667</td>
                        <td className="py-2.5 px-3 font-semibold text-pink-soft">0.773</td>
                        <td className="py-2.5 px-4 text-[11px] text-lavender/55">Highest PR-AUC and best balance between precision and generalization variance.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-medium text-lavender/85">Decision Tree</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.992</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.700</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.700</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.700</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.702</td>
                        <td className="py-2.5 px-4 text-[11px] text-lavender/45">High test F1 on single split; prone to leaf overfitting on tiny positive subsets.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-medium text-lavender/85">Baseline Model (Random Forest)</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.989</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.583</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.700</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.636</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.695</td>
                        <td className="py-2.5 px-4 text-[11px] text-lavender/45">Full-feature ensemble benchmark (includes radius, equilibrium temperature, flux).</td>
                      </tr>
                      <tr className="bg-lavender/2">
                        <td className="py-2.5 px-4 font-medium text-lavender/90">Physics-Informed Proxy Model (Random Forest)</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.989</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.583</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.700</td>
                        <td className="py-2.5 px-3 font-semibold text-lavender/90">0.636</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.695</td>
                        <td className="py-2.5 px-4 text-[11px] text-lavender/55">Matches baseline model performance despite omitting all direct label-defining parameters.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-medium text-lavender/85">Logistic Regression</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.918</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.139</td>
                        <td className="py-2.5 px-3 text-lavender/70">1.000</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.244</td>
                        <td className="py-2.5 px-3 text-lavender/70">0.279</td>
                        <td className="py-2.5 px-4 text-[11px] text-lavender/45">Captures all habitable cases (1.0 Recall) but suffers 86% false positive rate.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>

            {/* Short Takeaway & Cross-Val Summary */}
            <Reveal delay={0.08}>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl border border-lavender/10 p-4 bg-lavender/2">
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">Why Raw Accuracy Is Misleading</p>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    With only 49 habitable planets out of 3,757 (1.3%), a trivial dummy classifier predicting "non-habitable" for every input achieves <strong className="text-lavender/80">98.7% accuracy</strong> while finding zero habitable candidates. Evaluation must focus on Recall, F1, and PR-AUC.
                  </p>
                </div>

                <div className="rounded-xl border border-pink-soft/20 p-4 bg-pink-soft/4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-body text-xs font-semibold text-pink-soft">XGBoost Stratified 5-Fold Cross-Validation</p>
                    <span className="text-[10px] uppercase font-semibold text-pink-soft/85 border border-pink-soft/25 bg-pink-soft/10 rounded px-1.5 py-0.5">
                      Mean ± SD
                    </span>
                  </div>
                  <p className="font-body text-[11px] text-lavender/50 mb-2">
                    Evaluation Method: Stratified 5-Fold Cross-Validation across folds (values represent mean ± standard deviation).
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-body mt-2">
                    <div>
                      <span className="text-lavender/40 block text-[10px]">CV Accuracy (Mean ± SD)</span>
                      <span className="font-semibold text-lavender/80">0.9862 ± 0.0032</span>
                    </div>
                    <div>
                      <span className="text-lavender/40 block text-[10px]">CV Precision (Mean ± SD)</span>
                      <span className="font-semibold text-lavender/80">0.5107 ± 0.1223</span>
                    </div>
                    <div>
                      <span className="text-lavender/40 block text-[10px]">CV Recall (Mean ± SD)</span>
                      <span className="font-semibold text-lavender/80">0.7356 ± 0.0997</span>
                    </div>
                    <div>
                      <span className="text-lavender/40 block text-[10px]">CV F1 Score (Mean ± SD)</span>
                      <span className="font-semibold text-pink-soft">0.5858 ± 0.0435</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Benchmarking Screenshot */}
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-lavender/10 overflow-hidden bg-card/60">
                <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                  <span className="font-body text-xs text-lavender/65">Model Comparison &amp; Validation Interface</span>
                  <span className="font-body text-[10px] text-pink-soft/75 uppercase tracking-wider">Metrics View</span>
                </div>
                <img
                  src="https://github.com/user-attachments/assets/0d3a3253-c33f-475c-b36b-b34d4c9b8005"
                  alt="ExoLife model benchmarking view comparing Accuracy, Precision, Recall, F1, and PR-AUC across models"
                  className="w-full h-auto object-cover max-h-[300px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 7. EXPLAINABILITY (SHAP) ───────────────────────────────────────── */}
          <section aria-labelledby="section-shap">
            <Reveal>
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold">
                    Explainable AI
                  </p>
                  <h2 id="section-shap" className="font-display text-2xl md:text-3xl text-purple-lilac font-light">
                    SHAP Explainability
                  </h2>
                </div>
                <span className="font-body text-xs text-lavender/40 hidden sm:inline">Local Feature Attribution</span>
              </div>
              <p className="font-body text-xs md:text-sm text-lavender/85 font-medium mb-4">
                SHAP shows which planetary and stellar features contributed to an individual prediction.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-xl border border-lavender/10 overflow-hidden bg-card/60 mb-2">
                <div className="px-4 py-2 border-b border-lavender/8 flex items-center justify-between bg-lavender/4">
                  <span className="font-body text-xs text-lavender/65">Local SHAP Waterfall Attribution Plot</span>
                  <span className="font-body text-[10px] text-pink-soft/70 uppercase tracking-widest">Waterfall View</span>
                </div>
                <img
                  src="https://github.com/user-attachments/assets/7b7f8b13-a29a-4416-a011-0c3a126b8321"
                  alt="SHAP waterfall visualization from ExoLife illustrating positive and negative feature contributions toward habitability"
                  className="w-full h-auto object-cover max-h-[360px]"
                  loading="lazy"
                />
                <div className="p-3 border-t border-lavender/8 bg-lavender/2">
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Red bars push habitability probability higher from the base value, while blue bars decrease probability, giving domain specialists complete transparency into every classified exoplanet.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 8. LIMITATIONS & SCIENTIFIC SCOPE ─────────────────────────────── */}
          <section aria-labelledby="section-limitations">
            <Reveal>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={15} className="text-pink-soft/80" />
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold">
                  Scientific Scope
                </p>
              </div>
              <h2 id="section-limitations" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Limitations &amp; Scientific Scope
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-pink-soft/20 rounded-xl p-4 md:p-5 bg-pink-soft/4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 font-body text-xs text-lavender/70 leading-relaxed" aria-label="Scientific Scope Limitations">
                  <div className="p-2.5 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-0.5">Assessment, Not Detection</strong>
                    Labels reflect physical threshold criteria, not confirmed evidence of extraterrestrial biology.
                  </div>
                  <div className="p-2.5 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-0.5">Missing Key Planetary Physics</strong>
                    Atmospheric composition, magnetic fields, plate tectonics, and cloud dynamics are absent from the catalog.
                  </div>
                  <div className="p-2.5 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-0.5">Small Positive Class (49 Cases)</strong>
                    With only 49 habitable planets (1.3%), generalizing to newly cataloged systems retains inherent variance.
                  </div>
                  <div className="p-2.5 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-0.5">Data Quality &amp; Completeness</strong>
                    Inference reliability directly mirrors measurement uncertainties and missing attributes in the NASA archive.
                  </div>
                  <div className="p-2.5 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-0.5">Synthetic SMOTE Artifacts</strong>
                    Synthetic samples mitigate class imbalance during training but do not represent genuine physical exoplanets.
                  </div>
                  <div className="p-2.5 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-0.5">Probabilistic Estimates</strong>
                    Outputs provide probabilistic scores aligning with habitable-zone metrics, rather than definitive discoveries.
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 9. WHAT I LEARNED ─────────────────────────────────────────────── */}
          <section aria-labelledby="section-learned">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Reflections
              </p>
              <h2 id="section-learned" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                What I Learned
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">01 — Accuracy can be misleading</p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Under 75.7:1 skew, a naive baseline hits 98.7% accuracy with zero recall. PR-AUC, Recall, and cross-validation stability reflect true utility.
                  </p>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">02 — Label design can introduce leakage</p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    If labels are derived from certain features, omitting them in proxy models is necessary to test whether models capture predictive signal from secondary indicators rather than memorizing formulaic criteria.
                  </p>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">03 — Explainability matters</p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    In scientific domains, black-box predictions lack trust. Local SHAP waterfall attributions make every planetary classification auditable.
                  </p>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">04 — Scientific limitations must be visible</p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Surfacing model constraints directly in the user interface prevents misinterpretation in areas where speculative claims are easy to make.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 10. FUTURE DIRECTIONS ─────────────────────────────────────────── */}
          <section aria-labelledby="section-future">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Roadmap
              </p>
              <h2 id="section-future" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Future Directions
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">Exploration</span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">Bayesian Uncertainty Estimation</p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">Quantify prediction confidence intervals on marginal exoplanets.</p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">Modeling</span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">Deeper Models &amp; Expanded Features</p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">Benchmark neural baselines and derived orbital-stellar ratio features.</p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">Pipeline</span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">Automated NASA Data Updates</p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">Streamlined automated ingestion pipeline synchronized with archive releases.</p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">System</span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">Richer Habitability Scoring</p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">Multi-factor continuous scoring spectrum rather than binary output.</p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 11. TECH STACK ────────────────────────────────────────────────── */}
          <section aria-labelledby="section-tech">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Technologies
              </p>
              <h2 id="section-tech" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Tech Stack
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-lavender/10 bg-lavender/2">
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1">Machine Learning</p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">scikit-learn<br />XGBoost<br />Imbalanced-Learn (SMOTE)</p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1">Explainability</p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">SHAP (TreeExplainer)<br />Waterfall Attributions</p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1">Data &amp; Analytics</p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">SciPy, NumPy, Pandas<br />Plotly, Matplotlib, Seaborn</p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1">Deployment</p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">Streamlit Web App<br />Render Cloud Hosting</p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── Bottom Navigation ────────────────────────────────────────────── */}
          <Reveal>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
              <Link
                to="/"
                className="flex items-center gap-2 font-body text-xs md:text-sm text-lavender/50 hover:text-lavender transition-colors duration-200 group"
                aria-label="Back to all projects"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
                <span>Back to All Projects</span>
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Shivangid2904/ExoLife-Exoplanet-Habitability-Assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-body text-xs text-lavender/50 hover:text-lavender transition-colors duration-200"
                  aria-label="ExoLife on GitHub"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://exolife-exoplanet-habitability.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-body text-xs font-medium text-pink-soft border border-pink-soft/30 bg-pink-soft/8 rounded-full px-3.5 py-1.5 hover:bg-pink-soft/15 transition-colors duration-200"
                  aria-label="Open ExoLife Live Demo"
                >
                  <ExternalLink size={12} />
                  <span>Live Demo &#8599;</span>
                </a>
              </div>
            </div>
          </Reveal>
        </main>

        {/* ── Footer ───────────────────────────────────────────────────────── */}
        <footer className="border-t border-lavender/8 py-6 px-6 text-center">
          <p className="font-display text-base text-lavender/40 italic">
            Shivangi Dubey<span className="text-pink-soft/60">.</span>
          </p>
          <p className="font-body text-[11px] text-lavender/25 mt-0.5">&#169; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}
