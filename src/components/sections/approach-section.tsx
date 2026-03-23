"use client";

import { SectionShell } from "@/components/sections/section-shell";
import { useTranslations } from "@/lib/translations";

export function ApproachSection() {
  const { t } = useTranslations();
  return (
    <SectionShell
      id="our-approach"
      aria-labelledby="approach-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="approach-heading"
        className="text-rc-blue mb-8 text-3xl font-semibold tracking-tight"
      >
        {t("approach.title")}
      </h2>
      <p className="text-rc-blue/85 mb-10 max-w-3xl text-left leading-relaxed">
        {t("approach.intro")}
      </p>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <li className="border-rc-blue/15 bg-white/50 rc-card-hover rounded-xl border p-5">
          <h3 className="text-rc-beige mb-2 text-lg font-semibold">
            {t("approach.pillar1.title")}
          </h3>
          <p className="text-rc-beige/85 text-left leading-relaxed">
            {t("approach.pillar1.desc")}
          </p>
        </li>
        <li className="border-rc-blue/15 bg-white/50 rc-card-hover rounded-xl border p-5">
          <h3 className="text-rc-beige mb-2 text-lg font-semibold">
            {t("approach.pillar2.title")}
          </h3>
          <p className="text-rc-beige/85 text-left leading-relaxed">
            {t("approach.pillar2.desc")}
          </p>
        </li>
        <li className="border-rc-blue/15 bg-white/50 rc-card-hover rounded-xl border p-5">
          <h3 className="text-rc-beige mb-2 text-lg font-semibold">
            {t("approach.pillar3.title")}
          </h3>
          <p className="text-rc-beige/85 text-left leading-relaxed">
            {t("approach.pillar3.desc")}
          </p>
        </li>
      </ul>
    </SectionShell>
  );
}
