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
      <p className="text-rc-blue/85 mb-10 max-w-3xl text-pretty leading-relaxed">
        {/* todo §4.1 */}Bridge intro.
      </p>
      <ul className="text-rc-blue/85 space-y-6">
        <li>
          <span className="text-rc-blue font-semibold">Pillar 1 — Impactful events</span>
          <p className="mt-1">{/* todo §4.2 */}</p>
        </li>
        <li>
          <span className="text-rc-blue font-semibold">Pillar 2 — Dialogue with the sector</span>
          <p className="mt-1">{/* todo §4.3 */}</p>
        </li>
        <li>
          <span className="text-rc-blue font-semibold">Pillar 3 — Sustainable partnerships</span>
          <p className="mt-1">{/* todo §4.4 */}</p>
        </li>
      </ul>
    </SectionShell>
  );
}
