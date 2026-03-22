"use client";

import * as React from "react";
import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { isLocaleCode, LOCALE_STORAGE_KEY, LOCALES, type LocaleCode } from "@/config/locales";

export function LanguageMenu() {
  const [locale, setLocale] = React.useState<LocaleCode>("en");

  React.useEffect(() => {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (raw && isLocaleCode(raw)) setLocale(raw);
  }, []);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[2];

  const handleChange = React.useCallback((value: string | null) => {
    if (!value || !isLocaleCode(value)) return;
    setLocale(value);
    localStorage.setItem(LOCALE_STORAGE_KEY, value);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-rc-blue hover:bg-rc-blue/10 gap-1.5 px-2 font-normal"
            aria-label={`Language: ${current.name}. Site content is English only for now.`}
          />
        }
      >
        <Languages className="size-4 shrink-0" aria-hidden />
        <span className="text-xs font-semibold tabular-nums">{current.short}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
            Language
          </DropdownMenuLabel>
          <p className="text-muted-foreground px-1.5 pb-1 text-[0.65rem] leading-snug">
            Translations coming soon — content stays in English.
          </p>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={locale} onValueChange={handleChange}>
          {LOCALES.map((l) => (
            <DropdownMenuRadioItem
              key={l.code}
              value={l.code}
              className="cursor-pointer"
              closeOnClick
            >
              <span className="font-medium tabular-nums">{l.short}</span>
              <span className="text-muted-foreground ml-2">{l.name}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
