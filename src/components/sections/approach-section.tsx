"use client";

import Image from "next/image";

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
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
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
          <div className="border-rc-blue/15 bg-rc-blue/5 mt-6 max-w-xl overflow-hidden rounded-xl border">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/approach/approach-community.jpeg"
                alt=""
                fill
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                quality={100}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        <ul className="text-rc-blue/85 flex flex-col gap-8 text-pretty leading-relaxed lg:h-full lg:justify-between lg:gap-10">
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
