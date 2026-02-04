import MotionIn from "./MotionIn";
import FloatingCard from "./FloatingCard";

export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionIn from="bottom">
          <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 sm:p-8 md:p-10 grid lg:grid-cols-2 gap-8 lg:gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Get a quote</h2>
              <p className="mt-3 text-[rgb(var(--muted))]">
                Share shipment details and we’ll respond quickly.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <Info label="Phone" value="+91 98XXXXXX10" />
                <Info label="Email" value="hello@logiswift.in" />
                <Info label="Hours" value="Mon–Sat • 9am–7pm" />
                <Info label="Coverage" value="Pan-India" />
              </div>
            </div>

            <MotionIn from="right" delay={0.12}>
              <FloatingCard className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-6" intensity={6}>
                <form className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" placeholder="Your name" />
                    <Field label="Phone" placeholder="10-digit number" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="From City" placeholder="Pickup city" />
                    <Field label="To City" placeholder="Drop city" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Goods Type" placeholder="e.g. Electronics / FMCG" />
                    <Field label="Approx Weight" placeholder="e.g. 200 kg" />
                  </div>

                  <button
                    type="button"
                    className="mt-2 w-full rounded-2xl py-3 font-semibold text-black bg-[rgb(var(--brand))] hover:opacity-90"
                  >
                    Submit Request
                  </button>

                  <p className="text-xs text-[rgb(var(--muted))]">
                    We’ll contact you within 30–60 minutes during working hours.
                  </p>
                </form>
              </FloatingCard>
            </MotionIn>
          </div>
        </MotionIn>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
      <p className="text-xs text-[rgb(var(--muted))]">{label}</p>
      <p className="font-semibold mt-1 text-sm sm:text-base">{value}</p>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="text-sm">
      <span className="font-semibold">{label}</span>
      <input
        className="mt-2 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3 outline-none"
        placeholder={placeholder}
      />
    </label>
  );
}
