"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function FloatingCard({
  children,
  className = "",
  intensity = 10,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable tilt on touch devices (prevents layout jitter / misalignment)
    const mq = window.matchMedia("(pointer: coarse)");
    const apply = () => setEnabled(!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);

  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });
  const stx = useSpring(tx, { stiffness: 160, damping: 18 });
  const sty = useSpring(ty, { stiffness: 160, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1

    const tilt = intensity;
    const move = 6; // keep small so it never breaks grid alignment

    ry.set((px - 0.5) * tilt);
    rx.set(-(py - 0.5) * tilt);

    tx.set((px - 0.5) * move);
    ty.set((py - 0.5) * move);
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
        rotateX: enabled ? srx : 0,
        rotateY: enabled ? sry : 0,
        x: enabled ? stx : 0,
        y: enabled ? sty : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`w-full min-w-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}
