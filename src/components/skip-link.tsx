"use client";

import { useLocaleContext } from "@/providers/locale-provider";

/** Keyboard: first Tab from top of page jumps past the header into `#main`. */
export function SkipLink() {
  const { messages, locale } = useLocaleContext();
  return (
    <a
      href={`/${locale}#main`}
      className="bg-primary text-primary-foreground focus:ring-ring fixed left-4 z-[100] -translate-y-[200%] rounded-md px-4 py-2 text-sm font-medium shadow-md transition-transform focus:translate-y-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rc-beige"
    >
      {messages.skipLink}
    </a>
  );
}
