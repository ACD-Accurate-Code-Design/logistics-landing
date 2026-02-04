import MotionIn from "./MotionIn";
import FloatingCard from "./FloatingCard";
import Counter from "./Counter";

const points = [
  { title: "Real-time Tracking", desc: "Know where your shipment is at every step." },
  { title: "On-time Delivery", desc: "Committed ETAs with reliable operations." },
  { title: "Secure Handling", desc: "Safety checks, insurance support, and SOPs." },
  { title: "Dedicated Support", desc: "Quick responses on WhatsApp/call/email." },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <MotionIn from="left">
            <h2 className="text-3xl md:text-4xl font-extrabold">Why choose us</h2>
            <p className="mt-3 text-[rgb(var(--muted))]">
              We focus on speed, visibility, and safe delivery — so you can focus on business.
            </p>
          </MotionIn>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <MotionIn delay={0.08} from="bottom">
              <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
                <p className="text-2xl font-extrabold"><Counter to={98} suffix="%" /></p>
                <p className="text-sm text-[rgb(var(--muted))] mt-1">On-time rate</p>
              </div>
            </MotionIn>
            <MotionIn delay={0.14} from="bottom">
              <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
                <p className="text-2xl font-extrabold"><Counter to={120} suffix="+" /></p>
                <p className="text-sm text-[rgb(var(--muted))] mt-1">Fleet partners</p>
              </div>
            </MotionIn>
          </div>
        </div>

        <MotionIn from="right" delay={0.08}>
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((p) => (
              <FloatingCard
                key={p.title}
                className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6"
                intensity={8}
              >
                <div className="h-10 w-10 rounded-2xl bg-[rgb(var(--brand))]" />
                <h3 className="mt-4 font-bold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">{p.desc}</p>
              </FloatingCard>
            ))}
          </div>
        </MotionIn>
      </div>
    </section>
  );
}
