import { SectionShell } from "@/components/sections/section-shell";

export function TeamSection() {
  return (
    <SectionShell
      id="our-team"
      aria-labelledby="team-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="team-heading"
        className="text-rc-blue mb-10 text-3xl font-semibold tracking-tight"
      >
        Our team
      </h2>
      <ul className="text-rc-blue/80 grid gap-8 sm:grid-cols-2">
        <li>{/* todo §6 — photo, name, role, practice */}Team member</li>
        <li>Team member</li>
        <li>Team member</li>
        <li>Team member</li>
        <li>Team member</li>
        <li>Team member</li>
      </ul>
    </SectionShell>
  );
}
