"use client";

import { SectionShell } from "@/components/sections/section-shell";
import { useLocaleContext } from "@/providers/locale-provider";

export function ApproachSection() {
  const { messages: m } = useLocaleContext();
  return (
    <SectionShell
      id="our-approach"
      aria-labelledby="approach-heading"
      className="border-b border-rc-blue/10"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div>
          <h2
            id="approach-heading"
            className="text-rc-blue mb-6 text-3xl font-semibold tracking-tight"
          >
            {m.approach.title}
          </h2>
          <p className="text-rc-blue/85 max-w-xl text-pretty leading-relaxed">
            {m.approach.intro}
          </p>
        </div>
        <ul className="text-rc-blue/85 space-y-8 text-pretty leading-relaxed">
          <li>
            <h3 className="text-rc-blue mb-2 text-lg font-semibold">
              {m.approach.pillar1.title}
            </h3>
            <p>{m.approach.pillar1.desc}</p>
          </li>
          <li>
            <h3 className="text-rc-blue mb-2 text-lg font-semibold">
              {m.approach.pillar2.title}
            </h3>
            <p>{m.approach.pillar2.desc}</p>
          </li>
          <li>
            <h3 className="text-rc-blue mb-2 text-lg font-semibold">
              {m.approach.pillar3.title}
            </h3>
            <p>{m.approach.pillar3.desc}</p>
          </li>
        </ul>
      </div>
    </SectionShell>
  );
}
