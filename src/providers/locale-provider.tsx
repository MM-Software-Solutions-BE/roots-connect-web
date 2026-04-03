"use client";

import * as React from "react";

import type { Locale } from "@/i18n/config";
import type { Messages } from "@/messages/en";

type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
};

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  const value = React.useMemo(
    () => ({ locale, messages }),
    [locale, messages]
  );
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocaleContext(): LocaleContextValue {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return ctx;
}
