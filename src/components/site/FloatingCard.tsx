"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

export default function FloatingCard({
  children,
  className = "",
  intensity = 10, // tilt amount
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);

  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });
  const stx = useSpring(tx, { stiffness: 160, damping: 18 });
  const sty = useSpring(ty, { stiffness: 160, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1

    // tilt
    ry.set((px - 0.5) * intensity);
    rx.set(-(py - 0.5) * intensity);

    // subtle translate
    tx.set((px - 0.5) * 10);
    ty.set((py - 0.5) * 10);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
    tx.set(0);
    ty.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: srx,
        rotateY: sry,
        x: stx,
        y: sty,
        transformStyle: "preserve-3d",
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
