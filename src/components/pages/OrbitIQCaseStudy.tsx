import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft, Github,
  Layers, Database, BarChart3, Rocket, Globe, Cpu,
  TrendingUp, MapPin, Star,
} from 'lucide-react'
import StarField from '../ui/StarField'

/* ─── Scroll-reveal wrapper ──────────────────────────────────────── */
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

/* ─── Section Divider ────────────────────────────────────────────── */
function Divider() {
  return (
    <div
      className="w-full h-px my-8 md:my-10"
      style={{ background: 'linear-gradient(to right, transparent, rgba(216,180,226,0.12), transparent)' }}
      aria-hidden="true"
    />
  )
}

export default function OrbitIQCaseStudy() {
  const reduced = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-deep text-lavender/80 antialiased selection:bg-pink-soft/20 selection:text-purple-lilac">
      {/* Ambient radial background */}
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

        {/* ── Fixed Navbar ────────────────────────────────────────── */}
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

          <a
            href="https://github.com/Shivangid2904/OrbitIQ-Space-Mission-Intelligence-Platform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-xs text-lavender/60 hover:text-lavender border border-lavender/12 bg-lavender/4 rounded-full px-3 py-1 transition-colors duration-200"
            aria-label="OrbitIQ on GitHub"
          >
            <Github size={13} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>

        {/* ── 1. HERO ─────────────────────────────────────────────── */}
        <header className="pt-20 md:pt-24 pb-6 px-6 md:px-10 max-w-5xl mx-auto">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/80 border border-pink-soft/20 bg-pink-soft/5 rounded-full px-2.5 py-0.5 font-medium">
              Data Analytics · Business Intelligence
            </span>
            <span className="font-body text-[11px] text-lavender/30">·</span>
            <span className="font-body text-xs text-lavender/45">SQL · PostgreSQL · Power BI</span>
          </motion.div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-lavender mb-3 leading-tight"
          >
            🪐 OrbitIQ
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-display text-lg md:text-xl text-purple-lilac/80 font-light mb-4"
          >
            Space Mission Intelligence Platform
          </motion.p>

          {/* IN PROGRESS badge */}
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-amber-300/80 border border-amber-400/25 bg-amber-400/8 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              In Progress — Power BI dashboard under development
            </span>
          </motion.div>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="font-body text-sm md:text-base text-lavender/60 max-w-2xl leading-relaxed mb-8"
          >
            A data exploration project analyzing 4,324+ historical space missions from organizations including ISRO, NASA, SpaceX, Roscosmos, CASC, and Arianespace. Transforms raw launch records into structured insights using SQL, PostgreSQL, and Python, with an interactive Power BI dashboard currently in development.
          </motion.p>

          {/* Stat chips */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            className="flex flex-wrap gap-2.5"
          >
            {[
              { value: '4,324+', label: 'Space Missions' },
              { value: '56', label: 'Organizations' },
              { value: '137', label: 'Launch Sites' },
              { value: '1957–Present', label: 'Coverage' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center px-4 py-2 rounded-lg border border-lavender/10 bg-lavender/4"
              >
                <span className="font-display text-base font-semibold text-purple-lilac">{value}</span>
                <span className="font-body text-[10px] text-lavender/45 tracking-wide mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>
        </header>

        <Divider />

        {/* ── 2. OVERVIEW ─────────────────────────────────────────── */}
        <section className="px-6 md:px-10 max-w-5xl mx-auto" aria-labelledby="overview-heading">
          <Reveal>
            <h2 id="overview-heading" className="font-display text-xl font-semibold text-lavender mb-4 flex items-center gap-2">
              <Globe size={17} className="text-pink-soft/70" />
              Overview
            </h2>
            <p className="font-body text-sm text-lavender/60 leading-relaxed max-w-2xl">
              Since the Space Age began in 1957, thousands of missions have been launched worldwide. While raw launch data is publicly available, it rarely surfaces meaningful analytical insights about organizational performance, reliability benchmarking, launch site intelligence, or long-term operational trends.
            </p>
            <p className="font-body text-sm text-lavender/60 leading-relaxed max-w-2xl mt-3">
              OrbitIQ addresses this gap by ingesting data from the <span className="text-lavender/80">NextSpaceFlight Launch Database</span>, structuring it in PostgreSQL, and analysing it through advanced SQL workflows. A dedicated ISRO Analytics module benchmarks India's space programme against leading international organizations. The project's Power BI dashboard layer is currently being developed.
            </p>
          </Reveal>
        </section>

        <Divider />

        {/* ── 3. DATASET ──────────────────────────────────────────── */}
        <section className="px-6 md:px-10 max-w-5xl mx-auto" aria-labelledby="dataset-heading">
          <Reveal>
            <h2 id="dataset-heading" className="font-display text-xl font-semibold text-lavender mb-5 flex items-center gap-2">
              <Database size={17} className="text-pink-soft/70" />
              Dataset
            </h2>
          </Reveal>

          <Reveal delay={0.04}>
            <p className="font-body text-sm text-lavender/60 leading-relaxed max-w-2xl mb-6">
              The primary dataset — <em>Space Missions Dataset (1957–Present)</em> — is sourced from the NextSpaceFlight Launch Database and covers launches by 56 organizations across 137 launch sites.
            </p>
          </Reveal>

          {/* Schema table */}
          <Reveal delay={0.06}>
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-body border-collapse" aria-label="Database schema for space_missions table">
                <caption className="sr-only">PostgreSQL space_missions table schema</caption>
                <thead>
                  <tr className="border-b border-lavender/10">
                    <th className="text-left py-2 pr-6 text-lavender/40 font-medium tracking-wide uppercase text-[10px]">Column</th>
                    <th className="text-left py-2 pr-6 text-lavender/40 font-medium tracking-wide uppercase text-[10px]">Type</th>
                    <th className="text-left py-2 text-lavender/40 font-medium tracking-wide uppercase text-[10px]">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['mission_id', 'SERIAL PRIMARY KEY', 'Unique row identifier'],
                    ['company_name', 'VARCHAR(100)', 'Organization conducting the launch'],
                    ['location', 'TEXT', 'Launch site'],
                    ['launch_datetime', 'TIMESTAMP', 'Launch date and time'],
                    ['rocket_detail', 'TEXT', 'Rocket and mission information'],
                    ['rocket_status', 'VARCHAR(30)', 'Rocket operational status'],
                    ['mission_cost_million', 'NUMERIC', 'Mission cost where available'],
                    ['mission_status', 'VARCHAR(30)', 'Mission outcome'],
                  ].map(([col, type, desc], i) => (
                    <tr key={col} className={`border-b border-lavender/6 ${i % 2 === 0 ? 'bg-lavender/2' : ''}`}>
                      <td className="py-2 pr-6 text-purple-lilac/80 font-mono">{col}</td>
                      <td className="py-2 pr-6 text-lavender/50">{type}</td>
                      <td className="py-2 text-lavender/45">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        <Divider />

        {/* ── 4. SQL ANALYTICS ────────────────────────────────────── */}
        <section className="px-6 md:px-10 max-w-5xl mx-auto" aria-labelledby="sql-heading">
          <Reveal>
            <h2 id="sql-heading" className="font-display text-xl font-semibold text-lavender mb-2 flex items-center gap-2">
              <Layers size={17} className="text-pink-soft/70" />
              SQL Analytics
            </h2>
            <p className="font-body text-sm text-lavender/55 mb-6 max-w-2xl">
              Seven analytical SQL scripts cover the full range of business questions, using advanced SQL features including window functions, CTEs, and multi-step aggregations.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                file: '01_success_rate_analysis.sql',
                title: 'Success Rate Analysis',
                desc: 'Ranks organizations by mission success rate using window functions.',
              },
              {
                file: '02_trend_analysis.sql',
                title: 'Launch Trend Analysis',
                desc: 'Year-over-year and decade-level launch growth using LAG() / LEAD().',
              },
              {
                file: '03_launch_site_reliability.sql',
                title: 'Launch Site Reliability',
                desc: 'Ranks launch sites by success rate and total volume.',
              },
              {
                file: '04_decade_analysis.sql',
                title: 'Decade Comparison',
                desc: 'Segments launches into decades to track industry maturity.',
              },
              {
                file: '05_mission_reliability_index.sql',
                title: 'Mission Reliability Index',
                desc: 'Computes the custom MRI score using a weighted CTE pipeline.',
              },
              {
                file: '06_isro_benchmark.sql',
                title: 'ISRO Benchmarking',
                desc: 'Compares ISRO against NASA, SpaceX, Roscosmos, CASC, and Arianespace.',
              },
              {
                file: '07_consistency_analysis.sql',
                title: 'Consistency Analysis',
                desc: 'Identifies organizations with stable year-over-year success rates.',
              },
            ].map(({ file, title, desc }, i) => (
              <Reveal key={file} delay={i * 0.04}>
                <div className="rounded-xl border border-lavender/10 bg-lavender/3 px-4 py-3.5">
                  <p className="font-mono text-[10px] text-lavender/35 mb-1">{file}</p>
                  <p className="font-body text-sm font-medium text-lavender/80 mb-1">{title}</p>
                  <p className="font-body text-xs text-lavender/50">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* SQL concepts used */}
          <Reveal delay={0.1}>
            <div className="mt-6 rounded-xl border border-lavender/10 bg-lavender/3 p-5">
              <p className="font-body text-xs font-medium text-lavender/60 uppercase tracking-widest mb-3">Advanced SQL Concepts Used</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'RANK()', 'DENSE_RANK()', 'ROW_NUMBER()', 'LAG()', 'LEAD()', 'AVG() OVER()',
                  'CTEs', 'GROUP BY / HAVING', 'INNER JOIN', 'LEFT JOIN', 'SELF JOIN', 'Sub-queries',
                ].map(concept => (
                  <span
                    key={concept}
                    className="font-mono text-[10px] text-purple-lilac/70 bg-purple-lilac/8 border border-purple-lilac/12 rounded px-2 py-0.5"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <Divider />

        {/* ── 5. MISSION RELIABILITY INDEX ────────────────────────── */}
        <section className="px-6 md:px-10 max-w-5xl mx-auto" aria-labelledby="mri-heading">
          <Reveal>
            <h2 id="mri-heading" className="font-display text-xl font-semibold text-lavender mb-4 flex items-center gap-2">
              <Star size={17} className="text-pink-soft/70" />
              Mission Reliability Index (MRI)
            </h2>
            <p className="font-body text-sm text-lavender/60 leading-relaxed max-w-2xl mb-6">
              A proprietary composite metric developed to evaluate and rank organizations based on three dimensions: reliability, operational scale, and longevity.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div
              className="rounded-2xl border border-lavender/12 p-6 md:p-8 max-w-xl"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <p className="font-body text-xs text-lavender/40 uppercase tracking-widest mb-4">Formula</p>
              <div className="space-y-2">
                <span
                  className="font-display text-2xl font-semibold"
                  style={{ color: 'rgba(216,180,254,0.9)' }}
                >
                  MRI =
                </span>
                <div className="pl-4 border-l-2 border-pink-soft/25 space-y-2 mt-2">
                  {[
                    { weight: '0.70', label: '× Success Rate', note: 'Primary reliability signal' },
                    { weight: '0.20', label: '× Launch Volume Score', note: 'Operational scale' },
                    { weight: '0.10', label: '× Operational Longevity Score', note: 'Years of activity' },
                  ].map(({ weight, label, note }) => (
                    <div key={weight} className="flex items-start gap-3">
                      <span className="font-mono text-sm font-semibold text-purple-lilac/80 w-8 shrink-0">{weight}</span>
                      <div>
                        <span className="font-body text-sm text-lavender/80">{label}</span>
                        <p className="font-body text-[11px] text-lavender/40 mt-0.5">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="font-body text-xs text-lavender/45 mt-5 leading-relaxed">
                Organizations are ranked by MRI to compare overall operational performance and consistency across the global space ecosystem.
              </p>
            </div>
          </Reveal>
        </section>

        <Divider />

        {/* ── 6. KEY BUSINESS QUESTIONS ───────────────────────────── */}
        <section className="px-6 md:px-10 max-w-5xl mx-auto" aria-labelledby="bq-heading">
          <Reveal>
            <h2 id="bq-heading" className="font-display text-xl font-semibold text-lavender mb-5 flex items-center gap-2">
              <TrendingUp size={17} className="text-pink-soft/70" />
              Key Business Questions
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                q: 'Which organizations have the highest mission success rates?',
                insight: 'Compares operational excellence across all 56 organizations.',
              },
              {
                q: 'How have launch success rates changed over time?',
                insight: 'Tracks technological maturity and improvement decade by decade.',
              },
              {
                q: 'Which organizations improved the most over the last decade?',
                insight: 'Evaluates growth, innovation, and investment trends.',
              },
              {
                q: 'Which launch sites are the most reliable?',
                insight: 'Assesses launch infrastructure performance across 137 sites.',
              },
              {
                q: 'How has global launch activity evolved since 1957?',
                insight: 'Charts the growth of the global space industry over 60+ years.',
              },
              {
                q: 'How does ISRO compare with NASA, SpaceX, Roscosmos, CASC, and Arianespace?',
                insight: 'Dedicated ISRO benchmarking module across mission count, success rate, and MRI.',
              },
              {
                q: 'Which organizations have the most stable success rates year-over-year?',
                insight: 'Identifies long-term operational consistency using consistency analysis queries.',
              },
            ].map(({ q, insight }, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <div className="rounded-xl border border-lavender/10 bg-lavender/3 px-4 py-3.5">
                  <p className="font-body text-sm text-lavender/80 mb-1.5 leading-snug">{q}</p>
                  <p className="font-body text-xs text-lavender/45 leading-relaxed">{insight}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 7. DASHBOARD STRUCTURE (PLANNED) ────────────────────── */}
        <section className="px-6 md:px-10 max-w-5xl mx-auto" aria-labelledby="dashboard-heading">
          <Reveal>
            <h2 id="dashboard-heading" className="font-display text-xl font-semibold text-lavender mb-2 flex items-center gap-2">
              <BarChart3 size={17} className="text-pink-soft/70" />
              Planned Dashboard Structure
            </h2>
            <p className="font-body text-sm text-lavender/50 mb-6 max-w-xl">
              Five-page Power BI dashboard — currently in development.
            </p>
          </Reveal>

          <div className="space-y-3">
            {[
              {
                page: 'Page 1',
                title: 'Executive Overview',
                icon: <Globe size={14} className="text-pink-soft/60" />,
                items: [
                  'KPIs: Total Missions, Overall Success Rate, Total Organizations, Active Rockets',
                  'Launches per Year',
                  'Global Launch Distribution',
                  'Success vs Failure Overview',
                ],
              },
              {
                page: 'Page 2',
                title: 'Organization Performance',
                icon: <Rocket size={14} className="text-pink-soft/60" />,
                items: [
                  'Success Rate Ranking',
                  'Mission Reliability Index Ranking',
                  'Top Launch Organizations',
                  'Organization Comparison Dashboard',
                ],
              },
              {
                page: 'Page 3',
                title: 'Historical Trends',
                icon: <TrendingUp size={14} className="text-pink-soft/60" />,
                items: [
                  'Launches per Year',
                  'Success Rate Trend Analysis',
                  'Year-over-Year Growth',
                  'Decade Comparison',
                ],
              },
              {
                page: 'Page 4',
                title: 'Launch Site Intelligence',
                icon: <MapPin size={14} className="text-pink-soft/60" />,
                items: [
                  'Top Launch Sites',
                  'Launch Site Reliability Ranking',
                  'Geographic Distribution of Launches',
                  'Launch Site Performance Analysis',
                ],
              },
              {
                page: 'Page 5',
                title: 'ISRO Strategic Deep Dive',
                icon: <Star size={14} className="text-pink-soft/60" />,
                items: [
                  'ISRO vs NASA, SpaceX, Roscosmos, CASC, Arianespace',
                  'Metrics: Mission Count, Success Rate, Operational Longevity, MRI',
                  'ISRO Historical Performance Trend',
                  'Reliability Comparison Dashboard',
                ],
              },
            ].map(({ page, title, icon, items }) => (
              <Reveal key={page} delay={0.04}>
                <div className="rounded-xl border border-lavender/10 bg-lavender/3 px-5 py-4">
                  <div className="flex items-center gap-2 mb-3">
                    {icon}
                    <span className="font-body text-[10px] text-lavender/35 uppercase tracking-widest">{page}</span>
                    <span className="font-body text-sm font-medium text-lavender/80 ml-1">{title}</span>
                    <span className="ml-auto font-body text-[10px] text-amber-300/60 border border-amber-400/20 bg-amber-400/6 rounded-full px-2 py-0.5">Planned</span>
                  </div>
                  <ul className="space-y-1">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 font-body text-xs text-lavender/50">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-lavender/25 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 8. TECHNOLOGY STACK ─────────────────────────────────── */}
        <section className="px-6 md:px-10 max-w-5xl mx-auto" aria-labelledby="tech-heading">
          <Reveal>
            <h2 id="tech-heading" className="font-display text-xl font-semibold text-lavender mb-5 flex items-center gap-2">
              <Cpu size={17} className="text-pink-soft/70" />
              Technology Stack
            </h2>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { area: 'Data Processing', techs: ['Python', 'Pandas', 'NumPy'] },
                { area: 'Database', techs: ['PostgreSQL'] },
                { area: 'Querying & Analytics', techs: ['SQL', 'Window Functions', 'CTEs'] },
                { area: 'Visualization', techs: ['Power BI'] },
              ].map(({ area, techs }) => (
                <div key={area} className="rounded-xl border border-lavender/10 bg-lavender/3 px-4 py-4">
                  <p className="font-body text-[10px] text-lavender/40 uppercase tracking-widest mb-2.5">{area}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {techs.map(t => (
                      <span
                        key={t}
                        className="font-body text-xs text-lavender/70 bg-lavender/6 border border-lavender/10 rounded-md px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Divider />

        {/* ── 9. PROJECT STRUCTURE ────────────────────────────────── */}
        <section className="px-6 md:px-10 max-w-5xl mx-auto" aria-labelledby="structure-heading">
          <Reveal>
            <h2 id="structure-heading" className="font-display text-xl font-semibold text-lavender mb-4 flex items-center gap-2">
              <Layers size={17} className="text-pink-soft/70" />
              Project Structure
            </h2>
          </Reveal>
          <Reveal delay={0.04}>
            <div
              className="rounded-xl border border-lavender/10 p-5 overflow-x-auto"
              style={{ background: 'rgba(255,255,255,0.015)' }}
            >
              <pre className="font-mono text-xs text-lavender/55 leading-relaxed whitespace-pre">{`OrbitIQ-Space-Mission-Intelligence-Platform/
├── data/
│   ├── raw/              ← Original NextSpaceFlight dataset
│   └── processed/        ← Cleaned, schema-ready data
│
├── notebooks/
│   ├── data_cleaning.ipynb
│   └── exploratory_analysis.ipynb
│
├── sql/
│   ├── 01_success_rate_analysis.sql
│   ├── 02_trend_analysis.sql
│   ├── 03_launch_site_reliability.sql
│   ├── 04_decade_analysis.sql
│   ├── 05_mission_reliability_index.sql
│   ├── 06_isro_benchmark.sql
│   └── 07_consistency_analysis.sql
│
├── powerbi/
│   └── OrbitIQ.pbix      ← Dashboard (in development)
│
├── screenshots/
├── README.md
└── requirements.txt`}</pre>
            </div>
          </Reveal>
        </section>

        <Divider />

        {/* ── 10. CURRENT PROGRESS & NEXT STEPS ──────────────────── */}
        <section className="px-6 md:px-10 max-w-5xl mx-auto" aria-labelledby="progress-heading">
          <Reveal>
            <h2 id="progress-heading" className="font-display text-xl font-semibold text-lavender mb-5 flex items-center gap-2">
              <TrendingUp size={17} className="text-pink-soft/70" />
              Current Progress &amp; Next Steps
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            <Reveal delay={0.04}>
              <div className="rounded-xl border border-lavender/10 bg-lavender/3 p-5">
                <p className="font-body text-xs text-green-400/60 uppercase tracking-widest mb-3 font-medium">Completed</p>
                <ul className="space-y-2">
                  {[
                    'Dataset acquisition and validation',
                    'Data cleaning and preprocessing (Python / Pandas)',
                    'PostgreSQL database schema design and data loading',
                    'All 7 analytical SQL query scripts',
                    'Mission Reliability Index formula and implementation',
                    'Exploratory analysis notebooks',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 font-body text-xs text-lavender/55">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="rounded-xl border border-amber-400/15 bg-amber-400/4 p-5">
                <p className="font-body text-xs text-amber-300/60 uppercase tracking-widest mb-3 font-medium">In Development</p>
                <ul className="space-y-2">
                  {[
                    'Power BI data model and relationships',
                    'Page 1 – Executive Overview dashboard',
                    'Page 2 – Organization Performance dashboard',
                    'Page 3 – Historical Trends dashboard',
                    'Page 4 – Launch Site Intelligence dashboard',
                    'Page 5 – ISRO Strategic Deep Dive dashboard',
                    'Interactive filters and cross-page navigation',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 font-body text-xs text-lavender/55">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <Divider />

        {/* ── 11. FOOTER CTA ──────────────────────────────────────── */}
        <footer className="px-6 md:px-10 max-w-5xl mx-auto py-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-display text-lg font-semibold text-lavender mb-1">OrbitIQ</p>
                <p className="font-body text-xs text-lavender/40">
                  SQL · PostgreSQL · Python · Power BI &nbsp;·&nbsp; Jun 2026 – Present
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Shivangid2904/OrbitIQ-Space-Mission-Intelligence-Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-xs text-lavender/60 hover:text-lavender border border-lavender/15 bg-lavender/4 rounded-full px-4 py-2 transition-colors duration-200"
                  aria-label="OrbitIQ GitHub Repository"
                >
                  <Github size={13} />
                  View on GitHub
                </a>
                <Link
                  to="/"
                  className="flex items-center gap-1.5 font-body text-xs text-lavender/50 hover:text-lavender transition-colors duration-200"
                >
                  <ArrowLeft size={13} />
                  All Projects
                </Link>
              </div>
            </div>
          </Reveal>
        </footer>

      </div>
    </div>
  )
}
