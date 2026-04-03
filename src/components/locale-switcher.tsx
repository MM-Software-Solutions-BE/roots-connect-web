"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { useLocaleContext } from "@/providers/locale-provider";

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, messages } = useLocaleContext();
  const pathname = usePathname();
  const [hash, setHash] = React.useState("");

  React.useEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash : "");
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [pathname]);

  const buildHref = (target: Locale) => {
    const prefix = `/${locale}`;
    const tail = pathname.startsWith(prefix)
      ? pathname.slice(prefix.length)
      : "";
    return `/${target}${tail}${hash}`;
  };

  const tabClass = (active: boolean) =>
    cn(
      "rounded-md px-2 py-1 text-sm font-medium transition-colors",
      active
        ? "bg-rc-blue/15 text-rc-blue"
        : "text-rc-blue/70 hover:text-rc-blue"
    );

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="group"
      aria-label={messages.language.label}
    >
      <Link
        href={buildHref("nl")}
        hrefLang="nl"
        lang="nl"
        aria-current={locale === "nl" ? "true" : undefined}
        className={tabClass(locale === "nl")}
      >
        {messages.language.nl}
      </Link>
      <span className="text-rc-blue/40 px-0.5 text-xs" aria-hidden>
        |
      </span>
      <Link
        href={buildHref("en")}
        hrefLang="en"
        lang="en"
        aria-current={locale === "en" ? "true" : undefined}
        className={tabClass(locale === "en")}
      >
        {messages.language.en}
      </Link>
    </div>
  );
}
