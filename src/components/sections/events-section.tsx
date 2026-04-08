"use client";

import Image from "next/image";

import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSectionHref } from "@/config/navigation";
import { GOOGLE_FORM_EVENT_UPDATES, SITE } from "@/config/site";
import { EVENT_HIGHLIGHTS } from "@/data/events";
import { messageAt } from "@/lib/message-at";
import { useLocaleContext } from "@/providers/locale-provider";

export function EventsSection() {
  const { messages: m, locale } = useLocaleContext();
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
        {m.events.title}
      </h2>
      <p className="text-rc-blue/85 mb-8 max-w-2xl text-sm leading-relaxed">
        {m.events.introBefore}
        <a
          href={SITE.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rc-blue font-medium underline decoration-rc-brown/40 underline-offset-2"
        >
          {m.events.linkedIn}
        </a>
        {m.events.introAfter}
      </p>
      <ul className="grid gap-6 lg:grid-cols-2">
        {EVENT_HIGHLIGHTS.map((ev) => (
          <li key={ev.id} className="flex">
            <article className="border-rc-blue/15 bg-white/50 rc-card-hover flex min-h-full w-full flex-col overflow-hidden rounded-xl border shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-rc-beige/10">
                <Image
                  src={ev.imageSrc}
                  alt=""
                  fill
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-rc-beige/70 mb-1 text-xs font-medium uppercase tracking-wide">
                  {ev.whenWhere.startsWith("events.") ? messageAt(m, ev.whenWhere) : ev.whenWhere}
                </p>
                <h3 className="text-rc-beige text-lg font-semibold">
                  {messageAt(m, ev.titleKey)}
                </h3>
                <p className="text-rc-beige/80 mt-2 text-sm leading-relaxed">
                  {messageAt(m, ev.blurbKey)}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryCtaLink href={GOOGLE_FORM_EVENT_UPDATES ?? homeSectionHref(locale, "contact")}>
          {m.events.cta}
        </PrimaryCtaLink>
      </div>
    </SectionShell>
  );
}
