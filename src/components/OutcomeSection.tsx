"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "−71%",
    caption: "Anomaly response time",
  },
  {
    value: "+34%",
    caption: "Operator confidence / accuracy",
  },
  {
    value: "14",
    unit: "cells",
    caption: "Reactor cells live",
  },
];

export default function OutcomeSection() {
  return (
    <section
      id="outcome"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-eyebrow text-white/60 mb-6 block">
          04 — OUTCOME
        </span>

        <h2 className="text-headline text-white mb-16 max-w-2xl mx-auto">
          What the team felt the first week it went live.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              <span className="stat-number">
                {stat.value}
                {stat.unit && (
                  <span className="block text-2xl md:text-3xl font-light text-white/80 mt-1">
                    {stat.unit}
                  </span>
                )}
              </span>
              <span className="text-sm text-white/60 tracking-wider mt-3 uppercase">
                {stat.caption}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
