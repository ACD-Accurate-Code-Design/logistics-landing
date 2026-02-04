"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock scroll when drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 min-w-0">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl bg-[rgb(var(--brand))] shrink-0" />
              <div className="leading-tight min-w-0">
                <p className="font-bold text-base sm:text-lg truncate">LogiSwift</p>
                <p className="text-[11px] sm:text-xs text-[rgb(var(--muted))] truncate">
                  Freight • Delivery • Warehousing
                </p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-[rgb(var(--muted))]">
              <a className="hover:text-[rgb(var(--text))]" href="#services">Services</a>
              <a className="hover:text-[rgb(var(--text))]" href="#why">Why Us</a>
              <a className="hover:text-[rgb(var(--text))]" href="#process">Process</a>
              <a className="hover:text-[rgb(var(--text))]" href="#coverage">Coverage</a>
              <a className="hover:text-[rgb(var(--text))]" href="#testimonials">Reviews</a>
              <a className="hover:text-[rgb(var(--text))]" href="#contact">Contact</a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex px-4 py-2 rounded-xl font-semibold text-black bg-[rgb(var(--brand))] hover:opacity-90"
              >
                Get Quote
              </a>

              <ThemeToggle />

              {/* hamburger for mobile */}
              <button
                onClick={() => setOpen(true)}
                className="md:hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 py-2 text-sm"
                aria-label="Open menu"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
