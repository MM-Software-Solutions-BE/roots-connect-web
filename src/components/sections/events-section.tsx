import Image from "next/image";

import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { SectionShell } from "@/components/sections/section-shell";
import { EVENT_HIGHLIGHTS } from "@/data/events";
import { SITE } from "@/config/site";

export function EventsSection() {
  return (
    <SectionShell
      id="events"
      aria-labelledby="events-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="events-heading"
        className="text-rc-blue mb-3 text-3xl font-semibold tracking-tight"
      >
        Events
      </h2>
      <p className="text-rc-blue/75 mb-8 max-w-2xl text-sm leading-relaxed">
        Discover our upcoming highlights and community moments. Follow us on{" "}
        <a
          href={SITE.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rc-blue font-medium underline decoration-rc-brown/40 underline-offset-2"
        >
          LinkedIn
        </a>{" "}
        for the latest announcements.
      </p>
      <ul className="space-y-6">
        {EVENT_HIGHLIGHTS.map((ev) => (
          <li key={ev.id}>
            <article className="border-rc-blue/15 bg-white/45 rc-card-hover rounded-xl border p-5 shadow-sm">
              <div className="border-rc-blue/20 bg-rc-beige/80 relative mb-4 aspect-[16/9] overflow-hidden rounded-lg border">
                <Image
                  src={ev.imageSrc}
                  alt={ev.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
              <p className="text-rc-brown mb-1 text-xs font-semibold tracking-wide uppercase">
                {ev.whenWhere}
              </p>
              <h3 className="text-rc-blue text-lg font-semibold">{ev.title}</h3>
              <p className="text-rc-blue/80 mt-2 text-sm leading-relaxed">{ev.blurb}</p>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryCtaLink href="#contact">Stay informed about our upcoming events</PrimaryCtaLink>
      </div>
    </SectionShell>
  );
}
