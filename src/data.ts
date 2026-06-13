// Typed content for the site. All sections render from these structures,
// so updating copy means editing data here rather than touching components.

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
}

export interface BackgroundEntry {
  title: string
  institution: string
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
}

export const profile: SiteProfile = {
  name: 'Luca Secchieri',
  role: 'Software Engineer at Leonardo Helicopters, Milan',
  tagline: 'I build software that holds up under pressure.',
  about:
    'Software engineer at Leonardo Helicopters in Milan, working on AI/ML pipelines, CI/CD infrastructure, and safety-critical avionics software. I enjoy building software that works well under pressure: vision LLM systems, agentic RAG pipelines, developer tooling, and backend services. Working in avionics gave me an appreciation for rigor and precision, the kind where correctness is not optional, and I carry that into everything I build. Outside of work I am passionate about quantitative finance and enjoy applying engineering thinking to markets.',
  email: 'luca.secchieri@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luca-secchieri',
  github: 'https://github.com/Liuck27',
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['Python', 'C', 'C++'] },
  {
    category: 'AI/ML',
    items: [
      'RAG',
      'LLM Agents',
      'Prompt Engineering and Evaluation',
      'PyTorch',
      'Ollama',
      'MCP',
    ],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'REST', 'PostgreSQL', 'SQLite', 'ChromaDB'],
  },
  {
    category: 'Infrastructure',
    items: ['Linux', 'Docker', 'AWS (EC2, S3, Lambda, IAM)'],
  },
  { category: 'DevOps', items: ['Git', 'GitLab CI', 'GitHub Actions'] },
  { category: 'Monitoring', items: ['Grafana', 'Prometheus'] },
]

export const projects: Project[] = [
  {
    title: 'Event-Driven Quantitative Backtesting Framework',
    description: 'An algorithmic trading simulation engine.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
    github: 'https://github.com/Liuck27/quant-backtester',
  },
  {
    title: 'Real-Time Gaze Depth Estimation (MSc thesis)',
    description:
      'Real-time gaze depth estimation using wearable eye-tracking and computer vision.',
    tech: ['Computer Vision', 'Eye-Tracking', 'Python'],
    github:
      'https://github.com/Liuck27/real-time-gaze-depth-estimation-thesis',
  },
  {
    title: 'ML Fraud Detection Platform',
    description: 'A machine learning pipeline for fraud detection.',
    tech: ['Machine Learning', 'Python', 'Data Pipeline'],
    github: 'https://github.com/Liuck27/ml-fraud-detection-platform',
  },
]

export const background: BackgroundEntry[] = [
  {
    title: 'MSc Control Systems Engineering',
    institution: 'University of Padua',
    kind: 'education',
  },
  {
    title: 'Erasmus',
    institution: 'Universitat Politecnica de Catalunya, Barcelona',
    kind: 'education',
  },
  {
    title: 'BSc Information Engineering',
    institution: 'University of Padua',
    kind: 'education',
  },
  {
    title: 'Oracle Cloud Infrastructure Generative AI Professional',
    institution: 'Oracle',
    kind: 'certification',
  },
]
