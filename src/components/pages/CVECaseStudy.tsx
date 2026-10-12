import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft, Github, Database, Bell,
  Server, Cloud, Lock, Layers, RefreshCw,
  ShieldAlert,
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

export default function CVECaseStudy() {
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
            href="https://github.com/Shivangid2904/cve-vulnerability-intelligence-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-xs font-medium text-pink-soft border border-pink-soft/30 bg-pink-soft/8 rounded-full px-3 py-1 hover:bg-pink-soft/15 transition-colors duration-200"
            aria-label="CVE Platform on GitHub"
          >
            <Github size={13} />
            <span>GitHub</span>
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
              Cloud Security · AWS Serverless
            </span>
            <span className="font-body text-[11px] text-lavender/30">·</span>
            <span className="font-body text-xs text-lavender/45">Academic Capstone Simulation</span>
          </motion.div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-purple-lilac font-light tracking-tight leading-tight mb-3"
          >
            CVE Vulnerability Intelligence &amp; Alert Platform
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-body text-base md:text-lg text-lavender/90 leading-snug font-normal max-w-3xl mb-3"
          >
            A serverless AWS-based platform that simulates a Managed Security Service Provider (MSSP) workflow for processing CVE JSON data, classifying vulnerability severity using keyword-based rules, matching vulnerabilities against client technology stacks, and sending targeted email alerts.
          </motion.p>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="font-body text-xs md:text-sm text-lavender/50 leading-relaxed max-w-2xl mb-5"
          >
            Academic capstone project completed in April 2026 for B.Tech CSE at SRM University–AP under the guidance of Ravi Teja. Project team: Shivangi Dubey, B. Thishithasai, G. Sruthi, and P. Joshika.
          </motion.p>

          {/* Tech row */}
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="flex items-center flex-wrap gap-2 text-xs font-body text-lavender/55 mb-6 py-2 border-y border-lavender/8"
            aria-label="Core Tech Stack"
          >
            <span className="text-[10px] uppercase tracking-wider text-pink-soft/75 font-semibold mr-1">Stack:</span>
            {[
              'AWS Lambda',
              'Amazon S3',
              'Amazon DynamoDB',
              'Amazon SNS',
              'Amazon EventBridge',
              'Amazon Cognito',
              'AWS IAM',
              'Amazon VPC',
              'HTML / CSS / JavaScript',
            ].map((t, i, a) => (
              <span key={t} className="text-lavender/75">
                {t}
                {i < a.length - 1 ? <span className="text-lavender/25 ml-2">·</span> : null}
              </span>
            ))}
          </motion.div>

          {/* Implementation Note Banner */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="border border-pink-soft/25 bg-pink-soft/5 rounded-xl p-4 mb-6"
          >
            <div className="flex items-start gap-3">
              <span className="font-body text-[10px] uppercase tracking-wider text-pink-soft font-semibold border border-pink-soft/30 bg-pink-soft/10 rounded px-2 py-0.5 mt-0.5 shrink-0">
                Implementation Note
              </span>
              <p className="font-body text-xs text-lavender/75 leading-relaxed">
                The project repository includes the dashboard and project documentation. The Lambda function implementations were deployed directly to AWS and are not included as source code in the repository.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="https://github.com/Shivangid2904/cve-vulnerability-intelligence-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs md:text-sm font-medium text-pink-soft border border-pink-soft/40 bg-pink-soft/10 rounded-full px-5 py-2 hover:bg-pink-soft/20 transition-colors duration-200"
              aria-label="View on GitHub"
            >
              <Github size={13} />
              <span>GitHub Repository &#8599;</span>
            </a>
            <span className="font-body text-xs text-lavender/35 ml-auto hidden sm:inline">
              B.Tech Capstone · April 2026 · SRM University–AP
            </span>
          </motion.div>
        </header>

        {/* ── Main Content ─────────────────────────────────────────── */}
        <main className="px-6 md:px-10 max-w-5xl mx-auto pb-20" id="case-study-content">

          {/* ── 2. PROBLEM & OBJECTIVE ──────────────────────────────── */}
          <section aria-labelledby="section-overview">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Project Overview
              </p>
              <h2 id="section-overview" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Problem Statement &amp; Objective
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-lavender/90 mb-2">The Operational Challenge</p>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Organizations managing diverse client environments must continuously track newly disclosed vulnerabilities. Manual analysis is slow and error-prone, producing alert fatigue from undifferentiated feeds. A Managed Security Service Provider (MSSP) workflow requires isolating and dispatching only the vulnerabilities that impact each specific client's technology profile.
                  </p>
                </div>
                <div className="border border-pink-soft/25 rounded-xl p-4 bg-pink-soft/4">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-2">System Objective</p>
                  <p className="font-body text-xs text-lavender/65 leading-relaxed">
                    Build an automated, serverless pipeline on AWS that processes CVE vulnerability data supplied as JSON files, classifies severity with custom keyword-based rules, stores structured records, matches exposures against client technology stacks, and sends automated email notifications through Amazon SNS.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-lavender/8 rounded-xl p-4 bg-lavender/2 text-xs font-body text-lavender/60 leading-relaxed">
                <p>
                  <strong className="text-lavender/85">Data Source Scope:</strong> The platform does not continuously ingest live external CVE or NIST NVD feeds. Instead, vulnerability data is supplied as JSON files uploaded to Amazon S3 to simulate the ingestion and triage pipeline.
                </p>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 3. ARCHITECTURE & WORKFLOW ──────────────────────────── */}
          <section aria-labelledby="section-arch">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                System Architecture
              </p>
              <h2 id="section-arch" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-2">
                Serverless MSSP Pipeline
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-5">
                The platform operates entirely on AWS serverless primitives, decoupling file ingestion, data transformation, multi-client profile matching, and notification delivery.
              </p>
            </Reveal>

            {/* Pipeline Flow */}
            <Reveal delay={0.05}>
              <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/2 mb-6">
                <p className="font-body text-[10px] uppercase tracking-wider text-pink-soft/80 font-semibold mb-3">
                  Documented End-to-End Workflow
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2" role="list" aria-label="Pipeline Steps">
                  {[
                    { step: '01', title: 'CVE JSON Upload', sub: 'Amazon S3 (mssp-vuln-raw)' },
                    { step: '02', title: 'Lambda Ingestion', sub: 'Extracts ID & description' },
                    { step: '03', title: 'Keyword Rules', sub: 'Assigns 4 severity tiers' },
                    { step: '04', title: 'DynamoDB Write', sub: 'Vulnerabilities & Clients' },
                    { step: '05', title: 'Stack Matching', sub: 'Amazon SNS email alerts' },
                    { step: '06', title: 'Dashboard Polling', sub: 'Lambda Function URL (10s)' },
                  ].map((p) => (
                    <div
                      key={p.step}
                      role="listitem"
                      className="flex flex-col p-2.5 rounded-lg border border-lavender/10 bg-lavender/4 text-center"
                    >
                      <span className="font-body text-[10px] text-pink-soft/80 font-bold">{p.step}</span>
                      <span className="font-body text-xs font-semibold text-lavender/85 leading-tight mt-1 mb-1">{p.title}</span>
                      <span className="font-body text-[10px] text-lavender/45">{p.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Component Architecture Grid */}
            <Reveal delay={0.08}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Cloud size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">
                      Amazon S3 Ingestion
                    </h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Raw vulnerability data is supplied as JSON files uploaded to the <code className="text-lavender/75">mssp-vuln-raw</code> S3 bucket. S3 bucket notifications trigger downstream Lambda execution upon upload. A secondary bucket (<code className="text-lavender/75">mssp-vuln-processed</code>) is designated for processed output.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Server size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">
                      AWS Lambda Processing
                    </h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Serverless Python functions parse incoming CVE records, extract key attributes, execute rule-based classification heuristics, evaluate matches against registered client technology profiles, and expose a Lambda Function URL endpoint for the dashboard.
                  </p>
                </div>

                <div className="border border-pink-soft/25 bg-pink-soft/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Database size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/95 uppercase tracking-wide">
                      Amazon DynamoDB
                    </h3>
                  </div>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Stores structured records in the <code className="text-pink-soft/90">Vulnerabilities</code> table (CVE ID, description, severity, timestamp) and maintains client environments in the <code className="text-pink-soft/90">Clients</code> table (partition key: <code className="text-pink-soft/90">Client_ID</code>, attribute: <code className="text-pink-soft/90">TechStack</code>).
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Bell size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">
                      Amazon SNS Alerts
                    </h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Dispatches automated email notifications via SNS topic subscriptions whenever an ingested vulnerability matches a technology present in a client's monitored stack (e.g., Apache, Linux, MySQL).
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Layers size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">
                      Amazon EventBridge
                    </h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Configured with a documented scheduled rule running every 10 minutes to trigger automated pipeline execution and periodic processing runs without requiring manual S3 uploads.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Lock size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide">
                      Cognito &amp; Security
                    </h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    An Amazon Cognito User Pool enforces user authentication (sign-up and sign-in) for dashboard access. Infrastructure architecture includes least-privilege IAM execution roles, custom VPC (10.0.0.0/16) with subnets and NAT Gateways, CloudWatch monitoring, and CloudTrail auditing.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 4. SEVERITY CLASSIFICATION ──────────────────────────── */}
          <section aria-labelledby="section-classification">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Classification Logic
              </p>
              <h2 id="section-classification" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Keyword-Based Severity Classification
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-lavender/90 mb-2">Rule-Based Categorization</p>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed mb-4">
                    Severity is assigned using a custom keyword-matching approach rather than the official CVSS scoring system. The pipeline extracts textual keywords from the CVE description to determine estimated risk levels across four distinct severity tiers:
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg border border-red-400/20 bg-red-400/5 text-xs font-body">
                      <div>
                        <span className="font-semibold text-red-400">CRITICAL</span>
                        <span className="text-lavender/45 text-[11px] block">Keywords: <code className="text-lavender/70">remote</code>, <code className="text-lavender/70">remote access</code>, <code className="text-lavender/70">ftp</code></span>
                      </div>
                      <span className="text-[10px] text-red-400/70 uppercase font-semibold">Immediate Action</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border border-orange-400/20 bg-orange-400/5 text-xs font-body">
                      <div>
                        <span className="font-semibold text-orange-400">HIGH</span>
                        <span className="text-lavender/45 text-[11px] block">Keywords: Other risk-related exposure terms</span>
                      </div>
                      <span className="text-[10px] text-orange-400/70 uppercase font-semibold">Elevated Risk</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border border-yellow-400/20 bg-yellow-400/5 text-xs font-body">
                      <div>
                        <span className="font-semibold text-yellow-400">MEDIUM</span>
                        <span className="text-lavender/45 text-[11px] block">Keywords: Moderate risk identifiers</span>
                      </div>
                      <span className="text-[10px] text-yellow-400/70 uppercase font-semibold">Standard Review</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border border-green-400/20 bg-green-400/5 text-xs font-body">
                      <div>
                        <span className="font-semibold text-green-400">LOW</span>
                        <span className="text-lavender/45 text-[11px] block">Descriptions without significant security keywords</span>
                      </div>
                      <span className="text-[10px] text-green-400/70 uppercase font-semibold">Baseline</span>
                    </div>
                  </div>
                </div>

                <div className="border border-pink-soft/20 rounded-xl p-4 bg-pink-soft/4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-pink-soft">
                      <ShieldAlert size={15} />
                      <p className="font-body text-xs font-semibold text-pink-soft">Technical Context &amp; Distinctions</p>
                    </div>
                    <ul className="font-body text-xs text-lavender/65 leading-relaxed space-y-2.5">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-soft/60 mt-0.5 shrink-0">·</span>
                        <span>
                          <strong className="text-lavender/85">Not CVSS-Compliant:</strong> The classification is a rule-based approximation designed for prototype demonstration. It does not compute official CVSS Base, Temporal, or Environmental vector metrics.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-soft/60 mt-0.5 shrink-0">·</span>
                        <span>
                          <strong className="text-lavender/85">No AI/ML Detection:</strong> The implementation scans descriptions using string matching; it does not deploy NLP transformers, large language models, or machine learning classifiers.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-soft/60 mt-0.5 shrink-0">·</span>
                        <span>
                          <strong className="text-lavender/85">Targeted Batch Processing:</strong> As documented in the project report, the processing pipeline was evaluated on a bounded set of vulnerabilities (top-10 batch), rather than an unbounded feed.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-2.5 rounded-lg border border-lavender/8 bg-lavender/2 mt-4 text-[11px] text-lavender/45">
                    Frontend support: The web dashboard renders all four severity levels (CRITICAL, HIGH, MEDIUM, LOW) with corresponding color-coded badges and search filters.
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 5. DASHBOARD & MONITORING ───────────────────────────── */}
          <section aria-labelledby="section-dashboard">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Frontend Interface
              </p>
              <h2 id="section-dashboard" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Web Dashboard &amp; Data Retrieval
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Server size={14} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90">Lambda Function URL</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    The single-page dashboard communicates directly with an AWS Lambda Function URL in the <code className="text-lavender/75">eu-north-1</code> region, retrieving stored CVE records and client match status as JSON without requiring API Gateway.
                  </p>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <RefreshCw size={14} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90">10-Second Auto-Polling</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    The client-side JavaScript implements an automated 10-second polling loop, fetching newly ingested vulnerabilities and updating dashboard statistics and table listings in near real time.
                  </p>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Lock size={14} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90">Cognito Authentication</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Access to the dashboard is secured by an Amazon Cognito User Pool, requiring authenticated user sign-up and sign-in before viewing vulnerability records or configuring client environments.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 6. SCREENSHOTS ──────────────────────────────────────── */}
          <section aria-labelledby="section-previews">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Visual Evidence
              </p>
              <h2 id="section-previews" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                System Implementation Screenshots
              </h2>
            </Reveal>

            {/* Dashboard screenshot */}
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden mb-5">
                <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-soft animate-pulse" />
                    <span className="font-body text-xs font-semibold text-lavender/85 uppercase tracking-wider">
                      MSSP Vulnerability Dashboard
                    </span>
                  </div>
                  <span className="font-body text-[10px] text-lavender/40">HTML / CSS / JavaScript</span>
                </div>
                <img
                  src="https://raw.githubusercontent.com/Shivangid2904/cve-vulnerability-intelligence-platform/main/image.png"
                  alt="MSSP Vulnerability Dashboard displaying CVE records with severity badges, real-time statistics, search, and severity filtering"
                  className="w-full h-auto object-cover max-h-[440px]"
                  loading="lazy"
                />
                <div className="p-3.5 border-t border-lavender/8 bg-lavender/2">
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    The web dashboard displays CVE records with severity badges, real-time statistics, search, and severity filtering. Built as a single-page frontend (<code className="text-lavender/75">mssp-frontend/index.html</code>) committed to the repository (24 KB).
                  </p>
                </div>
              </div>
            </Reveal>

            {/* DynamoDB and SNS side by side */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Reveal delay={0.08}>
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden h-full flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85 uppercase tracking-wider">
                      DynamoDB — Ingested Records
                    </span>
                    <span className="font-body text-[10px] text-lavender/40">AWS Console</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/cve-vulnerability-intelligence-platform/main/image-2.png"
                    alt="Amazon DynamoDB Vulnerabilities table showing stored CVE records with CVE ID, description, severity, and timestamp"
                    className="w-full h-auto object-cover max-h-[290px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      The DynamoDB Vulnerabilities table showing stored CVE records with CVE ID, description, severity, and timestamp.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden h-full flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85 uppercase tracking-wider">
                      Amazon SNS — Email Alert
                    </span>
                    <span className="font-body text-[10px] text-lavender/40">Delivered Notification</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/cve-vulnerability-intelligence-platform/main/image-1.png"
                    alt="Amazon SNS email notification sent when an ingested vulnerability matches a client's technology profile"
                    className="w-full h-auto object-cover max-h-[290px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      An SNS email notification sent when an ingested vulnerability matches a client's technology stack profile.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <Divider />

          {/* ── 7. TECH STACK ───────────────────────────────────────── */}
          <section aria-labelledby="section-tech">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Technologies
              </p>
              <h2 id="section-tech" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Technology Stack
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 rounded-xl border border-lavender/10 bg-lavender/2">
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Compute &amp; Events
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    AWS Lambda<br />
                    Amazon EventBridge
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Storage &amp; Data
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    Amazon S3<br />
                    Amazon DynamoDB<br />
                    CVE JSON data
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Notifications
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    Amazon SNS<br />
                    Email notifications
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Security &amp; Infra
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    AWS IAM<br />
                    Amazon VPC<br />
                    Amazon Cognito<br />
                    AWS CloudTrail<br />
                    Amazon CloudWatch
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Frontend
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    HTML<br />
                    CSS<br />
                    JavaScript
                  </p>
                </div>
              </div>
              <p className="font-body text-[11px] text-lavender/40 mt-3 italic">
                Python is documented as the runtime language for the Lambda functions deployed to AWS. As documented in the repository README, the Lambda function implementations were deployed directly to AWS and are not committed as source code in the public repository.
              </p>
            </Reveal>
          </section>

          <Divider />

          {/* ── 8. LIMITATIONS ──────────────────────────────────────── */}
          <section aria-labelledby="section-limitations">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Engineering Scope
              </p>
              <h2 id="section-limitations" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Limitations
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-pink-soft/20 rounded-xl p-4 md:p-5 bg-pink-soft/4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 font-body text-xs text-lavender/70 leading-relaxed">
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">Keyword-Based Classification Only</strong>
                    Severity classification relies on a custom keyword ruleset rather than formal CVSS Base Scores, machine learning, or NLP.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">No Live External Data Feed</strong>
                    The platform does not pull directly from the NIST NVD API or real-time CVE feeds. Vulnerability data is supplied via manual JSON file uploads to Amazon S3.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">Approximate Severity Scoring</strong>
                    Severity labels (CRITICAL, HIGH, MEDIUM, LOW) serve as an operational approximation for demonstration purposes, not an official CVSS-compliant metric.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">Lambda Code Deployed Directly</strong>
                    The Python Lambda functions were deployed directly to AWS; the repository contains placeholder files alongside the committed web dashboard and project report.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">Limited Vulnerability Processing</strong>
                    As documented in the project report, processing was validated on a targeted batch of vulnerabilities (top-10 processing) rather than an unbounded stream.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">Academic Prototype Status</strong>
                    The platform simulates MSSP vulnerability monitoring workflows in a student capstone setting and has not been validated as a production security service.
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 9. FUTURE IMPROVEMENTS ──────────────────────────────── */}
          <section aria-labelledby="section-future">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Roadmap
              </p>
              <h2 id="section-future" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Future Improvements
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Scoring
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Official CVSS Scoring
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Incorporate official CVSS Base, Temporal, and Environmental scores to replace keyword heuristics with industry-standard ratings.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Ingestion
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    NVD API Integration
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Establish direct, automated integration with the NIST NVD 2.0 API for continuous real-time CVE disclosure ingestion.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Analysis
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    NLP / ML Analysis
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Deploy natural language processing and machine learning classifiers to extract vulnerability semantics beyond keyword matching.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Interface
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Dashboard Analytics &amp; UI
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Enhance UI/UX with interactive charts, severity distributions, trend analytics, and remediation tracking workflows.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Multi-Client
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Expanded Client Reporting
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Introduce multi-client segmentation with per-client threat dashboards, role-based access, and automated compliance reports.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 10. REFLECTIONS ─────────────────────────────────────── */}
          <section aria-labelledby="section-learned">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Reflections
              </p>
              <h2 id="section-learned" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Engineering Reflections
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    01 — Targeted relevance mitigates alert fatigue
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Designing a client technology-matching layer — rather than broadcasting every CVE — highlighted the core architectural requirement in MSSP operations: filtering out noise so engineering teams only receive notifications relevant to their deployed stacks.
                  </p>
                </div>
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    02 — Keyword heuristics require disciplined scoping
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Simple keyword-matching rules provide an accessible baseline for prototype pipelines, but vulnerability descriptions vary widely. Standardized CVSS vectors or semantic NLP classifiers are required for enterprise-grade triage accuracy.
                  </p>
                </div>
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    03 — Event-driven decoupling in AWS serverless
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Using Amazon S3 event notifications, Lambda execution, DynamoDB tables, and Amazon SNS decoupled file ingestion from classification, persistence, and alerting — allowing each tier to scale independently without managing virtual servers.
                  </p>
                </div>
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    04 — Technical transparency builds engineering credibility
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Clearly documenting architectural decisions, cloud deployment models, and simulation constraints produces an honest, reproducible case study that highlights engineering trade-offs over unsubstantiated marketing claims.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── Bottom nav ────────────────────────────────────────── */}
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
              <a
                href="https://github.com/Shivangid2904/cve-vulnerability-intelligence-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-xs font-medium text-pink-soft border border-pink-soft/30 bg-pink-soft/8 rounded-full px-3.5 py-1.5 hover:bg-pink-soft/15 transition-colors duration-200"
                aria-label="View on GitHub"
              >
                <Github size={13} />
                <span>GitHub Repository &#8599;</span>
              </a>
            </div>
          </Reveal>
        </main>

        {/* ── Footer ──────────────────────────────────────────────── */}
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
