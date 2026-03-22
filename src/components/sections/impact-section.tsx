import { SectionShell } from "@/components/sections/section-shell";

export function ImpactSection() {
  return (
    <SectionShell
      id="our-impact"
      aria-labelledby="impact-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="impact-heading"
        className="text-rc-blue mb-10 text-3xl font-semibold tracking-tight"
      >
        Our impact
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {/* todo §5 — replace with stat tiles */}
        <div className="rounded-lg border border-rc-blue/15 bg-white/40 p-6 shadow-sm">
          <p className="text-rc-blue/80 text-sm">Placeholder tile 1</p>
        </div>
        <div className="rounded-lg border border-rc-blue/15 bg-white/40 p-6 shadow-sm">
          <p className="text-rc-blue/80 text-sm">Placeholder tile 2</p>
        </div>
        <div className="rounded-lg border border-rc-blue/15 bg-white/40 p-6 shadow-sm">
          <p className="text-rc-blue/80 text-sm">Placeholder tile 3</p>
        </div>
        <div className="rounded-lg border border-rc-blue/15 bg-white/40 p-6 shadow-sm">
          <p className="text-rc-blue/80 text-sm">Placeholder tile 4</p>
        </div>
      </div>
    </SectionShell>
  );
}
