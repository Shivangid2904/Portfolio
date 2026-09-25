export type ProjectStatus = 'in-progress' | 'built'

export interface ProjectMetric {
  label: string
  value: string
}

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
  /** Verified key facts shown as metric chips — only use confirmed data */
  metrics?: ProjectMetric[]
  /** Path to a real screenshot or image asset in /public */
  previewImg?: string
  /** Alt text for previewImg — required when previewImg is set */
  previewAlt?: string
}

export const projects: Project[] = [
  {
    id: 'safeher',
    emoji: '🌸',
    name: 'SafeHer AI',
    status: 'in-progress',
    period: 'May 2026 – Present',
    category: 'Smart Women Safety · Risk Intelligence',
    hook: 'What if a navigation system thought about safety, not just distance?',
    description:
      "Developing an intelligent safety platform combining rule-based risk scoring, incident-aware route recommendations, and geospatial analysis. The current implementation includes a Flask API, Leaflet-based interface, Docker/PostGIS setup, and a route safety score using 7-day incident time decay. ML-based risk prediction and SHAP explainability are planned.",
    tech: ['Python', 'Flask', 'PostgreSQL', 'PostGIS', 'GeoAlchemy2', 'Leaflet', 'Docker', 'OSMnx', 'NetworkX'],
    github: 'https://github.com/Shivangid2904/safeher-ai',
    metrics: [
      { value: 'Rule-based', label: 'risk scoring' },
      { value: '7-day', label: 'incident decay' },
      { value: 'Leaflet', label: 'map interface' },
    ],
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
      "Built a local RAG-based question answering system using FAISS semantic search, keyword-boosted relevance filtering, Sentence Transformers, and Ollama. The system answers questions from uploaded documents while keeping inference fully local — no data leaves your machine.",
    tech: ['Python', 'RAG', 'FAISS', 'Sentence Transformers', 'Ollama', 'Streamlit'],
    github: 'https://github.com/Shivangid2904/Intelligent-Question-Answering-System',
  },
  {
    id: 'exolife',
    emoji: '🔭',
    name: 'ExoLife',
    status: 'built',
    period: '2025',
    category: 'Physics-Informed ML · Astrophysics',
    hook: 'Can machine learning find meaningful signals in the search for habitable worlds?',
    description:
      "Physics-informed ML on 3,757 NASA exoplanets — 49 labelled habitable — creating a 75.7:1 class imbalance. Label-defining features were excluded to reduce target leakage. The proxy model reaches an F1 score of 0.636. Benchmarks five models using stratified 5-fold cross-validation and SHAP explanations to surface the most influential planetary features.",
    tech: ['Python', 'scikit-learn', 'Random Forest', 'XGBoost', 'SHAP', 'pandas', 'Streamlit'],
    github: 'https://github.com/Shivangid2904/ExoLife-Exoplanet-Habitability-Assessment',
    demo: 'https://exolife-exoplanet-habitability.onrender.com/',
    demoLabel: 'Live Demo',
    metrics: [
      { value: '3,757', label: 'exoplanets' },
      { value: '49', label: 'habitable examples' },
      { value: '75.7:1', label: 'class imbalance' },
      { value: 'F1 0.636', label: 'proxy model' },
    ],
  },
  {
    id: 'awsfinops',
    emoji: '💸',
    name: 'AWS FinOps Automation Engine',
    status: 'built',
    period: 'Nov – Dec 2025',
    category: 'Serverless FinOps · Cloud Analytics',
    hook: 'Automated cloud cost analytics — so your billing data works for you, not against you.',
    description:
      "Built a serverless AWS pipeline to process and analyze cloud cost data using AWS Cost and Usage Reports, S3, Glue, Athena, Lambda, and EventBridge. Implemented in an AWS Academy lab environment (Nov – Dec 2025), the project focuses on automated cloud cost analytics and scheduled FinOps monitoring.",
    tech: ['AWS Cost & Usage Reports', 'Amazon S3', 'AWS Glue', 'Amazon Athena', 'AWS Lambda', 'Amazon EventBridge', 'AWS IAM', 'Python', 'SQL'],
    github: 'https://github.com/Shivangid2904/AWS-FinOps-Analytics-Pipeline',
    metrics: [
      { value: 'CUR → S3', label: 'ingestion' },
      { value: 'Glue + Athena', label: 'catalog & query' },
      { value: 'Lambda + EventBridge', label: 'automation' },
    ],
  },
  {
    id: 'orbitiq',
    emoji: '🪐',
    name: 'OrbitIQ',
    status: 'in-progress',
    period: 'Jun 2026 – Present',
    category: 'Space Mission Intelligence · Data Analytics',
    hook: 'A data exploration project around how humanity has reached beyond Earth.',
    description:
      "A space mission analytics platform analyzing global mission data using SQL, PostgreSQL, Python, and Power BI. Explores mission trends, organizations, vehicles, launch patterns, and reliability through data analysis and interactive visualization. The Power BI dashboard layer is currently in development.",
    tech: ['SQL', 'PostgreSQL', 'Python', 'Power BI'],
    github: 'https://github.com/Shivangid2904/OrbitIQ-Space-Mission-Intelligence-Platform',
    metrics: [
      { value: '4,324', label: 'missions in dataset' },
    ],
  },
  {
    id: 'cve',
    emoji: '☁️',
    name: 'CVE Vulnerability Intelligence Platform',
    status: 'built',
    period: '2025',
    category: 'Serverless Cybersecurity · AWS',
    hook: 'Vulnerability alerts that actually know which technologies you use.',
    description:
      "A simulated MSSP-style vulnerability intelligence platform that processes a sample CVE dataset, performs keyword-based severity classification, matches vulnerabilities against client environments, and sends alerts using AWS services. Lambda handles processing, DynamoDB stores vulnerability records, EventBridge manages scheduling, and SNS delivers notifications.",
    tech: ['AWS Lambda', 'S3', 'DynamoDB', 'EventBridge', 'SNS', 'Cognito', 'IAM', 'Python'],
    github: 'https://github.com/Shivangid2904/cve-vulnerability-intelligence-platform',
  },
  {
    id: 'waddler',
    emoji: '🎀',
    name: 'The Waddler Studio — Kidswear Designer Portfolio',
    status: 'built',
    period: '2025',
    category: 'Web Development · UI Design · Client Project',
    hook: "A client's creative vision, brought to life as a portfolio on the web.",
    description:
      "Designed and developed a portfolio website for kidswear designer Harsha Dubey, translating her requirements and creative vision into a responsive and visually engaging website. Continuous iteration based on client feedback across layout, content presentation, navigation, collection pages, and visual styling. The fashion/kidswear designs, collections, and creative work belong entirely to the client (Harsha Dubey); I designed and developed the website.",
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX', 'Netlify'],
    demo: 'https://the-waddler-studio.netlify.app/',
    demoLabel: 'Live Website',
    previewImg: '/waddler-preview.png',
    previewAlt: 'The Waddler Studio portfolio page showing kidswear collection — Design Portfolio heading with Garden Giggles collection preview. Website designed and developed by Shivangi Dubey; fashion designs by Harsha Dubey.',
  },
]
