"use client";

import { motion } from "framer-motion";

const chapters = [
  {
    id: "discovery",
    label: "DISCOVERY",
    description: "ETHNOGRAPHIC RESEARCH",
    position: "top-left",
  },
  {
    id: "build",
    label: "SYSTEM",
    description: "ARCHITECTURE & DESIGN",
    position: "top-right",
  },
  {
    id: "shift",
    label: "CONSOLE",
    description: "OPERATOR INTERFACE",
    position: "bottom-left",
  },
  {
    id: "outcome",
    label: "OUTCOME",
    description: "RESULTS & METRICS",
    position: "bottom-right",
  },
];

const positionClasses: Record<string, string> = {
  "top-left": "top-[15%] left-[10%] md:top-[20%] md:left-[15%]",
  "top-right":
    "top-[15%] right-[10%] md:top-[20%] md:right-[15%] text-right",
  "bottom-left":
    "bottom-[20%] left-[10%] md:bottom-[25%] md:left-[15%]",
  "bottom-right":
    "bottom-[20%] right-[10%] md:bottom-[25%] md:right-[15%] text-right",
};

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      {/* Center title */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center">
          <p className="text-eyebrow text-white/60 mb-2">ROADMAP</p>
          <h2 className="text-headline text-white/90 max-w-md mx-auto">
            The HELIOS case study, in five steps.
          </h2>
        </div>
      </motion.div>

      {/* Chapter nodes positioned around */}
      {chapters.map((chapter, i) => (
        <motion.a
          key={chapter.id}
          href={`#${chapter.id}`}
          className={`absolute ${positionClasses[chapter.position]} z-10 group`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
        >
          <span className="block text-xs tracking-[0.2em] text-white/80 group-hover:text-[#8CFF7A] transition-colors duration-300 mb-1">
            {chapter.label}
          </span>
          <span className="block text-[10px] tracking-wider text-white/40 group-hover:text-white/60 transition-colors duration-300">
            {chapter.description}
          </span>
        </motion.a>
      ))}
    </section>
  );
}
