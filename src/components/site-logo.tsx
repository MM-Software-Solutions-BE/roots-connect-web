"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

/** Brand asset: `public/images/brand/roots-connect-logo.jpeg` */
export const LOGO_SRC = "/images/brand/roots-connect-logo.jpeg";

type SiteLogoProps = {
  className?: string;
  /** Smaller in header, slightly larger in footer */
  variant?: "header" | "footer";
  priority?: boolean;
};

export function SiteLogo({ className, variant = "header", priority }: SiteLogoProps) {
  const h = variant === "header" ? "h-8 sm:h-9" : "h-12 sm:h-14";
  return (
    <Image
      src={LOGO_SRC}
      alt="Roots Connect"
      width={200}
      height={64}
      priority={priority}
      className={cn("w-auto object-contain object-left", h, className)}
    />
  );
}
