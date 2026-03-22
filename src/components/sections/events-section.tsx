import { SectionShell } from "@/components/sections/section-shell";

export function EventsSection() {
  return (
    <SectionShell
      id="events"
      aria-labelledby="events-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="events-heading"
        className="text-rc-blue mb-6 text-3xl font-semibold tracking-tight"
      >
        Events
      </h2>
      <p className="text-rc-blue/80 max-w-2xl text-pretty leading-relaxed">
        {/* todo §8.3 */}Events content or link to stay informed — to be defined.
      </p>
    </SectionShell>
  );
}
