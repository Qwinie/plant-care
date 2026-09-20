# Plant Care App — v6.1

PWA + Google Play TWA  
Live: https://Qwinie.github.io/plant-care/  
Developer: El Loco Apps — https://www.elloco.be  
Privacy: https://www.elloco.be/privacy-plantcareapp.html

## Versiegeschiedenis

### v6.1 (huidige versie)
- Privacybeleid-knop in app opent browser naar elloco.be/privacy-plantcareapp.html
- Versienummer zichtbaar in Instellingen → Data tab

### v6.0 (niet uitgebracht — sloeg over naar 6.1)

### v5.x (Play Store versionCode 5)
- Volledige meertaligheid: NL / EN / FR / DE doorheen hele app
- Kalender-tab (📅) met echte maandgrid, taakicoontjes per dag, dag-popup
- Herindeling plantdetail: 5 tabs (Info / Seizoenen / Verzorging / Log / Meer)
- Echte QR-codes (vorige versie gebruikte nep-afbeeldingen)
- Soekfunctie beperkt tot planten (geen dieren meer via iNaturalist/GBIF)
- Volksnamen zoeken in alle talen (bv. "jeneverbes" → Juniperus communis)
- Locatie-bewuste verzorgingsdata automatisch ophalen bij eerste aanmaak plant
- Onboarding overslaan mogelijk
- Sectieverdelers correct per tab (niet meer zichtbaar op verkeerde tabs)

### v3 (eerste Play Store release)
- Basis plantenverzorging PWA
- Waterschema, gezondheid, foto's, logs
- Donkere modus, vakantie-modus
- AI plant adviseur (Groq / Gemini / OpenRouter / Ollama)
- QR-scanner, lichtmeter
- NL interface

## Deployen
Push naar `main` branch — GitHub Pages workflow publiceert automatisch.

## Bestanden
- `app.js` — alle app-logica
- `react.js` — React 18 bundle
- `index.html` — entry point
- `service-worker.js` — PWA offline cache (versie: plant-care-v1789931781)
- `manifest.json` — PWA manifest (niet wijzigen)
- `.well-known/assetlinks.json` — TWA verificatie (niet wijzigen)
- `icons/` — app-iconen (niet wijzigen)

## Play Store
- Package: io.github.qwinie.twa
- Keystore alias: my-key-alias
- Nieuwe AAB bouwen via PWABuilder met versionCode 6
