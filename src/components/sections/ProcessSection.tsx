const phases = [
  {
    number: "01",
    title: "Discovery",
    description: "Map data landscape, define success metrics, identify highest-value AI opportunities.",
  },
  {
    number: "02",
    title: "Prototype",
    description: "Validate the core assumption with a scoped build. Results in weeks, not quarters.",
  },
  {
    number: "03",
    title: "Production",
    description: "Full-stack engineering: pipelines, models, APIs, infrastructure, CI/CD, observability.",
  },
  {
    number: "04",
    title: "Operate",
    description: "Monitoring, retraining triggers, alerting, and team handover. No dependency on us.",
  },
];

const tracks = [
  {
    label: "MLOps",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    dot: "bg-blue-400",
    tools: [
      "SageMaker Pipelines",
      "MLflow",
      "Feature Store",
      "Model Registry",
      "Drift Detection",
      "A/B Testing",
      "Auto-Retraining",
      "Data Versioning",
    ],
  },
  {
    label: "LLMOps",
    color: "text-[#7c6fcd]",
    border: "border-[#7c6fcd]/20",
    bg: "bg-[#7c6fcd]/5",
    dot: "bg-[#7c6fcd]",
    tools: [
      "AWS Bedrock",
      "Strands Agents",
      "RAG Pipelines",
      "Vector Stores",
      "Prompt Versioning",
      "LangChain",
      "Guardrails",
      "Eval Frameworks",
    ],
  },
  {
    label: "DevOps",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    dot: "bg-emerald-400",
    tools: [
      "GitHub Actions",
      "Terraform",
      "Docker / ECS",
      "AWS Lambda",
      "CloudWatch",
      "CDK",
      "S3 / RDS",
      "IAM / Secrets",
    ],
  },
];

const stack = [
  { category: "Cloud", items: ["AWS Bedrock", "SageMaker", "ECS", "Lambda", "S3", "CloudWatch"] },
  { category: "Agents", items: ["Strands Agents", "LangChain", "RAG", "Multi-Agent", "Tool Use", "HITL"] },
  { category: "Models", items: ["Claude 3", "Llama 3", "Mistral", "CNN", "XGBoost", "Transformers"] },
  { category: "Data", items: ["Snowflake", "Airflow", "Spark", "Pandas", "DVC", "Feature Store"] },
  { category: "Infra", items: ["Terraform", "Docker", "GitHub Actions", "CDK", "FastAPI", "PostgreSQL"] },
  { category: "Vision", items: ["OpenCV", "YOLO", "Kinesis Video", "Pose Estimation", "DICOM", "PIL"] },
];

export default function ProcessSection() {
  return (
    <section className="px-6 py-24 border-t border-[#1e1e2e] bg-[#0d0d14]">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Phase pipeline */}
        <div>
          <div className="text-center mb-12">
            <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
              How We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              From first conversation to production
            </h2>
            <p className="text-[#8888aa] max-w-lg mx-auto leading-relaxed">
              A structured engagement that moves fast, de-risks early, and leaves you with systems your team can own.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((step, i) => (
              <div
                key={step.number}
                className="relative bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl p-6"
              >
                {i < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2 w-4 h-px bg-[#2a2a3a] z-10" />
                )}
                <div className="text-3xl font-black text-[#1e1e30] mb-4 select-none">
                  {step.number}
                </div>
                <h3 className="text-white font-semibold text-sm mb-3">{step.title}</h3>
                <p className="text-[#666688] text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MLOps / LLMOps / DevOps tracks */}
        <div>
          <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
            Engineering Tracks
          </p>
          <h2 className="text-2xl font-bold text-white mb-8">
            Three disciplines. One delivery.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tracks.map((track) => (
              <div
                key={track.label}
                className={`rounded-xl border ${track.border} ${track.bg} p-6`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${track.dot}`} />
                  <span className={`text-sm font-bold tracking-wide ${track.color}`}>
                    {track.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {track.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-[#0a0a0f] border border-[#1e1e2e] text-[#9090b0] text-xs px-2.5 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full tech stack */}
        <div>
          <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-2xl font-bold text-white mb-8">
            What we actually build with
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stack.map((group) => (
              <div
                key={group.category}
                className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl p-5"
              >
                <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-4">
                  {group.category}
                </p>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#2a2a3a] flex-shrink-0" />
                      <span className="text-[#8888aa] text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
