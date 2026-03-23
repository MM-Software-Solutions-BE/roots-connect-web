"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, MailIcon, SearchIcon } from "lucide-react";

import { buildMailto } from "@/lib/mailto";
import { SITE } from "@/config/site";
import { PEERS } from "@/data/team";
import { useTranslations } from "@/lib/translations";

function getMailtoHref(member: (typeof PEERS)[number]): string {
  const email = member.email ?? SITE.email;
  return buildMailto(email, {
    subject: `Contact ${member.name} — Roots Connect`,
    body: `Hello ${member.name},

I'm reaching out regarding:

[Your question or topic]

Kind regards,
`,
  });
}

function matchesSearch(member: (typeof PEERS)[number], query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase().trim();
  return (
    member.name.toLowerCase().includes(q) ||
    member.practice.toLowerCase().includes(q) ||
    member.role.toLowerCase().includes(q)
  );
}

export function PeersContent() {
  const { t } = useTranslations();
  const [query, setQuery] = React.useState("");
  const filteredPeers = React.useMemo(
    () => PEERS.filter((m) => matchesSearch(m, query)),
    [query]
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main
      id="main"
      tabIndex={-1}
      className="bg-rc-beige text-rc-blue min-h-screen"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-rc-brown mb-2 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-rc-blue underline-offset-2 hover:underline"
          >
            {t("peers.backToHome")}
          </Link>
        </p>

        <h1 className="text-rc-blue mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("peers.title")}
        </h1>
        <p className="text-rc-blue/90 mb-4 max-w-2xl text-pretty text-lg leading-relaxed">
          {t("peers.intro")}
        </p>
        <p className="text-rc-blue/75 mb-10 max-w-2xl text-sm italic">
          {t("peers.contactTip")}
        </p>

        <div className="border-rc-blue/15 mb-16 flex flex-col gap-4 rounded-xl border bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-rc-blue mb-1 font-medium">
              {t("peers.notSureWho")}
            </p>
            <p className="text-rc-blue/80 text-sm">
              {t("peers.meetAtEvents")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-lg border border-transparent px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none"
            >
              {t("peers.contactUs")}
            </Link>
            <Link
              href="/#events"
              className="border-rc-blue/25 text-rc-blue hover:bg-rc-blue/5 inline-flex h-10 items-center justify-center rounded-lg border px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-rc-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none"
            >
              {t("peers.viewEvents")}
            </Link>
          </div>
        </div>

        <h2 className="text-rc-blue mb-4 text-xl font-semibold tracking-tight">
          {t("peers.ourPeers")}
        </h2>

        <div className="relative mb-8">
          <SearchIcon
            className="text-rc-blue/50 pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("peers.searchPlaceholder")}
            aria-label={t("peers.searchPlaceholder")}
            className="border-rc-blue/20 text-rc-blue placeholder:text-rc-blue/50 w-full rounded-lg border bg-white/10 py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-rc-blue/40"
          />
        </div>

        {filteredPeers.length === 0 ? (
          <p className="text-rc-blue/80 py-12 text-center">
            {t("peers.noResults")}
          </p>
        ) : (
        <ul className="grid grid-cols-2 gap-6 sm:gap-12 lg:grid-cols-3">
          {filteredPeers.map((member) => (
            <li key={member.name}>
              <article className="rc-card-hover flex flex-col rounded-xl border border-rc-blue/10 bg-white/5 p-4 shadow-sm sm:p-6">
                <div className="border-rc-blue/15 relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-lg border bg-rc-blue/5 shadow-sm sm:mb-5">
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
                      {t("peers.photoComingSoon")}
                    </div>
                  )}
                </div>
                <h2 className="text-rc-blue mb-1 text-base font-semibold sm:text-xl">
                  {member.name}
                </h2>
                <p className="text-rc-brown mb-1 text-sm font-medium">
                  {member.role}
                </p>
                <p className="text-rc-blue/80 mb-4 text-xs sm:mb-6 sm:text-sm">
                  {t("peers.lawyerPrefix")}, {member.practice}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href={getMailtoHref(member)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center gap-1.5 rounded-lg border border-transparent px-3 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none sm:h-10 sm:gap-2 sm:px-4 sm:text-sm"
                  >
                    <MailIcon className="size-4" aria-hidden />
                    {t("peers.email")}
                  </a>
                  {member.linkedIn ? (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center gap-1.5 rounded-lg border border-transparent px-3 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none sm:h-10 sm:gap-2 sm:px-4 sm:text-sm"
                    >
                      <LinkedinIcon className="size-4" aria-hidden />
                      {t("peers.linkedIn")}
                    </a>
                  ) : (
                    <a
                      href={SITE.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center gap-1.5 rounded-lg border border-transparent px-3 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none sm:h-10 sm:gap-2 sm:px-4 sm:text-sm"
                    >
                      <LinkedinIcon className="size-4" aria-hidden />
                      {t("peers.linkedIn")}
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
        )}
      </div>
    </main>
  );
}
