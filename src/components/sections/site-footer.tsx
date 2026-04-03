"use client";

import Link from "next/link";
import { InstagramIcon, LinkedinIcon } from "lucide-react";

import { SITE } from "@/config/site";
import { interpolate } from "@/lib/interpolate";
import { useLocaleContext } from "@/providers/locale-provider";

const linkClass =
  "text-rc-beige/90 hover:text-rc-beige underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-rc-beige/50 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-blue rounded-sm outline-none";

export function SiteFooter() {
  const { messages: m, locale } = useLocaleContext();
  return (
    <footer className="border-t border-rc-blue/15 bg-rc-blue text-rc-beige">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 grid items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-rc-brown mb-3 text-xs font-semibold tracking-widest uppercase">
              {m.footer.followUs}
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <LinkedinIcon className="size-4 shrink-0" aria-hidden />
                  <span>{m.partners.linkedIn}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <InstagramIcon className="size-4 shrink-0" aria-hidden />
                  <span>{m.footer.instagram}</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-rc-brown mb-3 text-xs font-semibold tracking-widest uppercase">
              {m.footer.contact}
            </h2>
            <ul className="text-rc-beige/85 space-y-2 text-sm">
              <li>{SITE.legalName}</li>
              <li>{SITE.address[0]}</li>
              <li>{SITE.address[1]}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className={linkClass}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="text-rc-beige/70">{m.footer.companyNo} {SITE.companyNumber}</span>
              </li>
              <li>
                <span className="text-rc-beige/70">{m.footer.bank} {SITE.bankAccount}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-rc-brown mb-3 text-xs font-semibold tracking-widest uppercase">
              {m.footer.legal}
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/privacy`} className={linkClass}>
                  {m.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-rc-beige/20 text-rc-beige/70 border-t pt-8 text-sm">
          <p>
            {interpolate(m.footer.copyright, {
              year: String(new Date().getFullYear()),
              name: SITE.name,
            })}
            {SITE.webCredit ? (
              <>
                {" "}
                · {interpolate(m.footer.websiteCredit, { credit: SITE.webCredit })}
              </>
            ) : null}
          </p>
        </div>
      </div>
    </footer>
  );
}
