"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon, MoreVerticalIcon } from "lucide-react";

// TODO(i18n): Re-enable locale picker once translations are finalized.
// import { LocaleSwitcher } from "@/components/locale-switcher";
import {
  PRIMARY_NAV,
  SECONDARY_NAV,
  homeSectionHref,
} from "@/config/navigation";
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
import { SITE } from "@/config/site";
import type { Messages } from "@/messages/en";
import { useLocaleContext } from "@/providers/locale-provider";
import { cn } from "@/lib/utils";

const navLinkClass =
  "text-rc-blue/90 hover:text-rc-blue focus-visible:ring-ring rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-offset-rc-beige";

function getNavLabel(
  item: (typeof PRIMARY_NAV)[number] | (typeof SECONDARY_NAV)[number],
  m: Messages
): string {
  if ("href" in item && item.href === "/peers") return m.nav.peerNetwork;
  if ("id" in item && item.id) {
    const id = item.id;
    if (id === "home") return m.nav.home;
    if (id === "about-us") return m.nav.aboutUs;
    if (id === "our-approach") return m.nav.ourApproach;
    if (id === "our-impact") return m.nav.ourImpact;
    if (id === "contact") return m.nav.contact;
    if (id === "our-team") return m.nav.ourTeam;
    if (id === "our-partners") return m.nav.ourPartners;
    if (id === "events") return m.nav.events;
  }
  return "label" in item ? item.label : "";
}

export function SiteHeader() {
  const { locale, messages: m } = useLocaleContext();

  return (
    <header className="bg-rc-beige/95 supports-backdrop-filter:bg-rc-beige/90 sticky top-0 z-50 border-b border-rc-blue/10 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="text-rc-blue/90 hover:text-rc-blue shrink-0 rounded-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-rc-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige"
        >
          <span className="text-base font-semibold tracking-tight sm:text-lg">{SITE.name}</span>
        </Link>

        <nav
          className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-8"
          aria-label="Main"
        >
          {PRIMARY_NAV.map((item) => (
            <a
              key={"href" in item ? item.href : item.id}
              href={
                "href" in item
                  ? `/${locale}/peers`
                  : homeSectionHref(locale, item.id)
              }
              className={navLinkClass}
            >
              {getNavLabel(item, m)}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-0.5 lg:flex">
          {/* TODO(i18n): Re-enable locale picker once translations are finalized. */}
          {/* <LocaleSwitcher /> */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-rc-blue"
                  aria-label={m.nav.aria.more}
                />
              }
            >
              <MoreVerticalIcon className="size-5" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-44">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-rc-blue/75 text-xs font-normal">
                  {m.nav.more}
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              {SECONDARY_NAV.map((item) =>
                  "href" in item ? (
                    <DropdownMenuItem key={item.href}>
                      <Link href={item.href!} className={navLinkClass}>
                        {getNavLabel(item, m)}
                      </Link>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem key={item.id}>
                      <a
                        href={homeSectionHref(locale, item.id!)}
                        className={navLinkClass}
                      >
                        {getNavLabel(item, m)}
                      </a>
                    </DropdownMenuItem>
                  ),
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-0.5 lg:hidden">
          {/* TODO(i18n): Re-enable locale picker once translations are finalized. */}
          {/* <LocaleSwitcher /> */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-rc-blue/20 text-rc-blue"
                  aria-label={m.nav.aria.openMenu}
                />
              }
            >
              <MenuIcon className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] gap-0">
              <SheetHeader className="border-b border-rc-blue/10 pb-4 text-left">
                <SheetTitle className="text-rc-blue">{m.nav.menu}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
                <p className="text-rc-blue/75 mb-2 text-xs font-medium tracking-wide uppercase">
                  {m.nav.navigate}
                </p>
                {PRIMARY_NAV.map((item) => (
                  <SheetClose
                    key={"href" in item ? item.href : item.id}
                    nativeButton={false}
                    render={
                      <a
                        href={
                          "href" in item
                            ? `/${locale}/peers`
                            : homeSectionHref(locale, item.id)
                        }
                        className={cn(navLinkClass, "block py-2")}
                      />
                    }
                  >
                    {getNavLabel(item, m)}
                  </SheetClose>
                ))}
                <p className="text-rc-blue/75 mt-6 mb-2 text-xs font-medium tracking-wide uppercase">
                  {m.nav.more}
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
                      {getNavLabel(item, m)}
                    </SheetClose>
                  ) : (
                    <SheetClose
                      key={item.id}
                      nativeButton={false}
                      render={
                        <a
                          href={homeSectionHref(locale, item.id!)}
                          className={cn(navLinkClass, "block py-2")}
                        />
                      }
                    >
                      {getNavLabel(item, m)}
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
