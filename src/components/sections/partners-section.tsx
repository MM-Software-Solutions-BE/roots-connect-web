"use client";

import Image from "next/image";

import { PARTNERS } from "@/data/partners";
import { SectionShell } from "@/components/sections/section-shell";
import { useTranslations } from "@/lib/translations";

export function PartnersSection() {
  const { t, raw } = useTranslations();
  return (
    <SectionShell
      id="our-partners"
      aria-labelledby="partners-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="partners-heading"
        className="text-rc-blue mb-8 text-3xl font-semibold tracking-tight"
      >
        {t("partners.title")}
      </h2>
      <p className="text-rc-blue/85 mb-8 max-w-2xl text-sm leading-relaxed">
        {t("partners.intro")}
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
              {(raw(`partner.${p.id}.tagline`) ?? p.tagline) ? (
                <p className="text-rc-beige/60 mt-1 text-xs font-medium uppercase tracking-wide">
                  {raw(`partner.${p.id}.tagline`) ?? p.tagline}
                </p>
              ) : null}
              {(raw(`partner.${p.id}.description`) ?? p.description) ? (
                <p className="text-rc-beige/80 mt-3 text-sm leading-relaxed">
                  {raw(`partner.${p.id}.description`) ?? p.description}
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
                      {t("partners.website")}
                    </a>
                  )}
                  {p.linkedInUrl && (
                    <a
                      href={p.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-rc-beige"
                    >
                      {t("partners.linkedIn")}
                    </a>
                  )}
                </p>
              )}
            </article>
          </li>
        ))}
      </ul>

      <div className="border-rc-blue/15 mt-12 flex flex-col items-start gap-4 rounded-xl border bg-white/50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-rc-beige font-medium">
          {t("partners.interested")}
        </p>
        <a
          href="#contact"
          className="bg-rc-blue text-rc-beige hover:bg-rc-blue/90 inline-flex h-10 shrink-0 items-center justify-center rounded-lg border border-transparent px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-rc-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none"
        >
          {t("about.cta")}
        </a>
      </div>
    </SectionShell>
  );
}
