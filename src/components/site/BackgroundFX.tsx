import AutoFloat from "./AutoFloat";
import ParticlesFX from "./ParticlesFX";

export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft blobs */}
      <div className="absolute -top-56 -left-56 h-[700px] w-[700px] rounded-full blur-3xl opacity-25 bg-[rgb(var(--brand))]" />
      <div className="absolute top-1/3 -right-56 h-[720px] w-[720px] rounded-full blur-3xl opacity-20 bg-[rgb(var(--brand))]" />

      {/* subtle wash */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at top, rgb(255 255 255 / 0.35) 0%, transparent 55%), radial-gradient(ellipse at bottom, rgb(0 0 0 / 0.25) 0%, transparent 60%)",
        }}
      />

      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 0.65) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.65) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* animated particles */}
      <ParticlesFX />

      {/* drifting “icon” shapes */}
      <AutoFloat className="absolute left-[8%] top-[18%]" duration={8} x={12} y={16} rotate={2}>
        <div className="h-10 w-10 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] opacity-70" />
      </AutoFloat>

      <AutoFloat className="absolute right-[10%] top-[22%]" duration={10} x={14} y={18} rotate={2}>
        <div className="h-12 w-12 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card))] opacity-60" />
      </AutoFloat>

      <AutoFloat className="absolute right-[14%] bottom-[18%]" duration={9} x={10} y={14} rotate={1.8} delay={0.4}>
        <div className="h-11 w-11 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] opacity-60" />
      </AutoFloat>

      <AutoFloat className="absolute left-[12%] bottom-[12%]" duration={11} x={16} y={12} rotate={2.2} delay={0.7}>
        <div className="h-9 w-9 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card))] opacity-55" />
      </AutoFloat>
    </div>
  );
}
