import MotionIn from "./MotionIn";
import FloatingCard from "./FloatingCard";

const steps = [
  { no: "01", title: "Request a quote", desc: "Share pickup, drop, weight & goods type." },
  { no: "02", title: "Pickup & dispatch", desc: "We pickup and dispatch with tracking enabled." },
  { no: "03", title: "In transit updates", desc: "Live status updates and ETA notifications." },
  { no: "04", title: "Delivered safely", desc: "Proof of delivery and support if needed." },
];

export default function Process() {
  return (
    <section id="process" className="py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionIn from="top">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">How it works</h2>
            <p className="mt-3 text-[rgb(var(--muted))]">
              Simple process, fast onboarding — start shipping in minutes.
            </p>
          </div>
        </MotionIn>

        <MotionIn delay={0.08} from="bottom">
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <FloatingCard
                key={s.no}
                className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6"
                intensity={7}
              >
                <p className="text-sm font-bold text-[rgb(var(--muted))]">{s.no}</p>
                <h3 className="mt-2 font-extrabold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">{s.desc}</p>
              </FloatingCard>
            ))}
          </div>
        </MotionIn>
      </div>
    </section>
  );
}
