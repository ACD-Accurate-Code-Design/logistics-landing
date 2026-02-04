"use client";

import { animate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  to,
  suffix = "",
  duration = 1.1,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 110, damping: 20 });
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          mv.set(0);
          const controls = animate(mv, to, { duration, ease: "easeOut" });
          io.disconnect();
          return () => controls.stop();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [mv, to, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
