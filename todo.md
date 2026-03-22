# Roots Connect landingspagina — takenlijst

Bronnen: **Landingspagina informatie.pdf** (hoofdbriefing), **Booklet Roots Connect.pdf** (aanvullende copy/context), **Colors.txt** (kleurenpalet).

Legenda status: **✅** klaar · **🟡** gestart / skeleton · **⬜** nog te doen

**Volgende focus:** hosting (**0.1** / **T.2**) · dedicated **OG 1200×630** · §8.2 formulier · optioneel **Dependabot** (**T.16**).

---

## Subtaken — open details (TBD)

| Ref | Hoofdtask | Subtaak | Status |
|-----|-----------|---------|--------|
| 0.4a | 0.4 Logo | Bestand: `public/images/brand/roots-connect-logo.jpeg` (hernoemd van `logo.jpeg`) | ✅ |
| 0.4b | 0.4 | Header: `SiteLogo` + `next/image`, `alt="Roots Connect"` | ✅ |
| 0.4c | 0.4 | Footer: zelfde logo in lichte box op donkere footer | ✅ |
| 0.4d | 0.4 | Optioneel: witte/monochrome variant voor footer zonder box | ⬜ |
| 0.5a | 0.5 / T.15 | `metadataBase` (`SITE_URL`), canonical `/` + `/privacy`, OG + Twitter summary | ✅ |
| 0.5b | 0.5 | `openGraph.images` + Twitter: nu **logo** als placeholder; ideaal: apart beeld **1200×630** | 🟡 |
| 0.5c | 0.5 | `twitter:card` **summary_large_image** (met placeholder-logo) | ✅ |
| 3.x | §3 | Copy finetunen na goedkeuring klant (tone, lengte) | ⬜ |
| 5.x | §5.2 | Afstemmen: booklet zegt **4** collaboraties, PDF zegt “Multiple” — één wording kiezen | ⬜ |
| 6.x | §6 | Foto’s: Redouan + Anass in `team/*.png`; Houda, Mina, Yuan nog toevoegen → `src/data/team.ts` | 🟡 |
| 8.x | §8.2 | Kiezen: alleen `mailto:` vs. formulier (Netlify/Vercel/Resend) + spamstrategie | ⬜ |
| 9.x | §9 | LinkedIn + Instagram gezet ([company](https://be.linkedin.com/company/roots-connectnetwork), @rootsconnectnetwork) | ✅ |
| 10.x | §10 | Privacytekst door klant of template BE | ⬜ |

---

## 0. Project & basis

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ⬜ | 0.1 | Domein/hosting koppelen aan **rootsconnect.be** (DNS, HTTPS). | PDF landingspagina |
| ✅ | 0.2 | Design tokens / thema: kleuren uit **Colors.txt** in Tailwind/shadcn (`#f3f3e7` beige, `#0e293e` blauw, `#A28772` bruin). Zie `globals.css` (`rc-*` + semantische vars). | Colors.txt |
| ✅ | 0.3 | Typografie en basislayout (max-width, sectie-rhythm). `SectionShell` + Geist als `--font-sans`. | Algemeen |
| ✅ | 0.4 | **Logo** header + footer (`SiteLogo`, `public/images/brand/roots-connect-logo.jpeg`). | PDF landingspagina |
| 🟡 | 0.5 | Metadata SEO: `metadataBase`, OG/Twitter met placeholder-beeld, canonicals. *Nog:* professioneel **OG 1200×630** (zie **0.5b**). | PDF + booklet |

---

## 1. Navigatie (header)

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ✅ | 1.1 | Horizontale nav: **Home · About Us · Our Approach · Our Impact · Contact** (ankers). Config: `src/config/navigation.ts`, UI: `src/components/site-header.tsx`. | PDF |
| ✅ | 1.2 | Rechts: **dropdown met ⋮** (More-vertical icoon) met **Our Team**, **Our Partners**, **Events**. | PDF |
| ✅ | 1.3 | Submenu → **`#our-team`**, **`#our-partners`**, **`#events`** (dropdown + mobiel menu). | PDF |
| ✅ | 1.4 | **Sticky** header (`sticky top-0`), **lg** breakpoint: desktop-nav + ⋮; kleiner scherm: **Sheet**-menu met alle links. Focus-styles op links. | PDF + best practice |

---

## 2. Sectie — Home (hero / bovenaan)

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ✅ | 2.1 | Tagline: **"Connecting roots through law"**. | PDF |
| ✅ | 2.2 | Subtitel: **"Empowering the next generation of legal talent"**. | PDF |
| ✅ | 2.3 | Korte introductietekst (Belgian network, underrepresented backgrounds, bicultural, first-generation). *Tekst in* `home-section.tsx` (`INTRO_COPY`). | PDF |
| ✅ | 2.4 | CTA-knop **"Stay informed about our upcoming events"** → **`#contact`**. | PDF |

**Subtaken (optioneel later):**

| Ref | Subtaak | Status |
|-----|---------|--------|
| 2.a | Tweede alinea of highlight als klant meer copy wil | ⬜ |
| 2.b | Achtergrond / decoratief element (patroon, foto) — alleen als gewenst | ⬜ |

---

## 3. Sectie — About Us (+ Our Mission)

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ✅ | 3.1 | Tekst: oprichting door drie lawyers, namen en rollen + brug naar sector. *In* `about-section.tsx`. | PDF |
| ✅ | 3.2 | Alinea’s: analyse juridisch beroep / representatie / first-generation / percepties en barrières. | PDF |
| ✅ | 3.3 | Blok **Our Mission** (visie: diversiteit, geen barrière door achtergrond, topniveau). Visueel: linkse border + `Our mission`. | PDF |
| ✅ | 3.4 | Mission: non-profit, inclusief netwerk, bicultural + first-generation. | PDF |
| ✅ | 3.5 | CTA **"Become our partner"** → **`#contact`** (`PrimaryCtaLink`). | PDF |

---

## 4. Sectie — Our Approach

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ✅ | 4.1 | Inleiding: brug + aanspreekpunt voor legal careers. | PDF |
| ✅ | 4.2 | Pijler 1 — **Impactful events**. | PDF |
| ✅ | 4.3 | Pijler 2 — **Dialogue with the sector**. | PDF |
| ✅ | 4.4 | Pijler 3 — **Sustainable partnerships**. | PDF |

---

## 5. Sectie — Our Impact

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ✅ | 5.1 | UI: tegels met prominente stat + beschrijving. *In* `impact-section.tsx`. | PDF |
| 🟡 | 5.2 | Tegel 1: nu **“Multiple”** (PDF-tekst). Subtaak **5.x**: eventueel **“4”** als klant booklet volgt. | PDF + booklet |
| ✅ | 5.3 | Tegel 2: **10,000+** monthly views (social). | PDF + booklet |
| ✅ | 5.4 | Tegel 3: **170+** leden community. | PDF + booklet |
| ✅ | 5.5 | Tegel 4: ad hoc support / studentenvragen. | PDF + booklet |

---

## 6. Sectie — Our Team

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ✅ | 6.1 | Per persoon: **foto** (indien beschikbaar), naam, functie, rechtsdomein. Data: `src/data/team.ts`, UI: `team-section.tsx`. | PDF |
| ✅ | 6.2 | Redouan Lakhal — foto `redouan-lakhal.png`. | PDF |
| ✅ | 6.3 | Anass Arbage — foto `anass-arbage.png`. | PDF |
| 🟡 | 6.4 | Houda Berrada — nog geen foto (placeholder). | PDF |
| 🟡 | 6.5 | Mina Boel — nog geen foto (placeholder). | PDF |
| 🟡 | 6.6 | Yuan Sun — nog geen foto (placeholder). | PDF |

---

## 7. Sectie — Our Partners

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| 🟡 | 7.1 | Grid met **voorbeeld-partners** (duidelijk gelabeld). Vervang in `src/data/partners.ts` + `public/images/partners/`. | PDF |
| ✅ | 7.2 | Structuur: `PartnerEntry[]` in `partners.ts`, optioneel `logoSrc`. | PDF |

---

## 8. Sectie — Contact (+ Events in navigatie)

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| 🟡 | 8.1 | **Contact:** kaart met `SITE.email`, LinkedIn/Instagram, placeholder telefoon/adres. | PDF |
| ⬜ | 8.2 | Formulier vs. mailto + eventuele bevestiging (nu o.a. `mailto` met subject voor events). | Best practice |
| 🟡 | 8.3 | **Events:** voorbeelden in `src/data/events.ts`, CTA naar `#contact`. Vervang door echte agenda. | PDF |

---

## 9. Footer

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ✅ | 9.1 | Quicklinks **LinkedIn**, **Instagram** (`site.ts`, officiële company + IG). | PDF |
| 🟡 | 9.2 | Contact: e-mail **info@rootsconnect.be**; telefoon/adres indien beschikbaar. | PDF |
| ✅ | 9.3 | **Ondernemingsnummer:** BE1026.631.469. | PDF |
| ✅ | 9.4 | Link naar **Privacy Policy** → `/privacy`. | PDF |
| ✅ | 9.5 | Onderaan **©** + jaartal + **Website:** credit (`SITE.webCredit` in `site.ts`). | PDF |
| ✅ | 9.6 | Logo onderaan (in footer). | PDF |
| ✅ | — | `site-footer.tsx`: grid Follow / Contact / Legal. | — |

---

## 10. Privacy & juridisch

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| 🟡 | 10.1 | Pagina **`/privacy`** — startertekst (EN); juridisch laten nakijken voor BE/GDPR. | PDF |
| 🟡 | 10.2 | **Cookiebanner** (`CookieBanner`) + `localStorage`; keuze essential / all. GA later: alleen laden bij `consentAllowsAnalytics()` in `cookie-consent.ts`. | GDPR |

---

## 11. Assets & content (niet-code)

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ⬜ | 11.1 | Officiële **foto’s team** (6 personen), rechten en crop. | PDF |
| ⬜ | 11.2 | **Logo**-bestanden (SVG/PNG), lichte/donkere variant indien nodig. | PDF |
| ⬜ | 11.3 | **Partnerlogo’s** wanneer beschikbaar. | PDF |
| ⬜ | 11.4 | URLs **LinkedIn** en **Instagram** Roots Connect. | PDF + booklet (QR verwijst naar zelfde) |

---

## 12. Booklet-only (optioneel op de site)

| Status | ID | Taak | Bron |
| :---: |----|------|------|
| ⬜ | 12.1 | Booklet heeft extra copy (problem statement, statistieken studenten-angst, oplossing, “Let’s connect”). Niet allemaal verplicht op landingspagina; alleen overnemen als klant dat wil. | Booklet |
| ⬜ | 12.2 | Booklet vermeldt oprichting **augustus 2025** en kantoren founders — optioneel in About. | Booklet |
| ⬜ | 12.3 | QR-codes in print → op site niet verplicht; zelfde links als footer/contact. | Booklet |

---

## T. Technisch / kwaliteit (niet zichtbaar als “feature” voor de gemiddelde bezoeker)

Taken die vooral **betrouwbaarheid, onderhoud, SEO-techniek, veiligheid en prestaties** verbeteren.

| Status | ID | Taak | Opmerking |
| :---: |----|------|-----------|
| ✅ | T.1 | **GitHub Actions** `.github/workflows/ci.yml`: `npm ci`, `lint`, `build`. | Voorkomt kapotte deploys. |
| ⬜ | T.2 | **Hosting** kiezen en **build output** valideren (Vercel/Netlify/Cloudflare Pages + Next.js). | Hoort bij 0.1 maar incl. preview-URLs. |
| ✅ | T.3 | **`robots.ts`** + **`sitemap.ts`** → `/robots.txt`, `/sitemap.xml` (`SITE_URL`). | Crawlers; geen UI. |
| 🟡 | T.4 | **`app/icon.jpg`** + **`app/apple-icon.jpg`** (kopie logo). *Optioneel:* `manifest`, aparte `.ico`. | Tab/bladwijzer. |
| ✅ | T.5 | **JSON-LD** `Organization` + `WebSite` (`JsonLd` in `layout.tsx`). | Rich results mogelijk. |
| ⬜ | T.6 | **Security headers** in `next.config` (o.a. HSTS via platform, `X-Frame-Options`, CSP indien haalbaar). | Geen zichtbare feature. |
| ⬜ | T.7 | **Images**: `next/image`, formaten en sizes; lazy loading waar passend. | Sneller laden. |
| ⬜ | T.8 | **Fonts**: subset/limit FOIT; geen onnodige font-weights. | Performance. |
| ✅ | T.9 | **`not-found.tsx`** + `#main` op 404/home/privacy. | Professioneel. |
| 🟡 | T.10 | **`.env.example`** (placeholders). *Geen secrets in repo.* | Alleen voor developers. |
| ⬜ | T.11 | **Analytics** alleen als afgesproken: privacy-friendly + verwerkers in privacytekst. | Kruis met **10.x**. |
| ⬜ | T.12 | **Error monitoring** (optioneel, bv. Sentry) op productie. | Developers. |
| ⬜ | T.13 | **Lighthouse / Core Web Vitals** baseline vóór launch (mobile + desktop). | KPI. |
| 🟡 | T.14 | **Skip link** (`SkipLink` → `#main`). *Nog:* volledige audit. | Kwaliteit. |
| 🟡 | T.15 | **`metadata`/`opengraph`**: `metadataBase`, OG + Twitter images (placeholder logo). *Nog:* **dedicated OG asset 1200×630**. |
| ⬜ | T.16 | **Dependencies**: periodiek `npm audit` / Dependabot; major upgrades gepland. | Onderhoud. |
| ⬜ | T.17 | **E-mail vanaf domein** (SPF, DKIM, DMARC) als je later mail vanaf @rootsconnect.be stuurt. | DNS. |

---

## Codebase (i.v.m. taken)

| Pad | Inhoud |
|-----|--------|
| `src/app/page.tsx` | Home + `metadata.canonical` `/` |
| `src/app/globals.css` | Brand tokens `rc-*`, shadcn-variabelen |
| `src/app/layout.tsx` | `metadataBase`, OG, Twitter, fonts |
| `src/app/sitemap.ts` | Sitemap voor `/` en `/privacy` |
| `src/app/robots.ts` | `robots.txt` + sitemap-URL |
| `src/app/not-found.tsx` | 404-pagina |
| `src/app/icon.jpg` / `apple-icon.jpg` | Favicon (placeholder: logo) |
| `src/components/json-ld.tsx` | Schema.org Organization + WebSite |
| `src/components/skip-link.tsx` | Skip naar `#main` |
| `.github/workflows/ci.yml` | Lint + build op push/PR |
| `.env.example` | Placeholder env-documentatie |
| `src/components/cookie-banner.tsx` | Onderste balk, huisstijl |
| `src/lib/cookie-consent.ts` | Opslag + `consentAllowsAnalytics()` voor latere GA |
| `src/config/navigation.ts` | `PRIMARY_NAV`, `SECONDARY_NAV`, ankers |
| `src/config/site.ts` | `SITE_URL`, e-mail, KBO, social URLs, footer-credit |
| `src/data/partners.ts` | Partnerkaarten (placeholders + optioneel `logoSrc`) |
| `src/data/events.ts` | Eventvoorbeelden voor §Events |
| `src/app/privacy/page.tsx` | Privacy Policy (starter) |
| `src/components/site-header.tsx` | Sticky nav, desktop links, ⋮-dropdown, mobiel Sheet |
| `src/components/site-logo.tsx` | `next/image` logo (`/images/brand/roots-connect-logo.jpeg`) |
| `src/data/team.ts` | Teamleden + image-paden |
| `public/images/brand/roots-connect-logo.jpeg` | Logo (bron: `logo.jpeg`) |
| `public/images/team/redouan-lakhal.png` | Redouan (bron: `redouane.png`) |
| `public/images/team/anass-arbage.png` | Anass (bron: `anas.png`) |
| `src/components/primary-cta-link.tsx` | Herbruikbare primaire CTA-knop (`#contact`) |
| `src/components/sections/` | `home-section`, `about-section`, `approach-section`, `impact-section`, `team-section`, `partners-section`, `events-section`, `contact-section`, `site-footer`, `section-shell`, `index.ts` |

---

## Voortgang

- **Legenda** bovenaan (✅ / 🟡 / ⬜).
- **Volgorde suggestie:** **1** (nav) → **2–9** (content + footer) → **10** + **11** assets → **T** pre-launch.
- **Laatste update:** cookiebanner + privacy §4; `consentAllowsAnalytics()` voor toekomstige GA. *Build:* `npm run build` slaagt.
