export interface SkillGroup {
  id: string
  label: string
  emoji: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ml',
    emoji: '🧠',
    label: 'Machine Intelligence & Data',
    skills: [
      'Python',
      'scikit-learn',
      'XGBoost',
      'SHAP',
      'NLP',
      'Sentence Transformers',
      'FAISS',
      'Ollama',
      'RAG',
      'Pandas',
      'NumPy',
      'EDA',
      'Feature Engineering',
    ],
  },
  {
    id: 'cloud',
    emoji: '☁️',
    label: 'Cloud & Serverless',
    skills: [
      'AWS Lambda',
      'S3',
      'DynamoDB',
      'SNS',
      'EventBridge',
      'Athena',
      'Glue',
      'Cognito',
      'IAM',
      'CloudTrail',
    ],
  },
  {
    id: 'engineering',
    emoji: '🛠️',
    label: 'Engineering & Tools',
    skills: [
      'SQL',
      'PostgreSQL',
      'PostGIS',
      'MySQL',
      'Flask',
      'Streamlit',
      'Docker',
      'Git',
      'GitHub',
      'C++',
      'Java',
      'Leaflet.js',
    ],
  },
  {
    id: 'scientific',
    emoji: '🌌',
    label: 'Scientific & Spatial',
    skills: [
      'Power BI',
      'NASA Datasets',
      'OSMnx',
      'NetworkX',
      'PyMuPDF',
      'spaCy',
      'Tailwind CSS',
      'HTML / CSS',
    ],
  },
]
