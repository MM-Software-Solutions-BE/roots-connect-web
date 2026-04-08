"use client";

import Link from "next/link";
import { useEffect } from "react";

import { buttonVariants } from "@/components/ui/button";
import { defaultLocale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function AppError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main"
      className="bg-rc-beige text-rc-blue flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 text-center sm:py-16 lg:py-20"
    >
      <p className="text-rc-brown mb-2 text-sm font-medium">Error</p>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <p className="text-rc-blue/80 mb-8 max-w-md text-pretty">
        Please try again. If the problem persists, return to the home page.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className={cn(buttonVariants({ size: "default" }))}
        >
          Try again
        </button>
        <Link
          href={`/${defaultLocale}`}
          className={cn(buttonVariants({ variant: "outline", size: "default" }))}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
