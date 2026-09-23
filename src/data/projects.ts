import { ProjectDetail } from '../components/ProjectModal';

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: 'sre-triage-swarm',
    number: '01',
    title: 'SRE & FinOps Triage Swarm',
    category: 'AI Infrastructure',
    year: '2026',
    tagline:
      'Multi-agent system for automated incident investigation and cloud-budget-aware troubleshooting using hybrid retrieval with Qdrant + BM25.',
    problem:
      'Incident investigation and cloud cost optimization often require manual correlation of logs, metrics, and billing data across disconnected dashboards, creating prolonged Mean Time to Resolution (MTTR).',
    solution:
      'Designed a multi-agent swarm architecture to autonomously query logs, infrastructure state, and FinOps telemetry to isolate root causes and suggest remediations with high confidence.',
    impact:
      'Cut simulated incident triage latency by 65% with hybrid vector search and automated cloud remediation proposals.',
    tools: ['LangChain', 'Qdrant', 'BM25', 'FastAPI', 'Streamlit', 'Python'],
    deliverables: [
      'Autonomous Multi-Agent Swarm',
      'Hybrid Vector + BM25 Retrieval',
      'Automated Root-Cause Diagnosis',
      'Cloud FinOps Cost Correlator',
    ],
    images: ['/images/triagemesh.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/SRE-Autonomous',
    featured: true,
  },
  {
    id: 'aura',
    number: '02',
    title: 'Aura',
    category: 'AI Application',
    year: '2025',
    tagline:
      'Cross-platform AI companion with asynchronous Gemini-powered conversational workflows and Firebase-backed client caching.',
    problem:
      'Standard AI companions lack persistent context across sessions, suffer from slow sequential API calls, and degrade completely on poor cellular networks.',
    solution:
      'Built a cross-platform companion focused on asynchronous processing pipelines, token streaming, and aggressive client-side caching to deliver near-instant perceived latency.',
    impact:
      'Sub-200ms perceived response times and reliable cross-device memory retention.',
    tools: ['Gemini 2.5 Flash', 'Firebase', 'TypeScript', 'React Native', 'Tailwind CSS'],
    deliverables: [
      'Low-Latency Conversational Engine',
      'Persistent Memory Layer',
      'Cross-Platform Client UI',
      'Async Stream Pipelines',
    ],
    images: ['/images/aura-app.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/aura-app',
    featured: true,
  },
  {
    id: 'recon-ai',
    number: '03',
    title: 'Recon AI',
    category: 'Disaster Response',
    year: '2025',
    tagline:
      'Disaster-response system designed around offline-first communication and store-and-forward networking during connectivity failures.',
    problem:
      'During natural disasters, terrestrial cellular networks collapse, leaving first responders and isolated citizens without emergency coordination or situational maps.',
    solution:
      'Developed a resilient, offline-first communication platform that queues encrypted triage data when disconnected and syncs automatically when a connection is restored.',
    impact:
      'Recognized at emergency buildathons for seamless zero-connectivity situational mapping.',
    tools: ['Next.js', 'Leaflet', 'Geolocation API', 'Service Workers', 'IndexedDB'],
    deliverables: [
      'Offline Geospatial Triage Map',
      'Store-and-Forward Mesh Protocol',
      'Emergency Resource Dispatcher',
      'Progressive Web App (PWA)',
    ],
    images: ['/images/recon-ai.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/recon-ai-buildathon',
    featured: true,
  },
  {
    id: 'sentinel',
    number: '04',
    title: 'SENTINEL',
    category: 'Developer Tools',
    year: '2025',
    tagline:
      'AI code verification layer combining semantic LLM analysis with deterministic security rules and static AST checks.',
    problem:
      'Static analysis tools flag syntax warnings but miss logical vulnerabilities, security anti-patterns, and architectural regressions.',
    solution:
      'Combined traditional static analysis (Semgrep) with LLM-powered semantic analysis (Gemini) in a unified developer workflow and CLI tool.',
    impact:
      'Reduced pull-request security review overhead with automated inline fix proposals.',
    tools: ['Gemini API', 'Semgrep', 'VS Code API', 'TypeScript', 'Python CLI'],
    deliverables: [
      'Dual-Engine Security Pipeline',
      'VS Code Diagnostics Provider',
      'Inline Autofix Engine',
      'Automated CI/CD Security Gate',
    ],
    images: ['/images/citesynth.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/SENTINEL',
    featured: false,
  },
  {
    id: 'permanent-qr',
    number: '05',
    title: 'Permanent QR',
    category: 'Product Engineering',
    year: '2025',
    tagline:
      'Stable QR resolution concept for durable physical product links and cloud-backed media archives.',
    problem:
      'Physical QR codes printed on consumer products, packaging, and equipment break when the underlying URL or domain structure changes over time.',
    solution:
      'Engineered a stable resolution layer that decouples physical QR matrices from destination URLs, allowing dynamic redirection, versioned assets, and scan telemetry.',
    impact:
      'Eliminated reprinting costs with zero downtime dynamic asset rerouting.',
    tools: ['Next.js', 'TypeScript', 'AWS S3', 'PostgreSQL', 'QR Matrix Engine'],
    deliverables: [
      'Decoupled Dynamic Redirection Engine',
      'Product Asset Vault',
      'Scan Telemetry Dashboard',
      'Vector Matrix Generator',
    ],
    images: ['/images/cinematic_trail_bg.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/permanent-qr-demo',
    featured: false,
  },
  {
    id: 'passion-protocol',
    number: '06',
    title: 'Passion Protocol',
    category: 'Social / Matching',
    year: '2025',
    tagline:
      'Product concept for matching collaborators by interests and building goals rather than traditional resumes.',
    problem:
      'Traditional professional networking platforms optimize for job titles, corporate pedigrees, and resume keywords rather than authentic creative chemistry.',
    solution:
      'Designed a social matching protocol that leverages vector embeddings to connect builders based on the semantic similarity of their side projects, technical interests, and building goals.',
    impact:
      'Connected creators based on shared passion matrices rather than corporate resumes.',
    tools: ['Next.js', 'React', 'Vector Embeddings', 'FastAPI', 'Tailwind CSS'],
    deliverables: [
      'Vector Interest Matching Engine',
      'Dynamic Builder Profiles',
      'Project Collaboration Feed',
      'Direct Real-Time Chat',
    ],
    images: ['/images/sentiment.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/passion-protocol',
    featured: false,
  },
  {
    id: 'interview-agent',
    number: '07',
    title: 'Interview Agent',
    category: 'AI Agents',
    year: '2025',
    tagline:
      'AI-driven interview workflow exploring structured interactions, adaptive questioning, and automated technical evaluation.',
    problem:
      'Initial technical candidate screening is heavily time-consuming, prone to human interviewer bias, and difficult to standardize across engineering disciplines.',
    solution:
      'Built an autonomous agent capable of conducting structured technical interviews, adapting questions dynamically based on real-time candidate answers, and outputting actionable rubrics.',
    impact:
      'Automated standardized technical screenings with transparent evaluation criteria.',
    tools: ['Python', 'FastAPI', 'Gemini API', 'LangChain', 'Speech Processing'],
    deliverables: [
      'Adaptive Conversational Agent',
      'Automated Evaluation Matrix',
      'Interactive Candidate Workspace',
      'Objective Feedback Report',
    ],
    images: ['/images/cable-fault.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/Interview-Agent',
    featured: false,
  },
  {
    id: 'indicdoc-vqa',
    number: '08',
    title: 'IndicDoc-VQA',
    category: 'Vision-Language / Edge AI',
    year: '2025',
    tagline:
      'Offline-first VLM pipeline for extracting structured JSON from complex bilingual Marathi/English documents on local CPU infrastructure.',
    problem:
      'Processing sensitive regional language government, legal, and medical documents through cloud APIs breaches data sovereignty rules and costs prohibitive token fees.',
    solution:
      'Engineered a completely offline, local Vision-Language Model pipeline capable of extracting structured JSON schemas from noisy bilingual scans without internet access.',
    impact:
      '100% private on-premise document digitization with zero cloud reliance.',
    tools: ['Qwen2.5-VL', 'Ollama', 'FastAPI', 'Docker', 'Python', 'CPU Quantization'],
    deliverables: [
      'Local VLM Inference Server',
      'Bilingual Marathi/English Parser',
      'Deterministic JSON Schema Extractor',
      'Zero-Dependency Docker Container',
    ],
    images: ['/images/maitri.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/IndicDoc-VQA',
    featured: false,
  },
  {
    id: 'edge-chest-xray',
    number: '09',
    title: 'Edge Chest X-Ray Triage',
    category: 'Edge AI / Medical',
    year: '2024',
    tagline:
      'Offline medical-imaging prototype with INT8 TFLite inference, Grad-CAM explainability and a local voice copilot.',
    problem:
      'Rural clinics lack certified radiologists and reliable internet, making urgent triage of pulmonary emergencies and tuberculosis cases difficult.',
    solution:
      'Deployed an edge-optimized AI triage system that runs completely offline with INT8 quantization, augmented with visual Grad-CAM explainability and a local voice copilot.',
    impact:
      'Sub-50ms offline inference with transparent visual heatmaps for healthcare workers.',
    tools: ['TensorFlow Lite INT8', 'Grad-CAM', 'OpenCV', 'Python', 'Local TTS'],
    deliverables: [
      'Sub-50ms On-Device Triage Engine',
      'Visual Grad-CAM Saliency Maps',
      'Hands-Free Voice Interface',
      'Lightweight Clinical Tablet UI',
    ],
    images: ['/images/xray-triage.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/edge-tb-triage',
    featured: false,
  },
  {
    id: 'ai-traffic-analyzer',
    number: '10',
    title: 'AI Traffic Flow Analyzer',
    category: 'Computer Vision',
    year: '2024',
    tagline:
      'Real-time vehicle detection, tracking, speed estimation and congestion analysis using deep vision.',
    problem:
      'Municipal traffic agencies rely on expensive road sensors and manual CCTV inspection rather than automated real-time analytics.',
    solution:
      'Built a software-based computer vision pipeline that analyzes standard video feeds to detect vehicles, estimate velocity, and monitor intersection bottlenecks in real time.',
    impact:
      'Real-time tracking of 30+ vehicles per frame with accurate density heatmaps.',
    tools: ['YOLOv8', 'BoT-SORT', 'OpenCV', 'PyTorch', 'Python'],
    deliverables: [
      'Multi-Class Vehicle Detector',
      'BoT-SORT Trajectory Tracker',
      'Speed & Density Vector Estimator',
      'Live Video Analytics Stream',
    ],
    images: ['/images/traffic.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/AI-Traffic-Flow-Analyzer',
    featured: false,
  },
];
