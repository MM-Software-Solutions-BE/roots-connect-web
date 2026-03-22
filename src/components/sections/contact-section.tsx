import { PrimaryCtaLink } from "@/components/primary-cta-link";
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

      <div className="border-rc-blue/15 bg-white/40 max-w-xl rounded-xl border p-6 shadow-sm">
        <h3 className="text-rc-blue mb-4 text-sm font-semibold tracking-wide uppercase">
          Get in touch
        </h3>
        <p className="text-rc-blue/90 mb-4">
          <span className="text-rc-blue/70 mr-2 text-sm">Email</span>
          <a
            href={`mailto:${SITE.email}`}
            className="text-rc-blue font-medium underline decoration-rc-brown/40 underline-offset-4 hover:decoration-rc-brown"
          >
            {SITE.email}
          </a>
        </p>
        <p className="text-rc-blue/60 mb-6 text-sm">
          Phone or postal address can be added here when available (placeholder).
        </p>
        <div className="border-rc-blue/10 flex flex-wrap gap-4 border-t pt-4 text-sm">
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

      <div className="mt-10">
        <p className="text-rc-blue/80 mb-3 text-sm font-medium">
          Stay informed about upcoming events
        </p>
        <PrimaryCtaLink href={`mailto:${SITE.email}?subject=Events%20updates`}>
          Email us for event updates
        </PrimaryCtaLink>
        <p className="text-rc-blue/60 mt-2 text-xs">
          Placeholder CTA — replace with a newsletter or form when you use one (see todo §8.2).
        </p>
      </div>
    </SectionShell>
  );
}
