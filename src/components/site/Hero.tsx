import MotionIn from "./MotionIn";
import FloatingCard from "./FloatingCard";
import Counter from "./Counter";

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-4">
      <p className="text-xl font-extrabold">{value}</p>
      <p className="text-sm text-[rgb(var(--muted))]">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <MotionIn from="left">
            <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm border-[rgb(var(--border))] bg-[rgb(var(--card))]">
              <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand))]" />
              On-time delivery • Real-time tracking
            </p>
          </MotionIn>

          <MotionIn delay={0.06} from="left">
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Fast & Reliable Logistics for Your Business
            </h1>
          </MotionIn>

          <MotionIn delay={0.12} from="left">
            <p className="mt-4 text-base sm:text-lg text-[rgb(var(--muted))]">
              Road freight, warehousing, and last-mile delivery — built for speed, safety, and visibility.
            </p>
          </MotionIn>

          <MotionIn delay={0.18} from="left">
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="rounded-2xl px-6 py-3 font-semibold text-black bg-[rgb(var(--brand))] hover:opacity-90 text-center"
              >
                Get Instant Quote
              </a>
              <a
                href="#services"
                className="rounded-2xl px-6 py-3 font-semibold border border-[rgb(var(--border))] bg-[rgb(var(--card))] hover:opacity-90 text-center"
              >
                View Services
              </a>
            </div>
          </MotionIn>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            <MotionIn delay={0.22} from="bottom">
              <Stat value={<><Counter to={10} suffix="k+" /></>} label="Deliveries" />
            </MotionIn>
            <MotionIn delay={0.28} from="bottom">
              <Stat value="Pan-India" label="Coverage" />
            </MotionIn>
            <MotionIn delay={0.34} from="bottom">
              <Stat value={<><Counter to={24} suffix="/7" /></>} label="Support" />
            </MotionIn>
          </div>
        </div>

        {/* right cinematic card */}
        <MotionIn from="right" delay={0.12}>
          <FloatingCard className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 sm:p-6 relative overflow-hidden">
            {/* glow */}
            <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[rgb(var(--brand))]" />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full blur-3xl opacity-15 bg-[rgb(var(--brand))]" />

            <div className="relative rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-5">
              <p className="font-bold">Track Shipment</p>
              <p className="text-sm text-[rgb(var(--muted))] mt-1">
                Enter your tracking ID to check live status.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <input
                  className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3 outline-none"
                  placeholder="e.g. LS-92818"
                />
                <button
                  className="rounded-xl px-5 py-3 sm:py-0 font-semibold text-black bg-[rgb(var(--brand))] hover:opacity-90"
                  type="button"
                >
                  Track
                </button>
              </div>
            </div>

            <div className="relative mt-5 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                ["Same-day dispatch", "For urgent shipments"],
                ["Secure handling", "Insured cargo support"],
                ["Warehousing", "Short & long term"],
                ["Last-mile", "Fast local delivery"],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4"
                >
                  <p className="font-semibold text-sm sm:text-base">{t}</p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--muted))] mt-1">{d}</p>
                </div>
              ))}
            </div>
          </FloatingCard>
        </MotionIn>
      </div>
    </section>
  );
}
