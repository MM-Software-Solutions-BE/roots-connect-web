import Image from "next/image";

import { TEAM_MEMBERS } from "@/data/team";
import { SectionShell } from "@/components/sections/section-shell";

export function TeamSection() {
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
        Our team
      </h2>
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <li key={member.name}>
            <article className="flex flex-col">
              <div className="border-rc-blue/15 bg-rc-blue/5 relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-xl border shadow-sm">
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="text-rc-blue/45 flex h-full items-center justify-center p-4 text-center text-sm">
                    Photo coming soon
                  </div>
                )}
              </div>
              <h3 className="text-rc-blue text-lg font-semibold">{member.name}</h3>
              <p className="text-rc-brown text-sm font-medium">{member.role}</p>
              <p className="text-rc-blue/80 text-sm">Lawyer, {member.practice}</p>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
