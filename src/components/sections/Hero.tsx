"use client";

const chips = [
  "LLM Agents",
  "Computer Vision",
  "Predictive Analytics",
  "RAG Systems",
  "MLOps & LLMOps",
  "NLP & Sentiment",
];

// Nodes placed over the neural network nodes visible in the image
// ViewBox is 0 0 500 282 (matching the image's 1400×788 aspect ratio at 500px wide)
const NODES = [
  { id: 0,  x: 293, y: 71,  r: 8  }, // network hub center
  { id: 1,  x: 270, y: 30,  r: 5  },
  { id: 2,  x: 302, y: 27,  r: 5  },
  { id: 3,  x: 333, y: 47,  r: 5  },
  { id: 4,  x: 366, y: 41,  r: 5  },
  { id: 5,  x: 383, y: 67,  r: 6  },
  { id: 6,  x: 366, y: 94,  r: 5  },
  { id: 7,  x: 344, y: 112, r: 5  },
  { id: 8,  x: 315, y: 130, r: 5  },
  { id: 9,  x: 293, y: 114, r: 5  },
  { id: 10, x: 275, y: 97,  r: 5  },
  { id: 11, x: 319, y: 82,  r: 6  },
  // external background nodes
  { id: 12, x: 394, y: 21,  r: 4  },
  { id: 13, x: 448, y: 54,  r: 4  },
  { id: 14, x: 458, y: 126, r: 3  },
  { id: 15, x: 444, y: 222, r: 3  },
  { id: 16, x: 249, y: 18,  r: 4  },
  // anatomical side (cross-hemisphere)
  { id: 17, x: 155, y: 59,  r: 4  },
  { id: 18, x: 180, y: 112, r: 4  },
  { id: 19, x: 222, y: 172, r: 5  },
];

const EDGES = [
  // hub spokes
  [0,1],[0,2],[0,3],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],
  // ring
  [1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,1],
  // external
  [3,12],[4,13],[5,14],[6,15],[1,16],[12,13],[13,14],[14,15],
  // cross-hemisphere
  [0,19],[10,18],[9,17],
];

export default function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-0 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(124,111,205,0.15) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-4 items-center">

          {/* Left: text */}
          <div className="text-center lg:text-left py-12">
            <div className="inline-flex items-center gap-2 bg-[#111120] border border-[#7c6fcd33] text-[#9988dd] text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c6fcd] animate-pulse" />
              AI Consulting — Australia
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              From raw data to{" "}
              <span className="text-[#7c6fcd]">decisions that matter</span>
            </h1>

            <p className="text-[#8888aa] text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed">
              Most businesses know AI can help. Few know how to get there.
            </p>
            <p className="text-[#555577] text-base max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              We bridge that gap — from strategy and proof of concept through to
              production systems that drive measurable outcomes.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap mb-10">
              <a
                href="#services"
                className="bg-[#7c6fcd] hover:bg-[#6a5db8] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                See Our Work
              </a>
              <a
                href="#contact"
                className="border border-[#2e2e44] text-[#a0a0c0] hover:border-[#7c6fcd66] hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                Start a Conversation
              </a>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {chips.map((chip, i) => (
                <span
                  key={chip}
                  className="flex items-center gap-1.5 bg-[#111120] border border-[#1e1e2e] text-[#7777aa] text-xs px-3 py-1.5 rounded-full"
                  style={{ animation: `chip-in 0.4s ease both`, animationDelay: `${i * 0.08}s` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c6fcd] opacity-60" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: brain image + animated neural network overlay */}
          <div className="hidden lg:flex items-center justify-start py-8">
            <div
              className="relative w-full max-w-[500px] rounded-2xl overflow-hidden"
              style={{ animation: "float 8s ease-in-out infinite" }}
            >
              {/* Brain image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brain.jpg"
                alt="AI brain neural network"
                className="w-full block"
                style={{ filter: "brightness(0.75) saturate(0.85)" }}
              />

              {/* Subtle purple tint to harmonise with theme */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "rgba(60,40,120,0.18)" }}
              />

              {/* Scan sweep — a diagonal light that travels across */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 35%, rgba(124,111,205,0.15) 50%, transparent 65%)",
                  animation: "scan 5s ease-in-out infinite",
                }}
              />

              {/* Animated neural network overlay */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 282"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <filter id="ng" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="3.5" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="pg" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="5" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Edges */}
                {EDGES.map(([a, b], i) => (
                  <line
                    key={i}
                    x1={NODES[a].x} y1={NODES[a].y}
                    x2={NODES[b].x} y2={NODES[b].y}
                    stroke="#a09fe0"
                    strokeWidth="0.6"
                    strokeOpacity="0.3"
                  />
                ))}

                {/* Motion paths */}
                <path id="bp-a" d="M249,18 L293,71 L315,130 L444,222" fill="none" />
                <path id="bp-b" d="M394,21 L366,41 L293,71 L275,97 L155,59" fill="none" />
                <path id="bp-c" d="M458,126 L366,94 L293,71 L222,172" fill="none" />
                <path id="bp-d" d="M180,112 L293,71 L319,82 L448,54" fill="none" />
                <path id="bp-e" d="M293,71 L344,112 L458,126" fill="none" />

                {/* Traveling pulses */}
                <circle r="3" fill="#c4b8ff" filter="url(#pg)">
                  <animateMotion dur="3s" repeatCount="indefinite"><mpath href="#bp-a" /></animateMotion>
                </circle>
                <circle r="2.5" fill="#7c6fcd" filter="url(#pg)">
                  <animateMotion dur="3.6s" repeatCount="indefinite" begin="0.8s"><mpath href="#bp-b" /></animateMotion>
                </circle>
                <circle r="2.5" fill="#a09fe0" filter="url(#pg)">
                  <animateMotion dur="2.9s" repeatCount="indefinite" begin="1.4s"><mpath href="#bp-c" /></animateMotion>
                </circle>
                <circle r="2" fill="#ffffff" fillOpacity="0.8" filter="url(#pg)">
                  <animateMotion dur="2.6s" repeatCount="indefinite" begin="0.4s"><mpath href="#bp-d" /></animateMotion>
                </circle>
                <circle r="2" fill="#7c6fcd" filter="url(#pg)">
                  <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.9s"><mpath href="#bp-e" /></animateMotion>
                </circle>

                {/* Nodes */}
                {NODES.map((n) => (
                  <g key={n.id} filter="url(#ng)">
                    <circle cx={n.x} cy={n.y} r={n.r * 2.2} fill="#7c6fcd" fillOpacity="0.07" />
                    <circle cx={n.x} cy={n.y} r={n.r} fill="#a09fe0" fillOpacity={n.id === 0 ? "0.95" : "0.65"}>
                      <animate
                        attributeName="r"
                        values={`${n.r};${n.r * 1.35};${n.r}`}
                        dur={`${2 + n.id * 0.19}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="fillOpacity"
                        values={n.id === 0 ? "0.8;1;0.8" : "0.45;0.75;0.45"}
                        dur={`${2.4 + n.id * 0.15}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                ))}
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
