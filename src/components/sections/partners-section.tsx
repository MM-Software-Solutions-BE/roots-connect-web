import { SectionShell } from "@/components/sections/section-shell";

export function PartnersSection() {
  return (
    <SectionShell
      id="our-partners"
      aria-labelledby="partners-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="partners-heading"
        className="text-rc-blue mb-6 text-3xl font-semibold tracking-tight"
      >
        Our partners
      </h2>
      <p className="text-rc-blue/70 text-sm">
        {/* todo §7 */}Partner logos and names — content to be added later.
      </p>
    </SectionShell>
  );
}
