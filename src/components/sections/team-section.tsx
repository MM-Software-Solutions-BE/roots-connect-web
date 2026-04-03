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
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <li key={member.name} className="flex">
            <article className="border-rc-blue/15 bg-white/50 rc-card-hover flex min-h-full w-full flex-col overflow-hidden rounded-xl border shadow-sm">
              <div className="border-rc-blue/15 relative aspect-[4/5] w-full overflow-hidden bg-rc-blue/5">
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 384px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="text-rc-blue/45 flex h-full items-center justify-center p-6 text-center text-sm">
                    {m.team.photoComingSoon}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-rc-beige text-lg font-semibold">{member.name}</h3>
                <p className="text-rc-brown mt-1 text-sm font-medium">{member.role}</p>
                <p className="text-rc-beige/85 mt-3 text-sm leading-relaxed">
                  {m.team.lawyerPrefix}, {member.practice}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
