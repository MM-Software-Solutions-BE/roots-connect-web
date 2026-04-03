import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, isLocale } from "@/i18n/config";

const FILE_EXTENSION = /\.[^/]+$/;

/** Next.js metadata/manifest op root — geen locale-prefix. */
const ROOT_METADATA_SEGMENTS = new Set([
  "icon",
  "apple-icon",
  "opengraph-image",
  "twitter-image",
  "manifest.webmanifest",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || FILE_EXTENSION.test(pathname)) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 1 && ROOT_METADATA_SEGMENTS.has(segments[0]!)) {
    return NextResponse.next();
  }

  if (segments.length === 0) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  if (isLocale(segments[0]!)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}/${segments.join("/")}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
