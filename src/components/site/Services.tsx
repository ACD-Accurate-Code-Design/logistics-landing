import MotionIn from "./MotionIn";
import FloatingCard from "./FloatingCard";

const services = [
  { title: "Road Freight", desc: "FTL/LTL transport with tracking and proof of delivery." },
  { title: "Warehousing", desc: "Storage, inventory handling, packing and dispatch." },
  { title: "Express Delivery", desc: "Fast city-to-city and last-mile delivery." },
  { title: "B2B Shipping", desc: "Bulk shipments for manufacturers & wholesalers." },
];

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionIn from="top">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">Services</h2>
            <p className="mt-3 text-[rgb(var(--muted))]">
              Everything you need for smooth shipping and supply chain.
            </p>
          </div>
        </MotionIn>

        <MotionIn delay={0.08} from="bottom">
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <FloatingCard
                key={s.title}
                className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6"
                intensity={8}
              >
                <div className="h-10 w-10 rounded-2xl bg-[rgb(var(--brand))]" />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">{s.desc}</p>
              </FloatingCard>
            ))}
          </div>
        </MotionIn>
      </div>
    </section>
  );
}
