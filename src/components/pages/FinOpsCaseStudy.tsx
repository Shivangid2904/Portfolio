import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft, Github, Clock,
  Layers, ShieldAlert, AlertTriangle,
  FileCode2,
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

export default function FinOpsCaseStudy() {
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
            href="https://github.com/Shivangid2904/aws-finops-automation-engine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-xs font-medium text-pink-soft border border-pink-soft/30 bg-pink-soft/8 rounded-full px-3 py-1 hover:bg-pink-soft/15 transition-colors duration-200"
            aria-label="AWS FinOps Project on GitHub"
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
              Cloud FinOps · AWS Serverless
            </span>
            <span className="font-body text-[11px] text-lavender/30">·</span>
            <span className="font-body text-xs text-lavender/45">Region: eu-north-1 · Nov – Dec 2025</span>
          </motion.div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-purple-lilac font-light tracking-tight leading-tight mb-3"
          >
            AWS Hyper-Efficient FinOps Automation Engine
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-body text-base md:text-lg text-lavender/90 leading-snug font-normal max-w-3xl mb-3"
          >
            An AWS FinOps automation project that analyzes Cost and Usage Report (CUR 2.0) data using Glue and Athena, identifies potentially underutilized EC2 resources, and demonstrates scheduled serverless remediation using Lambda and EventBridge.
          </motion.p>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="font-body text-xs md:text-sm text-lavender/50 leading-relaxed max-w-2xl mb-5"
          >
            Developed and verified in an AWS Academy lab environment (Nov – Dec 2025). The project implements a functional SQL analytics pipeline alongside a decoupled 6-hour scheduled Lambda execution harness.
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
              'AWS CUR 2.0',
              'Amazon S3',
              'AWS Glue',
              'Amazon Athena',
              'AWS Lambda',
              'Amazon EventBridge',
              'Amazon CloudWatch',
              'AWS IAM',
              'SQL',
              'Python',
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
                Implementation Scope
              </span>
              <p className="font-body text-xs text-lavender/75 leading-relaxed">
                The current system comprises two decoupled subsystems: an analytical pipeline for interactive SQL cost queries, and a scheduled serverless harness prototype. The Lambda bot executes on a 6-hour EventBridge schedule and logs execution status to CloudWatch, but does not issue AWS SDK commands to terminate or stop EC2 instances, and no empirical cost savings figures are claimed.
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
              href="https://github.com/Shivangid2904/aws-finops-automation-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs md:text-sm font-medium text-pink-soft border border-pink-soft/40 bg-pink-soft/10 rounded-full px-5 py-2 hover:bg-pink-soft/20 transition-colors duration-200"
              aria-label="View on GitHub"
            >
              <Github size={13} />
              <span>GitHub Repository &#8599;</span>
            </a>
            <span className="font-body text-xs text-lavender/35 ml-auto hidden sm:inline">
              AWS Academy Lab Project · Stockholm (eu-north-1)
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
                  <p className="font-body text-xs font-semibold text-lavender/90 mb-2">Cloud Spend Challenges</p>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Uncontrolled cloud costs often stem from opaque billing visibility, where teams lack itemized attribution by service code. Additionally, development and staging EC2 instances left running continuously accumulate hourly compute charges (<code className="text-lavender/70">BoxUsage</code>) despite generating negligible workload. Manual periodic billing audits are too slow to halt waste in active cloud accounts.
                  </p>
                </div>
                <div className="border border-pink-soft/25 rounded-xl p-4 bg-pink-soft/4">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-2">Engineering Solution</p>
                  <p className="font-body text-xs text-lavender/65 leading-relaxed">
                    Build a structured FinOps analytics foundation using AWS native services: ingest daily Cost and Usage Report (CUR 2.0) Parquet data into S3, catalog schemas with AWS Glue, query billing trends and compute hours in Amazon Athena, and establish a scheduled serverless EventBridge-to-Lambda trigger framework for future automated remediation.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 3. ARCHITECTURE ─────────────────────────────────────── */}
          <section aria-labelledby="section-arch">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                System Architecture
              </p>
              <h2 id="section-arch" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-2">
                Decoupled Subsystems
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-5">
                The architecture is designed as two independent, decoupled workflows: a serverless analytics pipeline for billing data inspection, and a scheduled execution framework for automated remediation.
              </p>
            </Reveal>

            {/* Architecture Comparison Cards */}
            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {/* Workflow 1 */}
                <div className="border border-lavender/12 bg-lavender/2 rounded-xl p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-[10px] uppercase tracking-wider text-pink-soft font-semibold">
                      Workflow 1
                    </span>
                    <span className="font-body text-[10px] text-lavender/40 border border-lavender/10 rounded px-1.5 py-0.5">
                      Functional Pipeline
                    </span>
                  </div>
                  <h3 className="font-body text-sm font-semibold text-lavender/90 mb-2">
                    Cost Data &amp; Analytics Pipeline
                  </h3>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed mb-4">
                    AWS CUR 2.0 exports daily billing data in Apache Parquet format to Amazon S3. An AWS Glue Crawler infers schema partitions to build the Glue Data Catalog, allowing interactive queries directly in Amazon Athena.
                  </p>
                  <div className="mt-auto p-3 rounded-lg border border-lavender/8 bg-lavender/4 font-mono text-[11px] text-lavender/70 leading-relaxed">
                    CUR 2.0 &rarr; S3 Bucket &rarr; Glue Crawler &rarr; Glue Catalog &rarr; Athena SQL
                  </div>
                </div>

                {/* Workflow 2 */}
                <div className="border border-pink-soft/20 bg-pink-soft/3 rounded-xl p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-[10px] uppercase tracking-wider text-pink-soft font-semibold">
                      Workflow 2
                    </span>
                    <span className="font-body text-[10px] text-pink-soft/70 border border-pink-soft/20 rounded px-1.5 py-0.5">
                      Prototype Harness
                    </span>
                  </div>
                  <h3 className="font-body text-sm font-semibold text-purple-lilac mb-2">
                    Scheduled Remediation Framework
                  </h3>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed mb-4">
                    Amazon EventBridge executes on a fixed 6-hour interval, triggering the <code className="text-lavender/75">FinOpsRemediationBot</code> Lambda function. The function executes, records runtime telemetry to CloudWatch, and returns an execution status payload.
                  </p>
                  <div className="mt-auto p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5 font-mono text-[11px] text-pink-soft/85 leading-relaxed">
                    EventBridge (rate: 6h) &rarr; AWS Lambda Bot &rarr; CloudWatch Logs
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Explicit Decoupling Callout */}
            <Reveal delay={0.07}>
              <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={16} className="text-pink-soft/90 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body text-xs font-semibold text-lavender/90 mb-1">
                      Architectural Note on Subsystem Independence
                    </h4>
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      In the current implementation, Athena analysis and Lambda execution operate independently. Athena queries are reviewed interactively in the AWS console, while Lambda runs on its scheduled EventBridge trigger. The Lambda function does not yet query Athena outputs programmatically via the AWS SDK.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Architecture Diagram Screenshot Container */}
            <Reveal delay={0.09}>
              <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden mb-6">
                <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-pink-soft" />
                    <span className="font-body text-xs font-semibold text-lavender/85 uppercase tracking-wider">
                      Reference Architecture Diagram
                    </span>
                  </div>
                  <span className="font-body text-[10px] text-lavender/40">architecture/architecture.jpg</span>
                </div>
                <img
                  src="https://raw.githubusercontent.com/Shivangid2904/aws-finops-automation-engine/main/architecture/architecture.jpg"
                  alt="AWS FinOps Architecture Diagram showing CUR export to S3, Glue Crawler, Athena querying, EventBridge scheduling, and Lambda execution"
                  className="w-full h-auto object-cover max-h-[420px]"
                  loading="lazy"
                />
                <div className="p-3 border-t border-lavender/8 bg-lavender/2">
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    System workflow illustrating the ingestion pipeline from AWS CUR to Athena, alongside the scheduled EventBridge trigger for the remediation Lambda harness.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 4. ATHENA SQL ANALYTICS ─────────────────────────────── */}
          <section aria-labelledby="section-sql">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Cost Analytics
              </p>
              <h2 id="section-sql" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Amazon Athena SQL Cost Intelligence
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="space-y-4 mb-6">
                {/* Query 1: Service Breakdown */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-xs font-semibold text-lavender/90">
                      1. Expenditure Breakdown by AWS Service
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">athena/cost_by_service.sql</span>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed mb-3">
                    Aggregates unblended cost grouped by <code className="text-lavender/70">product_servicecode</code> to identify which cloud services contribute most to account spend.
                  </p>
                  <pre className="font-mono text-xs text-lavender/80 bg-black/40 border border-lavender/8 rounded-lg p-3 overflow-x-auto">
{`SELECT product_servicecode AS service,
       SUM(line_item_unblended_cost) AS total_cost
FROM finops_cur_db.cur_data
GROUP BY product_servicecode
ORDER BY total_cost DESC;`}
                  </pre>
                </div>

                {/* Query 2: Daily Cost Trends */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-xs font-semibold text-lavender/90">
                      2. Daily Spending Trends
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">athena/daily_cost_trend.sql</span>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed mb-3">
                    Extracts day-over-day costs by casting <code className="text-lavender/70">line_item_usage_start_date</code> to reveal daily spending anomalies or unexpected spikes.
                  </p>
                  <pre className="font-mono text-xs text-lavender/80 bg-black/40 border border-lavender/8 rounded-lg p-3 overflow-x-auto">
{`SELECT 
    DATE(line_item_usage_start_date) AS day,
    SUM(CAST(line_item_unblended_cost AS DOUBLE)) AS cost
FROM finops_cur_db.cur_data
GROUP BY 1
ORDER BY day;`}
                  </pre>
                </div>

                {/* Query 3: Idle EC2 Detection */}
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-xs font-semibold text-lavender/90">
                      3. EC2 Compute Usage &amp; Low-Hour Detection
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">athena/idle_ec2_detection.sql</span>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed mb-3">
                    Filters EC2 line items by <code className="text-lavender/70">BoxUsage</code> and aggregates total billed operating hours per instance ID (<code className="text-lavender/70">line_item_resource_id</code>) to surface instances with minimal recorded runtime.
                  </p>
                  <pre className="font-mono text-xs text-lavender/80 bg-black/40 border border-lavender/8 rounded-lg p-3 overflow-x-auto">
{`SELECT
    line_item_resource_id AS instance_id,
    SUM(CAST(line_item_usage_amount AS DOUBLE)) AS total_hours
FROM finops_cur_db.cur_data
WHERE line_item_product_code = 'AmazonEC2'
  AND line_item_usage_type LIKE '%BoxUsage%'
GROUP BY line_item_resource_id
ORDER BY total_hours ASC;`}
                  </pre>
                </div>
              </div>
            </Reveal>

            {/* Heuristic Considerations */}
            <Reveal delay={0.08}>
              <div className="border border-pink-soft/20 bg-pink-soft/4 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2 text-pink-soft">
                  <ShieldAlert size={15} />
                  <h4 className="font-body text-xs font-semibold text-pink-soft">
                    Heuristic Reality: Why Billing Usage ≠ Live Idle Detection
                  </h4>
                </div>
                <ul className="font-body text-xs text-lavender/65 leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-soft/60 mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong className="text-lavender/85">Delayed Billing Telemetry:</strong> CUR files refresh on a 4 to 24-hour cycle. Querying low cumulative usage can simply reflect a newly provisioned instance rather than an abandoned one.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-soft/60 mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong className="text-lavender/85">Missing Operating Metrics:</strong> Billing line items record billed instance hours, not real-time CPU utilization, memory pressure, or active socket connections.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-soft/60 mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong className="text-lavender/85">Safety Prerequisites:</strong> Safe automated shutdown requires cross-referencing multi-day CloudWatch metrics (e.g. CPU &lt; 5%) and checking exemption tags before initiating any state change.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 5. REMEDIATION BOT & EVENTBRIDGE ─────────────────────── */}
          <section aria-labelledby="section-remediation">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Serverless Automation
              </p>
              <h2 id="section-remediation" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Remediation Bot &amp; EventBridge Scheduler
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-pink-soft">
                      <Clock size={15} />
                      <h3 className="font-body text-xs font-semibold text-lavender/90">
                        EventBridge 6-Hour Schedule
                      </h3>
                    </div>
                    <p className="font-body text-xs text-lavender/55 leading-relaxed mb-3">
                      The rule <code className="text-lavender/75">FinOps-Remediation-Scheduler</code> is configured with a rate-based schedule (<code className="text-lavender/75">rate(6 hours)</code>) targeting the Lambda function. CloudWatch log streams confirm regular automated invocation.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg border border-lavender/8 bg-lavender/2 text-[11px] font-mono text-lavender/60">
                    Rule: FinOps-Remediation-Scheduler &bull; Rate: 6 hours
                  </div>
                </div>

                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <FileCode2 size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90">
                      Lambda Handler Logic (Execution Harness)
                    </h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed mb-3">
                    The deployed Lambda function (<code className="text-lavender/75">FinOpsRemediationBot</code>) acts as a testable trigger harness. It verifies runtime invocation and emits an execution payload without performing disruptive resource modifications:
                  </p>
                  <pre className="font-mono text-xs text-lavender/80 bg-black/40 border border-lavender/8 rounded-lg p-3 overflow-x-auto">
{`import json

def lambda_handler(event, context):
    return {
        "status": "success",
        "message": "FinOps remediation bot executed. (EC2 idle resources will be stopped when they appear in CUR)"
    }`}
                  </pre>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 6. THE QUICKSIGHT LIMITATION ────────────────────────── */}
          <section aria-labelledby="section-quicksight">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Environment Evaluation
              </p>
              <h2 id="section-quicksight" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Amazon QuickSight Availability &amp; Engineering Pivot
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/2 mb-6">
                <div className="grid sm:grid-cols-3 gap-3 font-body text-xs text-lavender/60 leading-relaxed">
                  <div className="p-3 rounded-lg border border-lavender/8 bg-lavender/4">
                    <strong className="text-lavender/90 block mb-1">Regional Constraint</strong>
                    The project was deployed in region <code className="text-lavender/75">eu-north-1</code> (Stockholm). Navigating to QuickSight in this sandbox redirected to Amazon QuickSuite without accessible configuration portals.
                  </div>
                  <div className="p-3 rounded-lg border border-lavender/8 bg-lavender/4">
                    <strong className="text-lavender/90 block mb-1">Subscription Limitation</strong>
                    The standard QuickSight account registration workflow was not available within the allocated AWS Academy sandbox permissions.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/20 bg-pink-soft/4">
                    <strong className="text-pink-soft block mb-1">Architectural Pivot</strong>
                    Rather than importing third-party external tools (e.g. Power BI or Excel), the project adhered to native AWS services by conducting full cost aggregations directly in Athena SQL.
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 7. SCREENSHOTS & CONSOLE EVIDENCE ───────────────────── */}
          <section aria-labelledby="section-previews">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Visual Evidence
              </p>
              <h2 id="section-previews" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-2">
                AWS Console Verification Screenshots
              </h2>
              <p className="font-body text-xs text-lavender/45 mb-5">
                Eight console captures document the deployed resources in AWS region eu-north-1.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {/* 1. S3 Storage Bucket */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      S3 Bucket: finops-cur-data-ungabunga
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">s3bucket.png</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/aws-finops-automation-engine/main/screenshots/s3bucket.png"
                    alt="Amazon S3 Console showing dedicated general-purpose bucket finops-cur-data-ungabunga in region eu-north-1"
                    className="w-full h-auto object-cover max-h-[260px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      Dedicated general-purpose bucket <code className="text-lavender/70">finops-cur-data-ungabunga</code> created in region <code className="text-lavender/70">eu-north-1</code> (Stockholm).
                    </p>
                  </div>
                </div>

                {/* 2. S3 Partition Structure */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      S3 CUR Data Partition Hierarchy
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">s3data.png</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/aws-finops-automation-engine/main/screenshots/s3data.png"
                    alt="Amazon S3 Console showing partitioned CUR export folders data and metadata under FinOpsCUR prefix"
                    className="w-full h-auto object-cover max-h-[260px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      Partitioned CUR export folders (<code className="text-lavender/70">data/</code> and <code className="text-lavender/70">metadata/</code>) organized under the <code className="text-lavender/70">FinOpsCUR/</code> prefix.
                    </p>
                  </div>
                </div>

                {/* 3. AWS Glue Crawler */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      AWS Glue Crawler: finops-cur-crawler
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">gluecrawler.png</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/aws-finops-automation-engine/main/screenshots/gluecrawler.png"
                    alt="AWS Glue Console showing finops-cur-crawler configured with IAM role GlueCURCrawlerRole and target database finops_cur_db"
                    className="w-full h-auto object-cover max-h-[260px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      AWS Glue crawler <code className="text-lavender/70">finops-cur-crawler</code> configured with IAM role <code className="text-lavender/70">GlueCURCrawlerRole</code> and target database <code className="text-lavender/70">finops_cur_db</code>.
                    </p>
                  </div>
                </div>

                {/* 4. Glue Data Catalog Tables */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      Glue Catalog: finops_cur_db Tables
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">gluedatabase.png</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/aws-finops-automation-engine/main/screenshots/gluedatabase.png"
                    alt="AWS Glue Data Catalog console showing database finops_cur_db displaying generated tables cur_data and cur_metadata"
                    className="w-full h-auto object-cover max-h-[260px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      Database <code className="text-lavender/70">finops_cur_db</code> displaying generated tables: <code className="text-lavender/70">cur_data</code> (Parquet) and <code className="text-lavender/70">cur_metadata</code> (JSON).
                    </p>
                  </div>
                </div>

                {/* 5. Athena Service Cost */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      Athena Query: Cost by AWS Service
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">servicecost.png</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/aws-finops-automation-engine/main/screenshots/servicecost.png"
                    alt="Amazon Athena Query Editor showing Query 8 aggregating total cost grouped by AWS service product_servicecode"
                    className="w-full h-auto object-cover max-h-[260px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      Athena query editor displaying Query 8: Aggregating total cost by AWS service (<code className="text-lavender/70">product_servicecode</code>).
                    </p>
                  </div>
                </div>

                {/* 6. Athena Daily Trend */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      Athena Query: Daily Cost Trends
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">dailyusage.png</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/aws-finops-automation-engine/main/screenshots/dailyusage.png"
                    alt="Amazon Athena Query Editor showing Query 5 aggregating daily expenditure using DATE of line_item_usage_start_date"
                    className="w-full h-auto object-cover max-h-[260px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      Athena query editor displaying Query 5: Daily expenditure aggregation using <code className="text-lavender/70">DATE(line_item_usage_start_date)</code>.
                    </p>
                  </div>
                </div>

                {/* 7. Athena Idle EC2 */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      Athena Query: EC2 BoxUsage Hours
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">idleec2.png</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/aws-finops-automation-engine/main/screenshots/idleec2.png"
                    alt="Amazon Athena Query Editor showing Query 7 filtering EC2 instance usage hours by BoxUsage"
                    className="w-full h-auto object-cover max-h-[260px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      Athena query editor displaying Query 7: Identifying EC2 instance usage hours filtered by <code className="text-lavender/70">BoxUsage</code>.
                    </p>
                  </div>
                </div>

                {/* 8. EventBridge Scheduler */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      EventBridge Rule: FinOps-Remediation-Scheduler
                    </span>
                    <span className="font-mono text-[10px] text-lavender/40">eventbridge.png</span>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Shivangid2904/aws-finops-automation-engine/main/screenshots/eventbridge.png"
                    alt="Amazon EventBridge Console showing FinOps-Remediation-Scheduler configured with 6-hour fixed rate rule targeting Lambda"
                    className="w-full h-auto object-cover max-h-[260px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      EventBridge rule <code className="text-lavender/70">FinOps-Remediation-Scheduler</code> configured with a 6-hour fixed rate schedule targeting Lambda.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 8. TECH STACK ───────────────────────────────────────── */}
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-lavender/10 bg-lavender/2">
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Cost Data &amp; Storage
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    AWS CUR 2.0 (Parquet)<br />
                    Amazon S3
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Data Catalog &amp; Analytics
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    AWS Glue (Crawler &amp; Catalog)<br />
                    Amazon Athena<br />
                    SQL (Presto/Trino)
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Automation &amp; Scheduling
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    AWS Lambda (Python 3.x)<br />
                    Amazon EventBridge
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Monitoring &amp; Governance
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    Amazon CloudWatch<br />
                    AWS IAM (Service Roles)
                  </p>
                </div>
              </div>
              <p className="font-body text-[11px] text-lavender/40 mt-3 italic">
                All services were provisioned natively within AWS Academy sandbox environment (<code className="text-lavender/60">eu-north-1</code>).
              </p>
            </Reveal>
          </section>

          <Divider />

          {/* ── 9. LIMITATIONS ──────────────────────────────────────── */}
          <section aria-labelledby="section-limitations">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Engineering Scope
              </p>
              <h2 id="section-limitations" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Limitations &amp; Engineering Trade-offs
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-pink-soft/20 rounded-xl p-4 md:p-5 bg-pink-soft/4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 font-body text-xs text-lavender/70 leading-relaxed">
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">CUR Ingestion Latency</strong>
                    AWS Cost and Usage Reports update asynchronously on a 4 to 24-hour cycle; billing data cannot provide real-time notification of newly launched resources.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">Billing Units &ne; CPU/Memory Telemetry</strong>
                    Billed instance-hours in CUR do not reflect live operating metrics (such as CPU utilization, memory pressure, or network I/O) needed to safely judge workload health.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">Decoupled Subsystem Architecture</strong>
                    Athena cost analysis and Lambda scheduled execution are currently independent. The Lambda handler does not yet parse Athena query outputs programmatically.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">No Direct Resource Shutdown</strong>
                    The Lambda bot returns an execution status response; it does not issue <code className="text-lavender/75">ec2:StopInstances</code> or terminate commands via Boto3.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">No Empirical Savings Claimed</strong>
                    Conducted in an experimental sandbox environment; no empirical dollar savings, percentage reductions, or verified instance shutdowns are claimed.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">QuickSight Region Unavailability</strong>
                    Amazon QuickSight signup was unavailable in the project's region (<code className="text-lavender/75">eu-north-1</code>), necessitating direct SQL analysis in Athena rather than a BI dashboard.
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 10. FUTURE IMPROVEMENTS ─────────────────────────────── */}
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    API Integration
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Programmatic Athena Queries
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Use Boto3 in Lambda (<code className="text-lavender/65">StartQueryExecution</code>) to query the Glue catalog, fetch results, and automate candidate detection programmatically.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Telemetry Correlation
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    CloudWatch Metric Verification
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Cross-reference candidate instance IDs with CloudWatch telemetry (e.g. CPU &lt; 5% across 7 days, zero network I/O) before flagging instances.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Safety Guardrails
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Exemption Tagging &amp; Remediation
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Implement <code className="text-lavender/65">ec2:StopInstances</code> with explicit tag filters (<code className="text-lavender/65">AutoStop: True</code>) and strict production environment exclusions.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Alerting
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Approval &amp; Notification Flows
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Connect Amazon SNS or Slack webhooks to notify resource owners 24 hours prior to scheduled shutdown with a cancellation link.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Visualization
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Managed BI Dashboard
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Connect an open-source or managed visualization tool (Grafana, Apache Superset, or QuickSight in an enabled region) to Athena tables.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Auditing
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Empirical Cost Savings Audits
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Track month-over-month billing deltas across consecutive billing cycles to quantitatively audit and verify realized dollar savings.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 11. REFLECTIONS ─────────────────────────────────────── */}
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
                    01 &mdash; Billing data requires semantic context
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Cost and Usage Reports are indispensable for macro cost attribution, but inadequate on their own for destructive automated decisions. Telemetry lag and missing workload metrics necessitate a multi-layered verification strategy.
                  </p>
                </div>
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    02 &mdash; Decoupled design facilitates iterative hardening
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Separating the analytical data pipeline (S3, Glue, Athena) from the remediation trigger (EventBridge, Lambda) allowed verifying data accuracy and scheduler reliability independently before introducing live AWS API modifications.
                  </p>
                </div>
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    03 &mdash; Transparent engineering over fabricated results
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Documenting sandbox constraints &mdash; including QuickSight regional unavailability and the prototype scope of the Lambda handler &mdash; presents an authentic engineering journey grounded in verified AWS artifacts.
                  </p>
                </div>
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    04 &mdash; Serverless infrastructure eliminates management overhead
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Leveraging Athena for on-demand query execution and Glue for serverless schema crawling meant the governance infrastructure itself incurred zero standby compute costs &mdash; the ultimate goal of FinOps.
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
                href="https://github.com/Shivangid2904/aws-finops-automation-engine"
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
