export type ProjectStatus = 'in-progress' | 'built'

export interface Project {
  id: string
  emoji: string
  name: string
  status: ProjectStatus
  period: string
  hook: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  demoLabel?: string
  category: string
}

export const projects: Project[] = [
  {
    id: 'safeher',
    emoji: '🌸',
    name: 'SafeHer AI',
    status: 'in-progress',
    period: 'May 2026 to Present',
    category: 'Geospatial · Safety',
    hook: 'What if a navigation system thought about safety, not just distance?',
    description:
      "A geospatial routing system I'm building that factors in spatial and temporal risk, not just the shortest path. It uses a custom SafeHer Risk Index to score areas, Dijkstra-based routing on a PostGIS-backed graph, and safe-haven lookups. Flask REST APIs and a Streamlit interface are in progress. Still early, but the core idea is genuinely exciting to build.",
    tech: ['Python', 'PostgreSQL', 'PostGIS', 'OSMnx', 'NetworkX', 'Flask', 'Streamlit', 'Dijkstra'],
    github: 'https://github.com/Shivangid2904/safeher-ai',
  },
  {
    id: 'intelliask',
    emoji: '🛰️',
    name: 'IntelliAsk',
    status: 'built',
    period: '2025',
    category: 'RAG · NLP · Local AI',
    hook: 'Why send private documents to an external API when your own machine can search and reason over them?',
    description:
      "A local-first RAG system for asking questions over PDF documents with no external API calls and no data leaving your machine. It uses Sentence Transformers for embeddings, FAISS for hybrid retrieval, and Ollama for local LLM inference. The Streamlit interface makes it easy to drop in a document and start asking questions.",
    tech: ['Python', 'Sentence Transformers', 'FAISS', 'Ollama', 'Streamlit', 'PyMuPDF'],
    github: 'https://github.com/Shivangid2904/Intelligent-Question-Answering-System',
  },
  {
    id: 'exolife',
    emoji: '🔭',
    name: 'ExoLife',
    status: 'built',
    period: '2025',
    category: 'Scientific ML · Astrophysics',
    hook: 'Can machine learning find meaningful signals in the search for habitable worlds?',
    description:
      "A scientific ML project using NASA Exoplanet Archive data. The dataset has severe class imbalance since confirmed habitable candidates are rare, so I built a Physics-Informed Proxy Model to guide the learning, and benchmarked Random Forest and XGBoost with stratified cross-validation. SHAP explanations make the model's reasoning visible rather than treating it as a black box.",
    tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SHAP', 'Streamlit', 'NASA Exoplanet Archive'],
    github: 'https://github.com/Shivangid2904/ExoLife-Exoplanet-Habitability-Assessment',
  },
  {
    id: 'awsfinops',
    emoji: '💸',
    name: 'AWS FinOps Automation Engine',
    status: 'built',
    period: '2025',
    category: 'Cloud · Data Analytics',
    hook: 'What if your cloud billing data could tell you exactly where to cut costs, automatically?',
    description:
      'An automated AWS FinOps solution designed to analyze cloud spending, identify cost patterns, and support data-driven cost optimization. Uses AWS Cost and Usage Reports (CUR) as the billing data source and builds an automated pipeline for processing, querying, and visualizing cloud cost information, from S3 ingestion through Glue cataloging, Athena SQL analysis, Lambda automation, and QuickSight dashboards.',
    tech: ['AWS S3', 'AWS Glue', 'Amazon Athena', 'AWS Lambda', 'AWS EventBridge', 'Amazon QuickSight', 'CUR', 'Python'],
    github: 'https://github.com/Shivangid2904/AWS-FinOps-Analytics-Pipeline',
  },
  {
    id: 'orbitiq',
    emoji: '🪐',
    name: 'OrbitIQ',
    status: 'in-progress',
    period: 'Jun 2026 to Present',
    category: 'Data Analytics · Space',
    hook: 'A data exploration project around how humanity has reached beyond Earth.',
    description:
      "I'm building a data analytics platform over a dataset of 4,324+ historical space missions spanning 56 organisations and 137 launch sites. The SQL work (CTEs, window functions, aggregations) is running on PostgreSQL. I'm currently working on the Power BI dashboard layer, which is still in progress. The idea is to make the history of space exploration navigable and interesting.",
    tech: ['SQL', 'PostgreSQL', 'Python', 'Power BI'],
    github: 'https://github.com/Shivangid2904/OrbitIQ-Space-Mission-Intelligence-Platform',
  },
  {
    id: 'cve',
    emoji: '☁️',
    name: 'CVE Vulnerability Intelligence Platform',
    status: 'built',
    period: '2025',
    category: 'Cloud · Security · Serverless',
    hook: 'Vulnerability alerts that actually know which technologies you use.',
    description:
      "A serverless AWS pipeline that ingests CVE data, scores severity, and dispatches targeted alerts based on matched client technologies. Lambda handles processing, DynamoDB stores vulnerability records, EventBridge manages scheduling, and SNS delivers notifications. Cognito and IAM handle authentication and access control.",
    tech: ['AWS Lambda', 'S3', 'DynamoDB', 'EventBridge', 'SNS', 'Cognito', 'IAM', 'Python'],
    github: 'https://github.com/Shivangid2904/cve-vulnerability-intelligence-platform',
  },
  {
    id: 'waddler',
    emoji: '🎀',
    name: 'The Waddler Studio',
    status: 'built',
    period: '2025',
    category: 'Web Development · UI Design',
    hook: "A client's creative vision, brought to life as a portfolio on the web.",
    description:
      "Designed and developed a portfolio website for Harsha Dubey, a kidswear designer, translating her creative requirements into a responsive, visually engaging site. The project involved continuous iteration based on client feedback: layout, navigation, collection pages, and visual styling. The fashion designs and collections showcased belong entirely to the client; I was responsible for designing and building the website.",
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX', 'Netlify'],
    demo: 'https://the-waddler-studio.netlify.app/',
    demoLabel: 'Live Website',
  },

]
