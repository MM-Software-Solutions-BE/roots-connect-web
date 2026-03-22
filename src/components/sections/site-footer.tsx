import { SiteLogo } from "@/components/site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-rc-blue/15 bg-rc-blue text-rc-beige">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-rc-beige/95 mb-8 inline-flex rounded-lg p-3 shadow-sm">
          <SiteLogo variant="footer" />
        </div>
        <p className="text-rc-beige/80 text-sm">
          {/* todo §9 — LinkedIn, Instagram, KBO, privacy, developer name */}
          Footer: quicklinks, legal, © Roots Connect 2026
        </p>
      </div>
    </footer>
  );
}
