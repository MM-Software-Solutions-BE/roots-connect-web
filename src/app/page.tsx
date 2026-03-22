import type { Metadata } from "next";

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
