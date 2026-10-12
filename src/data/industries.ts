import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Medical Imaging",
    tagline: "AI-powered diagnostics that give clinicians an edge",
    description:
      "Healthcare generates more data than any other industry — yet most of it goes unanalysed. We build deep learning systems that process medical images, clinical documents, and patient records to surface insights that improve diagnostic accuracy, reduce clinician workload, and drive earlier detection of disease.",
    capabilities: [
      "Medical image classification and segmentation (X-ray, CT, MRI, DICOM)",
      "Cancer and pathology detection models",
      "Multimodal document intelligence for clinical records",
      "Human-in-the-loop labelling pipelines with Amazon SageMaker Ground Truth",
      "Scalable inference infrastructure on AWS (SageMaker, Lambda, ECS)",
      "Clinical decision support integration",
    ],
    caseStudies: [
      {
        title: "Pneumonia & Cancer Detection — Deep Learning Classifier",
        description:
          "Designed and deployed a CNN and transfer learning model to detect pneumonia from chest X-ray images. Trained on annotated clinical datasets using SageMaker Studio and JumpStart, with Infrastructure as Code for reproducible deployment. Achieved a Kaggle Gold Medal for diagnostic accuracy.",
        outcome: "70% improvement in patient outcomes. Gold Medal on Kaggle.",
        tags: ["CNN", "Transfer Learning", "SageMaker", "DICOM"],
      },
      {
        title: "Multimodal Clinical Document Intelligence",
        description:
          "Built a multimodal pipeline to extract structured data from scanned clinical PDFs, handwritten notes, and imaging reports. Combined vision models with LLMs for page-level retrieval and conditional routing, replacing a manual review process that took hours per patient file.",
        outcome: "95%+ extraction accuracy. Processing time from hours to minutes.",
        tags: ["Multimodal AI", "LLM", "Document Intelligence", "AWS Bedrock"],
      },
    ],
  },
  {
    slug: "energy",
    name: "Energy & Oil and Gas",
    tagline: "Intelligent systems for complex, high-stakes operations",
    description:
      "The energy sector operates at a scale where small efficiency gains translate into millions of dollars and where safety failures carry enormous consequences. We build AI systems that process video, audio, image, and large technical documents to automate inspection, accelerate knowledge retrieval, and support operational decision-making — without requiring labelled training data.",
    capabilities: [
      "Semi-real-time video and image inference on AWS (ECS, Kinesis Video Streams)",
      "Multimodal inspection intelligence — zero labelled data approaches",
      "Agentic RAG on large technical documents with S3 Vectors",
      "Multi-agent enterprise platforms with Teams, SharePoint, and Outlook integration",
      "HITL approval workflows with structured write-back to enterprise systems",
      "LLMOps: prompt versioning, observability, model evaluation pipelines",
    ],
    caseStudies: [
      {
        title: "Real-Time Multimodal Inspection Intelligence",
        description:
          "Architected a semi-real-time video, image, and audio processing system on AWS using ECS, Lambda, Kinesis Video Streams, and CDK Infrastructure as Code. The system performs automated detection and generates structured reports with no labelled training data, recognised by executive leadership for scalability and operational impact.",
        outcome: "92% detection accuracy. Zero labelled data. Executive commendation.",
        tags: ["Computer Vision", "Kinesis Video Streams", "ECS", "Zero-Shot"],
      },
      {
        title: "Agentic Technical Document Assistant",
        description:
          "Replaced a full upfront document analysis approach with vector-based indexing (S3 Vectors) and on-demand LLM-driven reasoning with tool orchestration. Engineers query large technical documents — well logs, inspection reports, engineering specs — in natural language, with figure-level grounding and structured output.",
        outcome: "Token-limit risks eliminated. Figure-level accuracy improved. Hours saved per query.",
        tags: ["Agentic RAG", "S3 Vectors", "AWS Bedrock", "Strands Agents"],
      },
      {
        title: "Enterprise AI Platform — Multi-Agent Workflow System",
        description:
          "Led end-to-end delivery of a production FastAPI and TypeScript/React platform integrating multi-agent AI workflows, Microsoft Teams/SharePoint/Outlook via Graph API, Snowflake Cortex for natural language data querying, and PPTX/Excel/DOCX generation via agent skill integration. Served cross-functional teams across engineering, legal, subsurface, and HSE.",
        outcome: "Production platform serving multiple business units across a major ASX-listed energy company.",
        tags: ["Multi-Agent", "FastAPI", "Snowflake Cortex", "Microsoft Graph"],
      },
    ],
  },
  {
    slug: "mining",
    name: "Mining & Resources",
    tagline: "Predictive intelligence for high-value physical assets",
    description:
      "Mining operations depend on equipment that cannot afford to fail unexpectedly. We build ML systems that monitor sensor data, predict equipment failure before it happens, and model geological features — reducing unplanned downtime, extending asset life, and improving safety outcomes across complex mine environments.",
    capabilities: [
      "Predictive maintenance models from sensor and operational data",
      "Equipment failure forecasting and anomaly detection",
      "Geospatial ML on mine site and geological datasets",
      "Time series modelling for ore processing optimisation",
      "Financial risk modelling and budget forecasting",
      "Digital twin asset monitoring with IoT integration",
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance — Copper Mine Equipment",
        description:
          "Developed and deployed predictive maintenance models for heavy mining equipment at Sarcheshmeh Copper Mine, one of the largest copper mines in the world. Models processed real-time sensor streams to forecast component failure windows, enabling scheduled maintenance to replace reactive repair.",
        outcome: "20% reduction in operational downtime. Extended equipment lifespan. $1M+ in savings.",
        tags: ["Predictive Maintenance", "Time Series", "Sensor Data", "Python"],
      },
      {
        title: "Financial Risk & Revenue Modelling",
        description:
          "Built financial risk models to reduce credit loss exposure and improve budget forecasting accuracy. Separate price prediction models leveraged ML on commodity and operational data to drive commercial decisions. Delivered measurable revenue uplift through improved forecasting precision.",
        outcome: "10% revenue increase. Over $1M saved annually through reduced credit losses.",
        tags: ["Financial ML", "Risk Modelling", "Forecasting", "Python"],
      },
    ],
  },
  {
    slug: "sports",
    name: "Sports Performance Analytics",
    tagline: "Computer vision and biomechanics intelligence for elite athletes",
    description:
      "Elite sport generates a wealth of video, wearable, and biometric data that most organisations are not yet equipped to analyse systematically. We apply computer vision, time series modelling, and pose estimation to give coaches and performance staff quantitative insight into technique, load, and injury risk — decisions that were previously made by intuition alone.",
    capabilities: [
      "Stroke and technique analysis from video using pose estimation",
      "Split-time and pace modelling across training cycles",
      "Athlete load monitoring and injury risk scoring",
      "Wearable and biometric data integration",
      "Coach-facing dashboards with drill-down performance views",
      "Longitudinal performance tracking and trend analysis",
    ],
    caseStudies: [
      {
        title: "Swimming Technique Analysis — Computer Vision Pipeline",
        description:
          "Built a computer vision pipeline to analyse competitive swimming footage frame-by-frame, extracting stroke rate, entry angle, kick cadence, and underwater phase metrics. Models identify technique deviations that correlate with time loss, giving coaches data-driven intervention points that were previously invisible to the naked eye.",
        outcome: "Quantified technique differences between training sessions. Coach-ready reports in minutes.",
        tags: ["Pose Estimation", "Computer Vision", "OpenCV", "Biomechanics"],
      },
      {
        title: "Athlete Load and Injury Risk Monitoring",
        description:
          "Time series modelling on training volume, intensity, and biometric data to predict injury risk before symptoms appear. The system surfaces anomalies in an athlete's acute-to-chronic workload ratio and flags high-risk windows for a physio or coaching review — enabling proactive rather than reactive management of athlete health.",
        outcome: "Early identification of injury risk windows. Reduced time-loss injuries in monitored athletes.",
        tags: ["Time Series", "Wearable Data", "Risk Modelling", "MLOps"],
      },
    ],
  },
  {
    slug: "digital-transformation",
    name: "AI & Digital Transformation",
    tagline: "Strategy, architecture, and execution — from proof of concept to production",
    description:
      "Most Australian organisations have identified AI as a priority but are unsure how to move from experimentation to production impact. We provide the strategy, architecture, and hands-on engineering to build systems that actually ship — covering data infrastructure, LLM integration, MLOps pipelines, and team capability uplift.",
    capabilities: [
      "AI readiness assessment and roadmap design",
      "LLM integration, RAG architecture, and prompt engineering",
      "MLOps and LLMOps pipeline design (CI/CD, versioning, observability)",
      "Data strategy and modern data stack architecture",
      "Team training and engineering capability uplift",
      "AWS, Azure, and GCP cloud AI platform design",
    ],
    caseStudies: [
      {
        title: "Enterprise RAG — Staff Knowledge Base",
        description:
          "Designed and built a retrieval-augmented generation system on top of internal company documents, policies, and technical references. Staff query in natural language and receive grounded, cited answers rather than a search results list. Built on AWS Bedrock with S3 Vectors and a custom relevance pipeline.",
        outcome: "Research time cut by over 60%. Adopted across multiple business units.",
        tags: ["RAG", "AWS Bedrock", "S3 Vectors", "LLM"],
      },
      {
        title: "MLOps Platform — End-to-End Model Lifecycle",
        description:
          "Implemented a full MLOps and CI/CD pipeline using GitLab CI, MLflow, Kubeflow, and DVC — covering experiment tracking, model versioning, automated testing, and production deployment. Built for a team that was previously deploying models manually via ad hoc scripts.",
        outcome: "Full model lifecycle automated. Deployment time from days to hours.",
        tags: ["MLOps", "MLflow", "GitLab CI", "Docker", "Kubeflow"],
      },
    ],
  },
];
