"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import NavBar from "@/components/NavBar";
import ParticleField from "@/components/ParticleField";
import HeroSection from "@/components/HeroSection";
import RoadmapSection from "@/components/RoadmapSection";
import ChapterDiscovery from "@/components/ChapterDiscovery";
import ChapterBuild from "@/components/ChapterBuild";
import ChapterShift from "@/components/ChapterShift";
import OutcomeSection from "@/components/OutcomeSection";

export default function Home() {
  const { progress, scrolled } = useScrollProgress();

  return (
    <main className="relative min-h-screen bg-black">
      {/* Radial glow behind particles */}
      <div className="fixed inset-0 pointer-events-none z-[1] radial-glow" />

      {/* Persistent 3D particle backdrop */}
      <ParticleField scrollProgress={progress} />

      {/* Fixed navigation */}
      <NavBar scrolled={scrolled} />

      {/* Content layers — each section sits above the canvas */}
      <div className="relative z-10">
        {/* Hero */}
        <HeroSection />

        {/* Roadmap */}
        <RoadmapSection />

        {/* Chapter 01: Discovery */}
        <ChapterDiscovery />

        {/* Chapter 02: Build */}
        <ChapterBuild />

        {/* Chapter 03: Shift */}
        <ChapterShift />

        {/* Outcome */}
        <OutcomeSection />

        {/* Footer */}
        <footer className="relative z-10 py-12 text-center">
          <p className="text-tiny text-white/15 tracking-widest uppercase">
            HELIOS — 2024
          </p>
        </footer>
      </div>
    </main>
  );
}
