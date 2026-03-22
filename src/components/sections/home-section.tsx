import { SectionShell } from "@/components/sections/section-shell";
import { cn } from "@/lib/utils";

const INTRO_COPY =
  "Roots Connect is the first Belgian network of lawyers and (young) legal professionals committed to empowering students and young professionals from underrepresented backgrounds, in particular those with bicultural roots and first-generation academic trajectories.";

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
      <p className="text-rc-blue/80 mb-10 max-w-2xl text-pretty leading-relaxed">
        {INTRO_COPY}
      </p>
      <a
        href="#contact"
        className={cn(
          "bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 w-full min-w-0 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent px-4 text-sm font-medium transition-colors outline-none select-none focus-visible:ring-3 min-[480px]:w-auto",
        )}
      >
        Stay informed about our upcoming events
      </a>
    </SectionShell>
  );
}
