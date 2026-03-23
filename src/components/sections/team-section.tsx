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
      <ul className="grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-3 items-stretch">
        {TEAM_MEMBERS.map((member) => (
          <li key={member.name} className="flex">
            <article className="rc-card-hover flex min-h-full flex-1 flex-col rounded-xl">
              <div className="border-rc-blue/15 bg-rc-blue/5 relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-xl border shadow-sm sm:mb-4">
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="text-rc-blue/45 flex h-full items-center justify-center p-4 text-center text-sm">
                    {t("team.photoComingSoon")}
                  </div>
                )}
              </div>
              <h3 className="text-rc-blue text-base font-semibold sm:text-lg">{member.name}</h3>
              <p className="text-rc-brown text-xs font-medium sm:text-sm">{member.role}</p>
              <p className="text-rc-blue/80 text-xs sm:text-sm">{t("team.lawyerPrefix")}, {member.practice}</p>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
