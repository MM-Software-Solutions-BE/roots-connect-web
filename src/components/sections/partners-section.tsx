import Image from "next/image";

import { PARTNERS } from "@/data/partners";
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
        className="text-rc-blue mb-3 text-3xl font-semibold tracking-tight"
      >
        Our partners
      </h2>
      <p className="text-rc-blue/75 mb-2 max-w-2xl text-sm leading-relaxed">
        We work with long-term partners and sponsors who share our mission and help us create
        meaningful opportunities for students and young professionals.
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PARTNERS.map((p) => (
          <li key={p.id}>
            <article className="border-rc-blue/15 bg-white/50 flex h-full flex-col rounded-xl border p-5 shadow-sm">
              <div className="relative mb-4 flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg bg-white">
                {p.logoSrc ? (
                  <Image
                    src={p.logoSrc}
                    alt={`${p.name} logo`}
                    width={200}
                    height={120}
                    className="object-contain px-4"
                  />
                ) : null}
              </div>
              <h3 className="text-rc-beige text-base font-semibold">{p.name}</h3>
              {p.tagline ? (
                <p className="text-rc-beige/60 mt-1 text-xs font-medium uppercase tracking-wide">
                  {p.tagline}
                </p>
              ) : null}
              {p.description ? (
                <p className="text-rc-beige/80 mt-3 text-sm leading-relaxed">
                  {p.description}
                </p>
              ) : null}
              {(p.websiteUrl || p.linkedInUrl) && (
                <p className="text-rc-beige/60 mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                  {p.websiteUrl && (
                    <a
                      href={p.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-rc-beige"
                    >
                      Website
                    </a>
                  )}
                  {p.linkedInUrl && (
                    <a
                      href={p.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-rc-beige"
                    >
                      LinkedIn
                    </a>
                  )}
                </p>
              )}
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
