"use client";

import Image from "next/image";
import Link from "next/link";

import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSectionHref } from "@/config/navigation";
import { GOOGLE_FORM_EVENT_UPDATES } from "@/config/site";
import { HOME_HERO_IMAGE } from "@/data/home-media";
import { useLocaleContext } from "@/providers/locale-provider";

export function HomeSection() {
  const { messages: m, locale } = useLocaleContext();
  return (
    <SectionShell
      id="home"
      containerClassName="py-0 pt-4 pb-16 sm:pt-8 sm:pb-20 lg:py-28"
      className="bg-rc-beige border-b border-rc-blue/20"
    >
      <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="order-1 min-w-0 lg:order-1">
          <h1 className="text-rc-blue mb-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
            {m.home.title}
          </h1>
          <p className="text-rc-blue/90 mb-6 max-w-xl text-lg sm:text-xl">
            {m.home.subtitle}
          </p>
          <p className="text-rc-blue/80 mb-6 max-w-xl leading-relaxed sm:mb-10">
            {m.home.intro}
          </p>
        </div>

        <div className="order-2 relative flex w-full justify-center lg:order-2 lg:row-span-2 lg:justify-end">
          <div className="border-rc-blue/25 relative aspect-[16/10] w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)] ring-1 ring-rc-blue/20 sm:aspect-[4/5]">
            <Image
              src={HOME_HERO_IMAGE.src}
              alt={HOME_HERO_IMAGE.alt}
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 384px"
              className="origin-center object-cover object-[55%_30%] [transform:scale(1.06)]"
            />
          </div>
        </div>

        <div className="order-3 lg:order-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:max-w-sm lg:flex-col">
            <PrimaryCtaLink
              href={`/${locale}/peers`}
              className="bg-rc-blue text-rc-beige hover:bg-rc-blue/90 w-full"
            >
              {m.home.cta.peers}
            </PrimaryCtaLink>
            <Link
              href={GOOGLE_FORM_EVENT_UPDATES ?? homeSectionHref(locale, "contact")}
              className="inline-flex h-10 min-w-0 items-center justify-center gap-1.5 rounded-lg border border-rc-blue/40 bg-transparent px-4 text-sm font-medium text-rc-blue transition-colors outline-none hover:bg-rc-blue/10 focus-visible:ring-2 focus-visible:ring-rc-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige w-full"
            >
              {m.home.cta.events}
            </Link>
            <a
              href={homeSectionHref(locale, "contact")}
              className="inline-flex h-10 min-w-0 items-center justify-center gap-1.5 rounded-lg border border-rc-blue/40 bg-transparent px-4 text-sm font-medium text-rc-blue transition-colors outline-none hover:bg-rc-blue/10 focus-visible:ring-2 focus-visible:ring-rc-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige w-full"
            >
              {m.home.cta.partner}
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
