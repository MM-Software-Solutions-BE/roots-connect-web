# Roots Connect — Feedback Todo (31/03/2026)

Bronnen:
- WhatsApp feedback (Redouan/Anass/Mohamed) + extra notes 31/03/2026

Statuslegende: ⬜ nog te doen · 🟡 wacht op klant/confirm · ✅ klaar

---

## Wat nog moet gebeuren

### Door ontwikkelaar

| Item | Status | Locatie / actie |
|------|:------:|-----------------|
| **Layout**: meer witruimte / minder “full width” | ✅ | `SectionShell` max-width genormaliseerd (minder full width, meer rust) |
| **Hero**: bovenaan foto vervangen (aula “Roots Connect”) rechts of onder tekst | ✅ | Ingeladen als `public/images/home/hero-aula-roots-connect.jpeg` + layout aangepast (desktop split / mobiel onder tekst) |
| **Our Approach** degraderen naar subtitel (zoals Our mission) | ✅ | `approach-section` heading stijl aangepast naar mission-stijl (linkse border + kleinere titel) |
| **Team grid**: kleiner + rijvolgorde (Anass/Houda/Mohamed op 1 rij, Yuan/Mina eronder) | ✅ | Grid compacter op desktop + cards gelijke hoogte (practice naar onder), volgorde in `team.ts` |
| **Partners**: “extra partners” vak weg; enkel **LEVL** behouden | ✅ | `partners-section` / `partners.ts`: placeholders/CTA’s verwijderen, alleen LEVL tonen |
| **Sign up for events** quicklink → Google Form | ✅ | Linken naar `https://forms.gle/u8KX9VchjDtZfE658` (CTA/quicklink waar “Sign up…” staat) |
| **Contact form**: veld “Organisation/Company” toevoegen | ✅ | Contact form: nieuw input veld (`organisation`) + i18n labels toegevoegd |
| **Footer quicklinks**: Instagram + LinkedIn met logo’s | ⬜ | Footer/social icons toevoegen met links (zie hieronder) |
| **Events**: enkel vorige events + foto’s | ✅ | Eventfoto’s gekopieerd naar `public/images/events/` + gekoppeld in `src/data/events.ts` |
| **Peer pagina**: import flow voorbereiden (Excel + foto’s) | 🟡 | Beschrijven/implementeren: data ingest (eerste batch 5–10 peers) |
| **Logo** overal zonder blauwe achtergrond | ⬜ | (Reset) Logo container/achtergrond weghalen zodat logo fully zichtbaar is (header/sections/cards waar van toepassing) |

### Door klant (content-aanlevering / confirm)

| Item | Status | Details |
|------|:------:|---------|
| **Hero foto**: “Roots Connect in een aula” | ✅ | Ontvangen en verwerkt in hero |
| **Eventfoto’s** (vorige events) | 🟡 | Zie lijst “Foto’s (al geïdentificeerd)” hieronder |
| **Sfeerfoto** (pagina ergens) | ✅ | Foto 2 geplaatst als full-width beeldblok op de homepage |
| **Anass extra comments** | 🟡 | “Onder voorbehoud van extra comments van Anass” |
| **Peers (fase 1)**: 5–10 leden | 🟡 | Excel + foto’s (zie “Peer pagina import”) |

---

## Links (vast)

- Instagram: `https://www.instagram.com/rootsconnectnetwork/`
- LinkedIn: `https://www.linkedin.com/company/107246914/admin/dashboard/`
- Google Form (event updates): `https://forms.gle/u8KX9VchjDtZfE658`

---

## Foto’s (al geïdentificeerd)

- **Foto 1**: Annual Roots Connect event summer 2025
- **Foto 2**: sfeerfoto (voor op de pagina ergens)
- **Foto 3a**: Event “From Roots to Succes x Diversity for Law Students” (University Antwerp)
- **Foto 3b**: zelfde als 3a
- **Foto 4a**: “From Roots to Succes x BLSC” (VUB)

---

## Peer pagina import (Excel + foto’s)

Doel: eerst **5–10 peers** toevoegen zodat het netwerk zichtbaar is. Later: bewerkbaar maken via CMS + import.

### Ideale input (Excel)

Minimaal:
- `firstName`
- `lastName`
- `role` (bv. lawyer / (young) legal professional / student)
- `city` (optioneel)
- `linkedinUrl` (optioneel)
- `practiceAreas` (optioneel)
- `languages` (optioneel)

### Foto’s

Eenvoudigste flow:
- 1 map (Google Drive/Dropbox)
- Iedereen uploadt 1 foto
- **Bestandsnaam = naam** (spelfout ok; wij corrigeren bij koppelen)

Alternatief (nog beter):
- Google Form waar ze foto uploaden + velden invullen
- Daarna exporteer je automatisch een Excel/Sheet

