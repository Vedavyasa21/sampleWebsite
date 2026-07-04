"use client";

import { motion } from "framer-motion";

export default function ChapterShift() {
  return (
    <section
      id="shift"
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
          <span className="text-[#8CFF7A] text-sm font-mono">03</span>
          <span className="text-eyebrow text-white/40">SHIFT</span>
        </div>

        <h2 className="text-headline text-white mb-6">
          Live across fourteen reactor cells
        </h2>

        <p className="text-body leading-relaxed">
          When the new console went live, the change was immediate. Operator
          response time on plasma anomalies dropped from minutes to seconds —
          the unified interface gave them a single source of truth they could
          trust at a glance. Within the first week, every one of the fourteen
          reactor cells had adopted the system, and the backlog of feature
          requests from the engineering team made it clear we had only just
          begun.
        </p>
      </motion.div>
    </section>
  );
}
