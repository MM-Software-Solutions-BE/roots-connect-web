"use client";

import * as React from "react";

import {
  isLocaleCode,
  LOCALE_STORAGE_KEY,
} from "@/config/locales";
import type { LocaleCode } from "@/config/locales";
import en from "@/locales/en.json";
import nl from "@/locales/nl.json";
import fr from "@/locales/fr.json";

export type Translations = Record<string, string>;

const LOCALE_TRANSLATIONS: Record<LocaleCode, Translations> = {
  en: en as Translations,
  nl: nl as Translations,
  fr: fr as Translations,
};

export function getTranslations(locale: LocaleCode): Translations {
  return LOCALE_TRANSLATIONS[locale] ?? LOCALE_TRANSLATIONS.en;
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
  const translations = React.useMemo(
    () => getTranslations(locale),
    [locale]
  );

  React.useEffect(() => {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    const stored = (raw && isLocaleCode(raw) ? raw : null) ?? DEFAULT_LOCALE;
    setLocaleState(stored);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = locale;
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
    () => ({ t, raw, locale, setLocale, isLoading: false }),
    [t, raw, locale, setLocale]
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
