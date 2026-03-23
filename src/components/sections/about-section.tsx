"use client";

import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { homeSectionHref } from "@/config/navigation";
import { SectionShell } from "@/components/sections/section-shell";
import { useTranslations } from "@/lib/translations";

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
      <div className="text-rc-blue/85 space-y-6 text-pretty leading-relaxed">
        <p>{t("about.para1")}</p>
        <p>{t("about.para2")}</p>
        <p>{t("about.para3")}</p>
        <p>{t("about.para4")}</p>

        <div className="border-rc-brown/25 mt-10 border-l-4 pl-6">
          <h3 className="text-rc-blue mb-4 text-xl font-semibold tracking-tight">
            {t("about.mission.title")}
          </h3>
          <p className="mb-4">{t("about.mission.para1")}</p>
          <p>{t("about.mission.para2")}</p>
        </div>

        <div className="pt-4">
          <PrimaryCtaLink href={homeSectionHref("contact")}>{t("about.cta")}</PrimaryCtaLink>
        </div>
      </div>
    </SectionShell>
  );
}
