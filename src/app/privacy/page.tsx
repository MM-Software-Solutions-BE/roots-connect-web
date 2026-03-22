import type { Metadata } from "next";
import Link from "next/link";

import { defaultOgImages, OG_IMAGE_ABSOLUTE_URL } from "@/config/og";
import { SITE } from "@/config/site";

const privacyTitle = "Privacy Policy";
const privacyDescription = `Privacy policy for ${SITE.name}.`;

export const metadata: Metadata = {
  title: privacyTitle,
  description: privacyDescription,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "/privacy",
    siteName: SITE.name,
    title: privacyTitle,
    description: privacyDescription,
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: privacyTitle,
    description: privacyDescription,
    images: [OG_IMAGE_ABSOLUTE_URL],
  },
};

export default function PrivacyPage() {
  return (
    <main id="main" tabIndex={-1} className="bg-rc-beige text-rc-blue min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-rc-brown mb-2 text-sm font-medium">
          <Link href="/" className="hover:text-rc-blue underline-offset-2 hover:underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">Privacy Policy</h1>
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
