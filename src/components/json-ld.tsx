import { SITE, SITE_URL } from "@/config/site";

const logoUrl = `${SITE_URL}/images/brand/roots-connect-logo.jpeg`;

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE_URL,
    logo: logoUrl,
    email: SITE.email,
    identifier: SITE.companyNumber,
    sameAs: [SITE.social.linkedin, SITE.social.instagram],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
