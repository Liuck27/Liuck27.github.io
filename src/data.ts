// Typed content for the site. All sections render from these structures,
// so updating copy means editing data here rather than touching components.

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceEntry {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
  tech: string[]
}

export interface Project {
  title: string
  description: string
  highlights: string[]
  tech: string[]
  github: string
  /** Slug of a dedicated write-up in `articles.ts`, if one exists. */
  articleSlug?: string
}

export interface BackgroundEntry {
  title: string
  institution: string
  year: string
  kind: 'education' | 'certification'
}

export interface NavLink {
  label: string
  href: string
}

export interface SiteProfile {
  name: string
  role: string
  tagline: string
  about: string
  email: string
  linkedin: string
  github: string
  resume: string
}

export const profile: SiteProfile = {
  name: 'Luca Secchieri',
  role: 'Software Engineer at Leonardo Helicopters, Milan',
  tagline: 'I build software that holds up under pressure.',
  about:
    "Software engineer at Leonardo Helicopters in Milan, building production-grade systems across AI pipelines, backend services, and developer tooling. At Leonardo I built a vision-LLM document-comparison pipeline, stood up the division's first CI/CD pipeline, and shipped a local agentic RAG system for requirements retrieval, all alongside developing and verifying embedded avionics software under DO-178C DAL A. That safety-critical background gives me a strong bias toward rigor and correctness, which I carry into everything I build. Outside of work I am drawn to quantitative finance and enjoy applying engineering thinking to markets.",
  email: 'luca.secchieri@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luca-secchieri',
  github: 'https://github.com/Liuck27',
  resume: '/Luca_Secchieri_Resume.pdf',
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'C', 'C++', 'Data structures & algorithms'],
  },
  {
    category: 'AI/ML',
    items: [
      'RAG',
      'LLM Agents',
      'Prompt Engineering and Evaluation',
      'Ollama',
      'MCP',
      'PyTorch',
    ],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'REST', 'PostgreSQL', 'SQLite', 'ChromaDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'Git',
      'GitHub Actions',
      'GitLab CI',
      'Linux',
      'Docker',
      'AWS (EC2, S3, Lambda, IAM)',
    ],
  },
  { category: 'Monitoring', items: ['Grafana', 'Prometheus'] },
]

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'Leonardo S.p.A., Helicopters Division',
    location: 'Milan, Italy',
    period: 'Dec 2024 to Present',
    highlights: [
      'Reduced manual review time by 95% by building a vision-LLM pipeline to detect semantic content differences, iteratively refining prompts and evaluating model accuracy across curated test sets to maximize detection reliability.',
      "Reduced integration time by 80% by designing and deploying the division's first CI/CD pipeline (GitLab CI), automating builds, static analysis, and testing.",
      'Engineered a local agentic RAG system integrating software-requirements retrieval with LLMs, letting engineers locate and reference specifications during development.',
      'Built a full-stack dashboard (React, Python) that tracked GitLab issue progress via daily snapshots and forecasting models, improving delivery predictability.',
      'Led integration of contributions from 10+ engineers into production releases while developing and verifying embedded software under DO-178C DAL A, producing traceable artifacts for avionics certification.',
    ],
    tech: ['Python', 'C', 'GitLab CI', 'Vision LLM', 'Agentic RAG', 'DO-178C'],
  },
]

export const projects: Project[] = [
  {
    title: 'Multi-Modal Evidence Review',
    description:
      'Multimodal claim-verification pipeline for insurance-style damage claims, built solo in 24 hours for the HackerRank Orchestrate hackathon.',
    highlights: [
      'Designed an anti-anchoring "describe first, compare second" prompting strategy to stop the model from rubber-stamping the customer\'s own narrative — moved claim-status accuracy from 5/6 missed contradictions to 90% overall.',
      'Replaced a self-reported prompt injection flag with a deterministic post-processing policy enforced in code, the single highest-leverage fix in the project (+5 points across both strategies).',
      'Built a dual-backend client (Gemini + local LM Studio VLM) behind one interface after exhausting Gemini\'s free-tier quota mid-build, plus an offline evaluation harness comparing 3 strategies with full operational cost analysis.',
    ],
    tech: ['Python', 'Vision LLM', 'Pydantic', 'Prompt Engineering', 'LM Studio', 'Gemini API'],
    github: 'https://github.com/Liuck27/hackerrank-orchestrate-june26',
    articleSlug: 'multi-modal-evidence-review',
  },
  {
    title: 'Event-Driven Quantitative Backtesting Framework',
    description:
      'Production-grade event-driven backtesting engine for algorithmic trading strategies.',
    highlights: [
      'Event-driven engine with realistic slippage and commission modeling.',
      'Async REST API with SSE streaming for real-time equity curves and live parameter-sweep progress.',
      'Deployed full-stack across Vercel (React), Render (Dockerized API), and Supabase (PostgreSQL).',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
    github: 'https://github.com/Liuck27/quant-backtester',
  },
  {
    title: 'MLOps Fraud Detection Platform',
    description:
      'End-to-end MLOps platform for real-time credit-card fraud detection with monitoring and A/B routing.',
    highlights: [
      'Two models (XGBoost + PyTorch autoencoder) behind a FastAPI inference API with deterministic MD5-hash A/B routing over 284,807 transactions, returning SHAP top-k contributions per prediction.',
      '6-service Docker Compose stack (Airflow, MLflow, FastAPI, Postgres, Prometheus, Grafana) with an MLflow registry gated on PR-AUC for champion promotion.',
    ],
    tech: [
      'Python',
      'FastAPI',
      'Airflow',
      'MLflow',
      'XGBoost',
      'PyTorch',
      'Docker',
      'Prometheus',
    ],
    github: 'https://github.com/Liuck27/ml-fraud-detection-platform',
  },
  {
    title: 'Real-Time Gaze Depth Estimation (MSc thesis)',
    description:
      'Real-time gaze depth estimation using wearable eye-tracking and computer vision.',
    highlights: [
      'Estimated gaze depth in real time from wearable eye-tracking data using a computer-vision pipeline.',
    ],
    tech: ['Computer Vision', 'Eye-Tracking', 'Python'],
    github:
      'https://github.com/Liuck27/real-time-gaze-depth-estimation-thesis',
  },
]

export const background: BackgroundEntry[] = [
  {
    title: 'MSc Control Systems Engineering',
    institution: 'University of Padua',
    year: '2024',
    kind: 'education',
  },
  {
    title: 'Erasmus, Robotics & Automation Engineering',
    institution: 'Universitat Politècnica de Catalunya, Barcelona',
    year: '2024',
    kind: 'education',
  },
  {
    title: 'BSc Information Engineering',
    institution: 'University of Padua',
    year: '2022',
    kind: 'education',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    institution: 'Oracle',
    year: '2025',
    kind: 'certification',
  },
  {
    title: 'Machine Learning for Financial Trading',
    institution: 'New York Institute of Finance',
    year: '',
    kind: 'certification',
  },
]
