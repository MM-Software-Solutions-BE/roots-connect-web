"use client";

import Image from "next/image";
import Link from "next/link";

import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { SectionShell } from "@/components/sections/section-shell";
import { SITE } from "@/config/site";
import { HOME_HERO_IMAGE } from "@/data/home-media";
import { useTranslations } from "@/lib/translations";

export function HomeSection() {
  const { t } = useTranslations();
  return (
    <SectionShell
      id="home"
      containerClassName="max-w-5xl py-0 pt-4 pb-16 sm:pt-8 sm:pb-20 lg:py-28"
      className="bg-rc-beige border-b border-rc-blue/20"
    >
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="text-rc-blue/85 mb-3 text-sm font-medium uppercase tracking-wide">
            {t("home.brand")}
          </p>
          <h1 className="text-rc-blue mb-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
            {t("home.title")}
          </h1>
          <p className="text-rc-blue/90 mb-6 max-w-xl text-lg sm:text-xl">
            {t("home.subtitle")}
          </p>
          <p className="text-rc-blue/80 mb-10 max-w-xl leading-relaxed">
            {t("home.intro")}
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryCtaLink
              href={SITE.googleFormEventUpdates ?? "#contact"}
              className="bg-rc-blue text-rc-beige hover:bg-rc-blue/90"
            >
              {t("home.cta.events")}
            </PrimaryCtaLink>
            <Link
              href="/peers"
              className="inline-flex h-10 min-w-0 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-rc-blue/40 bg-transparent px-4 text-sm font-medium text-rc-blue transition-colors outline-none hover:bg-rc-blue/10 focus-visible:ring-2 focus-visible:ring-rc-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige"
            >
              {t("home.cta.peers")}
            </Link>
          </div>
        </div>

        <div className="order-1 relative flex w-full justify-center lg:order-2 lg:justify-end">
          {/*
            max-w-sm: square stays compact so the hero doesn’t read wider than other sections.
            Same max-w-5xl shell as the rest of the site (was max-w-6xl before).
          */}
          <div className="border-rc-blue/25 relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)] ring-1 ring-rc-blue/20">
            {/* Crop: focus op presenter + samenwerking; portrait-first voor mobiel */}
            <Image
              src={HOME_HERO_IMAGE.src}
              alt={HOME_HERO_IMAGE.alt}
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 384px"
              className="origin-center object-cover object-[35%_38%] [transform:scale(1.05)]"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
