"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

/** Brand asset: `public/images/brand/roots-connect-logo.jpeg` */
export const LOGO_SRC = "/images/brand/roots-connect-logo.jpeg";
export const LOGO_SRC_NAV = "/images/brand/roots-connect-logo-nav.png";

type SiteLogoProps = {
  className?: string;
  /** Size presets for common placements */
  variant?: "nav" | "header" | "footer";
  priority?: boolean;
};

export function SiteLogo({ className, variant = "header", priority }: SiteLogoProps) {
  const h =
    variant === "nav"
      ? "h-[32px] sm:h-[34px]"
      : variant === "header"
        ? "h-8 sm:h-9"
        : "h-12 sm:h-14";
  return (
    <Image
      src={variant === "nav" ? LOGO_SRC_NAV : LOGO_SRC}
      alt="Roots Connect"
      width={200}
      height={64}
      priority={priority}
      className={cn("w-auto object-contain object-left", h, className)}
    />
  );
}
