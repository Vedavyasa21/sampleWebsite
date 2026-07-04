"use client";

import { motion } from "framer-motion";

export default function ChapterBuild() {
  return (
    <section
      id="build"
      className="relative min-h-screen flex items-center justify-center px-6 py-24"
    >
      <motion.div
        className="max-w-readable mx-auto z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#8CFF7A] text-sm font-mono">02</span>
          <span className="text-eyebrow text-white/40">BUILD</span>
        </div>

        <h2 className="text-headline text-white mb-6">
          Three views. One console.
        </h2>

        <p className="text-body leading-relaxed">
          Operators needed three distinct perspectives: a real-time plasma
          telemetry view for active shots, a system health overview spanning all
          fourteen reactor cells, and a diagnostic deep-dive for post-shot
          analysis. Rather than building three separate tools, we unified them
          into a single adaptive console — one interface that transformed
          depending on context and operator role. The result was a workspace
          that eliminated context-switching and reduced cognitive load during
          the most critical moments of a reactor cycle.
        </p>
      </motion.div>
    </section>
  );
}
