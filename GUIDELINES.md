# Roots Connect Web — design & layout guidelines

Korte referentie voor spacing, layout en consistentie (mobiel + desktop). Gebaseerd op Tailwind (`1` = 4px).

## Spacing-schaal (sitebreed)

| Doel | Classes | px (ongeveer) |
|------|---------|----------------|
| **Horizontale gutter** (pagina-inhoud) | `px-4 sm:px-6 lg:px-8` | 16 → 24 → 32 |
| **Sectie verticaal** (standaard) | `py-12 sm:py-16 lg:py-20` | 48 → 64 → 80 |
| **Sectiekop → intro** | `mt-2 sm:mt-3` op intro | 8 → 12 |
| **Intro → content** (broodtekst / grid) | `mt-8 sm:mt-10` | 32 → 40 |
| **Grid tussen kaarten** | `gap-6 sm:gap-10` | 24 → 40 |
| **Kleine grid / labels** | `gap-3 sm:gap-6` | 12 → 24 |
| **CTA-groep** (knoppen) | `gap-3` | 12 |

### Regels

1. **Eén gutter**: gebruik overal dezelfde `px-4 sm:px-6 lg:px-8` op de page/section container.
2. **Secties standaard**: `py-12 sm:py-16 lg:py-20` (mobiel compacter, desktop ruimer).
3. **Consistente ritmes**: probeer niet ad-hoc `py-*` variaties te introduceren; pas liever `mt-*` en `gap-*` aan.
4. **Page-level**: pagina wrappers in `src/app/**` volgen dezelfde verticale schaal als secties.

## Waar in code?

- **Section wrapper**: `src/components/sections/section-shell.tsx`
- **Secties**: `src/components/sections/*.tsx`
- **Pages**: `src/app/**`

