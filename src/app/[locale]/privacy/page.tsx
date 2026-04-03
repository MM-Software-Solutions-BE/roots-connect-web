import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  openGraphImagesForLocale,
  twitterImageAbsoluteForLocale,
} from "@/config/og";
import { SITE } from "@/config/site";
import { isLocale, type Locale } from "@/i18n/config";
import { buildLocaleAlternates } from "@/lib/metadata-helpers";
import { metadataBaseFromSiteUrl } from "@/lib/site-metadata-base";
import { getMessages } from "@/messages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const m = getMessages(locale);
  const title = m.privacy.title;
  const description = m.privacy.description;

  return {
    metadataBase: metadataBaseFromSiteUrl(),
    title,
    description,
    ...buildLocaleAlternates(locale, "privacy"),
    openGraph: {
      type: "website",
      locale: locale === "nl" ? "nl_BE" : "en_BE",
      alternateLocale: locale === "nl" ? ["en_BE"] : ["nl_BE"],
      url: `/${locale}/privacy`,
      siteName: SITE.name,
      title,
      description,
      images: openGraphImagesForLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImageAbsoluteForLocale(locale)],
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const m = getMessages(locale);

  return (
    <main id="main" tabIndex={-1} className="bg-rc-beige text-rc-blue min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-rc-brown mb-2 text-sm font-medium">
          <Link
            href={`/${locale}`}
            className="hover:text-rc-blue underline-offset-2 hover:underline"
          >
            {m.privacy.backToHome}
          </Link>
        </p>
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">{m.privacy.title}</h1>
        <div className="text-rc-blue/85 space-y-6 text-pretty leading-relaxed">
          <p className="text-sm text-rc-blue/70">
            Last updated: March 2026. This is a starter text — have it reviewed for Belgian law
            (GDPR) before going live.
          </p>
          <section>
            <h2 className="text-rc-blue mb-2 text-lg font-semibold">1. Data controller</h2>
            <p>
              {SITE.name} (“we”, “us”) is responsible for processing personal data collected through
              this website. Contact:{" "}
              <a
                className="text-rc-blue font-medium underline decoration-rc-brown/40 underline-offset-4 hover:decoration-rc-brown"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
              . Enterprise number: {SITE.companyNumber}.
            </p>
          </section>
          <section>
            <h2 className="text-rc-blue mb-2 text-lg font-semibold">2. Data we may collect</h2>
            <p>
              Depending on how you use the site (e.g. contact form or email), we may process your
              name, email address, message content, and technical data such as IP address and
              browser type, where necessary for security and service improvement.
            </p>
          </section>
          <section>
            <h2 className="text-rc-blue mb-2 text-lg font-semibold">3. Purposes and legal bases</h2>
            <p>
              We use your data to respond to enquiries, operate the website, and comply with legal
              obligations. The legal bases may include consent, legitimate interests, or contract,
              as applicable.
            </p>
          </section>
          <section>
            <h2 className="text-rc-blue mb-2 text-lg font-semibold">4. Cookies</h2>
            <p>
              When you first visit, a cookie banner lets you choose <strong>essential only</strong>{" "}
              or <strong>accept all</strong>. Essential cookies are needed for basic site operation.
              Optional analytics (for example Google Analytics, when enabled) will only run if you
              accept all — we do not load those scripts before you consent. You can change your mind
              later by clearing site data for this domain; a future update may add a “manage
              cookies” control.
            </p>
          </section>
          <section>
            <h2 className="text-rc-blue mb-2 text-lg font-semibold">5. Your rights</h2>
            <p>
              Under applicable data protection law (including the GDPR), you may have the right to
              access, rectify, erase, restrict, or object to processing of your personal data, and
              to lodge a complaint with a supervisory authority (in Belgium: Gegevensbeschermingsautoriteit
              / Autorité de protection des données).
            </p>
          </section>
          <section>
            <h2 className="text-rc-blue mb-2 text-lg font-semibold">6. Changes</h2>
            <p>We may update this policy from time to time. The “Last updated” date will change accordingly.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
