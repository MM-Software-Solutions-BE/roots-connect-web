import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { ContactForm } from "@/components/contact-form";
import { SectionShell } from "@/components/sections/section-shell";
import { SITE } from "@/config/site";

export function ContactSection() {
  return (
    <SectionShell id="contact" aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="text-rc-blue mb-4 text-3xl font-semibold tracking-tight"
      >
        Contact
      </h2>
      <p className="text-rc-blue/85 mb-8 max-w-2xl text-pretty leading-relaxed">
        Questions about our events, partnerships, or how to get involved? Reach out — we&apos;ll get
        back to you as soon as we can.
      </p>

      <div className="mb-10">
        <h3 className="text-rc-blue mb-4 text-sm font-semibold tracking-wide uppercase">
          Stuur ons een bericht
        </h3>
        <ContactForm />
      </div>

      <div className="mb-10 grid gap-8 sm:grid-cols-2">
        <div className="border-rc-blue/15 bg-white/40 max-w-xl rounded-xl border p-6 shadow-sm">
          <h3 className="text-rc-blue mb-4 text-sm font-semibold tracking-wide uppercase">
            Adresgegevens
          </h3>
          <div className="text-rc-blue/70 space-y-1 text-sm leading-relaxed">
            <p>{SITE.legalName}</p>
            <p>{SITE.address[0]}</p>
            <p>{SITE.address[1]}</p>
            <p>Ondernemingsnr. {SITE.companyNumber}</p>
            <p>Bank: {SITE.bankAccount}</p>
          </div>
          <div className="border-rc-blue/10 mt-4 flex flex-wrap gap-4 border-t pt-4 text-sm">
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rc-blue font-medium underline decoration-rc-brown/40 underline-offset-4 hover:decoration-rc-brown"
            >
              LinkedIn
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rc-blue font-medium underline decoration-rc-brown/40 underline-offset-4 hover:decoration-rc-brown"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-rc-blue mb-4 text-sm font-semibold tracking-wide uppercase">
            Blijf op de hoogte van events
          </h3>
          <p className="text-rc-blue/80 mb-3 text-sm">
            Schrijf je in voor updates over onze aankomende events.
          </p>
          <PrimaryCtaLink href={SITE.googleFormEventUpdates ?? "#contact"}>
            Inschrijven voor events
          </PrimaryCtaLink>
        </div>
      </div>
    </SectionShell>
  );
}
