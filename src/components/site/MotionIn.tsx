"use client";

import { motion } from "framer-motion";
import React from "react";

export default function MotionIn({
  children,
  delay = 0,
  from = "bottom",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right" | "top";
}) {
  const offset = 18;
  const initial =
    from === "bottom"
      ? { opacity: 0, y: offset }
      : from === "top"
      ? { opacity: 0, y: -offset }
      : from === "left"
      ? { opacity: 0, x: -offset }
      : { opacity: 0, x: offset };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
