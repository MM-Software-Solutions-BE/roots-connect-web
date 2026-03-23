# Roots Connect — Feedback Todo (23/03/2026)

Bronnen:
- WhatsApp feedback (Redouan, Anass, Mohamed) van 23/03/2026
- Referentie peer-pagina: [Bridges Peer Network](https://www.bridgesnetwork.nl/copy-of-peer-network)

Statuslegende: ⬜ nog te doen · 🟡 wacht op klant · ✅ klaar

---

## Wat nog moet gebeuren

### Door ontwikkelaar

| Item | Status | Locatie / actie |
|------|--------|-----------------|
| **CTA 1** Google Form koppelen | 🟡 | `site.ts` → `googleFormEventUpdates: "URL"` invullen zodra klant link bezorgt |
| **CTA 2** mailto info@ | ✅ | `contact-section.tsx` + `mailto-links.ts` |
| **Tekstuitlijning** rest secties | ⬜ | About, Impact, Events, Contact nalopen |
| **Handleiding** zelf wijzigen | ⬜ | Korte README: team, events, peers bewerken |
| **Hostingadvies** | ⬜ | Vercel gratis tier / abonnementen uitleggen |

### Door klant (content-aanlevering)

| Item | Status |
|------|--------|
| **Teamfoto's** via Google Drive | ⬜ |
| **Samenwerkingfoto's** (studenten) | ⬜ |
| **Eventfoto's** (3 events) | ⬜ |
| **Google Form** link voor event-updates | ⬜ |
| **Definitieve events-tekst** (datum/locatie) | ⬜ |

---

## Al afgerond (code-gerelateerd)

### Design & layout
- ✅ **Kleurschema**: blauw achtergrond (#0e293e), beige typography (#f3f3e7) — hele site
- ✅ **Pillars**: Our Approach als cards (`approach-section.tsx`)
- ✅ **Hero foto-first** op mobiel, workshopfoto (`hero-workshop.jpeg`)

### Content
- ✅ **Typo** Anass Arbage: spatie + komma’s (`about-section.tsx`)
- ✅ **Events** 3 namen zonder foto’s (`events.ts`, `events-section.tsx`)
- ✅ **Levl** sponsor (`partners.ts`)
- ✅ **Adresgegevens**: Koningslaan 107, 1190 Vorst, KBO, bank (`site.ts`)

### Peers
- ✅ **Peer-pagina** `/peers` Bridges-style (`app/peers/page.tsx`)
- ✅ **Data-structuur** TEAM_LEADS, PEERS, TEAM_MEMBERS (`team.ts`)
- ✅ **Navigatie** "Peer Network" onder More (`navigation.ts`)
- ✅ **Hero CTA** "Vind een peer in ons netwerk" (`home-section.tsx`)

### CTA-structuur
- ✅ **Config** `googleFormEventUpdates` in `site.ts` — invullen = "Stay informed" wijst naar formulier
- ✅ **Hero + Events** "Stay informed" gebruiken deze config (fallback: #contact)
- ✅ **Contact-sectie** mailto naar info@ voor algemeen + event-updates

---

## Bestandsreferenties (voor zelf bewerken)

| Wat wijzigen | Bestand |
|--------------|---------|
| Events toevoegen/wijzigen | `src/data/events.ts` |
| Team/peers wijzigen | `src/data/team.ts` |
| Partners/sponsors | `src/data/partners.ts` |
| Site-gegevens (email, adres, Google Form URL) | `src/config/site.ts` |
| Hero-foto | `src/data/home-media.ts` + `public/images/home/` |
| About-tekst | `src/components/sections/about-section.tsx` |

---

## Onduidelijk (nog te bevestigen)

1. **Ondernemingsnummer**: weergeven als 1026.631.469 of BE1026.631.469?
2. **Eventfoto's**: terug toevoegen zodra Drive-levering? (nu uitgeschakeld)
3. **Levl**: exacte logo-URL en website?
