"use client";

import Image from "next/image";

import { TEAM_MEMBERS } from "@/data/team";
import { SectionShell } from "@/components/sections/section-shell";
import { useTranslations } from "@/lib/translations";

export function TeamSection() {
  const { t } = useTranslations();
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
        {t("team.title")}
      </h2>
      <ul className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-4">
        {TEAM_MEMBERS.map((member) => (
          <li key={member.name} className="flex min-h-0 min-w-0">
            <article className="rc-card-hover flex h-full min-h-0 w-full min-w-0 flex-col rounded-xl">
              <div className="border-rc-blue/15 bg-rc-blue/5 relative mb-3 aspect-[3/4] w-full shrink-0 overflow-hidden rounded-xl border shadow-sm sm:mb-3">
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 45vw, 28vw"
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="text-rc-blue/45 flex h-full items-center justify-center p-4 text-center text-sm">
                    {t("team.photoComingSoon")}
                  </div>
                )}
              </div>
              <div className="flex min-h-[5.5rem] flex-1 flex-col">
                <h3 className="text-rc-blue text-base font-semibold sm:text-lg lg:text-base">
                  {member.name}
                </h3>
                <p className="text-rc-brown text-xs font-medium sm:text-sm">
                  {member.role}
                </p>
                <p className="text-rc-blue/80 mt-auto text-xs leading-snug sm:text-sm">
                  {t("team.lawyerPrefix")}, {member.practice}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
