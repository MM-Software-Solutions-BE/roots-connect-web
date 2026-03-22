import { SectionShell } from "@/components/sections/section-shell";

export function ContactSection() {
  return (
    <SectionShell id="contact" aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="text-rc-blue mb-8 text-3xl font-semibold tracking-tight"
      >
        Contact
      </h2>
      <p className="text-rc-blue/80 mb-4">
        <a
          href="mailto:info@rootsconnect.be"
          className="text-rc-blue font-medium underline decoration-rc-brown/40 underline-offset-4 hover:decoration-rc-brown"
        >
          info@rootsconnect.be
        </a>
      </p>
      <p className="text-rc-blue/70 text-sm">{/* todo §8 — form, phone, address */}</p>
    </SectionShell>
  );
}
