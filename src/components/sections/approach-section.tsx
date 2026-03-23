import { SectionShell } from "@/components/sections/section-shell";

export function ApproachSection() {
  return (
    <SectionShell
      id="our-approach"
      aria-labelledby="approach-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="approach-heading"
        className="text-rc-blue mb-8 text-3xl font-semibold tracking-tight"
      >
        Our approach
      </h2>
      <p className="text-rc-blue/85 mb-10 max-w-3xl text-left leading-relaxed">
        Roots Connect acts as a bridge between students and the legal profession. We focus on
        being the point of contact for law students who have questions about legal careers.
      </p>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <li className="border-rc-blue/15 bg-white/40 rc-card-hover rounded-xl border p-5">
          <h3 className="text-rc-blue mb-2 text-lg font-semibold">
            Pillar 1 — Impactful events
          </h3>
          <p className="text-rc-blue/85 text-left leading-relaxed">
            Interactive events for students featuring (bi-cultural) lawyers and legal
            professionals who share their personal experiences and engage in open and honest
            conversations about careers, diversity and inclusion.
          </p>
        </li>
        <li className="border-rc-blue/15 bg-white/40 rc-card-hover rounded-xl border p-5">
          <h3 className="text-rc-blue mb-2 text-lg font-semibold">
            Pillar 2 — Dialogue with the sector
          </h3>
          <p className="text-rc-blue/85 text-left leading-relaxed">
            Dialogue with law firms, the legal sector more broadly, the judiciary, companies,
            universities and student associations to share knowledge and experiences.
          </p>
        </li>
        <li className="border-rc-blue/15 bg-white/40 rc-card-hover rounded-xl border p-5">
          <h3 className="text-rc-blue mb-2 text-lg font-semibold">
            Pillar 3 — Sustainable partnerships
          </h3>
          <p className="text-rc-blue/85 text-left leading-relaxed">
            We seek long-term partners who share our mission. With their support, we can organise
            events, remunerate speakers and further strengthen our network.
          </p>
        </li>
      </ul>
    </SectionShell>
  );
}
