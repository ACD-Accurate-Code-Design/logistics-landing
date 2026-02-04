import MotionIn from "./MotionIn";
import FloatingCard from "./FloatingCard";
import Counter from "./Counter";

export default function Coverage() {
  return (
    <section id="coverage" className="py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionIn from="bottom">
          <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 sm:p-8 md:p-10 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center overflow-hidden relative">
            <div className="absolute -bottom-36 -left-36 h-80 w-80 rounded-full blur-3xl opacity-20 bg-[rgb(var(--brand))]" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold">Fleet & Coverage</h2>
              <p className="mt-3 text-[rgb(var(--muted))]">
                Strong partner network, multiple routes, and reliable delivery operations.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
                  <p className="text-xl font-extrabold"><Counter to={120} suffix="+" /></p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--muted))]">Fleet partners</p>
                </div>
                <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
                  <p className="text-xl font-extrabold"><Counter to={15} suffix="+" /></p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--muted))]">Warehouses</p>
                </div>
                <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
                  <p className="text-xl font-extrabold"><Counter to={28} suffix="+" /></p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--muted))]">Major cities</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
                {["Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chandigarh", "Ahmedabad"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-1 text-xs sm:text-sm text-[rgb(var(--muted))]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <MotionIn from="right" delay={0.12}>
              <FloatingCard
                className="relative rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-5 sm:p-6 overflow-hidden"
                intensity={7}
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold">Live Coverage Map</p>
                  <span className="text-xs text-[rgb(var(--muted))]">Demo UI</span>
                </div>

                <div className="mt-4 relative h-[280px] sm:h-[320px] rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgb(var(--brand) / 0.25) 0%, transparent 45%), radial-gradient(circle at 70% 60%, rgb(var(--brand) / 0.18) 0%, transparent 50%)",
                    }}
                  />

                  <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M10 20 C 25 10, 35 35, 50 25 S 75 35, 90 25" fill="none" stroke="rgb(var(--brand))" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M15 75 C 35 55, 55 85, 75 65 S 85 55, 95 50" fill="none" stroke="rgb(var(--brand))" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>

                  {[
                    { left: "22%", top: "28%" },
                    { left: "52%", top: "34%" },
                    { left: "70%", top: "62%" },
                    { left: "35%", top: "75%" },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="absolute h-3 w-3 rounded-full bg-[rgb(var(--brand))] shadow"
                      style={{ left: p.left, top: p.top }}
                    />
                  ))}

                  <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
                    <div className="flex flex-wrap items-center justify-between">
                      <p className="text-sm font-semibold">Shipments in transit</p>
                      <p className="text-sm text-[rgb(var(--muted))]">
                        <Counter to={38} /> active
                      </p>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-[rgb(var(--border))] overflow-hidden">
                      <div className="h-full w-[68%] bg-[rgb(var(--brand))]" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <Mini label="Avg. ETA accuracy" value="High" />
                  <Mini label="Proof of delivery" value="Available" />
                </div>
              </FloatingCard>
            </MotionIn>
          </div>
        </MotionIn>
      </div>
    </section>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-4">
      <p className="text-xs text-[rgb(var(--muted))]">{label}</p>
      <p className="font-semibold mt-1">{value}</p>
    </div>
  );
}
