import MotionIn from "./MotionIn";
import FloatingCard from "./FloatingCard";

const reviews = [
  { name: "Aman, Retail Supplier", text: "Pickup was quick and delivery reached before ETA. Great tracking updates." },
  { name: "Neha, Manufacturer", text: "Reliable partner for B2B shipments. Support is responsive and helpful." },
  { name: "Rohit, Ecommerce Seller", text: "Last-mile delivery improved our customer experience. Smooth process." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionIn from="top">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">Trusted by businesses</h2>
            <p className="mt-3 text-[rgb(var(--muted))]">What clients say after shipping with us.</p>
          </div>
        </MotionIn>

        <MotionIn delay={0.08} from="bottom">
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <FloatingCard
                key={r.name}
                className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6"
                intensity={7}
              >
                <p className="text-sm text-[rgb(var(--muted))]">“{r.text}”</p>
                <p className="mt-4 font-bold">{r.name}</p>
              </FloatingCard>
            ))}
          </div>
        </MotionIn>
      </div>
    </section>
  );
}
