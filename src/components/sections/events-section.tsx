"use client";

import Image from "next/image";

import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSectionHref } from "@/config/navigation";
import { SITE } from "@/config/site";
import { EVENT_HIGHLIGHTS } from "@/data/events";
import { useTranslations } from "@/lib/translations";

export function EventsSection() {
  const { t } = useTranslations();
  return (
    <SectionShell
      id="events"
      aria-labelledby="events-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="events-heading"
        className="text-rc-blue mb-8 text-3xl font-semibold tracking-tight"
      >
        {t("events.title")}
      </h2>
      <p className="text-rc-blue/85 mb-8 max-w-2xl text-sm leading-relaxed">
        {t("events.introBefore")}
        <a
          href={SITE.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rc-blue font-medium underline decoration-rc-brown/40 underline-offset-2"
        >
          {t("events.linkedIn")}
        </a>
        {t("events.introAfter")}
      </p>
      <ul className="space-y-6">
        {EVENT_HIGHLIGHTS.map((ev) => (
          <li key={ev.id}>
            <article className="border-rc-blue/15 bg-white/50 rc-card-hover overflow-hidden rounded-xl border shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-rc-beige/10">
                <Image
                  src={ev.imageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-5">
                <p className="text-rc-beige/70 mb-1 text-xs font-medium uppercase tracking-wide">
                  {ev.whenWhere.startsWith("events.") ? t(ev.whenWhere) : ev.whenWhere}
                </p>
                <h3 className="text-rc-beige text-lg font-semibold">{t(ev.titleKey)}</h3>
                <p className="text-rc-beige/80 mt-2 text-sm leading-relaxed">{t(ev.blurbKey)}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryCtaLink href={SITE.googleFormEventUpdates ?? homeSectionHref("contact")}>
          {t("events.cta")}
        </PrimaryCtaLink>
      </div>
    </SectionShell>
  );
}
