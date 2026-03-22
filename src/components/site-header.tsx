"use client";

import * as React from "react";
import { MenuIcon, MoreVerticalIcon } from "lucide-react";

import { PRIMARY_NAV, SECONDARY_NAV, sectionHref } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinkClass =
  "text-rc-blue/90 hover:text-rc-blue focus-visible:ring-ring rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-offset-rc-beige";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="bg-rc-beige/95 supports-backdrop-filter:bg-rc-beige/90 sticky top-0 z-50 border-b border-rc-blue/10 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href={sectionHref("home")}
          className="text-rc-blue shrink-0 text-lg font-semibold tracking-tight"
        >
          Roots Connect
        </a>

        <nav
          className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-8"
          aria-label="Main"
        >
          {PRIMARY_NAV.map(({ id, label }) => (
            <a key={id} href={sectionHref(id)} className={navLinkClass}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-rc-blue"
                  aria-label="More: team, partners, events"
                />
              }
            >
              <MoreVerticalIcon className="size-5" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-44">
              <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                More
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {SECONDARY_NAV.map(({ id, label }) => (
                <DropdownMenuItem
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="cursor-pointer"
                >
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-rc-blue/20 text-rc-blue"
                  aria-label="Open menu"
                />
              }
            >
              <MenuIcon className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] gap-0">
              <SheetHeader className="border-b border-border pb-4 text-left">
                <SheetTitle className="text-rc-blue">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
                <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                  Navigate
                </p>
                {PRIMARY_NAV.map(({ id, label }) => (
                  <a
                    key={id}
                    href={sectionHref(id)}
                    className={cn(navLinkClass, "py-2")}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <p className="text-muted-foreground mt-6 mb-2 text-xs font-medium tracking-wide uppercase">
                  More
                </p>
                {SECONDARY_NAV.map(({ id, label }) => (
                  <a
                    key={id}
                    href={sectionHref(id)}
                    className={cn(navLinkClass, "py-2")}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
