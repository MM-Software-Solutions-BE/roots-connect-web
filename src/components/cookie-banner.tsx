"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { type CookieConsentValue, getStoredConsent, setStoredConsent } from "@/lib/cookie-consent";
import { cn } from "@/lib/utils";
import { useLocaleContext } from "@/providers/locale-provider";

export function CookieBanner() {
  const { messages: m, locale } = useLocaleContext();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  const save = (value: CookieConsentValue) => {
    setStoredConsent(value);
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className={cn(
        "border-rc-blue/15 bg-rc-beige/98 supports-backdrop-filter:bg-rc-beige/95",
        "fixed right-0 bottom-0 left-0 z-[90] border-t shadow-[0_-8px_30px_rgba(14,41,62,0.12)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h2
            id="cookie-banner-title"
            className="text-rc-blue mb-2 text-sm font-semibold tracking-tight"
          >
            {m.cookie.title}
          </h2>
          <p
            id="cookie-banner-desc"
            className="text-rc-blue/85 text-pretty text-sm leading-relaxed"
          >
            {m.cookie.descPrefix}
            <strong className="text-rc-blue font-medium">{m.cookie.descAnalytics}</strong>
            {m.cookie.descMiddle}
            <em>{m.cookie.descAccept}</em>
            {m.cookie.descSuffix}
            <Link
              href={`/${locale}/privacy`}
              className="text-rc-blue font-medium underline decoration-rc-brown/50 underline-offset-2 hover:decoration-rc-brown"
            >
              {m.cookie.privacyPolicy}
            </Link>
            {m.cookie.descEnd}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <Button
            type="button"
            variant="outline"
            className="border-rc-blue/25 text-rc-blue hover:bg-rc-blue/5 w-full sm:w-auto"
            onClick={() => save("essential")}
          >
            {m.cookie.essentialOnly}
          </Button>
          <Button
            type="button"
            className="bg-rc-blue text-rc-beige hover:bg-rc-blue/90 w-full border-0 sm:w-auto"
            onClick={() => save("all")}
          >
            {m.cookie.acceptAll}
          </Button>
        </div>
      </div>
    </div>
  );
}
