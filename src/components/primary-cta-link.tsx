import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const baseClass =
  "bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 min-w-0 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent px-4 text-sm font-medium transition-colors outline-none select-none focus-visible:ring-3";

type PrimaryCtaLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Primary call-to-action anchor (server-safe; avoids importing client `button`). */
export function PrimaryCtaLink({ href, children, className }: PrimaryCtaLinkProps) {
  return (
    <a href={href} className={cn(baseClass, "w-full min-[480px]:w-auto", className)}>
      {children}
    </a>
  );
}
