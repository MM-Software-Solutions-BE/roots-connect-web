import type { LucideIcon } from "lucide-react";
import {
  Eye,
  GraduationCap,
  MessagesSquare,
  UsersRound,
} from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";

const tiles: {
  stat: string;
  label: string;
  Icon: LucideIcon;
}[] = [
  {
    stat: "Multiple",
    label: "collaborations with student associations",
    Icon: GraduationCap,
  },
  {
    stat: "10,000+",
    label: "monthly views on our social media",
    Icon: Eye,
  },
  {
    stat: "170+",
    label:
      "members (young professionals active in the legal sector) in our Roots Connect community",
    Icon: UsersRound,
  },
  {
    stat: "Support",
    label:
      "Ad hoc — we are regularly contacted by law students with practical questions about the legal profession.",
    Icon: MessagesSquare,
  },
];

export function ImpactSection() {
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
        Our impact
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {tiles.map(({ stat, label, Icon }) => (
          <article
            key={label}
            className="border-rc-blue/15 from-rc-beige/40 bg-linear-to-br to-white/80 rc-card-hover rounded-xl border p-6 shadow-sm ring-1 ring-rc-blue/5"
          >
            <div className="mb-5 flex items-center gap-4">
              <div
                className="bg-rc-blue/8 text-rc-brown flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-inner ring-1 ring-rc-blue/10"
                aria-hidden
              >
                <Icon className="size-7" strokeWidth={1.6} />
              </div>
              <p className="text-rc-brown min-w-0 flex-1 text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl">
                {stat}
              </p>
            </div>
            <p className="text-rc-blue/85 border-rc-blue/10 border-t pt-4 text-pretty leading-relaxed">
              {label}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
