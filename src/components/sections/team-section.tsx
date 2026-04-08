"use client";

import Image from "next/image";

import { SectionShell } from "@/components/sections/section-shell";
import { TEAM_MEMBERS } from "@/data/team";
import { useLocaleContext } from "@/providers/locale-provider";

export function TeamSection() {
  const { messages: m } = useLocaleContext();
  return (
    <SectionShell
      id="our-team"
      aria-labelledby="team-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="team-heading"
        className="text-rc-blue mb-10 text-3xl font-semibold tracking-tight"
      >
        {m.team.title}
      </h2>
      <ul className="grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <li key={member.name} className="flex">
            <div className="flex w-full flex-col">
              <div className="border-rc-blue/15 relative aspect-[4/5] w-full overflow-hidden rounded-xl border bg-rc-blue/5 shadow-sm">
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    quality={72}
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 33vw, 360px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="text-rc-blue/45 flex h-full items-center justify-center p-6 text-center text-sm">
                    {m.team.photoComingSoon}
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-rc-blue text-base font-semibold sm:text-lg">
                  {member.name}
                </h3>
                <p className="text-rc-brown mt-1 text-sm font-medium">{member.role}</p>
                <p className="text-rc-blue/80 mt-2 text-sm leading-relaxed">
                  {m.team.lawyerPrefix}, {member.practice}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
