"use client";

import Image from "next/image";
import { ExternalLink, LinkedinIcon } from "lucide-react";

import { PARTNERS } from "@/data/partners";
import { SectionShell } from "@/components/sections/section-shell";
import type { Messages } from "@/messages/en";
import { useLocaleContext } from "@/providers/locale-provider";

function partnerCopy(
  m: Messages,
  id: string
): { tagline?: string; description?: string } | undefined {
  const block = m.partner[id as keyof typeof m.partner];
  return block && typeof block === "object"
    ? (block as { tagline?: string; description?: string })
    : undefined;
}

export function PartnersSection() {
  const { messages: m } = useLocaleContext();
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
        {m.partners.title}
      </h2>
      <p className="text-rc-blue/85 mb-8 max-w-2xl text-sm leading-relaxed">
        {m.partners.intro}
      </p>
      <ul className="mt-10 grid grid-cols-2 items-stretch gap-6 sm:gap-6 lg:grid-cols-3">
        {PARTNERS.map((p) => {
          const copy = partnerCopy(m, p.id);
          const tagline = copy?.tagline ?? p.tagline;
          const description = copy?.description ?? p.description;
          return (
          <li key={p.id} className="flex">
            <article className="border-rc-blue/15 bg-white/50 flex min-h-full flex-1 flex-col rounded-xl border p-4 shadow-sm sm:p-5">
              <div className="relative mb-3 flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg bg-white sm:mb-4">
                {p.logoSrc ? (
                  <Image
                    src={p.logoSrc}
                    alt={`${p.name} logo`}
                    width={200}
                    height={120}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    quality={85}
                    className="object-contain px-4"
                  />
                ) : null}
              </div>
              <h3 className="text-rc-beige text-sm font-semibold sm:text-base">{p.name}</h3>
              {tagline ? (
                <p className="text-rc-beige/60 mt-1 text-xs font-medium uppercase tracking-wide">
                  {tagline}
                </p>
              ) : null}
              {description ? (
                <p className="text-rc-beige/80 mt-3 flex-1 text-xs leading-relaxed sm:text-sm">
                  {description}
                </p>
              ) : null}
              {(p.websiteUrl || p.linkedInUrl) && (
                <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {p.websiteUrl && (
                    <a
                      href={p.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rc-beige/80 hover:text-rc-beige inline-flex items-center gap-2 underline underline-offset-4 decoration-rc-brown/40 hover:decoration-rc-beige/60 transition-colors"
                    >
                      <ExternalLink className="size-4" aria-hidden />
                      <span>{m.partners.website}</span>
                    </a>
                  )}
                  {p.linkedInUrl && (
                    <a
                      href={p.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rc-beige/80 hover:text-rc-beige inline-flex items-center gap-2 underline underline-offset-4 decoration-rc-brown/40 hover:decoration-rc-beige/60 transition-colors"
                    >
                      <LinkedinIcon className="size-4" aria-hidden />
                      <span>{m.partners.linkedIn}</span>
                    </a>
                  )}
                </p>
              )}
            </article>
          </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
