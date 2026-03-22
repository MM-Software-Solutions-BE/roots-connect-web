import Image from "next/image";

import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { SectionShell } from "@/components/sections/section-shell";
import { HOME_HERO_IMAGE } from "@/data/home-media";

const INTRO_COPY =
  "Roots Connect is the first Belgian network of lawyers and (young) legal professionals committed to empowering students and young professionals from underrepresented backgrounds, in particular those with bicultural roots and first-generation academic trajectories.";

export function HomeSection() {
  return (
    <SectionShell
      id="home"
      containerClassName="max-w-5xl py-20 lg:py-28"
      className="border-b border-rc-blue/10"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="min-w-0">
          <p className="text-rc-brown mb-3 text-sm font-medium uppercase tracking-wide">
            Roots Connect
          </p>
          <h1 className="text-rc-blue mb-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
            Connecting roots through law
          </h1>
          <p className="text-rc-blue/85 mb-6 max-w-xl text-lg sm:text-xl">
            Empowering the next generation of legal talent
          </p>
          <p className="text-rc-blue/80 mb-10 max-w-xl text-pretty leading-relaxed">
            {INTRO_COPY}
          </p>
          <PrimaryCtaLink href="#contact">Stay informed about our upcoming events</PrimaryCtaLink>
        </div>

        <div className="relative flex w-full justify-center lg:justify-end">
          {/*
            max-w-sm: square stays compact so the hero doesn’t read wider than other sections.
            Same max-w-5xl shell as the rest of the site (was max-w-6xl before).
          */}
          <div className="border-rc-blue/15 relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(14,41,62,0.25)] ring-1 ring-rc-blue/10">
            {/* Crop: object-[x%] lager = meer linkerkant zichtbaar (Redouan links) */}
            <Image
              src={HOME_HERO_IMAGE.src}
              alt={HOME_HERO_IMAGE.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 384px"
              className="origin-center object-cover object-[20%_center] [transform:scale(1.1)]"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
