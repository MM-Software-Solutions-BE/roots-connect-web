import { SectionShell } from "@/components/sections/section-shell";

export function HomeSection() {
  return (
    <SectionShell
      id="home"
      containerClassName="py-24 lg:py-32"
      className="border-b border-rc-blue/10"
    >
      <p className="text-rc-brown mb-3 text-sm font-medium uppercase tracking-wide">
        Roots Connect
      </p>
      <h1 className="text-rc-blue mb-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Connecting roots through law
      </h1>
      <p className="text-rc-blue/85 mb-8 max-w-2xl text-lg sm:text-xl">
        Empowering the next generation of legal talent
      </p>
      <p className="text-rc-blue/80 max-w-2xl text-pretty leading-relaxed">
        {/* Copy: todo §2.3 */}
        Introduction text will go here (Belgian network, underrepresented backgrounds,
        bicultural roots, first-generation academic trajectories).
      </p>
    </SectionShell>
  );
}
