import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Medical Imaging",
    tagline: "AI that gives clinicians an edge without adding to their burden",
    hero: {
      headline: "The data that could save lives is sitting unread.",
      subheadline:
        "Every day, hospitals generate thousands of scans, reports, and clinical records. Most of it is never fully analysed. The data is there. The insight is not.",
    },
    narrative: [
      {
        title: "The problem worth solving",
        body: "Radiologists work under enormous time pressure. Pathologists review slides manually. Clinicians make life-and-death decisions with incomplete pictures, not because they lack skill, but because the volume of data has outpaced what any human team can process. Early detection saves the most lives. It also depends on catching signals that are easy to miss when you are reviewing your fiftieth scan of the day.",
      },
      {
        title: "What we believe",
        body: "AI in healthcare should work alongside clinicians, not replace their judgement. The goal is not automation for its own sake. It is giving clinicians more time to do what only they can do. A system that flags what matters, surfaces patterns that would take hours to find manually, and keeps the human expert in the loop is the kind of AI that actually improves outcomes.",
      },
      {
        title: "What we build",
        body: "We build deep learning systems trained on annotated clinical datasets to detect disease at the earliest stages. We have built multimodal pipelines that extract structured data from handwritten clinical notes, scanned PDFs, and imaging reports, replacing manual review processes that once took hours per patient file. Our infrastructure runs on AWS at clinical scale, designed for reliability in high-stakes environments.",
      },
      {
        title: "Where we are headed",
        body: "The next frontier is connecting the dots across the full patient journey, linking imaging findings, clinical records, and treatment outcomes into a single continuously learning system. We are building toward a world where every clinician, regardless of where they practise, has access to the kind of analytical depth that today only exists in the most advanced hospitals.",
      },
    ],
    useCases: [
      {
        title: "The radiologist reviewing scan number 80",
        hook: "Your team is talented. They are just completely overwhelmed.",
        problem: "A radiologist at a busy hospital reviews 60 to 100 scans a day. By scan 80, fatigue is real, and the subtle early-stage finding is the easiest to miss. It is not a skills problem. It is a volume problem. And the patient on that scan deserves the same attention as the first one of the morning.",
        idea: "What if every scan got a second set of eyes that never gets tired? An AI model that runs alongside the radiologist, not to replace them, but to flag anything worth a second look. It does not make the call. It just makes sure nothing slips through.",
        vision: "A clinic where early-stage detection rates climb not because you hired more staff, but because every clinician is working at their best, supported by a system that handles the volume so they can focus on the judgement.",
        outcome: "Deployed CNN models achieving diagnostic accuracy recognised at Gold Medal level on Kaggle. 70% improvement in patient outcome metrics in trial environments.",
      },
      {
        title: "The patient file that took 3 hours",
        hook: "Somewhere in a pile of PDFs and handwritten notes is the answer. Good luck finding it.",
        problem: "A new patient arrives. Their history is scattered across scanned referral letters, handwritten notes from three different GPs, and imaging reports from two different systems. Someone has to read all of it, manually, before the consultation. That someone is usually the most qualified person in the room, doing work that should not require their level of expertise.",
        idea: "We build pipelines that read the pile for you. Scanned PDFs, handwritten notes, imaging reports: ingested, structured, and summarised in seconds. The clinician walks into the consultation with a clear picture, not a reading list.",
        vision: "Clinical consultations that start with understanding, not archaeology. Time given back to the patient interaction instead of the paperwork.",
        outcome: "95% extraction accuracy across document types. Processing time reduced from hours to minutes per patient file.",
      },
      {
        title: "The diagnosis that came too late",
        hook: "Most cancers are survivable. If you catch them early enough.",
        problem: "The difference between stage 1 and stage 3 is often just time. Not time the patient wasted. Time the system lost. Waiting lists, overloaded clinicians, subtle imaging findings that did not trigger a follow-up. The technology to catch these earlier already exists. It is just not deployed at scale.",
        idea: "We build screening models that integrate into existing imaging workflows, running automatically on every scan and surfacing cases that warrant priority review. No disruption to the clinical process. Just a system that makes sure nothing waits when it should not.",
        vision: "A healthcare system where early detection is the default, not the exception, regardless of which hospital you are at or how busy the radiology department is that day.",
        outcome: "Transfer learning models trained on clinical datasets, deployable on existing infrastructure. Designed for production, not just proof of concept.",
      },
    ],
    caseStudies: [
      {
        title: "Pneumonia and Cancer Detection",
        description:
          "We designed and deployed a CNN and transfer learning model to detect pneumonia from chest X-ray images, trained on annotated clinical datasets with reproducible deployment infrastructure. The model achieved diagnostic accuracy that earned a Kaggle Gold Medal.",
        outcome: "70% improvement in patient outcomes. Gold Medal on Kaggle.",
        tags: ["CNN", "Transfer Learning", "SageMaker", "DICOM"],
        demoUrl: "https://cancer-detection-application.streamlit.app/?embed=true",
      },
      {
        title: "Multimodal Clinical Document Intelligence",
        description:
          "We built a pipeline to extract structured data from scanned clinical PDFs, handwritten notes, and imaging reports, combining vision models with LLMs to replace a manual review process that previously took hours per patient file.",
        outcome: "95% extraction accuracy. Processing time from hours to minutes.",
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
        "The data exists. Video feeds, sensor streams, thousands of pages of technical documents. The infrastructure to act on it has not kept pace.",
    },
    narrative: [
      {
        title: "The scale of the challenge",
        body: "Energy operations span remote sites, complex infrastructure, and teams that move fast under pressure. Inspections happen constantly. Reports pile up. Engineers spend hours searching through well logs and technical specs for answers they need in minutes. Safety-critical decisions get made on incomplete information, not because people are careless, but because the sheer volume of data has made complete analysis impossible.",
      },
      {
        title: "Our approach",
        body: "We build AI systems that work without needing labelled training data, because in complex industrial environments you rarely have perfectly annotated datasets. Our systems see, read, and reason, processing video, images, audio, and large technical documents to surface what matters without requiring months of data preparation before a single insight is produced.",
      },
      {
        title: "Real-time intelligence at the edge",
        body: "We have architected semi-real-time video and image processing systems on AWS that perform automated inspection and generate structured reports with no labelled training data. These systems run at the edge, close to the source, and scale across multiple sites without manual intervention.",
      },
      {
        title: "The enterprise AI platform",
        body: "Beyond inspection, we have delivered end-to-end enterprise AI platforms that bring together multi-agent workflows, natural language querying of operational data, and seamless integration with Microsoft Teams, SharePoint, and Outlook.",
      },
    ],
    useCases: [
      {
        title: "The inspection no one has time to analyse",
        hook: "You are generating hours of footage every day. Almost none of it gets properly reviewed.",
        problem: "An offshore platform generates continuous video and sensor data across dozens of inspection points. The footage gets stored. Sometimes it gets reviewed when there is time, which is rarely. Anomalies that should trigger action sit in a hard drive instead. And the first sign something was wrong is often the incident itself.",
        idea: "We build real-time video intelligence that watches the footage for you, not by training a model on thousands of labelled examples, but using zero-shot approaches that can identify what is wrong without needing to have seen it before. Structured reports generated automatically. Alerts sent immediately.",
        vision: "Operations where nothing goes unseen. Where the 3am anomaly on camera 14 gets flagged before it becomes a shutdown event.",
        outcome: "92% detection accuracy. Zero labelled training data. Deployed across a major ASX-listed energy company with executive commendation.",
      },
      {
        title: "The engineer who spent 4 hours on a document search",
        hook: "The answer to your question exists somewhere in your systems. Finding it should not be a half-day job.",
        problem: "A subsurface engineer needs to cross-reference well logs from three different fields, find a specific pressure reading from a 2019 inspection report, and check the engineering spec for a component replaced last year. Each document lives in a different system, formatted differently, some of them scanned PDFs. Four hours later, they have a partial answer.",
        idea: "We build agentic document assistants that sit across your entire document corpus. Ask a question in plain language and get a precise, grounded answer with the source cited, in seconds. Not a search engine. A reasoning system.",
        vision: "Engineering teams that spend their time on engineering, not information retrieval. Institutional knowledge that does not retire when a senior person does.",
        outcome: "Hours saved per query. Figure-level accuracy on technical documents. Deployed with S3 Vectors and AWS Bedrock Strands Agents.",
      },
      {
        title: "The AI platform that never connected to anything",
        hook: "You built something impressive. It just does not talk to the systems your people actually use.",
        problem: "A large energy company built an AI assistant. It was technically sound. But engineers used Teams. Subsurface data lived in Snowflake. Reports needed to go into SharePoint. The AI answered questions in a chat window that nobody opened because it was not where work happened. Adoption was near zero.",
        idea: "We build platforms where the AI lives inside the tools your teams already use, surfacing in Teams conversations, pulling data from Snowflake, pushing outputs to SharePoint. The intelligence comes to the workflow, not the other way around.",
        vision: "An organisation where AI assistance is invisible infrastructure, always available, always in context, never requiring a context switch.",
        outcome: "Production multi-agent platform serving engineering, legal, HSE, and subsurface teams across a major ASX-listed energy company.",
      },
    ],
    caseStudies: [
      {
        title: "Real-Time Multimodal Inspection Intelligence",
        description:
          "We architected a semi-real-time video, image, and audio processing system on AWS. The system performs automated detection and generates structured reports with no labelled training data.",
        outcome: "92% detection accuracy. Zero labelled data. Executive commendation.",
        tags: ["Computer Vision", "Kinesis Video Streams", "ECS", "Zero-Shot"],
      },
      {
        title: "Agentic Technical Document Assistant",
        description:
          "We replaced hours of manual document search with vector-based indexing and on-demand LLM reasoning, allowing natural language queries with figure-level grounding.",
        outcome: "Hours saved per query. Figure-level accuracy.",
        tags: ["Agentic RAG", "S3 Vectors", "AWS Bedrock", "Strands Agents"],
      },
      {
        title: "Enterprise Multi-Agent Platform",
        description:
          "End-to-end delivery of a production platform integrating multi-agent AI, Microsoft Graph API, Snowflake Cortex, and automated document generation.",
        outcome: "Production platform serving multiple business units across a major ASX-listed energy company.",
        tags: ["Multi-Agent", "FastAPI", "Snowflake Cortex", "Microsoft Graph"],
      },
    ],
  },
  {
    slug: "mining",
    name: "Mining & Resources",
    tagline: "When equipment fails, everything stops. We prevent that.",
    hero: {
      headline: "A machine that fails unexpectedly does not just cost money. It stops everything.",
      subheadline:
        "Mining operations run on assets that cannot afford downtime. The signals that predict failure are already there, buried in sensor data, waiting to be found.",
    },
    narrative: [
      {
        title: "The real cost of reactive maintenance",
        body: "In mining, unplanned equipment failure is not just an operational inconvenience. It can halt production across an entire site, create serious safety risks, and cost millions before the day is out. The industry has long known this, yet most operations still respond to failure rather than preventing it. Not because they lack data, but because no one has built the system to use it.",
      },
      {
        title: "What predictive intelligence looks like",
        body: "We build ML systems that monitor sensor streams from heavy equipment in real time, learning the patterns that precede failure hours or days before it happens. When you can replace a component during planned downtime instead of an emergency shutdown, everything changes.",
      },
      {
        title: "Beyond the machine",
        body: "The same data-driven discipline that predicts equipment failure can be applied across the mine. We have built financial risk models that reduced credit loss exposure and commodity price prediction models that gave commercial teams a quantitative edge.",
      },
      {
        title: "The vision for the future",
        body: "The mining industry is sitting on one of the richest untapped datasets in any sector. We believe the next decade will see mining operations transformed by AI systems that optimise in real time, not just preventing failure, but continuously learning how to extract more safely, efficiently, and sustainably.",
      },
    ],
    useCases: [
      {
        title: "The truck that broke on a Friday",
        hook: "It never just breaks at a convenient time.",
        problem: "A haul truck at a copper mine shows no obvious signs of trouble on Thursday. On Friday afternoon, a critical component fails. The repair takes 36 hours. Production across the section stops. The maintenance team works through the weekend. The cost is not just the repair. It is everything that did not happen while the truck was down. And the frustrating part is that the sensor data showing the early warning signs was there all week.",
        idea: "We build predictive maintenance models that read those sensor streams continuously, learning the patterns that show up 24 to 48 hours before failure. The maintenance team gets a scheduled alert, not an emergency call. They plan the repair. The truck comes down at a time that works.",
        vision: "A mine where unplanned downtime becomes the exception rather than the constant background cost of operations. Where the maintenance team is proactive, not reactive.",
        outcome: "20% reduction in operational downtime at Sarcheshmeh Copper Mine, one of the largest copper operations in the world. Over $1M in annual savings.",
      },
      {
        title: "The budget that was wrong every year",
        hook: "If your financial forecasts are consistently off, the model is not working.",
        problem: "A mining company builds a financial plan at the start of the year. Commodity prices move unpredictably. Equipment costs blow out. Credit losses hit harder than projected. By Q3, the budget is a historical document, not a guide. The team spends enormous energy reconciling actuals instead of making forward-looking decisions.",
        idea: "We build financial risk and forecasting models trained on operational and market data, models that get better over time, that flag when assumptions are drifting, and that give commercial teams a quantitative view of uncertainty rather than a single number that turns out to be wrong.",
        vision: "Financial planning that moves with the business. Dynamic, data-driven, and honest about what it does not know.",
        outcome: "10% revenue increase. Over $1M saved annually through reduced credit losses. Improved budget accuracy across commodity price forecasting models.",
      },
      {
        title: "The ore deposit that took months to map",
        hook: "There is value under the ground. The question is where exactly, and how to get to it efficiently.",
        problem: "Geological modelling in mining is still largely a manual, expert-driven process. Geologists spend weeks interpreting drill data, building models by hand, and making judgement calls about ore grade distribution. The process is slow, expensive, and heavily dependent on individual expertise that walks out the door when someone retires.",
        idea: "We apply ML to geological datasets, learning grade distribution patterns from historical drill results, satellite imagery, and geophysical data to build predictive models of where the ore is and how much is there. Faster, scalable, and continuously improved as new data comes in.",
        vision: "Exploration and production planning driven by data intelligence. Reducing waste, improving yield, and preserving institutional knowledge in systems rather than people.",
        outcome: "Geospatial ML models deployed for ore grade prediction and geological feature mapping across active mine sites.",
      },
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance at Copper Mine",
        description:
          "Predictive maintenance models for heavy equipment at Sarcheshmeh Copper Mine, processing real-time sensor streams to forecast component failure windows.",
        outcome: "20% reduction in operational downtime. $1M in annual savings.",
        tags: ["Predictive Maintenance", "Time Series", "Sensor Data", "Python"],
      },
      {
        title: "Financial Risk and Revenue Modelling",
        description:
          "Financial risk models to reduce credit loss exposure and commodity price prediction models leveraging ML on operational data.",
        outcome: "10% revenue increase. Over $1M saved annually through reduced credit losses.",
        tags: ["Financial ML", "Risk Modelling", "Forecasting", "Python"],
      },
    ],
  },
  {
    slug: "sports",
    name: "Sports Performance Analytics",
    tagline: "Elite performance is decided in fractions. We find them.",
    hero: {
      headline: "At the elite level, the difference between gold and fourth is invisible to the naked eye.",
      subheadline:
        "The margins that separate world champions from everyone else are measured in hundredths of a second. They are findable. Most teams just do not have the tools to find them.",
    },
    narrative: [
      {
        title: "What coaches are missing",
        body: "Elite coaches are exceptional at what they do. But even the best eye can only watch one athlete at a time. In a training session with fifteen swimmers, a coach cannot simultaneously track stroke rate, turn speed, velocity, and breathing pattern across the entire pool. The data that would reveal those marginal gains is being generated every second and most of it disappears the moment a session ends.",
      },
      {
        title: "Our vision for sport",
        body: "We believe elite sport deserves the same analytical depth that Formula 1 brings to a race car. Every lap generates thousands of data points and every adjustment is informed by engineering precision. We are building the equivalent for human athletic performance.",
      },
      {
        title: "What we build",
        body: "Using computer vision, pose estimation, and time series modelling, we analyse athlete movement from video, extracting stroke mechanics, biomechanical patterns, and performance metrics that were previously impossible to measure at training volume. The system works with a single camera, requires no wearables, and delivers feedback in real time.",
      },
      {
        title: "The path to the podium",
        body: "The LA 2028 and Brisbane 2032 Olympic Games represent an enormous opportunity for Australian sport. The organisations that invest now in building data intelligence infrastructure will arrive at those Games with a genuine analytical edge over their competitors.",
      },
    ],
    useCases: [
      {
        title: "The turn that was costing 0.3 seconds",
        hook: "In elite swimming, 0.3 seconds is the difference between a medal and watching from the stands.",
        problem: "A swimmer has been competitive for years. Their times are good but not improving. The coach watches every session and nothing obvious stands out. What nobody has measured is that their underwater kick phase after the turn is 12% less efficient than their nearest rival. That is a biomechanical detail that is completely invisible to the naked eye at poolside speed.",
        idea: "We use computer vision and pose estimation to track every joint and every movement at every moment of every lap, from a single poolside camera. The coach gets a session summary that shows exactly where time is being lost and why. The swimmer gets a precise technical target to work on tomorrow.",
        vision: "Coaching that is informed by data at the level of detail previously only available to Formula 1 teams. Every session leaving a trace that can be analysed, compared, and improved.",
        outcome: "Stroke analysis and turn efficiency metrics extracted from standard video. Technique insights previously unavailable at training volume.",
      },
      {
        title: "The injury that happened two weeks before trials",
        hook: "The worst injuries are the ones you saw coming but did not have the data to act on.",
        problem: "An elite athlete pushes hard in the build-up to a major competition. Their training load has been high. They feel fine, or at least they say they do. Two weeks before trials, they pull up with a soft tissue injury that ends their campaign. Looking back at the training data afterwards, the warning signs were there: accumulated fatigue, altered movement patterns, reduced recovery. But nobody was watching for them.",
        idea: "We build load monitoring and injury risk models trained on wearable and training data. The performance staff gets an early warning when an athlete's metrics are drifting into a risk zone, not a vague instinct but a data-driven signal that something needs to change this week.",
        vision: "Elite athletes arriving at their most important competitions healthy, because the system around them was smart enough to protect them in the preparation phase.",
        outcome: "Time series models for load monitoring and injury risk prediction deployed across elite training environments.",
      },
      {
        title: "The coach watching 15 swimmers at once",
        hook: "Nobody can watch 15 people simultaneously. But a system can.",
        problem: "Squad training sessions are chaotic. Fifteen swimmers, multiple lanes, different sets, different ability levels. A coach walks the pool deck doing their best, but the maths does not work. They can give meaningful individual attention to maybe three or four athletes per session. The other eleven get group feedback and hope it applies to them.",
        idea: "We build multi-athlete tracking systems that monitor everyone in the pool simultaneously, generating individual performance profiles for each swimmer in each session, automatically. The coach comes off the pool deck with a full picture of what happened, not just what they happened to be watching.",
        vision: "Every swimmer in a squad getting the analytical attention that today only the star athletes receive, raising the performance floor for the whole team.",
        outcome: "Multi-athlete simultaneous tracking from single high-angle camera. Individual session reports generated automatically.",
      },
    ],
    caseStudies: [
      {
        title: "Swim Stroke and Technique Analysis",
        description:
          "Computer vision pipeline using pose estimation to analyse swimmer technique from standard poolside video, extracting stroke rate, turn speed, and biomechanical metrics.",
        outcome: "Technique insights previously unavailable at training volume.",
        tags: ["Pose Estimation", "Computer Vision", "Time Series", "Python"],
      },
      {
        title: "Athlete Load and Injury Risk Modelling",
        description:
          "Time series models trained on wearable and training data to identify load patterns associated with elevated injury risk.",
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
        body: "Organisations across every industry are experimenting with AI. Most of those experiments produce genuinely promising results in a controlled environment, with clean data, in a Jupyter notebook. The problem comes when it is time to turn that experiment into a system that real people use, every day, at scale.",
      },
      {
        title: "What we believe",
        body: "AI strategy without execution is just a slide deck. We are not interested in writing roadmaps that gather dust. We assess where an organisation actually is and build a path from there to real, working systems.",
      },
      {
        title: "From strategy to production",
        body: "We work across the full AI delivery lifecycle, identifying where AI will genuinely move the needle, building the data infrastructure, developing and deploying models, and establishing the operational practices that keep those models working over time.",
      },
      {
        title: "Building internal capability",
        body: "A core measure of success for us is not just delivering a system. It is leaving an organisation capable of running, adapting, and extending it without us. The organisations that will win with AI over the next decade are the ones that built the internal muscle to keep innovating.",
      },
    ],
    useCases: [
      {
        title: "The AI project that never shipped",
        hook: "Six months. A talented team. A demo that impressed everyone. And then nothing.",
        problem: "A company invests in an AI project. The data scientists build something genuinely impressive with great accuracy, clean notebooks, and promising results. Then it hits the real world. The data in production is messier than the training set. The infrastructure team has questions nobody can answer. The model needs retraining. Six months later, the project is technically still alive but not actually running anywhere.",
        idea: "We build for production from day one, not as an afterthought. That means MLOps pipelines, monitoring, retraining triggers, proper data contracts, and infrastructure that a non-data-scientist can operate. The goal is a system that works next year without us in the loop.",
        vision: "AI projects that ship, run reliably, and get better over time. Not impressive demos that become expensive abandoned infrastructure.",
        outcome: "End-to-end MLOps pipelines deployed. Deployment time cut by 80%. Automated monitoring and retraining in production.",
      },
      {
        title: "The team that spent 2 hours finding one answer",
        hook: "Your organisation already knows the answer. Nobody can find it.",
        problem: "A new staff member needs to understand the company position on a regulatory matter. The answer exists in a policy document from 2021, a legal brief from 2022, and an email thread from last year. Three systems, no common search, no way to know what you do not know. Two hours later, they have found most of it. They are not confident they have found all of it.",
        idea: "We build knowledge systems that sit across your entire document corpus, policies, contracts, reports, emails, and let anyone ask a question in plain language. Not a keyword search. A reasoning system that understands context, finds the relevant source, and explains what it found.",
        vision: "Organisations where institutional knowledge is accessible to everyone, not just the people who have been around long enough to know where to look.",
        outcome: "RAG systems deployed on internal document corpora. Hours saved per user per week. High adoption across teams.",
      },
      {
        title: "The report that took half a day to write",
        hook: "If you write the same type of report every week, a machine should be doing most of it.",
        problem: "Every Monday morning, an analyst pulls data from three systems, formats it into a PowerPoint, writes the executive summary, and sends it to twelve people. It takes four hours. The data is mostly the same structure as last week. The insights require maybe 20 minutes of genuine thinking. The other three hours and forty minutes are assembly work that could be automated.",
        idea: "We build agentic systems that do the assembly automatically, pulling from your data sources, generating the deck, drafting the narrative, and handing the analyst a near-finished output that needs 20 minutes of review instead of four hours of construction.",
        vision: "Analysts spending their time on analysis. Leaders getting better information faster. The repetitive work done by systems that do not mind doing it.",
        outcome: "Agentic document generation pipelines deployed. PPTX, Excel, and DOCX outputs generated automatically from live data sources.",
      },
    ],
    caseStudies: [
      {
        title: "LLM-Powered Knowledge Base",
        description:
          "RAG system on internal document corpus allowing natural language querying, delivering accurate, grounded answers in seconds.",
        outcome: "Hours saved per user per week. Rapid adoption across teams.",
        tags: ["LLM", "RAG", "LangChain", "AWS Bedrock"],
      },
      {
        title: "End-to-End MLOps Pipeline",
        description:
          "Full MLOps pipeline replacing a manual, error-prone process with automated monitoring, retraining, and deployment.",
        outcome: "Model drift detected automatically. Deployment time cut by 80%.",
        tags: ["MLOps", "SageMaker", "CI/CD", "Model Monitoring"],
      },
    ],
  },
];
