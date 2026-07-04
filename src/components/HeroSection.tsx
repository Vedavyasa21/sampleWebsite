"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-8"
    >
      {/* Main content */}
      <motion.div
        className="flex flex-col items-center text-center max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-hero text-white mb-4">HELIOS</h1>

        <p className="text-subhead text-white/90 mb-8 max-w-2xl text-balance">
          Designing the operator console for a fusion reactor.
        </p>

        <p className="text-body text-white/70 max-w-readable mx-auto mb-12">
          A 9-month engagement helping a stealth-stage fusion startup design the
          control interface their plasma engineers trust under load.
        </p>

        <motion.a
          href="#roadmap"
          className="inline-flex items-center gap-2 px-8 py-3 border border-white/40 rounded-full text-sm tracking-wider uppercase text-white/80 hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          BEGIN BRIEFING →
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="scroll-indicator text-tiny text-white/50 tracking-widest uppercase">
          SCROLL TO ENTER
        </span>
        <div className="scroll-indicator w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
