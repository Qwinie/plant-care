# Plant Care — PWA / TWA

Self-hosted plant care app. Deployed at https://Qwinie.github.io/plant-care/

## Version 5 changes
- Multilanguage overhaul: full NL / EN / FR / DE translation across dashboard,
  plant detail pages, settings tabs, seasonal calendar and quick-log buttons.
  Language switches instantly (all UI re-reads locale on render). Web/species
  data stays in its original language.
- Species search now restricted to plants & trees only (GBIF kingdom Plantae) —
  animals no longer appear or can be added.
- Species search matches vernacular (common) names in every language, e.g. Dutch
  "jeneverbes", German "Wacholder" and French "genévrier" all resolve to
  Juniperus communis.
- Onboarding: added a "Skip" option on the welcome screen — goes straight to the
  dashboard without creating a location or room.
- Settings screen header rebuilt (gradient banner + logo + tab bar).

## Deploy
Push to the `main` branch; GitHub Pages workflow publishes automatically.
Files: index.html, app.js, react.js, manifest.json, service-worker.js,
privacy.html, icons/, .well-known/assetlinks.json
