"use client";

import Link from "next/link";

import { SiteLogo } from "@/components/site-logo";
import { SITE } from "@/config/site";
import { useTranslations } from "@/lib/translations";

const linkClass =
  "text-rc-beige/90 hover:text-rc-beige underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-rc-beige/50 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-blue rounded-sm outline-none";

export function SiteFooter() {
  const { t } = useTranslations();
  return (
    <footer className="border-t border-rc-blue/15 bg-rc-blue text-rc-beige">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-rc-beige/95 mb-10 inline-flex rounded-lg p-3 shadow-sm">
          <SiteLogo variant="footer" />
        </div>

        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-rc-brown mb-3 text-xs font-semibold tracking-widest uppercase">
              {t("footer.followUs")}
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {t("partners.linkedIn")}
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {t("footer.instagram")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-rc-brown mb-3 text-xs font-semibold tracking-widest uppercase">
              {t("footer.contact")}
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
                <span className="text-rc-beige/70">{t("footer.companyNo")} {SITE.companyNumber}</span>
              </li>
              <li>
                <span className="text-rc-beige/70">{t("footer.bank")} {SITE.bankAccount}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-rc-brown mb-3 text-xs font-semibold tracking-widest uppercase">
              {t("footer.legal")}
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className={linkClass}>
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-rc-beige/20 text-rc-beige/70 border-t pt-8 text-sm">
          <p>
            {t("footer.copyright", { year: String(new Date().getFullYear()), name: SITE.name })}
            {SITE.webCredit ? (
              <>
                {" "}
                · {t("footer.websiteCredit", { credit: SITE.webCredit })}
              </>
            ) : null}
          </p>
        </div>
      </div>
    </footer>
  );
}
