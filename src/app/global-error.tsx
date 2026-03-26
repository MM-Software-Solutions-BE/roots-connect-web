"use client";

import { useEffect } from "react";

import "./globals.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Replaces the root layout on uncaught errors — must include `html` / `body`.
 */
export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-rc-beige text-rc-blue flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center antialiased">
        <p className="text-rc-brown text-sm font-medium">Critical error</p>
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="text-rc-blue/80 max-w-md text-sm">
          Please refresh the page or try again later.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
