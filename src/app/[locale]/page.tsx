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

export default function HomePage() {
  return (
    <>
      <main id="main" tabIndex={-1}>
        <HomeSection />
        <AboutSection />
        <EventsSection />
        <ApproachSection />
        <ImpactSection />
        <TeamSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
