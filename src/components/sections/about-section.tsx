import { SectionShell } from "@/components/sections/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about-us"
      aria-labelledby="about-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="about-heading"
        className="text-rc-blue mb-8 text-3xl font-semibold tracking-tight"
      >
        About us
      </h2>
      <div className="text-rc-blue/85 space-y-6 text-pretty leading-relaxed">
        <p>{/* todo §3.1–3.2 */}Founding story and analysis paragraphs.</p>
        <div>
          <h3 className="text-rc-blue mb-3 text-xl font-semibold">Our mission</h3>
          <p>{/* todo §3.3–3.4 */}Mission copy.</p>
        </div>
      </div>
    </SectionShell>
  );
}
