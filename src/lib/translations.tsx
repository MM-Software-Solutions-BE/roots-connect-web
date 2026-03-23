"use client";

import * as React from "react";

import {
  isLocaleCode,
  LOCALE_STORAGE_KEY,
} from "@/config/locales";
import type { LocaleCode } from "@/config/locales";

export type Translations = Record<string, string>;

let cachedTranslations: Partial<Record<LocaleCode, Translations>> = {};

export async function loadTranslations(
  locale: LocaleCode
): Promise<Translations> {
  if (cachedTranslations[locale]) {
    return cachedTranslations[locale]!;
  }

  const mod = await import(`@/locales/${locale}.json`);
  const translations = mod.default as Translations;
  cachedTranslations[locale] = translations;
  return translations;
}

type TranslationParams = Record<string, string | number>;

function interpolate(
  template: string,
  params?: TranslationParams
): string {
  if (!params) return template;
  return Object.entries(params).reduce(
    (acc, [key, value]) =>
      acc.replace(new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g"), String(value)),
    template
  );
}

type TranslationsContextValue = {
  t: (key: string, params?: TranslationParams) => string;
  /** Returns translated string or undefined if key missing (for fallbacks) */
  raw: (key: string) => string | undefined;
  locale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
  isLoading: boolean;
};

const TranslationsContext = React.createContext<
  TranslationsContextValue | undefined
>(undefined);

const DEFAULT_LOCALE: LocaleCode = "en";

export function TranslationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = React.useState<LocaleCode>(DEFAULT_LOCALE);
  const [translations, setTranslations] = React.useState<Translations | null>(
    null
  );
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let raw: string | null = null;
    if (typeof window !== "undefined") {
      raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    }
    const initial = (raw && isLocaleCode(raw) ? raw : null) ?? DEFAULT_LOCALE;
    setLocaleState(initial);
  }, []);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  React.useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    loadTranslations(locale).then((t) => {
      if (!cancelled) {
        setTranslations(t);
        setIsLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  const setLocale = React.useCallback((newLocale: LocaleCode) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
  }, []);

  const t = React.useCallback(
    (key: string, params?: TranslationParams): string => {
      if (!translations) return key;
      const template = translations[key];
      if (template == null) return key;
      return interpolate(template, params);
    },
    [translations]
  );

  const raw = React.useCallback(
    (key: string): string | undefined => {
      return translations?.[key];
    },
    [translations]
  );

  const value = React.useMemo<TranslationsContextValue>(
    () => ({ t, raw, locale, setLocale, isLoading }),
    [t, raw, locale, setLocale, isLoading]
  );

  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations(): TranslationsContextValue {
  const ctx = React.useContext(TranslationsContext);
  if (!ctx) {
    throw new Error("useTranslations must be used within TranslationsProvider");
  }
  return ctx;
}
