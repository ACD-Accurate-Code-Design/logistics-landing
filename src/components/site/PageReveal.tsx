"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageReveal({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // animate on first load of the session only
    const key = "logistics_reveal_done";
    const done = sessionStorage.getItem(key);
    if (done) {
      setReady(true);
      return;
    }
    sessionStorage.setItem(key, "1");
    const t = setTimeout(() => setReady(true), 40);
    return () => clearTimeout(t);
  }, []);

  if (!ready) {
    // quick "film black" flash (very short)
    return <div className="min-h-screen bg-[rgb(var(--bg))]" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
