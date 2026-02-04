"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AutoFloat({
  children,
  className = "",
  x = 10,
  y = 14,
  rotate = 1.5,
  duration = 6,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  x?: number;
  y?: number;
  rotate?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, x, 0, -x, 0],
        y: [0, -y, 0, y, 0],
        rotate: [0, rotate, 0, -rotate, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
