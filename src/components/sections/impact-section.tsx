"use client";

import {
  Eye,
  GraduationCap,
  MessagesSquare,
  UsersRound,
} from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";
import { useLocaleContext } from "@/providers/locale-provider";

export function ImpactSection() {
  const { messages: m } = useLocaleContext();
  const tiles = [
    { stat: m.impact.stat1.stat, label: m.impact.stat1.label, Icon: GraduationCap },
    { stat: m.impact.stat2.stat, label: m.impact.stat2.label, Icon: Eye },
    { stat: m.impact.stat3.stat, label: m.impact.stat3.label, Icon: UsersRound },
    { stat: m.impact.stat4.stat, label: m.impact.stat4.label, Icon: MessagesSquare },
  ] as const;

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
        {m.impact.title}
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {tiles.map(({ stat, label, Icon }) => (
          <article
            key={label}
            className="border-rc-blue/15 bg-white/50 rc-card-hover flex flex-col rounded-xl border p-6 shadow-sm"
          >
            <div
              className="bg-rc-beige/12 text-rc-beige mb-4 flex size-12 shrink-0 items-center justify-center rounded-xl"
              aria-hidden
            >
              <Icon className="size-6" strokeWidth={1.5} />
            </div>
            <p className="text-rc-beige mb-2 text-2xl font-semibold tabular-nums tracking-tight sm:text-3xl">
              {stat}
            </p>
            <p className="text-rc-beige/85 text-pretty text-sm leading-relaxed">
              {label}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
