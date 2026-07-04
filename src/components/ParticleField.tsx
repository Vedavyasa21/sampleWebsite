"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 4000;
const GREEN = new THREE.Color("#8CFF7A");

// Shape definitions for particle positions at each stage
function spherePositions(count: number): Float32Array {
  const pos = new Float32Array(count * 3);
  const radius = 2.5;
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random());
    pos[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
    pos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r;
    pos[i * 3 + 2] = Math.cos(phi) * r;
  }
  return pos;
}

function spiralPositions(count: number): Float32Array {
  const pos = new Float32Array(count * 3);
  const turns = 6;
  const maxRadius = 12;
  for (let i = 0; i < count; i++) {
    const t = Math.random();
    const angle = t * turns * Math.PI * 2;
    const radius = maxRadius * Math.sqrt(t) * (0.5 + Math.random() * 0.5);
    const spread = (1 - t) * 1.5 + 0.1;
    pos[i * 3] = Math.cos(angle) * radius;
    pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
    pos[i * 3 + 2] = Math.sin(angle) * radius;
  }
  return pos;
}

function scatteredPositions(count: number): Float32Array {
  const pos = new Float32Array(count * 3);
  const spread = 18;
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * spread * 2;
    pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
    pos[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.8 - 5;
  }
  return pos;
}

function denserPositions(count: number): Float32Array {
  const pos = new Float32Array(count * 3);
  const spread = 14;
  for (let i = 0; i < count; i++) {
    const cluster = Math.random() < 0.4;
    if (cluster) {
      const cx = (Math.random() - 0.5) * 6;
      const cy = (Math.random() - 0.5) * 4;
      const cz = (Math.random() - 0.5) * 4;
      pos[i * 3] = cx + (Math.random() - 0.5) * 2;
      pos[i * 3 + 1] = cy + (Math.random() - 0.5) * 2;
      pos[i * 3 + 2] = cz + (Math.random() - 0.5) * 2;
    } else {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.7;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6 - 3;
    }
  }
  return pos;
}

interface ParticleSystemProps {
  scrollProgress: number;
}

function ParticleSystem({ scrollProgress }: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const sphere = spherePositions(PARTICLE_COUNT);
    const spiral = spiralPositions(PARTICLE_COUNT);
    const scattered = scatteredPositions(PARTICLE_COUNT);
    const dense = denserPositions(PARTICLE_COUNT);

    // Colors: mostly white/gray with some green accents
    const colorsArr = new Float32Array(PARTICLE_COUNT * 3);
    const sizesArr = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isGreen = Math.random() < 0.08;
      if (isGreen) {
        colorsArr[i * 3] = GREEN.r;
        colorsArr[i * 3 + 1] = GREEN.g;
        colorsArr[i * 3 + 2] = GREEN.b;
        sizesArr[i] = 0.04 + Math.random() * 0.06;
      } else {
        const shade = 0.4 + Math.random() * 0.6;
        colorsArr[i * 3] = shade;
        colorsArr[i * 3 + 1] = shade;
        colorsArr[i * 3 + 2] = shade;
        sizesArr[i] = 0.02 + Math.random() * 0.04;
      }
    }

    return {
      positions: { sphere, spiral, scattered, dense },
      colors: colorsArr,
      sizes: sizesArr,
    };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const initialPos = new Float32Array(PARTICLE_COUNT * 3);
    geo.setAttribute("position", new THREE.BufferAttribute(initialPos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;

    // Map scroll progress (0-1) to shape blending
    // 0.0-0.15: sphere (hero)
    // 0.15-0.35: transition to spiral (roadmap)
    // 0.35-0.55: spiral holds, transition to scattered
    // 0.55-0.75: scattered (chapters)
    // 0.75-1.0: scattered to denser glow (outcome)

    let targetA: Float32Array;
    let targetB: Float32Array;
    let mix: number;

    if (scrollProgress < 0.15) {
      targetA = positions.sphere;
      targetB = positions.sphere;
      mix = 0;
    } else if (scrollProgress < 0.35) {
      const t = (scrollProgress - 0.15) / 0.2;
      targetA = positions.sphere;
      targetB = positions.spiral;
      mix = easeInOutCubic(t);
    } else if (scrollProgress < 0.55) {
      const t = (scrollProgress - 0.35) / 0.2;
      targetA = positions.spiral;
      targetB = positions.scattered;
      mix = easeInOutCubic(t);
    } else if (scrollProgress < 0.75) {
      targetA = positions.scattered;
      targetB = positions.scattered;
      mix = 0;
    } else {
      const t = (scrollProgress - 0.75) / 0.25;
      targetA = positions.scattered;
      targetB = positions.dense;
      mix = easeInOutCubic(Math.min(t, 1));
    }

    // Determine opacity based on scroll progress
    // Brighter in hero and outcome, dimmer during chapters
    let opacity = 1.0;
    if (scrollProgress > 0.05 && scrollProgress < 0.12) {
      opacity = 0.7;
    } else if (scrollProgress >= 0.55 && scrollProgress <= 0.75) {
      opacity = Math.max(0.5, 0.8 - (scrollProgress - 0.55) / 0.2 * 0.3);
    } else if (scrollProgress > 0.85) {
      opacity = 0.8 + (scrollProgress - 0.85) / 0.15 * 0.2;
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;
      posArray[idx] = targetA[idx] + (targetB[idx] - targetA[idx]) * mix;
      posArray[idx + 1] =
        targetA[idx + 1] + (targetB[idx + 1] - targetA[idx + 1]) * mix;
      posArray[idx + 2] =
        targetA[idx + 2] + (targetB[idx + 2] - targetA[idx + 2]) * mix;
    }

    posAttr.needsUpdate = true;

    // Subtle rotation
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      const mat = pointsRef.current.material;
      if (Array.isArray(mat)) {
        mat.forEach((m) => { m.opacity = opacity; });
      } else {
        (mat as THREE.PointsMaterial).opacity = opacity;
      }
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        sizeAttenuation
        transparent
        opacity={1}
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

interface ParticleFieldProps {
  scrollProgress: number;
}

export default function ParticleField({ scrollProgress }: ParticleFieldProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight />
        <ParticleSystem scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
