"use client";

import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#coverage", label: "Coverage" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          {/* overlay */}
          <motion.button
            aria-label="Close menu"
            onClick={onClose}
            className="fixed inset-0 z-[140] bg-black/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* drawer */}
          <motion.aside
            className="fixed right-0 top-0 bottom-0 z-[150] w-[86vw] max-w-[360px]
                       border-l border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-5"
            initial={{ x: 360, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 360, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex items-center justify-between">
              <p className="font-bold text-lg">Menu</p>
              <button
                onClick={onClose}
                className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 py-2 text-sm"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-2">
              {LINKS.map((l, idx) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                             px-4 py-3 font-semibold"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.04, duration: 0.35 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl
                         bg-[rgb(var(--brand))] px-5 py-3 font-semibold text-black"
            >
              Get Quote
            </a>

            <p className="mt-5 text-xs text-[rgb(var(--muted))]">
              Tip: tap any section to jump smoothly.
            </p>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
