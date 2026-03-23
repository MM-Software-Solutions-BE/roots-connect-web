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
      <ul className="mt-10 grid grid-cols-2 gap-6 sm:gap-6 lg:grid-cols-3 items-stretch">
        {PARTNERS.map((p) => (
          <li key={p.id} className="flex">
            {p.id === "join" ? (
              <a
                href="#contact"
                className="border-rc-blue/15 bg-white/50 rc-card-hover flex min-h-full flex-1 flex-col rounded-xl border p-4 shadow-sm sm:p-5"
              >
                <div className="flex min-h-[100px] flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-rc-blue/30 bg-rc-blue/5 py-8 text-center sm:min-h-[120px]">
                  <p className="text-rc-beige text-sm font-medium sm:text-base">
                    {t("partners.placeholder.title")}
                  </p>
                  <p className="text-rc-beige/70 mt-2 text-xs sm:text-sm">
                    {t("partners.placeholder.desc")}
                  </p>
                </div>
                <span className="text-rc-beige mt-4 inline-block text-center text-sm font-medium underline">
                  {t("about.cta")}
                </span>
              </a>
            ) : (
              <article className="border-rc-blue/15 bg-white/50 flex min-h-full flex-1 flex-col rounded-xl border p-4 shadow-sm sm:p-5">
                <div className="relative mb-3 flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg bg-white sm:mb-4">
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
                <h3 className="text-rc-beige text-sm font-semibold sm:text-base">{p.name}</h3>
                {(raw(`partner.${p.id}.tagline`) ?? p.tagline) ? (
                  <p className="text-rc-beige/60 mt-1 text-xs font-medium uppercase tracking-wide">
                    {raw(`partner.${p.id}.tagline`) ?? p.tagline}
                  </p>
                ) : null}
                {(raw(`partner.${p.id}.description`) ?? p.description) ? (
                  <p className="text-rc-beige/80 mt-3 flex-1 text-xs leading-relaxed sm:text-sm">
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
            )}
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
