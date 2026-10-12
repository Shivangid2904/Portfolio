import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  Github,
  MapPin,
  Navigation,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Compass,
  AlertTriangle,
  Hospital,
  Clock,
  Layers,
  Database,
  Cpu,
  Info,
  CheckCircle2,
  Sparkles,
  Lock,
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
      style={{
        background:
          'linear-gradient(to right, transparent, rgba(244,167,187,0.18), rgba(216,180,226,0.12), transparent)',
      }}
      aria-hidden="true"
    />
  )
}

export default function SafeHerCaseStudy() {
  const reduced = useReducedMotion()
  const [activeRoutingMode, setActiveRoutingMode] = useState<'fastest' | 'balanced' | 'safest'>('balanced')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-deep text-lavender/80 antialiased selection:bg-pink-soft/20 selection:text-purple-lilac">
      {/* Ambient Radial Background with subtle rose & violet tones */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse 75% 50% at 20% 10%, rgba(244,167,187,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 45% at 80% 85%, rgba(192,132,252,0.035) 0%, transparent 60%)',
        }}
      />
      <StarField />

      <div className="relative" style={{ zIndex: 10 }}>
        {/* ── Fixed Minimal Navbar ──────────────────────────────────────── */}
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
            href="https://github.com/Shivangid2904/safeher-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-xs text-lavender/60 hover:text-lavender border border-lavender/12 bg-lavender/4 rounded-full px-3 py-1 transition-colors duration-200"
            aria-label="SafeHer AI on GitHub"
          >
            <Github size={13} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>

        {/* ── 1. HERO SECTION ───────────────────────────────────────────── */}
        <header className="pt-20 md:pt-24 pb-6 px-6 md:px-10 max-w-5xl mx-auto">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-wrap items-center gap-2 mb-3"
          >
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/80 border border-pink-soft/20 bg-pink-soft/5 rounded-full px-2.5 py-0.5 font-medium">
              Geospatial Safety Platform · Risk Intelligence
            </span>
            <span className="font-body text-[11px] text-lavender/30">·</span>
            <span className="font-body text-xs text-lavender/45">PostGIS · NetworkX · OSMnx · Leaflet</span>
          </motion.div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-lavender mb-2 leading-tight"
          >
            SafeHer AI
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-display text-lg md:text-xl text-purple-lilac/85 font-light mb-4"
          >
            AI-Powered Safe Route Recommendation Platform
          </motion.p>

          {/* IN PROGRESS Status Badge & Tagline */}
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3 mb-5"
          >
            <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-amber-300/80 border border-amber-400/25 bg-amber-400/8 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              IN PROGRESS — Active Development
            </span>
            <span className="font-body text-xs italic text-pink-soft/90 border-l border-lavender/15 pl-3">
              "Navigation that considers risk, not just distance."
            </span>
          </motion.div>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="font-body text-sm md:text-base leading-relaxed mb-6 max-w-3xl"
            style={{ color: 'rgba(216,180,226,0.85)' }}
          >
            SafeHer AI is a geospatial safety platform that explores safer travel routes using OpenStreetMap road networks, PostgreSQL/PostGIS, graph-based routing, road-segment risk scoring, and community incident reports. Its current implementation includes multi-objective routing, nearby Safe Haven queries, and explainable route safety analysis, with machine-learning-based risk prediction and privacy features planned for future development.
          </motion.p>

          {/* Engineering Scope Notice */}
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            className="border border-lavender/10 rounded-xl p-4 bg-lavender/3 max-w-3xl mb-8 text-xs font-body text-lavender/65 leading-relaxed flex items-start gap-3"
          >
            <Info size={16} className="text-pink-soft/80 shrink-0 mt-0.5" />
            <p>
              <strong className="text-lavender/90">Engineering Objective &amp; Scope:</strong> SafeHer AI is designed as a technical platform to evaluate route risk and help users compare travel options under transparent heuristics. It does not claim to guarantee personal safety or definitively predict danger in real-world environments.
            </p>
          </motion.div>

          {/* Hero Quick Stat Chips */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.26 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mb-4"
          >
            <div className="border border-lavender/10 rounded-xl p-3 bg-lavender/3 flex flex-col items-center text-center">
              <span className="font-body text-xs font-semibold text-pink-soft">Multi-Objective</span>
              <span className="font-body text-[10px] text-lavender/50 mt-0.5">Fastest · Balanced · Safest</span>
            </div>
            <div className="border border-lavender/10 rounded-xl p-3 bg-lavender/3 flex flex-col items-center text-center">
              <span className="font-body text-xs font-semibold text-pink-soft">PostgreSQL / PostGIS</span>
              <span className="font-body text-[10px] text-lavender/50 mt-0.5">Spatial indexing &amp; GiST</span>
            </div>
            <div className="border border-lavender/10 rounded-xl p-3 bg-lavender/3 flex flex-col items-center text-center">
              <span className="font-body text-xs font-semibold text-pink-soft">7-Day Time Decay</span>
              <span className="font-body text-[10px] text-lavender/50 mt-0.5">Incident risk overlays</span>
            </div>
            <div className="border border-lavender/10 rounded-xl p-3 bg-lavender/3 flex flex-col items-center text-center">
              <span className="font-body text-xs font-semibold text-pink-soft">0–100 SRI &amp; Score</span>
              <span className="font-body text-[10px] text-lavender/50 mt-0.5">Rule-based explainability</span>
            </div>
          </motion.div>
        </header>

        {/* ── Main Content ──────────────────────────────────────────── */}
        <main className="px-6 md:px-10 max-w-5xl mx-auto pb-20" id="case-study-content">
          {/* ── 2. PROBLEM STATEMENT ─────────────────────────────────── */}
          <section aria-labelledby="section-problem">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Project Motivation
              </p>
              <h2 id="section-problem" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Problem Statement &amp; Objective
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="border border-lavender/10 rounded-xl p-5 bg-card/80">
                  <div className="flex items-center gap-2 mb-2 text-lavender/90 font-body text-xs font-semibold">
                    <Navigation size={14} className="text-pink-soft" />
                    <span>Conventional Route Optimization</span>
                  </div>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Mainstream navigation platforms prioritize physical distance and estimated travel duration. While highly optimized for traffic flow and transit efficiency, their core pathfinding models do not typically account for pedestrian lighting status, road-type vulnerability, proximity to emergency refuges, or localized safety reports.
                  </p>
                </div>

                <div className="border border-pink-soft/25 rounded-xl p-5 bg-pink-soft/4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft font-body text-xs font-semibold">
                    <ShieldCheck size={14} />
                    <span>Geospatial Safety Exploration</span>
                  </div>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    SafeHer AI evaluates how road characteristics, nearby safety resources, and recent community incident reports can contribute to route selection. The project objective is to evaluate multiple candidate routes using a configurable balance between travel efficiency and deterministic, rule-based risk estimates.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-lavender/8 rounded-xl p-4 bg-lavender/2 text-xs font-body text-lavender/60 leading-relaxed">
                <p>
                  <strong className="text-lavender/85">Realistic Formulation:</strong> SafeHer AI does not assert that conventional navigation platforms lack all safety mechanisms, nor does it guarantee an incident-free path. Rather, it builds a transparent testbed for multi-criteria graph pathfinding where safety parameters are first-class cost factors alongside physical distance.
                </p>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 3. CURRENT SYSTEM CAPABILITIES ────────────────────────── */}
          <section aria-labelledby="section-capabilities">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Implementation Details
              </p>
              <h2 id="section-capabilities" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                Current System Capabilities
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-6">
                The platform's completed milestones establish a solid backend, spatial data layer, routing engine, and explainability pipeline.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Capability 1 */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <Database size={14} />
                    <span>Geospatial Infrastructure</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• Road network imported from OpenStreetMap using OSMnx</li>
                    <li>• PostgreSQL / PostGIS spatial database with GiST indexing</li>
                    <li>• Geometry validation and coordinate normalization</li>
                    <li>• KNN nearest-node (<code className="text-pink-soft/90 font-mono text-[11px]">&lt;-&gt;</code>) spatial queries</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] font-mono text-lavender/40">
                    Milestone 1 · Completed
                  </div>
                </div>

                {/* Capability 2 */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <Compass size={14} />
                    <span>Routing Engine</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• Directed road graph constructed in NetworkX</li>
                    <li>• Multi-objective routing: <code className="text-pink-soft/80">fastest</code>, <code className="text-pink-soft/80">balanced</code>, <code className="text-pink-soft/80">safest</code></li>
                    <li>• In-memory graph caching for fast pathfinding</li>
                    <li>• GeoJSON route generation with edge risk metadata</li>
                    <li>• Flask endpoint: <code className="text-pink-soft/90 font-mono text-[11px]">GET /api/route</code></li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] font-mono text-lavender/40">
                    Milestone 2 · Completed
                  </div>
                </div>

                {/* Capability 3 */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <Hospital size={14} />
                    <span>Safe Haven Layer</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• Police stations, hospitals, and pharmacies in PostGIS</li>
                    <li>• Spatial querying within a 200m route buffer</li>
                    <li>• Proximity linking for emergency resource access</li>
                    <li>• Dynamic safety bonuses applied to adjacent road segments</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] font-mono text-lavender/40">
                    Milestone 3 · Completed
                  </div>
                </div>

                {/* Capability 4 */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <Shield size={14} />
                    <span>SafeHer Risk Index (SRI)</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• Rule-based scoring: 0 (lower risk) to 100 (elevated risk)</li>
                    <li>• Road type, lighting, segment length, Safe Haven proximity</li>
                    <li>• Persistent edge profiles in PostGIS (<code className="text-pink-soft/80 font-mono text-[11px]">edge_risk_profiles</code>)</li>
                    <li>• Endpoints: <code className="text-pink-soft/90 font-mono text-[11px]">/api/sri/statistics</code> &amp; <code className="text-pink-soft/90 font-mono text-[11px]">/api/sri/edge</code></li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] font-mono text-lavender/40">
                    Milestone 4 · Completed
                  </div>
                </div>

                {/* Capability 5 */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <AlertTriangle size={14} />
                    <span>Incident-Aware Routing</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• Community submission API: <code className="text-pink-soft/90 font-mono text-[11px]">POST /api/reports</code></li>
                    <li>• 200m spatial lookup with distance-graded penalties</li>
                    <li>• 7-day exponential time-decay model</li>
                    <li>• Dynamic runtime overlays without mutating cached graph</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] font-mono text-lavender/40">
                    Milestone 5 · Completed
                  </div>
                </div>

                {/* Capability 6 */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <ShieldAlert size={14} />
                    <span>Explainable Route Analysis</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• Rule-based route assessment (<code className="text-pink-soft/90 font-mono text-[11px]">/api/route/analyze</code>)</li>
                    <li>• 0–100 route safety score &amp; 5-tier classification</li>
                    <li>• High-risk zones, active incidents, Safe Haven counts</li>
                    <li>• Attribution of positive/negative contributing factors</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] font-mono text-lavender/40">
                    Milestone 6 · Completed
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 4. ARCHITECTURE DIAGRAM ───────────────────────────────── */}
          <section aria-labelledby="section-arch">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                System Architecture
              </p>
              <h2 id="section-arch" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-2">
                Connected Geospatial Architecture
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-6">
                SafeHer AI operates as a cohesive Python/Flask service backed by PostgreSQL/PostGIS. The core engines are in-process modular services, keeping pathfinding fast in memory while maintaining PostGIS as the authoritative spatial source of truth.
              </p>
            </Reveal>

            {/* Responsive Flowchart Diagram */}
            <Reveal delay={0.05}>
              <div className="border border-lavender/12 rounded-2xl p-5 md:p-6 bg-card/90 mb-5">
                {/* Layer 1: Frontend */}
                <div className="text-center mb-4">
                  <div className="inline-block border border-pink-soft/30 bg-pink-soft/8 rounded-xl px-6 py-2.5 shadow-sm">
                    <p className="font-body text-xs font-semibold text-pink-soft">Frontend Interface</p>
                    <p className="font-mono text-[11px] text-lavender/70">Leaflet.js Map · Coordinate Snapping · Layer Overlays · Analysis Panel</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-1 text-lavender/30 font-mono text-sm">↓ REST API Requests (HTTP / JSON / GeoJSON)</div>

                {/* Layer 2: API Layer */}
                <div className="text-center mb-4">
                  <div className="inline-block border border-lavender/20 bg-lavender/6 rounded-xl px-6 py-2">
                    <p className="font-body text-xs font-semibold text-purple-lilac">Flask REST API Layer</p>
                    <p className="font-mono text-[11px] text-lavender/60">/api/route · /api/reports · /api/sri/statistics · /api/safe-havens · /api/route/analyze</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-1 text-lavender/30 font-mono text-sm">↓ In-Process Core Service Dispatch</div>

                {/* Layer 3: Core In-Process Services */}
                <div className="border border-lavender/15 rounded-xl p-4 bg-lavender/2 mb-4">
                  <p className="font-body text-[10px] tracking-[0.15em] uppercase text-pink-soft/80 font-semibold mb-3 text-center">
                    Core Application Engines (Modular In-Process Python Services)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                    <div className="border border-lavender/10 rounded-lg p-2.5 bg-card/80 text-center">
                      <p className="font-body text-[11px] font-semibold text-lavender/90">Routing Service</p>
                      <p className="font-mono text-[10px] text-lavender/50 mt-1">NetworkX DiGraph</p>
                      <p className="text-[9px] text-lavender/40 mt-0.5">In-Memory Dijkstra</p>
                    </div>
                    <div className="border border-lavender/10 rounded-lg p-2.5 bg-card/80 text-center">
                      <p className="font-body text-[11px] font-semibold text-lavender/90">Safe Haven Service</p>
                      <p className="font-mono text-[10px] text-lavender/50 mt-1">Spatial Queries</p>
                      <p className="text-[9px] text-lavender/40 mt-0.5">200m Proximity Linking</p>
                    </div>
                    <div className="border border-lavender/10 rounded-lg p-2.5 bg-card/80 text-center">
                      <p className="font-body text-[11px] font-semibold text-lavender/90">SRI Engine</p>
                      <p className="font-mono text-[10px] text-lavender/50 mt-1">Base Edge Scoring</p>
                      <p className="text-[9px] text-lavender/40 mt-0.5">Road Type &amp; Lighting</p>
                    </div>
                    <div className="border border-lavender/10 rounded-lg p-2.5 bg-card/80 text-center">
                      <p className="font-body text-[11px] font-semibold text-lavender/90">Incident Engine</p>
                      <p className="font-mono text-[10px] text-lavender/50 mt-1">Dynamic Risk Overlay</p>
                      <p className="text-[9px] text-lavender/40 mt-0.5">7-Day Time Decay</p>
                    </div>
                    <div className="border border-lavender/10 rounded-lg p-2.5 bg-card/80 text-center">
                      <p className="font-body text-[11px] font-semibold text-lavender/90">Route Analyzer</p>
                      <p className="font-mono text-[10px] text-lavender/50 mt-1">Safety Score Engine</p>
                      <p className="text-[9px] text-lavender/40 mt-0.5">Rule Explainability</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-1 text-lavender/30 font-mono text-sm">↓ Spatial Reads &amp; Incident Persistence (psycopg2 / GeoAlchemy2)</div>

                {/* Layer 4: Spatial Database */}
                <div className="text-center mb-3">
                  <div className="inline-block border border-pink-soft/25 bg-pink-soft/5 rounded-xl px-6 py-2.5">
                    <p className="font-body text-xs font-semibold text-pink-soft">PostgreSQL / PostGIS (Spatial Database &amp; Single Source of Truth)</p>
                    <p className="font-mono text-[11px] text-lavender/70">road_nodes · road_edges · safe_havens · edge_risk_profiles · community_reports</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-1 text-lavender/30 font-mono text-sm">↑ Initial Graph Loading via OSMnx Ingestion</div>

                {/* Layer 5: Data Source */}
                <div className="text-center">
                  <span className="inline-block border border-lavender/15 bg-lavender/4 rounded-full px-4 py-1 text-xs font-body text-lavender/60">
                    OpenStreetMap Road Network (OSMnx + Overpass API)
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid sm:grid-cols-2 gap-3 text-xs font-body text-lavender/60 leading-relaxed">
                <div className="border border-lavender/8 rounded-xl p-3 bg-lavender/2">
                  <strong className="text-lavender/85">Authoritative PostGIS Storage:</strong> Road geometries, Safe Haven points of interest, persistent base edge risk scores (<code className="text-pink-soft/80 font-mono">edge_risk_profiles</code>), and community incident records remain securely in PostGIS with spatial GiST indexing.
                </div>
                <div className="border border-lavender/8 rounded-xl p-3 bg-lavender/2">
                  <strong className="text-lavender/85">In-Memory Graph Caching:</strong> At server startup, the directed graph is instantiated in NetworkX for fast Dijkstra pathfinding. Graph edge weights are computed dynamically per query, ensuring the cache is never mutated by runtime incident modifiers.
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 5. HOW ROUTING WORKS ─────────────────────────────────── */}
          <section aria-labelledby="section-routing-flow">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Algorithmic Pipeline
              </p>
              <h2 id="section-routing-flow" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                How Routing Works
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-6">
                From user coordinate selection to explainable safety assessment, path computation follows an 8-stage sequence:
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-lavender/10 rounded-2xl p-5 bg-card/70 mb-5">
                <div className="space-y-4">
                  {[
                    {
                      num: '01',
                      title: 'Coordinate Selection',
                      desc: 'The user selects origin and destination points directly on the Leaflet map interface or enters addresses.',
                    },
                    {
                      num: '02',
                      title: 'Road Network Snapping',
                      desc: 'PostGIS KNN operator (<->) locates the nearest valid road_nodes on the indexed graph: ST_SetSRID(ST_MakePoint(lon, lat), 4326).',
                    },
                    {
                      num: '03',
                      title: 'Multi-Objective Mode Selection',
                      desc: 'The routing service activates the requested routing mode (fastest, balanced, or safest) to configure the Dijkstra edge cost function.',
                    },
                    {
                      num: '04',
                      title: 'Road-Segment Risk Profile Weighting',
                      desc: 'Base SafeHer Risk Index (SRI) profiles contribute to traversal cost according to the configured mode equation.',
                    },
                    {
                      num: '05',
                      title: 'Dynamic Incident Risk Overlay',
                      desc: 'Active community incident reports within 200m apply distance-graded and 7-day time-decayed penalties without mutating the graph cache.',
                    },
                    {
                      num: '06',
                      title: 'GeoJSON Route Serialization',
                      desc: 'NetworkX resolves the optimal sequence of edges, which are reconstituted from PostGIS LineString geometries into standard GeoJSON with edge-by-edge risk metadata.',
                    },
                    {
                      num: '07',
                      title: 'Explainable Route Safety Assessment',
                      desc: 'The Route Analyzer extracts route features and computes a 0–100 overall safety score, safety level tier, contributing factors, and contextual safety recommendations.',
                    },
                    {
                      num: '08',
                      title: 'Interactive Frontend Visualization',
                      desc: 'Leaflet renders the route with color-coded risk segments, Safe Haven icons, community incident pins, and the interactive safety drawer.',
                    },
                  ].map((s) => (
                    <div key={s.num} className="flex items-start gap-3.5 pb-3 border-b border-lavender/6 last:border-b-0 last:pb-0">
                      <span className="font-mono text-xs font-semibold text-pink-soft border border-pink-soft/20 bg-pink-soft/5 rounded-md px-2 py-0.5 shrink-0">
                        {s.num}
                      </span>
                      <div>
                        <p className="font-body text-xs font-semibold text-lavender/90 mb-0.5">{s.title}</p>
                        <p className="font-body text-xs text-lavender/60 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Mode Equation Formula Breakdown */}
            <Reveal delay={0.08}>
              <div className="border border-pink-soft/20 rounded-xl p-4 bg-pink-soft/3 mb-4">
                <p className="font-body text-xs font-semibold text-pink-soft mb-2">Cost Formulation Across Routing Modes</p>
                <div className="grid sm:grid-cols-3 gap-3 font-mono text-[11px]">
                  <div className="border border-lavender/10 rounded-lg p-2.5 bg-card/60">
                    <span className="text-pink-soft font-semibold block mb-1">Mode: fastest</span>
                    <span className="text-lavender/80">cost = distance</span>
                    <p className="font-body text-[10px] text-lavender/45 mt-1">Minimizes traversal distance only</p>
                  </div>
                  <div className="border border-lavender/10 rounded-lg p-2.5 bg-card/60">
                    <span className="text-pink-soft font-semibold block mb-1">Mode: balanced</span>
                    <span className="text-lavender/80">cost = 0.6×dist + 0.4×risk</span>
                    <p className="font-body text-[10px] text-lavender/45 mt-1">Compromise between speed &amp; safety</p>
                  </div>
                  <div className="border border-lavender/10 rounded-lg p-2.5 bg-card/60">
                    <span className="text-pink-soft font-semibold block mb-1">Mode: safest</span>
                    <span className="text-lavender/80">cost = 0.2×dist + 0.8×risk</span>
                    <p className="font-body text-[10px] text-lavender/45 mt-1">Heavy penalty on high-risk road edges</p>
                  </div>
                </div>
                <p className="font-body text-[11px] text-lavender/50 mt-2.5">
                  Where <code className="text-pink-soft/90">effective_risk = clamp(base_SRI + incident_penalty, 0.0, 100.0)</code>.
                </p>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 6. SAFEHER RISK INDEX (SRI) ──────────────────────────── */}
          <section aria-labelledby="section-sri">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Risk Modeling
              </p>
              <h2 id="section-sri" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                SafeHer Risk Index (SRI)
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-5">
                The SafeHer Risk Index is a deterministic, rule-based scoring engine that evaluates individual road segments on a scale of 0 to 100, where 0 denotes lower estimated risk and 100 denotes higher estimated risk.
              </p>
            </Reveal>

            {/* Score Differentiation Card */}
            <Reveal delay={0.04}>
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                <div className="border border-lavender/15 rounded-xl p-3.5 bg-card/80">
                  <span className="font-body text-[10px] uppercase tracking-wider text-pink-soft font-semibold">Stage 1</span>
                  <p className="font-body text-xs font-semibold text-lavender/90 mt-1 mb-1">Base Road-Segment Risk</p>
                  <p className="font-body text-[11px] text-lavender/55 leading-relaxed">
                    Persistent edge score in PostGIS <code className="text-pink-soft/80 font-mono">edge_risk_profiles</code> based on road type, lighting status, length, and Safe Haven proximity.
                  </p>
                </div>

                <div className="border border-pink-soft/25 rounded-xl p-3.5 bg-pink-soft/5">
                  <span className="font-body text-[10px] uppercase tracking-wider text-pink-soft font-semibold">Stage 2</span>
                  <p className="font-body text-xs font-semibold text-pink-soft mt-1 mb-1">Dynamic Effective Risk</p>
                  <p className="font-body text-[11px] text-lavender/65 leading-relaxed">
                    Runtime-evaluated risk during routing incorporating 7-day time-decayed incident penalties: <code className="text-pink-soft/90 font-mono">base_SRI + penalty</code>.
                  </p>
                </div>

                <div className="border border-lavender/15 rounded-xl p-3.5 bg-card/80">
                  <span className="font-body text-[10px] uppercase tracking-wider text-pink-soft font-semibold">Stage 3</span>
                  <p className="font-body text-xs font-semibold text-lavender/90 mt-1 mb-1">Route Safety Assessment</p>
                  <p className="font-body text-[11px] text-lavender/55 leading-relaxed">
                    Overall path assessment (0–100 score, tier, contributing factors, recommendations) computed by the Route Analyzer across all route edges.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Factor Table Breakdown */}
            <Reveal delay={0.06}>
              <div className="border border-lavender/10 rounded-2xl p-5 bg-card/70 mb-5">
                <p className="font-body text-xs font-semibold text-lavender/90 mb-3">
                  Documented Base SRI Factor Breakdown (<code className="font-mono text-pink-soft">sri_engine.py</code>)
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-body text-xs">
                    <thead>
                      <tr className="border-b border-lavender/10 text-lavender/40 text-[11px]">
                        <th className="pb-2 font-normal">Factor</th>
                        <th className="pb-2 font-normal">Input Parameter</th>
                        <th className="pb-2 font-normal">Applied Penalty / Bonus</th>
                        <th className="pb-2 font-normal">Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-lavender/6 text-lavender/70">
                      <tr>
                        <td className="py-2.5 font-medium text-lavender/90">Road Classification</td>
                        <td className="py-2.5 font-mono text-[11px]">OSM highway tag</td>
                        <td className="py-2.5 font-mono text-[11px] text-pink-soft">+5 (motorway) to +50 (path)</td>
                        <td className="py-2.5 text-lavender/55">Primary roads have higher foot traffic; isolated paths have lower surveillance</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium text-lavender/90">Street Lighting</td>
                        <td className="py-2.5 font-mono text-[11px]">lit boolean tag</td>
                        <td className="py-2.5 font-mono text-[11px] text-pink-soft">0 if lit, +15 if unlit</td>
                        <td className="py-2.5 text-lavender/55">Night-time visibility is a critical safety consideration for pedestrians</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium text-lavender/90">Segment Length</td>
                        <td className="py-2.5 font-mono text-[11px]">length in metres</td>
                        <td className="py-2.5 font-mono text-[11px] text-pink-soft">0 (&lt;50m) to +12 (&ge;500m)</td>
                        <td className="py-2.5 text-lavender/55">Long unbroken segments offer fewer exit routes and intersections</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium text-lavender/90">Safe Haven Proximity</td>
                        <td className="py-2.5 font-mono text-[11px]">distance to nearest haven</td>
                        <td className="py-2.5 font-mono text-[11px] text-pink-soft">-20 (&le;100m) to -3 (&le;1000m)</td>
                        <td className="py-2.5 text-lavender/55">Proximity to police stations, hospitals, and pharmacies reduces estimated risk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 pt-3 border-t border-lavender/8 font-mono text-xs text-lavender/60">
                  Base SRI Formula: <span className="text-pink-soft">raw_score = road_type + lighting + length - safe_haven_bonus</span> (clamped to 0.0 – 100.0)
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-lavender/8 rounded-xl p-4 bg-lavender/2 text-xs font-body text-lavender/60 leading-relaxed">
                <p>
                  <strong className="text-lavender/85">Technical Honesty on Rule-Based Heuristics:</strong> While a deterministic, configurable risk model provides transparent, explainable behavior without black-box opacity, the scores depend entirely on the completeness and accuracy of OpenStreetMap tags (e.g. lighting coverage). The scores are heuristic approximations and have not been validated against empirical police crime logs or independent epidemiological safety studies.
                </p>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 7. COMMUNITY INCIDENT INTELLIGENCE ───────────────────── */}
          <section aria-labelledby="section-incidents">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Dynamic Incident Layer
              </p>
              <h2 id="section-incidents" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                Community Incident Intelligence
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-5">
                Community members can file safety reports (<code className="text-pink-soft font-mono">POST /api/reports</code>). Rather than permanently marking areas as unsafe, reports apply dynamic, distance-graded, time-decayed penalties during route calculation.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                {/* Distance-based penalty */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/70">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft font-body text-xs font-semibold">
                    <MapPin size={14} />
                    <span>Distance Penalty (200m Spatial Buffer)</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs text-lavender/70">
                    <div className="flex justify-between border-b border-lavender/6 pb-1">
                      <span>Distance &le; 50 metres:</span>
                      <span className="text-pink-soft font-semibold">+20 base penalty</span>
                    </div>
                    <div className="flex justify-between border-b border-lavender/6 pb-1">
                      <span>Distance &le; 100 metres:</span>
                      <span className="text-pink-soft font-semibold">+12 base penalty</span>
                    </div>
                    <div className="flex justify-between border-b border-lavender/6 pb-1">
                      <span>Distance &le; 200 metres:</span>
                      <span className="text-pink-soft font-semibold">+5 base penalty</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Distance &gt; 200 metres:</span>
                      <span className="text-lavender/40">0 penalty (out of range)</span>
                    </div>
                  </div>
                </div>

                {/* 7-Day Time Decay */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/70">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft font-body text-xs font-semibold">
                    <Clock size={14} />
                    <span>7-Day Exponential Time Decay</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs text-lavender/70">
                    <div className="flex justify-between border-b border-lavender/6 pb-1">
                      <span>Age &le; 24 hours:</span>
                      <span className="text-pink-soft font-semibold">100% impact (1.0x)</span>
                    </div>
                    <div className="flex justify-between border-b border-lavender/6 pb-1">
                      <span>Age 1 – 3 days:</span>
                      <span className="text-pink-soft font-semibold">70% impact (0.7x)</span>
                    </div>
                    <div className="flex justify-between border-b border-lavender/6 pb-1">
                      <span>Age 3 – 7 days:</span>
                      <span className="text-pink-soft font-semibold">40% impact (0.4x)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Age &gt; 7 days:</span>
                      <span className="text-lavender/40">0% impact (expired)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-lavender/10 rounded-xl p-4 bg-card/50 text-xs font-body text-lavender/60 leading-relaxed space-y-2">
                <p>
                  <strong className="text-lavender/85">Immutable Graph Architecture:</strong> At runtime, <code className="text-pink-soft font-mono">get_active_incident_penalties()</code> queries PostGIS for active reports within 7 days, aggregates decayed penalties, and caps the cumulative edge penalty to <code className="text-pink-soft font-mono">[0.0, 20.0]</code>. The in-memory NetworkX graph is never mutated; Dijkstra's weight function evaluates the overlay purely during traversal.
                </p>
                <p className="text-lavender/50">
                  <strong className="text-lavender/80">Responsible Interpretation:</strong> Community reports represent an unverified crowd-sourced signal. A multi-user verification and trust-reputation mechanism is planned for future releases. Until then, reports are treated as dynamic risk indicators rather than definitive proof of danger.
                </p>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 8. EXPLAINABILITY & ROUTE COMPARISON ─────────────────── */}
          <section aria-labelledby="section-explainability">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Transparency &amp; Attribution
              </p>
              <h2 id="section-explainability" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                Explainability &amp; Route Safety Assessment
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-5">
                Rather than delivering an opaque score, the Route Analyzer (<code className="text-pink-soft font-mono">backend/core/safety_score.py</code>) derives an overall 0–100 route score, a safety classification, and human-readable positive and negative contributing factors.
              </p>
            </Reveal>

            {/* Assessment Formula */}
            <Reveal delay={0.04}>
              <div className="border border-pink-soft/20 rounded-xl p-4 bg-pink-soft/4 mb-5">
                <p className="font-body text-xs font-semibold text-pink-soft mb-1.5">Route Safety Score Formula</p>
                <div className="font-mono text-xs text-lavender/85 bg-card/80 p-3 rounded-lg border border-lavender/10">
                  raw_score = 100.0 - (0.5 × effective_risk) - (3.0 × incidents) - (5.0 × high_risk_zones) + (2.0 × safe_havens)
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3 text-center font-mono text-[10px]">
                  <div className="border border-emerald-500/30 bg-emerald-500/8 rounded p-1.5 text-emerald-300">
                    &ge; 80 : SAFE
                  </div>
                  <div className="border border-teal-500/30 bg-teal-500/8 rounded p-1.5 text-teal-300">
                    &ge; 60 : LOW RISK
                  </div>
                  <div className="border border-amber-500/30 bg-amber-500/8 rounded p-1.5 text-amber-300">
                    &ge; 40 : MODERATE
                  </div>
                  <div className="border border-orange-500/30 bg-orange-500/8 rounded p-1.5 text-orange-300">
                    &ge; 20 : HIGH RISK
                  </div>
                  <div className="border border-rose-500/30 bg-rose-500/8 rounded p-1.5 text-rose-300">
                    &lt; 20 : CRITICAL
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Illustrative Sample Output Card */}
            <Reveal delay={0.06}>
              <div className="border border-lavender/12 rounded-2xl p-5 bg-card/80 mb-5">
                <div className="flex items-center justify-between mb-3 border-b border-lavender/8 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-xs font-semibold text-lavender/90">Safety Analysis Engine Output</span>
                    <span className="font-mono text-[10px] text-pink-soft border border-pink-soft/30 bg-pink-soft/8 rounded px-2 py-0.5">
                      Illustrative Sample Output
                    </span>
                  </div>
                  <span className="font-mono text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Score: 84.5 / 100 · SAFE
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs font-body mb-4">
                  <div>
                    <p className="font-semibold text-emerald-400/90 mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 size={13} /> Positive Contributing Factors
                    </p>
                    <ul className="text-lavender/65 space-y-1 list-disc list-inside">
                      <li>3 safe havens (hospitals, police) within 200m of the route</li>
                      <li>No road segments with critically elevated risk detected</li>
                      <li>Average effective route risk is low (22.4/100)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-amber-400/90 mb-1.5 flex items-center gap-1.5">
                      <AlertTriangle size={13} /> Risk Factors Detected
                    </p>
                    <ul className="text-lavender/65 space-y-1 list-disc list-inside">
                      <li>1 recent community incident report filed within 200m</li>
                      <li>Fastest routing mode prioritizes distance over lighting</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-lavender/8 text-[11px] font-body text-lavender/60">
                  <strong className="text-lavender/85">Contextual Recommendations:</strong> Share live location with a trusted contact before starting. Emergency contacts: Police (100), Ambulance (108), Women Helpline (1091).
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-lavender/8 rounded-xl p-4 bg-lavender/2 text-xs font-body text-lavender/60 leading-relaxed">
                <p>
                  <strong className="text-lavender/85">Notice on Explainability Architecture:</strong> The current system employs a deterministic, rule-based feature extraction and attribution engine. It does not use SHAP (SHapley Additive exPlanations) or machine learning models at this stage; SHAP-based feature importance is planned alongside future ML risk models.
                </p>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 9. INTERACTIVE MAP & INTERFACE ───────────────────────── */}
          <section aria-labelledby="section-interface">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                User Experience
              </p>
              <h2 id="section-interface" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                Interactive Map &amp; Interface
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-5">
                The browser-based interface (<code className="text-pink-soft font-mono">frontend/index.html</code>) integrates Leaflet.js with dynamic backend REST endpoints to provide an intuitive spatial control deck.
              </p>
            </Reveal>

            {/* Interactive Control Deck Mockup */}
            <Reveal delay={0.05}>
              <div className="border border-lavender/12 rounded-2xl p-5 bg-card/90 mb-5">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-lavender/8">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-soft/80" />
                    <span className="font-body text-xs font-semibold text-lavender/90">SafeHer AI Navigation Deck</span>
                    <span className="font-mono text-[10px] text-lavender/40">Leaflet v1.9 · OpenStreetMap Tiles</span>
                  </div>

                  {/* Mode Selector Buttons */}
                  <div className="flex items-center gap-1.5 border border-lavender/12 bg-lavender/3 rounded-lg p-1">
                    {(['fastest', 'balanced', 'safest'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setActiveRoutingMode(mode)}
                        className={`font-body text-xs px-2.5 py-1 rounded-md transition-colors duration-150 capitalize ${
                          activeRoutingMode === mode
                            ? 'bg-pink-soft/15 text-pink-soft font-medium border border-pink-soft/30'
                            : 'text-lavender/50 hover:text-lavender'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Map Visual Representation */}
                <div
                  className="rounded-xl border border-lavender/10 p-6 mb-4 relative overflow-hidden"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 50%, rgba(26,20,38,0.9) 0%, rgba(14,10,24,0.95) 100%)',
                    minHeight: '220px',
                  }}
                >
                  {/* Subtle Grid / Map Road Line Motifs */}
                  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(216,180,226,0.3)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Road Network Lines */}
                    <path d="M 50 180 Q 200 80 400 120 T 700 60" fill="none" stroke="rgba(244,167,187,0.5)" strokeWidth="2" strokeDasharray="4 2" />
                    <path d="M 80 50 Q 260 140 500 110 T 800 160" fill="none" stroke="rgba(192,132,252,0.4)" strokeWidth="1.5" />
                  </svg>

                  <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full text-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" /> Start: Snapped to OSM Node #49281
                      </span>
                      <span className="flex items-center gap-1.5 bg-pink-soft/10 border border-pink-soft/25 px-2.5 py-1 rounded-full text-pink-soft">
                        <span className="w-2 h-2 rounded-full bg-pink-soft" /> Destination: Snapped to Node #91024
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-2.5 max-w-xl">
                      <div className="border border-lavender/10 bg-card/80 backdrop-blur rounded-lg p-2.5 text-xs">
                        <span className="text-pink-soft font-semibold block mb-0.5">Route Visualization</span>
                        <span className="text-lavender/60 text-[11px]">Edge-by-edge risk color gradation (Low: Green, High: Red)</span>
                      </div>
                      <div className="border border-lavender/10 bg-card/80 backdrop-blur rounded-lg p-2.5 text-xs">
                        <span className="text-purple-lilac font-semibold block mb-0.5">Safe Havens</span>
                        <span className="text-lavender/60 text-[11px]">Police, Hospitals, Pharmacies highlighted within 200m</span>
                      </div>
                      <div className="border border-lavender/10 bg-card/80 backdrop-blur rounded-lg p-2.5 text-xs">
                        <span className="text-amber-300 font-semibold block mb-0.5">Community Reports</span>
                        <span className="text-lavender/60 text-[11px]">Interactive incident pins with 7-day age markers</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-body text-xs text-lavender/50 text-center">
                  Interface features: Point snapping · Route mode toggling · Safe Haven layer filters · Incident reporting modal · Safety assessment drawer.
                </p>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 10. TECHNOLOGY STACK ─────────────────────────────────── */}
          <section aria-labelledby="section-tech">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Engineering Foundation
              </p>
              <h2 id="section-tech" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                Technology Stack
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-6">
                Organized into active foundational layers and planned machine-learning expansions.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Backend */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <Cpu size={14} />
                    <span>Backend Services</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• Python 3.10+</li>
                    <li>• Flask &amp; Flask-CORS</li>
                    <li>• NetworkX</li>
                    <li>• SQLAlchemy &amp; GeoAlchemy2</li>
                    <li>• psycopg2</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] text-emerald-400/90 font-medium">
                    Implemented
                  </div>
                </div>

                {/* Geospatial */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <Database size={14} />
                    <span>Geospatial Layer</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• PostgreSQL 16</li>
                    <li>• PostGIS 3.4</li>
                    <li>• OpenStreetMap (OSM)</li>
                    <li>• OSMnx</li>
                    <li>• Overpass API / overpy</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] text-emerald-400/90 font-medium">
                    Implemented
                  </div>
                </div>

                {/* Frontend */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <Layers size={14} />
                    <span>Frontend &amp; UI</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• HTML5 / CSS3</li>
                    <li>• Vanilla JavaScript (ES6+)</li>
                    <li>• Leaflet.js</li>
                    <li>• OSM Tile Provider</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] text-emerald-400/90 font-medium">
                    Implemented
                  </div>
                </div>

                {/* DevOps */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft text-xs font-semibold">
                    <Sparkles size={14} />
                    <span>Infrastructure</span>
                  </div>
                  <ul className="font-body text-xs text-lavender/65 space-y-1.5 flex-1">
                    <li>• Docker</li>
                    <li>• Docker Compose</li>
                    <li>• python-dotenv</li>
                    <li>• PostGIS Container</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-lavender/8 text-[11px] text-emerald-400/90 font-medium">
                    Implemented
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Planned ML Stack - Clearly Separated */}
            <Reveal delay={0.08}>
              <div className="border border-purple-soft/25 rounded-xl p-4 bg-purple-soft/4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-xs font-semibold text-purple-lilac flex items-center gap-2">
                    <Cpu size={14} className="text-purple-soft" />
                    Planned Machine-Learning Stack (Future Milestones)
                  </span>
                  <span className="font-mono text-[10px] text-amber-300 border border-amber-400/30 bg-amber-400/10 rounded px-2 py-0.5">
                    Planned · Not Implemented
                  </span>
                </div>
                <p className="font-body text-xs text-lavender/60 mb-2">
                  Future milestones will replace rule-based heuristics with trained predictive risk models and model-level interpretability:
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-lavender/70">
                  <span className="border border-lavender/12 bg-card px-2.5 py-1 rounded">Scikit-learn</span>
                  <span className="border border-lavender/12 bg-card px-2.5 py-1 rounded">TensorFlow</span>
                  <span className="border border-lavender/12 bg-card px-2.5 py-1 rounded">SHAP (SHapley Additive exPlanations)</span>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 11. DEVELOPMENT PROGRESS ─────────────────────────────── */}
          <section aria-labelledby="section-progress">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Roadmap Execution
              </p>
              <h2 id="section-progress" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                Development Progress
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-6">
                Milestones 1 through 6 represent completed backend and analytical milestones documented in the project repository. Milestone 7 defines upcoming privacy and security engineering.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="space-y-3">
                {[
                  {
                    m: 'Milestone 1',
                    title: 'Spatial Infrastructure',
                    status: 'Completed',
                    details: 'Dockerized PostgreSQL/PostGIS, OSMnx road graph import, GiST spatial indexing, graph and geometry validation.',
                  },
                  {
                    m: 'Milestone 2',
                    title: 'Routing Engine',
                    status: 'Completed',
                    details: 'Directed road graph construction in NetworkX, Dijkstra shortest-path pathfinding, /api/route endpoint, GeoJSON route output, in-memory graph caching.',
                  },
                  {
                    m: 'Milestone 3',
                    title: 'Safe Haven Layer',
                    status: 'Completed',
                    details: 'Safe Haven schema and OSM point-of-interest import (police, hospitals, pharmacies), 200m spatial buffer queries, Leaflet map integration, route proximity linking.',
                  },
                  {
                    m: 'Milestone 4',
                    title: 'SafeHer Risk Index (SRI)',
                    status: 'Completed',
                    details: 'Rule-based road-segment risk scoring (road type, lighting, length, Safe Haven proximity), multi-objective routing modes, /api/sri/statistics and /api/sri/edge endpoints, PostGIS persistence.',
                  },
                  {
                    m: 'Milestone 5',
                    title: 'Incident-Aware Routing',
                    status: 'Completed',
                    details: 'Community incident submission (/api/reports), distance-based penalties within 200m, 7-day exponential time-decay model, dynamic risk overlays without graph cache mutation.',
                  },
                  {
                    m: 'Milestone 6',
                    title: 'Explainable Route Safety Analysis',
                    status: 'Completed',
                    details: 'Rule-based route safety assessment engine, 0–100 overall route score and 5-tier classification, contributing factor attribution, contextual recommendations, interactive frontend analysis panel.',
                  },
                  {
                    m: 'Milestone 7',
                    title: 'Privacy and Security',
                    status: 'Planned',
                    details: 'Authentication and user management, trusted contacts and automated location sharing, one-touch SOS workflows, privacy-preserving location anonymization.',
                  },
                ].map((item) => (
                  <div
                    key={item.m}
                    className="border border-lavender/10 rounded-xl p-4 bg-card/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-semibold text-pink-soft">{item.m}</span>
                        <span className="text-lavender/30">·</span>
                        <span className="font-body text-xs font-semibold text-lavender/90">{item.title}</span>
                      </div>
                      <p className="font-body text-xs text-lavender/60">{item.details}</p>
                    </div>

                    <span
                      className={`font-body text-xs px-2.5 py-0.5 rounded-full shrink-0 self-start sm:self-center font-medium ${
                        item.status === 'Completed'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'
                          : 'bg-amber-400/10 text-amber-300 border border-amber-400/25'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 12. FUTURE DEVELOPMENT ───────────────────────────────── */}
          <section aria-labelledby="section-future">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Upcoming Architecture
              </p>
              <h2 id="section-future" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                Future Development &amp; Planned Capabilities
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-6">
                All capabilities listed below are explicitly planned and will be introduced in subsequent phases:
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft text-xs font-semibold">
                    <Cpu size={14} />
                    <span>ML-Based Risk Prediction</span>
                  </div>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Train supervised predictive models on historical urban incident records to predict segment risk dynamically, incorporating live traffic, weather, and crowd density data.
                  </p>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft text-xs font-semibold">
                    <Sparkles size={14} />
                    <span>Advanced Explainability (SHAP)</span>
                  </div>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Integrate SHAP (SHapley Additive exPlanations) to provide mathematical feature attribution breakdown per route recommendation, along with model uncertainty bounds.
                  </p>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft text-xs font-semibold">
                    <Shield size={14} />
                    <span>Community Trust System</span>
                  </div>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Reputation scoring, multi-user report verification, anti-spam mechanisms, and community feedback loops on route safety observations.
                  </p>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft text-xs font-semibold">
                    <Lock size={14} />
                    <span>Privacy &amp; Security</span>
                  </div>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Role-based user authentication, encrypted trusted contacts, automated location sharing, one-touch SOS triggers, and differential location anonymization.
                  </p>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-card/60 sm:col-span-2 lg:col-span-2">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-soft text-xs font-semibold">
                    <Navigation size={14} />
                    <span>Real-Time Navigation &amp; Dynamic Rerouting</span>
                  </div>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Continuous background monitoring during transit with real-time incident notifications, automated route recalculation when safer corridors open, and turn-by-turn guidance.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 13. LIMITATIONS & RESPONSIBLE INTERPRETATION ─────────── */}
          <section aria-labelledby="section-limitations">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Engineering Honesty
              </p>
              <h2 id="section-limitations" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                Limitations &amp; Responsible Interpretation
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-lavender/10 rounded-2xl p-5 bg-card/70 space-y-3 text-xs font-body text-lavender/65 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="text-pink-soft font-bold">•</span>
                  <p>
                    <strong className="text-lavender/90">Rule-Based Heuristic Nature:</strong> The current SafeHer Risk Index is computed using deterministic equations rather than predictive machine learning. Its calculations are as reliable as the underlying OpenStreetMap tags and reporting activity.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-pink-soft font-bold">•</span>
                  <p>
                    <strong className="text-lavender/90">Data Completeness &amp; Tag Gaps:</strong> Missing street lighting tags or unclassified roads in OpenStreetMap can skew edge risk profiles. Route safety scores represent model-derived estimates, not a guarantee of safety.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-pink-soft font-bold">•</span>
                  <p>
                    <strong className="text-lavender/90">Unimplemented Safety Protocols:</strong> User authentication, trusted contact workflows, automated live-location broadcasting, and emergency SOS triggers are planned for Milestone 7 and are not present in the current build.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-pink-soft font-bold">•</span>
                  <p>
                    <strong className="text-lavender/90">No Empirical Outcome Claims:</strong> The project does not assert measured reductions in real-world crime or empirical safety outcomes without rigorous field evaluation data.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 14. FUTURE SCOPE ─────────────────────────────────────── */}
          <section aria-labelledby="section-scope">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Long-Term Vision
              </p>
              <h2 id="section-scope" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-3">
                Future Scope
              </h2>
              <p className="font-body text-xs md:text-sm text-lavender/70 leading-relaxed max-w-3xl mb-6">
                SafeHer AI aims to evolve into a comprehensive, privacy-conscious safety navigation platform that unites geospatial analytics, predictive risk modeling, explainable machine learning, and real-time navigation support to advance safer urban mobility.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-lavender/8">
                <a
                  href="https://github.com/Shivangid2904/safeher-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs md:text-sm font-medium text-pink-soft border border-pink-soft/40 bg-pink-soft/10 rounded-full px-5 py-2 hover:bg-pink-soft/20 transition-colors duration-200"
                  aria-label="View SafeHer AI on GitHub"
                >
                  <Github size={13} />
                  <span>GitHub Repository &#8599;</span>
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-lavender/60 hover:text-lavender border border-lavender/12 bg-lavender/4 rounded-full px-4 py-2 transition-colors duration-200"
                >
                  <ArrowLeft size={13} />
                  <span>Back to All Projects</span>
                </Link>
              </div>
            </Reveal>
          </section>
        </main>
      </div>
    </div>
  )
}
