"use client";

import { motion } from "framer-motion";

export default function ChapterDiscovery() {
  return (
    <section
      id="discovery"
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
          <span className="text-[#8CFF7A] text-sm font-mono">01</span>
          <span className="text-eyebrow text-white/40">EXPLORATION</span>
        </div>

        <h2 className="text-headline text-white mb-6">
          Two weeks in the control room
        </h2>

        <p className="text-body leading-relaxed">
          We embedded directly with the plasma engineering team for fourteen
          days, observing real shift handoffs, anomaly response procedures, and
          the split-second decisions operators make when a reactor cell drifts
          out of tolerance. What we found was a tangle of fragmented dashboards,
          latency-burdened alarm systems, and a team of brilliant scientists
          working around software that fought them at every turn. The insights
          from those two weeks became the bedrock of every design decision that
          followed.
        </p>
      </motion.div>
    </section>
  );
}
