"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { defaultLocale, isLocale } from "@/i18n/config";

/**
 * Root layout cannot read `[locale]`; sync `<html lang>` from the first path segment.
 */
export function HtmlLangSync() {
  const pathname = usePathname();
  const seg = pathname.split("/").filter(Boolean)[0];

  React.useEffect(() => {
    document.documentElement.lang =
      seg && isLocale(seg) ? seg : defaultLocale;
  }, [seg]);

  return null;
}
