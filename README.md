# Plant Care — PWA / TWA

Self-hosted plant care app. Deployed at https://Qwinie.github.io/plant-care/

## Version 5.4 changes

### New features
- **Calendar tab** (📅 in top icon row): full month grid with care task icons per day.
  Tap any day for a popup showing which plants need what. Scrollable between months.
  Overdue days highlighted in red.
- **Reorganised plant detail tabs**: 5 tabs now (Info / Seizoenen / Verzorging / Log / Meer).
  Info shows daily-use content only. Meer tab holds AI Advisor, QR, notities, Gevaarzone.
- **Real QR codes**: QR codes are now actually scannable (previous version drew fake images).
  QR scanner keeps scanning after a no-match instead of stopping.
- **Auto location-aware care data**: fetched silently in background when a plant is first added.
- **Species search**: restricted to kingdom Plantae (no more animals). Matches vernacular
  names in all languages (Dutch "jeneverbes" → Juniperus communis).
- **Onboarding skip**: welcome screen now has an "Overslaan" button to go straight to dashboard.
- **App version** shown in Settings → Data tab (currently v5.4).

### Multilanguage (NL / EN / FR / DE)
- Full translation of plant detail page, section headers, quick-log buttons.
- Monthly calendar tips translated in all 4 languages.
- Settings tab labels, dashboard filter chips, onboarding all translated.

### Bug fixes
- Settings header (gradient banner + tabs) restored.
- Section dividers no longer bleed into wrong tabs.
- Language switcher now updates all UI instantly (module-level constants converted to functions).

## Deploy
Push to `main` branch — GitHub Pages workflow publishes automatically.

Files changed vs v3:
- `app.js`              ← all features above
- `react.js`            ← unchanged (included for completeness)  
- `index.html`          ← build marker v5.4
- `service-worker.js`   ← cache version bumped (forces PWA update)
- `README.md`           ← this file

Do NOT change:
- `manifest.json`
- `.well-known/assetlinks.json`
- `icons/`
