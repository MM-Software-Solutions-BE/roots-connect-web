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

export default function Home() {
  return (
    <>
      <main>
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
