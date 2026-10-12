import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft, Github,
  Layers, Cpu,
  Search, Shield, PlayCircle, BookOpen,
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

export default function IntelliAskCaseStudy() {
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

          <div className="flex items-center gap-2.5">
            <a
              href="https://drive.google.com/file/d/1q8-x_RziRFKCrJf_UVMTwpO0EpHAUsKa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-xs font-medium text-pink-soft border border-pink-soft/30 bg-pink-soft/8 rounded-full px-3 py-1 hover:bg-pink-soft/15 transition-colors duration-200"
              aria-label="Watch IntelliAsk Demo Video"
            >
              <PlayCircle size={13} />
              <span>Video Demo</span>
            </a>
            <a
              href="https://github.com/Shivangid2904/Intelligent-Question-Answering-System"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-xs text-lavender/60 hover:text-lavender border border-lavender/12 bg-lavender/4 rounded-full px-3 py-1 transition-colors duration-200"
              aria-label="IntelliAsk on GitHub"
            >
              <Github size={13} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
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
              Retrieval-Augmented Generation · Local AI
            </span>
            <span className="font-body text-[11px] text-lavender/30">·</span>
            <span className="font-body text-xs text-lavender/45">Privacy-Focused QA System</span>
          </motion.div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-purple-lilac font-light tracking-tight leading-tight mb-3"
          >
            IntelliAsk
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="font-display text-lg sm:text-xl text-lavender/60 italic font-light mb-3"
          >
            Intelligent Question Answering System
          </motion.p>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="font-body text-base md:text-lg text-lavender/90 leading-snug font-normal max-w-3xl mb-3"
          >
            A privacy-focused, Retrieval-Augmented Generation (RAG) application that lets users upload PDF documents and ask natural-language questions, with relevant passages retrieved through semantic search and answers generated by a locally hosted LLM.
          </motion.p>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-body text-xs md:text-sm text-lavender/50 leading-relaxed max-w-2xl mb-5"
          >
            Designed to execute entirely on the user's workstation using Ollama, eliminating the requirement to transmit private document contents to third-party cloud LLM APIs.
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
              'Python',
              'Streamlit',
              'PyMuPDF',
              'spaCy',
              'Sentence Transformers (all-MiniLM-L6-v2)',
              'FAISS',
              'Ollama (Local LLMs)',
            ].map((t, i, a) => (
              <span key={t} className="text-lavender/75">
                {t}
                {i < a.length - 1 ? <span className="text-lavender/25 ml-2">·</span> : null}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.22 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="https://github.com/Shivangid2904/Intelligent-Question-Answering-System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs md:text-sm font-medium text-pink-soft border border-pink-soft/40 bg-pink-soft/10 rounded-full px-5 py-2 hover:bg-pink-soft/20 transition-colors duration-200"
              aria-label="View IntelliAsk on GitHub"
            >
              <Github size={13} />
              <span>GitHub Repository &#8599;</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1q8-x_RziRFKCrJf_UVMTwpO0EpHAUsKa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs md:text-sm font-medium text-lavender/80 border border-lavender/20 bg-lavender/5 rounded-full px-5 py-2 hover:bg-lavender/10 hover:text-lavender transition-colors duration-200"
              aria-label="Watch Video Walkthrough"
            >
              <PlayCircle size={14} className="text-pink-soft" />
              <span>Watch Video Walkthrough &#8599;</span>
            </a>
            <span className="font-body text-xs text-lavender/35 ml-auto hidden sm:inline">
              Local Inference &bull; No API Keys Required
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
                Document Question Answering &amp; Local RAG
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-lavender/90 mb-2">The Challenge</p>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Analyzing dense multi-page PDF documents manually requires labor-intensive keyword skimming. At the same time, prompting general-purpose Large Language Models without external context often leads to ungrounded or hallucinated answers, because standard models generate solely from static pre-trained weights. Furthermore, sending sensitive proprietary documents to external cloud APIs presents significant confidentiality concerns.
                  </p>
                </div>
                <div className="border border-pink-soft/25 rounded-xl p-4 bg-pink-soft/4">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-2">The IntelliAsk Approach</p>
                  <p className="font-body text-xs text-lavender/65 leading-relaxed">
                    IntelliAsk implements a local Retrieval-Augmented Generation (RAG) architecture: it parses uploaded PDF documents, creates semantic chunk embeddings, indexes them with FAISS, and passes top-matched passages as grounded context to a locally running Ollama language model. Answers stream in real-time while document data remains confined to the user's local machine.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-lavender/8 rounded-xl p-4 bg-lavender/2 text-xs font-body text-lavender/60 leading-relaxed">
                <p>
                  <strong className="text-lavender/85">Technical Scope &amp; Hallucination Nuance:</strong> Retrieval-Augmented Generation grounds model responses directly in extracted document passages, mitigating ungrounded assertions. However, RAG does not guarantee absolute factual accuracy or completely eliminate hallucinations; final answer fidelity remains dependent on passage retrieval quality and the reasoning capabilities of the selected local LLM.
                </p>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 3. KEY CAPABILITIES ─────────────────────────────────── */}
          <section aria-labelledby="section-capabilities">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Core Features
              </p>
              <h2 id="section-capabilities" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Key Capabilities
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <BookOpen size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90">PDF Extraction &amp; spaCy Chunking</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Extracts document text using PyMuPDF (fitz) and applies natural language processing with spaCy (<code className="text-lavender/70">en_core_web_sm</code>) to clean, normalize, and divide content into semantically coherent text chunks.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Search size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90">FAISS Vector Search</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Transforms chunks into 384-dimensional dense vectors using <code className="text-lavender/70">all-MiniLM-L6-v2</code> and constructs an in-memory FAISS vector index for sub-millisecond similarity retrieval.
                  </p>
                </div>

                <div className="border border-pink-soft/25 bg-pink-soft/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Layers size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/95">Hybrid Relevance Scoring</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Combines dense semantic vector similarity with keyword matching to re-score candidate snippets, ensuring that specific terminology and conceptual relevance are both captured during retrieval.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Cpu size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90">Ollama Local LLM Inference</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Communicates with a local Ollama instance to synthesize context-grounded answers. Supports dynamic model selection across Llama 3.2, Mistral, Phi-3, and Gemma without restarting the app.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <PlayCircle size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90">Real-Time Token Streaming</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Streams generated responses token-by-token directly into the Streamlit user interface, delivering responsive visual feedback as the local language model produces its output.
                  </p>
                </div>

                <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-pink-soft">
                    <Shield size={15} />
                    <h3 className="font-body text-xs font-semibold text-lavender/90">Passage Transparency &amp; History</h3>
                  </div>
                  <p className="font-body text-xs text-lavender/55 leading-relaxed">
                    Surfaces supporting document excerpts with their exact similarity scores alongside each answer, and saves user interactions to a persistent session history for transparent auditability.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 4. ARCHITECTURE & WORKFLOW ──────────────────────────── */}
          <section aria-labelledby="section-arch">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                System Architecture
              </p>
              <h2 id="section-arch" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-2">
                Local RAG Execution Pipeline
              </h2>
              <p className="font-body text-xs text-lavender/50 max-w-3xl mb-5">
                The architecture is entirely self-contained, executing document extraction, embedding generation, vector indexing, retrieval, and LLM inference locally without external cloud dependencies.
              </p>
            </Reveal>

            {/* Visual Pipeline Flow */}
            <Reveal delay={0.05}>
              <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/2 mb-6">
                <p className="font-body text-[10px] uppercase tracking-wider text-pink-soft/80 font-semibold mb-3">
                  Document-to-Answer Pipeline Flow
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2" role="list" aria-label="Pipeline Steps">
                  {[
                    { step: '01', title: 'PDF Upload', sub: 'Streamlit Interface' },
                    { step: '02', title: 'Text Extraction', sub: 'PyMuPDF Engine' },
                    { step: '03', title: 'spaCy Chunking', sub: 'Semantic Segmentation' },
                    { step: '04', title: 'Embeddings', sub: 'all-MiniLM-L6-v2' },
                    { step: '05', title: 'Vector Index', sub: 'FAISS Search Index' },
                    { step: '06', title: 'User Question', sub: 'Natural Language Query' },
                    { step: '07', title: 'Hybrid Retrieval', sub: 'Vector + Keyword Scoring' },
                    { step: '08', title: 'Context Selection', sub: 'Top-Ranked Passages' },
                    { step: '09', title: 'Ollama LLM', sub: 'Local Model Inference' },
                    { step: '10', title: 'Streaming Output', sub: 'Passages + History' },
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

            {/* How It Works Detailed Steps */}
            <Reveal delay={0.08}>
              <div className="border border-lavender/10 bg-lavender/3 rounded-xl p-4 md:p-5">
                <h3 className="font-body text-xs font-semibold text-lavender/90 uppercase tracking-wide mb-3">
                  How the System Works Step-by-Step
                </h3>
                <ol className="font-body text-xs text-lavender/65 space-y-2.5 list-decimal list-inside">
                  <li><strong className="text-lavender/85">Document Ingestion:</strong> The user selects an Ollama model and uploads a PDF file through the Streamlit web interface.</li>
                  <li><strong className="text-lavender/85">Text Extraction:</strong> PyMuPDF extracts raw text page-by-page from the uploaded document buffer.</li>
                  <li><strong className="text-lavender/85">Preprocessing &amp; Chunking:</strong> spaCy tokenizes and normalizes the text into clean, manageable chunks to preserve contextual boundaries.</li>
                  <li><strong className="text-lavender/85">Embedding Generation:</strong> The Sentence Transformers model (<code className="text-lavender/75">all-MiniLM-L6-v2</code>) maps each text chunk into a 384-dimensional dense semantic embedding.</li>
                  <li><strong className="text-lavender/85">FAISS Indexing:</strong> Embeddings are loaded into an in-memory FAISS vector index, ready for nearest-neighbor similarity querying.</li>
                  <li><strong className="text-lavender/85">Query &amp; Hybrid Retrieval:</strong> When the user submits a natural language question, the query is embedded and compared against the index. A hybrid scoring mechanism blends vector cosine similarity with keyword matching to rank passages.</li>
                  <li><strong className="text-lavender/85">Contextual Prompt Synthesis:</strong> The highest-scoring passages are assembled into a structured prompt alongside the original question.</li>
                  <li><strong className="text-lavender/85">Local Inference &amp; Streaming:</strong> Ollama executes the local model (e.g. Llama 3.2), streaming the generated response back to Streamlit alongside expandable supporting passages, similarity scores, and session history.</li>
                </ol>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 5. SCREENSHOTS & DEMO VIDEO ─────────────────────────── */}
          <section aria-labelledby="section-previews">
            <Reveal>
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold">
                    Visual Evidence
                  </p>
                  <h2 id="section-previews" className="font-display text-2xl md:text-3xl text-purple-lilac font-light">
                    Application Screenshots
                  </h2>
                </div>
                <a
                  href="https://drive.google.com/file/d/1q8-x_RziRFKCrJf_UVMTwpO0EpHAUsKa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-pink-soft hover:underline flex items-center gap-1"
                >
                  <PlayCircle size={13} />
                  <span>Watch Demo Video &#8599;</span>
                </a>
              </div>
              <p className="font-body text-xs text-lavender/45 mb-5">
                Screenshots captured from the running Streamlit interface using local Ollama model inference.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {/* 1. Home Interface */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      1. Home Interface
                    </span>
                    <span className="font-body text-[10px] text-lavender/40">Streamlit UI</span>
                  </div>
                  <img
                    src="https://github.com/user-attachments/assets/24a3cff5-cc30-4230-9db7-b74dfff3de0c"
                    alt="IntelliAsk Home Interface displaying model selector, document upload sidebar, and query input"
                    className="w-full h-auto object-cover max-h-[290px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      The landing page provides an intuitive interface for selecting a local language model, uploading PDF documents, and asking natural-language questions.
                    </p>
                  </div>
                </div>

                {/* 2. Document Upload & Model Selection */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      2. Document Upload &amp; Model Selection
                    </span>
                    <span className="font-body text-[10px] text-lavender/40">Ollama Models</span>
                  </div>
                  <img
                    src="https://github.com/user-attachments/assets/fb812e78-6dc3-4c12-bb38-f34369f3cf72"
                    alt="IntelliAsk PDF upload view showing processed document status and dynamic local Ollama model selection dropdown"
                    className="w-full h-auto object-cover max-h-[290px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      Users can upload PDF documents and switch between multiple locally installed Ollama models without restarting the application.
                    </p>
                  </div>
                </div>

                {/* 3. AI Generated Answer */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      3. AI-Generated Answer
                    </span>
                    <span className="font-body text-[10px] text-lavender/40">Context Grounded</span>
                  </div>
                  <img
                    src="https://github.com/user-attachments/assets/f2406a4a-9dc5-4800-99e8-b2b838fa164c"
                    alt="IntelliAsk generated answer view showing streamed response grounded in retrieved PDF context"
                    className="w-full h-auto object-cover max-h-[290px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      The system retrieves the most relevant document passages using semantic similarity search and synthesizes an answer using a locally hosted Large Language Model.
                    </p>
                  </div>
                </div>

                {/* 4. Supporting Passages & Question History */}
                <div className="rounded-xl border border-lavender/12 bg-card/60 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-lavender/8 bg-lavender/4 flex items-center justify-between">
                    <span className="font-body text-xs font-semibold text-lavender/85">
                      4. Supporting Passages &amp; Question History
                    </span>
                    <span className="font-body text-[10px] text-lavender/40">Explainability</span>
                  </div>
                  <img
                    src="https://github.com/user-attachments/assets/e9e0badf-1d1c-488f-a1a1-0f464a06c081"
                    alt="IntelliAsk supporting passages panel showing similarity scores and persistent question history"
                    className="w-full h-auto object-cover max-h-[290px]"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-lavender/8 bg-lavender/2 mt-auto">
                    <p className="font-body text-xs text-lavender/55 leading-relaxed">
                      Every response includes supporting document passages, semantic relevance scores, and persistent question history to improve transparency and explainability.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Video Demo Callout Card */}
            <Reveal delay={0.08}>
              <div className="border border-pink-soft/25 bg-pink-soft/5 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <PlayCircle size={20} className="text-pink-soft shrink-0" />
                  <div>
                    <h4 className="font-body text-xs font-semibold text-lavender/90">
                      Application Walkthrough Video
                    </h4>
                    <p className="font-body text-xs text-lavender/55">
                      Watch a complete demonstration of PDF upload, vector indexing, query streaming, and passage retrieval.
                    </p>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/file/d/1q8-x_RziRFKCrJf_UVMTwpO0EpHAUsKa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs font-medium text-pink-soft border border-pink-soft/30 bg-pink-soft/10 rounded-full px-4 py-1.5 hover:bg-pink-soft/20 transition-colors whitespace-nowrap"
                  aria-label="Open Demo Walkthrough Video"
                >
                  Watch Demo Video &#8599;
                </a>
              </div>
            </Reveal>
          </section>

          <Divider />

          {/* ── 6. SUPPORTED MODELS & BENCHMARKS ─────────────────────── */}
          <section aria-labelledby="section-models">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Local Inference
              </p>
              <h2 id="section-models" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Supported Local Ollama Models
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-lavender/10 rounded-xl overflow-hidden mb-6">
                <table className="w-full text-left font-body text-xs">
                  <thead className="bg-lavender/4 border-b border-lavender/8 text-[11px] uppercase tracking-wider text-pink-soft/80">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Model</th>
                      <th className="py-2.5 px-4 font-semibold">Approx. Footprint</th>
                      <th className="py-2.5 px-4 font-semibold">Inference Speed</th>
                      <th className="py-2.5 px-4 font-semibold">Synthesis Quality</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-lavender/6 text-lavender/70">
                    <tr className="hover:bg-lavender/2">
                      <td className="py-2.5 px-4 font-mono text-lavender/90 font-medium">llama3.2:1b</td>
                      <td className="py-2.5 px-4">~700 MB</td>
                      <td className="py-2.5 px-4 text-green-400/80">Fast</td>
                      <td className="py-2.5 px-4">Good (lightweight, rapid iteration)</td>
                    </tr>
                    <tr className="bg-lavender/2 hover:bg-lavender/4">
                      <td className="py-2.5 px-4 font-mono text-pink-soft font-medium">llama3.2</td>
                      <td className="py-2.5 px-4">~2 GB</td>
                      <td className="py-2.5 px-4">Moderate</td>
                      <td className="py-2.5 px-4 font-medium text-lavender/90">Better (strong comprehension)</td>
                    </tr>
                    <tr className="hover:bg-lavender/2">
                      <td className="py-2.5 px-4 font-mono text-lavender/90 font-medium">phi3</td>
                      <td className="py-2.5 px-4">~2 GB</td>
                      <td className="py-2.5 px-4 text-green-400/80">Fast</td>
                      <td className="py-2.5 px-4">Good (compact reasoning model)</td>
                    </tr>
                    <tr className="hover:bg-lavender/2">
                      <td className="py-2.5 px-4 font-mono text-lavender/90 font-medium">mistral</td>
                      <td className="py-2.5 px-4">~4 GB</td>
                      <td className="py-2.5 px-4">Moderate</td>
                      <td className="py-2.5 px-4">Great (deep context synthesis)</td>
                    </tr>
                    <tr className="hover:bg-lavender/2">
                      <td className="py-2.5 px-4 font-mono text-lavender/90 font-medium">gemma2</td>
                      <td className="py-2.5 px-4">Varies</td>
                      <td className="py-2.5 px-4">Moderate</td>
                      <td className="py-2.5 px-4">Good (Google Gemma architecture)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-lavender/10 bg-lavender/2">
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Interface &amp; Language
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    Streamlit<br />
                    Python 3.11
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Document &amp; NLP
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    PyMuPDF (fitz)<br />
                    spaCy (en_core_web_sm)
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Embeddings &amp; Search
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    Sentence Transformers<br />
                    all-MiniLM-L6-v2<br />
                    FAISS Vector Index
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase text-pink-soft/80 font-semibold mb-1.5">
                    Local Inference
                  </p>
                  <p className="font-body text-xs text-lavender/70 leading-relaxed">
                    Ollama Runtime<br />
                    Llama 3.2, Mistral<br />
                    Phi-3, Gemma
                  </p>
                </div>
              </div>
              <p className="font-body text-[11px] text-lavender/40 mt-3 italic">
                Fully open-source stack running natively on local hardware without cloud subscriptions.
              </p>
            </Reveal>
          </section>

          <Divider />

          {/* ── 8. PRIVACY & LOCAL EXECUTION ────────────────────────── */}
          <section aria-labelledby="section-privacy">
            <Reveal>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink-soft/75 font-semibold mb-1">
                Data Sovereignty
              </p>
              <h2 id="section-privacy" className="font-display text-2xl md:text-3xl text-purple-lilac font-light mb-4">
                Privacy &amp; Local Execution Model
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/2 mb-6">
                <div className="grid sm:grid-cols-2 gap-4 font-body text-xs text-lavender/65 leading-relaxed">
                  <div>
                    <strong className="text-lavender/90 block mb-1">No External API Exposure</strong>
                    Unlike cloud-hosted AI chatbots that require transmitting full document prompts across public networks to remote API servers, IntelliAsk runs language models through a local Ollama daemon on <code className="text-lavender/75">localhost:11434</code>. Document contents never leave the user's computer during chunking, embedding, indexing, or answer generation.
                  </div>
                  <div>
                    <strong className="text-lavender/90 block mb-1">Realistic Security Context</strong>
                    Local execution reduces the exposure surface by avoiding third-party LLM providers and external data storage. However, overall system confidentiality still depends on local host configuration, operating system permissions, and device-level encryption.
                  </div>
                </div>
              </div>
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
                Limitations
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-pink-soft/20 rounded-xl p-4 md:p-5 bg-pink-soft/4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 font-body text-xs text-lavender/70 leading-relaxed">
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">PDF Format Only</strong>
                    The file extraction pipeline is implemented specifically for PDF files using PyMuPDF; plaintext, Word docs, and HTML are not ingested.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">Single Document per Session</strong>
                    The vector index is constructed for one active document at a time; cross-document comparative querying is not supported in the current version.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">No OCR for Scanned PDFs</strong>
                    Image-only or scanned PDFs without embedded text layers cannot be extracted; optical character recognition (OCR) is not currently integrated.
                  </div>
                  <div className="p-3 rounded-lg border border-pink-soft/15 bg-pink-soft/5">
                    <strong className="text-pink-soft block mb-1">Model-Dependent Quality</strong>
                    Answer quality, reasoning depth, and latency depend directly on the compute capacity and architecture of the selected local LLM.
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Knowledge Base
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Multi-Document Collections
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Support simultaneously indexing and querying collections of documents with cross-document corpus retrieval.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Document Parsing
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    OCR for Scanned PDFs
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Integrate Tesseract or easyOCR to extract text from scanned, image-based, or non-digital PDF pages.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Attribution
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Citation-Aware Generation
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Incorporate exact page-number citations and inline passage references within synthesized answers.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Dialogue
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Conversational Memory
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Introduce multi-turn dialogue context so follow-up queries reference previous answers rather than isolated single-turn Q&amp;A.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Summarization
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Automated Summaries
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Generate document-level executive summaries and key-takeaway overviews upon upload.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Deployment
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Containerized Packaging
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Package the application with Docker and Docker Compose for single-command reproducible deployment.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Access Control
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    User Authentication
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Implement lightweight login and multi-user workspace management for shared machines.
                  </p>
                </div>

                <div className="border border-lavender/8 rounded-lg p-3 bg-lavender/2">
                  <span className="font-body text-[9px] uppercase tracking-wider text-pink-soft/75 font-semibold block mb-1">
                    Re-Ranking
                  </span>
                  <p className="font-body text-xs font-semibold text-lavender/85 mb-1">
                    Cross-Encoder Re-Ranking
                  </p>
                  <p className="font-body text-[11px] text-lavender/45 leading-relaxed">
                    Deploy cross-encoder re-ranking models (such as BGE or Cohere reranker) to optimize top passage selection.
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
                    01 &mdash; Grounding context transforms LLM utility
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Providing explicit document passages into the prompt context steers language models from generic associative completion toward grounded document synthesis, turning an unconstrained text model into an effective document reader.
                  </p>
                </div>
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    02 &mdash; Hybrid scoring balances semantics with keyword precision
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Pure vector embeddings excel at semantic similarity but sometimes overlook exact technical jargon, acronyms, or proper nouns. Combining dense retrieval with keyword matching provided a balanced scoring foundation.
                  </p>
                </div>
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    03 &mdash; Local execution delivers genuine data sovereignty
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Running lightweight quantized models (such as Llama 3.2:1b and Phi-3) locally with Ollama proved that practical RAG systems can be operated on consumer-grade laptops without recurring API expenses or data transmission risks.
                  </p>
                </div>
                <div className="border border-lavender/10 rounded-xl p-4 bg-lavender/3">
                  <p className="font-body text-xs font-semibold text-pink-soft mb-1">
                    04 &mdash; Transparency through similarity scoring build user trust
                  </p>
                  <p className="font-body text-xs text-lavender/60 leading-relaxed">
                    Exposing the extracted source passages and numerical similarity scores alongside the AI answer allowed users to immediately inspect and verify whether the model correctly interpreted the underlying document text.
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
              <div className="flex items-center gap-3">
                <a
                  href="https://drive.google.com/file/d/1q8-x_RziRFKCrJf_UVMTwpO0EpHAUsKa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-body text-xs font-medium text-pink-soft border border-pink-soft/30 bg-pink-soft/8 rounded-full px-3.5 py-1.5 hover:bg-pink-soft/15 transition-colors duration-200"
                  aria-label="Watch Demo Video"
                >
                  <PlayCircle size={13} />
                  <span>Watch Demo Video &#8599;</span>
                </a>
                <a
                  href="https://github.com/Shivangid2904/Intelligent-Question-Answering-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-body text-xs text-lavender/60 hover:text-lavender border border-lavender/12 bg-lavender/4 rounded-full px-3.5 py-1.5 transition-colors duration-200"
                  aria-label="View on GitHub"
                >
                  <Github size={13} />
                  <span>GitHub &#8599;</span>
                </a>
              </div>
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
