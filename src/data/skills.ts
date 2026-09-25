export interface SkillGroup {
  id: string
  label: string
  emoji: string
  skills: string[]
  /** Skills listed here are highlighted as core — must be a subset of skills[] */
  coreSkills?: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ml',
    emoji: '🧠',
    label: 'Machine Intelligence & Data',
    skills: [
      'Python',
      'scikit-learn',
      'SHAP',
      'Pandas',
      'NumPy',
      'FAISS',
      'Sentence Transformers',
      'Ollama',
      'RAG',
      'XGBoost',
      'NLP',
      'Feature Engineering',
      'EDA',
    ],
    coreSkills: ['Python', 'scikit-learn', 'SHAP', 'Pandas', 'NumPy'],
  },
  {
    id: 'cloud',
    emoji: '☁️',
    label: 'Cloud & Serverless',
    skills: [
      'AWS Lambda',
      'S3',
      'Athena',
      'Glue',
      'EventBridge',
      'DynamoDB',
      'IAM',
      'CloudTrail',
      'SNS',
      'Cognito',
    ],
    coreSkills: ['AWS Lambda', 'S3', 'Athena', 'Glue'],
  },
  {
    id: 'engineering',
    emoji: '🛠️',
    label: 'Engineering & Tools',
    skills: [
      'SQL',
      'PostgreSQL',
      'Flask',
      'Docker',
      'Git',
      'GitHub',
      'PostGIS',
      'Streamlit',
      'Leaflet.js',
      'MySQL',
      'C++',
      'Java',
    ],
    coreSkills: ['SQL', 'PostgreSQL', 'Flask', 'Docker'],
  },
  {
    id: 'scientific',
    emoji: '🌌',
    label: 'Scientific & Spatial',
    skills: [
      'Power BI',
      'OSMnx',
      'NetworkX',
      'NASA Datasets',
      'spaCy',
      'PyMuPDF',
      'Tailwind CSS',
      'HTML / CSS',
    ],
    coreSkills: ['Power BI', 'OSMnx', 'NetworkX'],
  },
]

