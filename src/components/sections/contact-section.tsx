"use client";

import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { ContactForm } from "@/components/contact-form";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSectionHref } from "@/config/navigation";
import { GOOGLE_FORM_EVENT_UPDATES } from "@/config/site";
import { useLocaleContext } from "@/providers/locale-provider";

export function ContactSection() {
  const { messages: m, locale } = useLocaleContext();
  return (
    <SectionShell id="contact" aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="text-rc-blue mb-8 text-3xl font-semibold tracking-tight"
      >
        {m.contact.title}
      </h2>
      <p className="text-rc-blue/85 mb-10 max-w-2xl text-pretty leading-relaxed">
        {m.contact.intro}
      </p>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        <div className="min-w-0 flex-1">
          <h3 className="text-rc-blue mb-4 text-xs font-semibold uppercase tracking-wider">
            {m.contact.sendMessage}
          </h3>
          <ContactForm />
        </div>
        <div className="shrink-0 lg:w-72">
          <h3 className="text-rc-blue mb-4 text-xs font-semibold uppercase tracking-wider">
            {m.contact.stayInformed}
          </h3>
          <p className="text-rc-blue/80 mb-4 text-sm">
            {m.contact.stayInformedDesc}
          </p>
          <PrimaryCtaLink
            href={GOOGLE_FORM_EVENT_UPDATES ?? homeSectionHref(locale, "contact")}
            className="bg-rc-blue text-rc-beige hover:bg-rc-blue/90"
          >
            {m.contact.signUpEvents}
          </PrimaryCtaLink>
        </div>
      </div>
    </SectionShell>
  );
}
