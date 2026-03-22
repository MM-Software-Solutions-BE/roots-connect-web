import Image from "next/image";

import { PARTNERS } from "@/data/partners";
import { SectionShell } from "@/components/sections/section-shell";

export function PartnersSection() {
  return (
    <SectionShell
      id="our-partners"
      aria-labelledby="partners-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="partners-heading"
        className="text-rc-blue mb-3 text-3xl font-semibold tracking-tight"
      >
        Our partners
      </h2>
      <p className="text-rc-blue/75 mb-2 max-w-2xl text-pretty text-sm leading-relaxed">
        We work with long-term partners who share our mission. Logos and names below are{" "}
        <strong className="text-rc-blue/90">examples</strong> — your communications team can swap
        them for real entries in <code className="text-rc-brown text-xs">src/data/partners.ts</code>{" "}
        and add files under <code className="text-rc-brown text-xs">public/images/partners/</code>.
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PARTNERS.map((p) => (
          <li key={p.id}>
            <article className="border-rc-blue/15 bg-white/50 flex h-full flex-col rounded-xl border p-5 shadow-sm">
              <div className="border-rc-blue/20 bg-rc-beige/80 relative mb-4 flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg border border-dashed">
                {p.logoSrc ? (
                  <Image
                    src={p.logoSrc}
                    alt=""
                    width={200}
                    height={120}
                    className="object-contain px-4"
                  />
                ) : (
                  <span className="text-rc-blue/40 text-xs font-medium tracking-wide uppercase">
                    Logo placeholder
                  </span>
                )}
              </div>
              <h3 className="text-rc-blue text-base font-semibold">{p.name}</h3>
              {p.tagline ? (
                <p className="text-rc-blue/70 mt-1 text-sm leading-relaxed">{p.tagline}</p>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
