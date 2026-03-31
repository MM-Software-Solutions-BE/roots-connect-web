"use client";

import Image from "next/image";

import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { homeSectionHref } from "@/config/navigation";
import { SectionShell } from "@/components/sections/section-shell";
import { useTranslations } from "@/lib/translations";

const ABOUT_IMAGES = {
  atmosphere: {
    src: "/images/home/roots-connect-atmosphere.jpeg",
    alt: "Roots Connect event atmosphere: attendees listening together in a relaxed setting.",
    width: 1066,
    height: 1600,
  },
} as const;

export function AboutSection() {
  const { t } = useTranslations();
  return (
    <SectionShell
      id="about-us"
      aria-labelledby="about-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="about-heading"
        className="text-rc-blue mb-8 text-3xl font-semibold tracking-tight"
      >
        {t("about.title")}
      </h2>
      <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-start lg:gap-10">
        <div className="text-rc-blue/85 space-y-6 text-pretty leading-relaxed">
          <p>{t("about.para1")}</p>
          <p>{t("about.para2")}</p>
          <p>{t("about.para3")}</p>
          <p>{t("about.para4")}</p>
        </div>

        <div className="border-rc-blue/15 bg-white/50 overflow-hidden rounded-xl border shadow-sm">
          <Image
            src={ABOUT_IMAGES.atmosphere.src}
            alt={ABOUT_IMAGES.atmosphere.alt}
            width={ABOUT_IMAGES.atmosphere.width}
            height={ABOUT_IMAGES.atmosphere.height}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 352px"
          />
        </div>
      </div>

      <div className="border-rc-brown/25 mt-10 border-l-4 pl-6 text-rc-blue/85 text-pretty leading-relaxed">
        <h3 className="text-rc-blue mb-4 text-xl font-semibold tracking-tight">
          {t("about.mission.title")}
        </h3>
        <p className="mb-4">{t("about.mission.para1")}</p>
        <p>{t("about.mission.para2")}</p>
      </div>

      <div className="pt-6">
        <PrimaryCtaLink href={homeSectionHref("contact")}>
          {t("about.cta")}
        </PrimaryCtaLink>
      </div>
    </SectionShell>
  );
}
