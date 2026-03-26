"use client";

import {
  Eye,
  GraduationCap,
  MessagesSquare,
  UsersRound,
} from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";
import { useTranslations } from "@/lib/translations";

const tileKeys = [
  { statKey: "impact.stat1.stat", labelKey: "impact.stat1.label", Icon: GraduationCap },
  { statKey: "impact.stat2.stat", labelKey: "impact.stat2.label", Icon: Eye },
  { statKey: "impact.stat3.stat", labelKey: "impact.stat3.label", Icon: UsersRound },
  { statKey: "impact.stat4.stat", labelKey: "impact.stat4.label", Icon: MessagesSquare },
] as const;

export function ImpactSection() {
  const { t } = useTranslations();
  return (
    <SectionShell
      id="our-impact"
      aria-labelledby="impact-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="impact-heading"
        className="text-rc-blue mb-10 text-3xl font-semibold tracking-tight"
      >
        {t("impact.title")}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tileKeys.map(({ statKey, labelKey, Icon }) => (
          <article
            key={labelKey}
            className="border-rc-blue/15 bg-white/50 rc-card-hover flex flex-col rounded-xl border p-6 shadow-sm"
          >
            <div
              className="bg-rc-beige/12 text-rc-beige mb-4 flex size-12 shrink-0 items-center justify-center rounded-xl"
              aria-hidden
            >
              <Icon className="size-6" strokeWidth={1.5} />
            </div>
            <p className="text-rc-beige mb-2 text-2xl font-semibold tabular-nums tracking-tight sm:text-3xl">
              {t(statKey)}
            </p>
            <p className="text-rc-beige/85 text-pretty text-sm leading-relaxed">
              {t(labelKey)}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
