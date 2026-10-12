import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Medical Imaging",
    tagline: "AI that gives clinicians an edge — without adding to their burden",
    hero: {
      headline: "The data that could save lives is sitting unread.",
      subheadline:
        "Every day, hospitals generate thousands of scans, reports, and clinical records. Most of it is never fully analysed. The data is there. The insight is not.",
    },
    narrative: [
      {
        title: "The problem worth solving",
        body: "Radiologists work under enormous time pressure. Pathologists review slides manually. Clinicians make life-and-death decisions with incomplete pictures — not because they lack skill, but because the volume of data has outpaced what any human team can process. Early detection, which saves the most lives, depends on catching signals that are easy to miss when you are reviewing your fiftieth scan of the day.",
      },
      {
        title: "What we believe",
        body: "AI in healthcare should work alongside clinicians, not replace their judgement. The goal is not automation for its own sake — it is giving clinicians more time to do what only they can do. A system that flags what matters, surfaces patterns that would take hours to find manually, and keeps the human expert in the loop is the kind of AI that actually improves outcomes.",
      },
      {
        title: "What we build",
        body: "We build deep learning systems trained on annotated clinical datasets to detect disease at the earliest stages. We have built multimodal pipelines that extract structured data from handwritten clinical notes, scanned PDFs, and imaging reports — replacing manual review processes that once took hours per patient file. Our infrastructure runs on AWS at clinical scale, designed for reliability in high-stakes environments.",
      },
      {
        title: "Where we are headed",
        body: "The next frontier is connecting the dots across the full patient journey — linking imaging findings, clinical records, and treatment outcomes into a single, continuously learning system. We are building toward a world where every clinician, regardless of where they practise, has access to the kind of analytical depth that today only exists in the most advanced hospitals.",
      },
    ],
    caseStudies: [
      {
        title: "Pneumonia & Cancer Detection",
        description:
          "We designed and deployed a CNN and transfer learning model to detect pneumonia from chest X-ray images — trained on annotated clinical datasets with reproducible deployment infrastructure. The model achieved diagnostic accuracy that earned a Kaggle Gold Medal.",
        outcome: "70% improvement in patient outcomes. Gold Medal on Kaggle.",
        tags: ["CNN", "Transfer Learning", "SageMaker", "DICOM"],
        demoUrl: "https://cancer-detection-application.streamlit.app/?embed=true",
      },
      {
        title: "Multimodal Clinical Document Intelligence",
        description:
          "We built a pipeline to extract structured data from scanned clinical PDFs, handwritten notes, and imaging reports — combining vision models with LLMs to replace a manual review process that previously took hours per patient file.",
        outcome: "95%+ extraction accuracy. Processing time from hours to minutes.",
        tags: ["Multimodal AI", "LLM", "Document Intelligence", "AWS Bedrock"],
      },
    ],
  },
  {
    slug: "energy",
    name: "Energy & Oil and Gas",
    tagline: "High-stakes operations deserve AI that works without shortcuts",
    hero: {
      headline: "In oil and gas, the cost of missing something is never small.",
      subheadline:
        "The data exists — video feeds, sensor streams, thousands of pages of technical documents. The infrastructure to act on it hasn't kept pace.",
    },
    narrative: [
      {
        title: "The scale of the challenge",
        body: "Energy operations span remote sites, complex infrastructure, and teams that move fast under pressure. Inspections happen constantly. Reports pile up. Engineers spend hours searching through well logs and technical specs for answers they need in minutes. Safety-critical decisions get made on incomplete information — not because people are careless, but because the sheer volume of data has made complete analysis impossible.",
      },
      {
        title: "Our approach",
        body: "We build AI systems that work without needing labelled training data, because in complex industrial environments you rarely have perfectly annotated datasets. Our systems see, read, and reason — processing video, images, audio, and large technical documents to surface what matters, without requiring months of data preparation before a single insight is produced.",
      },
      {
        title: "Real-time intelligence at the edge",
        body: "We have architected semi-real-time video and image processing systems on AWS that perform automated inspection and generate structured reports with no labelled training data. These systems run at the edge, close to the source, and scale across multiple sites without manual intervention. What once required a team of analysts reviewing footage after the fact now happens in near real-time.",
      },
      {
        title: "The enterprise AI platform",
        body: "Beyond inspection, we have delivered end-to-end enterprise AI platforms that bring together multi-agent workflows, natural language querying of operational data, and seamless integration with Microsoft Teams, SharePoint, and Outlook. Engineers and executives can query years of operational knowledge in plain language, generate reports automatically, and route approvals through the systems they already use every day.",
      },
    ],
    caseStudies: [
      {
        title: "Real-Time Multimodal Inspection Intelligence",
        description:
          "We architected a semi-real-time video, image, and audio processing system on AWS. The system performs automated detection and generates structured reports with no labelled training data — recognised by executive leadership for its scalability and operational impact across a major ASX-listed energy company.",
        outcome: "92% detection accuracy. Zero labelled data. Executive commendation.",
        tags: ["Computer Vision", "Kinesis Video Streams", "ECS", "Zero-Shot"],
      },
      {
        title: "Agentic Technical Document Assistant",
        description:
          "Engineers at a major energy company spent hours searching well logs, inspection reports, and engineering specs for answers. We replaced that process with vector-based indexing and on-demand LLM reasoning — allowing natural language queries with figure-level grounding and structured output.",
        outcome: "Hours saved per query. Figure-level accuracy. No more token-limit risks.",
        tags: ["Agentic RAG", "S3 Vectors", "AWS Bedrock", "Strands Agents"],
      },
      {
        title: "Enterprise Multi-Agent Platform",
        description:
          "We led end-to-end delivery of a production platform integrating multi-agent AI workflows, Microsoft Teams and SharePoint via Graph API, Snowflake Cortex for natural language data querying, and automated PPTX, Excel, and DOCX generation — serving engineering, legal, subsurface, and HSE teams.",
        outcome: "Production platform serving multiple business units across a major ASX-listed energy company.",
        tags: ["Multi-Agent", "FastAPI", "Snowflake Cortex", "Microsoft Graph"],
      },
    ],
  },
  {
    slug: "mining",
    name: "Mining & Resources",
    tagline: "When equipment fails, everything stops — we prevent that",
    hero: {
      headline: "A machine that fails unexpectedly doesn't just cost money. It stops everything.",
      subheadline:
        "Mining operations run on assets that cannot afford downtime. The signals that predict failure are already there — buried in sensor data, waiting to be found.",
    },
    narrative: [
      {
        title: "The real cost of reactive maintenance",
        body: "In mining, unplanned equipment failure is not just an operational inconvenience — it can halt production across an entire site, create serious safety risks, and cost millions before the day is out. The industry has long known this, yet most operations still respond to failure rather than preventing it. Not because they lack data, but because no one has built the system to use it.",
      },
      {
        title: "What predictive intelligence looks like",
        body: "We build ML systems that monitor sensor streams from heavy equipment in real time, learning the patterns that precede failure hours or days before it happens. The goal is not to predict every possible outcome — it is to give maintenance teams enough warning to act on a schedule, not in a crisis. When you can replace a component during planned downtime instead of an emergency shutdown, everything changes.",
      },
      {
        title: "Beyond the machine",
        body: "The same data-driven discipline that predicts equipment failure can be applied across the mine. We have built financial risk models that reduced credit loss exposure and improved budget forecasting accuracy, and commodity price prediction models that gave commercial teams a quantitative edge. At Sarcheshmeh Copper Mine — one of the largest copper mines in the world — our predictive maintenance models delivered a 20% reduction in operational downtime.",
      },
      {
        title: "The vision for the future",
        body: "The mining industry is sitting on one of the richest untapped datasets in any sector. Every drill, every haul truck, every processing plant is generating continuous telemetry. We believe the next decade will see mining operations transformed by AI systems that optimise in real time — not just preventing failure, but continuously learning how to extract more safely, efficiently, and sustainably.",
      },
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance — Copper Mine",
        description:
          "We developed and deployed predictive maintenance models for heavy equipment at Sarcheshmeh Copper Mine. Models processed real-time sensor streams to forecast component failure windows, enabling scheduled maintenance to replace reactive repair across one of the world's largest copper operations.",
        outcome: "20% reduction in operational downtime. $1M+ in annual savings.",
        tags: ["Predictive Maintenance", "Time Series", "Sensor Data", "Python"],
      },
      {
        title: "Financial Risk & Revenue Modelling",
        description:
          "We built financial risk models to reduce credit loss exposure and improve budget forecasting accuracy, alongside commodity price prediction models that leveraged ML on operational data to drive better commercial decisions.",
        outcome: "10% revenue increase. Over $1M saved annually through reduced credit losses.",
        tags: ["Financial ML", "Risk Modelling", "Forecasting", "Python"],
      },
    ],
  },
  {
    slug: "sports",
    name: "Sports Performance Analytics",
    tagline: "Elite performance is decided in fractions — we find them",
    hero: {
      headline: "At the elite level, the difference between gold and fourth is invisible to the naked eye.",
      subheadline:
        "The margins that separate world champions from everyone else are measured in hundredths of a second, in the angle of a stroke, in the efficiency of a turn. They are findable. Most teams just don't have the tools to find them.",
    },
    narrative: [
      {
        title: "What coaches are missing",
        body: "Elite coaches are exceptional at what they do. But even the best eye can only watch one athlete at a time. In a training session with fifteen swimmers, a coach cannot simultaneously track stroke rate, turn speed, velocity, and breathing pattern across the entire pool. The data that would reveal those marginal gains is being generated every second — and most of it disappears the moment a session ends.",
      },
      {
        title: "Our vision for sport",
        body: "We believe elite sport deserves the same analytical depth that Formula 1 brings to a race car. Every lap generates thousands of data points; every adjustment is informed by engineering precision. We are building the equivalent for human athletic performance — a system that captures what happens in training, not just competition, and turns it into insight that coaches can act on immediately.",
      },
      {
        title: "What we build",
        body: "Using computer vision, pose estimation, and time series modelling, we analyse athlete movement from video — extracting stroke mechanics, biomechanical patterns, and performance metrics that were previously impossible to measure at training volume. The system works with a single camera, requires no wearables, and delivers feedback in real time so coaches can adjust technique during a session rather than days later.",
      },
      {
        title: "The path to the podium",
        body: "The LA 2028 and Brisbane 2032 Olympic Games represent an enormous opportunity for Australian sport. The organisations that invest now in building data intelligence infrastructure will arrive at those Games with a genuine analytical edge over their competitors. We are working with performance teams to build that foundation — not just for a single competition cycle, but for the long-term capability to keep winning.",
      },
    ],
    caseStudies: [
      {
        title: "Swim Stroke & Technique Analysis",
        description:
          "We built a computer vision pipeline using pose estimation to analyse swimmer technique from standard poolside video — extracting stroke rate, turn speed, and biomechanical metrics. Coaches receive session-level dashboards with athlete comparisons and trend analysis.",
        outcome: "Technique insights previously unavailable at training volume.",
        tags: ["Pose Estimation", "Computer Vision", "Time Series", "Python"],
      },
      {
        title: "Athlete Load & Injury Risk Modelling",
        description:
          "We developed time series models trained on wearable and training data to identify load patterns associated with elevated injury risk — giving performance staff quantitative signals to adjust training volume before injury occurs.",
        outcome: "Early warning system for injury risk. Reduced reactive management.",
        tags: ["Time Series", "Wearables", "Risk Modelling", "Python"],
      },
    ],
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    tagline: "AI that ships, works, and keeps working",
    hero: {
      headline: "Most AI projects never make it out of a notebook.",
      subheadline:
        "The gap between a promising proof of concept and a system that delivers value in production is where most organisations get stuck. We close that gap.",
    },
    narrative: [
      {
        title: "The real problem with AI adoption",
        body: "Organisations across every industry are experimenting with AI. Most of those experiments produce genuinely promising results — in a controlled environment, with clean data, in a Jupyter notebook. The problem comes when it is time to turn that experiment into a system that real people use, every day, at scale. The infrastructure is wrong. The data is messier than expected. The model drifts. The team does not know how to maintain it. The project stalls.",
      },
      {
        title: "What we believe",
        body: "AI strategy without execution is just a slide deck. We are not interested in writing roadmaps that gather dust. We assess where an organisation actually is — not where they think they are — and build a path from there to real, working systems. That sometimes means starting with a single high-value use case and proving the value before expanding. It always means building for production from day one.",
      },
      {
        title: "From strategy to production",
        body: "We work across the full AI delivery lifecycle. We help organisations identify where AI will genuinely move the needle, build the data infrastructure to support it, develop and deploy the models, and establish the operational practices — MLOps, LLMOps, monitoring, evaluation — that keep those models working over time. We have built LLM-powered knowledge systems that replaced hours of manual research, agentic platforms that automate complex multi-step workflows, and RAG systems that give teams instant access to years of organisational knowledge.",
      },
      {
        title: "Building internal capability",
        body: "A core measure of success for us is not just delivering a system — it is leaving an organisation capable of running, adapting, and extending it without us. We embed with teams, share our methods, and build the internal capability that creates a sustainable AI practice. The organisations that will win with AI over the next decade are not the ones that hired the most AI vendors — they are the ones that built the internal muscle to keep innovating.",
      },
    ],
    caseStudies: [
      {
        title: "LLM-Powered Knowledge Base",
        description:
          "Staff at a large organisation were spending hours manually searching internal documents for answers to routine questions. We built a RAG system on their internal document corpus that allowed natural language querying — delivering accurate, grounded answers in seconds.",
        outcome: "Hours saved per user per week. Rapid adoption across teams.",
        tags: ["LLM", "RAG", "LangChain", "AWS Bedrock"],
      },
      {
        title: "End-to-End MLOps Pipeline",
        description:
          "We designed and implemented a full MLOps pipeline for a team that had models in production but no systematic approach to monitoring, retraining, or evaluation — replacing a manual, error-prone process with an automated, observable system.",
        outcome: "Model drift detected and corrected automatically. Deployment time cut by 80%.",
        tags: ["MLOps", "SageMaker", "CI/CD", "Model Monitoring"],
      },
    ],
  },
];
