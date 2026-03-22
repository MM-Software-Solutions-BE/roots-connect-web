import Link from "next/link";

import { SITE } from "@/config/site";
import { SiteLogo } from "@/components/site-logo";

const linkClass =
  "text-rc-beige/90 hover:text-rc-beige underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-rc-beige/50 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-blue rounded-sm outline-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-rc-blue/15 bg-rc-blue text-rc-beige">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-rc-beige/95 mb-10 inline-flex rounded-lg p-3 shadow-sm">
          <SiteLogo variant="footer" />
        </div>

        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-rc-brown mb-3 text-xs font-semibold tracking-widest uppercase">
              Follow us
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-rc-brown mb-3 text-xs font-semibold tracking-widest uppercase">
              Contact
            </h2>
            <ul className="text-rc-beige/85 space-y-2 text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className={linkClass}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="text-rc-beige/70">Company no. {SITE.companyNumber}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-rc-brown mb-3 text-xs font-semibold tracking-widest uppercase">
              Legal
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-rc-beige/20 text-rc-beige/70 border-t pt-8 text-sm">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            {SITE.webCredit ? (
              <>
                {" "}
                · Website: {SITE.webCredit}
              </>
            ) : null}
          </p>
        </div>
      </div>
    </footer>
  );
}
