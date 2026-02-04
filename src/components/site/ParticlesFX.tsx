"use client";

import { motion } from "framer-motion";

// fixed positions so there is no hydration mismatch
const DOTS = [
  { left: "8%", top: "18%", size: 6, dur: 14, delay: 0.2 },
  { left: "18%", top: "62%", size: 5, dur: 16, delay: 0.8 },
  { left: "28%", top: "35%", size: 4, dur: 12, delay: 0.4 },
  { left: "42%", top: "14%", size: 5, dur: 18, delay: 1.2 },
  { left: "55%", top: "52%", size: 6, dur: 20, delay: 0.1 },
  { left: "64%", top: "22%", size: 4, dur: 15, delay: 0.6 },
  { left: "74%", top: "70%", size: 5, dur: 19, delay: 1.0 },
  { left: "86%", top: "30%", size: 6, dur: 17, delay: 0.3 },
  { left: "92%", top: "62%", size: 4, dur: 13, delay: 0.9 },
];

export default function ParticlesFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {DOTS.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: "rgb(var(--brand))",
            opacity: 0.12,
            filter: "blur(0.2px)",
          }}
          animate={{
            y: [0, -22, 0, 18, 0],
            opacity: [0.08, 0.16, 0.10, 0.15, 0.12],
          }}
          transition={{
            duration: d.dur,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
