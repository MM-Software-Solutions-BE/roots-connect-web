import { SectionShell } from "@/components/sections/section-shell";

const tiles = [
  {
    stat: "Multiple",
    label: "collaborations with student associations",
  },
  {
    stat: "10,000+",
    label: "monthly views on our social media",
  },
  {
    stat: "170+",
    label:
      "members (young professionals active in the legal sector) in our Roots Connect community",
  },
  {
    stat: "Support",
    label:
      "Ad hoc — we are regularly contacted by law students with practical questions about the legal profession.",
  },
] as const;

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
        {tiles.map((tile) => (
          <article
            key={tile.label}
            className="border-rc-blue/15 bg-white/50 rounded-xl border p-6 shadow-sm"
          >
            <p className="text-rc-brown mb-2 text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl">
              {tile.stat}
            </p>
            <p className="text-rc-blue/85 text-pretty leading-relaxed">{tile.label}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
