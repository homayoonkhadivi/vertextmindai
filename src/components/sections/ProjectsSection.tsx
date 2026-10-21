"use client";

import { useState } from "react";
import DemoModal from "@/components/ui/DemoModal";

const projects = [
  {
    title: "Cancer & Pneumonia Detection",
    description:
      "Deep learning model using CNN and transfer learning to detect cancer and pneumonia from chest X-ray images. Trained on annotated clinical datasets with reproducible deployment infrastructure.",
    outcome: "Kaggle Gold Medal. 70% improvement in patient outcomes.",
    tags: ["CNN", "Transfer Learning", "TensorFlow", "SageMaker", "DICOM"],
    links: {
      github: "https://github.com/homayoonkhadivi/Cancer_detection_application",
      kaggle: "https://www.kaggle.com/homayoonkhadivi",
      demo: "https://cancer-detection-application.streamlit.app/?embed=true",
    },
    highlight: true,
  },
  {
    title: "Customer Intelligence: Gender and Sentiment",
    description:
      "NLP classification system that predicts audience profile and sentiment from raw text. Built on Twitter descriptions, applicable to any customer-written text including support tickets, reviews, and sign-up forms.",
    outcome: "Instant audience segmentation from raw text.",
    tags: ["NLP", "Scikit-learn", "Sentiment Analysis", "Text Classification"],
    links: {
      github: "https://github.com/homayoonkhadivi/Gender-classification-text-sentiment-analysis",
      kaggle: "https://www.kaggle.com/code/homayoonkhadivi/twitter-gender-classification-high-acc-69-56-nlp",
      demo: "https://gender-classification-text-sentiment-analysis-bprfgtyn4pfjc2hb.streamlit.app/?embed=true",
    },
    highlight: false,
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.234.118-.353.354-.353h2.431c.234 0 .351.119.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334Z" />
  </svg>
);

interface ActiveDemo {
  title: string;
  description: string;
  url: string;
}

export default function ProjectsSection() {
  const [activeDemo, setActiveDemo] = useState<ActiveDemo | null>(null);

  return (
    <>
      <section className="px-6 py-24 border-t border-[#1e1e2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
              Open Source Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Projects you can explore
            </h2>
            <p className="text-[#8888aa] max-w-lg mx-auto leading-relaxed">
              Real models, real code. Every project below is live and open — click through to the repo or try the demo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative bg-[#0d0d16] border rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(124,111,205,0.15)] ${
                  project.highlight
                    ? "border-[#7c6fcd44]"
                    : "border-[#1e1e2e] hover:border-[#7c6fcd33]"
                }`}
              >
                {project.highlight && (
                  <div className="absolute -top-3 left-5">
                    <span className="bg-[#7c6fcd] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Kaggle Gold Medal
                    </span>
                  </div>
                )}

                <h3 className="text-white font-bold text-base mb-3 mt-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-[#7777aa] text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <p className="text-[#7c6fcd] text-xs font-medium mb-4">
                  → {project.outcome}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#1a1a2e] text-[#7c6fcd] text-xs px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-auto flex-wrap">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#8888aa] hover:text-white border border-[#1e1e2e] hover:border-[#7c6fcd44] px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <GithubIcon /> Code
                    </a>
                  )}
                  {project.links.kaggle && (
                    <a
                      href={project.links.kaggle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#8888aa] hover:text-white border border-[#1e1e2e] hover:border-[#7c6fcd44] px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <KaggleIcon /> Kaggle
                    </a>
                  )}
                  {project.links.demo && (
                    <button
                      onClick={() =>
                        setActiveDemo({
                          title: project.title,
                          description: project.description,
                          url: project.links.demo!,
                        })
                      }
                      className="flex items-center gap-1.5 text-xs text-white bg-[#7c6fcd] hover:bg-[#6a5db8] px-3 py-1.5 rounded-lg transition-colors ml-auto"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeDemo && (
        <DemoModal
          title={activeDemo.title}
          description={activeDemo.description}
          url={activeDemo.url}
          onClose={() => setActiveDemo(null)}
        />
      )}
    </>
  );
}
