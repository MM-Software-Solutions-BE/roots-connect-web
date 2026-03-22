import type { Metadata } from "next";

import { defaultOgImages } from "@/config/og";
import { SITE_DESCRIPTION } from "@/config/site";
import {
  AboutSection,
  ApproachSection,
  ContactSection,
  EventsSection,
  HomeSection,
  ImpactSection,
  PartnersSection,
  SiteFooter,
  TeamSection,
} from "@/components/sections";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Roots Connect",
    description: SITE_DESCRIPTION,
    images: defaultOgImages,
  },
};

export default function Home() {
  return (
    <>
      <main id="main" tabIndex={-1}>
        <HomeSection />
        <AboutSection />
        <ApproachSection />
        <ImpactSection />
        <TeamSection />
        <PartnersSection />
        <EventsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
