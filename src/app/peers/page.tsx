import type { Metadata } from "next";

import { defaultOgImages } from "@/config/og";
import { SITE } from "@/config/site";
import { PeersContent } from "./peers-content";

const pageTitle = "Peer Network";
const pageDescription =
  "Connect with Roots Connect team leads. Our peers are ready to answer your questions about careers in law and support students from underrepresented backgrounds.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/peers",
  },
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "/peers",
    siteName: SITE.name,
    title: pageTitle,
    description: pageDescription,
    images: defaultOgImages,
  },
};

export default function PeersPage() {
  return <PeersContent />;
}
