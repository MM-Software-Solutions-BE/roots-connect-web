"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon, MoreVerticalIcon } from "lucide-react";

import { PRIMARY_NAV, SECONDARY_NAV, sectionHref } from "@/config/navigation";
import { useTranslations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageMenu } from "@/components/language-menu";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinkClass =
  "text-rc-blue/90 hover:text-rc-blue focus-visible:ring-ring rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-offset-rc-beige";

const NAV_LABEL_KEYS: Record<string, string> = {
  home: "nav.home",
  "about-us": "nav.aboutUs",
  "our-approach": "nav.ourApproach",
  "our-impact": "nav.ourImpact",
  contact: "nav.contact",
  "our-team": "nav.ourTeam",
  "our-partners": "nav.ourPartners",
  events: "nav.events",
};

function getNavLabel(item: { id?: string; href?: string; label: string }, t: (k: string) => string): string {
  if (item.href === "/peers") return t("nav.peerNetwork");
  return item.id ? t(NAV_LABEL_KEYS[item.id] ?? "nav.home") : item.label;
}

export function SiteHeader() {
  const { t } = useTranslations();
  return (
    <header className="bg-rc-beige/95 supports-backdrop-filter:bg-rc-beige/90 sticky top-0 z-50 border-b border-rc-blue/10 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href={sectionHref("home")}
          className="text-rc-blue/90 hover:text-rc-blue shrink-0 rounded-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-rc-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige"
        >
          <span className="text-base font-semibold tracking-tight sm:text-lg">{SITE.name}</span>
        </a>

        <nav
          className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-8"
          aria-label="Main"
        >
          {PRIMARY_NAV.map(({ id, label }) => (
            <a key={id} href={sectionHref(id)} className={navLinkClass}>
              {getNavLabel({ id, label }, t)}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-0.5 lg:flex">
          <LanguageMenu />
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-rc-blue"
                  aria-label={t("nav.aria.more")}
                />
              }
            >
              <MoreVerticalIcon className="size-5" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-44">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                  {t("nav.more")}
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              {SECONDARY_NAV.map((item) =>
                "href" in item ? (
                  <DropdownMenuItem key={item.href}>
                    <Link href={item.href!} className={navLinkClass}>
                      {getNavLabel(item, t)}
                    </Link>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem key={item.id}>
                    <Link
                      href={`/${sectionHref(item.id!)}`}
                      className={navLinkClass}
                    >
                      {getNavLabel(item, t)}
                    </Link>
                  </DropdownMenuItem>
                ),
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-0.5 lg:hidden">
          <LanguageMenu />
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-rc-blue/20 text-rc-blue"
                  aria-label={t("nav.aria.openMenu")}
                />
              }
            >
              <MenuIcon className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] gap-0">
              <SheetHeader className="border-b border-border pb-4 text-left">
                <SheetTitle className="text-rc-blue">{t("nav.menu")}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
                <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                  {t("nav.navigate")}
                </p>
                {PRIMARY_NAV.map(({ id, label }) => (
                  <SheetClose
                    key={id}
                    nativeButton={false}
                    render={
                      <a
                        href={sectionHref(id)}
                        className={cn(navLinkClass, "py-2")}
                      />
                    }
                  >
                    {getNavLabel({ id, label }, t)}
                  </SheetClose>
                ))}
                <p className="text-muted-foreground mt-6 mb-2 text-xs font-medium tracking-wide uppercase">
                  {t("nav.more")}
                </p>
                {SECONDARY_NAV.map((item) =>
                  "href" in item ? (
                    <SheetClose
                      key={item.href}
                      nativeButton={false}
                      render={
                        <Link
                          href={item.href!}
                          className={cn(navLinkClass, "block py-2")}
                        />
                      }
                    >
                      {getNavLabel(item, t)}
                    </SheetClose>
                  ) : (
                    <SheetClose
                      key={item.id}
                      nativeButton={false}
                      render={
                        <a
                          href={`/${sectionHref(item.id!)}`}
                          className={cn(navLinkClass, "block py-2")}
                        />
                      }
                    >
                      {getNavLabel(item, t)}
                    </SheetClose>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
