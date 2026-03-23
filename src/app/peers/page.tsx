import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, MailIcon } from "lucide-react";

import { defaultOgImages } from "@/config/og";
import { buildMailto } from "@/lib/mailto";
import { SITE } from "@/config/site";
import { PEERS } from "@/data/team";

const pageTitle = "Peer Network";
const pageDescription =
  "Connect with Roots Connect team leads. Our peers are ready to answer your questions about careers in law and support students from underrepresented backgrounds.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/peers",
  },
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "/peers",
    siteName: SITE.name,
    title: pageTitle,
    description: pageDescription,
    images: defaultOgImages,
  },
};

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

export default function PeersPage() {
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
            ← Back to home
          </Link>
        </p>

        <h1 className="text-rc-blue mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Peer Network
        </h1>
        <p className="text-rc-blue/90 mb-16 max-w-2xl text-pretty text-lg leading-relaxed">
          In samenwerking met onze partners heeft Roots Connect een netwerk
          opgezet van enthousiaste advocaten en juristen waarmee biculturele en
          eerste generatie studenten op een laagdrempelige manier in contact
          kunnen komen. Neem gerust contact op voor een kennismaking of een
          vraag over carrière in de advocatuur.
        </p>

        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {PEERS.map((member) => (
            <li key={member.name}>
              <article className="rc-card-hover flex flex-col rounded-xl border border-rc-blue/10 bg-white/5 p-6 shadow-sm">
                <div className="border-rc-blue/15 relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-lg border bg-rc-blue/5 shadow-sm">
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
                <h2 className="text-rc-blue mb-1 text-xl font-semibold">
                  {member.name}
                </h2>
                <p className="text-rc-brown mb-1 text-sm font-medium">
                  {member.role}
                </p>
                <p className="text-rc-blue/80 mb-6 text-sm">
                  Lawyer, {member.practice}
                </p>
                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={getMailtoHref(member)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center gap-2 rounded-lg border border-transparent px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none"
                  >
                    <MailIcon className="size-4" aria-hidden />
                    Email
                  </a>
                  {member.linkedIn ? (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center gap-2 rounded-lg border border-transparent px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none"
                    >
                      <LinkedinIcon className="size-4" aria-hidden />
                      LinkedIn
                    </a>
                  ) : (
                    <a
                      href={SITE.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center gap-2 rounded-lg border border-transparent px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none"
                    >
                      <LinkedinIcon className="size-4" aria-hidden />
                      LinkedIn
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
