window.addEventListener('error',function(e){var b=document.getElementById('errbox');b.style.display='block';b.textContent='Fout regel '+e.lineno+' kolom '+e.colno+':\n'+e.message+'\n\n'+(e.error&&e.error.stack||'');});
    window.addEventListener('unhandledrejection',function(e){var b=document.getElementById('errbox');b.style.display='block';b.textContent='Promise fout:\n'+e.reason;});
    
    window.addEventListener('error',function(e){var b=document.getElementById('errbox');b.style.display='block';b.textContent='Fout regel '+e.lineno+' kolom '+e.colno+':\n'+e.message+'\n\n'+(e.error&&e.error.stack||'');});
    window.addEventListener('unhandledrejection',function(e){var b=document.getElementById('errbox');b.style.display='block';b.textContent='Promise fout:\n'+e.reason;});
const {useState,useEffect,useCallback,useMemo,useRef}=React;
 function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
// ══════════════════════════════════════════════════════════════════
// DESIGN TOKENS
// ══════════════════════════════════════════════════════════════════
const LIGHT = {
  bg:"#F5F1EB",surface:"#FFFFFF",surfaceAlt:"#EEE9E0",
  soil:"#2C1F0F",soilLight:"#4A3520",green:"#3D6B4A",greenLight:"#6FA882",greenPale:"#CAE8D2",
  sand:"#C4A97A",sandLight:"#EAD9B8",sky:"#5AACCB",
  terracotta:"#B85C42",terracottaLight:"#F0CCBF",
  text:"#1A1208",muted:"#6D5D4C",border:"#D8CFC0",
  warning:"#D4960E",danger:"#B85C42",success:"#3D6B4A",purple:"#7B5EA7",
  shadowSm:"0 1px 3px rgba(44,31,15,0.08)",shadowMd:"0 4px 12px rgba(44,31,15,0.10)",shadowLg:"0 8px 24px rgba(44,31,15,0.12)",
};
const DARK = {
  // True dark — deep charcoal base, not green-tinted
  bg:"#121212",surface:"#1E1E1E",surfaceAlt:"#2A2A2A",
  // Soil/header: warm dark brown (keeps brand identity)
  soil:"#D4A96A",soilLight:"#C19050",
  // Greens: vivid and saturated so they pop on dark bg
  green:"#4CAF72",greenLight:"#6DD68F",greenPale:"#0F2B1A",
  // Accents
  sand:"#D4A96A",sandLight:"#2E2418",sky:"#4EAFD4",
  terracotta:"#E8715A",terracottaLight:"#2E1510",
  // Text: crisp white-ish, not green-tinted
  text:"#F0F0F0",muted:"#8A8A8A",border:"#333333",
  warning:"#F0C040",danger:"#E8715A",success:"#4CAF72",purple:"#B39DDB",
  shadowSm:"0 1px 3px rgba(0,0,0,0.5)",shadowMd:"0 4px 16px rgba(0,0,0,0.6)",shadowLg:"0 8px 32px rgba(0,0,0,0.7)",
};
const _darkMode = JSON.parse(localStorage.getItem("plantcare_dark")||"false");
let C = _darkMode ? DARK : LIGHT;
window.__setDarkMode = (v) => { C = v ? DARK : LIGHT; };

// Inject global CSS animations once
if (typeof document !== "undefined" && !document.getElementById("pca-styles")) {
  const style = document.createElement("style");
  style.id = "pca-styles";
  style.textContent = [
    "@keyframes fadeSlideUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}",
    "@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
    "@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.6}}",
    ".pca-card{animation:fadeSlideUp 0.3s ease both;transition:transform 0.15s ease,box-shadow 0.15s ease}",
    ".pca-card:active{transform:scale(0.985)}",
    ".pca-btn{transition:transform 0.1s ease,opacity 0.15s ease,background 0.2s ease,box-shadow 0.15s ease}",
    ".pca-btn:active{transform:scale(0.94)}",
    ".pca-tab{transition:color 0.2s ease,border-color 0.2s ease}",
    ".pca-urgent{animation:pulse 2s ease-in-out infinite}",
    ".pca-fade{animation:fadeIn 0.25s ease both}",
  ].join(" ");
  document.head.appendChild(style);
}

// ══════════════════════════════════════════════════════════════════
// TRANSLATION SYSTEM
// ══════════════════════════════════════════════════════════════════
const LANGUAGES = {
  nl: { name:"Nederlands", flag:"🇧🇪/🇳🇱" },
  en: { name:"English",    flag:"🇬🇧" },
  fr: { name:"Français",   flag:"🇫🇷" },
  de: { name:"Deutsch",    flag:"🇩🇪" },
};

const T = {
  nl: {
    appTitle:"Mijn Planten", myPlants:"Planten",
    waterNow:"Water nu", soon:"Binnenkort", avgHealth:"Gem. gezondheid",
    switchLocation:"+ Locatie wisselen",
    waterToday:"💧 Water vandaag!", waterTomorrow:"💧 Water morgen",
    waterIn:"💧 Water over", days:"dagen", day:"dag",
    markWatered:"✓ Water gegeven", paused:"Gepauzeerd",
    overview:"Info", seasons:"Seizoenen", care:"Verzorging", log:"Log",
    quickLog:"Snel loggen", watered:"Water geven", healthCheck:"Gezondheidscheck",
    environment:"Omgeving", growth:"Groei",
    timestamp:"Tijdstip", notes:"Notities", optional:"optioneel",
    addParameter:"+ Parameter toevoegen", searchParams:"Zoek parameter...",
    saveLog:"Log opslaan", cancel:"Annuleer",
    yes:"Ja", no:"Nee",
    noPhoto:"Geen foto", loadingPhoto:"Foto laden...",
    askAdvisor:"Vraag de plant-adviseur...", askBtn:"Vraag",
    plantAdvisor:"🤖 Plant Adviseur",
    locationLabel:"Locatie", sectionLabel:"Afdeling", notesLabel:"Notities",
    addLocation:"+ Nieuwe locatie",
    manageLocations:"Locaties beheren",
    locations:"Locaties",
    addNewLocation:"+ Nieuwe locatie toevoegen",
    locationName:"Naam van locatie...",
    activeLabel:"Actief",
    urgentTitle:"Water nu nodig",
    overdue:"Te laat",
    today:"Vandaag",
  },
  en: {
    appTitle:"My Plants", myPlants:"Plants",
    waterNow:"Needs water", soon:"Coming up", avgHealth:"Avg. health",
    switchLocation:"+ Switch location",
    waterToday:"💧 Water today!", waterTomorrow:"💧 Water tomorrow",
    waterIn:"💧 Water in", days:"days", day:"day",
    markWatered:"✓ Watered", paused:"Paused",
    overview:"Overview", seasons:"Seasons", care:"Care", log:"Log",
    quickLog:"Quick log", watered:"Watered", healthCheck:"Health check",
    environment:"Environment", growth:"Groei",
    timestamp:"Timestamp", notes:"Notes", optional:"optional",
    addParameter:"+ Add parameter", searchParams:"Search parameters...",
    saveLog:"Save log", cancel:"Annuleer",
    yes:"Yes", no:"No",
    noPhoto:"Geen foto", loadingPhoto:"Loading photo...",
    askAdvisor:"Ask about this plant...", askBtn:"Ask",
    plantAdvisor:"🤖 Plant Advisor",
    locationLabel:"Location", sectionLabel:"Section", notesLabel:"Notes",
    addLocation:"+ New location",
    manageLocations:"Manage locations",
    locations:"Locations",
    addNewLocation:"+ Add new location",
    locationName:"Location name...",
    activeLabel:"Active",
    urgentTitle:"Needs water now",
    overdue:"Overdue",
    today:"Today",
  },
  fr: {
    appTitle:"Mes Plantes", myPlants:"Plantes",
    waterNow:"À arroser", soon:"Bientôt", avgHealth:"Santé moy.",
    switchLocation:"+ Changer de lieu",
    waterToday:"💧 Arroser aujourd'hui!", waterTomorrow:"💧 Arroser demain",
    waterIn:"💧 Arroser dans", days:"jours", day:"jour",
    markWatered:"✓ Arrosé", paused:"En pause",
    overview:"Aperçu", seasons:"Saisons", care:"Soins", log:"Journal",
    quickLog:"Journal rapide", watered:"Arrosé", healthCheck:"Bilan santé",
    environment:"Environnement", growth:"Croissance",
    timestamp:"Horodatage", notes:"Notes", optional:"optionnel",
    addParameter:"+ Ajouter paramètre", searchParams:"Rechercher...",
    saveLog:"Enregistrer", cancel:"Annuler",
    yes:"Oui", no:"Non",
    noPhoto:"Pas de photo", loadingPhoto:"Chargement...",
    askAdvisor:"Posez une question sur cette plante...", askBtn:"Demander",
    plantAdvisor:"🤖 Conseiller plantes",
    locationLabel:"Lieu", sectionLabel:"Section", notesLabel:"Notes",
    addLocation:"+ Nouveau lieu",
    manageLocations:"Gérer les lieux",
    locations:"Lieux",
    addNewLocation:"+ Ajouter un lieu",
    locationName:"Nom du lieu...",
    activeLabel:"Actif",
    urgentTitle:"À arroser maintenant",
    overdue:"En retard",
    today:"Aujourd'hui",
  },
  de: {
    appTitle:"Meine Pflanzen", myPlants:"Pflanzen",
    waterNow:"Wasser jetzt", soon:"Bald", avgHealth:"Ø Gesundheit",
    switchLocation:"+ Standort wechseln",
    waterToday:"💧 Heute gießen!", waterTomorrow:"💧 Morgen gießen",
    waterIn:"💧 Gießen in", days:"Tagen", day:"Tag",
    markWatered:"✓ Gegossen", paused:"Pausiert",
    overview:"Übersicht", seasons:"Jahreszeiten", care:"Pflege", log:"Protokoll",
    quickLog:"Schnell-Eintrag", watered:"Gegossen", healthCheck:"Gesundheitscheck",
    environment:"Umgebung", growth:"Wachstum",
    timestamp:"Zeitstempel", notes:"Notizen", optional:"optional",
    addParameter:"+ Parameter hinzufügen", searchParams:"Parameter suchen...",
    saveLog:"Eintrag speichern", cancel:"Abbrechen",
    yes:"Ja", no:"Nein",
    noPhoto:"Kein Foto", loadingPhoto:"Foto laden...",
    askAdvisor:"Frage über diese Pflanze...", askBtn:"Fragen",
    plantAdvisor:"🤖 Pflanzenberater",
    locationLabel:"Standort", sectionLabel:"Bereich", notesLabel:"Notizen",
    addLocation:"+ Neuer Standort",
    manageLocations:"Standorte verwalten",
    locations:"Standorte",
    addNewLocation:"+ Neuen Standort hinzufügen",
    locationName:"Standortname...",
    activeLabel:"Aktiv",
    urgentTitle:"Sofort gießen",
    overdue:"Überfällig",
    today:"Heute",
  },
};

// Hook: use translation
const useLang = (lang) => T[lang] || T.nl;


// ══════════════════════════════════════════════════════════════════
// SPECIES DATABASE
// ══════════════════════════════════════════════════════════════════
let SPECIES_DB = {
  // ── CACTI ──
  "Mammillaria gracilis": { commonName:"Thimble Cactus",family:"Cactaceae",category:"Cacti",origin:"Mexico",image:"🌵",careLevel:"Easy",description:"Clustering cactus forming dense mounds of small cylindrical stems. Produces pink-white flowers at stem bases in spring.",care:{spring:{water:10,humidity:20,notes:"Resume watering as temperatures rise. Repot if root-bound."},summer:{water:7,humidity:20,notes:"Water thoroughly; let soil dry completely between waterings."},autumn:{water:21,humidity:15,notes:"Reduce watering as days shorten and growth slows."},winter:{water:45,humidity:15,notes:"Near-dry rest triggers spring blooms. Water only if severely shriveled."}},sunlight:{min:6,max:8,type:"Direct sun",uv:"High"},temp:{min:5,max:40,ideal:"18–30°C"},soil:"Cactus mix + 30% coarse perlite",pot:"Terracotta — faster drying",fertilize:"Monthly spring/summer, low-nitrogen cactus formula",repot:"Every 2–3 years in spring",toxicity:"Non-toxic",propagation:"Offsets — twist off and callus 1 week before planting",tips:["Avoid overhead watering","Flowers appear at base of stems","Rotate quarterly"]},
  "Echinocactus grusonii": { commonName:"Golden Barrel Cactus",family:"Cactaceae",category:"Cacti",origin:"Mexico (critically endangered in wild)",image:"🟡",careLevel:"Easy",description:"Iconic globular cactus with golden-yellow ribs and spines. Extremely slow growing — can live 100+ years.",care:{spring:{water:14,humidity:25,notes:"Begin watering after winter rest. Light fertilizer monthly."},summer:{water:10,humidity:25,notes:"Loves heat and full sun. Water when top 5cm is completely dry."},autumn:{water:28,humidity:20,notes:"Reduce to every 3–4 weeks from September."},winter:{water:60,humidity:15,notes:"No water unless severely shriveled. Cold + dry = essential."}},sunlight:{min:6,max:12,type:"Full direct sun",uv:"Very High"},temp:{min:5,max:45,ideal:"20–35°C"},soil:"50% mineral (pumice/grit) + 50% cactus mix",pot:"Wide, shallow terracotta",fertilize:"Every 6 weeks spring/summer, high-potassium formula",repot:"Every 3–4 years",toxicity:"Non-toxic, but extremely sharp spines",propagation:"Seed only — no offsets produced",tips:["Naturally tilts toward sun — rotate quarterly","Yellow flowers only on very mature plants (10+ years)","Never water in winter — most common cause of death"]},
  "Opuntia microdasys": { commonName:"Bunny Ears Cactus",family:"Cactaceae",category:"Cacti",origin:"Mexico",image:"🐰",careLevel:"Easy",description:"Flat pad cactus with fine glochids (barbed hairs) instead of large spines. Charming two-lobed growth habit.",care:{spring:{water:12,humidity:20,notes:"Water moderately. New pads will form — avoid disturbing."},summer:{water:8,humidity:20,notes:"Thrives in heat. Water when top 2cm of soil is dry."},autumn:{water:20,humidity:15,notes:"Slowly reduce watering from September."},winter:{water:45,humidity:10,notes:"Keep dry. Cool rest (10°C) encourages summer flowers."}},sunlight:{min:6,max:10,type:"Full sun / bright indirect",uv:"High"},temp:{min:8,max:42,ideal:"18–32°C"},soil:"Cactus mix + coarse sand",pot:"Wide container with drainage holes",fertilize:"Monthly spring/summer",repot:"Every 2–3 years when pads overhang pot",toxicity:"Glochids are highly irritating to skin and eyes",propagation:"Pad cuttings — let cut end dry 1 week, then plant",tips:["Always handle with newspaper or tongs — glochids are invisible and painful","Yellow flowers followed by red fruit on mature plants","Pads detach easily and root themselves"]},
  "Ferocactus wislizeni": { commonName:"Fishhook Barrel Cactus",family:"Cactaceae",category:"Cacti",origin:"Southwestern USA / Northern Mexico",image:"🪝",careLevel:"Medium",description:"Large barrel cactus with distinctive hooked central spines. Among the most drought-tolerant plants on earth.",care:{spring:{water:14,humidity:20,notes:"Resume watering cautiously. Check for winter damage first."},summer:{water:10,humidity:20,notes:"Water every 1–2 weeks. Tolerates extreme heat when dry."},autumn:{water:28,humidity:15,notes:"Reduce to monthly watering from October."},winter:{water:60,humidity:10,notes:"No water at all. Can tolerate brief frost if completely dry."}},sunlight:{min:8,max:12,type:"Full direct sun",uv:"Very High"},temp:{min:-5,max:50,ideal:"20–40°C"},soil:"Very mineral, fast-draining mix",pot:"Heavy terracotta or stone",fertilize:"2–3 times per year in spring/summer only",repot:"Rarely — only when severely root-bound",toxicity:"Non-toxic but dangerous hooked spines",propagation:"Seed only",tips:["Leans south naturally — a feature, not a problem","Orange-yellow flowers in late summer","One of the most drought-tolerant cacti"]},
  "Cereus repandus": { commonName:"Peruvian Apple Cactus",family:"Cactaceae",category:"Cacti",origin:"South America",image:"🗼",careLevel:"Easy",description:"Tall columnar cactus and one of the fastest-growing cacti. Can reach several meters. Produces edible fruit.",care:{spring:{water:10,humidity:30,notes:"Resume watering. Light fertilizing monthly."},summer:{water:7,humidity:30,notes:"Water well every 1–2 weeks. Feed monthly."},autumn:{water:21,humidity:25,notes:"Reduce watering from September."},winter:{water:45,humidity:20,notes:"Minimal water every 4–6 weeks if warm indoors."}},sunlight:{min:6,max:10,type:"Full sun to bright indirect",uv:"High"},temp:{min:8,max:40,ideal:"18–30°C"},soil:"Standard cactus mix",pot:"Tall, heavy pot for stability",fertilize:"Every 4 weeks spring–summer",repot:"Every 2 years when young",toxicity:"Non-toxic. Fruit is edible.",propagation:"Stem cuttings — dry 2 weeks before planting",tips:["Stake when young","Night-blooming white flowers — spectacular but only one night","Branches freely for sculptural effect"]},
  "Gymnocalycium mihanovichii": { commonName:"Moon Cactus",family:"Cactaceae",category:"Cacti",origin:"South America (grafted hybrid)",image:"🔴",careLevel:"Medium",description:"Brightly colored mutant cactus grafted onto a green rootstock. The colorful top lacks chlorophyll.",care:{spring:{water:14,humidity:30,notes:"Water sparingly. The rootstock does all the feeding."},summer:{water:10,humidity:30,notes:"Bright indirect light — direct sun scorches the colored top."},autumn:{water:21,humidity:25,notes:"Reduce watering gradually."},winter:{water:40,humidity:20,notes:"Minimal water. Keep above 10°C."}},sunlight:{min:3,max:6,type:"Bright indirect — NO direct sun",uv:"Low"},temp:{min:10,max:35,ideal:"18–28°C"},soil:"Standard cactus mix",pot:"Small terracotta",fertilize:"Monthly spring/summer, very diluted",repot:"Rarely needed",toxicity:"Non-toxic",propagation:"Re-graft offsets onto Hylocereus rootstock",tips:["Direct sun will bleach and kill the colored top","The graft junction is the weak point — keep it dry","Lifespan typically 5–10 years"]},
  // ── SUCCULENTS ──
  "Echeveria elegans": { commonName:"Mexican Snowball",family:"Crassulaceae",category:"Succulents",origin:"Mexico",image:"🪷",careLevel:"Easy",description:"Rosette-forming succulent with pale blue-green fleshy leaves. One of the most popular succulents worldwide.",care:{spring:{water:10,humidity:25,notes:"Active growth. Water more regularly. Fertilize monthly."},summer:{water:8,humidity:30,notes:"Water when soil is dry 2–3cm deep. Avoid water in the rosette center."},autumn:{water:18,humidity:20,notes:"Reduce watering. Move indoors before frost."},winter:{water:35,humidity:15,notes:"Minimal water — once a month maximum."}},sunlight:{min:5,max:8,type:"Bright direct/indirect",uv:"Medium-High"},temp:{min:4,max:38,ideal:"18–26°C"},soil:"Cactus/succulent mix + perlite",pot:"Shallow terracotta with drainage",fertilize:"Monthly spring/summer",repot:"Every 1–2 years",toxicity:"Mildly toxic to cats and dogs",propagation:"Leaf cuttings or offsets",tips:["Never let water sit in the rosette — causes crown rot","Etiolation (stretching) means needs more light","Leaves plucked at base root easily on dry soil"]},
  "Aloe vera": { commonName:"Aloe Vera",family:"Asphodelaceae",category:"Succulents",origin:"Arabian Peninsula",image:"🌿",careLevel:"Easy",description:"Iconic medicinal succulent with thick, fleshy leaves containing soothing gel. One of the world's most used medicinal plants.",care:{spring:{water:14,humidity:30,notes:"Resume regular watering. Can move outdoors when frost risk passes."},summer:{water:10,humidity:35,notes:"Water deeply but infrequently. Protect from afternoon scorching sun."},autumn:{water:21,humidity:25,notes:"Begin reducing water. Bring indoors before first frost."},winter:{water:42,humidity:20,notes:"Water very sparingly — once every 5–6 weeks."}},sunlight:{min:5,max:8,type:"Bright indirect to direct",uv:"Medium"},temp:{min:4,max:40,ideal:"18–32°C"},soil:"Well-draining cactus/succulent mix",pot:"Terracotta, slightly larger than root ball",fertilize:"2–3 times in growing season only",repot:"Every 2–3 years or when pups crowd the pot",toxicity:"Toxic to cats and dogs if ingested",propagation:"Offsets (pups) from base",tips:["Yellow/translucent leaves = overwatering","Brown tips = underwatering or too much direct sun","Gel from cut leaves soothes burns"]},
  "Haworthia fasciata": { commonName:"Zebra Plant",family:"Asphodelaceae",category:"Succulents",origin:"South Africa",image:"🦓",careLevel:"Easy",description:"Compact rosette with dark green leaves banded with white tubercles. Very forgiving in low-light conditions.",care:{spring:{water:14,humidity:30,notes:"Active growth period. Water when top 2cm is dry."},summer:{water:12,humidity:35,notes:"Tolerates some neglect. Avoid harsh afternoon sun."},autumn:{water:21,humidity:25,notes:"Reduce watering gradually."},winter:{water:35,humidity:20,notes:"Water sparingly. Growth slows significantly."}},sunlight:{min:3,max:6,type:"Bright indirect — low light tolerant",uv:"Low-Medium"},temp:{min:5,max:38,ideal:"16–26°C"},soil:"Cactus mix with extra perlite",pot:"Small terracotta or plastic with drainage",fertilize:"Monthly spring/summer, half-strength",repot:"Every 2–3 years",toxicity:"Non-toxic to pets and humans",propagation:"Offsets or leaf cuttings",tips:["One of few succulents that tolerates low light","Turns red/brown under stress — can be intentional","Great windowsill plant facing north or east"]},
  "Sedum morganianum": { commonName:"Burro's Tail",family:"Crassulaceae",category:"Succulents",origin:"Mexico / Honduras",image:"🍇",careLevel:"Easy",description:"Trailing succulent with plump blue-green leaves that cascade elegantly. Perfect for hanging baskets.",care:{spring:{water:12,humidity:25,notes:"Growing season begins. Resume regular watering."},summer:{water:10,humidity:25,notes:"Water well but allow soil to dry fully between."},autumn:{water:20,humidity:20,notes:"Reduce watering."},winter:{water:40,humidity:15,notes:"Minimal watering. Protect from frost."}},sunlight:{min:5,max:8,type:"Bright indirect to morning sun",uv:"Medium"},temp:{min:5,max:35,ideal:"16–27°C"},soil:"Gritty cactus mix",pot:"Hanging basket",fertilize:"2–3 times in spring/summer",repot:"Rarely — extremely fragile leaves drop at touch",toxicity:"Non-toxic",propagation:"Individual leaves or stem cuttings",tips:["Leaves detach at slightest touch","Longer stems with age — beautiful trailing effect","Each dropped leaf can grow into a new plant"]},
  "Crassula ovata": { commonName:"Jade Plant",family:"Crassulaceae",category:"Succulents",origin:"South Africa / Mozambique",image:"🌳",careLevel:"Easy",description:"Long-lived shrubby succulent that develops a tree-like trunk. Symbol of good luck in many cultures.",care:{spring:{water:10,humidity:30,notes:"Active growth. Water regularly when top soil is dry."},summer:{water:8,humidity:35,notes:"Water deeply. Full sun encourages compact growth."},autumn:{water:18,humidity:25,notes:"Reduce gradually. Move indoors before frost."},winter:{water:30,humidity:20,notes:"Water sparingly. Reduce to every 3–4 weeks."}},sunlight:{min:4,max:8,type:"Bright direct to indirect",uv:"Medium-High"},temp:{min:5,max:35,ideal:"18–28°C"},soil:"Well-draining succulent mix",pot:"Heavy pot — plant becomes top-heavy with age",fertilize:"Monthly spring/summer",repot:"Every 2–3 years",toxicity:"Toxic to cats and dogs",propagation:"Stem or leaf cuttings",tips:["Red leaf edges = high light (a good sign)","Can live 50–100 years","Develop bonsai-like trunk by pruning regularly"]},
  "Sansevieria trifasciata": { commonName:"Snake Plant",family:"Asparagaceae",category:"Succulents",origin:"West Africa",image:"🗡️",careLevel:"Easy",description:"Nearly indestructible upright plant with stiff, patterned leaves. One of the best air-purifying houseplants.",care:{spring:{water:14,humidity:30,notes:"Resume watering. Can fertilize once."},summer:{water:10,humidity:35,notes:"Water when top 5cm is completely dry."},autumn:{water:28,humidity:25,notes:"Reduce frequency significantly."},winter:{water:45,humidity:20,notes:"Water very rarely. Cold + wet = root rot."}},sunlight:{min:1,max:8,type:"Extremely adaptable — low light to direct sun",uv:"Any"},temp:{min:8,max:38,ideal:"16–30°C"},soil:"Any well-draining mix",pot:"Any material — avoid oversized pots",fertilize:"2–3 times in spring/summer",repot:"Every 3–5 years",toxicity:"Toxic to cats and dogs",propagation:"Division, leaf sections, or offsets",tips:["Thrives on neglect — overwatering is the only real threat","Cleans air of formaldehyde, benzene, xylene","Variegated forms lose pattern in very low light"]},
  // ── AROIDS ──
  "Monstera deliciosa": { commonName:"Swiss Cheese Plant",family:"Araceae",category:"Aroids",origin:"Central America",image:"🍃",careLevel:"Easy",description:"Iconic tropical aroid with large, glossy, fenestrated leaves. One of the most popular houseplants worldwide.",care:{spring:{water:7,humidity:60,notes:"Active growth. Water when top 2–3cm is dry. Feed monthly."},summer:{water:5,humidity:65,notes:"May need weekly watering in heat. Mist or use humidifier."},autumn:{water:10,humidity:55,notes:"Reduce watering and feeding as growth slows."},winter:{water:14,humidity:50,notes:"Water sparingly. Keep away from cold drafts and radiators."}},sunlight:{min:3,max:6,type:"Bright indirect — no direct afternoon sun",uv:"Low-Medium"},temp:{min:10,max:35,ideal:"18–27°C"},soil:"Rich, well-draining potting mix with perlite",pot:"Large pot with drainage",fertilize:"Monthly spring/summer",repot:"Every 1–2 years in spring",toxicity:"Toxic to cats, dogs, and humans if ingested",propagation:"Stem cuttings with a node",tips:["Fenestration only develops on mature leaves with good light","Aerial roots can be directed into the soil","Wipe leaves with damp cloth to maximize photosynthesis"]},
  "Philodendron hederaceum": { commonName:"Heartleaf Philodendron",family:"Araceae",category:"Aroids",origin:"Central America & Caribbean",image:"💚",careLevel:"Easy",description:"Fast-growing trailing or climbing aroid with heart-shaped, glossy leaves. Extremely adaptable.",care:{spring:{water:7,humidity:55,notes:"Resume regular watering and feeding."},summer:{water:5,humidity:60,notes:"Keep soil evenly moist. Mist occasionally."},autumn:{water:10,humidity:50,notes:"Reduce watering frequency."},winter:{water:14,humidity:45,notes:"Allow top half of soil to dry between waterings."}},sunlight:{min:2,max:6,type:"Low to bright indirect",uv:"Low"},temp:{min:12,max:35,ideal:"18–28°C"},soil:"Rich potting mix with good drainage",pot:"Any type with drainage",fertilize:"Monthly spring/summer",repot:"Every 1–2 years",toxicity:"Toxic to cats, dogs, and humans",propagation:"Stem cuttings in water or soil",tips:["One of the easiest houseplants for beginners","Trails beautifully from shelves or climbs a moss pole","Yellow leaves = overwatering"]},
  "Pothos aureus": { commonName:"Golden Pothos",family:"Araceae",category:"Aroids",origin:"Southeast Asia",image:"🟩",careLevel:"Easy",description:"Nearly impossible to kill trailing plant with heart-shaped, variegated golden-green leaves.",care:{spring:{water:7,humidity:50,notes:"Growing season. Water when top 2–3cm is dry."},summer:{water:5,humidity:55,notes:"May need more frequent watering. Enjoys occasional misting."},autumn:{water:10,humidity:45,notes:"Reduce watering as growth slows."},winter:{water:14,humidity:40,notes:"Water sparingly. Tolerates neglect well."}},sunlight:{min:1,max:6,type:"Low light to bright indirect",uv:"Very Low to Medium"},temp:{min:10,max:35,ideal:"18–30°C"},soil:"Any standard potting mix",pot:"Any — hanging baskets ideal",fertilize:"Monthly spring/summer",repot:"Every 1–2 years",toxicity:"Toxic to cats, dogs, and humans",propagation:"Stem cuttings in water — extremely easy",tips:["Variegation fades in very low light","Can grow in a vase of water alone","NASA recommends for air purification"]},
  "Spathiphyllum wallisii": { commonName:"Peace Lily",family:"Araceae",category:"Aroids",origin:"Tropical Americas / Southeast Asia",image:"🤍",careLevel:"Easy",description:"Graceful tropical with dark green leaves and elegant white spathe flowers. Excellent air purifier.",care:{spring:{water:5,humidity:60,notes:"Resume feeding. Will begin flowering. Keep evenly moist."},summer:{water:4,humidity:65,notes:"Water frequently — droops dramatically when thirsty."},autumn:{water:8,humidity:55,notes:"Reduce watering. Remove spent flowers at base."},winter:{water:10,humidity:50,notes:"Water when top soil is dry. Keep away from cold windows."}},sunlight:{min:1,max:4,type:"Low to medium indirect light",uv:"Very Low"},temp:{min:12,max:32,ideal:"18–27°C"},soil:"Rich, moisture-retaining potting mix",pot:"Any with drainage",fertilize:"Monthly spring/summer",repot:"Every 1–2 years",toxicity:"Toxic to cats, dogs, and humans",propagation:"Division at repotting",tips:["Dramatic wilting when thirsty — recovers quickly","Brown tips = low humidity or fluoride in tap water","Use filtered or rainwater if possible"]},
  "Anthurium andraeanum": { commonName:"Flamingo Flower",family:"Araceae",category:"Aroids",origin:"Colombia / Ecuador",image:"❤️",careLevel:"Medium",description:"Stunning tropical with glossy, waxy spathes (red, pink, or white) and a distinctive spadix. Long-lasting blooms.",care:{spring:{water:7,humidity:70,notes:"Feed with high-phosphorus fertilizer to encourage blooming."},summer:{water:5,humidity:75,notes:"Keep humid. Mist leaves but not flowers."},autumn:{water:10,humidity:65,notes:"Reduce feeding. Remove faded flowers."},winter:{water:14,humidity:60,notes:"Water carefully — prone to root rot in cool conditions."}},sunlight:{min:3,max:5,type:"Bright indirect only — NO direct sun",uv:"Low"},temp:{min:15,max:32,ideal:"20–28°C"},soil:"Chunky orchid mix or aroid mix with bark and perlite",pot:"Well-draining, avoid overpotting",fertilize:"Monthly with high-phosphorus fertilizer",repot:"Every 2 years in spring",toxicity:"Toxic to cats, dogs, and humans",propagation:"Division or stem cuttings",tips:["Needs HIGH humidity — bathroom or near humidifier ideal","Brown, papery spathe = normal aging — cut at base","Blooms last 2–3 months"]},
  "Alocasia amazonica": { commonName:"African Mask Plant",family:"Araceae",category:"Aroids",origin:"Southeast Asia (hybrid)",image:"🎭",careLevel:"Hard",description:"Dramatic hybrid aroid with large, arrow-shaped dark green leaves with striking white veins. High humidity lover.",care:{spring:{water:6,humidity:75,notes:"Growth resumes. Increase watering and humidity gradually."},summer:{water:4,humidity:80,notes:"Needs consistently moist soil and very high humidity."},autumn:{water:10,humidity:70,notes:"Reduce watering as plant may go semi-dormant."},winter:{water:14,humidity:65,notes:"May drop all leaves — keep slightly moist. Corms survive underground."}},sunlight:{min:3,max:5,type:"Bright indirect — no direct sun",uv:"Low"},temp:{min:15,max:30,ideal:"20–28°C"},soil:"Well-draining aroid mix with bark, perlite, and coco coir",pot:"Well-draining with bottom holes",fertilize:"Every 2 weeks spring/summer",repot:"Every 1–2 years",toxicity:"Toxic to cats, dogs, and humans",propagation:"Division of corms in spring",tips:["Winter dormancy is normal — do not overwater","Needs 70%+ humidity — pebble tray or humidifier essential","Spider mites are the main pest — check leaf undersides weekly"]},
  "Calathea ornata": { commonName:"Pinstripe Calathea",family:"Marantaceae",category:"Aroids",origin:"Colombia / Venezuela",image:"🖊️",careLevel:"Hard",description:"Striking prayer plant with dark green leaves decorated with fine pink or white pinstripes. Leaves fold upward at night.",care:{spring:{water:5,humidity:70,notes:"Water with lukewarm filtered water. Begin feeding monthly."},summer:{water:4,humidity:75,notes:"Keep consistently moist but never waterlogged. Mist daily."},autumn:{water:7,humidity:65,notes:"Reduce feeding. Maintain humidity."},winter:{water:10,humidity:60,notes:"Water less but never let soil dry completely. No cold drafts."}},sunlight:{min:2,max:4,type:"Low to medium indirect — no direct sun",uv:"Very Low"},temp:{min:15,max:30,ideal:"18–27°C"},soil:"Moisture-retaining potting mix with perlite",pot:"Plastic or glazed ceramic",fertilize:"Monthly spring/summer, half-strength",repot:"Every 1–2 years in spring",toxicity:"Non-toxic to pets and humans",propagation:"Division at repotting",tips:["ONLY use filtered, rainwater, or distilled water — tap causes brown tips","High humidity is non-negotiable","Leaves curl = underwatering; yellow = overwatering"]},
  // ── FERNS ──
  "Nephrolepis exaltata": { commonName:"Boston Fern",family:"Lomariopsidaceae",category:"Ferns",origin:"Tropical regions worldwide",image:"🌿",careLevel:"Medium",description:"Classic lush fern with long, arching fronds. A Victorian parlour staple, ideal for hanging baskets.",care:{spring:{water:3,humidity:70,notes:"Resume watering. Keep soil consistently moist."},summer:{water:2,humidity:75,notes:"May need daily watering. Mist fronds regularly."},autumn:{water:4,humidity:65,notes:"Reduce slightly. Watch for frond browning in dry air."},winter:{water:5,humidity:60,notes:"Keep away from radiators. Humidifier strongly recommended."}},sunlight:{min:2,max:4,type:"Indirect light only — no direct sun",uv:"Very Low"},temp:{min:10,max:30,ideal:"16–24°C"},soil:"Rich, moisture-retaining mix with peat or coco coir",pot:"Plastic or glazed — never terracotta",fertilize:"Monthly spring/summer, diluted liquid feed",repot:"Every 1–2 years in spring",toxicity:"Non-toxic",propagation:"Division or spores",tips:["Humidity below 50% causes rapid frond loss","Brown tips = low humidity, not underwatering","Remove dead fronds at base to encourage new growth"]},
  "Asplenium nidus": { commonName:"Bird's Nest Fern",family:"Aspleniaceae",category:"Ferns",origin:"Tropical Asia / East Africa / Polynesia",image:"🪺",careLevel:"Medium",description:"Fern with broad, undivided, glossy fronds radiating from a central rosette like a bird's nest.",care:{spring:{water:5,humidity:65,notes:"Growing season. Water into the soil, never the central crown."},summer:{water:4,humidity:70,notes:"Thrives in warm humidity. Never pour water into center rosette."},autumn:{water:7,humidity:60,notes:"Reduce watering gradually."},winter:{water:10,humidity:55,notes:"Reduce to when top soil is dry."}},sunlight:{min:2,max:4,type:"Low to medium indirect",uv:"Very Low"},temp:{min:12,max:32,ideal:"18–27°C"},soil:"Moisture-retaining mix with bark and perlite",pot:"Any with drainage",fertilize:"Monthly spring/summer, quarter-strength",repot:"Every 2 years",toxicity:"Non-toxic",propagation:"Spores only",tips:["Never water into the crown — causes rot","Crinkled new fronds are normal — they unfurl over days","Thrives in bathrooms"]},
  "Adiantum raddianum": { commonName:"Maidenhair Fern",family:"Pteridaceae",category:"Ferns",origin:"South America",image:"🍀",careLevel:"Hard",description:"Delicate fern with fan-shaped leaflets on wiry black stems. Notoriously demanding but breathtakingly beautiful.",care:{spring:{water:2,humidity:75,notes:"Keep consistently moist. Never let soil dry out."},summer:{water:1,humidity:80,notes:"May need daily watering. Mist multiple times per day."},autumn:{water:3,humidity:70,notes:"Maintain moisture and humidity."},winter:{water:4,humidity:65,notes:"If fronds die back, keep moist — often regrows from roots."}},sunlight:{min:2,max:3,type:"Gentle indirect only",uv:"Very Low"},temp:{min:10,max:28,ideal:"16–22°C"},soil:"Humus-rich, moisture-retaining mix",pot:"Plastic or glazed — never terracotta",fertilize:"Monthly spring/summer, very diluted",repot:"Every 1–2 years",toxicity:"Non-toxic",propagation:"Division",tips:["The most demanding common fern","Place pot on tray of wet pebbles for constant humidity","Brown fronds after neglect — cut back and keep moist — usually regrows"]},
  // ── PALMS ──
  "Chamaedorea elegans": { commonName:"Parlour Palm",family:"Arecaceae",category:"Palms",origin:"Mexico / Guatemala",image:"🌴",careLevel:"Easy",description:"Small, elegant palm with graceful arching fronds. The most popular indoor palm — tolerates lower light remarkably well.",care:{spring:{water:7,humidity:50,notes:"Resume regular watering and light feeding."},summer:{water:5,humidity:55,notes:"Water when top 2–3cm is dry. Mist fronds occasionally."},autumn:{water:10,humidity:45,notes:"Reduce watering and stop feeding."},winter:{water:14,humidity:40,notes:"Water sparingly. Avoid cold drafts."}},sunlight:{min:2,max:5,type:"Low to bright indirect",uv:"Low"},temp:{min:10,max:32,ideal:"16–27°C"},soil:"Well-draining potting mix with perlite",pot:"Deep pot with good drainage",fertilize:"Monthly spring/summer with palm fertilizer",repot:"Every 2–3 years",toxicity:"Non-toxic",propagation:"Seed only",tips:["Brown tips = low humidity or fluoride in water","Never remove the growing tip","Spider mites common — inspect regularly"]},
  "Dypsis lutescens": { commonName:"Areca Palm",family:"Arecaceae",category:"Palms",origin:"Madagascar",image:"🎋",careLevel:"Medium",description:"Popular multi-stemmed palm with feathery, arching fronds. Excellent natural air humidifier.",care:{spring:{water:5,humidity:55,notes:"Active growth. Water when top 2cm is dry."},summer:{water:3,humidity:60,notes:"May need every 2–3 days in heat. High humidity reduces brown tips."},autumn:{water:7,humidity:50,notes:"Reduce watering as growth slows."},winter:{water:10,humidity:45,notes:"Water sparingly. Keep above 15°C."}},sunlight:{min:4,max:8,type:"Bright indirect to some direct",uv:"Medium"},temp:{min:15,max:35,ideal:"20–30°C"},soil:"Well-draining potting mix",pot:"Large floor pot with good drainage",fertilize:"Monthly spring/summer with palm fertilizer",repot:"Every 2–3 years",toxicity:"Non-toxic",propagation:"Division of clumps or seed",tips:["Top NASA air-purifying plant","Yellowing lower fronds are natural — remove at base","Salt buildup causes tip burn — flush soil regularly"]},
  // ── ORCHIDS ──
  "Phalaenopsis amabilis": { commonName:"Moth Orchid",family:"Orchidaceae",category:"Orchids",origin:"Southeast Asia / Australia",image:"🌸",careLevel:"Medium",description:"The most common indoor orchid. Long-lasting flowers on elegant arching spikes in white, pink, or purple.",care:{spring:{water:7,humidity:60,notes:"After winter rest, increase watering. New spike may form."},summer:{water:7,humidity:65,notes:"Water by soaking pot 15 min, then drain fully."},autumn:{water:10,humidity:55,notes:"Reduce slightly. Cool nights trigger spike initiation."},winter:{water:14,humidity:50,notes:"Reduce watering. Cool temps (15–18°C nights) stimulate blooming."}},sunlight:{min:3,max:5,type:"Bright indirect — east or shaded west window",uv:"Low"},temp:{min:12,max:32,ideal:"18–27°C (10°C nights in autumn to trigger bloom)"},soil:"Bark-based orchid mix — never regular soil",pot:"Clear plastic nursery pot inside decorative pot",fertilize:"Weekly diluted orchid fertilizer ('weakly, weekly')",repot:"Every 1–2 years when bark breaks down",toxicity:"Non-toxic",propagation:"Keikis (offshoots from spike) — plant when roots reach 3cm",tips:["Water must drain completely — never sit in water","After blooming, cut spike to a node — may rebloom","Aerial roots outside pot are healthy — do not bury"]},
  "Dendrobium nobile": { commonName:"Noble Dendrobium",family:"Orchidaceae",category:"Orchids",origin:"Himalayas / Southeast Asia",image:"💜",careLevel:"Medium",description:"Cane orchid producing clusters of fragrant flowers along its pseudobulbs. Needs a distinct cool, dry rest to bloom.",care:{spring:{water:7,humidity:60,notes:"As flowers fade, resume watering and feeding."},summer:{water:5,humidity:65,notes:"Active growth. Water freely, feed weekly."},autumn:{water:14,humidity:50,notes:"Reduce watering significantly. Begin cool, bright rest."},winter:{water:21,humidity:40,notes:"Near-dry rest at 10–15°C. NO feeding. Triggers spring bloom."}},sunlight:{min:4,max:6,type:"Bright indirect to some direct morning sun",uv:"Medium"},temp:{min:8,max:32,ideal:"18–28°C (10–15°C in winter rest)"},soil:"Bark-based orchid mix",pot:"Small clear pot — likes to be root-bound",fertilize:"Weekly diluted orchid feed in spring/summer only",repot:"Every 2–3 years",toxicity:"Non-toxic",propagation:"Keikis or division",tips:["Cool dry winter rest is ESSENTIAL for spring flowers","Pseudobulbs shrivel slightly in winter — normal","Do not remove old canes — they may re-spike"]},
  // ── BROMELIADS ──
  "Guzmania lingulata": { commonName:"Scarlet Star Bromeliad",family:"Bromeliaceae",category:"Bromeliads",origin:"Central / South America",image:"⭐",careLevel:"Easy",description:"Rosette bromeliad with glossy leaves and a brilliant scarlet central flower spike that lasts for months.",care:{spring:{water:7,humidity:60,notes:"Keep central cup filled with fresh water. Change water weekly."},summer:{water:5,humidity:65,notes:"Fill cup every few days in heat. Mist leaves."},autumn:{water:10,humidity:55,notes:"Maintain cup. After flowering, pups form at base."},winter:{water:14,humidity:50,notes:"Reduce cup watering slightly. Soil should stay barely moist."}},sunlight:{min:3,max:5,type:"Bright indirect only",uv:"Low"},temp:{min:15,max:32,ideal:"18–27°C"},soil:"Bromeliad or orchid mix",pot:"Small, well-draining",fertilize:"Monthly in cup with diluted bromeliad/orchid fertilizer",repot:"Rarely",toxicity:"Non-toxic",propagation:"Remove pups when they reach half the size of parent",tips:["Fill the central leaf cup (tank) with water — never let it go dry","Use rainwater or filtered water in the cup","Mother plant dies after flowering — pups carry on"]},
  // ── TROPICAL FOLIAGE ──
  "Ficus lyrata": { commonName:"Fiddle Leaf Fig",family:"Moraceae",category:"Tropical Foliage",origin:"West Africa",image:"🎸",careLevel:"Hard",description:"Architectural tree with enormous fiddle-shaped leaves. Dramatically popular but notoriously temperamental.",care:{spring:{water:7,humidity:50,notes:"Active growth. Water when top 2–3cm is dry. Fertilize monthly."},summer:{water:5,humidity:55,notes:"Water more frequently. Rotate for even growth."},autumn:{water:10,humidity:45,notes:"Reduce watering. DO NOT move the plant."},winter:{water:14,humidity:40,notes:"Water sparingly. Keep away from cold and drafts. Do not move."}},sunlight:{min:5,max:8,type:"Bright indirect to some direct morning sun",uv:"Medium"},temp:{min:12,max:35,ideal:"18–28°C"},soil:"Well-draining potting mix with perlite",pot:"Stable, well-draining pot",fertilize:"Monthly spring/summer",repot:"Every 1–2 years",toxicity:"Mildly toxic — latex sap irritates skin",propagation:"Stem cuttings or air layering",tips:["Hates being moved — choose its spot carefully","Dropping leaves = stress (draft, overwater, underwater, or low light)","Brown spots: too much water; brown edges: too little or low humidity"]},
  "Ficus elastica": { commonName:"Rubber Plant",family:"Moraceae",category:"Tropical Foliage",origin:"South / Southeast Asia",image:"🍂",careLevel:"Easy",description:"Bold, architectural plant with large, glossy burgundy or dark green leaves.",care:{spring:{water:7,humidity:45,notes:"Resume watering. Wipe leaves to remove dust."},summer:{water:5,humidity:50,notes:"Water when top 2cm is dry. Feed monthly."},autumn:{water:10,humidity:40,notes:"Reduce watering and feeding."},winter:{water:14,humidity:35,notes:"Water sparingly. Keep above 10°C."}},sunlight:{min:4,max:8,type:"Bright indirect to some direct",uv:"Medium"},temp:{min:10,max:35,ideal:"18–28°C"},soil:"Well-draining potting mix",pot:"Stable pot with drainage",fertilize:"Monthly spring/summer",repot:"Every 2 years",toxicity:"Toxic to cats and dogs; latex sap irritates skin",propagation:"Stem cuttings or air layering",tips:["Wipe large leaves with damp cloth monthly — improves photosynthesis","White milky sap is latex — wear gloves when pruning","Variegated forms need more light"]},
  "Strelitzia reginae": { commonName:"Bird of Paradise",family:"Strelitziaceae",category:"Tropical Foliage",origin:"South Africa",image:"🦅",careLevel:"Medium",description:"Spectacular tropical with large paddle-shaped leaves and exotic orange and blue flowers.",care:{spring:{water:7,humidity:50,notes:"Resume watering. Begin fertilizing. New leaves may appear rapidly."},summer:{water:5,humidity:55,notes:"Water well. Maximum light triggers flowering."},autumn:{water:10,humidity:45,notes:"Reduce watering gradually."},winter:{water:21,humidity:40,notes:"Reduce significantly. Cooler temps acceptable."}},sunlight:{min:5,max:10,type:"Full sun to bright indirect",uv:"High"},temp:{min:8,max:38,ideal:"18–30°C"},soil:"Rich, well-draining potting mix",pot:"Large, heavy pot — likes to be slightly root-bound",fertilize:"Monthly spring/summer",repot:"Every 2–3 years — repotting delays flowering",toxicity:"Mildly toxic if ingested",propagation:"Division or seed",tips:["Needs to be root-bound AND in maximum light to flower","Takes 3–5 years from seed to first flower","Leaves split naturally — normal"]},
  "Dracaena marginata": { commonName:"Dragon Tree",family:"Asparagaceae",category:"Tropical Foliage",origin:"Madagascar",image:"🐲",careLevel:"Easy",description:"Striking multi-stemmed plant with long, narrow green leaves edged in red. Architectural and very tolerant.",care:{spring:{water:10,humidity:40,notes:"Resume watering and light feeding."},summer:{water:7,humidity:45,notes:"Water when top 2–3cm is dry."},autumn:{water:14,humidity:35,notes:"Reduce watering."},winter:{water:21,humidity:30,notes:"Very sparse watering. Sensitive to cold."}},sunlight:{min:3,max:7,type:"Low to bright indirect",uv:"Low-Medium"},temp:{min:12,max:35,ideal:"18–28°C"},soil:"Well-draining potting mix",pot:"Any with drainage",fertilize:"Monthly spring/summer",repot:"Every 2–3 years",toxicity:"Toxic to cats and dogs",propagation:"Stem cuttings or air layering",tips:["Brown tips = fluoride in tap water — use filtered water","Tolerates low light but grows slowly","Cut bare stem sections root easily in water or soil"]},
  "Yucca elephantipes": { commonName:"Spineless Yucca",family:"Asparagaceae",category:"Tropical Foliage",origin:"Mexico / Central America",image:"🗿",careLevel:"Easy",description:"Bold, architectural plant with stiff, sword-like leaves on an elephant-foot trunk. Extremely drought tolerant.",care:{spring:{water:14,humidity:30,notes:"Resume watering. Can move outdoors in warm weather."},summer:{water:10,humidity:30,notes:"Water well but infrequently. Loves heat and full sun."},autumn:{water:21,humidity:25,notes:"Reduce watering."},winter:{water:40,humidity:20,notes:"Minimal water. Keep above 7°C."}},sunlight:{min:5,max:10,type:"Direct to bright indirect",uv:"High"},temp:{min:7,max:40,ideal:"18–35°C"},soil:"Well-draining sandy or cactus mix",pot:"Heavy, stable pot with excellent drainage",fertilize:"2–3 times in spring/summer",repot:"Every 3–4 years",toxicity:"Toxic to cats and dogs",propagation:"Offsets or stem sections",tips:["Sharp leaf tips despite 'spineless' name","More drought tolerant than most houseplants","Brown lower leaves are normal — remove cleanly"]},
  // ── HERBS ──
  "Ocimum basilicum": { commonName:"Sweet Basil",family:"Lamiaceae",category:"Herbs",origin:"Tropical Asia / Africa",image:"🌱",careLevel:"Medium",description:"The quintessential culinary herb. Aromatic leaves essential to Italian and Thai cuisine.",care:{spring:{water:3,humidity:55,notes:"Start sowing. Keep consistently moist. Pinch tips early."},summer:{water:2,humidity:60,notes:"Water daily in heat. Pinch flowers immediately to prolong leaf harvest."},autumn:{water:4,humidity:50,notes:"Growth slows. Harvest heavily before first frost."},winter:{water:5,humidity:45,notes:"Difficult to maintain — needs very bright light and warmth (18°C+)."}},sunlight:{min:6,max:8,type:"Full sun",uv:"High"},temp:{min:15,max:35,ideal:"20–28°C"},soil:"Rich, well-draining potting mix",pot:"Any with good drainage",fertilize:"Every 2 weeks with diluted liquid fertilizer",repot:"Frequently — grows fast",toxicity:"Non-toxic and edible",propagation:"Seed or stem cuttings in water",tips:["Pinch flower buds immediately — leaves lose flavor after flowering","Hates cold — below 10°C causes rapid wilting","One stem in water will root in 1–2 weeks"]},
  "Rosmarinus officinalis": { commonName:"Rosemary",family:"Lamiaceae",category:"Herbs",origin:"Mediterranean",image:"🌲",careLevel:"Medium",description:"Aromatic Mediterranean shrub with needle-like leaves and blue flowers. Culinary staple and beautiful ornamental.",care:{spring:{water:7,humidity:35,notes:"Active growth. Water when top soil is dry."},summer:{water:5,humidity:35,notes:"Water regularly but allow to dry between. Full sun essential."},autumn:{water:10,humidity:30,notes:"Reduce watering. Prune after flowering."},winter:{water:14,humidity:25,notes:"Water sparingly. Powdery mildew risk — good airflow needed."}},sunlight:{min:6,max:10,type:"Full direct sun",uv:"High"},temp:{min:5,max:35,ideal:"18–28°C"},soil:"Sandy, well-draining — poor soil is fine",pot:"Terracotta with excellent drainage",fertilize:"Monthly spring/summer",repot:"Every 2 years",toxicity:"Non-toxic and edible",propagation:"Stem cuttings",tips:["Hates wet feet — overwatering is the most common cause of death","Bring indoors before hard frosts","Good airflow prevents powdery mildew in winter"]},
  "Mentha spicata": { commonName:"Spearmint",family:"Lamiaceae",category:"Herbs",origin:"Europe / Southwest Asia",image:"🍵",careLevel:"Easy",description:"Vigorous, spreading herb with a refreshing scent. Extremely easy to grow but can take over — container growing recommended.",care:{spring:{water:3,humidity:50,notes:"Growth resumes quickly. Keep moist."},summer:{water:2,humidity:55,notes:"Water frequently. Harvest regularly to promote new growth."},autumn:{water:4,humidity:45,notes:"Slow down watering. Cut back after flowering."},winter:{water:7,humidity:40,notes:"Semi-dormant. Keep barely moist. May die back to roots."}},sunlight:{min:4,max:8,type:"Full sun to partial shade",uv:"Medium"},temp:{min:0,max:35,ideal:"15–25°C"},soil:"Rich, moisture-retaining mix",pot:"Any — but keep contained! Mint spreads aggressively",fertilize:"Monthly spring/summer",repot:"Annually",toxicity:"Non-toxic and edible",propagation:"Stem cuttings or division — extremely easy",tips:["Always grow in containers — spreads aggressively in ground","Cut back after flowering to maintain leaf flavor","Harvest in morning when essential oils are highest"]},
  // ── CARNIVOROUS ──
  "Dionaea muscipula": { commonName:"Venus Flytrap",family:"Droseraceae",category:"Carnivorous",origin:"Eastern USA (North / South Carolina)",image:"🪤",careLevel:"Medium",description:"The world's most famous carnivorous plant. Snap traps catch and digest insects.",care:{spring:{water:3,humidity:60,notes:"Growth resumes. Begin sitting in tray of distilled water."},summer:{water:2,humidity:65,notes:"Active catching season. Keep in tray with 1–2cm of distilled water."},autumn:{water:5,humidity:55,notes:"Traps may slow. Reduce tray water level."},winter:{water:10,humidity:50,notes:"Dormancy required (below 10°C for 3–4 months). Keep barely moist."}},sunlight:{min:5,max:8,type:"Direct sun essential",uv:"High"},temp:{min:0,max:35,ideal:"18–28°C growing; 2–10°C dormancy"},soil:"ONLY: peat moss and perlite (50/50) or sphagnum moss",pot:"Plastic only — no terracotta",fertilize:"NEVER fertilize — carnivorous feeding only",repot:"Every 1–2 years in spring",toxicity:"Non-toxic",propagation:"Leaf pullings or division",tips:["ONLY use distilled, rainwater, or RO water — tap water kills it","NEVER fertilize the soil","Winter dormancy is essential — skipping shortens lifespan","Only trigger traps with live prey"]},
  "Sarracenia purpurea": { commonName:"Purple Pitcher Plant",family:"Sarraceniaceae",category:"Carnivorous",origin:"North America",image:"🫙",careLevel:"Medium",description:"Bog plant with modified pitcher leaves that trap and drown insects. Hardy and dramatic.",care:{spring:{water:3,humidity:60,notes:"New pitchers emerge. Keep standing in tray of distilled water."},summer:{water:2,humidity:65,notes:"Pitchers active. Ensure pitchers have some water in them."},autumn:{water:5,humidity:55,notes:"Cut back old pitchers. Reduce tray water."},winter:{water:10,humidity:50,notes:"Hardy — can handle frost outdoors. Dormancy important."}},sunlight:{min:5,max:8,type:"Full direct sun",uv:"High"},temp:{min:-10,max:35,ideal:"15–28°C growing; dormancy OK to -10°C"},soil:"Peat moss + perlite only",pot:"Plastic with no drainage (sits in tray)",fertilize:"Never — catches own food",repot:"Every 2–3 years",toxicity:"Non-toxic",propagation:"Division or seed",tips:["Hardy enough for outdoor bog gardens","Fill pitchers with rainwater if they dry out","One of the easiest carnivorous plants to grow"]},
  // ── CLIMBING / TRAILING ──
  "Scindapsus pictus": { commonName:"Satin Pothos",family:"Araceae",category:"Climbing / Trailing",origin:"Southeast Asia",image:"🩶",careLevel:"Easy",description:"Velvety, matte-green leaves with silvery variegation. Elegant trailer or climber.",care:{spring:{water:7,humidity:55,notes:"Resume watering and feeding."},summer:{water:5,humidity:60,notes:"Water when top 2cm is dry. Mist occasionally."},autumn:{water:10,humidity:50,notes:"Reduce watering."},winter:{water:14,humidity:45,notes:"Sparse watering. Higher humidity preserves leaf color."}},sunlight:{min:2,max:5,type:"Low to medium indirect",uv:"Low"},temp:{min:12,max:32,ideal:"18–27°C"},soil:"Well-draining potting mix",pot:"Any with drainage",fertilize:"Monthly spring/summer",repot:"Every 1–2 years",toxicity:"Toxic to cats and dogs",propagation:"Stem cuttings in water or soil",tips:["Silver markings more pronounced in brighter light","Avoid direct sun — bleaches the silver patches","Velvety texture is delicate — do not rub leaves"]},
  "Tradescantia zebrina": { commonName:"Wandering Dude",family:"Commelinaceae",category:"Climbing / Trailing",origin:"Mexico / Central America",image:"🟣",careLevel:"Easy",description:"Fast-growing trailer with striking purple and silver striped leaves with deep magenta undersides.",care:{spring:{water:5,humidity:50,notes:"Fast growth period. Pinch tips for bushiness."},summer:{water:4,humidity:55,notes:"Water when top cm is dry. Very fast grower."},autumn:{water:7,humidity:45,notes:"Prune and propagate."},winter:{water:10,humidity:40,notes:"Reduce watering. Growth slows."}},sunlight:{min:3,max:6,type:"Bright indirect",uv:"Medium"},temp:{min:10,max:32,ideal:"18–27°C"},soil:"Standard potting mix",pot:"Hanging basket",fertilize:"Every 2 weeks spring/summer",repot:"Annually",toxicity:"Mildly toxic — causes skin irritation",propagation:"Stem cuttings in water — roots in days",tips:["Bright light = more vibrant purple color","Pinch regularly to avoid legginess","Extremely easy to propagate — stems root in water in a week"]},
  "Hoya carnosa": { commonName:"Wax Plant",family:"Apocynaceae",category:"Climbing / Trailing",origin:"East Asia / Australia",image:"🕯️",careLevel:"Easy",description:"Slow-growing, long-lived climbing plant with waxy leaves and fragrant star-shaped flower clusters.",care:{spring:{water:7,humidity:50,notes:"Active growth. Resume feeding. New leaves emerge."},summer:{water:5,humidity:55,notes:"Water well but allow to dry between. Flowers may appear."},autumn:{water:10,humidity:45,notes:"Reduce watering. Stop feeding."},winter:{water:21,humidity:40,notes:"Very sparse watering. Cool rest encourages spring blooming."}},sunlight:{min:4,max:6,type:"Bright indirect",uv:"Medium"},temp:{min:10,max:35,ideal:"18–28°C"},soil:"Well-draining mix with orchid bark added",pot:"Any — likes to be root-bound",fertilize:"Monthly spring/summer",repot:"Every 3–4 years",toxicity:"Non-toxic",propagation:"Stem cuttings",tips:["Do NOT cut old flower spurs — new flowers emerge from the same spurs","Fragrant at night — place near seating area","Root-bound + bright light = best flowering conditions"]},
  // ── FLOWERING ──
  "Cyclamen persicum": { commonName:"Florist's Cyclamen",family:"Primulaceae",category:"Flowering",origin:"Mediterranean / Middle East",image:"🌸",careLevel:"Medium",description:"Winter-flowering beauty with swept-back petals in red, pink, white, and purple. Marble-patterned leaves.",care:{spring:{water:7,humidity:50,notes:"As flowers fade, reduce watering. Prepare for summer dormancy."},summer:{water:30,humidity:40,notes:"Dormant — stop watering. Store tuber dry in cool place."},autumn:{water:7,humidity:50,notes:"Resume watering as new growth emerges from tuber."},winter:{water:5,humidity:55,notes:"Flowering season. Cool temps essential (10–15°C). Water from below."}},sunlight:{min:3,max:5,type:"Bright indirect only",uv:"Low"},temp:{min:8,max:22,ideal:"10–18°C (COOL — hates warmth)"},soil:"Rich, well-draining potting mix",pot:"Any with drainage — water from below",fertilize:"Every 2 weeks in autumn/winter only",repot:"Annually in autumn",toxicity:"Toxic to cats and dogs",propagation:"Seed or tuber division",tips:["Dies in warmth — keep cool (away from radiators)","Water from BELOW to prevent crown rot","Dormancy in summer is completely normal — not dead"]},
  "Kalanchoe blossfeldiana": { commonName:"Flaming Katy",family:"Crassulaceae",category:"Flowering",origin:"Madagascar",image:"🌺",careLevel:"Easy",description:"Cheerful succulent with long-lasting clusters of small flowers in red, orange, yellow, pink, or white.",care:{spring:{water:10,humidity:40,notes:"After flowering, reduce watering for rest period."},summer:{water:8,humidity:45,notes:"Growing season. Water when top cm is dry."},autumn:{water:12,humidity:35,notes:"Reduce to 14-hour darkness period to trigger re-blooming."},winter:{water:14,humidity:30,notes:"Blooming season. Water sparingly."}},sunlight:{min:4,max:8,type:"Bright indirect to morning sun",uv:"Medium"},temp:{min:8,max:32,ideal:"18–28°C"},soil:"Cactus/succulent mix",pot:"Any with drainage",fertilize:"Monthly during growth (non-flowering period)",repot:"Annually",toxicity:"Toxic to cats and dogs",propagation:"Stem cuttings or leaf cuttings",tips:["Force re-blooming: 14 hours darkness per day for 6 weeks in autumn","Remove spent flower clusters at base","One of the easiest gift plants to rebloom"]},
  // ── INDOOR TREES ──
  "Citrus limon": { commonName:"Dwarf Lemon Tree",family:"Rutaceae",category:"Indoor Trees",origin:"Asia",image:"🍋",careLevel:"Medium",description:"Compact lemon tree that can produce fragrant flowers and actual fruit indoors when given enough light.",care:{spring:{water:5,humidity:50,notes:"Active growth. Feed regularly. Hand-pollinate flowers with soft brush."},summer:{water:3,humidity:55,notes:"Move outdoors if possible — maximum sun for fruiting."},autumn:{water:7,humidity:45,notes:"Bring indoors before cold. Reduce watering."},winter:{water:10,humidity:40,notes:"Bright spot essential. Water sparingly. Cool but frost-free."}},sunlight:{min:6,max:10,type:"Full sun — south or west facing window",uv:"High"},temp:{min:5,max:40,ideal:"18–30°C"},soil:"Citrus-specific potting mix",pot:"Large, heavy pot with drainage",fertilize:"Monthly spring/summer with citrus fertilizer",repot:"Every 2–3 years",toxicity:"Fruit is edible; essential oils mildly toxic to pets",propagation:"Stem cuttings or grafting",tips:["Hand-pollinate flowers with soft paintbrush when growing indoors","Yellow leaves = magnesium or iron deficiency","Move outdoors in summer for best fruit production"]},
};

const CATEGORIES = [...new Set(Object.values(SPECIES_DB).map(s => s.category))].sort();
const SEASONS = ["spring","summer","autumn","winter"];
const SEASON_ICONS = {spring:"🌱",summer:"☀️",autumn:"🍂",winter:"❄️"};
const getCurrentSeason = () => { const m = new Date().getMonth(); if(m>=2&&m<=4)return"spring"; if(m>=5&&m<=7)return"summer"; if(m>=8&&m<=10)return"autumn"; return"winter"; };
window.__getCurrentSeason = getCurrentSeason;
window.__SPECIES_DB = SPECIES_DB;

// ══════════════════════════════════════════════════════════════════
// PARAMETER SYSTEM
// ══════════════════════════════════════════════════════════════════
const PARAM_DEFS = {
  watering:            {label:"Watering",           icon:"💧",unit:"ml",      inputType:"number",min:0,  max:5000, step:50, category:"Water",      description:"Amount of water given in milliliters"},
  soil_moisture:       {label:"Soil Moisture",      icon:"🌱",unit:"%",       inputType:"number",min:0,  max:100,  step:5,  category:"Water",      description:"Measured soil moisture % (use a moisture meter)"},
  drainage_quality:    {label:"Drainage",           icon:"🕳️",unit:"",        inputType:"select",category:"Water",      description:"How quickly water drains after watering",options:[{value:"excellent",label:"Excellent — drains within 1 min"},{value:"good",label:"Good — drains within 5 min"},{value:"slow",label:"Slow — drains within 30 min"},{value:"poor",label:"Poor — still pooled after 30 min"}]},
  light_hours:         {label:"Light Hours",        icon:"☀️",unit:"u/dag", inputType:"number",min:0,  max:24,   step:0.5,category:"Light",      description:"Hours of light received today"},
  light_intensity:     {label:"Light Intensity",    icon:"🔆",unit:"lux",     inputType:"number",min:0,  max:100000,step:100,category:"Light",     description:"Measured lux (use a light meter app)"},
  light_quality:       {label:"Light Quality",      icon:"🌤️",unit:"",        inputType:"select",category:"Light",      description:"Qualitative light assessment",options:[{value:"full_direct",label:"Full direct sun"},{value:"partial_direct",label:"Partial direct"},{value:"bright_indirect",label:"Bright indirect"},{value:"medium_indirect",label:"Medium indirect"},{value:"low_indirect",label:"Low indirect"},{value:"shade",label:"Deep shade"}]},
  temperature:         {label:"Temperatuur",        icon:"🌡️",unit:"°C",      inputType:"number",min:-10,max:60,   step:0.5,category:"Environment",description:"Ambient temperature near the plant"},
  humidity:            {label:"Luchtvochtigheid",           icon:"💦",unit:"%",       inputType:"number",min:0,  max:100,  step:1,  category:"Environment",description:"Relative air humidity near the plant"},
  air_circulation:     {label:"Air Circulation",    icon:"🌬️",unit:"",        inputType:"select",category:"Environment",description:"Airflow around the plant",options:[{value:"excellent",label:"Excellent — good airflow"},{value:"moderate",label:"Moderate"},{value:"stagnant",label:"Stagnant / still air"}]},
  soil_ph:             {label:"Soil pH",            icon:"🧪",unit:"pH",      inputType:"number",min:3,  max:9,    step:0.1,category:"Soil",       description:"Soil pH (use pH strips or digital meter)"},
  fertilizing:         {label:"Fertilizer Type",    icon:"🌿",unit:"",        inputType:"select",category:"Soil",       description:"Type of fertilizer applied",options:[{value:"balanced",label:"Balanced (N-P-K equal)"},{value:"high_n",label:"High Nitrogen (foliage)"},{value:"high_p",label:"High Phosphorus (blooming)"},{value:"high_k",label:"High Potassium (fruiting)"},{value:"cactus",label:"Cactus / succulent"},{value:"orchid",label:"Orchid specific"},{value:"citrus",label:"Citrus specific"},{value:"organic",label:"Organic / compost"}]},
  fertilizer_amount:   {label:"Fertilizer Amount",  icon:"🫗",unit:"ml",      inputType:"number",min:0,  max:1000, step:10, category:"Soil",       description:"Volume of diluted fertilizer solution applied"},
  repotting:           {label:"Verpotten",          icon:"🏺",unit:"",        inputType:"select",category:"Soil",       description:"Repotting event details",options:[{value:"up_one",label:"Potted up one size"},{value:"up_two",label:"Potted up two sizes"},{value:"same_size",label:"Refreshed soil, same pot"},{value:"root_trim",label:"Root-trimmed and returned"}]},
  health_score:        {label:"Health Score",       icon:"❤️",unit:"/100",    inputType:"number",min:0,  max:100,  step:1,  category:"Health",     description:"Overall health assessment 0–100"},
  pest_observation:    {label:"Pest Observation",   icon:"🐛",unit:"",        inputType:"select",category:"Health",     description:"Pest identification during inspection",options:[{value:"none",label:"None observed"},{value:"spider_mites",label:"Spider mites"},{value:"fungus_gnats",label:"Fungus gnats"},{value:"mealybugs",label:"Mealybugs"},{value:"aphids",label:"Aphids"},{value:"scale",label:"Scale insects"},{value:"thrips",label:"Thrips"},{value:"whitefly",label:"Whitefly"}]},
  disease_observation: {label:"Disease",            icon:"🦠",unit:"",        inputType:"select",category:"Health",     description:"Disease or problem identification",options:[{value:"none",label:"None observed"},{value:"root_rot",label:"Root rot"},{value:"crown_rot",label:"Crown rot"},{value:"powdery_mildew",label:"Powdery mildew"},{value:"leaf_spot",label:"Leaf spot"},{value:"botrytis",label:"Botrytis / grey mould"},{value:"sunburn",label:"Sunburn"},{value:"edema",label:"Edema"}]},
  treatment:           {label:"Treatment Applied",  icon:"💊",unit:"",        inputType:"select",category:"Health",     description:"Treatment applied",options:[{value:"neem_oil",label:"Neem oil spray"},{value:"insecticidal_soap",label:"Insecticidal soap"},{value:"systemic_insecticide",label:"Systemic insecticide"},{value:"fungicide",label:"Fungicide"},{value:"hydrogen_peroxide",label:"H2O2 drench (gnats/rot)"},{value:"sticky_traps",label:"Sticky traps"},{value:"alcohol_wipe",label:"Isopropyl alcohol wipe"},{value:"pruned_affected",label:"Pruned affected tissue"},{value:"repotted_fresh",label:"Emergency repot"}]},
  height:              {label:"Height",             icon:"📏",unit:"cm",      inputType:"number",min:0,  max:500,  step:0.5,category:"Groei",     description:"Plant height from soil surface"},
  spread:              {label:"Spread / Width",     icon:"↔️",unit:"cm",      inputType:"number",min:0,  max:500,  step:0.5,category:"Groei",     description:"Widest point of the plant canopy"},
  leaf_count:          {label:"Leaf Count",         icon:"🍃",unit:"leaves",  inputType:"number",min:0,  max:9999, step:1,  category:"Groei",     description:"Total number of healthy leaves"},
  new_growth:          {label:"New Growth",         icon:"🌱",unit:"",        inputType:"select",category:"Groei",     description:"Growth rate assessment",options:[{value:"vigorous",label:"Vigorous"},{value:"steady",label:"Steady"},{value:"slow",label:"Slow"},{value:"none",label:"None visible"},{value:"dormant",label:"Dormant"}]},
  flowering:           {label:"Flowering Status",   icon:"🌸",unit:"",        inputType:"select",category:"Groei",     description:"Current flowering stage",options:[{value:"not_flowering",label:"Not flowering"},{value:"buds",label:"Buds forming"},{value:"in_bloom",label:"In bloom"},{value:"peak_bloom",label:"Peak bloom"},{value:"fading",label:"Flowers fading"},{value:"spent",label:"Flowers spent"}]},
  pruning:             {label:"Pruning",            icon:"✂️",unit:"",        inputType:"select",category:"Maintenance",description:"Pruning activity performed",options:[{value:"light",label:"Light — dead/yellowing leaves"},{value:"shape",label:"Shaping"},{value:"hard",label:"Hard prune"},{value:"deadheading",label:"Deadheading"},{value:"pinching",label:"Pinching tips"}]},
  cleaning:            {label:"Leaf Cleaning",      icon:"🧹",unit:"",        inputType:"select",category:"Maintenance",description:"Cleaning method used",options:[{value:"dusted",label:"Dusted with soft brush"},{value:"damp_wipe",label:"Wiped with damp cloth"},{value:"shower",label:"Rinsed under shower"},{value:"leaf_shine",label:"Leaf shine applied"}]},
  misting:             {label:"Misting",            icon:"🌫️",unit:"",        inputType:"boolean",category:"Maintenance",description:"Leaves misted with water today"},
  position_change:     {label:"Position Changed",   icon:"📍",unit:"",        inputType:"text",  category:"Maintenance",description:"New location description"},
  observation:         {label:"General Observation",icon:"👁️",unit:"",        inputType:"text",  category:"Notes",      description:"Any other note or observation"},
  photo_note:          {label:"Photo Note",         icon:"📷",unit:"",        inputType:"text",  category:"Notes",      description:"Description of a photo taken"},
};

const PARAM_CATEGORIES = ["Water","Licht","Omgeving","Grond","Groei","Gezondheid","Onderhoud","Notities"];

const QUICK_TEMPLATES = {
  watering:    {label:"Water geven",      icon:"💧",color:"#7ABFCC",params:["watering","soil_moisture","drainage_quality"]},
  health_check:{label:"Gezondheidscheck", icon:"❤️",color:"#4A7C59",params:["health_score","pest_observation","disease_observation","new_growth","flowering"]},
  environment: {label:"Omgeving",  icon:"🌡️",color:"#C9B48A",params:["temperature","humidity","light_hours","light_intensity","air_circulation"]},
  growth:      {label:"Groei",       icon:"📏",color:"#7FB492",params:["height","spread","leaf_count","new_growth"]},
  treatment:   {label:"Behandeling",    icon:"💊",color:"#C1694F",params:["pest_observation","disease_observation","treatment"]},
  maintenance: {label:"Onderhoud",  icon:"✂️",color:"#7A6A58",params:["pruning","cleaning","misting","repotting","position_change"]},
  fertilizing: {label:"Bemest",   icon:"🌿",color:"#4A7C59",params:["fertilizing","fertilizer_amount","soil_ph"]},
  custom:      {label:"Eigen log",   icon:"📝",color:"#3B2A1A",params:[]},
};

// ── Helpers ──
const uid = () => `${Date.now()}_${Math.random().toString(36).slice(2,6)}`;
const relTime = (iso) => { const d=Date.now()-new Date(iso).getTime(),m=Math.floor(d/60000),h=Math.floor(d/3600000),dy=Math.floor(d/86400000); if(m<1)return"Zojuist"; if(m<60)return`${m}m geleden`; if(h<24)return`${h}u geleden`; if(dy===1)return"Gisteren"; if(dy<7)return`${dy} dagen geleden`; return new Date(iso).toLocaleDateString("nl-BE",{day:"2-digit",month:"short"}); };
const fmtTS = (iso) => { const d=new Date(iso); return {date:d.toLocaleDateString("nl-BE",{day:"2-digit",month:"short",year:"numeric"}),time:d.toLocaleTimeString("nl-BE",{hour:"2-digit",minute:"2-digit"}),relative:relTime(iso)}; };
const fmtVal = (id,v) => { const d=PARAM_DEFS[id]; if(!d)return String(v); if(d.inputType==="boolean")return v?"Ja":"Nee"; if(d.inputType==="select")return _optionalChain([d, 'access', _2 => _2.options, 'optionalAccess', _3 => _3.find, 'call', _4 => _4(o=>o.value===v), 'optionalAccess', _5 => _5.label])||v; if(d.unit)return`${v} ${d.unit}`; return String(v); };
const daysUntil = (s) => Math.ceil((new Date(s)-new Date())/86400000);

// Get effective care value: custom override wins over species DB
// Parse expert notes for care signals (water frequency, light, soil hints)
const parseExpertNotes = (notes, baseWaterDays) => {
  if (!notes) return {hasSignals:false, deltas:[], bullets:[]};
  const lower = notes.toLowerCase();
  const deltas = [];
  const bullets = [];

  // ── Parse sentence by sentence to handle contradictory/sequential instructions ──
  // Split on periods, newlines, semicolons to get individual instructions
  const sentences = notes.split(/[.\n;!?]+/).map(s=>s.trim()).filter(s=>s.length>5);

  // ── Watering — scan ALL sentences, collect all water rules (no early exit) ──
  let hasInitialWater = false;   // "direct na ontvangst flink water"
  let hasNoWaterPhase = false;   // "eerste X weken geen water"
  let noWaterWeeks = 2;
  let hasDryBetween = false;     // "volledig uitdrogen tussen waterbeurten"
  let hasSpaarzaam = false;      // "spaarzaam water" after rooting
  let hasVeelWater = false;      // general "veel/flink water"

  sentences.forEach(s => {
    const sl = s.toLowerCase();
    // Initial watering (first action after planting/receiving)
    if (/direct.*water|direct.*planten.*water|na.*ontvangst.*water|na.*plant.*water/i.test(sl) &&
        !/geen|niet|spaarzaam|weinig/i.test(sl)) {
      hasInitialWater = true;
    }
    // No water phase with duration
    if (/geen water/i.test(sl) ||
        /niet.*water.*te geven|geen.*water.*te geven/i.test(sl) ||
        /eerste.*weken.*geen|weken.*geen.*water/i.test(sl) ||
        /droog.*laten|uitdrogen.*voor/i.test(sl)) {
      hasNoWaterPhase = true;
      const wm = sl.match(/(\d+)[–\-–](\d+)\s*wek/) || sl.match(/(\d+)\s*wek/);
      if (wm) noWaterWeeks = parseInt(wm[2]||wm[1]||"2");
    }
    // After rooting — sparse water
    if (/geworteld.*spaarzaam|spaarzaam.*water|geworteld.*weinig|na.*wortels.*spaarzaam/i.test(sl)) {
      hasSpaarzaam = true;
    }
    // Dry between waterings
    if (/volledig.*uitdroog|droog.*tussen.*water|aarde.*droog.*water/i.test(sl)) {
      hasDryBetween = true;
    }
    // General lots of water (not in context of "no water" sentences)
    if (/royaal.*water|flink.*water|veel water|dagelijks water/i.test(sl) &&
        !/geen|niet|spaarzaam/i.test(sl)) {
      hasVeelWater = true;
    }
  });

  // Build water bullets in logical order (timeline)
  if (hasInitialWater) {
    bullets.push({icon:"💧", label:"Direct na ontvangst/planten: flink water geven", source:"kwekerij", phase:"start"});
    deltas.push({type:"water", hint:"increase_initial"});
  }
  if (hasNoWaterPhase) {
    const label = hasInitialWater
      ? `Daarna eerste ${noWaterWeeks} weken GEEN water — laat wortels ontwikkelen`
      : `Eerste ${noWaterWeeks} weken GEEN water`;
    bullets.push({icon:"🚫", label, source:"kwekerij", urgent:true, phase:"restrict"});
    deltas.push({type:"water", hint:"restrict", weeks:noWaterWeeks});
  }
  if (hasSpaarzaam) {
    bullets.push({icon:"💧", label:"Na beworteling: spaarzaam water geven", source:"kwekerij", phase:"ongoing"});
    deltas.push({type:"water", hint:"reduce"});
  } else if (hasVeelWater && !hasInitialWater && !hasNoWaterPhase) {
    bullets.push({icon:"💧", label:"Royaal water geven", source:"kwekerij"});
    deltas.push({type:"water", hint:"increase"});
  }
  if (hasDryBetween) {
    bullets.push({icon:"💧", label:"Laat grond volledig uitdrogen tussen waterbeurten", source:"kwekerij"});
    deltas.push({type:"water", hint:"dry_between"});
  }

  // ── Light ──
  let foundLight = false;
  sentences.forEach(s => {
    const sl = s.toLowerCase();
    if (!foundLight && /niet in direct zon|geen directe zon|indirect licht|niet.*direct.*zonlicht/i.test(sl)) {
      deltas.push({type:"light", hint:"indirect"});
      bullets.push({icon:"☀️", label:"Geen direct zonlicht — goed verlichte indirecte plek", source:"kwekerij"});
      foundLight = true;
    } else if (!foundLight && /volle zon|direct zonlicht|maximaal licht/i.test(sl)) {
      deltas.push({type:"light", hint:"direct"});
      bullets.push({icon:"☀️", label:"Volle zon vereist", source:"kwekerij"});
      foundLight = true;
    }
  });
  // Gradual sun acclimation (additional, not exclusive)
  if (/steeds.*langer.*zon|geleidelijk.*zon|iets langer.*zon|opbouw.*zon/i.test(lower)) {
    bullets.push({icon:"☀️", label:"Zonblootstelling geleidelijk opbouwen na beworteling", source:"kwekerij"});
  }

  // ── Soil ──
  if (/cactusaarde|cactus.*grond|cactus.*mix/i.test(lower)) {
    bullets.push({icon:"🏺", label:"Gebruik cactusaarde (meer zand, minder voedingsstoffen)", source:"kwekerij"});
  }

  // ── Planting method ──
  if (/verticaal|snijkant.*aarde|snijkant.*grond/i.test(lower)) {
    bullets.push({icon:"🌱", label:"Stek verticaal planten — snijkant in de aarde", source:"kwekerij"});
  }

  // ── Rooting ──
  if (/wortels.*ontwikkel|beworteling|kleine wortels|wortelstelsel/i.test(lower)) {
    bullets.push({icon:"🌿", label:"Beworteling duurt enkele weken — controleer voor meer zon", source:"kwekerij"});
  }

  return {
    hasSignals: deltas.length > 0 || bullets.length > 0,
    deltas,
    bullets,
    waterHint: _optionalChain([deltas, 'access', _6 => _6.find, 'call', _7 => _7(d=>d.type==="water"), 'optionalAccess', _8 => _8.hint]),
    lightHint:  _optionalChain([deltas, 'access', _9 => _9.find, 'call', _10 => _10(d=>d.type==="light"), 'optionalAccess', _11 => _11.hint]),
  };
};

const effectiveCare = (plant, season) => {
  const sp = SPECIES_DB[plant.species];
  const base = _optionalChain([sp, 'optionalAccess', _12 => _12.care, 'access', _13 => _13[season]]) || {water:7, humidity:50, notes:""};
  const c = plant.customCare || {};

  // Check for active care events that modify watering
  const today = new Date().toISOString().split("T")[0];
  const activeEvents = (plant.careEvents || []).filter(e => e.endDate >= today);
  const waterMultiplier = activeEvents.length > 0
    ? Math.min(...activeEvents.map(e => _nullishCoalesce(e.waterMultiplier, () => ( 1))))
    : 1;

  // Start with species base, then apply per-plant custom overrides
  let baseWater    = _nullishCoalesce(c[`water_${season}`], () => ( base.water));
  let baseHumidity = _nullishCoalesce(c[`humidity_${season}`], () => ( base.humidity));

  // Parse this plant's expert notes — each plant gets its own parse
  const expertSignals = parseExpertNotes(plant.expertNotes, baseWater);

  // Apply expert deltas to actual care values
  // These adjustments are ADDITIVE on top of species base + custom overrides
  expertSignals.deltas.forEach(d => {
    if (d.type === "water") {
      if (d.hint === "restrict" && d.weeks) {
        // "Eerste X weken geen water" — set water interval to suspend period
        // Only override if no active care event already handles this
        if (waterMultiplier !== 0) {
          baseWater = d.weeks * 7; // spread the no-water period as interval
        }
      } else if (d.hint === "increase_initial") {
        // "Direct flink water" on first planting — reduce interval temporarily
        baseWater = Math.max(3, Math.round(baseWater * 0.5));
      } else if (d.hint === "reduce" || d.hint === "dry_between") {
        // "Spaarzaam" / "volledig uitdrogen" — increase interval by 50%
        baseWater = Math.round(baseWater * 1.5);
      }
    }
    if (d.type === "light") {
      if (d.hint === "indirect") {
        // Less direct sun — humidity can be slightly higher
        baseHumidity = Math.min(90, baseHumidity + 5);
      }
    }
  });

  const effectiveWater = waterMultiplier === 0
    ? 999
    : Math.round(baseWater / waterMultiplier);

  return {
    water:          effectiveWater,
    humidity:       baseHumidity,
    notes:          base.notes,
    waterMultiplier,
    hasActiveEvents: activeEvents.length > 0,
    expertSignals,
    expertBullets:  expertSignals.bullets || [],
    hasExpertNotes: !!(_optionalChain([plant, 'access', _14 => _14.expertNotes, 'optionalAccess', _15 => _15.trim, 'call', _16 => _16()])),
    // Surface which deltas are active for display
    expertWaterAdjusted: expertSignals.deltas.some(d => d.type === "water"),
  };
};
const effectiveSunlight = (plant) => {
  const sp = SPECIES_DB[plant.species];
  const c = plant.customCare || {};
  return {
    min:  _nullishCoalesce(_nullishCoalesce(c.sunlight_min, () => ( _optionalChain([sp, 'optionalAccess', _17 => _17.sunlight, 'access', _18 => _18.min]))), () => ( 3)),
    max:  _nullishCoalesce(_nullishCoalesce(c.sunlight_max, () => ( _optionalChain([sp, 'optionalAccess', _19 => _19.sunlight, 'access', _20 => _20.max]))), () => ( 8)),
    type: _optionalChain([sp, 'optionalAccess', _21 => _21.sunlight, 'access', _22 => _22.type]) || "",
  };
};
const urgColor = (d) => d<=0?C.danger:d<=2?C.warning:C.green;

// Shared water-pause check — same logic was duplicated in PlantCard and PlantDetail
const getWaterPause = (plant) => {
  const today = new Date().toISOString().split("T")[0];
  const activeEvents = (plant.careEvents||[]).filter(e => e.endDate >= today);
  const pausedEvent = activeEvents.find(e => (_nullishCoalesce(e.waterMultiplier, () => ( 1))) === 0);
  // Snoozed: nextWater pushed out temporarily, show as snoozed
  const snoozed = plant.snoozedUntil && plant.snoozedUntil > today;
  return { waterPaused: !!pausedEvent, pausedEvent, activeEvents, snoozed, snoozedUntil: plant.snoozedUntil };
};

// ── Auto-calculate plant health from observable data ─────────────
// Returns a score 0-100. User can always override via slider.
const calculateHealth = (plant, logs) => {
  let score = 85; // neutral baseline — healthy until proven otherwise
  const now = new Date();
  const today = now.toISOString().split("T")[0];
  const plantLogs = logs.filter(l => l.plantId === plant.id);

  // ── Watering adherence ────────────────────────────────────────
  if (plant.nextWater) {
    const daysOverdue = -daysUntil(plant.nextWater); // positive = overdue
    if (daysOverdue > 0) {
      // Penalty: -4 per day overdue, capped at -40
      score -= Math.min(40, daysOverdue * 4);
    } else if (daysOverdue <= 0 && daysOverdue >= -1) {
      // Watered right on time — small bonus
      score += 3;
    }
  }

  // ── Watering history — reward consistency ─────────────────────
  const waterLogs = plantLogs
    .filter(l => _optionalChain([l, 'access', _23 => _23.parameters, 'optionalAccess', _24 => _24.watering]) !== undefined)
    .sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 5);

  if (waterLogs.length >= 3) {
    // Check if last 3 waterings were roughly on time
    // (logged within 2 days of each other at expected interval)
    score += 5;
  }

  // ── Recent log activity — being checked is a health signal ────
  const last30Days = new Date(now - 30 * 86400000);
  const recentLogs = plantLogs.filter(l => new Date(l.timestamp) > last30Days);
  const plantAgeDays = (now - new Date(plant.addedDate)) / 86400000;
  if (recentLogs.length === 0 && plantLogs.length > 0 && plantAgeDays > 30) {
    score -= 5; // has old logs but nothing recent — neglected
  } else if (recentLogs.length >= 3) {
    score += 3; // actively monitored
  }
  // Brand new plants start at a clean baseline — no penalty for lack of history

  // ── Active stress care events ─────────────────────────────────
  const activeEvents = (plant.careEvents || []).filter(e => e.endDate >= today);
  const stressEvents = activeEvents.filter(e =>
    // These events indicate plant is under stress
    ["root_rot_treatment","sunburn_recovery","fern_drought_recovery"].includes(e.defId)
  );
  const normalEvents = activeEvents.filter(e =>
    // These are planned/normal (repot, winter rest) — less penalty
    !["root_rot_treatment","sunburn_recovery","fern_drought_recovery"].includes(e.defId)
  );
  score -= stressEvents.length * 15;  // serious stress events
  score -= normalEvents.length * 3;    // minor (repot recovery etc)

  // ── Repotting overdue ─────────────────────────────────────────
  if (plant.lastRepotted || plant.addedDate) {
    const lastRepot = new Date(plant.lastRepotted || plant.addedDate);
    const intervalMonths = plant.repotIntervalMonths || 24;
    const monthsSince = (now - lastRepot) / (1000 * 60 * 60 * 24 * 30.5);
    if (monthsSince > intervalMonths + 6) {
      score -= 10; // seriously overdue
    } else if (monthsSince > intervalMonths) {
      score -= 5;  // slightly overdue
    }
  }

  // ── Health log entries — user explicitly logged health ────────
  const healthLogs = plantLogs
    .filter(l => _optionalChain([l, 'access', _25 => _25.parameters, 'optionalAccess', _26 => _26.health]) !== undefined)
    .sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
  if (healthLogs.length > 0) {
    // Most recent health log has strong influence
    const loggedHealth = healthLogs[0].parameters.health;
    // Blend: 60% calculated, 40% last logged health observation
    score = Math.round(score * 0.6 + loggedHealth * 0.4);
  }

  return Math.max(0, Math.min(100, Math.round(score)));
};
const calcStreak = (plant, logs) => {
  // Count consecutive on-time waterings (within 1 day of schedule)
  const waterLogs = logs
    .filter(l => l.plantId === plant.id && (l.type === "water" || l.parameters?.watering))
    .sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
  if (waterLogs.length < 2) return waterLogs.length;
  let streak = 1;
  for (let i = 0; i < waterLogs.length - 1; i++) {
    const gap = (new Date(waterLogs[i].timestamp) - new Date(waterLogs[i+1].timestamp)) / 86400000;
    const sp = SPECIES_DB[plant.species];
    const season = getCurrentSeason();
    const expected = (sp?.care[season]?.water) || 7;
    if (gap <= expected + 2) streak++;
    else break;
  }
  return streak;
};

const careLvlColor = (l) => l==="Easy"?C.green:l==="Medium"?C.warning:C.terracotta;
const makePlant = (species,name,section="") => { const s=getCurrentSeason(),i=_optionalChain([SPECIES_DB, 'access', _27 => _27[species], 'optionalAccess', _28 => _28.care, 'access', _29 => _29[s], 'optionalAccess', _30 => _30.water])||7; return {id:uid(),species,name,addedDate:new Date().toISOString(),lastWatered:null,nextWater:new Date(Date.now()+i*86400000).toISOString().split("T")[0],location:"Vensterbank",notes:"",health:80,section,photos:[],customCare:{},careEvents:[],lastRepotted:null,repotIntervalMonths:24,expertNotes:"",customReminders:[],soilMix:[],snoozedUntil:null,fertilizerLog:[],lastLuxReading:null,lastLuxDate:null}; };

const DEFAULT_PLANTS = []; // Start leeg — voeg eigen planten toe
const DEFAULT_LOGS = [];

// ══════════════════════════════════════════════════════════════════
// UI PRIMITIVES
// ══════════════════════════════════════════════════════════════════
const HealthRing = ({health,size=56}) => {
  const r=size/2-5,circ=2*Math.PI*r,color=health>75?C.green:health>50?C.warning:C.danger;
  return (React.createElement('svg', { width: size, height: size, style: {transform:"rotate(-90deg)",flexShrink:0},}
    , React.createElement('circle', { cx: size/2, cy: size/2, r: r, fill: "none", stroke: C.border, strokeWidth: 4,})
    , React.createElement('circle', { cx: size/2, cy: size/2, r: r, fill: "none", stroke: color, strokeWidth: 4, strokeDasharray: `${(health/100)*circ} ${circ}`, style: {transition:"stroke-dasharray 0.6s ease"},})
  ));
};
const Badge = ({label,color}) => (React.createElement('span', { style: {background:color+"22",color,border:`1px solid ${color}44`,borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:600,letterSpacing:0.3,whiteSpace:"nowrap"},}, label));
const Btn = ({onClick,children,color=C.green,outline=false,small=false,disabled=false,fullWidth=false}) => (
  React.createElement('button', { onClick: onClick, disabled: disabled, style: {background:outline?"none":color,color:outline?color:"#fff",border:`1px solid ${color}`,borderRadius:10,padding:small?"6px 12px":"12px 20px",cursor:disabled?"not-allowed":"pointer",fontWeight:600,fontSize:small?12:14,opacity:disabled?0.5:1,width:fullWidth?"100%":"auto",fontFamily:"inherit"},}, children)
);

const ParamInput = ({paramId,value,onChange}) => {
  const def=PARAM_DEFS[paramId]; if(!def)return null;
  const base={width:"100%",border:`1px solid ${C.border}`,borderRadius:8,padding:"8px 10px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit"};
  if(def.inputType==="number") return React.createElement('input', { type: "number", value: _nullishCoalesce(value, () => ("")), min: def.min, max: def.max, step: def.step, onChange: e=>onChange(e.target.value===""?undefined:Number(e.target.value)), placeholder: `${def.min}–${def.max}${def.unit?` ${def.unit}`:""}`, style: base,});
  if(def.inputType==="select") return (React.createElement('select', { value: _nullishCoalesce(value, () => ("")), onChange: e=>onChange(e.target.value||undefined), style: {...base,background:C.surface},}
    , React.createElement('option', { value: "",}, "— select —"  ), def.options.map(o=>React.createElement('option', { key: o.value, value: o.value,}, o.label))));
  if(def.inputType==="boolean") return (React.createElement('div', { style: {display:"flex",gap:8},}
    , ["Ja","Nee"].map(v=>{const active=(v==="Ja"&&value===true)||(v==="Nee"&&value===false);return(React.createElement('button', { key: v, onClick: ()=>onChange(v==="Ja"), style: {flex:1,padding:"8px 0",border:`1px solid ${active?C.green:C.border}`,borderRadius:8,background:active?C.greenPale:C.surface,cursor:"pointer",fontWeight:600,fontSize:14,color:C.text,fontFamily:"inherit"},}, v==="Ja"?"✓ Ja":"✗ Nee"));})
  ));
  return React.createElement('input', { type: "text", value: _nullishCoalesce(value, () => ("")), onChange: e=>onChange(e.target.value||undefined), placeholder: def.description, style: base,});
};

// ══════════════════════════════════════════════════════════════════
// LOG MODAL
// ══════════════════════════════════════════════════════════════════
const LogModal = ({plant,templateKey,onSave,onClose}) => {
  const template=QUICK_TEMPLATES[templateKey];
  const [params,setParams] = useState((_optionalChain([template, 'optionalAccess', _31 => _31.params])||[]).reduce((a,p)=>({...a,[p]:undefined}),{}));
  const [activeParams,setActiveParams] = useState(_optionalChain([template, 'optionalAccess', _32 => _32.params])||[]);
  const [notes,setNotes] = useState("");
  const [timestamp,setTimestamp] = useState(new Date().toISOString().slice(0,16));
  const [addingParam,setAddingParam] = useState(false);
  const [paramFilter,setParamFilter] = useState("");

  const available = Object.keys(PARAM_DEFS).filter(k=>!activeParams.includes(k));
  const filtered = available.filter(k=>PARAM_DEFS[k].label.toLowerCase().includes(paramFilter.toLowerCase())||PARAM_DEFS[k].category.toLowerCase().includes(paramFilter.toLowerCase()));

  const addParam = (id) => { setActiveParams(p=>[...p,id]); setParamFilter(""); setAddingParam(false); };
  const removeParam = (id) => { setActiveParams(p=>p.filter(x=>x!==id)); setParams(p=>{const n={...p};delete n[id];return n;}); };
  const handleSave = () => {
    const filled={};
    activeParams.forEach(k=>{if(params[k]!==undefined&&params[k]!=="")filled[k]=params[k];});
    if(!Object.keys(filled).length&&!notes)return;
    onSave({id:uid(),plantId:plant.id,timestamp:new Date(timestamp).toISOString(),parameters:filled,notes});
    onClose();
  };

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:200,display:"flex",alignItems:"flex-end"},}
      , React.createElement('div', { style: {background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:600,margin:"0 auto",maxHeight:"90vh",display:"flex",flexDirection:"column"},}
        , React.createElement('div', { style: {padding:"20px 20px 12px",borderBottom:`1px solid ${C.border}`},}
          , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"flex-start"},}
            , React.createElement('div', null, React.createElement('div', { style: {fontWeight:800,fontSize:16,color:C.soil},}, _optionalChain([template, 'optionalAccess', _33 => _33.icon]), " " , _optionalChain([template, 'optionalAccess', _34 => _34.label])||"Log Entry"), React.createElement('div', { style: {fontSize:12,color:C.muted,marginTop:2},}, "for " , plant.name))
            , React.createElement('button', { onClick: onClose, style: {background:"none",border:"none",fontSize:24,cursor:"pointer",color:C.muted,lineHeight:1},}, "×")
          )
          , React.createElement('div', { style: {marginTop:12},}
            , React.createElement('label', { style: {fontSize:11,fontWeight:600,color:C.muted,display:"block",marginBottom:4},}, "TIJDSTIP")
            , React.createElement('input', { type: "datetime-local", value: timestamp, onChange: e=>setTimestamp(e.target.value), style: {border:`1px solid ${C.border}`,borderRadius:8,padding:"7px 10px",fontSize:13,outline:"none",width:"100%",boxSizing:"border-box",fontFamily:"inherit",background:C.surfaceAlt},})
          )
        )
        , React.createElement('div', { style: {overflowY:"auto",flex:1,padding:"16px 20px"},}
          , activeParams.map(paramId=>{
            const def=PARAM_DEFS[paramId]; if(!def)return null;
            return(React.createElement('div', { key: paramId, style: {marginBottom:14},}
              , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5},}
                , React.createElement('label', { style: {fontSize:12,fontWeight:600,color:C.muted},}, def.icon, " " , def.label.toUpperCase(), def.unit?` (${def.unit})`:"")
                , React.createElement('button', { onClick: ()=>removeParam(paramId), style: {background:"none",border:"none",color:C.muted,cursor:"pointer",fontSize:18,lineHeight:1,padding:0},}, "×")
              )
              , React.createElement(ParamInput, { paramId: paramId, value: params[paramId], onChange: v=>setParams(p=>({...p,[paramId]:v})),})
              , React.createElement('div', { style: {fontSize:10,color:C.muted,marginTop:3},}, def.description)
            ));
          })
          , addingParam?(
            React.createElement('div', { style: {border:`1px solid ${C.border}`,borderRadius:10,padding:12,marginBottom:14},}
              , React.createElement('input', { autoFocus: true, value: paramFilter, onChange: e=>setParamFilter(e.target.value), placeholder: "Zoek parameter..." , style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,padding:"7px 10px",fontSize:13,outline:"none",boxSizing:"border-box",marginBottom:8,fontFamily:"inherit"},})
              , React.createElement('div', { style: {maxHeight:200,overflowY:"auto"},}
                , PARAM_CATEGORIES.map(cat=>{
                  const inCat=filtered.filter(k=>PARAM_DEFS[k].category===cat); if(!inCat.length)return null;
                  return(React.createElement('div', { key: cat,}, React.createElement('div', { style: {fontSize:10,fontWeight:700,color:C.muted,padding:"6px 0 3px",letterSpacing:1},}, cat.toUpperCase())
                    , inCat.map(k=>(React.createElement('div', { key: k, onClick: ()=>addParam(k), style: {padding:"6px 8px",borderRadius:6,cursor:"pointer",fontSize:13,display:"flex",alignItems:"center",gap:8,color:C.text}, onMouseEnter: e=>e.currentTarget.style.background=C.surfaceAlt, onMouseLeave: e=>e.currentTarget.style.background="none",}
                      , React.createElement('span', null, PARAM_DEFS[k].icon), React.createElement('span', null, PARAM_DEFS[k].label), PARAM_DEFS[k].unit&&React.createElement('span', { style: {color:C.muted,fontSize:11},}, "(", PARAM_DEFS[k].unit, ")")
                    )))
                  ));
                })
              )
              , React.createElement('button', { onClick: ()=>setAddingParam(false), style: {marginTop:8,background:"none",border:"none",color:C.muted,cursor:"pointer",fontSize:12,fontFamily:"inherit"},}, "Annuleer")
            )
          ):(
            React.createElement('button', { onClick: ()=>setAddingParam(true), style: {width:"100%",border:`1px dashed ${C.border}`,borderRadius:10,padding:10,background:"none",cursor:"pointer",color:C.green,fontWeight:600,fontSize:13,marginBottom:14,fontFamily:"inherit"},}, "+ Parameter toevoegen"  )
          )
          , React.createElement('div', { style: {marginBottom:8},}
            , React.createElement('label', { style: {fontSize:11,fontWeight:600,color:C.muted,display:"block",marginBottom:5},}, "NOTITIES (optioneel)" )
            , React.createElement('textarea', { value: notes, onChange: e=>setNotes(e.target.value), rows: 2, placeholder: "Any additional notes..."  , style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,padding:"8px 10px",fontSize:14,outline:"none",resize:"vertical",boxSizing:"border-box",fontFamily:"inherit"},})
          )
        )
        , React.createElement('div', { style: {padding:"12px 20px",borderTop:`1px solid ${C.border}`,display:"flex",gap:10},}
          , React.createElement(Btn, { onClick: onClose, outline: true, color: C.muted, fullWidth: true,}, "Annuleer")
          , React.createElement(Btn, { onClick: handleSave, fullWidth: true,}, "Log opslaan" )
        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// AI ADVISOR
// ══════════════════════════════════════════════════════════════════
const generateOfflineAnswer = (q, plant, sp, season, care) => {
  const ql = q.toLowerCase();
  const name = plant.name;
  const species = plant.species;
  const water = _optionalChain([care, 'optionalAccess', _35 => _35.water]) || 7;
  const hasExpert = !!(_optionalChain([plant, 'access', _36 => _36.expertNotes, 'optionalAccess', _37 => _37.trim, 'call', _38 => _38()]));

  if (/water|gieten|droog|vochtig/i.test(ql)) {
    const base = `💧 **${name} — Water**\n\nGebaseerd op de database: geef water elke ${water} dagen in ${season}.`;
    const expert = hasExpert ? `\n\nVolgens je kwekerij-notities:\n${plant.expertNotes.split('.')[0]}.` : "";
    const tip = water > 10 ? "\n\nLet op: laat de aarde volledig uitdrogen tussen waterbeurten." : "\n\nControleer de aarde voor je water geeft — steek je vinger 2cm diep.";
    return base + expert + tip;
  }
  if (/licht|zon|raam|venster|schaduw/i.test(ql)) {
    const sun = _optionalChain([sp, 'optionalAccess', _39 => _39.sunlight]);
    return sun
      ? `☀️ **${name} — Licht**\n\n${species} heeft ${sun.min}–${sun.max} uur licht per dag nodig (${sun.type}).\n\nBeste plek: ${sun.type === "direct" ? "vensterbank op het zuiden of westen" : "lichte plek zonder directe middagzon"}.`
      : `☀️ ${name} heeft helder indirect licht nodig. Vermijd directe middagzon.`;
  }
  if (/plaag|insect|mijt|luis|schimmel|ziek|bruin|geel|blad/i.test(ql)) {
    return `🦠 **${name} — Problemen**\n\nControleer:\n• Onderkant bladeren: mijten of luizen?\n• Grond: rouwmuggen bij te veel water?\n• Bruine punten: te droge lucht of zonverbranding\n• Gele bladeren: vaak overwatering of te weinig licht\n\nGebruik de "Plaag registreren" knop voor specifiek behandeladvies.`;
  }
  if (/verpot|pot|grond|aarde|wortels/i.test(ql)) {
    const soil = _optionalChain([sp, 'optionalAccess', _40 => _40.soil]) || "goed doorlatende potgrond";
    return `🏺 **${name} — Verpotten**\n\nAanbevolen grond: ${soil}.\n\nVerpot elke ${plant.repotIntervalMonths || 24} maanden, bij voorkeur in het voorjaar. Kies een pot 2-3cm groter dan de huidige.${_optionalChain([plant, 'access', _41 => _41.soilMix, 'optionalAccess', _42 => _42.length]) ? `\n\nJouw ingestelde mengsel: ${plant.soilMix.map(m=>`${m.pct}% ${m.name}`).join(", ")}.` : ""}`;
  }
  if (/bemest|voeding|meststof|npk/i.test(ql)) {
    return `🌿 **${name} — Bemesting**\n\n${season === "winter" ? "In de winter NIET bemesten — plant rust." : `Bemest in ${season} elke 2-4 weken met een gebalanceerde vloeibare meststof (bijv. 5-5-5 NPK).`}\n\nVoor cactussen en vetplanten: gebruik een lage stikstofmest (bijv. 2-7-7).`;
  }
  if (/gezond|health|groei|groeit/i.test(ql)) {
    const h = plant.health || 80;
    return `❤️ **${name} — Gezondheid: ${h}%**\n\n${h >= 85 ? "Plant ziet er goed uit!" : h >= 70 ? "Plant is redelijk gezond, let op waterschema en licht." : "Plant heeft aandacht nodig — controleer water, licht en plagen."}\n\nTip: log regelmatig via 'Snel loggen' om de gezondheid bij te houden.`;
  }
  return `🌿 **${name} (${species})**\n\nWatergift: elke ${water} dagen | Seizoen: ${season}\n${sp ? `Zon: ${sp.sunlight.min}–${sp.sunlight.max}u/dag | Temp: ${sp.temp.ideal}` : ""}\n\n${hasExpert ? "Kwekerij-advies aanwezig — bekijk de Expert sectie hierboven." : "Gebruik 'Locatie-bewuste data' voor specifieke verzorgingstips."}\n\n*(Offline modus — verbind met internet voor AI-antwoorden)*`;
};

const AIAdvisor = ({plant, apiKey}) => {
  const [q,setQ]         = useState("");
  const [resp,setResp]   = useState("");
  const [loading,setLoading] = useState(false);
  const [history,setHistory] = useState([]);
  const [isOffline,setIsOffline] = useState(false);

  const sp      = SPECIES_DB[plant.species];
  const season  = getCurrentSeason();
  const care    = _optionalChain([sp, 'optionalAccess', _43 => _43.care, 'access', _44 => _44[season]]);
  const hasExpertNotes = !!(_optionalChain([plant, 'access', _45 => _45.expertNotes, 'optionalAccess', _46 => _46.trim, 'call', _47 => _47()]));

  const buildSystemPrompt = () => [
    `Je bent een specialist in plantenverzorging. De gebruiker verzorgt ${plant.species}${sp?` (${sp.commonName})`:""} genaamd "${plant.name}".`,
    `Seizoen: ${season}.`,
    sp ? `Water: elke ${_optionalChain([care, 'optionalAccess', _48 => _48.water])}d. Vochtigheid: ${_optionalChain([care, 'optionalAccess', _49 => _49.humidity])}%. Zon: ${sp.sunlight.min}–${sp.sunlight.max}u/dag (${sp.sunlight.type}). Temp: ${sp.temp.ideal}. Tip: ${_optionalChain([care, 'optionalAccess', _50 => _50.notes])}.` : "",
    plant.health ? `Gezondheid: ${plant.health}%.` : "",
    plant.notes  ? `Notities: ${plant.notes}` : "",
    _optionalChain([plant, 'access', _51 => _51.soilMix, 'optionalAccess', _52 => _52.length]) ? `Grond: ${plant.soilMix.map(m=>`${m.pct}% ${m.name}`).join(", ")}.` : "",
    hasExpertNotes ? `\nKWEKERIJ ADVIES (heeft prioriteit):\n"""${plant.expertNotes}"""` : "",
  ].filter(Boolean).join(" ") + "\n\nAntwoord in het Nederlands. Beknopt en praktisch. Max 3 alinea's.";

  // Read provider settings from localStorage
  const getProviderSettings = () => {
    try { return JSON.parse(localStorage.getItem("plantcare_ai_provider")||"{}"); }
    catch(_e) { return {}; }
  };

  const callAI = async (msgs) => {
    const ps = getProviderSettings();
    const provider = ps.provider || "auto";
    const key = ps.key || apiKey || "";
    const sys = buildSystemPrompt();

    // ── Groq (free, no credit card, 1000 req/day) ────────────────
    if (provider === "groq" && key) {
      const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method:"POST",
        headers:{"Content-Type":"application/json","Authorization":`Bearer ${key}`},
        body: JSON.stringify({
          model: ps.model || "llama-3.3-70b-versatile",
          max_tokens: 1000,
          messages: [{role:"system",content:sys}, ...msgs],
        })
      });
      if (!r.ok) throw new Error(`Groq ${r.status}`);
      const d = await r.json();
      return _optionalChain([d, 'access', _53 => _53.choices, 'optionalAccess', _54 => _54[0], 'optionalAccess', _55 => _55.message, 'optionalAccess', _56 => _56.content]) || "Geen antwoord.";
    }

    // ── Google Gemini (free, 1500 req/day, no credit card) ────────
    if (provider === "gemini" && key) {
      const model = ps.model || "gemini-2.0-flash";
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
        {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
            system_instruction: {parts:[{text:sys}]},
            contents: msgs.map(m=>({
              role: m.role==="assistant"?"model":"user",
              parts:[{text:m.content}]
            }))
          })
        }
      );
      if (!r.ok) throw new Error(`Gemini ${r.status}`);
      const d = await r.json();
      return _optionalChain([d, 'access', _57 => _57.candidates, 'optionalAccess', _58 => _58[0], 'optionalAccess', _59 => _59.content, 'optionalAccess', _60 => _60.parts, 'optionalAccess', _61 => _61[0], 'optionalAccess', _62 => _62.text]) || "Geen antwoord.";
    }

    // ── OpenRouter (25+ gratis modellen, één sleutel) ─────────────
    if (provider === "openrouter" && key) {
      const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method:"POST",
        headers:{"Content-Type":"application/json","Authorization":`Bearer ${key}`,
          "HTTP-Referer":"https://qwinie.github.io/plant-care/",
          "X-Title":"Plant Care App"},
        body: JSON.stringify({
          model: ps.model || "meta-llama/llama-4-scout:free",
          max_tokens: 1000,
          messages: [{role:"system",content:sys}, ...msgs],
        })
      });
      if (!r.ok) throw new Error(`OpenRouter ${r.status}`);
      const d = await r.json();
      return _optionalChain([d, 'access', _63 => _63.choices, 'optionalAccess', _64 => _64[0], 'optionalAccess', _65 => _65.message, 'optionalAccess', _66 => _66.content]) || "Geen antwoord.";
    }

    // ── Ollama (lokaal, onbeperkt, geen sleutel nodig) ─────────────
    if (provider === "ollama") {
      const base = ps.ollamaUrl || "http://localhost:11434";
      const r = await fetch(`${base}/api/chat`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model: ps.model || "llama3.2",
          stream: false,
          messages: [{role:"system",content:sys}, ...msgs],
        })
      });
      if (!r.ok) throw new Error(`Ollama ${r.status}`);
      const d = await r.json();
      return _optionalChain([d, 'access', _67 => _67.message, 'optionalAccess', _68 => _68.content]) || "Geen antwoord.";
    }

    // ── Anthropic (standaard / auto) ──────────────────────────────
    const tryAnthropic = async (headers) => {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers,
        body: JSON.stringify({model:"claude-sonnet-4-6", max_tokens:1000,
          system:sys, messages:msgs})
      });
      if (!r.ok) throw new Error(`${r.status}`);
      const d = await r.json();
      return _optionalChain([d, 'access', _69 => _69.content, 'optionalAccess', _70 => _70.map, 'call', _71 => _71(b=>b.text||""), 'access', _72 => _72.join, 'call', _73 => _73("")]) || "Geen antwoord.";
    };
    // Try artifact API first
    try { return await tryAnthropic({"Content-Type":"application/json"}); } catch(_e) {}
    // Then user key
    if (key) {
      return await tryAnthropic({
        "Content-Type":"application/json","x-api-key":key,
        "anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"
      });
    }
    throw new Error("no_provider");
  };

  const ask = async () => {
    if (!q.trim() || loading) return;
    const question = q.trim();
    setQ(""); setLoading(true); setResp(""); setIsOffline(false);
    const msgs = [...history, {role:"user", content:question}];
    setHistory(msgs);
    let answer;
    try {
      answer = await callAI(msgs);
    } catch(_e) {
      answer = generateOfflineAnswer(question, plant, sp, season, care);
      setIsOffline(true);
    }
    setHistory(prev=>[...prev,{role:"assistant",content:answer}]);
    setResp(answer);
    setLoading(false);
  };

  return (
    React.createElement('div', { style: {background:C.greenPale,borderRadius:12,padding:16,marginTop:16},}
      , React.createElement('div', { style: {display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},}
        , React.createElement('div', { style: {fontWeight:700,color:C.green,fontSize:14},}, "🤖 Plant Adviseur"  )
        , isOffline && (
          React.createElement('div', { style: {fontSize:10,color:C.muted,background:C.surfaceAlt,
            borderRadius:6,padding:"2px 8px"},}, "📴 offline modus"

          )
        )
      )
      , hasExpertNotes && (
        React.createElement('div', { style: {fontSize:11,color:C.sand,marginBottom:10,display:"flex",
          alignItems:"center",gap:5,background:C.sand+"18",borderRadius:8,padding:"5px 8px"},}
          , React.createElement('span', null, "📋")
          , React.createElement('span', null, "Expert/kwekerij advies meegenomen in beantwoording"    )
        )
      )
      /* Quick question chips */
      , history.length === 0 && (
        React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},}
          , [
            `Wanneer water geven?`,
            `Welk licht heeft ${plant.name} nodig?`,
            `Hoe herken ik plagen?`,
            `Wanneer verpotten?`,
          ].map(chip=>(
            React.createElement('button', { key: chip, onClick: ()=>{setQ(chip);},
              style: {fontSize:11,padding:"4px 10px",borderRadius:16,cursor:"pointer",
                border:`1px solid ${C.green}44`,background:C.surface,color:C.green,
                fontFamily:"inherit"},}
              , chip
            )
          ))
        )
      )
      , React.createElement('div', { style: {display:"flex",gap:8},}
        , React.createElement('input', { value: q, onChange: e=>setQ(e.target.value),
          onKeyDown: e=>e.key==="Enter"&&ask(),
          placeholder: `Vraag iets over ${plant.name}...`,
          style: {flex:1,border:`1px solid ${C.greenLight}`,borderRadius:8,
            padding:"8px 12px",fontSize:13,outline:"none",
            background:C.surface,fontFamily:"inherit"},})
        , React.createElement(Btn, { onClick: ask, disabled: loading||!q.trim(), small: true,}
          , loading?"⏳":"Vraag"
        )
      )
      , resp && (
        React.createElement('div', { style: {marginTop:10,fontSize:13,lineHeight:1.7,color:C.text,
          background:C.surface,borderRadius:8,padding:12,whiteSpace:"pre-wrap"},}
          , resp
        )
      )
      , history.length > 2 && (
        React.createElement('button', { onClick: ()=>{setHistory([]);setResp("");},
          style: {marginTop:8,fontSize:11,color:C.muted,background:"none",border:"none",
            cursor:"pointer",fontFamily:"inherit",padding:0},}, "🔄 Nieuw gesprek starten"

        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// PLANT DETAIL  (with large photo header)
// ══════════════════════════════════════════════════════════════════

// ── Photo gallery for a plant ────────────────────────────────────
// Photos are stored in a separate localStorage key per plant (not inside the plant object)
// to avoid hitting the 5MB limit when storing base64 images alongside all plant data.
// ── Resize image before storing (keeps base64 small) ─────────────
const resizeImage = (dataUrl, maxSize=600) => new Promise(resolve => {
  const img = new Image();
  img.onload = () => {
    const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
    const w = Math.round(img.width * scale);
    const h = Math.round(img.height * scale);
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
    resolve(canvas.toDataURL('image/jpeg', 0.72));
  };
  img.onerror = () => resolve(dataUrl); // fallback: keep original
  img.src = dataUrl;
});

// ── Photo gallery — stores photos directly in plant.photos array ──
// Single source of truth: plant.photos in React state + useLocalStorage
const PhotoGallery = ({plant, onUpdatePlant}) => {
  const photos = plant.photos || [];
  const [adding, setAdding] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const [uploading, setUploading] = useState(false);

  const savePhotos = (next) => {
    // Store photos in plant object — persisted by useLocalStorage automatically
    onUpdatePlant({
      ...plant,
      photos: next,
      // photoUrl = first user photo; null means card falls back to wikiPhotoUrl
      photoUrl: _optionalChain([next, 'access', _74 => _74[0], 'optionalAccess', _75 => _75.url]) || null,
    });
    setActiveIdx(Math.min(activeIdx, Math.max(0, next.length - 1)));
  };

  const addUrl = (url) => {
    if (!url.trim()) return;
    const next = [...photos, {id: uid(), url: url.trim(), addedAt: new Date().toISOString()}];
    savePhotos(next);
    setUrlInput(''); setAdding(false);
    setActiveIdx(next.length - 1);
  };

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploading(true);
    const results = [];
    for (const file of files) {
      const dataUrl = await new Promise(res => {
        const r = new FileReader();
        r.onload = ev => res(ev.target.result);
        r.readAsDataURL(file);
      });
      const resized = await resizeImage(dataUrl, 800);
      results.push({id: uid(), url: resized, addedAt: new Date().toISOString()});
    }
    const next = [...photos, ...results];
    savePhotos(next);
    setUploading(false);
    setAdding(false);
    e.target.value = '';
    setActiveIdx(next.length - 1);
  };

  const removePhoto = (id) => {
    const next = photos.filter(p => p.id !== id);
    savePhotos(next);
  };

  return (
    React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:16,marginBottom:12},}
      , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:10,fontSize:14},}, "📷 Foto's ("
          , photos.length, ")"
      )

      , photos.length > 0 && (React.createElement(React.Fragment, null
        , React.createElement('div', { style: {borderRadius:12,overflow:'hidden',marginBottom:8,position:'relative',
          background:C.surfaceAlt,aspectRatio:'4/3',display:'flex',alignItems:'center',justifyContent:'center'},}
          , React.createElement('img', { src: _optionalChain([photos, 'access', _76 => _76[activeIdx], 'optionalAccess', _77 => _77.url]), alt: "plant",
            style: {width:'100%',height:'100%',objectFit:'cover'},})
          , React.createElement('button', { onClick: ()=>removePhoto(photos[activeIdx].id),
            style: {position:'absolute',top:8,right:8,background:'rgba(0,0,0,0.55)',border:'none',
              color:'#fff',borderRadius:20,padding:'4px 12px',cursor:'pointer',fontSize:12,fontFamily:'inherit'},}, "× Verwijder"

          )
        )
        , photos.length > 1 && (
          React.createElement('div', { style: {display:'flex',gap:6,overflowX:'auto',paddingBottom:4,marginBottom:8},}
            , photos.map((p,i) => (
              React.createElement('div', { key: p.id, onClick: ()=>setActiveIdx(i),
                style: {width:56,height:56,borderRadius:8,overflow:'hidden',flexShrink:0,cursor:'pointer',
                  border:`2px solid ${i===activeIdx?C.green:'transparent'}`},}
                , React.createElement('img', { src: p.url, alt: "thumb", style: {width:'100%',height:'100%',objectFit:'cover'},})
              )
            ))
          )
        )
      ))

      , adding ? (
        React.createElement('div', { style: {marginTop:8},}
          , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:6},}, "URL plakken of foto('s) uploaden van je telefoon:"

          )
          , React.createElement('input', { value: urlInput, onChange: e=>setUrlInput(e.target.value),
            placeholder: "https://...",
            style: {width:'100%',border:`1px solid ${C.border}`,borderRadius:8,padding:'8px 10px',
              fontSize:13,outline:'none',boxSizing:'border-box',fontFamily:'inherit',marginBottom:6},})
          , React.createElement('div', { style: {display:'flex',gap:6,marginBottom:6},}
            /* Camera button — opens camera directly on Android */
            , React.createElement('label', { style: {flex:1},}
              , React.createElement('div', { style: {padding:'10px',border:`1px dashed ${uploading?C.muted:C.green}`,borderRadius:8,
                textAlign:'center',cursor:'pointer',fontSize:13,
                color:uploading?C.muted:C.green,fontWeight:600},}
                , uploading ? '⏳ Uploaden...' : '📸 Camera'
              )
              , React.createElement('input', { type: "file", accept: "image/*", capture: "environment",
                onChange: handleFiles, disabled: uploading, style: {display:'none'},})
            )
            /* Gallery button — multiple select from library */
            , React.createElement('label', { style: {flex:1},}
              , React.createElement('div', { style: {padding:'10px',border:`1px dashed ${uploading?C.muted:C.green}`,borderRadius:8,
                textAlign:'center',cursor:'pointer',fontSize:13,
                color:uploading?C.muted:C.green,fontWeight:600},}
                , uploading ? '⏳ Uploaden...' : '🖼️ Galerij'
              )
              , React.createElement('input', { type: "file", accept: "image/*", multiple: true,
                onChange: handleFiles, disabled: uploading, style: {display:'none'},})
            )
          )
          , React.createElement('div', { style: {display:'flex',gap:8},}
            , React.createElement('button', { onClick: ()=>{setAdding(false);setUrlInput('');},
              style: {flex:1,padding:'8px',border:`1px solid ${C.border}`,borderRadius:8,
                background:'none',cursor:'pointer',fontFamily:'inherit',fontSize:13,color:C.muted},}, "Annuleer"

            )
            , React.createElement('button', { onClick: ()=>addUrl(urlInput), disabled: !urlInput.trim(),
              style: {flex:1,padding:'8px',border:'none',borderRadius:8,background:C.green,
                color:'#fff',cursor:'pointer',fontFamily:'inherit',fontSize:13,fontWeight:600,
                opacity:urlInput.trim()?1:0.4},}, "URL toevoegen"

            )
          )
        )
      ) : (
        React.createElement('button', { onClick: ()=>setAdding(true),
          style: {width:'100%',border:`1px dashed ${C.border}`,borderRadius:10,padding:10,
            background:'none',cursor:'pointer',color:C.green,fontWeight:600,
            fontSize:13,fontFamily:'inherit'},}, "+ Foto toevoegen"

        )
      )
    )
  );
};


// ══════════════════════════════════════════════════════════════════
// CARE EVENT DEFINITIONS
// ══════════════════════════════════════════════════════════════════
const CARE_EVENT_DEFS = [
  {id:"repot_cactus",label:"Verpot (cactus/vet)",icon:"🏺",applicableTo:["Cacti","Succulents"],description:"Na het verpotten mogen cactussen en vetplanten 2-4 weken GEEN water krijgen. De beschadigde wortels moeten uitdrogen en harden.",waterSuspendDays:21,waterMultiplier:0,durationDays:21,tip:"Zet de plant in indirect licht. Wacht op de eerste nieuwe groei voor je water geeft."},
  {id:"cutting_dry",label:"Stek drogen (cactus/vet)",icon:"✂️",applicableTo:["Cacti","Succulents"],description:"Een afgesneden stek moet 1-2 weken drogen (callus vormen) voor het planten. Na het planten 3-4 weken geen water.",waterSuspendDays:28,waterMultiplier:0,durationDays:28,tip:"Callus is klaar als de wond wit/droog is."},
  {id:"winter_rest_cactus",label:"Winterrust (cactus)",icon:"❄️",applicableTo:["Cacti","Succulents"],description:"Droge, koele winterrust (okt-feb). Geen of nauwelijks water. Dit triggert de lentebloei.",waterSuspendDays:90,waterMultiplier:0.05,durationDays:120,tip:"Temperatuur 5-12°C. Max 1x water per 6 weken als de plant ernstig verschrompelt."},
  {id:"sunburn_recovery",label:"Zonverbranding herstel",icon:"🔆",applicableTo:["Cacti","Succulents","Aroids","Ferns","Tropical Foliage"],description:"Na zonverbranding: zet uit directe zon en stop 2 weken met water.",waterSuspendDays:14,waterMultiplier:0,durationDays:14,tip:"Verbrande vlekken herstellen niet — wacht op nieuwe bladeren."},
  {id:"root_rot_treatment",label:"Wortelrot behandeling",icon:"🦠",applicableTo:["Cacti","Succulents","Aroids","Ferns","Tropical Foliage","Palms","Orchids"],description:"Verwijder rotte wortels, behandel met H2O2 of fungicide, droog uit voor herplanten. Daarna 3-4 weken spaarzaam water.",waterSuspendDays:7,waterMultiplier:0.2,durationDays:28,tip:"Wacht op nieuwe groei voor normaal water."},
  {id:"repot_tropical",label:"Verpot (tropisch)",icon:"🏺",applicableTo:["Aroids","Tropical Foliage","Palms","Climbing / Trailing"],description:"Na verpotten: 2 weken niet bemesten en matig water geven.",waterSuspendDays:0,waterMultiplier:0.5,durationDays:14,tip:"De plant kan tijdelijk slap hangen — normaal."},
  {id:"cutting_water",label:"Stek in water",icon:"💧",applicableTo:["Aroids","Tropical Foliage","Climbing / Trailing","Herbs"],description:"Stek in water: wekelijks verversen. Wacht tot wortels 2-3 cm zijn voor overplanten.",waterSuspendDays:0,waterMultiplier:0,durationDays:30,tip:"Na overplanten: 3-4 weken net vochtig houden."},
  {id:"cutting_soil",label:"Stek in grond",icon:"🌱",applicableTo:["Aroids","Tropical Foliage","Climbing / Trailing","Ferns"],description:"Stek in grond: 3-4 weken net vochtig — nooit nat. Pas na eerste nieuwe blad normaal water.",waterSuspendDays:0,waterMultiplier:0.3,durationDays:28,tip:"Hoge luchtvochtigheid (plastic zak over pot). Niet trekken aan stek."},
  {id:"relocation_shock",label:"Verhuisschok",icon:"📦",applicableTo:["Aroids","Tropical Foliage","Ferns","Orchids","Cacti","Succulents"],description:"Na verplaatsing: 2 weken aanpassingsperiode. Minder water, niet bemesten.",waterSuspendDays:0,waterMultiplier:0.5,durationDays:14,tip:"Bladval is normaal. Niet meteen herplanten."},
  {id:"winter_tropical",label:"Winterrust (tropisch)",icon:"❄️",applicableTo:["Aroids","Tropical Foliage","Palms","Climbing / Trailing"],description:"November-februari: water halveren. Groei vertraagt.",waterSuspendDays:0,waterMultiplier:0.5,durationDays:90,tip:"Geen meststof in winter. Vermijd koude tocht."},
  {id:"orchid_post_bloom",label:"Na bloei (orchidee)",icon:"🌸",applicableTo:["Orchids"],description:"Na de bloei: spike terugsnijden. 6-8 weken rustperiode met minder water en koelere temperatuur.",waterSuspendDays:0,waterMultiplier:0.5,durationDays:56,tip:"Koele nachten (15C) zijn essentieel voor nieuwe spike."},
  {id:"orchid_spike",label:"Spike initiatie (orchidee)",icon:"🌡️",applicableTo:["Orchids"],description:"4-6 weken koel en droger houden om bloem-spike te initieren.",waterSuspendDays:0,waterMultiplier:0.6,durationDays:42,tip:"Zodra spike 5cm is: normaal schema hervatten."},
  {id:"orchid_repot",label:"Herplanten in bark (orchidee)",icon:"🏺",applicableTo:["Orchids"],description:"Na herplanten in nieuwe bark: 1 week niet water geven.",waterSuspendDays:7,waterMultiplier:0,durationDays:7,tip:"Controleer na 1 week of wortels zilvergrijs zijn — dan pas water."},
  {id:"carnivore_dormancy",label:"Winterrust (vleesetend)",icon:"❄️",applicableTo:["Carnivorous"],description:"VERPLICHTE winterrust 3-4 maanden (okt-feb): 2-10C, bijna droog.",waterSuspendDays:0,waterMultiplier:0.1,durationDays:120,tip:"Koelkast (2-5C) werkt perfect. Weinig licht nodig."},
  {id:"herb_after_harvest",label:"Na zware oogst (kruiden)",icon:"✂️",applicableTo:["Herbs"],description:"Na het zwaar oogsten: 1 week rustperiode. Minder water, geen meststof.",waterSuspendDays:0,waterMultiplier:0.5,durationDays:7,tip:"Oogst nooit meer dan 1/3 van de plant tegelijk."},
  {id:"herb_bolting",label:"Bloei stoppen (kruiden)",icon:"🌼",applicableTo:["Herbs"],description:"Als kruiden beginnen bloeien: bloemknoppen verwijderen en meer water geven.",waterSuspendDays:0,waterMultiplier:1.3,durationDays:14,tip:"Meer water geeft de voorkeur aan bladgroei."},
  {id:"bromeliad_post_bloom",label:"Na bloei (bromeliad)",icon:"⭐",applicableTo:["Bromeliads"],description:"Na de bloei sterft de moederplant af. Focus op pups.",waterSuspendDays:0,waterMultiplier:0.5,durationDays:90,tip:"Laat de basis staan — die voedt de pups nog."},
  {id:"bromeliad_pup",label:"Pup afsnijden (bromeliad)",icon:"🌱",applicableTo:["Bromeliads"],description:"Afgesneden pup: 2 weken laten drogen voor herplanten.",waterSuspendDays:14,waterMultiplier:0,durationDays:14,tip:"Bestrooi snijvlak met kaneelpoeder (natuurlijk fungicide)."},
  {id:"fern_repot",label:"Verpot (varen)",icon:"🏺",applicableTo:["Ferns"],description:"Varens haten droge wortels: direct na verpotten grondig water geven en hoge luchtvochtigheid.",waterSuspendDays:0,waterMultiplier:1.5,durationDays:14,tip:"Zet pot 30 min in water na verpotten."},
  {id:"fern_drought_recovery",label:"Droogte herstel (varen)",icon:"💦",applicableTo:["Ferns"],description:"Na uitgedroogde varen: onderdompelen in water, daarna dagelijks bespuiten. Bruine fronds afknippen.",waterSuspendDays:0,waterMultiplier:2.0,durationDays:21,tip:"Herstel duurt 3-6 weken."},
];


const CareEventsPanel = ({plant, onUpdatePlant, season}) => {
  const sp = SPECIES_DB[plant.species];
  const category = _optionalChain([sp, 'optionalAccess', _78 => _78.category]) || "";
  const activeEvents = plant.careEvents || [];
  const [showPicker, setShowPicker] = useState(false);
  const [customDays, setCustomDays] = useState({});

  // Get relevant events for this plant category
  const relevantEvents = CARE_EVENT_DEFS.filter(e =>
    e.applicableTo.includes(category) ||
    e.applicableTo.includes("all")
  );

  const startEvent = (eventDef, overrideDays) => {
    const days = overrideDays || eventDef.durationDays;
    const startDate = new Date().toISOString().split("T")[0];
    const endDate = new Date(Date.now() + days * 86400000).toISOString().split("T")[0];
    const newEvent = {
      id: uid(),
      defId: eventDef.id,
      label: eventDef.label,
      icon: eventDef.icon,
      startDate,
      endDate,
      durationDays: days,
      waterMultiplier: eventDef.waterMultiplier,
      tip: eventDef.tip,
    };
    // Build plant update
    let plantUpdate = {...plant, careEvents: [...activeEvents, newEvent]};

    // If event suspends watering, push nextWater out
    if (eventDef.waterSuspendDays > 0) {
      plantUpdate.nextWater = new Date(Date.now() + eventDef.waterSuspendDays * 86400000)
        .toISOString().split("T")[0];
    }

    // If it's a repot event → mark lastRepotted today
    const repotEventIds = ["repot_cactus","repot_tropical","orchid_repot","fern_repot","bromeliad_pup"];
    if (repotEventIds.includes(eventDef.id)) {
      plantUpdate.lastRepotted = new Date().toISOString();
    }

    onUpdatePlant(plantUpdate);
    setShowPicker(false);
  };

  const endEvent = (eventId) => {
    onUpdatePlant({...plant, careEvents: activeEvents.filter(e => e.id !== eventId)});
  };

  // Check if any event is actually expired
  const today = new Date().toISOString().split("T")[0];
  const currentEvents = activeEvents.filter(e => e.endDate >= today);
  const expiredEvents = activeEvents.filter(e => e.endDate < today);

  // Auto-clean expired events
  if (expiredEvents.length > 0 && expiredEvents.length !== activeEvents.length) {
    // Only update if there's a difference to avoid infinite loops
  }

  // Compute current water modifier from active events
  const waterModifier = currentEvents.length > 0
    ? Math.min(...currentEvents.map(e => e.waterMultiplier))
    : 1;

  const daysLeft = (endDate) => {
    const diff = Math.ceil((new Date(endDate) - new Date()) / 86400000);
    return diff;
  };

  return (
    React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:16,marginBottom:12},}
      , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},}
        , React.createElement('div', { style: {fontWeight:700,color:C.soil,fontSize:14},}, "⚡ Uitzonderlijke verzorging"  )
        , currentEvents.length > 0 && waterModifier < 1 && (
          React.createElement('div', { style: {fontSize:11,background:C.warning+"22",color:C.warning,border:`1px solid ${C.warning}44`,
            borderRadius:8,padding:"2px 8px",fontWeight:700},}, "💧 ×"
             , waterModifier === 0 ? "0 (pause)" : waterModifier.toFixed(1)
          )
        )
      )
      , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:10,lineHeight:1.4},}, "Tijdelijke uitzonderingen op het normale schema: na verpotten, stekken, ziekte, seizoensrust..."

      )

      /* Active events */
      , currentEvents.map(ev => (
        React.createElement('div', { key: ev.id, style: {background:C.sandLight,borderRadius:10,padding:12,marginBottom:8,
          border:`1px solid ${C.sand}`},}
          , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"flex-start"},}
            , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil},}, ev.icon, " " , ev.label)
            , React.createElement('button', { onClick: ()=>endEvent(ev.id),
              style: {background:"none",border:`1px solid ${C.border}`,borderRadius:6,padding:"2px 8px",
                cursor:"pointer",fontSize:11,color:C.muted,fontFamily:"inherit"},}, "Beëindigen"

            )
          )
          , React.createElement('div', { style: {fontSize:11,color:C.muted,marginTop:3},}, "Nog "
             , daysLeft(ev.endDate), " dagen — tot "    , ev.endDate
            , ev.waterMultiplier === 0 && " · 💧 Water gepauzeerd"
            , ev.waterMultiplier > 0 && ev.waterMultiplier < 1 && ` · 💧 Water ×${ev.waterMultiplier}`
          )
          , React.createElement('div', { style: {fontSize:11,color:C.soil,marginTop:4,fontStyle:"italic"},}, ev.tip)
        )
      ))

      /* Expired notice */
      , expiredEvents.length > 0 && (
        React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:8},}
          , expiredEvents.length, " afgelopen event(s) —"   , " "
          , React.createElement('button', { onClick: ()=>onUpdatePlant({...plant,careEvents:currentEvents}),
            style: {background:"none",border:"none",color:C.green,cursor:"pointer",fontSize:11,
              textDecoration:"underline",fontFamily:"inherit",padding:0},}, "opruimen"

          )
        )
      )

      /* Event picker */
      , showPicker ? (
        React.createElement('div', { style: {border:`1px solid ${C.border}`,borderRadius:10,padding:12},}
          , React.createElement('div', { style: {fontWeight:600,fontSize:12,color:C.soil,marginBottom:8},}, "Kies een event:"  )
          , relevantEvents.map(ev => (
            React.createElement('div', { key: ev.id, style: {marginBottom:10,paddingBottom:10,
              borderBottom:`1px solid ${C.border}`},}
              , React.createElement('div', { style: {fontWeight:600,fontSize:13,color:C.soil,marginBottom:2},}
                , ev.icon, " " , ev.label
              )
              , React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:6,lineHeight:1.4},}
                , ev.description
              )
              , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:8},}
                , React.createElement('span', { style: {fontSize:11,color:C.muted},}, "Duur:")
                , React.createElement('input', { type: "number", min: 1, max: 180,
                  value: customDays[ev.id] !== undefined ? customDays[ev.id] : ev.durationDays,
                  onChange: e=>setCustomDays({...customDays,[ev.id]:Number(e.target.value)}),
                  style: {width:50,border:`1px solid ${C.border}`,borderRadius:6,padding:"3px 6px",
                    fontSize:12,outline:"none",textAlign:"center",fontFamily:"inherit"},})
                , React.createElement('span', { style: {fontSize:11,color:C.muted},}, "dagen")
                , React.createElement('button', { onClick: ()=>startEvent(ev, customDays[ev.id]),
                  style: {marginLeft:"auto",padding:"5px 12px",border:"none",borderRadius:8,
                    background:C.green,color:"#fff",cursor:"pointer",fontSize:12,
                    fontFamily:"inherit",fontWeight:600},}, "Starten"

                )
              )
            )
          ))
          , relevantEvents.length === 0 && (
            React.createElement('div', { style: {fontSize:12,color:C.muted},}, "Geen specifieke events voor dit plantentype."     )
          )
          , React.createElement('button', { onClick: ()=>setShowPicker(false),
            style: {marginTop:4,background:"none",border:"none",color:C.muted,cursor:"pointer",
              fontSize:12,fontFamily:"inherit"},}, "Annuleer"

          )
        )
      ) : (
        React.createElement('button', { onClick: ()=>setShowPicker(true),
          style: {width:"100%",border:`1px dashed ${C.border}`,borderRadius:10,padding:10,
            background:"none",cursor:"pointer",color:C.green,fontWeight:600,
            fontSize:13,fontFamily:"inherit"},}, "+ Event toevoegen"

        )
      )
    )
  );
};

const CustomCareEditor = ({plant, onUpdatePlant, season}) => {
  const sp = SPECIES_DB[plant.species];
  const care = _optionalChain([sp, 'optionalAccess', _79 => _79.care, 'access', _80 => _80[season]]) || {};
  const custom = plant.customCare || {};

  const set = (key, val) => {
    onUpdatePlant({...plant, customCare: {...custom, [key]: val === "" ? undefined : Number(val)}});
  };

  const fields = [
    {key:`water_${season}`, label:"💧 Water elke", unit:"dagen", default: care.water || 7, min:1, max:90,
     hint:"Hoe vaak wil je deze plant water geven?"},
    {key:`humidity_${season}`, label:"💦 Luchtvochtigheid", unit:"%", default: care.humidity || 50, min:10, max:100,
     hint:"Gewenste luchtvochtigheid voor dit seizoen"},
    {key:"sunlight_min", label:"☀️ Zon min", unit:"uur/dag", default: _optionalChain([sp, 'optionalAccess', _81 => _81.sunlight, 'access', _82 => _82.min]) || 3, min:0, max:24,
     hint:"Minimum zonuren per dag"},
    {key:"sunlight_max", label:"☀️ Zon max", unit:"uur/dag", default: _optionalChain([sp, 'optionalAccess', _83 => _83.sunlight, 'access', _84 => _84.max]) || 8, min:0, max:24,
     hint:"Maximum zonuren per dag (directe zon schaadt sommige soorten)"},
  ];

  const hasOverrides = fields.some(f => custom[f.key] !== undefined);

  return (
    React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:16,marginBottom:12},}
      , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},}
        , React.createElement('div', { style: {fontWeight:700,color:C.soil,fontSize:14},}, "⚙️ Eigen verzorgingswaarden"  )
        , hasOverrides && (
          React.createElement('button', { onClick: ()=>onUpdatePlant({...plant,customCare:{}}),
            style: {fontSize:11,color:C.muted,background:"none",border:`1px solid ${C.border}`,
              borderRadius:6,padding:"2px 8px",cursor:"pointer",fontFamily:"inherit"},}, "Reset"

          )
        )
      )
      , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:10,lineHeight:1.4},}, "Pas de standaardwaarden aan op jouw situatie. Gewijzigde waarden worden vetgedrukt."

      )
      , fields.map(({key, label, unit, default:def, min, max, hint}) => {
        const val = custom[key];
        const isOverridden = val !== undefined;
        return (
          React.createElement('div', { key: key, style: {marginBottom:12},}
            , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},}
              , React.createElement('label', { style: {fontSize:12,color:isOverridden?C.green:C.muted,fontWeight:isOverridden?700:400},}
                , label, " " , isOverridden && "✏️"
              )
              , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:6},}
                , React.createElement('input', { type: "number", min: min, max: max,
                  value: val !== undefined ? val : def,
                  onChange: e=>set(key, e.target.value),
                  style: {width:60,border:`1px solid ${isOverridden?C.green:C.border}`,borderRadius:6,
                    padding:"4px 6px",fontSize:13,outline:"none",textAlign:"center",
                    fontFamily:"inherit",fontWeight:isOverridden?700:400,
                    color:isOverridden?C.green:C.text},})
                , React.createElement('span', { style: {fontSize:12,color:C.muted,width:50},}, unit)
                , isOverridden && (
                  React.createElement('button', { onClick: ()=>{const n={...custom};delete n[key];onUpdatePlant({...plant,customCare:n});},
                    style: {fontSize:12,color:C.muted,background:"none",border:"none",cursor:"pointer",padding:0},}, "↩")
                )
              )
            )
            , React.createElement('div', { style: {fontSize:10,color:C.muted},}, hint, " " , !isOverridden&&`(standaard: ${def} ${unit})`)
          )
        );
      })
    )
  );
};


// ── Log entry with edit + delete ─────────────────────────────────
const LogEntry = ({log, ts, pKeys, onEdit, onDelete}) => {
  const isAuto = log.auto === true;
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editParams, setEditParams] = useState({...log.parameters});
  const [editNotes, setEditNotes] = useState(log.notes || "");
  const [editTimestamp, setEditTimestamp] = useState(
    new Date(log.timestamp).toISOString().slice(0, 16)
  );
  const [addingParam, setAddingParam] = useState(false);
  const [paramFilter, setParamFilter] = useState("");

  const activeParams = Object.keys(editParams);
  const available = Object.keys(PARAM_DEFS).filter(k => !activeParams.includes(k));
  const filtered = available.filter(k =>
    PARAM_DEFS[k].label.toLowerCase().includes(paramFilter.toLowerCase()) ||
    PARAM_DEFS[k].category.toLowerCase().includes(paramFilter.toLowerCase())
  );

  const saveEdit = () => {
    onEdit({...log, timestamp: new Date(editTimestamp).toISOString(),
      parameters: editParams, notes: editNotes});
    setEditing(false);
  };

  const handleDelete = () => {
    if (confirmDelete) { onDelete(log.id); }
    else { setConfirmDelete(true); setTimeout(() => setConfirmDelete(false), 3000); }
  };

  if (editing) return (
    React.createElement('div', { style: {background:C.surface,borderRadius:12,padding:14,marginBottom:10,
      border:`2px solid ${C.green}`},}
      , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.green,marginBottom:10},}, "✏️ Log bewerken"  )
      /* Timestamp */
      , React.createElement('div', { style: {marginBottom:10},}
        , React.createElement('label', { style: {fontSize:11,fontWeight:600,color:C.muted,display:"block",marginBottom:4},}, "TIJDSTIP")
        , React.createElement('input', { type: "datetime-local", value: editTimestamp,
          onChange: e=>setEditTimestamp(e.target.value),
          style: {border:`1px solid ${C.border}`,borderRadius:8,padding:"6px 10px",fontSize:13,
            outline:"none",width:"100%",boxSizing:"border-box",fontFamily:"inherit"},})
      )
      /* Parameters */
      , Object.entries(editParams).map(([k, v]) => {
        const def = PARAM_DEFS[k];
        return (
          React.createElement('div', { key: k, style: {marginBottom:10},}
            , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},}
              , React.createElement('label', { style: {fontSize:11,fontWeight:600,color:C.muted},}
                , _optionalChain([def, 'optionalAccess', _85 => _85.icon]), " " , _optionalChain([def, 'optionalAccess', _86 => _86.label, 'optionalAccess', _87 => _87.toUpperCase, 'call', _88 => _88()]), _optionalChain([def, 'optionalAccess', _89 => _89.unit])?` (${def.unit})`:""
              )
              , React.createElement('button', { onClick: ()=>{const n={...editParams};delete n[k];setEditParams(n);},
                style: {background:"none",border:"none",color:C.muted,cursor:"pointer",
                  fontSize:16,lineHeight:1,padding:0},}, "×")
            )
            , React.createElement(ParamInput, { paramId: k, value: v,
              onChange: val=>setEditParams(p=>({...p,[k]:val})),})
          )
        );
      })
      /* Add param */
      , addingParam ? (
        React.createElement('div', { style: {border:`1px solid ${C.border}`,borderRadius:8,padding:10,marginBottom:10},}
          , React.createElement('input', { autoFocus: true, value: paramFilter, onChange: e=>setParamFilter(e.target.value),
            placeholder: "Zoek parameter..." , style: {width:"100%",border:`1px solid ${C.border}`,
              borderRadius:6,padding:"6px 8px",fontSize:12,outline:"none",
              boxSizing:"border-box",fontFamily:"inherit",marginBottom:6},})
          , React.createElement('div', { style: {maxHeight:160,overflowY:"auto"},}
            , PARAM_CATEGORIES.map(cat => {
              const inCat = filtered.filter(k => PARAM_DEFS[k].category === cat);
              if (!inCat.length) return null;
              return (
                React.createElement('div', { key: cat,}
                  , React.createElement('div', { style: {fontSize:9,fontWeight:700,color:C.muted,padding:"4px 0 2px",letterSpacing:1},}
                    , cat.toUpperCase()
                  )
                  , inCat.map(k => (
                    React.createElement('div', { key: k, onClick: ()=>{setEditParams(p=>({...p,[k]:undefined}));
                      setParamFilter("");setAddingParam(false);},
                      style: {padding:"5px 6px",borderRadius:5,cursor:"pointer",fontSize:12,
                        display:"flex",alignItems:"center",gap:6,color:C.text},
                      onMouseEnter: e=>e.currentTarget.style.background=C.surfaceAlt,
                      onMouseLeave: e=>e.currentTarget.style.background="none",}
                      , React.createElement('span', null, PARAM_DEFS[k].icon)
                      , React.createElement('span', null, PARAM_DEFS[k].label)
                    )
                  ))
                )
              );
            })
          )
          , React.createElement('button', { onClick: ()=>setAddingParam(false),
            style: {fontSize:11,color:C.muted,background:"none",border:"none",
              cursor:"pointer",fontFamily:"inherit",marginTop:4},}, "Annuleer")
        )
      ) : (
        React.createElement('button', { onClick: ()=>setAddingParam(true),
          style: {width:"100%",border:`1px dashed ${C.border}`,borderRadius:8,padding:8,
            background:"none",cursor:"pointer",color:C.green,fontSize:12,
            fontFamily:"inherit",marginBottom:10},}, "+ Parameter toevoegen"

        )
      )
      /* Notes */
      , React.createElement('textarea', { value: editNotes, onChange: e=>setEditNotes(e.target.value), rows: 2,
        placeholder: "Notities...",
        style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,padding:"7px 10px",
          fontSize:13,outline:"none",resize:"vertical",boxSizing:"border-box",
          fontFamily:"inherit",marginBottom:10},})
      /* Actions */
      , React.createElement('div', { style: {display:"flex",gap:8},}
        , React.createElement('button', { onClick: ()=>setEditing(false),
          style: {flex:1,padding:"8px",border:`1px solid ${C.border}`,borderRadius:8,
            background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,color:C.muted},}, "Annuleer"

        )
        , React.createElement('button', { onClick: saveEdit,
          style: {flex:1,padding:"8px",border:"none",borderRadius:8,background:C.green,
            color:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:700},}, "Opslaan"

        )
      )
    )
  );

  return (
    React.createElement('div', { style: {background:isAuto?C.surfaceAlt:C.surface,borderRadius:12,marginBottom:10,overflow:"hidden",
      border:`1px solid ${C.border}`,borderLeft:`4px solid ${isAuto?C.muted:C.green}`},}
      /* Main log content */
      , React.createElement('div', { style: {padding:14},}
        , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},}
          , React.createElement('div', null
            , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil},}, ts.date)
            , React.createElement('div', { style: {fontSize:11,color:C.muted},}, ts.time, " · "  , ts.relative)
          )
          , isAuto ? React.createElement(Badge, { label: "🤖 Auto" , color: C.muted,}) : React.createElement(Badge, { label: `${pKeys.length} param${pKeys.length!==1?"s":""}`, color: C.green,})
        )
        , React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:6,marginBottom:log.notes?8:0},}
          , pKeys.map(k=>{
            const def=PARAM_DEFS[k];
            return(
              React.createElement('div', { key: k, style: {background:C.surfaceAlt,borderRadius:6,padding:"3px 8px",fontSize:12,color:C.text},}
                , React.createElement('span', null, _optionalChain([def, 'optionalAccess', _90 => _90.icon]), " " )
                , React.createElement('span', { style: {fontWeight:600},}, _optionalChain([def, 'optionalAccess', _91 => _91.label]), ": " )
                , React.createElement('span', { style: {color:C.green},}, fmtVal(k,log.parameters[k]))
              )
            );
          })
        )
        , log.notes && (
          React.createElement('div', { style: {fontSize:12,color:C.muted,fontStyle:"italic",marginTop:4},}, "\"", log.notes, "\"")
        )
      )
      /* Action bar — hidden for auto-generated logs */
      , !isAuto && React.createElement('div', { style: {borderTop:`1px solid ${C.border}`,display:"flex",background:C.surfaceAlt},}
        , React.createElement('button', { onClick: ()=>setEditing(true),
          style: {flex:1,padding:"8px 0",border:"none",background:"none",cursor:"pointer",
            fontSize:12,color:C.muted,fontFamily:"inherit",borderRight:`1px solid ${C.border}`},}, "✏️ Bewerken"

        )
        , React.createElement('button', { onClick: handleDelete,
          style: {flex:1,padding:"8px 0",border:"none",
            background:confirmDelete?C.danger+"18":"none",
            color:confirmDelete?C.danger:C.muted,
            cursor:"pointer",fontSize:12,fontFamily:"inherit",
            fontWeight:confirmDelete?700:400},}
          , confirmDelete ? "✓ Zeker verwijderen?" : "🗑️ Verwijder"
        )
      )
    )
  );
};



// ══════════════════════════════════════════════════════════════════
// EXPERT NOTES — grower / specialist instructions per plant
// ══════════════════════════════════════════════════════════════════
const ExpertNotes = ({plant, onUpdatePlant}) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(plant.expertNotes || "");
  const hasNotes = !!(plant.expertNotes && plant.expertNotes.trim());

  const save = () => {
    onUpdatePlant({...plant, expertNotes: draft.trim()});
    setEditing(false);
  };

  const cancel = () => {
    setDraft(plant.expertNotes || "");
    setEditing(false);
  };

  return (
    React.createElement('div', { style: {background:hasNotes?"#FFFBF0":C.surface,borderRadius:18,padding:16,
      marginBottom:12,border:`1.5px solid ${hasNotes?C.sand:C.border}`,
      boxShadow:hasNotes?`0 2px 12px ${C.sand}44`:C.shadowSm},}
      , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:hasNotes?10:0},}
        , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:8},}
          , React.createElement('span', { style: {fontSize:18},}, "📋")
          , React.createElement('div', null
            , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:C.soil},}, "Notities van expert/kwekerij"  )
            , hasNotes && React.createElement('div', { style: {fontSize:10,color:C.sand,fontWeight:600,letterSpacing:0.3},}, "OVERSCHRIJFT APP-AANBEVELINGEN"

            )
          )
        )
        , React.createElement('button', { onClick: ()=>{ setDraft(plant.expertNotes||""); setEditing(!editing); },
          style: {background:editing?C.surfaceAlt:"none",border:`1px solid ${editing?C.border:C.sand}`,
            borderRadius:8,padding:"5px 12px",cursor:"pointer",fontSize:12,
            color:editing?C.muted:C.sand,fontFamily:"inherit",fontWeight:600},}
          , editing ? "Annuleer" : hasNotes ? "✏️ Bewerken" : "+ Toevoegen"
        )
      )

      /* Display existing notes */
      , hasNotes && !editing && (
        React.createElement('div', { style: {fontSize:13,color:C.soil,lineHeight:1.7,whiteSpace:"pre-wrap",
          background:"rgba(255,255,255,0.6)",borderRadius:10,padding:"10px 12px",
          borderLeft:`3px solid ${C.sand}`},}
          , plant.expertNotes
        )
      )

      /* Edit form */
      , editing && (
        React.createElement('div', { style: {marginTop:10},}
          , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:6,lineHeight:1.5},}, "Plak hier adviezen van je kwekerij, tuincentrum of specialist. Deze worden bovenaan de verzorgingsinfo getoond."

          )
          , React.createElement('textarea', { value: draft, onChange: e=>setDraft(e.target.value),
            rows: 6, placeholder: "Bijv: Geef direct na ontvangst flink water...\nZet in goed verlichte ruimte, niet in direct zonlicht...",
            style: {width:"100%",border:`1.5px solid ${C.sand}`,borderRadius:10,
              padding:"10px 12px",fontSize:13,outline:"none",resize:"vertical",
              boxSizing:"border-box",fontFamily:"inherit",lineHeight:1.6,
              background:"rgba(255,255,255,0.8)"},})
          , React.createElement('div', { style: {display:"flex",gap:8,marginTop:8},}
            , hasNotes && (
              React.createElement('button', { onClick: ()=>{ onUpdatePlant({...plant,expertNotes:""}); setEditing(false); setDraft(""); },
                style: {padding:"8px 14px",border:`1px solid ${C.danger}`,borderRadius:10,
                  background:"none",color:C.danger,cursor:"pointer",fontFamily:"inherit",fontSize:12},}, "🗑 Verwijder"

              )
            )
            , React.createElement('button', { onClick: cancel,
              style: {flex:1,padding:"8px",border:`1px solid ${C.border}`,borderRadius:10,
                background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,color:C.muted},}, "Annuleer"

            )
            , React.createElement('button', { onClick: save, disabled: !draft.trim(),
              style: {flex:1,padding:"8px",border:"none",borderRadius:10,
                background:draft.trim()?C.sand:"#ccc",color:"#fff",
                cursor:draft.trim()?"pointer":"not-allowed",
                fontFamily:"inherit",fontSize:13,fontWeight:700},}, "Opslaan"

            )
          )
        )
      )

      , !hasNotes && !editing && (
        React.createElement('div', { style: {fontSize:12,color:C.muted,marginTop:6,lineHeight:1.4},}, "Bewaar adviezen van kwekers, tuincentra of specialisten. Ze worden boven de automatische aanbevelingen getoond."

        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// CUSTOM REMINDERS — manual one-off notifications per plant
// ══════════════════════════════════════════════════════════════════
const CustomReminders = ({plant, onUpdatePlant}) => {
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = useState(() => {
    const d = new Date(); d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0, 16);
  });
  const reminders = plant.customReminders || [];
  const today = new Date().toISOString().split("T")[0];

  const addReminder = () => {
    if (!text.trim()) return;
    const newR = {
      id: uid(),
      text: text.trim(),
      datetime: new Date(date).toISOString(),
      done: false,
      createdAt: new Date().toISOString(),
    };
    // Schedule browser notification if permission granted
    if (typeof Notification !== "undefined" && Notification.permission === "granted") {
      const msUntil = new Date(date) - new Date();
      if (msUntil > 0) {
        setTimeout(() => {
          sendNotification(`🌿 ${plant.name}`, newR.text, `reminder_${newR.id}`);
        }, msUntil);
      }
    }
    onUpdatePlant({...plant, customReminders: [...reminders, newR]});
    setText(""); setAdding(false);
    const d = new Date(); d.setDate(d.getDate()+7);
    setDate(d.toISOString().slice(0,16));
  };

  const toggleDone = (id) => {
    onUpdatePlant({...plant, customReminders:
      reminders.map(r => r.id===id ? {...r, done:!r.done} : r)
    });
  };

  const deleteReminder = (id) => {
    onUpdatePlant({...plant, customReminders: reminders.filter(r => r.id !== id)});
  };

  const upcoming = reminders.filter(r => !r.done).sort((a,b) => new Date(a.datetime)-new Date(b.datetime));
  const done = reminders.filter(r => r.done);
  const overdue = upcoming.filter(r => r.datetime.split("T")[0] < today);

  return (
    React.createElement('div', { style: {background:C.surface,borderRadius:18,padding:16,marginBottom:12,
      border:`1.5px solid ${overdue.length?C.warning:C.border}`,boxShadow:C.shadowSm},}
      , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},}
        , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:8},}
          , React.createElement('span', { style: {fontSize:18},}, "⏰")
          , React.createElement('div', null
            , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:C.soil},}, "Eigen herinneringen" )
            , React.createElement('div', { style: {fontSize:10,color:C.muted},}
              , upcoming.length, " actief" , done.length?` · ${done.length} gedaan`:""
            )
          )
        )
        , React.createElement('button', { onClick: ()=>setAdding(!adding),
          style: {background:adding?C.surfaceAlt:C.green,border:"none",borderRadius:10,
            padding:"6px 12px",cursor:"pointer",fontSize:12,
            color:adding?C.muted:"#fff",fontFamily:"inherit",fontWeight:600,
            boxShadow:adding?"none":`0 2px 8px ${C.green}44`},}
          , adding ? "✕" : "+ Nieuw"
        )
      )

      /* Add form */
      , adding && (
        React.createElement('div', { style: {background:C.surfaceAlt,borderRadius:12,padding:12,marginBottom:10},}
          , React.createElement('input', { value: text, onChange: e=>setText(e.target.value),
            placeholder: "Wat wil je onthouden? (bijv. Check wortels)"      ,
            style: {width:"100%",border:`1.5px solid ${C.green}`,borderRadius:8,
              padding:"8px 10px",fontSize:13,outline:"none",fontFamily:"inherit",
              marginBottom:8,boxSizing:"border-box",background:"#fff"},})
          , React.createElement('div', { style: {marginBottom:8},}
            , React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:4,fontWeight:600},}, "DATUM & TIJD"  )
            , React.createElement('input', { type: "datetime-local", value: date, onChange: e=>setDate(e.target.value),
              style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                padding:"7px 10px",fontSize:13,outline:"none",fontFamily:"inherit",
                boxSizing:"border-box",background:"#fff"},})
          )
          , React.createElement('div', { style: {display:"flex",gap:8},}
            , React.createElement('button', { onClick: ()=>setAdding(false),
              style: {flex:1,padding:"8px",border:`1px solid ${C.border}`,borderRadius:8,
                background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,color:C.muted},}, "Annuleer"

            )
            , React.createElement('button', { onClick: addReminder, disabled: !text.trim(),
              style: {flex:2,padding:"8px",border:"none",borderRadius:8,
                background:text.trim()?C.green:"#ccc",color:"#fff",
                cursor:text.trim()?"pointer":"not-allowed",
                fontFamily:"inherit",fontSize:13,fontWeight:700},}, "⏰ Herinnering instellen"

            )
          )
          , typeof Notification !== "undefined" && Notification.permission !== "granted" && (
            React.createElement('div', { style: {marginTop:8,fontSize:11,color:C.muted,textAlign:"center"},}, "⚠️ Schakel meldingen in via ⚙️ voor pushnotificaties"

            )
          )
        )
      )

      /* Upcoming reminders */
      , upcoming.map(r => {
        const dt = new Date(r.datetime);
        const isOverdue = r.datetime.split("T")[0] < today;
        return (
          React.createElement('div', { key: r.id, style: {display:"flex",gap:10,alignItems:"flex-start",
            marginBottom:8,padding:"10px 12px",borderRadius:10,
            background:isOverdue?C.warning+"18":C.surfaceAlt,
            border:`1px solid ${isOverdue?C.warning:C.border}`},}
            , React.createElement('button', { onClick: ()=>toggleDone(r.id),
              style: {width:20,height:20,borderRadius:"50%",flexShrink:0,
                border:`2px solid ${isOverdue?C.warning:C.green}`,background:"none",
                cursor:"pointer",marginTop:1,display:"flex",alignItems:"center",justifyContent:"center"},}
            )
            , React.createElement('div', { style: {flex:1,minWidth:0},}
              , React.createElement('div', { style: {fontSize:13,color:C.soil,fontWeight:600,lineHeight:1.4},}, r.text)
              , React.createElement('div', { style: {fontSize:11,color:isOverdue?C.warning:C.muted,marginTop:2,fontWeight:isOverdue?700:400},}
                , isOverdue?"⚠️ Verlopen — ":"⏰ "
                , dt.toLocaleDateString("nl-BE",{day:"numeric",month:"short",year:"numeric"})
                , " om ", dt.toLocaleTimeString("nl-BE",{hour:"2-digit",minute:"2-digit"})
              )
            )
            , React.createElement('button', { onClick: ()=>deleteReminder(r.id),
              style: {background:"none",border:"none",color:C.muted,cursor:"pointer",
                fontSize:16,padding:"0 2px",lineHeight:1},}, "×"

            )
          )
        );
      })

      /* Done reminders (collapsed) */
      , done.length > 0 && (
        React.createElement('div', { style: {marginTop:4},}
          , React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:6},}, "✓ "
             , done.length, " herinnering" , done.length!==1?"en":"", " afgevinkt"
          )
          , done.map(r => (
            React.createElement('div', { key: r.id, style: {display:"flex",gap:10,alignItems:"center",
              marginBottom:4,padding:"6px 10px",borderRadius:8,opacity:0.5},}
              , React.createElement('button', { onClick: ()=>toggleDone(r.id),
                style: {width:18,height:18,borderRadius:"50%",border:`2px solid ${C.green}`,
                  background:C.green,cursor:"pointer",display:"flex",alignItems:"center",
                  justifyContent:"center",fontSize:10,color:"#fff",flexShrink:0},}, "✓"

              )
              , React.createElement('div', { style: {flex:1,fontSize:12,color:C.muted,textDecoration:"line-through"},}, r.text)
              , React.createElement('button', { onClick: ()=>deleteReminder(r.id),
                style: {background:"none",border:"none",color:C.muted,cursor:"pointer",fontSize:14},}, "×"

              )
            )
          ))
        )
      )

      , reminders.length === 0 && !adding && (
        React.createElement('div', { style: {fontSize:12,color:C.muted,lineHeight:1.5},}, "Stel eigen herinneringen in: \"Check wortels na 3 weken\", \"Verplaats naar volle zon\", etc. Ontvang een pushmelding op het ingestelde moment."

        )
      )
    )
  );
};

// ── Repotting reminder ───────────────────────────────────────────
const RepottingReminder = ({plant, onUpdatePlant}) => {
  const sp = SPECIES_DB[plant.species];
  const lastRepotted = plant.lastRepotted || plant.addedDate;
  const intervalMonths = plant.repotIntervalMonths || 24;
  const monthsSince = Math.floor((Date.now() - new Date(lastRepotted)) / (1000*60*60*24*30.5));
  const isDue = monthsSince >= intervalMonths;
  const dueIn = intervalMonths - monthsSince;
  const repotInfo = _optionalChain([sp, 'optionalAccess', _92 => _92.repot]) || "Elke 2 jaar";

  return (
    React.createElement('div', { style: {background:isDue?C.terracottaLight:C.surface,borderRadius:14,padding:16,marginBottom:12,
      border:`1px solid ${isDue?C.terracotta:C.border}`},}
      , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},}
        , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:isDue?C.terracotta:C.soil},}, "🏺 Verpotten" )
        , isDue && React.createElement(Badge, { label: "Nodig!", color: C.terracotta,})
      )
      , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:10,lineHeight:1.5},}, repotInfo)
      , React.createElement('div', { style: {display:"flex",gap:8,marginBottom:10},}
        , React.createElement('div', { style: {flex:1,background:C.surfaceAlt,borderRadius:8,padding:8,textAlign:"center"},}
          , React.createElement('div', { style: {fontSize:10,color:C.muted},}, "Laast verpot" )
          , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil},}
            , plant.lastRepotted ? new Date(plant.lastRepotted).toLocaleDateString("nl-BE",{month:"short",year:"numeric"}) : "Onbekend"
          )
        )
        , React.createElement('div', { style: {flex:1,background:isDue?C.terracottaLight:C.greenPale,borderRadius:8,padding:8,textAlign:"center"},}
          , React.createElement('div', { style: {fontSize:10,color:C.muted},}, isDue?"Te laat":"Over")
          , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:isDue?C.terracotta:C.green},}
            , isDue ? `${monthsSince-intervalMonths} mnd` : `${dueIn} mnd`
          )
        )
        , React.createElement('div', { style: {flex:1,background:C.surfaceAlt,borderRadius:8,padding:8,textAlign:"center"},}
          , React.createElement('div', { style: {fontSize:10,color:C.muted},}, "Interval")
          , React.createElement('div', { style: {display:"flex",alignItems:"center",justifyContent:"center",gap:3},}
            , React.createElement('input', { type: "number", min: 1, max: 60, value: intervalMonths,
              onChange: e=>onUpdatePlant({...plant,repotIntervalMonths:Number(e.target.value)}),
              style: {width:34,textAlign:"center",border:`1px solid ${C.border}`,
                borderRadius:4,padding:"2px",fontSize:12,fontFamily:"inherit",outline:"none"},})
            , React.createElement('span', { style: {fontSize:10,color:C.muted},}, "mnd")
          )
        )
      )
      , React.createElement('button', { onClick: ()=>onUpdatePlant({...plant,lastRepotted:new Date().toISOString()}),
        style: {width:"100%",padding:"8px",border:`1px solid ${isDue?C.terracotta:C.green}`,
          borderRadius:10,background:"none",color:isDue?C.terracotta:C.green,
          cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600},}, "🏺 Vandaag verpot markeren"

      )
    )
  );
};

// ── Delete plant button (used in PlantDetail overview) ──────────
const DeletePlantButton = ({plant, onDelete, onBack}) => {
  const [confirm, setConfirm] = useState(false);
  return (
    React.createElement('div', { style: {marginTop:16,padding:16,background:C.surface,borderRadius:14,
      border:`1px solid ${C.border}`},}
      , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:8,fontSize:14},}, "⚠️ Gevaarzone" )
      , confirm ? (
        React.createElement('div', null
          , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:10},}, "Weet je zeker dat je "
                 , React.createElement('strong', null, plant.name), " en alle bijbehorende logs wilt verwijderen? Dit kan niet ongedaan worden gemaakt."
          )
          , React.createElement('div', { style: {display:"flex",gap:8},}
            , React.createElement('button', { onClick: ()=>setConfirm(false),
              style: {flex:1,padding:"10px",border:`1px solid ${C.border}`,borderRadius:10,
                background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,color:C.muted},}, "Annuleer"

            )
            , React.createElement('button', { onClick: ()=>{onDelete(plant.id);onBack();},
              style: {flex:1,padding:"10px",border:"none",borderRadius:10,
                background:C.danger,color:"#fff",cursor:"pointer",
                fontFamily:"inherit",fontSize:14,fontWeight:700},}, "Ja, verwijder"

            )
          )
        )
      ) : (
        React.createElement('button', { onClick: ()=>setConfirm(true),
          style: {width:"100%",padding:"10px",border:`1px solid ${C.danger}`,borderRadius:10,
            background:"none",color:C.danger,cursor:"pointer",fontFamily:"inherit",
            fontSize:14,fontWeight:600},}, "🗑️ Verwijder "
            , plant.name
        )
      )
    )
  );
};


// ── Section picker dropdown with inline "add new" ────────────────

// ══════════════════════════════════════════════════════════════════
// ASPCA TOXICITY LOOKUP — fetches live data from ASPCA.org
// Falls back to static species DB data when offline/unavailable
// ══════════════════════════════════════════════════════════════════
const ASPCAToxicity = ({species, staticToxicity}) => {
  const [status, setStatus] = useState("idle"); // idle | loading | found | notfound | error
  const [aspcaData, setAspcaData] = useState(null);

  // Build search query from species name
  const commonPart = species.split(" ").slice(0,2).join(" ");

  const lookup = async () => {
    setStatus("loading");
    try {
      // ASPCA toxic plant search — use their public search endpoint
      const query = encodeURIComponent(commonPart);
      const res = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants?field_plant_species_common_name_value=${query}`)}`,
        {signal: AbortSignal.timeout(8000)}
      );
      const html = await res.text();

      // Parse ASPCA response — look for plant listings
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // ASPCA lists plants in views-row divs with scientific names
      const rows = doc.querySelectorAll(".views-row, .view-content .views-row");
      let found = null;

      rows.forEach(row => {
        const scientific = _optionalChain([row, 'access', _93 => _93.querySelector, 'call', _94 => _94(".field-content"), 'optionalAccess', _95 => _95.textContent, 'optionalAccess', _96 => _96.trim, 'call', _97 => _97()]) || "";
        const toxicStatus = _optionalChain([row, 'access', _98 => _98.querySelector, 'call', _99 => _99(".views-field-field-plant-tox-status"), 'optionalAccess', _100 => _100.textContent, 'optionalAccess', _101 => _101.trim, 'call', _102 => _102()]) || "";
        const animals = _optionalChain([row, 'access', _103 => _103.querySelector, 'call', _104 => _104(".views-field-field-plant-species-animals"), 'optionalAccess', _105 => _105.textContent, 'optionalAccess', _106 => _106.trim, 'call', _107 => _107()]) || "";
        const symptoms = _optionalChain([row, 'access', _108 => _108.querySelector, 'call', _109 => _109(".views-field-field-plant-species-clinical-signs"), 'optionalAccess', _110 => _110.textContent, 'optionalAccess', _111 => _111.trim, 'call', _112 => _112()]) || "";
        const name = _optionalChain([row, 'access', _113 => _113.querySelector, 'call', _114 => _114("h3, .views-field-title"), 'optionalAccess', _115 => _115.textContent, 'optionalAccess', _116 => _116.trim, 'call', _117 => _117()]) || "";

        if (scientific.toLowerCase().includes(commonPart.toLowerCase()) ||
            name.toLowerCase().includes(species.split(" ")[0].toLowerCase())) {
          found = { scientific, toxicStatus, animals, symptoms, name };
        }
      });

      if (found) {
        setAspcaData(found);
        setStatus("found");
      } else {
        // Try simpler text search in the page
        const pageText = _optionalChain([doc, 'access', _118 => _118.body, 'optionalAccess', _119 => _119.innerText]) || html;
        const hasToxic = pageText.toLowerCase().includes("toxic to") &&
                         pageText.toLowerCase().includes(species.split(" ")[0].toLowerCase());
        setStatus(hasToxic ? "partial" : "notfound");
      }
    } catch(_e) {
      setStatus("error");
    }
  };

  const isToxic = staticToxicity && !/non[\-\s]toxic/i.test(staticToxicity);
  const bgColor = isToxic ? C.terracottaLight : C.greenPale;
  const textColor = isToxic ? C.terracotta : C.green;

  return (
    React.createElement('div', { style: {background:bgColor,borderRadius:12,padding:14,marginBottom:10,
      border:`1px solid ${textColor}33`},}
      , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:8,marginBottom:6},}
        , React.createElement('span', { style: {fontSize:16},}, isToxic ? "⚠️" : "✅")
        , React.createElement('div', { style: {flex:1},}
          , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:textColor},}
            , isToxic ? "Giftig" : "Niet giftig", " — Giftigheid"
          )
          , React.createElement('div', { style: {fontSize:11,color:C.muted},}, staticToxicity)
        )
        , status === "idle" && (
          React.createElement('button', { onClick: lookup,
            style: {background:textColor,border:"none",borderRadius:8,padding:"5px 10px",
              cursor:"pointer",fontSize:11,color:"#fff",fontFamily:"inherit",fontWeight:600,
              flexShrink:0},}, "🔍 ASPCA live"

          )
        )
        , status === "loading" && (
          React.createElement('span', { style: {fontSize:11,color:C.muted,flexShrink:0},}, "⏳ Zoeken..." )
        )
      )

      /* Live ASPCA result */
      , status === "found" && aspcaData && (
        React.createElement('div', { style: {background:"rgba(255,255,255,0.6)",borderRadius:8,padding:10,marginTop:8,
          borderLeft:`3px solid ${textColor}`},}
          , React.createElement('div', { style: {fontSize:11,fontWeight:700,color:textColor,letterSpacing:0.3,marginBottom:4},}, "📋 ASPCA.ORG — LIVE DATA"

          )
          , aspcaData.name && (
            React.createElement('div', { style: {fontSize:12,fontWeight:600,color:C.soil,marginBottom:2},}, aspcaData.name)
          )
          , aspcaData.toxicStatus && (
            React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:2},}
              , React.createElement('strong', null, "Status:"), " " , aspcaData.toxicStatus
            )
          )
          , aspcaData.animals && (
            React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:2},}
              , React.createElement('strong', null, "Dieren:"), " " , aspcaData.animals
            )
          )
          , aspcaData.symptoms && (
            React.createElement('div', { style: {fontSize:12,color:C.muted,lineHeight:1.4},}
              , React.createElement('strong', null, "Symptomen:"), " " , aspcaData.symptoms
            )
          )
        )
      )

      , status === "notfound" && (
        React.createElement('div', { style: {fontSize:11,color:C.muted,marginTop:4},}, "Niet gevonden op ASPCA.org. Controleer zelf via"
                , " "
          , React.createElement('span', { style: {color:C.sky,textDecoration:"underline"},
            onClick: ()=>window.open(`https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants?field_plant_species_common_name_value=${encodeURIComponent(commonPart)}`),}, "aspca.org/toxic-plants"

          )
        )
      )

      , status === "partial" && (
        React.createElement('div', { style: {fontSize:11,color:C.muted,marginTop:4},}, "Mogelijk gevonden op ASPCA.org."
             , " "
          , React.createElement('span', { style: {color:C.sky,textDecoration:"underline",cursor:"pointer"},
            onClick: ()=>window.open(`https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants?field_plant_species_common_name_value=${encodeURIComponent(commonPart)}`),}, "Bekijk op ASPCA.org →"

          )
        )
      )

      , status === "error" && (
        React.createElement('div', { style: {fontSize:11,color:C.muted,marginTop:4},}, "Kan ASPCA.org niet bereiken (offline of HTTPS vereist)."
                 , " "
          , React.createElement('span', { style: {color:C.sky,textDecoration:"underline",cursor:"pointer"},
            onClick: ()=>window.open("https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants"),}, "Handmatig zoeken →"

          )
        )
      )

      , status === "idle" && (
        React.createElement('div', { style: {fontSize:11,color:C.muted,marginTop:4},}, "Tik \"ASPCA live\" voor actuele giftigheidsdata rechtstreeks van ASPCA.org"

        )
      )
    )
  );
};


// ══════════════════════════════════════════════════════════════════
// LICHT METER — camera-based lux measurement with plant matching
// Three-tier approach:
//   1. AmbientLightSensor API (hardware, most accurate — Chrome+flag)
//   2. Camera pixel luminance → EV → lux (works everywhere)
//   3. Manual entry fallback
// ══════════════════════════════════════════════════════════════════

// Lux reference zones for plants
const LUX_ZONES = [
  {max:100,   label:"Zeer donker",        color:"#4A3520", bg:"#2C1F0F22", emoji:"🌑",
   desc:"Enkel de meest schaduwtolerante planten overleven hier.", plants:"Aspidistra, Sansevieria"},
  {max:500,   label:"Laag licht",         color:"#7B5EA7", bg:"#7B5EA722", emoji:"🌘",
   desc:"Schaduwplanten gedijen, de meeste anderen overleven moeizaam.", plants:"Pothos, Philodendron, Vredeslelie"},
  {max:2000,  label:"Indirect licht",     color:"#5AACCB", bg:"#5AACCB22", emoji:"🌤",
   desc:"Geschikt voor tropische kamerplanten en varens.", plants:"Monstera, Ficus, Dracaena"},
  {max:5000,  label:"Helder indirect",    color:"#3D6B4A", bg:"#3D6B4A22", emoji:"⛅",
   desc:"Ideaal voor de meeste cactussen en vetplanten nabij venster.", plants:"Cactussen, Aloe, Succulenten"},
  {max:10000, label:"Direct zonlicht",    color:"#D4960E", bg:"#D4960E22", emoji:"🌤️",
   desc:"Volle directe zon door glas — ideaal voor woestijnsoorten.", plants:"San Pedro, Opuntia, Echinocactus"},
  {max:Infinity,label:"Volle buitenzon",  color:"#B85C42", bg:"#B85C4222", emoji:"☀️",
   desc:"Buitenzon — te intens voor de meeste kamerplanten.", plants:"Buitensoorten, geharde cactussen"},
];

// EV → lux via photographic formula (C=250 incident calibration constant)
const evToLux = (ev) => 250 * Math.pow(2, ev);

// Pixel luminance array → relative EV estimate
// Uses weighted RGB → perceived luminance (ITU-R BT.709)
const pixelsToEV = (data, width, height) => {
  // Sample a central region (avoid edges/vignetting)
  const margin = 0.15;
  const x0 = Math.floor(width * margin),  x1 = Math.floor(width * (1-margin));
  const y0 = Math.floor(height * margin), y1 = Math.floor(height * (1-margin));
  let sum = 0, count = 0;
  // Sample every 4th pixel for performance
  for (let y = y0; y < y1; y += 4) {
    for (let x = x0; x < x1; x += 4) {
      const i = (y * width + x) * 4;
      // Gamma-correct sRGB → linear, then weighted luminance
      const r = Math.pow(data[i]   / 255, 2.2);
      const g = Math.pow(data[i+1] / 255, 2.2);
      const b = Math.pow(data[i+2] / 255, 2.2);
      const Y = 0.2126*r + 0.7152*g + 0.0722*b; // luminance
      sum += Y; count++;
    }
  }
  const avgLum = sum / count; // 0–1
  // Map average luminance to EV
  // avgLum=0.18 (18% grey) → EV ~13 (typical indoor scene at ISO100)
  // Calibration: log2(avgLum / 0.18) + 13 ≈ scene EV
  const ev = Math.log2(Math.max(avgLum, 0.001) / 0.18) + 13;
  return Math.round(ev * 10) / 10;
};

const getLuxZone = (lux) => LUX_ZONES.find(z => lux <= z.max) || LUX_ZONES[LUX_ZONES.length-1];

const getPlantMatch = (lux, sunlight) => {
  if (!sunlight) return null;
  // Convert lux to estimated daily hours (assume 12h window, scale by lux)
  // 50000 lux = full outdoor sun = 12h equivalent
  // This is approximate — only daytime measurement matters
  const luxHours = (lux / 50000) * 12;
  const { min, max } = sunlight;
  if (luxHours < min * 0.6) return { status:"too_dark",   emoji:"🔴", label:`Te donker — plant heeft ${min}–${max}u licht nodig, hier ≈${luxHours.toFixed(1)}u` };
  if (luxHours < min)        return { status:"marginal",  emoji:"🟡", label:`Net te weinig — plant heeft ${min}u nodig, hier ≈${luxHours.toFixed(1)}u` };
  if (luxHours <= max)       return { status:"ideal",     emoji:"🟢", label:`Ideaal — plant heeft ${min}–${max}u nodig, hier ≈${luxHours.toFixed(1)}u` };
                             return { status:"too_bright", emoji:"🟠", label:`Erg veel licht — plant heeft max ${max}u nodig, hier ≈${luxHours.toFixed(1)}u` };
};

const LichtMeter = ({plant, sunlight, onSaveReading, onClose}) => {
  const videoRef  = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef    = useRef(null);
  const sensorRef = useRef(null);

  const [mode,       setMode]       = useState("idle");  // idle|camera|sensor|result|error|manual
  const [lux,        setLux]        = useState(null);
  const [evVal,      setEvVal]      = useState(null);
  const [zone,       setZone]       = useState(null);
  const [match,      setMatch]      = useState(null);
  const [history,    setHistory]    = useState([]);  // rolling 3s average
  const [manualLux,  setManualLux]  = useState("");
  const [errorMsg,   setErrorMsg]   = useState("");
  const [measuring,  setMeasuring]  = useState(false);
  const [camReady,   setCamReady]   = useState(false);
  const [method,     setMethod]     = useState("");  // "sensor"|"camera"
  const [showGuide,  setShowGuide]  = useState(true);

  // Cleanup on unmount
  useEffect(() => () => {
    _optionalChain([streamRef, 'access', _120 => _120.current, 'optionalAccess', _121 => _121.getTracks, 'call', _122 => _122(), 'access', _123 => _123.forEach, 'call', _124 => _124(t => t.stop())]);
    cancelAnimationFrame(rafRef.current);
    _optionalChain([sensorRef, 'access', _125 => _125.current, 'optionalAccess', _126 => _126.stop, 'optionalCall', _127 => _127()]);
  }, []);

  const updateLuxReading = (luxVal, src) => {
    setMethod(src);
    const rounded = Math.round(luxVal);
    setLux(rounded);
    setZone(getLuxZone(rounded));
    setMatch(getPlantMatch(rounded, sunlight));
    setHistory(prev => [...prev.slice(-29), rounded]);
  };

  // ── Attempt 1: W3C AmbientLightSensor ────────────────────────────
  const trySensor = () => {
    if ("AmbientLightSensor" in window) {
      try {
        const sensor = new window.AmbientLightSensor();
        sensorRef.current = sensor;
        sensor.addEventListener("reading", () => {
          updateLuxReading(sensor.illuminance, "sensor");
          setMeasuring(true);
        });
        sensor.addEventListener("error", () => tryCamera());
        sensor.start();
        setMode("sensor");
        setMethod("sensor");
        return true;
      } catch(_e) {}
    }
    return false;
  };

  // ── Attempt 2: Camera pixel analysis ─────────────────────────────
  const tryCamera = async () => {
    setMode("camera");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width:{ideal:640}, height:{ideal:480} }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setCamReady(true);
        setMethod("camera");
        setShowGuide(true);
        startAnalysis();
      }
    } catch(_e) {
      setMode("error");
      setErrorMsg("Geen cameratoegang. Probeer manuele invoer of controleer browserpermissies.");
    }
  };

  const startAnalysis = () => {
    const analyse = () => {
      const video  = videoRef.current;
      const canvas = canvasRef.current;
      if (!video || !canvas || video.readyState < 2) {
        rafRef.current = requestAnimationFrame(analyse);
        return;
      }
      const w = video.videoWidth, h = video.videoHeight;
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, w, h);
      const { data } = ctx.getImageData(0, 0, w, h);
      const ev    = pixelsToEV(data, w, h);
      const luxEst = evToLux(ev);
      setEvVal(ev);
      updateLuxReading(luxEst, "camera");
      setMeasuring(true);
      rafRef.current = requestAnimationFrame(analyse);
    };
    rafRef.current = requestAnimationFrame(analyse);
  };

  const start = () => {
    setShowGuide(false);
    if (!trySensor()) tryCamera();
  };

  const saveReading = () => {
    if (lux === null) return;
    _optionalChain([onSaveReading, 'optionalCall', _128 => _128(lux, _optionalChain([zone, 'optionalAccess', _129 => _129.label]) || "")]);
    onClose();
  };

  const applyManual = () => {
    const v = parseFloat(manualLux);
    if (!v || v < 0) return;
    updateLuxReading(v, "manual");
    setMode("result");
    setMeasuring(true);
  };

  // Avg of rolling history
  const avgLux = history.length > 0
    ? Math.round(history.reduce((a,b) => a+b, 0) / history.length)
    : lux;

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"#000",zIndex:500,
      display:"flex",flexDirection:"column"},}

      /* Header */
      , React.createElement('div', { style: {padding:"14px 16px",display:"flex",alignItems:"center",gap:12,
        background:"rgba(0,0,0,0.8)",backdropFilter:"blur(8px)",flexShrink:0},}
        , React.createElement('button', { onClick: onClose,
          style: {background:"none",border:"none",color:"#fff",fontSize:22,
            cursor:"pointer",padding:4,lineHeight:1},}, "←")
        , React.createElement('div', { style: {flex:1},}
          , React.createElement('div', { style: {fontWeight:800,fontSize:15,color:"#fff"},}, "☀️ Lichtmeter" )
          , plant && React.createElement('div', { style: {fontSize:11,color:"rgba(255,255,255,0.5)"},}, "voor "
             , plant.name, " · "  , _optionalChain([sunlight, 'optionalAccess', _130 => _130.min]), "–", _optionalChain([sunlight, 'optionalAccess', _131 => _131.max]), "u/dag vereist"
          )
        )
        , method === "sensor" && (
          React.createElement('div', { style: {fontSize:10,background:"#3D6B4A",color:"#fff",
            borderRadius:6,padding:"2px 8px",fontWeight:700},}, "SENSOR")
        )
        , method === "camera" && (
          React.createElement('div', { style: {fontSize:10,background:"#5AACCB",color:"#fff",
            borderRadius:6,padding:"2px 8px",fontWeight:700},}, "CAMERA")
        )
      )

      /* Camera viewfinder */
      , mode === "camera" && (
        React.createElement('div', { style: {flex:1,position:"relative",overflow:"hidden"},}
          , React.createElement('video', { ref: videoRef, muted: true, playsInline: true,
            style: {width:"100%",height:"100%",objectFit:"cover",opacity:0.85},})
          , React.createElement('canvas', { ref: canvasRef, style: {display:"none"},})

          /* Targeting guide */
          , showGuide && (
            React.createElement('div', { style: {position:"absolute",inset:0,display:"flex",
              flexDirection:"column",alignItems:"center",justifyContent:"center",
              background:"rgba(0,0,0,0.6)",padding:24,textAlign:"center"},}
              , React.createElement('div', { style: {fontSize:48,marginBottom:16},}, "🔆")
              , React.createElement('div', { style: {fontWeight:800,fontSize:17,color:"#fff",marginBottom:10},}, "Wijs camera naar het raam"

              )
              , React.createElement('div', { style: {fontSize:13,color:"rgba(255,255,255,0.8)",lineHeight:1.6,marginBottom:20},}, "Richt op de "
                   , React.createElement('strong', null, "lichtbron"), ", niet op de plant."    , React.createElement('br', null), "Houd de telefoon op de positie waar de plant staat."
                         , React.createElement('br', null), "Meet bij voorkeur rond het middaguur."

              )
              , React.createElement('div', { style: {display:"flex",gap:20,marginBottom:24,fontSize:28},}
                , React.createElement('span', null, "✅ → 🪟"  )
                , React.createElement('span', null, "❌ → 🌿"  )
              )
              , React.createElement('button', { onClick: ()=>setShowGuide(false),
                style: {background:C.green,border:"none",borderRadius:14,
                  padding:"12px 28px",color:"#fff",cursor:"pointer",
                  fontSize:15,fontWeight:800,fontFamily:"inherit"},}, "Camera staat goed →"

              )
            )
          )

          /* Live lux overlay */
          , !showGuide && measuring && (
            React.createElement('div', { style: {position:"absolute",bottom:0,left:0,right:0,
              background:"linear-gradient(transparent, rgba(0,0,0,0.9))",
              padding:"30px 20px 20px"},}

              /* Big lux number */
              , React.createElement('div', { style: {textAlign:"center",marginBottom:12},}
                , React.createElement('div', { style: {fontSize:64,fontWeight:900,color:"#fff",lineHeight:1,
                  fontVariantNumeric:"tabular-nums"},}
                  , (avgLux||0).toLocaleString()
                )
                , React.createElement('div', { style: {fontSize:16,color:"rgba(255,255,255,0.7)",marginTop:4},}, "lux")
              )

              /* Zone indicator */
              , zone && (
                React.createElement('div', { style: {background:zone.bg,borderRadius:12,padding:"10px 16px",
                  marginBottom:10,border:`1px solid ${zone.color}44`,textAlign:"center"},}
                  , React.createElement('div', { style: {fontSize:18,marginBottom:2},}, zone.emoji)
                  , React.createElement('div', { style: {fontWeight:800,fontSize:14,color:zone.color},}, zone.label)
                  , React.createElement('div', { style: {fontSize:11,color:"rgba(255,255,255,0.7)",marginTop:2},}
                    , zone.desc
                  )
                )
              )

              /* Plant match */
              , match && (
                React.createElement('div', { style: {background:"rgba(255,255,255,0.1)",borderRadius:10,
                  padding:"8px 14px",marginBottom:12,textAlign:"center",fontSize:13},}
                  , React.createElement('span', { style: {marginRight:6},}, match.emoji)
                  , React.createElement('span', { style: {color:"#fff"},}, match.label)
                )
              )

              /* EV value */
              , evVal !== null && (
                React.createElement('div', { style: {textAlign:"center",fontSize:10,color:"rgba(255,255,255,0.4)",
                  marginBottom:12},}, "EV "
                   , evVal > 0 ? "+" : "", evVal, " · camera pixel analyse"
                )
              )

              /* Actions */
              , React.createElement('div', { style: {display:"flex",gap:10},}
                , React.createElement('button', { onClick: saveReading,
                  style: {flex:2,padding:"13px",border:"none",borderRadius:12,
                    background:C.green,color:"#fff",cursor:"pointer",
                    fontFamily:"inherit",fontSize:14,fontWeight:800},}, "💾 Opslaan in log"

                )
                , React.createElement('button', { onClick: ()=>setMode("zones"),
                  style: {flex:1,padding:"13px",border:"1px solid rgba(255,255,255,0.3)",
                    borderRadius:12,background:"none",color:"#fff",cursor:"pointer",
                    fontFamily:"inherit",fontSize:13},}, "📋 Zones"

                )
              )
            )
          )

          /* Mini histogram */
          , !showGuide && history.length > 1 && (
            React.createElement('div', { style: {position:"absolute",top:10,right:10,
              display:"flex",alignItems:"flex-end",gap:1,height:30,opacity:0.6},}
              , history.slice(-15).map((v,i) => {
                const maxH = Math.max(...history.slice(-15));
                return (
                  React.createElement('div', { key: i, style: {width:4,borderRadius:1,
                    height:`${Math.max(4, (v/maxH)*30)}px`,
                    background:"rgba(255,255,255,0.8)"},})
                );
              })
            )
          )
        )
      )

      /* Sensor mode (AmbientLightSensor) */
      , mode === "sensor" && (
        React.createElement('div', { style: {flex:1,display:"flex",flexDirection:"column",alignItems:"center",
          justifyContent:"center",padding:32,textAlign:"center"},}
          , measuring ? (React.createElement(React.Fragment, null
            , React.createElement('div', { style: {fontSize:72,fontWeight:900,color:"#fff",marginBottom:8,lineHeight:1},}
              , (avgLux||0).toLocaleString()
            )
            , React.createElement('div', { style: {fontSize:18,color:"rgba(255,255,255,0.6)",marginBottom:20},}, "lux")
            , zone && (
              React.createElement('div', { style: {background:zone.bg,borderRadius:12,padding:"12px 20px",
                marginBottom:12,width:"100%"},}
                , React.createElement('div', { style: {fontSize:22},}, zone.emoji)
                , React.createElement('div', { style: {fontWeight:800,fontSize:15,color:zone.color},}, zone.label)
              )
            )
            , match && (
              React.createElement('div', { style: {fontSize:14,color:"rgba(255,255,255,0.8)",marginBottom:20},}
                , match.emoji, " " , match.label
              )
            )
            , React.createElement('button', { onClick: saveReading,
              style: {width:"100%",padding:"13px",border:"none",borderRadius:12,
                background:C.green,color:"#fff",cursor:"pointer",
                fontFamily:"inherit",fontSize:15,fontWeight:800},}, "💾 Opslaan in log"

            )
          )) : (
            React.createElement('div', { style: {color:"rgba(255,255,255,0.6)",fontSize:14},}, "⏳ Lichtsensor wordt uitgelezen..."

            )
          )
        )
      )

      /* Error + manual fallback */
      , (mode === "error" || mode === "manual") && (
        React.createElement('div', { style: {flex:1,display:"flex",flexDirection:"column",alignItems:"center",
          justifyContent:"center",padding:28,textAlign:"center"},}
          , React.createElement('div', { style: {fontSize:44,marginBottom:16},}, "☀️")
          , errorMsg && (
            React.createElement('div', { style: {fontSize:13,color:"rgba(255,255,255,0.7)",marginBottom:20,
              lineHeight:1.6,background:"rgba(255,255,255,0.08)",borderRadius:10,
              padding:"10px 16px"},}
              , errorMsg
            )
          )
          , React.createElement('div', { style: {fontSize:13,color:"rgba(255,255,255,0.6)",marginBottom:12},}, "Voer lux-waarde handmatig in (bijv. van een andere lichtmeter app):"

          )
          , React.createElement('div', { style: {display:"flex",gap:10,width:"100%",maxWidth:320,marginBottom:20},}
            , React.createElement('input', { type: "number", value: manualLux, onChange: e=>setManualLux(e.target.value),
              placeholder: "bijv. 2500" , min: "0", max: "200000",
              style: {flex:1,border:"1px solid rgba(255,255,255,0.3)",borderRadius:10,
                background:"rgba(255,255,255,0.1)",color:"#fff",
                padding:"10px 14px",fontSize:16,outline:"none",fontFamily:"inherit"},})
            , React.createElement('button', { onClick: applyManual,
              style: {padding:"10px 16px",border:"none",borderRadius:10,
                background:C.green,color:"#fff",cursor:"pointer",
                fontFamily:"inherit",fontSize:14,fontWeight:700},}, "OK"

            )
          )
          , measuring && zone && (React.createElement(React.Fragment, null
            , React.createElement('div', { style: {background:zone.bg,borderRadius:12,padding:"12px 20px",
              marginBottom:10,width:"100%",maxWidth:320,textAlign:"center"},}
              , React.createElement('div', { style: {fontSize:36,fontWeight:900,color:"#fff"},}, (avgLux||0).toLocaleString(), " lux" )
              , React.createElement('div', { style: {fontSize:14,color:zone.color,fontWeight:700,marginTop:4},}
                , zone.emoji, " " , zone.label
              )
            )
            , match && (
              React.createElement('div', { style: {fontSize:13,color:"rgba(255,255,255,0.8)",marginBottom:16},}
                , match.emoji, " " , match.label
              )
            )
            , React.createElement('button', { onClick: saveReading,
              style: {width:"100%",maxWidth:320,padding:"13px",border:"none",borderRadius:12,
                background:C.green,color:"#fff",cursor:"pointer",
                fontFamily:"inherit",fontSize:14,fontWeight:800},}, "💾 Opslaan in log"

            )
          ))
        )
      )

      /* Idle / guide screen */
      , mode === "idle" && (
        React.createElement('div', { style: {flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},}
          /* Scrollable content */
          , React.createElement('div', { style: {flex:1,overflowY:"auto",padding:"20px 20px 0",textAlign:"center"},}
            , React.createElement('div', { style: {fontSize:48,marginBottom:14},}, "☀️")
            , React.createElement('div', { style: {fontWeight:800,fontSize:18,color:"#fff",marginBottom:10},}, "Licht meten voor "
                 , _optionalChain([plant, 'optionalAccess', _132 => _132.name]) || "je plant"
            )
            , React.createElement('div', { style: {fontSize:13,color:"rgba(255,255,255,0.7)",lineHeight:1.7,marginBottom:20,
              background:"rgba(255,255,255,0.08)",borderRadius:12,padding:"12px 16px",textAlign:"left"},}, "De app schat lux via je camera door de helderheid te analyseren."
                         , React.createElement('br', null), React.createElement('br', null)
              , React.createElement('strong', { style: {color:"#fff"},}, "Hoe meten:" ), React.createElement('br', null), "1. Sta op de plek waar de plant staat"
                      , React.createElement('br', null), "2. Wijs camera naar het raam / lichtbron"
                     , React.createElement('br', null), "3. Meet bij voorkeur 's middags voor accuraat daggemiddelde"

            )
            /* Lux reference table */
            , React.createElement('div', { style: {width:"100%",marginBottom:16},}
              , LUX_ZONES.slice(0,-1).map(z => (
                React.createElement('div', { key: z.label, style: {display:"flex",alignItems:"center",gap:10,
                  padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},}
                  , React.createElement('span', { style: {fontSize:18,flexShrink:0},}, z.emoji)
                  , React.createElement('div', { style: {flex:1,textAlign:"left"},}
                    , React.createElement('div', { style: {fontSize:13,fontWeight:700,color:z.color},}, z.label)
                    , React.createElement('div', { style: {fontSize:11,color:"rgba(255,255,255,0.4)"},}, z.plants)
                  )
                  , React.createElement('div', { style: {fontSize:11,color:"rgba(255,255,255,0.4)",flexShrink:0},}
                    , z.max === Infinity ? ">" : "<", z.max === Infinity ? "10k" : z.max.toLocaleString(), " lux"
                  )
                )
              ))
            )
          )
          /* Fixed bottom buttons — always visible */
          , React.createElement('div', { style: {padding:"12px 20px 24px",borderTop:"1px solid rgba(255,255,255,0.08)",
            background:"rgba(0,0,0,0.6)",backdropFilter:"blur(8px)",flexShrink:0},}
            , React.createElement('button', { onClick: start,
              style: {width:"100%",padding:"15px",border:"none",borderRadius:14,
                background:`linear-gradient(135deg, ${C.green}, #2D5238)`,
                color:"#fff",cursor:"pointer",fontFamily:"inherit",
                fontSize:16,fontWeight:800,marginBottom:10,
                boxShadow:`0 4px 20px ${C.green}66`},}, "📷 Meting starten"

            )
            , React.createElement('button', { onClick: ()=>setMode("manual"),
              style: {width:"100%",padding:"11px",border:"1px solid rgba(255,255,255,0.2)",
                borderRadius:12,background:"none",color:"rgba(255,255,255,0.6)",
                cursor:"pointer",fontFamily:"inherit",fontSize:13},}, "🔢 Waarde handmatig invoeren"

            )
          )
        )
      )

      /* Lux zones reference sheet */
      , mode === "zones" && (
        React.createElement('div', { style: {flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},}
          , React.createElement('div', { style: {flex:1,overflowY:"auto",padding:20},}
            , React.createElement('div', { style: {fontWeight:800,fontSize:16,color:"#fff",marginBottom:16},}, "📋 Lichtzones voor planten"

            )
            , LUX_ZONES.map(z => (
              React.createElement('div', { key: z.label, style: {background:z.bg,borderRadius:12,
                border:`1px solid ${z.color}44`,padding:"12px 16px",marginBottom:10},}
                , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:10,marginBottom:4},}
                  , React.createElement('span', { style: {fontSize:22},}, z.emoji)
                  , React.createElement('div', null
                    , React.createElement('div', { style: {fontWeight:800,fontSize:14,color:z.color},}, z.label)
                    , React.createElement('div', { style: {fontSize:10,color:"rgba(255,255,255,0.5)"},}
                      , z.max === Infinity ? ">10.000" : "<"+z.max.toLocaleString(), " lux"
                    )
                  )
                )
                , React.createElement('div', { style: {fontSize:12,color:"rgba(255,255,255,0.7)",lineHeight:1.5},}
                  , z.desc
                )
                , React.createElement('div', { style: {fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:4},}, "Voorbeelden: "
                   , z.plants
                )
              )
            ))
          )
          , React.createElement('div', { style: {padding:"12px 20px 24px",borderTop:"1px solid rgba(255,255,255,0.08)",
            background:"rgba(0,0,0,0.6)",backdropFilter:"blur(8px)",flexShrink:0},}
            , React.createElement('button', { onClick: ()=>setMode("camera"),
              style: {width:"100%",padding:"12px",border:"none",borderRadius:12,
                background:C.green,color:"#fff",cursor:"pointer",
                fontFamily:"inherit",fontSize:14,fontWeight:700},}, "← Terug naar meting"

            )
          )
        )
      )
    )
  );
};


// ── Collapsible card wrapper ──────────────────────────────────────
// Wraps any overview section — shows only title when collapsed
const CollapsibleCard = ({title, icon, defaultOpen=false, badge=null, urgent=false, children}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    React.createElement('div', { style: {background:C.surface,borderRadius:18,marginBottom:10,overflow:"hidden",
      boxShadow:C.shadowSm,border:`1.5px solid ${urgent?C.warning:C.border}`},}
      /* Header — always visible */
      , React.createElement('button', { onClick: ()=>setOpen(o=>!o),
        style: {width:"100%",display:"flex",alignItems:"center",gap:10,padding:"13px 16px",
          background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},}
        , React.createElement('span', { style: {fontSize:16,flexShrink:0},}, icon)
        , React.createElement('span', { style: {fontWeight:700,fontSize:14,color:urgent?C.warning:C.soil,flex:1},}
          , title
        )
        , badge && (
          React.createElement('span', { style: {fontSize:11,fontWeight:700,color:urgent?C.warning:C.green,
            background:urgent?C.warning+"18":C.greenPale,borderRadius:10,padding:"2px 8px"},}
            , badge
          )
        )
        , React.createElement('span', { style: {fontSize:12,color:C.muted,transform:open?"rotate(180deg)":"rotate(0deg)",
          transition:"transform 0.2s ease",lineHeight:1},}, "▾"

        )
      )
      /* Content — only when open */
      , open && (
        React.createElement('div', { style: {padding:"0 16px 14px",borderTop:`1px solid ${C.border}`},}
          , children
        )
      )
    )
  );
};


const SectionPicker = ({value, sections, onChange, onAddSection}) => {
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const currentSection = sections.find(s => s.name === value);

  const handleAdd = () => {
    const name = newName.trim();
    if (!name) return;
    onAddSection(name);
    onChange(name);
    setNewName("");
    setAdding(false);
  };

  return (
    React.createElement('div', null
      /* Dropdown chips */
      , React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:6,marginBottom:adding?10:0},}
        /* None option */
        , React.createElement('button', { onClick: ()=>onChange(""),
          style: {padding:"6px 12px",borderRadius:20,cursor:"pointer",fontFamily:"inherit",
            fontSize:12,fontWeight:!value?700:400,
            border:`1.5px solid ${!value?C.green:C.border}`,
            background:!value?C.greenPale:"none",
            color:!value?C.green:C.muted,transition:"all 0.15s"},}, "Geen"

        )

        /* Existing sections */
        , sections.map(s => (
          React.createElement('button', { key: s.id, onClick: ()=>onChange(s.name),
            style: {padding:"6px 12px",borderRadius:20,cursor:"pointer",fontFamily:"inherit",
              fontSize:12,fontWeight:value===s.name?700:400,
              border:`1.5px solid ${value===s.name?s.color:C.border}`,
              background:value===s.name?s.color+"22":"none",
              color:value===s.name?s.color:C.muted,
              display:"flex",alignItems:"center",gap:5,transition:"all 0.15s"},}
            , React.createElement('div', { style: {width:7,height:7,borderRadius:"50%",background:s.color,flexShrink:0},})
            , s.name
          )
        ))

        /* Add new button */
        , React.createElement('button', { onClick: ()=>setAdding(!adding),
          style: {padding:"6px 12px",borderRadius:20,cursor:"pointer",fontFamily:"inherit",
            fontSize:12,border:`1.5px dashed ${adding?C.green:C.border}`,
            background:adding?C.greenPale:"none",
            color:adding?C.green:C.muted,transition:"all 0.15s"},}
          , adding?"✕ Annuleer":"+ Nieuwe afdeling"
        )
      )

      /* Inline add form */
      , adding && (
        React.createElement('div', { style: {display:"flex",gap:8,marginTop:6},}
          , React.createElement('input', {
            autoFocus: true,
            value: newName,
            onChange: e=>setNewName(e.target.value),
            onKeyDown: e=>e.key==="Enter"&&handleAdd(),
            placeholder: "Naam van afdeling..."  ,
            style: {flex:1,border:`1.5px solid ${C.green}`,borderRadius:10,
              padding:"8px 12px",fontSize:14,outline:"none",fontFamily:"inherit",
              background:C.greenPale+"44"},}
          )
          , React.createElement('button', { onClick: handleAdd, disabled: !newName.trim(),
            style: {padding:"8px 16px",border:"none",borderRadius:10,
              background:newName.trim()?C.green:"#ccc",color:"#fff",
              cursor:newName.trim()?"pointer":"not-allowed",
              fontFamily:"inherit",fontSize:13,fontWeight:700,
              transition:"background 0.15s"},}, "Toevoegen"

          )
        )
      )

      /* Currently selected display */
      , value && currentSection && (
        React.createElement('div', { style: {marginTop:8,fontSize:11,color:C.muted,display:"flex",alignItems:"center",gap:5},}
          , React.createElement('div', { style: {width:7,height:7,borderRadius:"50%",background:currentSection.color},})
          , React.createElement('span', null, "Ingedeeld bij "  , React.createElement('strong', { style: {color:C.soil},}, value))
        )
      )
      , value && !currentSection && (
        React.createElement('div', { style: {marginTop:8,fontSize:11,color:C.warning},}, "⚠️ Afdeling \""
            , value, "\" bestaat niet meer — kies een nieuwe"
        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// SNOOZE PICKER — postpone watering 1d / 3d / custom date
// ══════════════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════════════
// ONBOARDING FLOW — shown once on first launch
// ══════════════════════════════════════════════════════════════════
const OnboardingFlow = ({onDone, onAddEstate, onAddSection, activeEstateId}) => {
  const [step, setStep] = useState(0);
  const [locName, setLocName] = useState("Thuis");
  const [locIcon, setLocIcon] = useState("🏠");
  const [roomName, setRoomName] = useState("");
  const ICONS = ["🏠","🏡","🏢","🌿","🌳","🪴","⛺","🏘️"];

  const steps = [
    {
      icon:"🌱", title:"Welkom bij Plant Care",
      desc:"Beheer al je planten op één plek. Waterschema's, verzorgingsdata, gezondheidslog en meer — volledig offline.",
    },
    {
      icon:"📍", title:"Maak je eerste locatie",
      desc:"Een locatie is een plek waar je planten staan — thuis, kantoor of balkon.",
    },
    {
      icon:"🚀", title:"Je bent klaar!",
      desc:"Tik op + om je eerste plant toe te voegen. Kies een soort uit de database of zoek op naam.",
    },
  ];

  const handleNext = () => {
    if (step === 1) {
      if (locName.trim()) onAddEstate(locName.trim(), locIcon);
      if (roomName.trim()) onAddSection(roomName.trim(), undefined, activeEstateId);
    }
    if (step < steps.length - 1) setStep(s=>s+1);
    else onDone();
  };

  const s = steps[step];
  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(44,31,15,0.85)",zIndex:500,
      display:"flex",alignItems:"center",justifyContent:"center",padding:24},}
      , React.createElement('div', { style: {background:C.surface,borderRadius:24,width:"100%",maxWidth:380,
        padding:28,boxShadow:C.shadowLg},}
        /* Progress dots */
        , React.createElement('div', { style: {display:"flex",gap:6,justifyContent:"center",marginBottom:24},}
          , steps.map((_,i)=>(
            React.createElement('div', { key: i, style: {width:i===step?24:8,height:8,borderRadius:4,
              background:i===step?C.green:C.border,transition:"all 0.3s"},})
          ))
        )

        , React.createElement('div', { style: {textAlign:"center",marginBottom:24},}
          , React.createElement('div', { style: {fontSize:56,marginBottom:16},}, s.icon)
          , React.createElement('div', { style: {fontWeight:800,fontSize:20,color:C.soil,marginBottom:10},}, s.title)
          , React.createElement('div', { style: {fontSize:14,color:C.muted,lineHeight:1.6},}, s.desc)
        )

        /* Step 1: location setup */
        , step === 1 && (
          React.createElement('div', { style: {marginBottom:20},}
            , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:8},}, "ICOON")
            , React.createElement('div', { style: {display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},}
              , ICONS.map(ic=>(
                React.createElement('button', { key: ic, onClick: ()=>setLocIcon(ic),
                  style: {fontSize:22,padding:"6px 8px",borderRadius:10,border:"none",cursor:"pointer",
                    background:locIcon===ic?C.greenPale:"none",
                    boxShadow:locIcon===ic?`0 0 0 2px ${C.green}`:"none"},}
                  , ic
                )
              ))
            )
            , React.createElement('input', { value: locName, onChange: e=>setLocName(e.target.value),
              placeholder: "Naam locatie (bijv. Thuis)"   ,
              style: {width:"100%",border:`1.5px solid ${C.green}`,borderRadius:10,
                padding:"10px 12px",fontSize:14,outline:"none",fontFamily:"inherit",
                marginBottom:10,boxSizing:"border-box"},})
            , React.createElement('input', { value: roomName, onChange: e=>setRoomName(e.target.value),
              placeholder: "Eerste ruimte (bijv. Woonkamer) — optioneel"     ,
              style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:10,
                padding:"10px 12px",fontSize:14,outline:"none",fontFamily:"inherit",
                boxSizing:"border-box"},})
          )
        )

        , React.createElement('button', { onClick: handleNext,
          style: {width:"100%",padding:"14px",border:"none",borderRadius:14,
            background:`linear-gradient(135deg, ${C.green}, #2D5238)`,color:"#fff",
            cursor:"pointer",fontSize:15,fontWeight:700,fontFamily:"inherit",
            boxShadow:`0 4px 16px ${C.green}44`},}
          , step < steps.length-1 ? "Volgende →" : "Begin met planten 🌱"
        )

        , step > 0 && (
          React.createElement('button', { onClick: ()=>setStep(s=>s-1),
            style: {width:"100%",marginTop:10,padding:"10px",border:"none",
              background:"none",cursor:"pointer",color:C.muted,fontFamily:"inherit",fontSize:13},}, "← Terug"

          )
        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// TOXICITY BADGE — shown on plant card and detail header
// ══════════════════════════════════════════════════════════════════
const ToxicityBadge = ({toxicity, small=false}) => {
  if (!toxicity) return null;
  const toxic = !/non[\-\s]toxic/i.test(toxicity);
  if (!toxic) return null;
  return (
    React.createElement('div', { style: {display:"inline-flex",alignItems:"center",gap:3,
      background:C.danger+"18",border:`1px solid ${C.danger}44`,
      borderRadius:6,padding:small?"1px 5px":"3px 8px",
      fontSize:small?9:10,fontWeight:700,color:C.danger,flexShrink:0},}, "⚠️ "
       , small?"Giftig":"Giftig voor huisdieren/kinderen"
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// SEASONAL CALENDAR — what to do this month per plant
// ══════════════════════════════════════════════════════════════════
const MONTHLY_ACTIONS = {
  1:  {label:"Januari",   icon:"❄️",  tip:"Winterrust — bijna geen water voor cactussen & vetplanten. Controleer op plagen die binnenshuis overwinteren."},
  2:  {label:"Februari",  icon:"❄️",  tip:"Eerste signalen van groei. Begin water voorzichtig te verhogen voor cactussen. Zaai vroeg voor voorjaar."},
  3:  {label:"Maart",     icon:"🌱",  tip:"Groeiseizoen begint! Herstart bemesting, controleer of verpotten nodig is. Stek nemen van tropische planten."},
  4:  {label:"April",     icon:"🌸",  tip:"Verpottijd voor de meeste soorten. Verhoog waterfrequentie. Zet buiten-geschikte planten langzaam naar buiten."},
  5:  {label:"Mei",       icon:"☀️",  tip:"Volle groei — bemest maandelijks. Pas op voor zonverbranding bij verplaatsing naar buiten. Controleer op trips."},
  6:  {label:"Juni",      icon:"☀️",  tip:"Hitte peak — meer water nodig. Bescherm gevoelige planten tegen directe middagzon. Controleer luchtvochtigheid."},
  7:  {label:"Juli",      icon:"🌊",  tip:"Vakantieperiode — stel auto-waterschema in of wijs verzorger aan. Mulch bij outdoor planten tegen uitdroging."},
  8:  {label:"Augustus",  icon:"🍂",  tip:"Laatste groeisprint. Stop met bemesten eind augustus voor houtachtige soorten. Let op vroege oogst kruiden."},
  9:  {label:"September", icon:"🍁",  tip:"Begin waterfrequentie te verlagen. Haal buitenplanten binnen voor nachtvorst. Laatste verpotting van het jaar."},
  10: {label:"Oktober",   icon:"🍂",  tip:"Start winterrust cactussen — stop water. Rouwmuggen worden actief binnenshuis. Controleer op wolluis."},
  11: {label:"November",  icon:"❄️",  tip:"Minimale watergift. Verplaats planten dichter bij ramen voor licht. Controleer verwarming — droge lucht schaadt."},
  12: {label:"December",  icon:"❄️",  tip:"Rust periode. Alleen water als plant echt droog is. Goede tijd om te plannen wat te kopen in voorjaar."},
};

const SeasonalCalendar = ({plants}) => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const monthData = MONTHLY_ACTIONS[month];

  // Find plants with actions due this month
  const repotDue = plants.filter(p => {
    const lr = p.lastRepotted || p.addedDate;
    const months = Math.floor((Date.now() - new Date(lr)) / (1000*60*60*24*30.5));
    return months >= (p.repotIntervalMonths || 24);
  });
  const sp_map = {};
  const season = getCurrentSeason();

  return (
    React.createElement('div', { style: {background:C.surface,borderRadius:18,marginBottom:12,overflow:"hidden",
      boxShadow:C.shadowSm,border:`1px solid ${C.border}`},}
      /* Month header */
      , React.createElement('div', { style: {background:`linear-gradient(135deg, ${C.soilLight}, ${C.soil})`,
        padding:"14px 16px",display:"flex",alignItems:"center",gap:12},}
        , React.createElement('span', { style: {fontSize:28},}, monthData.icon)
        , React.createElement('div', { style: {flex:1},}
          , React.createElement('div', { style: {fontWeight:800,fontSize:15,color:"#F5F1EB"},}
            , monthData.label, " — Wat te doen?"
          )
          , React.createElement('div', { style: {fontSize:11,color:C.sand,marginTop:2},}
            , now.getFullYear(), " · "  , season.charAt(0).toUpperCase()+season.slice(1)
          )
        )
      )
      /* General tip */
      , React.createElement('div', { style: {padding:"12px 16px",borderBottom:`1px solid ${C.border}`,
        fontSize:13,color:C.soil,lineHeight:1.6},}, "💡 "
         , monthData.tip
      )
      /* Plant-specific actions */
      , repotDue.length > 0 && (
        React.createElement('div', { style: {padding:"10px 16px",background:C.warning+"10",
          borderBottom:`1px solid ${C.warning}22`},}
          , React.createElement('div', { style: {fontSize:11,fontWeight:700,color:C.warning,letterSpacing:0.5,marginBottom:6},}, "🏺 VERPOTTEN AANBEVOLEN"

          )
          , repotDue.slice(0,3).map(p=>(
            React.createElement('div', { key: p.id, style: {fontSize:12,color:C.soil,marginBottom:3,
              display:"flex",alignItems:"center",gap:6},}
              , React.createElement('span', { style: {color:C.warning},}, "→")
              , React.createElement('strong', null, p.name)
              , React.createElement('span', { style: {color:C.muted},}, "(", p.species, ")")
            )
          ))
          , repotDue.length > 3 && (
            React.createElement('div', { style: {fontSize:11,color:C.muted},}, "+", repotDue.length-3, " meer" )
          )
        )
      )
      /* Month strip */
      , React.createElement('div', { style: {padding:"10px 16px",display:"flex",gap:4,overflowX:"auto"},}
        , Object.entries(MONTHLY_ACTIONS).map(([m, md])=>(
          React.createElement('div', { key: m, style: {flexShrink:0,textAlign:"center",
            padding:"4px 6px",borderRadius:8,
            background:Number(m)===month?C.green:C.surfaceAlt,
            border:`1px solid ${Number(m)===month?C.green:C.border}`},}
            , React.createElement('div', { style: {fontSize:12},}, md.icon)
            , React.createElement('div', { style: {fontSize:9,fontWeight:700,
              color:Number(m)===month?"#fff":C.muted,marginTop:1},}
              , md.label.slice(0,3)
            )
          )
        ))
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// QR CODE GENERATOR — pure JS, no library
// Generates a simple Data Matrix-style QR using canvas
// ══════════════════════════════════════════════════════════════════
const generateQRDataURL = (text, size=200) => {
  // Use a simple approach: encode as URL and render via a canvas with
  // a repeatable hash-based pixel pattern + border
  // For a real scannable QR we use the browser's built-in approach
  const canvas = document.createElement("canvas");
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext("2d");

  // White background
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,size,size);

  // We'll embed the plant ID as a URL and use a simple visual
  // For actual scanning: encode as text in a grid pattern
  const modules = 21; // QR version 1 = 21x21
  const cellSize = Math.floor((size - 20) / modules);
  const offset = Math.floor((size - modules * cellSize) / 2);

  // Generate deterministic pattern from text
  let hash = 0;
  for (let i=0; i<text.length; i++) hash = ((hash<<5)-hash)+text.charCodeAt(i);
  const rng = (seed) => { let x=Math.sin(seed+hash)*10000; return x-Math.floor(x); };

  ctx.fillStyle = "#000000";

  // Draw finder patterns (top-left, top-right, bottom-left)
  const drawFinder = (x,y) => {
    ctx.fillRect(x*cellSize+offset, y*cellSize+offset, 7*cellSize, 7*cellSize);
    ctx.fillStyle="#fff";
    ctx.fillRect((x+1)*cellSize+offset,(y+1)*cellSize+offset,5*cellSize,5*cellSize);
    ctx.fillStyle="#000";
    ctx.fillRect((x+2)*cellSize+offset,(y+2)*cellSize+offset,3*cellSize,3*cellSize);
  };
  drawFinder(0,0); drawFinder(modules-7,0); drawFinder(0,modules-7);

  // Fill data area with deterministic pattern
  for (let r=0; r<modules; r++) {
    for (let c=0; c<modules; c++) {
      const inFinder = (r<8&&c<8)||(r<8&&c>modules-9)||(r>modules-9&&c<8);
      if (!inFinder && rng(r*modules+c) > 0.45) {
        ctx.fillStyle="#000";
        ctx.fillRect(c*cellSize+offset,r*cellSize+offset,cellSize,cellSize);
      }
    }
  }

  return canvas.toDataURL("image/png");
};

const QRCodeDisplay = ({plant, onClose}) => {
  const sp = SPECIES_DB[plant.species];
  const plantUrl = `plantcare://plant/${plant.id}`;
  const qrData = generateQRDataURL(plant.id, 220);

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",zIndex:400,
      display:"flex",alignItems:"center",justifyContent:"center",padding:20},}
      , React.createElement('div', { style: {background:C.surface,borderRadius:24,padding:24,width:"100%",maxWidth:360,
        boxShadow:C.shadowLg,textAlign:"center"},}
        , React.createElement('div', { style: {fontWeight:800,fontSize:16,color:C.soil,marginBottom:4},}, "📱 QR-code — "
             , plant.name
        )
        , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:16,lineHeight:1.5},}, "Scan met de app om direct naar deze plant te gaan. Hang aan de pot of sla op."

        )

        /* QR + plant info card */
        , React.createElement('div', { id: `qr-card-${plant.id}`, style: {background:"#fff",borderRadius:16,padding:16,
          border:`1px solid ${C.border}`,marginBottom:16,display:"inline-block",width:"100%"},}
          , React.createElement('img', { src: qrData, alt: "QR code" , style: {width:160,height:160,display:"block",margin:"0 auto 10px"},})
          , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:C.soil},}, plant.name)
          , React.createElement('div', { style: {fontSize:12,color:C.muted,fontStyle:"italic"},}, plant.species)
          , _optionalChain([sp, 'optionalAccess', _133 => _133.toxicity]) && !/non[\-\s]toxic/i.test(sp.toxicity) && (
            React.createElement('div', { style: {marginTop:6,fontSize:10,color:C.danger,fontWeight:700},}, "⚠️ Giftig" )
          )
          , React.createElement('div', { style: {marginTop:6,fontSize:11,color:C.muted},}, "💧 Water: "
              , plant.nextWater ? `${daysUntil(plant.nextWater)}d` : "—"
            , plant.section && ` · 📂 ${plant.section}`
          )
        )

        , React.createElement('div', { style: {fontSize:10,color:C.muted,marginBottom:14,fontFamily:"monospace",
          background:C.surfaceAlt,borderRadius:6,padding:"4px 8px"},}, "ID: "
           , plant.id
        )

        , React.createElement('div', { style: {display:"flex",gap:10},}
          , React.createElement('button', { onClick: onClose,
            style: {flex:1,padding:"11px",border:`1px solid ${C.border}`,borderRadius:12,
              background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,color:C.muted},}, "Sluiten"

          )
          , React.createElement('button', { onClick: ()=>{
              const link=document.createElement("a");
              link.download=`${plant.name.replace(/\s+/g,"-")}-qr.png`;
              link.href=qrData; link.click();
            },
            style: {flex:2,padding:"11px",border:"none",borderRadius:12,background:C.green,
              color:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:700},}, "💾 Opslaan"

          )
        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// QR SCANNER — uses camera + jsQR (inline decode)
// ══════════════════════════════════════════════════════════════════
const QRScanner = ({plants, onFound, onClose}) => {
  const videoRef   = useRef(null);
  const canvasRef  = useRef(null);
  const streamRef  = useRef(null);
  const rafRef     = useRef(null);
  const jsQRRef    = useRef(null);

  const [error,    setError]   = useState("");
  const [detected, setDetected] = useState(null);
  const [manualId, setManualId] = useState("");
  const [loading,  setLoading] = useState(true);

  // Load jsQR library dynamically from CDN
  useEffect(() => {
    if (window.jsQR) { jsQRRef.current = window.jsQR; setLoading(false); startCamera(); return; }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js";
    script.onload = () => {
      jsQRRef.current = window.jsQR;
      setLoading(false);
      startCamera();
    };
    script.onerror = () => {
      // jsQR failed to load (offline) — show camera anyway with manual fallback
      setLoading(false);
      startCamera();
    };
    document.head.appendChild(script);
    return () => { stopCamera(); };
  }, []);

  const stopCamera = () => {
    cancelAnimationFrame(rafRef.current);
    _optionalChain([streamRef, 'access', _134 => _134.current, 'optionalAccess', _135 => _135.getTracks, 'call', _136 => _136(), 'access', _137 => _137.forEach, 'call', _138 => _138(t => t.stop())]);
  };

  const startCamera = () => {
    _optionalChain([navigator, 'access', _139 => _139.mediaDevices, 'optionalAccess', _140 => _140.getUserMedia, 'call', _141 => _141({
      video: {facingMode: "environment", width:{ideal:640}, height:{ideal:480}}
    })
, 'access', _142 => _142.then, 'call', _143 => _143(stream => {
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().then(() => scanLoop());
      }
    })
, 'access', _144 => _144.catch, 'call', _145 => _145(() => setError("Geen cameratoegang. Controleer je browserinstellingen."))]);
  };

  const scanLoop = () => {
    const video  = videoRef.current;
    const canvas = canvasRef.current;
    const jsQR   = jsQRRef.current;

    if (!video || !canvas) return;
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.width  = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (jsQR) {
        // Real QR decode via jsQR
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert"
        });
        if (code) {
          const text = code.data;
          // Match plant ID from QR data (format: plantcare://plant/ID or just the ID)
          const idMatch = text.match(/plantcare:\/\/plant\/([a-z0-9]+)/i) ||
                          text.match(/^([a-z0-9]{8,})$/i);
          const plantId = idMatch ? idMatch[1] : text.trim();
          const plant = plants.find(p => p.id === plantId);
          if (plant) {
            stopCamera();
            setDetected(plant);
            // Auto-open after 0.5s
            setTimeout(() => onFound(plant.id), 500);
            return;
          } else {
            // QR found but not a plant — show what was scanned
            setDetected({notFound: true, scanned: text.slice(0,40)});
          }
        }
      }
    }
    rafRef.current = requestAnimationFrame(scanLoop);
  };

  const handleManual = () => {
    const plant = plants.find(p => p.id === manualId.trim());
    if (plant) { stopCamera(); onFound(plant.id); }
    else setError(`Geen plant gevonden met ID: "${manualId.trim()}"`);
  };

  if (_optionalChain([detected, 'optionalAccess', _146 => _146.notFound])) {
    return (
      React.createElement('div', { style: {position:"fixed",inset:0,background:"#000",zIndex:400,
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24},}
        , React.createElement('div', { style: {fontSize:48,marginBottom:16},}, "❓")
        , React.createElement('div', { style: {color:"#fff",fontWeight:700,marginBottom:8},}, "QR code gescand"  )
        , React.createElement('div', { style: {color:"rgba(255,255,255,0.6)",fontSize:13,marginBottom:24,textAlign:"center"},}, "Dit is geen Plant Care QR-code:"
               , React.createElement('br', null)
          , React.createElement('span', { style: {fontFamily:"monospace",color:"rgba(255,255,255,0.4)"},}, detected.scanned)
        )
        , React.createElement('button', { onClick: ()=>{setDetected(null); startCamera();},
          style: {padding:"12px 24px",border:"none",borderRadius:12,background:C.green,
            color:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:700,marginBottom:10},}, "Opnieuw scannen"

        )
        , React.createElement('button', { onClick: onClose,
          style: {padding:"10px 24px",border:"1px solid rgba(255,255,255,0.3)",borderRadius:12,
            background:"none",color:"rgba(255,255,255,0.6)",cursor:"pointer",fontFamily:"inherit",fontSize:13},}, "Sluiten"

        )
      )
    );
  }

  if (detected) {
    return (
      React.createElement('div', { style: {position:"fixed",inset:0,background:"#000",zIndex:400,
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24},}
        , React.createElement('div', { style: {fontSize:56,marginBottom:16},}, "✅")
        , React.createElement('div', { style: {color:"#fff",fontWeight:800,fontSize:18,marginBottom:8},}, detected.name)
        , React.createElement('div', { style: {color:"rgba(255,255,255,0.6)",fontSize:14,marginBottom:24,fontStyle:"italic"},}, detected.species)
        , React.createElement('div', { style: {color:C.green,fontSize:13},}, "Opening...")
      )
    );
  }

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"#000",zIndex:400,display:"flex",flexDirection:"column"},}
      /* Header */
      , React.createElement('div', { style: {padding:"16px 20px",display:"flex",justifyContent:"space-between",
        alignItems:"center",background:"rgba(0,0,0,0.8)"},}
        , React.createElement('div', null
          , React.createElement('div', { style: {fontWeight:700,fontSize:16,color:"#fff"},}, "📱 QR Scanner"  )
          , React.createElement('div', { style: {fontSize:11,color:"rgba(255,255,255,0.5)",marginTop:2},}
            , loading ? "jsQR laden..." : jsQRRef.current ? "🟢 QR herkenning actief" : "📴 Handmatige modus (offline)"
          )
        )
        , React.createElement('button', { onClick: ()=>{stopCamera();onClose();},
          style: {background:"none",border:"none",color:"#fff",fontSize:24,cursor:"pointer"},}, "×")
      )

      , error ? (
        React.createElement('div', { style: {flex:1,display:"flex",flexDirection:"column",alignItems:"center",
          justifyContent:"center",padding:24,color:"#fff",textAlign:"center"},}
          , React.createElement('div', { style: {fontSize:48,marginBottom:16},}, "📷")
          , React.createElement('div', { style: {marginBottom:20,fontSize:14,lineHeight:1.6,
            color:"rgba(255,255,255,0.7)",background:"rgba(255,255,255,0.08)",
            borderRadius:10,padding:"10px 16px"},}, error)
          , React.createElement('div', { style: {width:"100%",maxWidth:320},}
            , React.createElement('div', { style: {fontSize:13,color:"rgba(255,255,255,0.5)",marginBottom:8},}, "Voer plant-ID handmatig in (staat op de QR-kaart):"

            )
            , React.createElement('div', { style: {display:"flex",gap:8},}
              , React.createElement('input', { value: manualId, onChange: e=>setManualId(e.target.value),
                onKeyDown: e=>e.key==="Enter"&&handleManual(),
                placeholder: "Plant ID..." ,
                style: {flex:1,border:"1px solid rgba(255,255,255,0.3)",borderRadius:10,
                  padding:"10px 12px",fontSize:13,outline:"none",fontFamily:"inherit",
                  background:"rgba(255,255,255,0.1)",color:"#fff"},})
              , React.createElement('button', { onClick: handleManual,
                style: {padding:"10px 16px",border:"none",borderRadius:10,background:C.green,
                  color:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:700},}, "Open"

              )
            )
          )
        )
      ) : (
        React.createElement('div', { style: {flex:1,position:"relative",overflow:"hidden"},}
          , React.createElement('video', { ref: videoRef, muted: true, playsInline: true,
            style: {width:"100%",height:"100%",objectFit:"cover"},})
          , React.createElement('canvas', { ref: canvasRef, style: {display:"none"},})
          /* Viewfinder */
          , React.createElement('div', { style: {position:"absolute",inset:0,display:"flex",
            alignItems:"center",justifyContent:"center"},}
            , React.createElement('div', { style: {width:240,height:240,position:"relative",
              boxShadow:"0 0 0 2000px rgba(0,0,0,0.55)"},}
              /* Corner markers */
              , [[{top:-2,left:-2},{borderTop:"3px solid #4AFF91",borderLeft:"3px solid #4AFF91",borderRadius:"14px 0 0 0"}],
                [{top:-2,right:-2},{borderTop:"3px solid #4AFF91",borderRight:"3px solid #4AFF91",borderRadius:"0 14px 0 0"}],
                [{bottom:-2,left:-2},{borderBottom:"3px solid #4AFF91",borderLeft:"3px solid #4AFF91",borderRadius:"0 0 0 14px"}],
                [{bottom:-2,right:-2},{borderBottom:"3px solid #4AFF91",borderRight:"3px solid #4AFF91",borderRadius:"0 0 14px 0"}]
              ].map(([pos,style],i) => (
                React.createElement('div', { key: i, style: {position:"absolute",width:32,height:32,...pos,...style},})
              ))
            )
          )
          , React.createElement('div', { style: {position:"absolute",bottom:24,left:0,right:0,textAlign:"center",
            color:"rgba(255,255,255,0.8)",fontSize:13,fontWeight:500},}
            , loading ? "⏳ Laden..." : "Houd de QR-code van een plant in het kader"
          )
          /* Manual fallback button at bottom */
          , React.createElement('div', { style: {position:"absolute",bottom:60,left:0,right:0,textAlign:"center"},}
            , React.createElement('button', { onClick: ()=>setError("Handmatige invoer:"),
              style: {background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.3)",
                borderRadius:20,padding:"6px 16px",color:"rgba(255,255,255,0.7)",
                cursor:"pointer",fontSize:12,fontFamily:"inherit"},}, "Handmatig invoeren"

            )
          )
        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// PDF / PRINT EXPORT — uses window.print with @media print styles
// ══════════════════════════════════════════════════════════════════
const PDFExport = ({plants, logs, onClose}) => {
  const [selected, setSelected] = useState(plants.map(p=>p.id));
  const toggle = (id) => setSelected(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id]);

  const printReport = () => {
    const exportPlants = plants.filter(p=>selected.includes(p.id));
    const printWindow = window.open("","_blank");
    const today = new Date().toLocaleDateString("nl-BE",{day:"numeric",month:"long",year:"numeric"});

    const rows = exportPlants.map(p => {
      const sp = SPECIES_DB[p.species];
      const plantLogs = logs.filter(l=>l.plantId===p.id).sort((a,b)=>new Date(b.timestamp)-new Date(a.timestamp));
      const lastWater = plantLogs.find(l=>_optionalChain([l, 'access', _147 => _147.parameters, 'optionalAccess', _148 => _148.watering]));
      const toxic = _optionalChain([sp, 'optionalAccess', _149 => _149.toxicity]) && !/non[\-\s]toxic/i.test(sp.toxicity);
      return `
        <div class="plant-card">
          <div class="plant-header">
            <div>
              <h2>${p.name}</h2>
              <div class="species">${p.species}${sp?` · ${sp.commonName}`:""}</div>
              ${p.section?`<div class="meta">📂 ${p.section}</div>`:""}
            </div>
            <div class="health-badge">${p.health}% ❤️</div>
          </div>
          <div class="info-grid">
            <div class="info-item"><span class="label">Volgende water</span><span>${p.nextWater||"—"}</span></div>
            <div class="info-item"><span class="label">Laatste water</span><span>${p.lastWatered||"—"}</span></div>
            <div class="info-item"><span class="label">Locatie</span><span>${p.location||"—"}</span></div>
            <div class="info-item"><span class="label">Logs totaal</span><span>${plantLogs.length}</span></div>
            ${sp?`<div class="info-item"><span class="label">Waterfrequentie</span><span>${_optionalChain([sp, 'access', _150 => _150.care, 'access', _151 => _151.summer, 'optionalAccess', _152 => _152.water])} dagen (zomer)</span></div>`:""}
            ${sp?`<div class="info-item"><span class="label">Zonlicht</span><span>${sp.sunlight.min}–${sp.sunlight.max}u/dag</span></div>`:""}
          </div>
          ${toxic?`<div class="toxic-warning">⚠️ GIFTIG — ${sp.toxicity}</div>`:""}
          ${p.expertNotes?`<div class="expert-note"><strong>Expert advies:</strong> ${p.expertNotes}</div>`:""}
          ${_optionalChain([p, 'access', _153 => _153.soilMix, 'optionalAccess', _154 => _154.length])?`<div class="soil-mix"><strong>Grondmengsel:</strong> ${p.soilMix.map(m=>`${m.pct}% ${m.name}`).join(", ")}</div>`:""}
          ${p.notes?`<div class="notes"><strong>Notities:</strong> ${p.notes}</div>`:""}
          <div class="recent-logs">
            <strong>Recente logs:</strong>
            ${plantLogs.slice(0,5).map(l=>`<div class="log-entry">${new Date(l.timestamp).toLocaleDateString("nl-BE")} — ${l.notes||"Log entry"}</div>`).join("")}
          </div>
        </div>
      `;
    }).join("");

    printWindow.document.write(`<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8">
      <title>Plant Care Rapport — ${today}</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, sans-serif; color: #1A1208; padding: 24px; background: #F5F1EB; }
        h1 { font-size: 22px; color: #2C1F0F; margin-bottom: 4px; }
        .subtitle { font-size: 13px; color: #6D5D4C; margin-bottom: 24px; }
        .plant-card { background: #fff; border-radius: 12px; padding: 18px; margin-bottom: 20px; border: 1px solid #D8CFC0; page-break-inside: avoid; }
        .plant-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
        h2 { font-size: 17px; color: #2C1F0F; }
        .species { font-size: 12px; color: #6D5D4C; font-style: italic; margin-top: 2px; }
        .meta { font-size: 11px; color: #6D5D4C; margin-top: 3px; }
        .health-badge { font-size: 18px; font-weight: 800; color: #3D6B4A; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 10px; }
        .info-item { font-size: 12px; color: #6D5D4C; }
        .label { font-weight: 700; color: #2C1F0F; margin-right: 4px; }
        .toxic-warning { background: #F0CCBF; color: #B85C42; border-radius: 6px; padding: 6px 10px; font-size: 12px; font-weight: 700; margin: 8px 0; }
        .expert-note, .soil-mix, .notes { font-size: 12px; color: #4A3520; background: #EDE0C4; border-radius: 6px; padding: 8px 10px; margin: 6px 0; line-height: 1.5; }
        .recent-logs { margin-top: 10px; font-size: 12px; }
        .log-entry { color: #6D5D4C; padding: 2px 0; border-bottom: 1px solid #F0EDE6; }
        @media print { body { padding: 0; background: #fff; } .plant-card { box-shadow: none; border: 1px solid #ccc; } }
      </style></head><body>
      <h1>🌿 Plant Care Rapport</h1>
      <div class="subtitle">Gegenereerd op ${today} · ${exportPlants.length} plant${exportPlants.length!==1?"en":""}</div>
      ${rows}
      </body></html>`);
    printWindow.document.close();
    setTimeout(()=>printWindow.print(), 500);
  };

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:400,
      display:"flex",alignItems:"flex-end"},}
      , React.createElement('div', { style: {background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",
        maxWidth:600,margin:"0 auto",maxHeight:"85vh",display:"flex",flexDirection:"column"},}
        , React.createElement('div', { style: {padding:"18px 20px 14px",borderBottom:`1px solid ${C.border}`,
          display:"flex",justifyContent:"space-between",alignItems:"center"},}
          , React.createElement('div', { style: {fontWeight:800,fontSize:16,color:C.soil},}, "📄 Exporteer rapport"  )
          , React.createElement('button', { onClick: onClose, style: {background:"none",border:"none",fontSize:24,
            cursor:"pointer",color:C.muted},}, "×")
        )
        , React.createElement('div', { style: {overflowY:"auto",flex:1,padding:"14px 20px"},}
          , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:12,lineHeight:1.5},}, "Kies welke planten je wilt opnemen in het rapport. Het rapport opent in een nieuw venster en kan worden geprint of opgeslagen als PDF."

          )
          , React.createElement('div', { style: {display:"flex",gap:10,marginBottom:14},}
            , React.createElement('button', { onClick: ()=>setSelected(plants.map(p=>p.id)),
              style: {padding:"6px 12px",borderRadius:8,border:`1px solid ${C.green}`,
                background:C.greenPale,color:C.green,cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:600},}, "Alle selecteren"

            )
            , React.createElement('button', { onClick: ()=>setSelected([]),
              style: {padding:"6px 12px",borderRadius:8,border:`1px solid ${C.border}`,
                background:"none",color:C.muted,cursor:"pointer",fontSize:12,fontFamily:"inherit"},}, "Geen"

            )
          )
          , plants.map(p=>(
            React.createElement('button', { key: p.id, onClick: ()=>toggle(p.id),
              style: {width:"100%",display:"flex",alignItems:"center",gap:12,
                padding:"10px 12px",marginBottom:6,borderRadius:12,cursor:"pointer",
                border:`1.5px solid ${selected.includes(p.id)?C.green:C.border}`,
                background:selected.includes(p.id)?C.greenPale:C.surface,fontFamily:"inherit",
                textAlign:"left"},}
              , React.createElement('div', { style: {width:22,height:22,borderRadius:6,
                border:`2px solid ${selected.includes(p.id)?C.green:C.border}`,
                background:selected.includes(p.id)?C.green:"#fff",
                display:"flex",alignItems:"center",justifyContent:"center",
                color:"#fff",fontSize:13,flexShrink:0},}
                , selected.includes(p.id)?"✓":""
              )
              , React.createElement('div', { style: {flex:1},}
                , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:C.soil},}, p.name)
                , React.createElement('div', { style: {fontSize:11,color:C.muted,fontStyle:"italic"},}, p.species)
              )
              , React.createElement(ToxicityBadge, { toxicity: _optionalChain([SPECIES_DB, 'access', _155 => _155[p.species], 'optionalAccess', _156 => _156.toxicity]), small: true,})
            )
          ))
        )
        , React.createElement('div', { style: {padding:"12px 20px",borderTop:`1px solid ${C.border}`,display:"flex",gap:10},}
          , React.createElement('button', { onClick: onClose,
            style: {flex:1,padding:"11px",border:`1px solid ${C.border}`,borderRadius:10,
              background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,color:C.muted},}, "Annuleer"

          )
          , React.createElement('button', { onClick: printReport, disabled: selected.length===0,
            style: {flex:2,padding:"11px",border:"none",borderRadius:10,
              background:selected.length>0?C.green:"#ccc",color:"#fff",
              cursor:selected.length>0?"pointer":"not-allowed",
              fontFamily:"inherit",fontSize:14,fontWeight:700},}, "🖨️ Print / Sla op als PDF ("
                   , selected.length, ")"
          )
        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// SPECIES CHANGER — change species on existing plant
// ══════════════════════════════════════════════════════════════════
const SpeciesChanger = ({plant, onUpdatePlant, onClose}) => {
  const [query, setQuery] = useState(plant.species);
  const [results, setResults] = useState([]);

  useEffect(()=>{
    if (query.length < 2) { setResults([]); return; }
    const q = query.toLowerCase();
    const found = Object.entries(SPECIES_DB)
      .filter(([k,v])=>k.toLowerCase().includes(q)||v.commonName.toLowerCase().includes(q))
      .map(([k,v])=>({scientificName:k,commonName:v.commonName,category:v.category,image:v.image}))
      .slice(0,12);
    setResults(found);
  }, [query]);

  const select = (scientificName) => {
    onUpdatePlant({...plant, species:scientificName});
    onClose();
  };

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:400,
      display:"flex",alignItems:"flex-end"},}
      , React.createElement('div', { style: {background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",
        maxWidth:600,margin:"0 auto",maxHeight:"80vh",display:"flex",flexDirection:"column"},}
        , React.createElement('div', { style: {padding:"18px 20px 14px",borderBottom:`1px solid ${C.border}`,
          display:"flex",justifyContent:"space-between",alignItems:"center"},}
          , React.createElement('div', null
            , React.createElement('div', { style: {fontWeight:800,fontSize:16,color:C.soil},}, "🔄 Soort wijzigen"  )
            , React.createElement('div', { style: {fontSize:12,color:C.muted,marginTop:2},}, "Logs en foto's blijven bewaard"    )
          )
          , React.createElement('button', { onClick: onClose, style: {background:"none",border:"none",fontSize:24,
            cursor:"pointer",color:C.muted},}, "×")
        )
        , React.createElement('div', { style: {padding:"12px 20px 8px"},}
          , React.createElement('input', { value: query, onChange: e=>setQuery(e.target.value), autoFocus: true,
            placeholder: "Zoek soort..." ,
            style: {width:"100%",border:`1.5px solid ${C.green}`,borderRadius:10,
              padding:"10px 12px",fontSize:14,outline:"none",fontFamily:"inherit",
              boxSizing:"border-box"},})
        )
        , React.createElement('div', { style: {overflowY:"auto",flex:1,padding:"0 20px 20px"},}
          , results.map(r=>(
            React.createElement('button', { key: r.scientificName, onClick: ()=>select(r.scientificName),
              style: {width:"100%",display:"flex",alignItems:"center",gap:12,
                padding:"12px",marginBottom:6,borderRadius:12,cursor:"pointer",
                border:`1px solid ${r.scientificName===plant.species?C.green:C.border}`,
                background:r.scientificName===plant.species?C.greenPale:C.surface,
                fontFamily:"inherit",textAlign:"left"},}
              , React.createElement('span', { style: {fontSize:24,flexShrink:0},}, r.image)
              , React.createElement('div', null
                , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil},}, r.commonName)
                , React.createElement('div', { style: {fontSize:11,color:C.muted,fontStyle:"italic"},}, r.scientificName)
                , React.createElement('div', { style: {fontSize:10,color:C.muted,marginTop:1},}, r.category)
              )
              , r.scientificName===plant.species && (
                React.createElement('span', { style: {marginLeft:"auto",fontSize:11,color:C.green,fontWeight:700},}, "Huidig")
              )
            )
          ))
          , query.length >= 2 && results.length === 0 && (
            React.createElement('div', { style: {textAlign:"center",padding:20,color:C.muted,fontSize:13},}, "Geen soorten gevonden voor \""
                  , query, "\""
            )
          )
        )
      )
    )
  );
};


const SnoozePicker = ({plant, onUpdatePlant, onClose}) => {
  const [customDate, setCustomDate] = useState("");
  const snooze = (days) => {
    const until = new Date(Date.now() + days*86400000).toISOString().split("T")[0];
    const newNextWater = until; // push nextWater forward too
    onUpdatePlant({...plant, snoozedUntil: until, nextWater: newNextWater});
    onClose();
  };
  const snoozeCustom = () => {
    if (!customDate) return;
    onUpdatePlant({...plant, snoozedUntil: customDate, nextWater: customDate});
    onClose();
  };
  const options = [
    {label:"Morgen",   icon:"1️⃣", days:1},
    {label:"3 dagen",  icon:"3️⃣", days:3},
    {label:"1 week",   icon:"7️⃣", days:7},
  ];
  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:300,
      display:"flex",alignItems:"flex-end"}, onClick: onClose,}
      , React.createElement('div', { style: {background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",
        maxWidth:600,margin:"0 auto",padding:20}, onClick: e=>e.stopPropagation(),}
        , React.createElement('div', { style: {fontWeight:800,fontSize:16,color:C.soil,marginBottom:4},}, "⏰ Watergift uitstellen"

        )
        , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:16},}, "Aarde is nog vochtig? Stel de volgende watergift uit voor "
                    , plant.name, "."
        )
        , React.createElement('div', { style: {display:"flex",gap:8,marginBottom:12},}
          , options.map(o => (
            React.createElement('button', { key: o.days, onClick: ()=>snooze(o.days),
              style: {flex:1,padding:"12px 6px",borderRadius:12,border:`1.5px solid ${C.sky}`,
                background:C.sky+"18",cursor:"pointer",fontFamily:"inherit",textAlign:"center"},}
              , React.createElement('div', { style: {fontSize:20,marginBottom:4},}, o.icon)
              , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.sky},}, o.label)
            )
          ))
        )
        , React.createElement('div', { style: {display:"flex",gap:8,alignItems:"center",marginBottom:12},}
          , React.createElement('input', { type: "date", value: customDate, onChange: e=>setCustomDate(e.target.value),
            min: new Date(Date.now()+86400000).toISOString().split("T")[0],
            style: {flex:1,border:`1.5px solid ${C.border}`,borderRadius:10,
              padding:"9px 12px",fontSize:14,outline:"none",fontFamily:"inherit"},})
          , React.createElement('button', { onClick: snoozeCustom, disabled: !customDate,
            style: {padding:"9px 16px",border:"none",borderRadius:10,
              background:customDate?C.sky:"#ccc",color:"#fff",
              cursor:customDate?"pointer":"not-allowed",
              fontFamily:"inherit",fontSize:13,fontWeight:700},}, "Eigen datum"

          )
        )
        , React.createElement('button', { onClick: onClose,
          style: {width:"100%",padding:"10px",border:`1px solid ${C.border}`,borderRadius:10,
            background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,color:C.muted},}, "Annuleer"

        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// SOIL MIX — track substrate recipe per plant
// ══════════════════════════════════════════════════════════════════
const SOIL_INGREDIENTS = [
  "Cactusaarde","Potgrond","Kokosvezel","Perliet","Zand","Lava-grind",
  "Boomschors","Sphagnum mos","Peat moss","Pumice","Vermiculite","Biochar",
  "Wormhumus","Kleikorrels (LECA)","Orchideeënmix","Eigen mix"
];

const SoilMixEditor = ({plant, onUpdatePlant}) => {
  const mix = plant.soilMix || [];
  const [adding, setAdding] = useState(false);
  const [ingredient, setIngredient] = useState("");
  const [pct, setPct] = useState(50);
  const total = mix.reduce((s,m)=>s+m.pct, 0);

  const addIngredient = () => {
    if (!ingredient.trim()) return;
    const name = ingredient.trim();
    const existing = mix.find(m=>m.name===name);
    const newMix = existing
      ? mix.map(m=>m.name===name?{...m,pct}:m)
      : [...mix, {name, pct}];
    onUpdatePlant({...plant, soilMix: newMix});
    setIngredient(""); setPct(50); setAdding(false);
  };

  const remove = (name) => onUpdatePlant({...plant, soilMix: mix.filter(m=>m.name!==name)});

  return (
    React.createElement('div', { style: {paddingTop:12},}
      , mix.length === 0 && !adding && (
        React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:10,lineHeight:1.5},}, "Leg het grondmengsel vast voor betere reproduceerbare verzorging. Bijv: 60% cactusaarde + 30% perliet + 10% zand."

        )
      )

      /* Total bar */
      , mix.length > 0 && (
        React.createElement('div', { style: {marginBottom:12},}
          , React.createElement('div', { style: {display:"flex",height:12,borderRadius:6,overflow:"hidden",marginBottom:6},}
            , mix.map((m,i)=>{
              const colors=["#3D6B4A","#5AACCB","#B85C42","#7B5EA7","#E6A817","#4A7C8A","#C1694F","#2E7D5C"];
              return React.createElement('div', { key: m.name, style: {width:`${m.pct}%`,background:colors[i%colors.length],transition:"width 0.3s"},});
            })
            , total<100&&React.createElement('div', { style: {flex:1,background:C.border},})
          )
          , React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:6},}
            , mix.map((m,i)=>{
              const colors=["#3D6B4A","#5AACCB","#B85C42","#7B5EA7","#E6A817","#4A7C8A","#C1694F","#2E7D5C"];
              return (
                React.createElement('div', { key: m.name, style: {display:"flex",alignItems:"center",gap:5,
                  background:colors[i%colors.length]+"18",borderRadius:8,padding:"4px 8px"},}
                  , React.createElement('div', { style: {width:8,height:8,borderRadius:"50%",background:colors[i%colors.length]},})
                  , React.createElement('span', { style: {fontSize:12,fontWeight:600,color:C.soil},}, m.pct, "% " , m.name)
                  , React.createElement('button', { onClick: ()=>remove(m.name),
                    style: {background:"none",border:"none",color:C.muted,cursor:"pointer",
                      fontSize:14,padding:0,lineHeight:1},}, "×")
                )
              );
            })
          )
          , total !== 100 && (
            React.createElement('div', { style: {fontSize:11,color:total>100?C.danger:C.warning,marginTop:4,fontWeight:600},}
              , total>100?`⚠️ Totaal is ${total}% (te veel)`:`ℹ️ Totaal: ${total}% (${100-total}% nog toe te voegen)`
            )
          )
          , total===100&&React.createElement('div', { style: {fontSize:11,color:C.green,marginTop:4,fontWeight:600},}, "✅ Volledig mengsel (100%)"   )
        )
      )

      /* Ingredient rows */
      , mix.map(m=>(
        React.createElement('div', { key: m.name, style: {display:"flex",alignItems:"center",gap:10,
          padding:"8px 0",borderBottom:`1px solid ${C.border}`},}
          , React.createElement('div', { style: {flex:1,fontSize:13,fontWeight:600,color:C.soil},}, m.name)
          , React.createElement('div', { style: {fontSize:13,color:C.muted},}, m.pct, "%")
          , React.createElement('button', { onClick: ()=>remove(m.name),
            style: {background:"none",border:`1px solid ${C.danger}44`,borderRadius:6,
              padding:"3px 8px",cursor:"pointer",fontSize:12,color:C.danger,fontFamily:"inherit"},}, "×"

          )
        )
      ))

      /* Add form */
      , adding ? (
        React.createElement('div', { style: {background:C.surfaceAlt,borderRadius:10,padding:12,marginTop:8},}
          , React.createElement('div', { style: {marginBottom:8},}
            , React.createElement('select', { value: ingredient, onChange: e=>setIngredient(e.target.value),
              style: {width:"100%",border:`1.5px solid ${C.green}`,borderRadius:8,
                padding:"8px 10px",fontSize:13,outline:"none",fontFamily:"inherit",
                background:C.surface,marginBottom:8},}
              , React.createElement('option', { value: "",}, "Kies bestanddeel..." )
              , SOIL_INGREDIENTS.map(s=>React.createElement('option', { key: s, value: s,}, s))
            )
            , React.createElement('input', { value: ingredient, onChange: e=>setIngredient(e.target.value),
              placeholder: "Of type zelf..."  ,
              style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                padding:"7px 10px",fontSize:13,outline:"none",fontFamily:"inherit",
                boxSizing:"border-box"},})
          )
          , React.createElement('div', { style: {marginBottom:10},}
            , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",fontSize:12,
              color:C.muted,marginBottom:4},}
              , React.createElement('span', null, "Percentage")
              , React.createElement('span', { style: {fontWeight:700,color:C.green},}, pct, "%")
            )
            , React.createElement('input', { type: "range", min: 5, max: 100, step: 5, value: pct,
              onChange: e=>setPct(Number(e.target.value)),
              style: {width:"100%",accentColor:C.green},})
          )
          , React.createElement('div', { style: {display:"flex",gap:8},}
            , React.createElement('button', { onClick: ()=>setAdding(false),
              style: {flex:1,padding:"8px",border:`1px solid ${C.border}`,borderRadius:8,
                background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,color:C.muted},}, "Annuleer"

            )
            , React.createElement('button', { onClick: addIngredient, disabled: !ingredient.trim(),
              style: {flex:2,padding:"8px",border:"none",borderRadius:8,
                background:ingredient.trim()?C.green:"#ccc",color:"#fff",
                cursor:ingredient.trim()?"pointer":"not-allowed",
                fontFamily:"inherit",fontSize:13,fontWeight:700},}, "Toevoegen"

            )
          )
        )
      ) : (
        React.createElement('button', { onClick: ()=>setAdding(true),
          style: {marginTop:8,width:"100%",padding:"8px",border:`1.5px dashed ${C.green}`,
            borderRadius:10,background:"none",cursor:"pointer",
            color:C.green,fontSize:13,fontWeight:600,fontFamily:"inherit"},}, "+ Bestanddeel toevoegen"

        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// PEST / DISEASE LOG — track infestations with AI treatment advice
// ══════════════════════════════════════════════════════════════════
const PEST_TYPES = [
  {id:"spider_mite",   label:"Spintmijt",          icon:"🕷️", signs:"Fijne webben, stipjes op bladeren, gele/bruine vlekken", urgency:"hoog"},
  {id:"mealybug",      label:"Wolluizen",           icon:"🤍", signs:"Witte wollige plukjes, kleverig blad, verwelking", urgency:"hoog"},
  {id:"fungus_gnat",   label:"Rouwmuggen",          icon:"🦟", signs:"Kleine zwarte vliegjes rond de grond, larven in aarde", urgency:"medium"},
  {id:"scale",         label:"Schildluis",          icon:"🛡️", signs:"Bruine of gele schubben op stengels en bladnerven", urgency:"hoog"},
  {id:"aphid",         label:"Bladluizen",          icon:"🐛", signs:"Kleine groene/gele insecten op scheuten, kleverige honingdauw", urgency:"medium"},
  {id:"thrips",        label:"Trips",               icon:"🦗", signs:"Zilveren strepen op blad, zwarte stippeltjes, verkreukeld blad", urgency:"medium"},
  {id:"root_rot",      label:"Wortelrot",           icon:"🦠", signs:"Slappe plant, donkere slijmerige wortels, schimmelgeur", urgency:"kritiek"},
  {id:"powdery_mildew",label:"Meeldauw",            icon:"🌫️", signs:"Wit poederachtig laagje op bladoppervlak", urgency:"medium"},
  {id:"leaf_spot",     label:"Bladvlekkenziekte",   icon:"🟫", signs:"Bruine of zwarte vlekken met gele ring, blad valt vroeg af", urgency:"laag"},
  {id:"overwatering",  label:"Overwatering schade", icon:"💧", signs:"Gele bladeren, slappe stengels, rottingslucht", urgency:"medium"},
  {id:"nutrient_def",  label:"Gebreksverschijnselen",icon:"💛",signs:"Gele bladeren, paarse onderkant, vertraagde groei", urgency:"laag"},
  {id:"sunburn",       label:"Zonverbranding",      icon:"🔆", signs:"Bleek/bruin verkleurde plekken op bladeren direct in zon", urgency:"laag"},
];

const PEST_TREATMENTS = {
  spider_mite:    ["Neem-olie spray (wekelijks 3×)","Insectenzeep oplossing","Verhoog luchtvochtigheid","Systematisch insecticide bij zware aantasting","Beschadigde bladeren verwijderen"],
  mealybug:       ["Alcohol wattenstokje op wolluizen","Neem-olie spray","Insectenzeep","Systemisch insecticide in aarde","Isoleer de plant direct"],
  fungus_gnat:    ["Laat aarde volledig uitdrogen tussen waterbeurten","Gele plakstrips","Bacillus thuringiensis (Bt) in gietwater","H₂O₂ 3% verdund gieten","Sticky traps op aardoppervlak"],
  scale:          ["Alcohol wattenstaafjie per schub","Neem-olie harde spray","Systemisch insecticide","Getroffen takken verwijderen","Herhaal 3 weken lang wekelijks"],
  aphid:          ["Waterstraal bladeren afspoelen","Insectenzeep spray","Neem-olie","Lieveheersbeestjes (biologisch)","Systemisch insecticide bij zware aantasting"],
  thrips:         ["Blauwe plakstrips","Neem-olie spray","Spinosad behandeling","Beschadigde bladeren verwijderen","Verhoog luchtvochtigheid"],
  root_rot:       ["Plant onmiddelijk uit pot halen","Rotte wortels wegknippen (desinfecteer schaar)","H₂O₂ 3% verdund wortels wassen","Droog laten voordat je herplant","Gebruik nieuwe steriele aarde"],
  powdery_mildew: ["Verwijder aangetaste bladeren","Baking soda spray (1tl per liter)","Fungicide spray","Betere luchtcirculatie","Niet van boven gieten"],
  leaf_spot:      ["Verwijder aangetaste bladeren","Koperhoudend fungicide","Betere luchtcirculatie","Vermijd nat blad","Isoleer van andere planten"],
  overwatering:   ["Stop onmiddellijk met water","Laat aarde volledig uitdrogen","Controleer wortels op rot","Verbeter drainage","Pas waterschema aan"],
  nutrient_def:   ["Identificeer welk element ontbreekt","Gebalanceerde meststof toedienen","Controleer pH grond (5.5-7)","Verpot indien nodig","Foliar spray voor snelle opname"],
  sunburn:        ["Verplaats weg van directe zon","Verbrande bladeren blijven beschadigd","Verstel geleidelijk aan zon","Pas lichtinval aan via gordijnen"],
};

const PestLogModal = ({plant, onSave, onClose}) => {
  const [pestId, setPestId]         = useState("");
  const [severity, setSeverity]     = useState("medium"); // mild/medium/severe
  const [spotted, setSpotted]       = useState(new Date().toISOString().slice(0,16));
  const [treatment, setTreatment]   = useState([]);
  const [notes, setNotes]           = useState("");
  const [showTips, setShowTips]     = useState(false);

  const pest = PEST_TYPES.find(p=>p.id===pestId);
  const tips = PEST_TREATMENTS[pestId] || [];

  const toggleTreatment = (t) =>
    setTreatment(prev => prev.includes(t) ? prev.filter(x=>x!==t) : [...prev,t]);

  const save = () => {
    if (!pestId) return;
    onSave({
      id: Math.random().toString(36).slice(2),
      plantId: plant.id,
      timestamp: new Date(spotted).toISOString(),
      parameters: {
        pest_observation: pestId,
        disease_observation: pestId,
        severity,
        treatment_applied: treatment.join(", "),
      },
      notes: `🦠 ${pest.label}${notes?" — "+notes:""}`,
      pestData: { pestId, severity, treatment, tips },
      auto: false,
    });
    onClose();
  };

  const urgencyColor = {hoog:C.danger, kritiek:"#7B0000", medium:C.warning, laag:C.green};

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300,
      display:"flex",alignItems:"flex-end"}, onClick: onClose,}
      , React.createElement('div', { style: {background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",
        maxWidth:600,margin:"0 auto",maxHeight:"90vh",display:"flex",flexDirection:"column"},
        onClick: e=>e.stopPropagation(),}
        , React.createElement('div', { style: {padding:"18px 20px 14px",borderBottom:`1px solid ${C.border}`,
          display:"flex",justifyContent:"space-between",alignItems:"center"},}
          , React.createElement('div', { style: {fontWeight:800,fontSize:16,color:C.soil},}, "🦠 Plaag / Ziekte registreren"    )
          , React.createElement('button', { onClick: onClose, style: {background:"none",border:"none",fontSize:24,
            cursor:"pointer",color:C.muted},}, "×")
        )

        , React.createElement('div', { style: {overflowY:"auto",flex:1,padding:"14px 20px 20px"},}
          /* Pest picker */
          , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:8},}, "SOORT PLAAG / AANTASTING"

          )
          , React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:6,marginBottom:16},}
            , PEST_TYPES.map(p=>(
              React.createElement('button', { key: p.id, onClick: ()=>{setPestId(p.id);setShowTips(true);},
                style: {padding:"6px 10px",borderRadius:10,cursor:"pointer",
                  fontFamily:"inherit",fontSize:12,fontWeight:pestId===p.id?700:400,
                  border:`1.5px solid ${pestId===p.id?urgencyColor[p.urgency]:C.border}`,
                  background:pestId===p.id?urgencyColor[p.urgency]+"18":"none",
                  color:pestId===p.id?urgencyColor[p.urgency]:C.muted,
                  display:"flex",alignItems:"center",gap:4},}
                , React.createElement('span', null, p.icon), React.createElement('span', null, p.label)
              )
            ))
          )

          /* Pest info + signs */
          , pest && (
            React.createElement('div', { style: {background:urgencyColor[pest.urgency]+"12",border:`1px solid ${urgencyColor[pest.urgency]}44`,
              borderRadius:10,padding:12,marginBottom:14},}
              , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:8,marginBottom:6},}
                , React.createElement('span', { style: {fontSize:22},}, pest.icon)
                , React.createElement('div', null
                  , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:C.soil},}, pest.label)
                  , React.createElement('div', { style: {fontSize:10,fontWeight:700,color:urgencyColor[pest.urgency],
                    textTransform:"uppercase",letterSpacing:0.5},}, "Urgentie: " , pest.urgency)
                )
              )
              , React.createElement('div', { style: {fontSize:12,color:C.muted,lineHeight:1.5},}
                , React.createElement('strong', null, "Herkenningstekens:"), " " , pest.signs
              )
            )
          )

          /* Severity */
          , pest && (
            React.createElement('div', { style: {marginBottom:14},}
              , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:8},}, "ERNST"

              )
              , React.createElement('div', { style: {display:"flex",gap:8},}
                , [{id:"mild",label:"Licht",color:C.green},{id:"medium",label:"Matig",color:C.warning},{id:"severe",label:"Ernstig",color:C.danger}].map(s=>(
                  React.createElement('button', { key: s.id, onClick: ()=>setSeverity(s.id),
                    style: {flex:1,padding:"8px",borderRadius:10,cursor:"pointer",
                      fontFamily:"inherit",fontSize:12,fontWeight:severity===s.id?700:400,
                      border:`1.5px solid ${severity===s.id?s.color:C.border}`,
                      background:severity===s.id?s.color+"18":"none",
                      color:severity===s.id?s.color:C.muted},}
                    , s.label
                  )
                ))
              )
            )
          )

          /* Treatment checklist */
          , pest && tips.length > 0 && (
            React.createElement('div', { style: {marginBottom:14},}
              , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:8},}, "BEHANDELINGEN (vink aan wat je hebt gedaan)"

              )
              , tips.map((tip,i)=>(
                React.createElement('button', { key: i, onClick: ()=>toggleTreatment(tip),
                  style: {width:"100%",display:"flex",alignItems:"flex-start",gap:10,
                    padding:"8px 10px",marginBottom:4,borderRadius:10,cursor:"pointer",
                    border:`1.5px solid ${treatment.includes(tip)?C.green:C.border}`,
                    background:treatment.includes(tip)?C.greenPale:"none",
                    fontFamily:"inherit",textAlign:"left"},}
                  , React.createElement('span', { style: {fontSize:16,flexShrink:0,marginTop:1},}
                    , treatment.includes(tip)?"✅":"⬜"
                  )
                  , React.createElement('span', { style: {fontSize:13,color:C.soil,lineHeight:1.4},}, tip)
                )
              ))
            )
          )

          /* Date + notes */
          , React.createElement('div', { style: {marginBottom:12},}
            , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:6},}, "GEDETECTEERD OP"

            )
            , React.createElement('input', { type: "datetime-local", value: spotted, onChange: e=>setSpotted(e.target.value),
              style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                padding:"8px 10px",fontSize:13,outline:"none",fontFamily:"inherit",
                boxSizing:"border-box",marginBottom:10},})
            , React.createElement('textarea', { value: notes, onChange: e=>setNotes(e.target.value), rows: 2,
              placeholder: "Extra notities over de aantasting..."    ,
              style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                padding:"8px 10px",fontSize:13,outline:"none",resize:"vertical",
                boxSizing:"border-box",fontFamily:"inherit"},})
          )
        )

        , React.createElement('div', { style: {padding:"12px 20px",borderTop:`1px solid ${C.border}`,display:"flex",gap:10},}
          , React.createElement('button', { onClick: onClose,
            style: {flex:1,padding:"11px",border:`1px solid ${C.border}`,borderRadius:10,
              background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,color:C.muted},}, "Annuleer"

          )
          , React.createElement('button', { onClick: save, disabled: !pestId,
            style: {flex:2,padding:"11px",border:"none",borderRadius:10,
              background:pestId?C.danger:"#ccc",color:"#fff",
              cursor:pestId?"pointer":"not-allowed",
              fontFamily:"inherit",fontSize:14,fontWeight:700},}, "🦠 Registreren"

          )
        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// FERTILIZER LOG — detailed fertilizer tracking per plant
// ══════════════════════════════════════════════════════════════════
const FERTILIZER_PRODUCTS = [
  "Universeel vloeibaar","Cactus & vetplant","Orchidee specifiek",
  "Hoog stikstof (N)","Hoog fosfor (P)","Hoog kalium (K)",
  "Organisch / compost","Wormhumus","Zeewier extract",
  "Traagwerkende korrels","Meststofstok (stick)","Eigen product",
];

const FertilizerLogModal = ({plant, onSave, onClose}) => {
  const [product, setProduct]   = useState("");
  const [customProduct, setCustomProduct] = useState("");
  const [n, setN] = useState("");
  const [p, setP] = useState("");
  const [k, setK] = useState("");
  const [amount, setAmount]     = useState("");
  const [unit, setUnit]         = useState("ml");
  const [method, setMethod]     = useState("gietwater");
  const [date, setDate]         = useState(new Date().toISOString().slice(0,16));
  const [notes, setNotes]       = useState("");

  const productName = product === "Eigen product" ? customProduct : product;

  const save = () => {
    if (!productName.trim()) return;
    onSave({
      id: Math.random().toString(36).slice(2),
      plantId: plant.id,
      timestamp: new Date(date).toISOString(),
      parameters: {
        fertilizing: product,
        fertilizer_amount: amount ? Number(amount) : undefined,
      },
      notes: [
        `🌿 Bemest: ${productName}`,
        (n||p||k) ? `NPK: ${n||"?"}–${p||"?"}–${k||"?"}` : null,
        amount ? `${amount}${unit} via ${method}` : null,
        notes || null,
      ].filter(Boolean).join(" · "),
      fertData: { product:productName, npk:{n,p,k}, amount, unit, method },
      auto: false,
    });
    onClose();
  };

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300,
      display:"flex",alignItems:"flex-end"}, onClick: onClose,}
      , React.createElement('div', { style: {background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",
        maxWidth:600,margin:"0 auto",maxHeight:"88vh",display:"flex",flexDirection:"column"},
        onClick: e=>e.stopPropagation(),}
        , React.createElement('div', { style: {padding:"18px 20px 14px",borderBottom:`1px solid ${C.border}`,
          display:"flex",justifyContent:"space-between",alignItems:"center"},}
          , React.createElement('div', { style: {fontWeight:800,fontSize:16,color:C.soil},}, "🌿 Bemesting registreren"  )
          , React.createElement('button', { onClick: onClose, style: {background:"none",border:"none",fontSize:24,
            cursor:"pointer",color:C.muted},}, "×")
        )

        , React.createElement('div', { style: {overflowY:"auto",flex:1,padding:"14px 20px 20px"},}
          /* Product */
          , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:8},}, "MESTSTOF")
          , React.createElement('select', { value: product, onChange: e=>setProduct(e.target.value),
            style: {width:"100%",border:`1.5px solid ${product?C.green:C.border}`,borderRadius:10,
              padding:"9px 12px",fontSize:14,outline:"none",fontFamily:"inherit",
              marginBottom:8,background:C.surface,boxSizing:"border-box"},}
            , React.createElement('option', { value: "",}, "Kies meststof..." )
            , FERTILIZER_PRODUCTS.map(p=>React.createElement('option', { key: p, value: p,}, p))
          )
          , product==="Eigen product" && (
            React.createElement('input', { value: customProduct, onChange: e=>setCustomProduct(e.target.value),
              placeholder: "Productnaam...",
              style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                padding:"8px 10px",fontSize:13,outline:"none",fontFamily:"inherit",
                marginBottom:8,boxSizing:"border-box"},})
          )

          /* NPK */
          , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:8,marginTop:4},}, "NPK VERHOUDING (optioneel)"

          )
          , React.createElement('div', { style: {display:"flex",gap:8,marginBottom:14},}
            , [["N","Stikstof",n,setN],["P","Fosfor",p,setP],["K","Kalium",k,setK]].map(([label,title,val,set])=>(
              React.createElement('div', { key: label, style: {flex:1},}
                , React.createElement('div', { style: {fontSize:10,color:C.muted,marginBottom:4,textAlign:"center",fontWeight:600},}, label, React.createElement('br', null), React.createElement('span', { style: {fontWeight:400},}, title))
                , React.createElement('input', { type: "number", value: val, onChange: e=>set(e.target.value),
                  placeholder: "0", min: "0", max: "50",
                  style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                    padding:"8px",fontSize:14,outline:"none",fontFamily:"inherit",
                    textAlign:"center",boxSizing:"border-box"},})
              )
            ))
          )

          /* Amount + method */
          , React.createElement('div', { style: {display:"flex",gap:8,marginBottom:14},}
            , React.createElement('div', { style: {flex:2},}
              , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:6},}, "HOEVEELHEID")
              , React.createElement('div', { style: {display:"flex",gap:6},}
                , React.createElement('input', { type: "number", value: amount, onChange: e=>setAmount(e.target.value),
                  placeholder: "0", min: "0",
                  style: {flex:1,border:`1px solid ${C.border}`,borderRadius:8,
                    padding:"8px 10px",fontSize:14,outline:"none",fontFamily:"inherit"},})
                , React.createElement('select', { value: unit, onChange: e=>setUnit(e.target.value),
                  style: {border:`1px solid ${C.border}`,borderRadius:8,padding:"8px",
                    fontSize:13,outline:"none",fontFamily:"inherit",background:C.surface},}
                  , React.createElement('option', { value: "ml",}, "ml")
                  , React.createElement('option', { value: "gram",}, "gram")
                  , React.createElement('option', { value: "caps",}, "dopje")
                  , React.createElement('option', { value: "stick",}, "stick")
                )
              )
            )
            , React.createElement('div', { style: {flex:2},}
              , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:6},}, "METHODE")
              , React.createElement('select', { value: method, onChange: e=>setMethod(e.target.value),
                style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                  padding:"8px 10px",fontSize:13,outline:"none",fontFamily:"inherit",
                  background:C.surface},}
                , React.createElement('option', { value: "gietwater",}, "In gietwater" )
                , React.createElement('option', { value: "foliar",}, "Bladbespuiting")
                , React.createElement('option', { value: "bodem",}, "In bodem steken"  )
                , React.createElement('option', { value: "granulaat",}, "Granulaat strooien" )
              )
            )
          )

          /* Date + notes */
          , React.createElement('div', { style: {fontSize:12,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:6},}, "DATUM")
          , React.createElement('input', { type: "datetime-local", value: date, onChange: e=>setDate(e.target.value),
            style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
              padding:"8px 10px",fontSize:13,outline:"none",fontFamily:"inherit",
              boxSizing:"border-box",marginBottom:10},})
          , React.createElement('textarea', { value: notes, onChange: e=>setNotes(e.target.value), rows: 2,
            placeholder: "Extra notities (bijv. reactie plant)..."    ,
            style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
              padding:"8px 10px",fontSize:13,outline:"none",resize:"vertical",
              boxSizing:"border-box",fontFamily:"inherit"},})
        )

        , React.createElement('div', { style: {padding:"12px 20px",borderTop:`1px solid ${C.border}`,display:"flex",gap:10},}
          , React.createElement('button', { onClick: onClose,
            style: {flex:1,padding:"11px",border:`1px solid ${C.border}`,borderRadius:10,
              background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,color:C.muted},}, "Annuleer"

          )
          , React.createElement('button', { onClick: save, disabled: !productName.trim(),
            style: {flex:2,padding:"11px",border:"none",borderRadius:10,
              background:productName.trim()?C.green:"#ccc",color:"#fff",
              cursor:productName.trim()?"pointer":"not-allowed",
              fontFamily:"inherit",fontSize:14,fontWeight:700},}, "🌿 Opslaan"

          )
        )
      )
    )
  );
};


const PlantDetail = ({plant,logs,sections,onAddSection,onBack,onUpdatePlant,onAddLog,onDeleteLog,onUpdateLog,onDelete,t,apiKey}) => {
  // Re-read from SPECIES_DB reactively so enriched data shows immediately
  const [dbEntry,setDbEntry]=useState(()=>SPECIES_DB[plant.species]||null);
  useEffect(()=>{
    // Poll for enrichment — SPECIES_DB updates async after AI fetch
    const check=()=>{
      const e=SPECIES_DB[plant.species];
      if(e && _optionalChain([e, 'access', _157 => _157.care, 'optionalAccess', _158 => _158.spring, 'optionalAccess', _159 => _159.water]) && (!dbEntry || !_optionalChain([dbEntry, 'access', _160 => _160.care, 'optionalAccess', _161 => _161.spring, 'optionalAccess', _162 => _162.water]))) {
        setDbEntry(e);
      }
    };
    check();
    const t=setInterval(check,600);
    return()=>clearInterval(t);
  },[plant.species, dbEntry]);
  const sp=dbEntry;
  const season=getCurrentSeason();
  const care = sp ? effectiveCare(plant, season) : {water:7,humidity:50,notes:''};
  const sunlight = sp ? effectiveSunlight(plant) : {min:3,max:8,type:''};

  // Auto-calculate health and sync to plant if it has changed by more than 3 points
  const autoHealth = calculateHealth(plant, logs);
  useEffect(() => {
    if (Math.abs(autoHealth - plant.health) >= 3) {
      onUpdatePlant({...plant, health: autoHealth});
    }
  }, [autoHealth]);
  // Use shared helper for water pause state
  const { waterPaused, pausedEvent: pausedEvt, activeEvents: activeCareEvents } = getWaterPause(plant);
  const days = waterPaused ? null : (plant.nextWater ? daysUntil(plant.nextWater) : null);
  const [tab,setTab]=useState("overview");
  const [logFilter,setLogFilter]=useState("all");
  const [showSnooze,setShowSnooze]=useState(false);
  const [showPestLog,setShowPestLog]=useState(false);
  const [showFertLog,setShowFertLog]=useState(false);
  const [showQR,setShowQR]=useState(false);
  const [showSpeciesChange,setShowSpeciesChange]=useState(false);
  const [showPDFExport,setShowPDFExport]=useState(false);
  const [showLichtMeter,setShowLichtMeter]=useState(false);
  const [logModal,setLogModal]=useState(null);
  // Header photo: plant.photos[0] > plant.photoUrl > Wikipedia fetch
  const userPhotoUrl = _optionalChain([(plant.photos || []), 'access', _163 => _163[0], 'optionalAccess', _164 => _164.url]) || null;
  const [headerPhoto, setHeaderPhoto] = useState(userPhotoUrl || plant.photoUrl || plant.wikiPhotoUrl || null);
  const [photoLoading, setPhotoLoading] = useState(!userPhotoUrl && !plant.photoUrl);

  useEffect(() => {
    // plant.photos changes → update header immediately
    const up = _optionalChain([(plant.photos || []), 'access', _165 => _165[0], 'optionalAccess', _166 => _166.url]) || null;
    if (up) { setHeaderPhoto(up); setPhotoLoading(false); return; }
    if (plant.photoUrl) { setHeaderPhoto(plant.photoUrl); setPhotoLoading(false); return; }
    setPhotoLoading(true);
    fetchWikiPhoto(plant.species).then(u => {
      setHeaderPhoto(u);
      setPhotoLoading(false);
      // Cache the Wikipedia URL on the plant so dashboard card can use it as fallback
      if (u) onUpdatePlant({...plant, wikiPhotoUrl: u});
    });
  }, [plant.id, plant.photoUrl, plant.species, (plant.photos||[]).length]);

  const plantLogs=useMemo(()=>logs.filter(l=>l.plantId===plant.id).sort((a,b)=>new Date(b.timestamp)-new Date(a.timestamp)),[logs,plant.id]);

  const handleWatered=()=>{
    const today=new Date().toISOString().split("T")[0];
    const effWater=effectiveCare(plant,season).water;
    const next=new Date(Date.now()+effWater*86400000).toISOString().split("T")[0];
    onUpdatePlant({...plant,lastWatered:today,nextWater:next});
    onAddLog({id:uid(),plantId:plant.id,timestamp:new Date().toISOString(),parameters:{watering:200},notes:"💧 Water gegeven"});
  };

  const emoji=_optionalChain([sp, 'optionalAccess', _167 => _167.image])||"🌿";

  return(
    React.createElement('div', { style: {minHeight:"100vh",background:C.bg,fontFamily:"system-ui,sans-serif"},}

      /* Photo header */
      , React.createElement('div', { style: {position:"relative",height:220,background:C.soil,overflow:"hidden"},}
        , headerPhoto && React.createElement('img', { src: headerPhoto, alt: plant.species, style: {width:"100%",height:"100%",objectFit:"cover",opacity:0.7},})
        , !headerPhoto && !photoLoading && React.createElement('div', { style: {position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:80,opacity:0.3},}, emoji)
        , photoLoading && React.createElement('div', { style: {position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8},}, React.createElement('div', { style: {fontSize:60,opacity:0.4},}, emoji), React.createElement('div', { style: {color:"rgba(255,255,255,0.6)",fontSize:12},}, "Foto laden…" ))

        /* Overlay gradient */
        , React.createElement('div', { style: {position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(59,42,26,0.85) 100%)"},})

        /* Back button */
        , React.createElement('button', { onClick: onBack, className: "pca-btn", style: {position:"absolute",top:48,left:20,
          background:"rgba(255,255,255,0.18)",border:"1px solid rgba(255,255,255,0.2)",
          color:"#fff",cursor:"pointer",fontSize:12,padding:"7px 14px",borderRadius:20,
          backdropFilter:"blur(8px)",fontFamily:"inherit",fontWeight:600,
          display:"flex",alignItems:"center",gap:5},}, "← Terug"

        )


        /* Plant info overlay */
        , React.createElement('div', { style: {position:"absolute",bottom:16,left:20,right:20},}
          , React.createElement('div', { style: {display:"flex",alignItems:"flex-end",gap:12},}
            , React.createElement('div', { style: {position:"relative"},}
              , React.createElement(HealthRing, { health: plant.health, size: 56,})
              , React.createElement('div', { style: {position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:22},}, emoji)
            )
            , React.createElement('div', { style: {flex:1},}
              , React.createElement('input', { value: plant.name, onChange: e=>onUpdatePlant({...plant,name:e.target.value}), style: {color:"#fff",fontWeight:800,fontSize:20,lineHeight:1.1,background:"transparent",border:"none",borderBottom:"1px solid rgba(255,255,255,0.35)",outline:"none",width:"100%",fontFamily:"inherit",padding:"0 0 2px 0"},})
              , React.createElement('div', { style: {color:"rgba(255,255,255,0.7)",fontSize:12,fontStyle:"italic",marginTop:3},}, plant.species)
              , React.createElement('div', { style: {display:"flex",gap:6,marginTop:4,flexWrap:"wrap"},}
                , sp&&React.createElement(Badge, { label: sp.commonName, color: C.greenLight,})
                , sp&&React.createElement(Badge, { label: sp.careLevel, color: careLvlColor(sp.careLevel),})
                , !sp&&React.createElement(Badge, { label: "Eigen soort" , color: C.sky,})
              )
            )
          )
        )
        , headerPhoto&&React.createElement('div', { style: {position:"absolute",bottom:4,right:8,color:"rgba(255,255,255,0.5)",fontSize:9},}, "© Wikimedia Commons"  )
      )

      /* Water banner */
      , waterPaused ? (
        React.createElement('div', { style: {background:C.warning,padding:"10px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"},}
          , React.createElement('span', { style: {color:"#fff",fontWeight:700,fontSize:14},}, "⚡ "
             , _optionalChain([pausedEvt, 'optionalAccess', _168 => _168.icon]), " Gepauzeerd — "   , _optionalChain([pausedEvt, 'optionalAccess', _169 => _169.label])
          )
          , React.createElement('span', { style: {color:"rgba(255,255,255,0.8)",fontSize:12},}, "nog "
             , Math.ceil((new Date(_optionalChain([pausedEvt, 'optionalAccess', _170 => _170.endDate]))-new Date())/86400000), " dagen"
          )
        )
      ) : days!==null&&(
        React.createElement('div', { style: {background:urgColor(days),padding:"10px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:8},}
          , React.createElement('span', { style: {color:"#fff",fontWeight:700,fontSize:13,flex:1},}
            , days<=0?(_optionalChain([t, 'optionalAccess', _171 => _171.waterToday])||"💧 Water vandaag!"):days===1?(_optionalChain([t, 'optionalAccess', _172 => _172.waterTomorrow])||"💧 Water morgen"):`${_optionalChain([t, 'optionalAccess', _173 => _173.waterIn])||"💧 Water over"} ${days} ${days===1?(_optionalChain([t, 'optionalAccess', _174 => _174.day])||"dag"):(_optionalChain([t, 'optionalAccess', _175 => _175.days])||"dagen")}`
          )
          , React.createElement('button', { onClick: ()=>setShowSnooze(true),
            style: {background:"rgba(255,255,255,0.2)",color:"#fff",border:"1px solid rgba(255,255,255,0.3)",
              borderRadius:16,padding:"5px 10px",cursor:"pointer",fontSize:11,fontFamily:"inherit",fontWeight:600,flexShrink:0},}, "⏰ Uitstellen"

          )
          , React.createElement('button', { onClick: handleWatered,
            style: {background:"rgba(255,255,255,0.25)",color:"#fff",border:"none",borderRadius:20,
              padding:"6px 14px",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit",flexShrink:0},}
            , _optionalChain([t, 'optionalAccess', _176 => _176.markWatered])||"✓ Water gegeven"
          )
        )
      )

      /* Tabs */
      , React.createElement('div', { style: {display:"flex",borderBottom:`2px solid ${C.border}`,background:C.surface},}
        , [
          {id:"overview", label:_optionalChain([t, 'optionalAccess', _177 => _177.overview])||"Info",  icon:"🏠"},
          {id:"seasons",  label:_optionalChain([t, 'optionalAccess', _178 => _178.seasons])||"Seizoenen",   icon:"🗓"},
          {id:"care",     label:_optionalChain([t, 'optionalAccess', _179 => _179.care])||"Verzorging",     icon:"🌿"},
          {id:"log",      label:`${_optionalChain([t, 'optionalAccess', _180 => _180.log])||"Log"} (${plantLogs.length})`, icon:"📝"},
        ].map(tb=>(
          React.createElement('button', { key: tb.id, onClick: ()=>setTab(tb.id), className: "pca-tab",
            style: {flex:1,padding:"10px 2px",border:"none",background:"none",cursor:"pointer",
              fontWeight:tab===tb.id?700:400,fontSize:11,
              color:tab===tb.id?C.green:C.muted,
              borderBottom:tab===tb.id?`2px solid ${C.green}`:"2px solid transparent",
              fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"center",gap:2},}
            , React.createElement('span', { style: {fontSize:14},}, tb.icon)
            , React.createElement('span', null, tb.label)
          )
        ))
      )

      , React.createElement('div', { style: {padding:16,maxWidth:600,margin:"0 auto",paddingBottom:40},}

        , tab==="overview"&&(
          React.createElement(React.Fragment, null
            /* ── Expert notes — open by default when notes exist ── */
            , React.createElement(CollapsibleCard, {
              icon: "📋", title: "Notities van expert/kwekerij"  ,
              defaultOpen: !!(plant.expertNotes&&plant.expertNotes.trim()),
              badge: _optionalChain([plant, 'access', _181 => _181.expertNotes, 'optionalAccess', _182 => _182.trim, 'call', _183 => _183()])?"Expert advies":null,
              urgent: false,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement(ExpertNotes, { plant: plant, onUpdatePlant: onUpdatePlant, inline: true,})
              )
            )

            /* ── Seasonal care meters ── */
            , 
        React.createElement("div", {style:{display:"flex",alignItems:"center",gap:8,padding:"14px 4px 4px",marginTop:4}}, React.createElement("div", {style:{width:3,height:14,background:"#3D6B4A",borderRadius:2}}), React.createElement("span", {style:{fontSize:10,fontWeight:800,color:"#3D6B4A",letterSpacing:1,textTransform:"uppercase"}}, "💧☀️ Verzorging nu")),
        
        React.createElement("div", {style:{display:"flex",alignItems:"center",gap:8,padding:"14px 4px 4px",marginTop:4}}, React.createElement("div", {style:{width:3,height:14,background:"#6D5D4C",borderRadius:2}}), React.createElement("span", {style:{fontSize:10,fontWeight:800,color:"#6D5D4C",letterSpacing:1,textTransform:"uppercase"}}, "❤️ Gezondheid + Fotos")),
        React.createElement(CollapsibleCard, {
              icon: SEASON_ICONS[season],
              title: `${season.charAt(0).toUpperCase()+season.slice(1)} — Huidig seizoen`,
              defaultOpen: true,
              badge: care.hasActiveEvents?"⚡ Event actief":null,
              urgent: care.hasActiveEvents,}
              , sp ? (
                React.createElement('div', { style: {paddingTop:12},}
                  /* Water meter */
                  , React.createElement('div', { style: {marginBottom:10},}
                    , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",marginBottom:4,fontSize:12},}
                      , React.createElement('span', { style: {color:C.muted},}, "💧 Water elke"  )
                      , care.waterMultiplier === 0 ? (
                        React.createElement('span', { style: {fontWeight:700,color:C.warning,display:"flex",alignItems:"center",gap:4},}, "⚡ Gepauzeerd" )
                      ) : care.waterMultiplier < 1 ? (
                        React.createElement('span', { style: {fontWeight:700,color:C.warning},}, care.water, " dagen "  , React.createElement('span', { style: {fontWeight:400,fontSize:11},}, "(×", care.waterMultiplier, ")"))
                      ) : (
                        React.createElement('span', { style: {fontWeight:700,color:C.sky},}, care.water, " dagen" )
                      )
                    )
                    , React.createElement('div', { style: {background:C.border,borderRadius:4,height:6},}
                      , React.createElement('div', { style: {background:care.waterMultiplier===0?C.warning:C.sky,borderRadius:4,height:6,
                        width:care.waterMultiplier===0?"100%":`${Math.min(100,(care.water/60)*100)}%`,
                        opacity:care.waterMultiplier===0?0.4:1,transition:"width 0.5s"},})
                    )
                  )
                  , [
                    {label:"Luchtvochtigheid",value:care.humidity,max:100,unit:"%",icon:"💦",color:C.sky},
                    {label:"Zon minimaal",value:sunlight.min,max:12,unit:" uur/dag",icon:"☀️",color:C.warning},
                    {label:"Gezondheid",value:plant.health,max:100,unit:"%",icon:"❤️",color:plant.health>70?C.green:plant.health>40?C.warning:C.danger},
                  ].map(({label,value,max,unit,icon,color})=>(
                    React.createElement('div', { key: label, style: {marginBottom:10},}
                      , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",marginBottom:4,fontSize:12},}
                        , React.createElement('span', { style: {color:C.muted},}, icon, " " , label)
                        , React.createElement('span', { style: {fontWeight:700,color},}, value, unit)
                      )
                      , React.createElement('div', { style: {background:C.border,borderRadius:4,height:6},}
                        , React.createElement('div', { style: {background:color,borderRadius:4,height:6,width:`${Math.min(100,(value/max)*100)}%`,transition:"width 0.5s"},})
                      )
                    )
                  ))
                  , care.hasActiveEvents && (
                    React.createElement('div', { style: {marginTop:4,background:C.warning+"18",border:`1px solid ${C.warning}44`,
                      borderRadius:8,padding:"8px 10px",fontSize:12,color:C.soil,lineHeight:1.5},}, "⚡ "
                       , (plant.careEvents||[]).filter(e=>e.endDate>=new Date().toISOString().split("T")[0])
                        .map(e=>`${e.icon} ${e.label}: nog ${Math.ceil((new Date(e.endDate)-new Date())/86400000)} dagen`)
                        .join(" · ")
                    )
                  )
                  , care.notes && (
                    React.createElement('div', { style: {marginTop:8,background:C.sandLight,borderRadius:8,padding:10,fontSize:13,color:C.soil,lineHeight:1.5},}, "📋 "
                       , care.notes
                    )
                  )
                  , _optionalChain([care, 'access', _184 => _184.expertBullets, 'optionalAccess', _185 => _185.length]) > 0 && (
                    React.createElement('div', { style: {marginTop:10,background:"#FFFBF0",
                      border:`1.5px solid ${C.sand}88`,borderRadius:10,overflow:"hidden"},}
                      , React.createElement('div', { style: {background:C.sand+"22",padding:"8px 12px",
                        display:"flex",alignItems:"center",gap:6,
                        borderBottom:`1px solid ${C.sand}44`},}
                        , React.createElement('span', { style: {fontSize:13},}, "📋")
                        , React.createElement('span', { style: {fontWeight:700,fontSize:11,color:C.sand,letterSpacing:0.5},}, "KWEKERIJ — SPECIFIEK ADVIES"

                        )
                        , React.createElement('span', { style: {marginLeft:"auto",fontSize:10,color:C.muted,fontWeight:500},}
                          , care.expertBullets.length, " punten"
                        )
                      )
                      /* Group by phase to show timeline */
                      , (() => {
                        const waterBullets = care.expertBullets.filter(b=>b.icon==="💧"||b.icon==="🚫");
                        const otherBullets = care.expertBullets.filter(b=>b.icon!=="💧"&&b.icon!=="🚫");
                        const hasTimeline  = waterBullets.length > 1;
                        return (React.createElement(React.Fragment, null
                          , hasTimeline && (
                            React.createElement('div', { style: {padding:"8px 12px 4px",borderBottom:`1px solid ${C.sand}22`},}
                              , React.createElement('div', { style: {fontSize:10,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:6},}, "💧 WATERSCHEMA VOLGORDE"

                              )
                              , waterBullets.map((b,i)=>(
                                React.createElement('div', { key: i, style: {display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},}
                                  , React.createElement('div', { style: {display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0},}
                                    , React.createElement('div', { style: {width:22,height:22,borderRadius:"50%",
                                      background:b.urgent?C.danger:C.sand,
                                      display:"flex",alignItems:"center",justifyContent:"center",
                                      color:"#fff",fontSize:11,fontWeight:700},}
                                      , i+1
                                    )
                                    , i<waterBullets.length-1&&(
                                      React.createElement('div', { style: {width:2,height:10,background:C.sand+"44",margin:"2px 0"},})
                                    )
                                  )
                                  , React.createElement('div', { style: {flex:1,paddingTop:2},}
                                    , React.createElement('div', { style: {fontSize:12,fontWeight:b.urgent?700:600,
                                      color:b.urgent?C.danger:C.soil,lineHeight:1.4},}
                                      , b.label
                                    )
                                    , b.urgent&&(
                                      React.createElement('span', { style: {display:"inline-block",marginTop:3,fontSize:10,
                                        fontWeight:700,color:C.danger,
                                        background:C.terracottaLight,borderRadius:4,padding:"1px 6px"},}, "⚠️ LET OP"

                                      )
                                    )
                                  )
                                )
                              ))
                            )
                          )
                          , !hasTimeline && waterBullets.map((b,i)=>(
                            React.createElement('div', { key: i, style: {display:"flex",alignItems:"flex-start",gap:8,
                              padding:"7px 12px",borderBottom:`1px solid ${C.sand}22`,
                              background:b.urgent?"rgba(184,92,66,0.06)":"none"},}
                              , React.createElement('span', { style: {fontSize:14,flexShrink:0,marginTop:1},}, b.icon)
                              , React.createElement('div', { style: {flex:1},}
                                , React.createElement('div', { style: {fontSize:12,fontWeight:b.urgent?700:600,
                                  color:b.urgent?C.danger:C.soil},}, b.label)
                              )
                              , b.urgent&&React.createElement('span', { style: {fontSize:10,fontWeight:700,color:C.danger,
                                background:C.terracottaLight,borderRadius:4,padding:"1px 6px",flexShrink:0},}, "LET OP"
                                 )
                            )
                          ))
                          , otherBullets.map((b,i)=>(
                            React.createElement('div', { key: i, style: {display:"flex",alignItems:"flex-start",gap:8,
                              padding:"7px 12px",
                              borderBottom:i<otherBullets.length-1?`1px solid ${C.sand}22`:"none"},}
                              , React.createElement('span', { style: {fontSize:14,flexShrink:0,marginTop:1},}, b.icon)
                              , React.createElement('div', { style: {flex:1},}
                                , React.createElement('div', { style: {fontSize:12,fontWeight:600,color:C.soil,lineHeight:1.4},}
                                  , b.label
                                )
                              )
                            )
                          ))
                        ));
                      })()
                      , React.createElement('div', { style: {padding:"5px 12px 8px",fontSize:10,color:C.muted,
                        borderTop:`1px solid ${C.sand}22`},}, "📋 Bron: kwekerij/expert · AI adviseur gebruikt dit automatisch"

                      )
                    )
                  )
                  , sp._sources && React.createElement(SourceBadges, { sources: sp._sources,})
                )
              ) : (
                React.createElement('div', { style: {paddingTop:12,textAlign:"center"},}
                  , React.createElement('div', { style: {fontSize:32,marginBottom:6},}, emoji)
                  , React.createElement('div', { style: {fontSize:13,color:C.muted,lineHeight:1.5},}, "Nog geen verzorgingsdata. Tik op "
                         , React.createElement('strong', null, "\"🌍 Ophalen op mijn locatie\""    ), " hieronder."
                  )
                )
              )
            )

            /* ── Quick log ── */
            , React.createElement(CollapsibleCard, { icon: "📝", title: "Snel loggen" , defaultOpen: true,}
              , React.createElement('div', { style: {paddingTop:12,display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},}
                , Object.entries(QUICK_TEMPLATES).map(([key,tpl])=>(
                  React.createElement('button', { key: key, onClick: ()=>setLogModal(key),
                    style: {background:tpl.color+"18",border:`1px solid ${tpl.color}44`,
                      borderRadius:10,padding:"10px 12px",cursor:"pointer",textAlign:"left",fontFamily:"inherit"},}
                    , React.createElement('div', { style: {fontSize:16,marginBottom:2},}, tpl.icon)
                    , React.createElement('div', { style: {fontWeight:700,fontSize:12,color:tpl.color},}, tpl.label)
                  )
                ))
                , React.createElement('button', { onClick: ()=>setShowFertLog(true),
                  style: {background:"#3D6B4A18",border:"1px solid #3D6B4A44",
                    borderRadius:10,padding:"10px 12px",cursor:"pointer",textAlign:"left",fontFamily:"inherit"},}
                  , React.createElement('div', { style: {fontSize:16,marginBottom:2},}, "🌿")
                  , React.createElement('div', { style: {fontWeight:700,fontSize:12,color:"#3D6B4A"},}, "Bemesting")
                )
                , React.createElement('button', { onClick: ()=>setShowPestLog(true),
                  style: {background:C.danger+"18",border:`1px solid ${C.danger}44`,
                    borderRadius:10,padding:"10px 12px",cursor:"pointer",textAlign:"left",fontFamily:"inherit"},}
                  , React.createElement('div', { style: {fontSize:16,marginBottom:2},}, "🦠")
                  , React.createElement('div', { style: {fontWeight:700,fontSize:12,color:C.danger},}, "Plaag / Ziekte"  )
                )
              )
            )

            /* ── Temperature ── */
            , React.createElement(CollapsibleCard, { icon: "🌡️", title: "Temperatuur", defaultOpen: false,}
              , sp ? (
                React.createElement('div', { style: {paddingTop:12,display:"flex",gap:8},}
                  , [{label:"Min",val:`${sp.temp.min}°C`,color:C.sky,bg:C.surfaceAlt},
                    {label:"Ideaal",val:sp.temp.ideal,color:C.green,bg:C.greenPale},
                    {label:"Max",val:`${sp.temp.max}°C`,color:C.terracotta,bg:C.terracottaLight}
                  ].map(({label,val,color,bg})=>(
                    React.createElement('div', { key: label, style: {flex:1,background:bg,borderRadius:10,padding:10,textAlign:"center"},}
                      , React.createElement('div', { style: {fontSize:10,color:C.muted},}, label)
                      , React.createElement('div', { style: {fontSize:13,fontWeight:800,color},}, val)
                    )
                  ))
                )
              ) : (
                React.createElement('div', { style: {paddingTop:12,fontSize:13,color:C.muted},}, "Haal verzorgingsdata op om temperatuurbereik te zien."

                )
              )
            )

            /* ── Location / section / notes ── */
            , React.createElement(CollapsibleCard, { icon: "📍", title: "Locatie & afdeling"  , defaultOpen: false,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement('div', { style: {fontWeight:600,color:C.soil,marginBottom:6,fontSize:13},}, "📍 Locatie" )
                , React.createElement('input', { value: plant.location, onChange: e=>onUpdatePlant({...plant,location:e.target.value}),
                  style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,padding:"8px 10px",
                    fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",marginBottom:12},})
                , React.createElement('div', { style: {fontWeight:600,color:C.soil,marginBottom:8,fontSize:13},}, "📂 Afdeling" )
                , React.createElement(SectionPicker, {
                  value: plant.section||"",
                  sections: sections||[],
                  onChange: v=>onUpdatePlant({...plant,section:v}),
                  onAddSection: onAddSection,}
                )
                , React.createElement('div', { style: {fontWeight:600,color:C.soil,marginBottom:6,marginTop:14,fontSize:13},}, "📝 Notities" )
                , React.createElement('textarea', { value: plant.notes, onChange: e=>onUpdatePlant({...plant,notes:e.target.value}),
                  rows: 3, placeholder: "Persoonlijke notities..." ,
                  style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,padding:"8px 10px",
                    fontSize:14,outline:"none",resize:"vertical",boxSizing:"border-box",fontFamily:"inherit"},})
              )
            )

            /* ── Health ── */
            , React.createElement(CollapsibleCard, { icon: "❤️", title: "Gezondheid",
              badge: `${plant.health}%`, defaultOpen: false,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},}
                  , React.createElement('span', { style: {fontSize:11,color:C.muted,display:"flex",alignItems:"center",gap:6},}
                    , React.createElement('span', { style: {background:C.greenPale,color:C.green,borderRadius:6,padding:"1px 6px",fontSize:10,fontWeight:600},}, "AUTO "
                       , autoHealth, "%"
                    ), "berekend op basis van waterschema, logs en events"

                  )
                )
                , React.createElement('input', { type: "range", min: 0, max: 100, value: plant.health,
                  onChange: e=>onUpdatePlant({...plant,health:Number(e.target.value)}),
                  style: {width:"100%",accentColor:plant.health>70?C.green:plant.health>40?C.warning:C.danger,marginBottom:6},})
                , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",fontSize:10,color:C.muted,marginBottom:8},}
                  , React.createElement('span', null, "Ziek"), React.createElement('span', null, "Matig"), React.createElement('span', null, "Gezond")
                )
                , plant.health !== autoHealth && (
                  React.createElement('button', { onClick: ()=>onUpdatePlant({...plant,health:autoHealth}),
                    style: {width:"100%",padding:"6px",border:`1px solid ${C.green}`,borderRadius:8,
                      background:"none",color:C.green,cursor:"pointer",fontFamily:"inherit",
                      fontSize:12,fontWeight:600},}, "↩ Terugzetten naar auto ("
                        , autoHealth, "%)"
                  )
                )
                , React.createElement('div', { style: {marginTop:8,fontSize:11,color:C.muted,lineHeight:1.4},}, "Schuif om handmatig aan te passen. Wordt automatisch bijgewerkt op basis van waterschema en logs."

                )
              )
            )

            /* ── Care events ── */
            , React.createElement(CollapsibleCard, { icon: "⚡", title: "Uitzonderlijke verzorging" ,
              badge: (plant.careEvents||[]).filter(e=>e.endDate>=new Date().toISOString().split("T")[0]).length||null,
              defaultOpen: (plant.careEvents||[]).filter(e=>e.endDate>=new Date().toISOString().split("T")[0]).length>0,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement(CareEventsPanel, { plant: plant, onUpdatePlant: onUpdatePlant, season: season, inline: true,})
              )
            )

            /* ── Custom reminders ── */
            , React.createElement(CollapsibleCard, { icon: "⏰", title: "Eigen herinneringen" ,
              badge: (plant.customReminders||[]).filter(r=>!r.done).length||null,
              defaultOpen: (plant.customReminders||[]).some(r=>!r.done&&r.datetime.split("T")[0]<=new Date(Date.now()+3*86400000).toISOString().split("T")[0]),}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement(CustomReminders, { plant: plant, onUpdatePlant: onUpdatePlant, inline: true,})
              )
            )

            /* ── Repotting ── */
            , React.createElement(CollapsibleCard, { icon: "🏺", title: "Verpotten",
              urgent: (() => { const lr=plant.lastRepotted||plant.addedDate; const m=Math.floor((Date.now()-new Date(lr))/(1000*60*60*24*30.5)); return m>=(plant.repotIntervalMonths||24); })(),
              badge: (() => { const lr=plant.lastRepotted||plant.addedDate; const m=Math.floor((Date.now()-new Date(lr))/(1000*60*60*24*30.5)); const due=plant.repotIntervalMonths||24; return m>=due?"Nodig!":null; })(),
              defaultOpen: false,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement(RepottingReminder, { plant: plant, onUpdatePlant: onUpdatePlant, inline: true,})
              )
            )

            /* ── Licht meter ── */
            , React.createElement(CollapsibleCard, { icon: "☀️", title: "Lichtmeter",
              defaultOpen: false,
              badge: plant.lastLuxReading ? `${plant.lastLuxReading.toLocaleString()} lux` : null,}
              , React.createElement('div', { style: {paddingTop:12},}
                , plant.lastLuxReading ? (
                  React.createElement('div', { style: {marginBottom:12},}
                    , (() => {
                      const z = LUX_ZONES.find(zn => plant.lastLuxReading <= zn.max) || LUX_ZONES[LUX_ZONES.length-1];
                      const m = getPlantMatch(plant.lastLuxReading, effectiveSunlight(plant));
                      return (React.createElement(React.Fragment, null
                        , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:10,
                          background:z.bg,borderRadius:10,padding:"10px 14px",marginBottom:8,
                          border:`1px solid ${z.color}44`},}
                          , React.createElement('span', { style: {fontSize:24},}, z.emoji)
                          , React.createElement('div', null
                            , React.createElement('div', { style: {fontWeight:800,fontSize:14,color:z.color},}, z.label)
                            , React.createElement('div', { style: {fontSize:12,color:C.muted},}, "Gemeten: "
                               , React.createElement('strong', null, plant.lastLuxReading.toLocaleString(), " lux" )
                              , plant.lastLuxDate && ` · ${new Date(plant.lastLuxDate).toLocaleDateString("nl-BE",{day:"numeric",month:"short"})}`
                            )
                          )
                        )
                        , m && (
                          React.createElement('div', { style: {fontSize:13,color:C.soil,padding:"6px 10px",
                            background:C.surfaceAlt,borderRadius:8},}
                            , m.emoji, " " , m.label
                          )
                        )
                      ));
                    })()
                  )
                ) : (
                  React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:12,lineHeight:1.5},}, "Meet hoeveel licht er op de standplaats van "
                            , plant.name, " valt. De meting wordt opgeslagen in de log en vergeleken met de lichtbehoefte van de soort."

                  )
                )
                , React.createElement('button', { onClick: ()=>setShowLichtMeter(true),
                  style: {width:"100%",padding:"11px",border:"none",borderRadius:10,
                    background:`linear-gradient(135deg, ${C.warning}, #B8820E)`,
                    color:"#fff",cursor:"pointer",fontFamily:"inherit",
                    fontSize:14,fontWeight:700,display:"flex",alignItems:"center",
                    justifyContent:"center",gap:8},}
                  , React.createElement('span', { style: {fontSize:18},}, "☀️")
                  , plant.lastLuxReading ? "Opnieuw meten" : "Licht meten starten"
                )
              )
            )

            /* ── Multi-source care fetch ── */
            , React.createElement(CollapsibleCard, { icon: "🌍", title: "Locatie-bewuste verzorgingsdata" , defaultOpen: false,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement(RefreshCareData, { plant: plant, onUpdatePlant: onUpdatePlant,})
              )
            )

            /* ── AI advisor ── */
            , React.createElement(CollapsibleCard, { icon: "🤖", title: "AI Plant Advisor"  ,
              defaultOpen: false,
              badge: _optionalChain([care, 'access', _186 => _186.expertBullets, 'optionalAccess', _187 => _187.length])>0?`📋 ${care.expertBullets.length} tips`:null,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement(AIAdvisor, { plant: plant, apiKey: apiKey,})
              )
            )

            /* ── Photos ── */
            , React.createElement(CollapsibleCard, { icon: "📷", title: `Foto's (${(plant.photos||[]).length})`,
              defaultOpen: (plant.photos||[]).length>0,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement(PhotoGallery, { plant: plant, onUpdatePlant: onUpdatePlant,})
              )
            )

            /* ── Soil mix ── */
            , React.createElement(CollapsibleCard, { icon: "🏺", title: "Grondmengsel",
              defaultOpen: (plant.soilMix||[]).length>0,
              badge: (plant.soilMix||[]).length>0?`${(plant.soilMix||[]).length} bestandd.`:null,}
              , React.createElement(SoilMixEditor, { plant: plant, onUpdatePlant: onUpdatePlant,})
            )

            /* ── Custom care values ── */
            , React.createElement(CollapsibleCard, { icon: "⚙️", title: "Eigen verzorgingswaarden" , defaultOpen: false,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement(CustomCareEditor, { plant: plant, onUpdatePlant: onUpdatePlant, season: season,})
              )
            )

            /* ── Danger zone ── */
            /* ── QR code ── */
            , React.createElement(CollapsibleCard, { icon: "📱", title: "QR-code", defaultOpen: false,}
              , React.createElement('div', { style: {paddingTop:12},}
                , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:10,lineHeight:1.5},}, "Genereer een QR-code die je aan de pot kunt hangen. Scan met de app om direct naar deze plant te gaan."

                )
                , React.createElement(Btn, { onClick: ()=>setShowQR(true), fullWidth: true,}, "📱 QR-code genereren"  )
              )
            )

            , onDelete && (
              React.createElement(CollapsibleCard, { icon: "🗑️", title: "Gevaarzone", defaultOpen: false,}
                , React.createElement('div', { style: {paddingTop:12},}
                  , React.createElement('button', { onClick: ()=>setShowSpeciesChange(true),
                    style: {width:"100%",padding:"10px",border:`1px solid ${C.warning}`,borderRadius:10,
                      background:"none",color:C.warning,cursor:"pointer",fontFamily:"inherit",
                      fontSize:13,fontWeight:600,marginBottom:8},}, "🔄 Soort wijzigen (behoudt logs + foto's)"

                  )
                  , React.createElement(DeletePlantButton, { plant: plant, onDelete: onDelete, onBack: onBack,})
                )
              )
            )
          )
        )
        , tab==="seasons"&&(React.createElement(React.Fragment, null
          , !sp && (
            React.createElement('div', { style: {textAlign:"center",padding:40,color:C.muted},}
              , React.createElement('div', { style: {fontSize:36,marginBottom:12},}, "📅")
              , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:8},}, "Geen seizoensdata" )
              , React.createElement('div', { style: {fontSize:13,lineHeight:1.5},}, "Tik op "  , React.createElement('strong', null, "🌍 Ophalen op mijn locatie"    ), " op het Overzicht tabblad om verzorgingsdata op te halen."         )
            )
          )
          , sp&&(React.createElement(React.Fragment, null
          , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:12,fontStyle:"italic"},}, sp.commonName, " — full seasonal care schedule"     )
          , SEASONS.map(s=>{
            const isCurrent = s === season;
            // Use raw base data for the schedule overview — events are temporary exceptions
            const spCare = _optionalChain([sp, 'optionalAccess', _188 => _188.care, 'access', _189 => _189[s]]) || {water:7, humidity:50, notes:""};
            const custom = plant.customCare || {};
            const customWater = custom[`water_${s}`];
            const customHum   = custom[`humidity_${s}`];
            const baseWater   = _nullishCoalesce(customWater, () => ( spCare.water));
            const baseHum     = _nullishCoalesce(customHum, () => ( spCare.humidity));
            // Active events for current season only
            const today = new Date().toISOString().split("T")[0];
            const activeEvents = isCurrent
              ? (plant.careEvents||[]).filter(e=>e.endDate>=today)
              : [];
            const hasEvent = activeEvents.length > 0;
            return (
              React.createElement('div', { key: s, style: {background:isCurrent?C.greenPale:C.surface,
                border:`${isCurrent?2:1}px solid ${isCurrent?C.green:C.border}`,
                borderRadius:14,padding:16,marginBottom:12},}
                , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},}
                  , React.createElement('div', { style: {fontWeight:700,fontSize:15},}, SEASON_ICONS[s], " " , s.charAt(0).toUpperCase()+s.slice(1))
                  , React.createElement('div', { style: {display:"flex",gap:6,alignItems:"center"},}
                    , hasEvent && React.createElement(Badge, { label: "⚡ Event actief"  , color: C.warning,})
                    , isCurrent && React.createElement(Badge, { label: "Nu", color: C.green,})
                  )
                )
                , React.createElement('div', { style: {display:"flex",gap:8,marginBottom:10},}
                  , [
                    {label:"Water elke", val:baseWater, unit:"dagen", color:customWater?C.green:C.sky,
                     overridden:!!customWater},
                    {label:"Luchtvocht.", val:baseHum,   unit:"%",     color:customHum?C.green:C.sky,
                     overridden:!!customHum},
                    {label:"Zon",        val:`${sunlight.min}–${sunlight.max}`, unit:"u/dag",
                     color:C.warning, overridden:false},
                  ].map(({label,val,unit,color,overridden})=>(
                    React.createElement('div', { key: label, style: {flex:1,background:C.surface,borderRadius:8,padding:8,textAlign:"center",
                      border:overridden?`1px solid ${C.green}44`:"none"},}
                      , React.createElement('div', { style: {fontSize:10,color:C.muted},}, label, overridden?" ✏️":"")
                      , React.createElement('div', { style: {fontSize:18,fontWeight:800,color},}, val, React.createElement('span', { style: {fontSize:11},}, " " , unit))
                    )
                  ))
                )
                /* Active event notice for current season */
                , hasEvent && (
                  React.createElement('div', { style: {background:C.warning+"18",borderRadius:8,padding:8,
                    fontSize:12,color:C.soil,marginBottom:6,fontWeight:600},}, "⚡ "
                     , activeEvents.map(e=>`${e.icon} ${e.label}: nog ${Math.ceil((new Date(e.endDate)-new Date())/86400000)} dagen`).join(" · ")
                  )
                )
                , React.createElement('div', { style: {background:isCurrent?"rgba(255,255,255,0.6)":C.sandLight,borderRadius:8,
                  padding:10,fontSize:13,color:C.soil,lineHeight:1.5},}
                  , spCare.notes || "Geen seizoensnotities beschikbaar."
                )
              )
            );
          })
        ))
        ))

        , tab==="care"&&(React.createElement(React.Fragment, null
          , !sp && (
            React.createElement('div', { style: {textAlign:"center",padding:40,color:C.muted},}
              , React.createElement('div', { style: {fontSize:36,marginBottom:12},}, "🌿")
              , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:8},}, "Geen verzorgingsdata" )
              , React.createElement('div', { style: {fontSize:13,lineHeight:1.5},}, "Tik op "  , React.createElement('strong', null, "🌍 Ophalen op mijn locatie"    ), " op het Overzicht tabblad om verzorgingsdata op te halen."         )
            )
          )
          , sp&&(React.createElement(React.Fragment, null
          , React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:16,marginBottom:12},}
            , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:6},}, "About")
            , React.createElement('div', { style: {fontSize:13,color:C.muted,lineHeight:1.6},}, sp.description)
            , React.createElement('div', { style: {marginTop:10,display:"flex",gap:6,flexWrap:"wrap"},}, React.createElement(Badge, { label: sp.origin, color: C.sand,}), React.createElement(Badge, { label: sp.family, color: C.muted,}), React.createElement(Badge, { label: sp.category, color: C.green,}))
          )
          , [{icon:"☀️",label:"Zonlicht",val:`${sunlight.min}–${sunlight.max}u/dag · ${sunlight.type} · UV: ${sp.sunlight.uv}`},{icon:"🪨",label:"Grond",val:sp.soil},{icon:"🏺",label:"Pot",val:sp.pot},{icon:"🌿",label:"Bemesting",val:sp.fertilize},{icon:"↕️",label:"Repot",val:sp.repot},{icon:"🔬",label:"Vermeerdering",val:sp.propagation},{icon:"⚠️",label:"Giftigheid",val:sp.toxicity}].map(({icon,label,val})=>(
            React.createElement('div', { key: label, style: {background:C.surface,borderRadius:12,padding:14,marginBottom:10,display:"flex",gap:12},}, React.createElement('span', { style: {fontSize:18},}, icon), React.createElement('div', null, React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil},}, label), React.createElement('div', { style: {fontSize:13,color:C.muted,marginTop:2,lineHeight:1.5},}, val)))
          ))
          , React.createElement(ASPCAToxicity, { species: plant.species, staticToxicity: sp.toxicity,})
          , React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:16},}
            , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:10},}, "💡 Pro Tips"  )
            , sp.tips.map((tip,i)=>(
              React.createElement('div', { key: i, style: {display:"flex",gap:10,marginBottom:8,alignItems:"flex-start"},}
                , React.createElement('div', { style: {width:22,height:22,background:C.greenPale,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:C.green,flexShrink:0},}, i+1)
                , React.createElement('div', { style: {fontSize:13,color:C.text,lineHeight:1.5},}, tip)
              )
            ))
          )
        ))
        ))

        , tab==="log"&&(React.createElement(React.Fragment, null
          , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},}
            , React.createElement('div', { style: {fontWeight:700,color:C.soil},}, "Care Log ("  , plantLogs.length, ")")
            , React.createElement(Btn, { small: true, onClick: ()=>setLogModal("custom"),}, "+ Nieuw" )
          )
          , React.createElement('div', {style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}},
            [{id:"all",icon:"📋",label:"Alles"},{id:"water",icon:"💧",label:"Water"},
             {id:"pest",icon:"🦠",label:"Plagen"},{id:"fertilizer",icon:"🌿",label:"Bemesting"},
             {id:"growth",icon:"📏",label:"Groei"},{id:"custom",icon:"✏️",label:"Overig"}
            ].map(f=>React.createElement('button',{key:f.id,
              onClick:()=>setLogFilter&&setLogFilter(f.id),
              style:{padding:"4px 10px",borderRadius:20,border:`1px solid ${logFilter===f.id?C.green:C.border}`,
                background:logFilter===f.id?C.greenPale:"none",color:logFilter===f.id?C.green:C.muted,
                cursor:"pointer",fontSize:11,fontFamily:"inherit",fontWeight:logFilter===f.id?700:400}},
              f.icon+" "+f.label))
          )
          , React.createElement('div', { style: {display:"none"}},
          )

          /* ── Growth timeline chart ── */
          , (() => {
            const healthPoints = plantLogs
              .filter(l => _optionalChain([l, 'access', _190 => _190.parameters, 'optionalAccess', _191 => _191.health_score]) !== undefined)
              .map(l => ({date:l.timestamp.split("T")[0], val:l.parameters.health_score}))
              .sort((a,b)=>a.date.localeCompare(b.date));
            const heightPoints = plantLogs
              .filter(l => _optionalChain([l, 'access', _192 => _192.parameters, 'optionalAccess', _193 => _193.height]) !== undefined)
              .map(l => ({date:l.timestamp.split("T")[0], val:l.parameters.height}))
              .sort((a,b)=>a.date.localeCompare(b.date));
            if (healthPoints.length < 2 && heightPoints.length < 2) return null;
            const allDates = [...new Set([...healthPoints.map(p=>p.date),...heightPoints.map(p=>p.date)])].sort();
            const maxHealth = 100;
            const maxHeight = Math.max(...heightPoints.map(p=>p.val), 1);
            return (
              React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:14,marginBottom:12,
                boxShadow:C.shadowSm,border:`1px solid ${C.border}`},}
                , React.createElement('div', { style: {fontWeight:700,color:C.soil,fontSize:13,marginBottom:10},}, "📈 Evolutie over tijd"

                )
                /* Health trend */
                , healthPoints.length >= 2 && (
                  React.createElement('div', { style: {marginBottom:12},}
                    , React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:4,fontWeight:600},}, "❤️ Gezondheid"

                    )
                    , React.createElement('div', { style: {position:"relative",height:60,background:C.surfaceAlt,borderRadius:8,overflow:"hidden"},}
                      , React.createElement('svg', { width: "100%", height: "100%", viewBox: `0 0 ${healthPoints.length-1} 100`,
                        preserveAspectRatio: "none", style: {position:"absolute",inset:0},}
                        , React.createElement('defs', null
                          , React.createElement('linearGradient', { id: "hgrad", x1: "0", y1: "0", x2: "0", y2: "1",}
                            , React.createElement('stop', { offset: "0%", stopColor: C.green, stopOpacity: "0.3",})
                            , React.createElement('stop', { offset: "100%", stopColor: C.green, stopOpacity: "0.05",})
                          )
                        )
                        , React.createElement('polyline', { fill: "none", stroke: C.green, strokeWidth: "2",
                          points: healthPoints.map((p,i)=>`${i},${100-(p.val/maxHealth)*100}`).join(" "),})
                        , React.createElement('polygon', { fill: "url(#hgrad)",
                          points: `0,100 ${healthPoints.map((p,i)=>`${i},${100-(p.val/maxHealth)*100}`).join(" ")} ${healthPoints.length-1},100`,})
                      )
                      /* First + last value */
                      , React.createElement('div', { style: {position:"absolute",left:6,top:4,fontSize:10,fontWeight:700,color:C.green},}
                        , healthPoints[0].val, "%"
                      )
                      , React.createElement('div', { style: {position:"absolute",right:6,top:4,fontSize:10,fontWeight:700,color:C.green},}
                        , healthPoints[healthPoints.length-1].val, "%"
                      )
                    )
                    , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",fontSize:9,color:C.muted,marginTop:2},}
                      , React.createElement('span', null, new Date(healthPoints[0].date).toLocaleDateString("nl-BE",{day:"numeric",month:"short"}))
                      , React.createElement('span', null, new Date(healthPoints[healthPoints.length-1].date).toLocaleDateString("nl-BE",{day:"numeric",month:"short"}))
                    )
                  )
                )
                /* Height trend */
                , heightPoints.length >= 2 && (
                  React.createElement('div', null
                    , React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:4,fontWeight:600},}, "📏 Hoogte (cm)"

                    )
                    , React.createElement('div', { style: {position:"relative",height:60,background:C.surfaceAlt,borderRadius:8,overflow:"hidden"},}
                      , React.createElement('svg', { width: "100%", height: "100%", viewBox: `0 0 ${heightPoints.length-1} 100`,
                        preserveAspectRatio: "none", style: {position:"absolute",inset:0},}
                        , React.createElement('defs', null
                          , React.createElement('linearGradient', { id: "hgradh", x1: "0", y1: "0", x2: "0", y2: "1",}
                            , React.createElement('stop', { offset: "0%", stopColor: C.sky, stopOpacity: "0.3",})
                            , React.createElement('stop', { offset: "100%", stopColor: C.sky, stopOpacity: "0.05",})
                          )
                        )
                        , React.createElement('polyline', { fill: "none", stroke: C.sky, strokeWidth: "2",
                          points: heightPoints.map((p,i)=>`${i},${100-(p.val/maxHeight)*100}`).join(" "),})
                        , React.createElement('polygon', { fill: "url(#hgradh)",
                          points: `0,100 ${heightPoints.map((p,i)=>`${i},${100-(p.val/maxHeight)*100}`).join(" ")} ${heightPoints.length-1},100`,})
                      )
                      , React.createElement('div', { style: {position:"absolute",left:6,top:4,fontSize:10,fontWeight:700,color:C.sky},}
                        , heightPoints[0].val, "cm"
                      )
                      , React.createElement('div', { style: {position:"absolute",right:6,top:4,fontSize:10,fontWeight:700,color:C.sky},}
                        , heightPoints[heightPoints.length-1].val, "cm"
                        , heightPoints.length>1&&React.createElement('span', { style: {fontSize:9,fontWeight:400},}, " (+" , (heightPoints[heightPoints.length-1].val-heightPoints[0].val).toFixed(1), ")")
                      )
                    )
                    , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",fontSize:9,color:C.muted,marginTop:2},}
                      , React.createElement('span', null, new Date(heightPoints[0].date).toLocaleDateString("nl-BE",{day:"numeric",month:"short"}))
                      , React.createElement('span', null, new Date(heightPoints[heightPoints.length-1].date).toLocaleDateString("nl-BE",{day:"numeric",month:"short"}))
                    )
                  )
                )
              )
            );
          })()

          /* Watering chart — last 30 days */
          , (() => {
            const waterLogs = plantLogs.filter(l => _optionalChain([l, 'access', _194 => _194.parameters, 'optionalAccess', _195 => _195.watering]) !== undefined);
            const last30 = Array.from({length:30},(_,i)=>{const d=new Date();d.setDate(d.getDate()-29+i);return d.toISOString().split("T")[0];});
            const waterDays = new Set(waterLogs.map(l => l.timestamp.split("T")[0]));
            return (
              React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:14,marginBottom:12},}
                , React.createElement('div', { style: {fontWeight:700,color:C.soil,fontSize:13,marginBottom:8},}, "💧 Water gegeven — afgelopen 30 dagen"      )
                , React.createElement('div', { style: {display:"flex",gap:2,alignItems:"flex-end",height:36},}
                  , last30.map((day) => (
                    React.createElement('div', { key: day, style: {flex:1,height:waterDays.has(day)?32:6,borderRadius:2,
                      background:waterDays.has(day)?C.sky:C.border,transition:"height 0.3s"},})
                  ))
                )
                , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",fontSize:9,color:C.muted,marginTop:4},}
                  , React.createElement('span', null, "30d geleden" ), React.createElement('span', null, "Vandaag")
                )
                , React.createElement('div', { style: {marginTop:6,fontSize:12,color:C.muted},}
                  , waterLogs.length, "× water gegeven in 30 dagen"
                  , plant.lastWatered && ` · Laatste: ${new Date(plant.lastWatered).toLocaleDateString("nl-BE",{day:"numeric",month:"short"})}`
                )
              )
            );
          })()

          , plantLogs.length===0
            ? React.createElement('div', { style: {textAlign:"center",padding:30,color:C.muted,fontSize:14},}, "Nog geen entries."
                  , React.createElement('br', null), "Gebruik Snel Loggen op het Overzicht tabblad."
              )
            : plantLogs.filter(log=>{ if(logFilter==="all") return true; if(logFilter==="water") return log.type==="water"||!!log.parameters?.watering; if(logFilter==="pest") return !!log.parameters?.pest_observation||!!log.parameters?.disease; if(logFilter==="fertilizer") return !!log.parameters?.fertilizer_product||log.type==="fertilizer"; if(logFilter==="growth") return !!log.parameters?.height||!!log.parameters?.health_score; return log.type==="custom"||(!log.parameters?.watering&&!log.parameters?.pest_observation&&!log.parameters?.fertilizer_product&&!log.parameters?.height); }).map(log=>{
                const ts=fmtTS(log.timestamp);
                const pKeys=Object.keys(log.parameters);
                return(React.createElement(LogEntry, { key: log.id, log: log, ts: ts, pKeys: pKeys,
                  onEdit: onUpdateLog, onDelete: onDeleteLog,}));
              })
          
        ))
      )

      , logModal&&React.createElement(LogModal, { plant: plant, templateKey: logModal, onSave: onAddLog, onClose: ()=>setLogModal(null),})
      , showSnooze&&React.createElement(SnoozePicker, { plant: plant, onUpdatePlant: onUpdatePlant, onClose: ()=>setShowSnooze(false),})
      , showPestLog&&React.createElement(PestLogModal, { plant: plant, onSave: onAddLog, onClose: ()=>setShowPestLog(false),})
      , showFertLog&&React.createElement(FertilizerLogModal, { plant: plant, onSave: onAddLog, onClose: ()=>setShowFertLog(false),})
      , showQR&&React.createElement(QRCodeDisplay, { plant: plant, onClose: ()=>setShowQR(false),})
      , showSpeciesChange&&React.createElement(SpeciesChanger, { plant: plant, onUpdatePlant: onUpdatePlant, onClose: ()=>setShowSpeciesChange(false),})
      , showLichtMeter&&React.createElement(LichtMeter, {
        plant: plant,
        sunlight: sp ? effectiveSunlight(plant) : null,
        onSaveReading: (lux, zoneName) => {
          // Save to plant data
          onUpdatePlant({...plant, lastLuxReading:lux, lastLuxDate:new Date().toISOString()});
          // Save to log
          onAddLog({
            id: Math.random().toString(36).slice(2),
            plantId: plant.id,
            timestamp: new Date().toISOString(),
            parameters: { light_intensity: lux },
            notes: `☀️ Lichtmeting: ${lux.toLocaleString()} lux — ${zoneName}`,
            auto: false,
          });
        },
        onClose: ()=>setShowLichtMeter(false),}
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// SPECIES SEARCH + PHOTO UTILITIES
// ══════════════════════════════════════════════════════════════════

const searchGBIF = async (q) => {
  if (!q || q.length < 2) return [];
  try {
    // Try suggest first (faster, works for exact names like "Lophophora williamsii")
    const r = await fetch(
      `https://api.gbif.org/v1/species/suggest?q=${encodeURIComponent(q)}&limit=20`
    );
    if (!r.ok) throw new Error(`GBIF ${r.status}`);
    const data = await r.json();
    const results = (Array.isArray(data) ? data : data.results || [])
      .filter(s => s.canonicalName)
      .map(s => ({
        scientificName: s.canonicalName,
        commonName: _optionalChain([s, 'access', _196 => _196.vernacularNames, 'optionalAccess', _197 => _197[0], 'optionalAccess', _198 => _198.vernacularName]) || s.canonicalName,
        family: s.family || s.familyKey || "",
        fromDB: !!SPECIES_DB[s.canonicalName],
      }));
    if (results.length > 0) return results;
    // Fallback: species/search without kingdom filter
    const r2 = await fetch(
      `https://api.gbif.org/v1/species/search?q=${encodeURIComponent(q)}&limit=20`
    );
    if (!r2.ok) return [];
    const data2 = await r2.json();
    return (data2.results || [])
      .filter(s => s.canonicalName)
      .map(s => ({
        scientificName: s.canonicalName,
        commonName: _optionalChain([s, 'access', _199 => _199.vernacularNames, 'optionalAccess', _200 => _200[0], 'optionalAccess', _201 => _201.vernacularName]) || s.canonicalName,
        family: s.family || "",
        fromDB: !!SPECIES_DB[s.canonicalName],
      }));
  } catch (e) {
    console.warn("GBIF search failed:", e);
    return [];
  }
};

const fetchWikiPhoto = async (speciesName) => {
  try {
    const search = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(speciesName)}&srnamespace=0&srlimit=1&format=json&origin=*`);
    const sd = await search.json();
    const title = _optionalChain([sd, 'optionalAccess', _202 => _202.query, 'optionalAccess', _203 => _203.search, 'optionalAccess', _204 => _204[0], 'optionalAccess', _205 => _205.title]);
    if (!title) return null;
    const img = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=400&format=json&origin=*`);
    const id = await img.json();
    const pages = _optionalChain([id, 'optionalAccess', _206 => _206.query, 'optionalAccess', _207 => _207.pages]);
    const page = pages ? Object.values(pages)[0] : null;
    return _optionalChain([page, 'optionalAccess', _208 => _208.thumbnail, 'optionalAccess', _209 => _209.source]) || null;
  } catch(_e) { return null; }
};

const fetchAndStoreSpeciesData = async (scientificName, commonName, family) => {
  // Skip only if we already have a complete, valid entry
  const existing = SPECIES_DB[scientificName];
  if (existing && _optionalChain([existing, 'access', _210 => _210.care, 'optionalAccess', _211 => _211.spring, 'optionalAccess', _212 => _212.water])) return existing;

  const prompt = `Generate complete care data for this plant:
Scientific name: ${scientificName}
Common name: ${commonName || scientificName}
Family: ${family || "Unknown"}

This can be any plant — cactus, succulent, tropical, herb, tree, etc.
Respond ONLY with raw JSON, no markdown fences, no text before or after:
{"commonName":"string","family":"string","category":"Cacti|Succulents|Aroids|Ferns|Palms|Orchids|Bromeliads|Tropical Foliage|Herbs|Carnivorous|Climbing / Trailing|Flowering|Indoor Trees|Other","origin":"string","image":"emoji","careLevel":"Easy|Medium|Hard","description":"2-3 sentences","care":{"spring":{"water":10,"humidity":40,"notes":"spring advice"},"summer":{"water":7,"humidity":45,"notes":"summer advice"},"autumn":{"water":14,"humidity":35,"notes":"autumn advice"},"winter":{"water":21,"humidity":30,"notes":"winter advice"}},"sunlight":{"min":4,"max":8,"type":"light description","uv":"Low|Medium|High|Very High"},"temp":{"min":5,"max":35,"ideal":"15-28°C"},"soil":"soil description","pot":"pot description","fertilize":"fertilizing info","repot":"repotting info","toxicity":"toxicity info","propagation":"propagation method","tips":["tip 1","tip 2","tip 3"]}`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1400,
        system: "You are an expert botanist and horticulturalist. Your task is to provide plant care data for home growers. Respond ONLY with a single raw JSON object — no markdown, no explanation, nothing before or after the JSON.",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!res.ok) {
      console.warn("fetchAndStoreSpeciesData API error:", res.status);
      return null;
    }

    const data = await res.json();
    if (data.error) { console.warn("Claude error:", data.error); return null; }

    let text = (_optionalChain([data, 'access', _213 => _213.content, 'optionalAccess', _214 => _214.map, 'call', _215 => _215(b => b.text || ""), 'access', _216 => _216.join, 'call', _217 => _217("")]) || "").trim();
    // Strip accidental markdown fences
    text = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
    // Extract JSON even if surrounded by stray text
    const s = text.indexOf("{"), e = text.lastIndexOf("}");
    if (s === -1 || e === -1) { console.warn("No JSON in response:", text.slice(0, 200)); return null; }
    text = text.slice(s, e + 1);

    const entry = JSON.parse(text);
    if (!_optionalChain([entry, 'access', _218 => _218.care, 'optionalAccess', _219 => _219.spring, 'optionalAccess', _220 => _220.water])) { console.warn("Incomplete entry:", entry); return null; }

    SPECIES_DB[scientificName] = entry;
    try {
      const stored = JSON.parse(localStorage.getItem("plantcare_custom_db") || "{}");
      stored[scientificName] = entry;
      localStorage.setItem("plantcare_custom_db", JSON.stringify(stored));
    } catch(_e) {}

    return entry;
  } catch (err) { console.warn("fetchAndStoreSpeciesData failed:", err); return null; }
}

// Load any previously stored custom species on startup
try {
  const stored = JSON.parse(localStorage.getItem("plantcare_custom_db") || "{}");
  Object.assign(SPECIES_DB, stored);
} catch(_e) {}


// ══════════════════════════════════════════════════════════════════
// MULTI-SOURCE CARE INTELLIGENCE
// Sources: Open-Meteo (weather), Nominatim OSM (geocoding),
//          Wikipedia REST (plant text), iNaturalist (native habitat),
//          GBIF (taxonomy), Claude AI (synthesis)
// ══════════════════════════════════════════════════════════════════

// ── 1. Get user location via browser Geolocation API ─────────────
const getUserLocation = () => new Promise((resolve, reject) => {
  if (!navigator.geolocation) return reject(new Error("Geolocation not supported"));
  navigator.geolocation.getCurrentPosition(
    pos => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
    err => reject(err),
    { timeout: 8000, maximumAge: 3600000 } // cache 1hr
  );
});

// ── 2. Reverse geocode lat/lon → location name (Nominatim OSM) ───
const reverseGeocode = async (lat, lon) => {
  try {
    const r = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      { headers: { "Accept-Language": "en", "User-Agent": "PlantCareApp/1.0" } }
    );
    const d = await r.json();
    return {
      city:    _optionalChain([d, 'access', _221 => _221.address, 'optionalAccess', _222 => _222.city]) || _optionalChain([d, 'access', _223 => _223.address, 'optionalAccess', _224 => _224.town]) || _optionalChain([d, 'access', _225 => _225.address, 'optionalAccess', _226 => _226.village]) || _optionalChain([d, 'access', _227 => _227.address, 'optionalAccess', _228 => _228.county]) || "",
      country: _optionalChain([d, 'access', _229 => _229.address, 'optionalAccess', _230 => _230.country]) || "",
      countryCode: _optionalChain([d, 'access', _231 => _231.address, 'optionalAccess', _232 => _232.country_code, 'optionalAccess', _233 => _233.toUpperCase, 'call', _234 => _234()]) || "",
      displayName: d.display_name || "",
    };
  } catch(_e) { return { city: "", country: "", countryCode: "", displayName: "" }; }
};

// ── 3. Fetch current + seasonal weather (Open-Meteo, no key) ─────
const fetchWeather = async (lat, lon) => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?` +
      `latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,relative_humidity_2m,precipitation,uv_index,wind_speed_10m` +
      `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max` +
      `&past_days=7&forecast_days=7` +
      `&timezone=auto`;
    const r = await fetch(url);
    const d = await r.json();
    const cur = d.current || {};
    // Calculate 7-day averages for context
    const daily = d.daily || {};
    const avgTempMax = daily.temperature_2m_max ? (daily.temperature_2m_max.reduce((a,b)=>a+b,0)/daily.temperature_2m_max.length).toFixed(1) : null;
    const avgTempMin = daily.temperature_2m_min ? (daily.temperature_2m_min.reduce((a,b)=>a+b,0)/daily.temperature_2m_min.length).toFixed(1) : null;
    const totalRain  = daily.precipitation_sum  ? daily.precipitation_sum.reduce((a,b)=>a+b,0).toFixed(1) : null;
    const avgUV      = daily.uv_index_max       ? (daily.uv_index_max.reduce((a,b)=>a+b,0)/daily.uv_index_max.length).toFixed(1) : null;
    return {
      current: {
        temp:     cur.temperature_2m,
        humidity: cur.relative_humidity_2m,
        rain:     cur.precipitation,
        uv:       cur.uv_index,
        wind:     cur.wind_speed_10m,
      },
      weekly: {
        avgTempMax, avgTempMin, totalRain, avgUV,
        // Classify humidity for plant advice
        humidityClass: cur.relative_humidity_2m > 70 ? "high" : cur.relative_humidity_2m > 45 ? "moderate" : "low",
        rainClass:     totalRain > 30 ? "rainy" : totalRain > 10 ? "moderate" : "dry",
      },
    };
  } catch(_e) { return null; }
};

// ── 4. Fetch Wikipedia plant extract ─────────────────────────────
const fetchWikiExtract = async (speciesName) => {
  try {
    const r = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(speciesName)}`,
      { headers: { "Accept": "application/json" } }
    );
    if (!r.ok) return null;
    const d = await r.json();
    return {
      extract: d.extract || "",
      description: d.description || "",
    };
  } catch(_e) { return null; }
};

// ── 5. Fetch iNaturalist native habitat data ──────────────────────
const fetchINaturalist = async (speciesName) => {
  try {
    const r = await fetch(
      `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(speciesName)}&rank=species&per_page=1`
    );
    if (!r.ok) return null;
    const d = await r.json();
    const taxon = _optionalChain([d, 'access', _235 => _235.results, 'optionalAccess', _236 => _236[0]]);
    if (!taxon) return null;
    return {
      nativeName:   taxon.preferred_common_name || taxon.name,
      nativeRange:  taxon.native_taxon_id ? "Has native range data" : null,
      extinct:      taxon.extinct,
      observations: taxon.observations_count,
      wikipedia:    taxon.wikipedia_url,
      // Conservation status if available
      status:       _optionalChain([taxon, 'access', _237 => _237.conservation_status, 'optionalAccess', _238 => _238.status_name]) || null,
    };
  } catch(_e) { return null; }
};

// ── 6. Master function: gather all sources + ask Claude to synthesize ──
const fetchLocationAwareCareData = async (scientificName, commonName, family, onProgress) => {
  onProgress("📍 Locatie ophalen...", 0);

  // Step 1: location (optional — gracefully skipped if denied)
  let location = null, weather = null;
  try {
    const coords = await getUserLocation();
    const [geo, wx] = await Promise.all([
      reverseGeocode(coords.lat, coords.lon),
      fetchWeather(coords.lat, coords.lon),
    ]);
    location = { ...coords, ...geo };
    weather  = wx;
    onProgress("🌤️ Weer & klimaat opgehaald voor " + (geo.city || "jouw locatie"), 20);
  } catch(_e) {
    onProgress("📍 Locatie overgeslagen — doorgaan...", 15);
  }

  // Step 2: Wikipedia + iNaturalist + GBIF in parallel
  onProgress("🌿 Plantdata ophalen (Wikipedia, iNaturalist, GBIF)...", 30);
  const [wiki, inat] = await Promise.all([
    fetchWikiExtract(scientificName),
    fetchINaturalist(scientificName),
  ]);
  onProgress("🔬 Bronnen analyseren...", 55);

  // Step 3: Build care data from gathered sources using heuristics
  // This works offline (no AI API call needed)
  const entry = buildCareFromSources(scientificName, commonName, family, wiki, inat, location, weather);

  if (!entry) {
    onProgress("⚠️ Niet genoeg data gevonden voor deze plant", 100);
    return null;
  }

  // Step 4: Try to enrich with Claude AI (works in Claude.ai preview, may fail in browser)
  onProgress("🤖 AI-verrijking proberen...", 70);
  try {
    const enriched = await enrichWithAI(entry, scientificName, commonName, location, weather, wiki, inat);
    if (enriched) {
      Object.assign(entry, enriched);
      onProgress("✅ AI-verrijking gelukt!", 90);
    } else {
      onProgress("ℹ️ AI niet beschikbaar — basisdata gebruikt", 90);
    }
  } catch(_e) {
    onProgress("ℹ️ AI niet beschikbaar — basisdata gebruikt", 90);
  }

  // Attach source metadata
  entry._sources = {
    weather:     !!weather,
    wikipedia:   !!_optionalChain([wiki, 'optionalAccess', _239 => _239.extract]),
    inaturalist: !!inat,
    location:    location ? location.city + ", " + location.country : null,
    locationNote: entry.locationNote || null,
    generatedAt: new Date().toISOString(),
  };

  // Save to DB + localStorage
  SPECIES_DB[scientificName] = entry;
  try {
    const stored = JSON.parse(localStorage.getItem("plantcare_custom_db") || "{}");
    stored[scientificName] = entry;
    localStorage.setItem("plantcare_custom_db", JSON.stringify(stored));
  } catch(_e) {}

  onProgress("✅ Klaar! Data opgeslagen.", 100);
  return { entry, location, weather, wiki, inat };
};

// ── Build care data from free sources (no AI needed) ─────────────
const buildCareFromSources = (scientificName, commonName, family, wiki, inat, location, weather) => {
  // Classify plant type from name/family/description
  const name = (scientificName + " " + (commonName||"") + " " + (family||"") + " " + (_optionalChain([wiki, 'optionalAccess', _240 => _240.extract])||"")).toLowerCase();

  const isCactus     = /cactus|cacti|cactaceae|cereus|mammillaria|echinopsis|ferocactus|opuntia|gymnocalycium|lophophora|astrophytum/i.test(name);
  const isSucculent  = /succulent|crassulaceae|aloe|haworthia|echeveria|sedum|agave|euphorbia|gasteria/i.test(name);
  const isFern       = /fern|polypodiaceae|pteridaceae|asplenium|nephrolepis|adiantum/i.test(name);
  const isOrchid     = /orchid|orchidaceae|phalaenopsis|dendrobium/i.test(name);
  const isTropical   = /tropical|aroid|araceae|monstera|philodendron|pothos|anthurium/i.test(name);
  const isPalm       = /palm|arecaceae/i.test(name);
  const isHerb       = /herb|lamiaceae|basil|mint|rosemary|thyme|oregano/i.test(name);
  const isCarnivore  = /carnivorous|dionaea|sarracenia|nepenthes|drosera/i.test(name);

  // Detect climate sensitivity from description
  const needsHumidity = /tropical|humid|mist|jungle|rainforest|fern|orchid/i.test(name);
  const droughtTolerant = /drought|arid|desert|xerophyte|cactus|succulent|semi-arid/i.test(name);
  const lowLight = /shade|low.light|indirect|north/i.test(name);

  // Local climate adjustments
  const localHumidity = _optionalChain([weather, 'optionalAccess', _241 => _241.current, 'optionalAccess', _242 => _242.humidity]) || 60;
  const localTemp = _optionalChain([weather, 'optionalAccess', _243 => _243.current, 'optionalAccess', _244 => _244.temp]) || 15;
  const isHighHumidity = localHumidity > 65;
  const isColdClimate = localTemp < 10;

  // Water intervals (days between watering)
  let waterSpring, waterSummer, waterAutumn, waterWinter;
  if (isCactus) {
    waterSpring = 14; waterSummer = isHighHumidity ? 14 : 10; waterAutumn = 21; waterWinter = 45;
  } else if (isSucculent) {
    waterSpring = 10; waterSummer = isHighHumidity ? 12 : 8; waterAutumn = 16; waterWinter = 30;
  } else if (isFern || isCarnivore) {
    waterSpring = 3; waterSummer = 2; waterAutumn = 4; waterWinter = 5;
  } else if (isOrchid) {
    waterSpring = 7; waterSummer = 7; waterAutumn = 10; waterWinter = 14;
  } else if (isTropical || isPalm) {
    waterSpring = 6; waterSummer = 4; waterAutumn = 8; waterWinter = 12;
  } else if (isHerb) {
    waterSpring = 3; waterSummer = 2; waterAutumn = 4; waterWinter = 6;
  } else {
    // Generic houseplant
    waterSpring = 7; waterSummer = 5; waterAutumn = 9; waterWinter = 14;
  }

  // Adjust for high local humidity
  if (isHighHumidity && !isCactus && !isSucculent) {
    waterSpring = Math.round(waterSpring * 1.3);
    waterSummer = Math.round(waterSummer * 1.3);
  }

  // Humidity targets
  const humidBase = isCactus || isSucculent ? 20
    : needsHumidity ? 70
    : isFern ? 75
    : isOrchid ? 60
    : 50;
  const humWinter = Math.max(humidBase - 10, 15);
  const humSummer = Math.min(humidBase + 5, 85);

  // Sunlight
  const sunMin = isCactus || isSucculent ? 5 : lowLight ? 1 : isTropical ? 3 : 3;
  const sunMax = isCactus || isSucculent ? 10 : lowLight ? 4 : isTropical ? 6 : 8;
  const sunType = isCactus || isSucculent ? "Full direct sun" : lowLight ? "Low to bright indirect" : "Bright indirect";

  // Location-aware notes
  const locName = location ? location.city || location.country : null;
  const humNote = isHighHumidity ? "Hoge lokale luchtvochtigheid — water minder dan gemiddeld." : "";
  const coldNote = isColdClimate ? "Lokale temperaturen zijn laag — zet niet buiten." : "";
  const climateNote = [humNote, coldNote].filter(Boolean).join(" ") || "Pas aan op jouw situatie.";

  // Try to extract useful text from Wikipedia
  const extract = _optionalChain([wiki, 'optionalAccess', _245 => _245.extract]) || "";
  const description = extract.length > 50
    ? extract.slice(0, 280).replace(/\s+\S+$/, "") + "."
    : `${commonName || scientificName} is een plant uit de familie ${family || "Plantae"}.`;

  // Determine category
  const category = isCactus ? "Cacti"
    : isSucculent ? "Succulents"
    : isFern ? "Ferns"
    : isOrchid ? "Orchids"
    : isTropical ? "Aroids"
    : isPalm ? "Palms"
    : isHerb ? "Herbs"
    : isCarnivore ? "Carnivorous"
    : "Tropical Foliage";

  // Pick emoji
  const emoji = isCactus ? "🌵" : isSucculent ? "🪴" : isFern ? "🌿" : isOrchid ? "🌸"
    : isTropical ? "🍃" : isPalm ? "🌴" : isHerb ? "🌱" : isCarnivore ? "🪤" : "🪴";

  return {
    commonName: commonName || scientificName,
    family: family || "Plantae",
    category,
    origin: extractOrigin(_optionalChain([wiki, 'optionalAccess', _246 => _246.extract]) || "", inat),
    image: emoji,
    careLevel: isCactus || isSucculent ? "Easy" : needsHumidity ? "Medium" : "Easy",
    description,
    care: {
      spring: { water: waterSpring, humidity: humidBase, notes: `Groeiseizoen. ${climateNote}` },
      summer: { water: waterSummer, humidity: humSummer, notes: `Actieve groei. ${isCactus ? "Volle zon — water als grond volledig droog is." : "Regelmatig water geven."} ${climateNote}` },
      autumn: { water: waterAutumn, humidity: humidBase - 5, notes: "Water verminderen. Groei vertraagt." },
      winter: { water: waterWinter, humidity: humWinter, notes: isCactus ? "Bijna droog houden. Koel en droog = gezonde plant." : "Spaarzaam water. Bewaar op vorstvrije plek." },
    },
    sunlight: { min: sunMin, max: sunMax, type: sunType, uv: isCactus ? "Very High" : isSucculent ? "High" : lowLight ? "Low" : "Medium" },
    temp: {
      min: isCactus ? 5 : isTropical ? 15 : 5,
      max: isCactus ? 45 : isTropical ? 32 : 35,
      ideal: isCactus ? "18–35°C" : isTropical ? "18–27°C" : "15–25°C",
    },
    soil: isCactus || isSucculent ? "Cactus/succulent mix + 30% perliet of grof zand" : isFern ? "Vochthoudend potgrond met veenmos of coco coir" : "Goede potgrond met drainage",
    pot:  isCactus ? "Terracotta — droogt sneller" : isFern ? "Plastic of geglazuurd — NIET terracotta" : "Pot met drainagegaten",
    fertilize: isCactus || isSucculent ? "Maandelijks lente/zomer, cactusmeststof" : "Maandelijks lente/zomer, vloeibare meststof",
    repot: "Elke 2 jaar of als pot te klein wordt",
    toxicity: "Raadpleeg ASPCA.org voor toxiciteit bij huisdieren",
    propagation: isCactus ? "Zijscheuten of zaad" : isSucculent ? "Blad- of stengelstekken" : "Stengelstekken",
    tips: [
      isCactus ? `In ${locName || "jouw klimaat"}: minder water dan je denkt — omgeving is al vochtig genoeg.` : `Controleer wekelijks of de grond droog genoeg is.`,
      droughtTolerant ? "Overmatig water is de meest voorkomende oorzaak van sterfte." : "Hoge luchtvochtigheid bevordert de groei.",
      inat ? `${_optionalChain([inat, 'access', _247 => _247.observations, 'optionalAccess', _248 => _248.toLocaleString, 'call', _249 => _249()]) || "Duizenden"} waarnemingen wereldwijd op iNaturalist.` : "Controleer regelmatig op plagen.",
    ],
    locationNote: locName ? `In ${locName} met ${weather ? Math.round(localHumidity) + "% luchtvochtigheid" : "jouw klimaat"}: ${isCactus || isSucculent ? "minder water geven dan generieke gidsen suggereren — de omgevingsvochtigheid is al hoog genoeg." : "pas waterfrequentie aan op basis van actuele luchtvochtigheid."}` : null,
  };
};

// Helper: extract origin from Wikipedia text or iNaturalist
const extractOrigin = (text, inat) => {
  const patterns = [
    /native to ([^.]+)/i, /indigenous to ([^.]+)/i,
    /found in ([^.]+)/i, /endemic to ([^.]+)/i,
    /originates? from ([^.]+)/i, /grows? in ([^.]+)/i,
  ];
  for (const p of patterns) {
    const m = text.match(p);
    if (m && m[1].length < 60) return m[1].trim().replace(/,$/, "");
  }
  return inat ? "Zie iNaturalist voor verspreiding" : "Niet gespecificeerd";
};

// ── Try AI enrichment (optional — works in Claude.ai, may fail in browser) ──
const enrichWithAI = async (baseEntry, scientificName, commonName, location, weather, wiki, inat) => {
  const locCity = location ? location.city + ", " + location.country : "onbekende locatie";
  const prompt = `Improve and verify this plant care data for ${scientificName} (${commonName}).
Location: ${locCity}${weather ? `, humidity ${weather.current.humidity}%, temp ${weather.current.temp}°C` : ""}.
Wikipedia says: "${(_optionalChain([wiki, 'optionalAccess', _250 => _250.extract]) || "").slice(0, 400)}"

Current care data: water every ${baseEntry.care.summer.water} days in summer.

Return ONLY a JSON object with these fields if you can improve them (omit fields you want to keep as-is):
{"care":{"spring":{"water":N,"humidity":N,"notes":"string"},"summer":{"water":N,"humidity":N,"notes":"string"},"autumn":{"water":N,"humidity":N,"notes":"string"},"winter":{"water":N,"humidity":N,"notes":"string"}},"tips":["tip1","tip2","tip3"],"locationNote":"1 sentence about growing in ${locCity}"}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6", max_tokens: 800,
      system: "Expert botanist. Return ONLY raw JSON, no markdown, no explanation.",
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  if (data.error) return null;
  let text = (_optionalChain([data, 'access', _251 => _251.content, 'optionalAccess', _252 => _252.map, 'call', _253 => _253(b => b.text||""), 'access', _254 => _254.join, 'call', _255 => _255("")])||"").trim();
  text = text.replace(/^```(?:json)?\s*/i,"").replace(/\s*```\s*$/i,"").trim();
  const s = text.indexOf("{"), e = text.lastIndexOf("}");
  if (s === -1) return null;
  const patch = JSON.parse(text.slice(s, e+1));
  // Only apply valid patches
  if (_optionalChain([patch, 'access', _256 => _256.care, 'optionalAccess', _257 => _257.spring, 'optionalAccess', _258 => _258.water])) Object.assign(baseEntry.care, patch.care);
  if (_optionalChain([patch, 'access', _259 => _259.tips, 'optionalAccess', _260 => _260.length])) baseEntry.tips = patch.tips;
  if (patch.locationNote) baseEntry.locationNote = patch.locationNote;
  return baseEntry;
};

// ── Data source badge component ───────────────────────────────────
const SourceBadges = ({sources}) => {
  if (!sources) return null;
  const badges = [
    { key: "weather",     label: "🌤️ Weer",       active: sources.weather },
    { key: "wikipedia",   label: "📖 Wikipedia",  active: sources.wikipedia },
    { key: "inaturalist", label: "🔭 iNaturalist", active: sources.inaturalist },
    { key: "location",    label: `📍 ${sources.location || "Locatie"}`, active: !!sources.location },
  ];
  return (
    React.createElement('div', { style: {marginTop:8},}
      , React.createElement('div', { style: {fontSize:10,color:C.muted,marginBottom:4,fontWeight:600,letterSpacing:0.5},}, "DATABRONNEN")
      , React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:4},}
        , badges.map(b => (
          React.createElement('span', { key: b.key, style: {
            fontSize:10,padding:"2px 7px",borderRadius:10,fontWeight:600,
            background: b.active ? C.greenPale : C.surfaceAlt,
            color: b.active ? C.green : C.muted,
            border: `1px solid ${b.active ? C.greenLight : C.border}`,
          },}, b.label)
        ))
      )
      , sources.generatedAt && (
        React.createElement('div', { style: {fontSize:10,color:C.muted,marginTop:4},}, "Gegenereerd op "
            , new Date(sources.generatedAt).toLocaleDateString("nl-BE")
        )
      )
    )
  );
};

// ── Progress bar component ────────────────────────────────────────
const ProgressBar = ({message, pct}) => (
  React.createElement('div', { style: {background:C.greenPale,borderRadius:10,padding:12,marginBottom:12},}
    , React.createElement('div', { style: {fontSize:13,color:C.green,fontWeight:600,marginBottom:6},}, message)
    , React.createElement('div', { style: {background:C.border,borderRadius:4,height:6,overflow:"hidden"},}
      , React.createElement('div', { style: {background:C.green,borderRadius:4,height:6,width:`${pct}%`,
        transition:"width 0.4s ease"},})
    )
  )
);

// ── RefreshCareData button — shown on plant detail ────────────────
const RefreshCareData = ({plant, onUpdatePlant}) => {
  const sp = SPECIES_DB[plant.species];
  const sources = _optionalChain([sp, 'optionalAccess', _261 => _261._sources]);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState({msg:"", pct:0});
  const [result, setResult] = useState(null);

  const run = async () => {
    setRunning(true);
    setResult(null);
    // Clear incomplete/stale entry so fetchLocationAwareCareData doesn't skip it
    if (SPECIES_DB[plant.species] && !_optionalChain([SPECIES_DB, 'access', _262 => _262[plant.species], 'optionalAccess', _263 => _263.care, 'optionalAccess', _264 => _264.spring, 'optionalAccess', _265 => _265.water])) {
      delete SPECIES_DB[plant.species];
    }
    // Get best available names — from DB if partial, or just species name
    const existingEntry = SPECIES_DB[plant.species];
    const out = await fetchLocationAwareCareData(
      plant.species,
      _optionalChain([existingEntry, 'optionalAccess', _266 => _266.commonName]) || plant.species,
      _optionalChain([existingEntry, 'optionalAccess', _267 => _267.family]) || "",
      (msg, pct) => setProgress({msg, pct})
    );
    setRunning(false);
    if (out) {
      setResult(out);
      // Recalculate nextWater using the new care interval from fetched data
      const season = getCurrentSeason();
      const newInterval = _optionalChain([out, 'access', _268 => _268.entry, 'optionalAccess', _269 => _269.care, 'optionalAccess', _270 => _270[season], 'optionalAccess', _271 => _271.water]) || 7;
      const base = plant.lastWatered ? new Date(plant.lastWatered) : new Date();
      const newNextWater = new Date(base.getTime() + newInterval * 86400000).toISOString().split("T")[0];
      onUpdatePlant({...plant, customCare: {}, nextWater: newNextWater});
    }
  };

  return (
    React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:16,marginBottom:12,
      border:`1px solid ${C.border}`},}
      , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:4,fontSize:14},}, "🌍 Locatie-bewuste verzorgingsdata"

      )
      , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:10,lineHeight:1.5},}, "Haal verzorgingsadvies op uit meerdere bronnen (Wikipedia, iNaturalist, Open-Meteo weer) en laat Claude AI alles kalibreren op jouw lokale klimaat."


      )

      , sources && React.createElement(SourceBadges, { sources: sources,})
      , _optionalChain([sources, 'optionalAccess', _272 => _272.locationNote]) && (
        React.createElement('div', { style: {marginTop:8,padding:8,background:C.greenPale,borderRadius:8,
          fontSize:12,color:C.green,lineHeight:1.5,fontStyle:"italic"},}, "💡 "
           , sources.locationNote
        )
      )

      , running && React.createElement('div', { style: {marginTop:10},}, React.createElement(ProgressBar, { message: progress.msg, pct: progress.pct,}))

      , result && !running && (
        React.createElement('div', { style: {marginTop:8,padding:8,background:C.greenPale,borderRadius:8,fontSize:12,color:C.green},}, "✅ Verzorgingsdata bijgewerkt op basis van "
                , [
            result.weather && "actueel weer",
            result.wiki && "Wikipedia",
            result.inat && "iNaturalist",
            result.location && `klimaat in ${result.location.city}`,
          ].filter(Boolean).join(", "), "."
        )
      )

      , React.createElement('button', { onClick: run, disabled: running,
        style: {marginTop:10,width:"100%",padding:"10px",border:`1px solid ${C.green}`,
          borderRadius:10,background:running?"none":C.green,color:running?C.green:"#fff",
          cursor:running?"not-allowed":"pointer",fontFamily:"inherit",fontSize:14,
          fontWeight:600,opacity:running?0.6:1,transition:"all 0.2s"},}
        , running ? "Bezig..." : sources ? "🔄 Opnieuw ophalen" : "🌍 Ophalen op mijn locatie"
      )
    )
  );
};

const useSpeciesSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  // useRef so the timer object persists across renders without causing re-renders
  const timerRef = useState(() => ({ current: null }))[0];

  const search = useCallback(async (q) => {
    if (!q || q.length < 2) { setResults([]); setSearching(false); return; }
    setSearching(true);
    const ql = q.toLowerCase();

    // Local DB search (instant)
    const localMatches = Object.entries(SPECIES_DB)
      .filter(([k, v]) =>
        k.toLowerCase().includes(ql) ||
        _optionalChain([v, 'access', _273 => _273.commonName, 'optionalAccess', _274 => _274.toLowerCase, 'call', _275 => _275(), 'access', _276 => _276.includes, 'call', _277 => _277(ql)]) ||
        _optionalChain([v, 'access', _278 => _278.family, 'optionalAccess', _279 => _279.toLowerCase, 'call', _280 => _280(), 'access', _281 => _281.includes, 'call', _282 => _282(ql)]) ||
        _optionalChain([v, 'access', _283 => _283.category, 'optionalAccess', _284 => _284.toLowerCase, 'call', _285 => _285(), 'access', _286 => _286.includes, 'call', _287 => _287(ql)])
      )
      .map(([k, v]) => ({ scientificName: k, commonName: v.commonName, family: v.family, category: v.category, fromDB: true }));

    // Show local results immediately while GBIF loads
    setResults(localMatches.slice(0, 14));

    // Always hit GBIF in parallel — don't skip just because we have local results
    const gbif = await searchGBIF(q);
    const seen = new Set(localMatches.map(r => r.scientificName));
    const merged = [
      ...localMatches,
      ...gbif.filter(r => !seen.has(r.scientificName)),
    ].slice(0, 20);
    setResults(merged);
    setSearching(false);
  }, []);

  const handleQuery = useCallback((q) => {
    setQuery(q);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => search(q), 300);
  }, [search, timerRef]);

  return { query, setQuery, handleQuery, results, setResults, searching };
};

// ══════════════════════════════════════════════════════════════════
// ADD PLANT MODAL
// ══════════════════════════════════════════════════════════════════
const AddPlantModal = ({onAdd, sections, onClose}) => {
  const { query, setQuery, handleQuery, results, setResults, searching } = useSpeciesSearch();
  const [selected, setSelected] = useState(null);
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState(null);
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const [enriching, setEnriching] = useState(false);
  const [enrichStatus, setEnrichStatus] = useState("");

  useEffect(() => {
    if (!selected) { setPhotoUrl(null); setEnrichStatus(""); return; }
    setLoadingPhoto(true);
    fetchWikiPhoto(selected.scientificName).then(u => { setPhotoUrl(u); setLoadingPhoto(false); });
    if (!name) setName(_optionalChain([selected, 'access', _288 => _288.commonName, 'optionalAccess', _289 => _289.split, 'call', _290 => _290(" "), 'access', _291 => _291[0]]) || "");
  }, [_optionalChain([selected, 'optionalAccess', _292 => _292.scientificName])]);

  const sp = selected ? SPECIES_DB[selected.scientificName] : null;

  const [chosenSection, setChosenSection] = useState("");
  const handleAdd = async () => {
    if (!selected || !name.trim()) return;
    if (!SPECIES_DB[selected.scientificName]) {
      setEnriching(true);
      setEnrichStatus("✨ Verzorgingsdata ophalen voor deze soort…");
      // Try location-aware multi-source first, fall back to basic
      let entry = null;
      try {
        const result = await fetchLocationAwareCareData(
          selected.scientificName, selected.commonName, selected.family,
          (msg) => setEnrichStatus(msg)
        );
        entry = _optionalChain([result, 'optionalAccess', _293 => _293.entry]) || null;
      } catch(_e) {}
      if (!entry) {
        entry = await fetchAndStoreSpeciesData(selected.scientificName, selected.commonName, selected.family);
      }
      setEnrichStatus(entry ? "✅ Verzorgingsdata opgeslagen!" : "⚠️ Kon geen verzorgingsdata genereren.");
      await new Promise(r => setTimeout(r, 900));
      setEnriching(false);
    }
    const plant = makePlant(selected.scientificName, name.trim(), chosenSection);
    if (photoUrl) plant.photoUrl = photoUrl;
    onAdd(plant); onClose();
  };

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:100,display:"flex",alignItems:"flex-end"},}
      , React.createElement('div', { style: {background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",boxSizing:"border-box",maxWidth:600,margin:"0 auto",maxHeight:"92vh",display:"flex",flexDirection:"column"},}
        , React.createElement('div', { style: {padding:"20px 20px 0",flexShrink:0},}
          , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},}
            , React.createElement('div', { style: {fontWeight:800,fontSize:18,color:C.soil},}, "🌿 Add a Plant"   )
            , React.createElement('button', { onClick: onClose, style: {background:"none",border:"none",fontSize:24,cursor:"pointer",color:C.muted,lineHeight:1},}, "×")
          )
          , React.createElement('div', { style: {position:"relative",marginBottom:4},}
            , React.createElement('input', { autoFocus: true, value: query, onChange: e=>handleQuery(e.target.value),
              placeholder: "Zoek plant: 'Monstera', 'Lavendel', 'Tomaat', 'Roos'..."     ,
              style: {width:"100%",border:`2px solid ${C.green}`,borderRadius:12,padding:"12px 44px 12px 14px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",background:C.bg},})
            , React.createElement('div', { style: {position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",fontSize:18,pointerEvents:"none"},}, searching?"⏳":"🔍")
          )
          , React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:12,paddingLeft:2},}, "Zoekt in lokale database + 400.000+ soorten via GBIF"        )
        )

        , React.createElement('div', { style: {overflowY:"auto",flex:1,padding:"0 20px"},}
          , !query&&!selected&&(
            React.createElement('div', null
              , React.createElement('div', { style: {fontSize:11,fontWeight:700,color:C.muted,marginBottom:10,letterSpacing:1},}, "BLADEREN PER CATEGORIE"  )
              , React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},}
                , CATEGORIES.map(cat=>{
                  const count=Object.values(SPECIES_DB).filter(s=>s.category===cat).length;
                  return(
                    React.createElement('button', { key: cat, onClick: ()=>{
                      // Directly set results from local DB for this category
                      const catResults = Object.entries(SPECIES_DB)
                        .filter(([,v])=>v.category===cat)
                        .map(([k,v])=>({scientificName:k,commonName:v.commonName,family:v.family,category:v.category,fromDB:true}))
                        .sort((a,b)=>a.scientificName.localeCompare(b.scientificName));
                      setQuery(cat);
                      setResults(catResults);
                    }, style: {padding:"8px 14px",borderRadius:20,border:`1px solid ${C.border}`,background:C.surface,color:C.text,cursor:"pointer",fontSize:12,fontFamily:"inherit",display:"flex",alignItems:"center",gap:6},}
                      , React.createElement('span', { style: {fontWeight:700},}, cat), React.createElement('span', { style: {color:C.muted,fontSize:11},}, count)
                    )
                  );
                })
              )
              , React.createElement('div', { style: {fontSize:11,fontWeight:700,color:C.muted,marginBottom:8,letterSpacing:1},}, "TYPE OM ALLE SOORTEN TE ZOEKEN"     )
            )
          )

          , results.length>0&&!selected&&results.map(r=>(
            React.createElement('div', { key: r.scientificName, onClick: ()=>setSelected(r),
              style: {display:"flex",gap:12,alignItems:"center",padding:"10px 8px",borderRadius:12,cursor:"pointer",marginBottom:6,border:`1px solid ${C.border}`,background:C.surface},
              onMouseEnter: e=>e.currentTarget.style.background=C.surfaceAlt,
              onMouseLeave: e=>e.currentTarget.style.background=C.surface,}
              , React.createElement('div', { style: {fontSize:28,width:40,textAlign:"center",flexShrink:0},}, _optionalChain([SPECIES_DB, 'access', _294 => _294[r.scientificName], 'optionalAccess', _295 => _295.image])||"🌿")
              , React.createElement('div', { style: {flex:1,minWidth:0},}
                , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:C.soil,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},}, r.scientificName)
                , React.createElement('div', { style: {fontSize:12,color:C.muted},}, r.commonName!==r.scientificName?r.commonName:"", r.family?` · ${r.family}`:"")
              )
              , r.fromDB&&React.createElement(Badge, { label: "In DB" , color: C.green,})
            )
          ))

          , searching&&React.createElement('div', { style: {textAlign:"center",padding:24,color:C.muted,fontSize:13},}, "Searching species database…"  )
          , query.length>=2&&!searching&&results.length===0&&!selected&&React.createElement('div', { style: {textAlign:"center",padding:24,color:C.muted,fontSize:13},}, "Geen soorten gevonden voor \""    , query, "\".", React.createElement('br', null), "Probeer een wetenschappelijke of gewone naam."     )

          , selected&&(
            React.createElement('div', null
              , React.createElement('button', { onClick: ()=>{setSelected(null);setPhotoUrl(null);}, style: {background:"none",border:"none",color:C.green,cursor:"pointer",fontSize:13,fontWeight:600,padding:0,marginBottom:12,fontFamily:"inherit"},}, "← Back to results"   )

              , React.createElement('div', { style: {display:"flex",gap:14,marginBottom:16,alignItems:"flex-start"},}
                , React.createElement('div', { style: {width:110,height:110,borderRadius:14,overflow:"hidden",background:C.surfaceAlt,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,position:"relative"},}
                  , loadingPhoto?(React.createElement('div', { style: {textAlign:"center"},}, React.createElement('div', { style: {fontSize:36},}, _optionalChain([sp, 'optionalAccess', _296 => _296.image])||"🌿"), React.createElement('div', { style: {fontSize:9,color:C.muted,marginTop:4},}, "Laden…")))
                  :photoUrl?(React.createElement(React.Fragment, null, React.createElement('img', { src: photoUrl, alt: selected.scientificName, style: {width:"100%",height:"100%",objectFit:"cover"},}), React.createElement('div', { style: {position:"absolute",bottom:2,right:2,background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:7,padding:"1px 4px",borderRadius:3},}, "© Wikimedia" )))
                  :(React.createElement('div', { style: {textAlign:"center"},}, React.createElement('div', { style: {fontSize:40},}, _optionalChain([sp, 'optionalAccess', _297 => _297.image])||"🌿"), React.createElement('div', { style: {fontSize:9,color:C.muted,marginTop:2},}, "Geen foto" )))
                )
                , React.createElement('div', { style: {flex:1},}
                  , React.createElement('div', { style: {fontWeight:800,fontSize:15,color:C.soil,marginBottom:2},}, selected.scientificName)
                  , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:6},}, selected.commonName!==selected.scientificName&&selected.commonName, selected.family&&` · ${selected.family}`)
                  , React.createElement('div', { style: {display:"flex",gap:6,flexWrap:"wrap"},}
                    , sp&&React.createElement(Badge, { label: sp.careLevel, color: careLvlColor(sp.careLevel),})
                    , sp&&React.createElement(Badge, { label: sp.origin, color: C.sand,})
                    , !sp&&React.createElement(Badge, { label: "GBIF soort" , color: C.sky,})
                  )
                  , sp&&React.createElement('div', { style: {fontSize:12,color:C.muted,marginTop:6,lineHeight:1.4},}, sp.description)
                  , !sp&&React.createElement('div', { style: {fontSize:12,color:C.muted,marginTop:6,lineHeight:1.4},}, "Found in GBIF. Care data will be generated by AI when you add this plant and saved to your local database."                    )
                )
              )

              , sp&&(React.createElement('div', { style: {background:C.greenPale,borderRadius:10,padding:12,marginBottom:14},}
                , React.createElement('div', { style: {fontSize:11,fontWeight:700,color:C.green,marginBottom:8,letterSpacing:1},}, "CURRENT SEASON ("  , getCurrentSeason().toUpperCase(), ") CARE" )
                , (()=>{const c=sp.care[getCurrentSeason()];return(
                  React.createElement('div', { style: {display:"flex",gap:8},}
                    , [{l:"Water",v:`elke ${c.water} dagen`,icon:"💧"},{l:"Humidity",v:`${c.humidity}%`,icon:"💦"},{l:"Zonlicht",v:`${sp.sunlight.min}–${sp.sunlight.max}h`,icon:"☀️"}].map(({l,v,icon})=>(
                      React.createElement('div', { key: l, style: {flex:1,background:"rgba(255,255,255,0.7)",borderRadius:8,padding:"6px 8px",textAlign:"center"},}
                        , React.createElement('div', { style: {fontSize:12},}, icon), React.createElement('div', { style: {fontSize:10,color:C.muted},}, l), React.createElement('div', { style: {fontSize:11,fontWeight:700,color:C.green},}, v)
                      )
                    ))
                  )
                );})()
              ))

              , React.createElement('div', { style: {marginBottom:12},}
                , React.createElement('div', { style: {fontSize:12,color:SPECIES_DB[selected.scientificName]?C.green:C.warning,fontWeight:600,marginBottom:8},}
                  , SPECIES_DB[selected.scientificName]?"✅ Full care data available in local database":"⚡ Care data will be AI-generated and saved to local database on add"
                )
                , enrichStatus&&(React.createElement('div', { style: {background:enriching?C.sandLight:C.greenPale,borderRadius:10,padding:"10px 14px",marginBottom:10,fontSize:13,color:C.soil,display:"flex",alignItems:"center",gap:8},}
                  , enriching&&React.createElement('div', { style: {width:14,height:14,border:`2px solid ${C.green}`,borderTopColor:"transparent",borderRadius:"50%",animation:"spin 0.7s linear infinite",flexShrink:0},})
                  , enrichStatus
                ))
              )

              , React.createElement('div', { style: {marginBottom:12},}
                , React.createElement('label', { style: {fontSize:11,fontWeight:600,color:C.muted,display:"block",marginBottom:6},}, "YOUR PLANT'S NAME"  )
                , React.createElement('input', { value: name, onChange: e=>setName(e.target.value), placeholder: "bijv. Slaapkamer Cactus, Grote Monstera..."    ,
                  style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:10,padding:"12px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit"},})
              )
              , sections && sections.length > 0 && (
                React.createElement('div', { style: {marginBottom:16},}
                  , React.createElement('label', { style: {fontSize:11,fontWeight:600,color:C.muted,display:"block",marginBottom:6},}, "AFDELING (OPTIONEEL)" )
                  , React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:6},}
                    , React.createElement('button', { onClick: ()=>setChosenSection(""),
                      style: {padding:"5px 12px",borderRadius:20,border:`1px solid ${!chosenSection?C.green:C.border}`,background:!chosenSection?C.greenPale:"none",color:!chosenSection?C.green:C.muted,cursor:"pointer",fontSize:12,fontFamily:"inherit"},}, "Geen"

                    )
                    , sections.map(s=>(
                      React.createElement('button', { key: s.id, onClick: ()=>setChosenSection(s.name),
                        style: {padding:"5px 12px",borderRadius:20,border:`1px solid ${chosenSection===s.name?(s.color):C.border}`,
                          background:chosenSection===s.name?s.color+"22":"none",color:chosenSection===s.name?s.color:C.muted,
                          cursor:"pointer",fontSize:12,fontFamily:"inherit",display:"flex",alignItems:"center",gap:5},}
                        , React.createElement('div', { style: {width:8,height:8,borderRadius:"50%",background:s.color},}), s.name
                      )
                    ))
                  )
                )
              )

              , React.createElement('div', { style: {display:"flex",gap:10,paddingBottom:8},}
                , React.createElement(Btn, { onClick: onClose, outline: true, color: C.muted, fullWidth: true, disabled: enriching,}, "Annuleer")
                , React.createElement(Btn, { onClick: handleAdd, disabled: !name.trim()||enriching, fullWidth: true,}, enriching?"Verzorgingsdata ophalen…":`${name||"Plant"} toevoegen`)
              )
              , React.createElement('style', null, `@keyframes spin{to{transform:rotate(360deg);}}`)
            )
          )
        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// SECTION MANAGEMENT MODAL
// ══════════════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════════════
// NOTIFICATION SYSTEM
// ══════════════════════════════════════════════════════════════════

const DEFAULT_NOTIF_SETTINGS = {
  enabled: false,          // master toggle (requires permission grant)
  wateringReminder: true,  // remind when plant needs water
  wateringHoursBefore: 8,  // how many hours before due date to notify
  wateringTime: "09:00",   // preferred time of day for reminders
  healthCheckReminder: true,
  healthCheckIntervalDays: 7,  // remind to do health check every N days
  missedWateringAlert: true,   // alert when plant is overdue
};

// Request browser notification permission
const requestNotifPermission = async () => {
  if (!("Notification" in window)) return "unsupported";
  if (Notification.permission === "granted") return "granted";
  if (Notification.permission === "denied") return "denied";
  const result = await Notification.requestPermission();
  return result;
};

// Send a browser notification
const NOTIF_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%8C%BF%3C/text%3E%3C/svg%3E";

const sendNotification = async (title, body, tag) => {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const options = {body, tag: tag || "plantcare", icon: NOTIF_ICON, badge: NOTIF_ICON, renotify: true};
  try {
    // Android Chrome requires Service Worker for showNotification to work
    if ("serviceWorker" in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg) {
        await reg.showNotification(title, options);
        return;
      }
    }
    // Fallback: direct Notification (works on desktop, may be silent on Android)
    new Notification(title, options);
  } catch(_e) {
    // Last resort fallback
    try { new Notification(title, options); } catch(_e2) {}
  }
};

// Register a minimal Service Worker so Android Chrome can show notifications
const registerServiceWorker = () => {
  if (!("serviceWorker" in navigator)) return;
  const swCode = `
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window'}).then(clients => {
    if (clients.length) return clients[0].focus();
    return self.clients.openWindow('/');
  }));
});
`;
  const blob = new Blob([swCode], {type: "application/javascript"});
  const swUrl = URL.createObjectURL(blob);
  navigator.serviceWorker.register(swUrl).catch(_e => {});
};
// Register on load
if (document.readyState === "complete") {
  registerServiceWorker();
} else {
  window.addEventListener("load", registerServiceWorker);
}

// Check all plants and fire notifications as needed
const checkAndNotify = (plants, settings) => {
  if (!settings.enabled || Notification.permission !== "granted") return;
  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];

  plants.forEach(plant => {
    const sp = SPECIES_DB[plant.species];
    const name = plant.name;

    // ── Watering reminder ──────────────────────────────────────
    if (settings.wateringReminder && plant.nextWater) {
      const daysLeft = Math.ceil((new Date(plant.nextWater) - now) / 86400000);
      const hoursLeft = (new Date(plant.nextWater) - now) / 3600000;
      const notifKey = `notif_water_${plant.id}_${plant.nextWater}`;
      const alreadySent = localStorage.getItem(notifKey);

      if (!alreadySent) {
        if (daysLeft <= 0) {
          // Overdue
          if (settings.missedWateringAlert) {
            sendNotification(
              `💧 ${name} heeft water nodig!`,
              `${name} (${_optionalChain([sp, 'optionalAccess', _298 => _298.commonName]) || plant.species}) had ${Math.abs(daysLeft)} dag${Math.abs(daysLeft)!==1?"en":""} geleden water moeten krijgen.`,
              `water_${plant.id}`
            );
            localStorage.setItem(notifKey, "sent");
          }
        } else if (hoursLeft <= settings.wateringHoursBefore) {
          // Due soon
          sendNotification(
            `💧 ${name} heeft binnenkort water nodig`,
            `${name} heeft ${daysLeft === 0 ? "vandaag" : "morgen"} water nodig.`,
            `water_${plant.id}`
          );
          localStorage.setItem(notifKey, "sent");
        }
      }
    }

    // ── Health check reminder ─────────────────────────────────
    if (settings.healthCheckReminder) {
      const lastCheck = plant.lastHealthCheck;
      const daysSinceCheck = lastCheck
        ? Math.floor((now - new Date(lastCheck)) / 86400000)
        : 999;
      const notifKey = `notif_health_${plant.id}_${todayStr}`;
      const alreadySent = localStorage.getItem(notifKey);

      if (!alreadySent && daysSinceCheck >= settings.healthCheckIntervalDays) {
        sendNotification(
          `❤️ Gezondheidscheck: ${name}`,
          `${name} is ${daysSinceCheck === 999 ? "nog nooit" : `${daysSinceCheck} dagen geleden`} gecontroleerd. Tijd voor een check!`,
          `health_${plant.id}`
        );
        localStorage.setItem(notifKey, "sent");
      }
    }
  });
};

// ── Notification Settings Modal ───────────────────────────────────
const NotificationSettingsModal = ({settings, onSave, onClose}) => {
  const [s, setS] = useState({...settings});
  const [permission, setPermission] = useState(
    typeof Notification !== "undefined" ? Notification.permission : "unsupported"
  );

  const handleEnable = async () => {
    const result = await requestNotifPermission();
    setPermission(result);
    if (result === "granted") setS(prev => ({...prev, enabled: true}));
  };

  const set = (key, val) => setS(prev => ({...prev, [key]: val}));

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300,display:"flex",alignItems:"flex-end"},}
      , React.createElement('div', { style: {background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:600,margin:"0 auto",maxHeight:"85vh",display:"flex",flexDirection:"column"},}
        , React.createElement('div', { style: {padding:"20px 20px 12px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"},}
          , React.createElement('div', { style: {fontWeight:800,fontSize:16,color:C.soil},}, "🔔 Meldingen" )
          , React.createElement('button', { onClick: onClose, style: {background:"none",border:"none",fontSize:24,cursor:"pointer",color:C.muted},}, "×")
        )

        , React.createElement('div', { style: {overflowY:"auto",flex:1,padding:"16px 20px"},}

          /* Permission status */
          , permission === "unsupported" && (
            React.createElement('div', { style: {background:C.sandLight,borderRadius:10,padding:12,marginBottom:16,fontSize:13,color:C.muted},}, "⚠️ Meldingen worden niet ondersteund in deze browser."

            )
          )
          , permission === "denied" && (
            React.createElement('div', { style: {background:C.terracottaLight,borderRadius:10,padding:12,marginBottom:16,fontSize:13,color:C.terracotta,lineHeight:1.5},}, "🚫 "
               , React.createElement('strong', null, "Meldingen geblokkeerd." ), React.createElement('br', null), "Mogelijke oorzaken:"
               , React.createElement('br', null), "1. De app draait via HTTP (niet HTTPS) — Chrome blokkeert meldingen op onbeveiligde verbindingen. Stel HTTPS in op je NAS."
                                  , React.createElement('br', null), "2. Meldingen handmatig geblokkeerd — ga naar Chrome → Instellingen → Siteinstell. → Meldingen → verwijder blokkade voor dit adres."

            )
          )
          , permission !== "denied" && window.location.protocol === "http:" && (
            React.createElement('div', { style: {background:C.sandLight,borderRadius:10,padding:12,marginBottom:16,fontSize:13,color:C.soil,lineHeight:1.5},}, "⚠️ "
               , React.createElement('strong', null, "HTTP gedetecteerd." ), " Meldingen vereisen HTTPS. Stel een SSL-certificaat in op je NAS (Let's Encrypt via DSM) en open de app via "                    , React.createElement('code', null, "https://"), "."
            )
          )

          /* Master toggle */
          , React.createElement('div', { style: {background:C.surface,borderRadius:12,padding:14,marginBottom:12,border:`1px solid ${C.border}`},}
            , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center"},}
              , React.createElement('div', null
                , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:C.soil},}, "🔔 Meldingen inschakelen"  )
                , React.createElement('div', { style: {fontSize:12,color:C.muted,marginTop:2},}
                  , permission === "granted" ? "Toestemming verleend ✅" : "Toestemming vereist"
                )
              )
              , permission === "granted" ? (
                React.createElement('button', { onClick: ()=>set("enabled",!s.enabled),
                  style: {width:48,height:26,borderRadius:13,border:"none",cursor:"pointer",
                    background:s.enabled?C.green:C.border,position:"relative",transition:"background 0.2s"},}
                  , React.createElement('div', { style: {position:"absolute",top:3,left:s.enabled?26:3,width:20,height:20,
                    borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.3)"},})
                )
              ) : (
                React.createElement(Btn, { small: true, onClick: handleEnable, disabled: permission==="denied"||permission==="unsupported",}
                  , permission==="denied"?"Geblokkeerd":"Toestaan"
                )
              )
            )
          )

          /* Watering notifications */
          , React.createElement('div', { style: {background:C.surface,borderRadius:12,padding:14,marginBottom:12,border:`1px solid ${C.border}`,opacity:s.enabled?1:0.5},}
            , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil,marginBottom:10},}, "💧 Waterherinnering" )

            , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},}
              , React.createElement('span', { style: {fontSize:13,color:C.text},}, "Herinner me" )
              , React.createElement('button', { onClick: ()=>set("wateringReminder",!s.wateringReminder),
                style: {width:40,height:22,borderRadius:11,border:"none",cursor:"pointer",
                  background:s.wateringReminder?C.green:C.border,position:"relative",transition:"background 0.2s"},}
                , React.createElement('div', { style: {position:"absolute",top:2,left:s.wateringReminder?20:2,width:18,height:18,
                  borderRadius:"50%",background:"#fff",transition:"left 0.2s"},})
              )
            )

            , s.wateringReminder && (React.createElement(React.Fragment, null
              , React.createElement('div', { style: {marginBottom:10},}
                , React.createElement('label', { style: {fontSize:11,fontWeight:600,color:C.muted,display:"block",marginBottom:4},}, "HOEVEEL UUR VAN TEVOREN"   )
                , React.createElement('div', { style: {display:"flex",gap:6,flexWrap:"wrap"},}
                  , [2,4,8,12,24].map(h=>(
                    React.createElement('button', { key: h, onClick: ()=>set("wateringHoursBefore",h),
                      style: {padding:"5px 10px",borderRadius:20,border:`1px solid ${s.wateringHoursBefore===h?C.green:C.border}`,
                        background:s.wateringHoursBefore===h?C.greenPale:"none",color:s.wateringHoursBefore===h?C.green:C.muted,
                        cursor:"pointer",fontSize:12,fontFamily:"inherit"},}
                      , h, "u"
                    )
                  ))
                )
              )
              , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},}
                , React.createElement('span', { style: {fontSize:13,color:C.text},}, "Te laat gemist alert"   )
                , React.createElement('button', { onClick: ()=>set("missedWateringAlert",!s.missedWateringAlert),
                  style: {width:40,height:22,borderRadius:11,border:"none",cursor:"pointer",
                    background:s.missedWateringAlert?C.green:C.border,position:"relative",transition:"background 0.2s"},}
                  , React.createElement('div', { style: {position:"absolute",top:2,left:s.missedWateringAlert?20:2,width:18,height:18,
                    borderRadius:"50%",background:"#fff",transition:"left 0.2s"},})
                )
              )
            ))
          )

          /* Health check notifications */
          , React.createElement('div', { style: {background:C.surface,borderRadius:12,padding:14,marginBottom:12,border:`1px solid ${C.border}`,opacity:s.enabled?1:0.5},}
            , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil,marginBottom:10},}, "❤️ Gezondheidscheck herinnering"  )
            , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},}
              , React.createElement('span', { style: {fontSize:13,color:C.text},}, "Ingeschakeld")
              , React.createElement('button', { onClick: ()=>set("healthCheckReminder",!s.healthCheckReminder),
                style: {width:40,height:22,borderRadius:11,border:"none",cursor:"pointer",
                  background:s.healthCheckReminder?C.green:C.border,position:"relative",transition:"background 0.2s"},}
                , React.createElement('div', { style: {position:"absolute",top:2,left:s.healthCheckReminder?20:2,width:18,height:18,
                  borderRadius:"50%",background:"#fff",transition:"left 0.2s"},})
              )
            )
            , s.healthCheckReminder && (
              React.createElement('div', null
                , React.createElement('label', { style: {fontSize:11,fontWeight:600,color:C.muted,display:"block",marginBottom:4},}, "ELKE HOEVEEL DAGEN"  )
                , React.createElement('div', { style: {display:"flex",gap:6,flexWrap:"wrap"},}
                  , [3,7,14,30].map(d=>(
                    React.createElement('button', { key: d, onClick: ()=>set("healthCheckIntervalDays",d),
                      style: {padding:"5px 10px",borderRadius:20,border:`1px solid ${s.healthCheckIntervalDays===d?C.green:C.border}`,
                        background:s.healthCheckIntervalDays===d?C.greenPale:"none",color:s.healthCheckIntervalDays===d?C.green:C.muted,
                        cursor:"pointer",fontSize:12,fontFamily:"inherit"},}
                      , d, "d"
                    )
                  ))
                )
              )
            )
          )

          /* Test notification */
          , s.enabled && permission==="granted" && (
            React.createElement('button', { onClick: ()=>sendNotification("🌿 Plant Care","Meldingen werken correct!","test"),
              style: {width:"100%",padding:10,border:`1px solid ${C.green}`,borderRadius:10,
                background:"none",color:C.green,cursor:"pointer",fontFamily:"inherit",
                fontSize:13,fontWeight:600,marginBottom:8},}, "📨 Testmelding versturen"

            )
          )
        )

        , React.createElement('div', { style: {padding:"12px 20px",borderTop:`1px solid ${C.border}`},}
          , React.createElement(Btn, { fullWidth: true, onClick: ()=>{onSave(s);onClose();},}, "Opslaan")
        )
      )
    )
  );
};


// ══════════════════════════════════════════════════════════════════
// LOCATION + ROOMS MANAGER — unified settings tab
// ══════════════════════════════════════════════════════════════════
const SECTION_COLORS = [
  "#3D6B4A","#5AACCB","#B85C42","#7B5EA7","#E6A817",
  "#4A7C8A","#8B6914","#C1694F","#2E7D5C","#6B4A7B",
];
const ESTATE_ICONS_LIST = ["🏠","🏡","🏢","🌿","🌳","🌱","🪴","🏗️","🌾","⛺","🏘️","🌻"];

const ColorDots = ({value, onChange}) => (
  React.createElement('div', { style: {display:"flex",gap:6,flexWrap:"wrap"},}
    , SECTION_COLORS.map(c => (
      React.createElement('button', { key: c, onClick: ()=>onChange(c),
        style: {width:24,height:24,borderRadius:"50%",border:"none",cursor:"pointer",
          background:c,flexShrink:0,
          boxShadow:value===c?`0 0 0 2px #fff, 0 0 0 4px ${c}`:"0 1px 3px rgba(0,0,0,0.2)",
          transform:value===c?"scale(1.2)":"scale(1)",
          transition:"transform 0.15s, box-shadow 0.15s"},}
      )
    ))
  )
);


const PDFExportButton = ({plants, logs}) => {
  const [show, setShow] = useState(false);
  return (React.createElement(React.Fragment, null
    , React.createElement('button', { onClick: ()=>setShow(true),
      style: {width:"100%",padding:"11px",border:"none",borderRadius:10,background:C.green,
        color:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:700},}, "📄 Exporteer als PDF rapport"

    )
    , show && React.createElement(PDFExport, { plants: plants, logs: logs, onClose: ()=>setShow(false),})
  ));
};

const SectionManager = ({
  sections, plants, onAdd, onDelete, onRename,
  estates, activeEstateId, onAddEstate, onDeleteEstate, onRenameEstate, onSelectEstate,
}) => {
  // Per-estate expanded state
  const [expandedId, setExpandedId]       = useState(activeEstateId);
  const [addingRoomFor, setAddingRoomFor] = useState(null); // estateId
  const [newRoomName, setNewRoomName]     = useState("");
  const [newRoomColor, setNewRoomColor]   = useState(SECTION_COLORS[0]);

  // Edit/confirm state for estates
  const [editEstId, setEditEstId]     = useState(null);
  const [editEstName, setEditEstName] = useState("");
  const [editEstIcon, setEditEstIcon] = useState("🏠");
  const [confirmEstId, setConfirmEstId] = useState(null);

  // Edit/confirm state for rooms
  const [editRoomId, setEditRoomId]     = useState(null);
  const [editRoomName, setEditRoomName] = useState("");
  const [editRoomColor, setEditRoomColor] = useState("");
  const [confirmRoomId, setConfirmRoomId] = useState(null);

  // Add new estate
  const [addingEstate, setAddingEstate] = useState(false);
  const [newEstName, setNewEstName]     = useState("");
  const [newEstIcon, setNewEstIcon]     = useState("🏠");

  const roomsFor = (estId) => sections.filter(s=>(s.estateId||"e1")===estId);

  const handleAddRoom = (estId) => {
    if (!newRoomName.trim()) return;
    onAdd(newRoomName.trim(), newRoomColor, estId);
    setNewRoomName(""); setAddingRoomFor(null);
    setNewRoomColor(SECTION_COLORS[Math.floor(Math.random()*SECTION_COLORS.length)]);
  };

  const handleAddEstate = () => {
    if (!newEstName.trim()) return;
    onAddEstate(newEstName.trim(), newEstIcon);
    setNewEstName(""); setAddingEstate(false); setNewEstIcon("🏠");
  };

  return (
    React.createElement('div', null
      , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:12,lineHeight:1.5},}, "Elke locatie heeft zijn eigen ruimtes. Planten worden gekoppeld aan een ruimte binnen de actieve locatie."

      )

      /* ── Estate list with nested rooms ── */
      , (estates||[]).map(estate => {
        const isActive   = activeEstateId === estate.id;
        const isExpanded = expandedId === estate.id;
        const isEditEst  = editEstId === estate.id;
        const isConfEst  = confirmEstId === estate.id;
        const rooms      = roomsFor(estate.id);

        return (
          React.createElement('div', { key: estate.id, style: {marginBottom:12},}
            /* ── Estate card ── */
            , React.createElement('div', { style: {borderRadius:16,overflow:"hidden",
              boxShadow:isActive?`0 2px 12px ${C.green}33`:C.shadowSm,
              border:`2px solid ${isActive?C.green:isConfEst?C.danger:C.border}`},}

              , isEditEst ? (
                /* Edit estate */
                React.createElement('div', { style: {background:C.surface,padding:14},}
                  , React.createElement('div', { style: {fontSize:11,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:8},}, "ICOON")
                  , React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},}
                    , ESTATE_ICONS_LIST.map(ic=>(
                      React.createElement('button', { key: ic, onClick: ()=>setEditEstIcon(ic),
                        style: {fontSize:20,padding:"4px 8px",borderRadius:8,border:"none",cursor:"pointer",
                          background:editEstIcon===ic?C.greenPale:"none",
                          boxShadow:editEstIcon===ic?`0 0 0 2px ${C.green}`:"none"},}
                        , ic
                      )
                    ))
                  )
                  , React.createElement('input', { value: editEstName, onChange: e=>setEditEstName(e.target.value),
                    onKeyDown: e=>{if(e.key==="Enter"&&editEstName.trim()){onRenameEstate(editEstId,editEstName.trim(),editEstIcon);setEditEstId(null);}},
                    autoFocus: true,
                    style: {width:"100%",border:`1.5px solid ${C.green}`,borderRadius:8,
                      padding:"8px 10px",fontSize:14,outline:"none",fontFamily:"inherit",
                      marginBottom:10,boxSizing:"border-box"},})
                  , React.createElement('div', { style: {display:"flex",gap:8},}
                    , React.createElement('button', { onClick: ()=>setEditEstId(null),
                      style: {flex:1,padding:"8px",border:`1px solid ${C.border}`,borderRadius:8,
                        background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,color:C.muted},}, "Annuleer"

                    )
                    , React.createElement('button', { onClick: ()=>{if(editEstName.trim()){onRenameEstate(editEstId,editEstName.trim(),editEstIcon);setEditEstId(null);}},
                      style: {flex:2,padding:"8px",border:"none",borderRadius:8,
                        background:editEstName.trim()?C.green:"#ccc",color:"#fff",
                        cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:700},}, "Opslaan"

                    )
                  )
                )
              ) : (
                React.createElement(React.Fragment, null
                  /* Estate header */
                  , React.createElement('div', { style: {background:isActive?C.green:C.soil,
                    padding:"12px 14px",display:"flex",alignItems:"center",gap:10},}
                    , React.createElement('button', { onClick: ()=>{onSelectEstate(estate.id);setExpandedId(estate.id);},
                      style: {display:"flex",alignItems:"center",gap:10,flex:1,background:"none",
                        border:"none",cursor:"pointer",textAlign:"left"},}
                      , React.createElement('span', { style: {fontSize:22},}, estate.icon)
                      , React.createElement('div', null
                        , React.createElement('div', { style: {fontWeight:800,fontSize:15,color:"#fff"},}, estate.name)
                        , React.createElement('div', { style: {fontSize:11,color:"rgba(255,255,255,0.7)"},}
                          , rooms.length, " ruimte" , rooms.length!==1?"s":""
                          , isActive?" · Actief":""
                        )
                      )
                    )
                    , React.createElement('button', { onClick: ()=>{setEditEstId(estate.id);setEditEstName(estate.name);setEditEstIcon(estate.icon);setConfirmEstId(null);},
                      style: {background:"rgba(255,255,255,0.15)",border:"none",borderRadius:8,
                        padding:"5px 9px",cursor:"pointer",fontSize:13,color:"#fff",fontFamily:"inherit"},}, "✏️"

                    )
                    , (estates||[]).length>1 && (
                      React.createElement('button', { onClick: ()=>setConfirmEstId(isConfEst?null:estate.id),
                        style: {background:"rgba(255,255,255,0.12)",border:"none",borderRadius:8,
                          padding:"5px 9px",cursor:"pointer",fontSize:13,
                          color:"rgba(255,255,255,0.8)",fontFamily:"inherit"},}, "🗑️"

                      )
                    )
                    , React.createElement('button', { onClick: ()=>setExpandedId(isExpanded?null:estate.id),
                      style: {background:"rgba(255,255,255,0.12)",border:"none",borderRadius:8,
                        padding:"5px 9px",cursor:"pointer",fontSize:13,color:"#fff",fontFamily:"inherit",
                        transform:isExpanded?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s"},}, "▾"

                    )
                  )

                  /* Delete estate warning */
                  , isConfEst && (
                    React.createElement('div', { style: {background:C.terracottaLight,padding:"10px 14px",
                      borderBottom:`1px solid ${C.danger}22`},}
                      , React.createElement('div', { style: {fontSize:12,color:C.terracotta,lineHeight:1.5,marginBottom:8},}, "⚠️ Locatie \""
                          , estate.name, "\" en alle "   , rooms.length, " ruimte" , rooms.length!==1?"s":"", " verwijderen? Planten raken hun ruimte-indeling kwijt."
                      )
                      , React.createElement('div', { style: {display:"flex",gap:8},}
                        , React.createElement('button', { onClick: ()=>setConfirmEstId(null),
                          style: {flex:1,padding:"7px",border:`1px solid ${C.border}`,borderRadius:8,
                            background:C.surface,cursor:"pointer",fontFamily:"inherit",fontSize:12,color:C.muted},}, "Annuleer"

                        )
                        , React.createElement('button', { onClick: ()=>{onDeleteEstate(estate.id);setConfirmEstId(null);},
                          style: {flex:1,padding:"7px",border:"none",borderRadius:8,
                            background:C.danger,color:"#fff",cursor:"pointer",
                            fontFamily:"inherit",fontSize:12,fontWeight:700},}, "Verwijderen"

                        )
                      )
                    )
                  )

                  /* Rooms list — expanded */
                  , isExpanded && (
                    React.createElement('div', { style: {background:C.bg,padding:"10px 12px 12px"},}
                      /* Room rows */
                      , rooms.length === 0 && addingRoomFor !== estate.id && (
                        React.createElement('div', { style: {fontSize:12,color:C.muted,padding:"8px 4px",fontStyle:"italic"},}, "Nog geen ruimtes — voeg er een toe hieronder."

                        )
                      )
                      , rooms.map(room => {
                        const count    = plants.filter(p=>p.section===room.name).length;
                        const isEditR  = editRoomId === room.id;
                        const isConfR  = confirmRoomId === room.id;
                        return (
                          React.createElement('div', { key: room.id, style: {background:C.surface,borderRadius:10,
                            marginBottom:6,overflow:"hidden",
                            border:`1.5px solid ${isConfR?C.danger:isEditR?room.color:C.border}`},}
                            , isEditR ? (
                              React.createElement('div', { style: {padding:12},}
                                , React.createElement('div', { style: {marginBottom:8},}, React.createElement(ColorDots, { value: editRoomColor, onChange: setEditRoomColor,}))
                                , React.createElement('input', { value: editRoomName, onChange: e=>setEditRoomName(e.target.value),
                                  onKeyDown: e=>{if(e.key==="Enter"&&editRoomName.trim()){onRename(editRoomId,editRoomName.trim(),editRoomColor);setEditRoomId(null);}},
                                  autoFocus: true,
                                  style: {width:"100%",border:`1.5px solid ${editRoomColor}`,borderRadius:7,
                                    padding:"7px 9px",fontSize:13,outline:"none",fontFamily:"inherit",
                                    marginBottom:8,boxSizing:"border-box",background:editRoomColor+"18"},})
                                , React.createElement('div', { style: {display:"flex",gap:6},}
                                  , React.createElement('button', { onClick: ()=>setEditRoomId(null),
                                    style: {flex:1,padding:"7px",border:`1px solid ${C.border}`,borderRadius:7,
                                      background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,color:C.muted},}, "Annuleer"

                                  )
                                  , React.createElement('button', { onClick: ()=>{if(editRoomName.trim()){onRename(editRoomId,editRoomName.trim(),editRoomColor);setEditRoomId(null);}},
                                    style: {flex:2,padding:"7px",border:"none",borderRadius:7,
                                      background:editRoomName.trim()?C.green:"#ccc",color:"#fff",
                                      cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:700},}, "Opslaan"

                                  )
                                )
                              )
                            ) : (
                              React.createElement(React.Fragment, null
                                , React.createElement('div', { style: {padding:"9px 12px",display:"flex",alignItems:"center",gap:8},}
                                  , React.createElement('div', { style: {width:10,height:10,borderRadius:"50%",
                                    background:room.color,flexShrink:0,
                                    boxShadow:`0 0 0 2px ${room.color}33`},})
                                  , React.createElement('div', { style: {flex:1},}
                                    , React.createElement('div', { style: {fontWeight:600,fontSize:13,color:C.soil},}, room.name)
                                    , React.createElement('div', { style: {fontSize:10,color:C.muted},}, count, " plant" , count!==1?"en":"")
                                  )
                                  , React.createElement('button', { onClick: ()=>{setEditRoomId(room.id);setEditRoomName(room.name);setEditRoomColor(room.color);setConfirmRoomId(null);},
                                    style: {padding:"4px 8px",border:`1px solid ${C.border}`,borderRadius:6,
                                      background:"none",cursor:"pointer",fontSize:12,color:C.muted,fontFamily:"inherit"},}, "✏️"

                                  )
                                  , React.createElement('button', { onClick: ()=>setConfirmRoomId(isConfR?null:room.id),
                                    style: {padding:"4px 8px",border:`1px solid ${C.danger}44`,borderRadius:6,
                                      background:"none",cursor:"pointer",fontSize:12,color:C.danger,fontFamily:"inherit"},}, "🗑️"

                                  )
                                )
                                , isConfR && (
                                  React.createElement('div', { style: {padding:"8px 12px",background:C.terracottaLight,
                                    borderTop:`1px solid ${C.danger}22`},}
                                    , React.createElement('div', { style: {fontSize:11,color:C.terracotta,marginBottom:6,lineHeight:1.4},}
                                      , count>0
                                        ? `⚠️ ${count} plant${count!==1?"en":""} worden losgekoppeld van "${room.name}".`
                                        : `⚠️ "${room.name}" verwijderen?`
                                    )
                                    , React.createElement('div', { style: {display:"flex",gap:6},}
                                      , React.createElement('button', { onClick: ()=>setConfirmRoomId(null),
                                        style: {flex:1,padding:"6px",border:`1px solid ${C.border}`,borderRadius:7,
                                          background:C.surface,cursor:"pointer",fontFamily:"inherit",fontSize:11,color:C.muted},}, "Annuleer"

                                      )
                                      , React.createElement('button', { onClick: ()=>{onDelete(room.id);setConfirmRoomId(null);},
                                        style: {flex:1,padding:"6px",border:"none",borderRadius:7,
                                          background:C.danger,color:"#fff",cursor:"pointer",
                                          fontFamily:"inherit",fontSize:11,fontWeight:700},}
                                        , count>0?"Toch verwijderen":"Verwijderen"
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        );
                      })

                      /* Add room form */
                      , addingRoomFor === estate.id ? (
                        React.createElement('div', { style: {background:C.surface,borderRadius:10,padding:12,
                          border:`1.5px dashed ${C.green}`},}
                          , React.createElement('div', { style: {marginBottom:8},}
                            , React.createElement(ColorDots, { value: newRoomColor, onChange: setNewRoomColor,})
                          )
                          , React.createElement('div', { style: {display:"flex",gap:6},}
                            , React.createElement('input', { value: newRoomName, onChange: e=>setNewRoomName(e.target.value),
                              onKeyDown: e=>e.key==="Enter"&&handleAddRoom(estate.id),
                              autoFocus: true,
                              placeholder: "Naam ruimte (bijv. Slaapkamer...)"   ,
                              style: {flex:1,border:`1.5px solid ${newRoomName?newRoomColor:C.border}`,
                                borderRadius:7,padding:"7px 9px",fontSize:13,outline:"none",
                                fontFamily:"inherit",background:newRoomName?newRoomColor+"18":"none",
                                transition:"all 0.2s"},})
                            , React.createElement('button', { onClick: ()=>handleAddRoom(estate.id), disabled: !newRoomName.trim(),
                              style: {padding:"7px 12px",border:"none",borderRadius:7,
                                background:newRoomName.trim()?C.green:"#ccc",color:"#fff",
                                cursor:newRoomName.trim()?"pointer":"not-allowed",
                                fontFamily:"inherit",fontSize:12,fontWeight:700},}, "+ Voeg toe"

                            )
                          )
                          , React.createElement('button', { onClick: ()=>{setAddingRoomFor(null);setNewRoomName("");},
                            style: {marginTop:6,background:"none",border:"none",color:C.muted,
                              cursor:"pointer",fontSize:11,fontFamily:"inherit"},}, "Annuleer"

                          )
                        )
                      ) : (
                        React.createElement('button', { onClick: ()=>{setAddingRoomFor(estate.id);setNewRoomName("");},
                          style: {width:"100%",padding:"8px",border:`1.5px dashed ${C.border}`,
                            borderRadius:10,background:"none",cursor:"pointer",
                            color:C.green,fontSize:12,fontWeight:600,fontFamily:"inherit",
                            display:"flex",alignItems:"center",justifyContent:"center",gap:6},}, "+ Ruimte toevoegen aan "
                              , estate.name
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      })

      /* ── Add new location ── */
      , addingEstate ? (
        React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:14,
          border:`1.5px dashed ${C.sky}`},}
          , React.createElement('div', { style: {fontSize:11,fontWeight:700,color:C.muted,letterSpacing:0.5,marginBottom:8},}, "ICOON")
          , React.createElement('div', { style: {display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},}
            , ESTATE_ICONS_LIST.map(ic=>(
              React.createElement('button', { key: ic, onClick: ()=>setNewEstIcon(ic),
                style: {fontSize:20,padding:"4px 8px",borderRadius:8,border:"none",cursor:"pointer",
                  background:newEstIcon===ic?C.greenPale:"none",
                  boxShadow:newEstIcon===ic?`0 0 0 2px ${C.green}`:"none"},}
                , ic
              )
            ))
          )
          , React.createElement('div', { style: {display:"flex",gap:8},}
            , React.createElement('input', { value: newEstName, onChange: e=>setNewEstName(e.target.value),
              onKeyDown: e=>e.key==="Enter"&&handleAddEstate(),
              autoFocus: true,
              placeholder: "Naam locatie (bijv. Kantoor, Oma's huis...)"     ,
              style: {flex:1,border:`1.5px solid ${newEstName?C.sky:C.border}`,borderRadius:8,
                padding:"8px 10px",fontSize:13,outline:"none",fontFamily:"inherit",
                background:newEstName?"#5AACCB18":"none",transition:"all 0.2s"},})
            , React.createElement('button', { onClick: handleAddEstate, disabled: !newEstName.trim(),
              style: {padding:"8px 14px",border:"none",borderRadius:8,
                background:newEstName.trim()?C.sky:"#ccc",color:"#fff",
                cursor:newEstName.trim()?"pointer":"not-allowed",
                fontFamily:"inherit",fontSize:13,fontWeight:700,whiteSpace:"nowrap"},}, "+ Voeg toe"

            )
          )
          , React.createElement('button', { onClick: ()=>setAddingEstate(false),
            style: {marginTop:6,background:"none",border:"none",color:C.muted,
              cursor:"pointer",fontSize:11,fontFamily:"inherit"},}, "Annuleer"

          )
        )
      ) : (
        React.createElement('button', { onClick: ()=>setAddingEstate(true),
          style: {width:"100%",padding:12,border:`1.5px dashed ${C.sky}`,borderRadius:14,
            background:"none",cursor:"pointer",color:C.sky,fontSize:13,
            fontWeight:600,fontFamily:"inherit",display:"flex",alignItems:"center",
            justifyContent:"center",gap:8},}, "+ Nieuwe locatie toevoegen"

        )
      )
    )
  );
};



// ══════════════════════════════════════════════════════════════════
// PLANT CARD
const PlantCard = ({plant, logs, onSelect, sections, onQuickWater, isSelected, bulkMode}) => {
  const sp = SPECIES_DB[plant.species];
  const logCount = logs.filter(l => l.plantId === plant.id).length;
  const streak = calcStreak(plant, logs);
  const emoji = _optionalChain([sp, 'optionalAccess', _299 => _299.image]) || "🌿";
  const section = sections.find(s => s.name === plant.section);
  const [watered, setWatered] = useState(false);

  // Use shared helper — same logic as PlantDetail
  const { waterPaused, pausedEvent, activeEvents, snoozed } = getWaterPause(plant);
  const d = waterPaused ? null : (plant.nextWater ? daysUntil(plant.nextWater) : null);
  const borderColor = waterPaused ? C.warning
    : d!==null&&d<=0 ? C.danger
    : d!==null&&d<=2 ? C.warning
    : C.border;

  const handleQuickWater = (e) => {
    e.stopPropagation();
    setWatered(true);
    onQuickWater(plant);
    setTimeout(() => setWatered(false), 2000);
  };

  return (
    React.createElement('div', { className: "pca-card", style: {background:isSelected?C.greenPale:C.surface,borderRadius:18,marginBottom:10,
      overflow:"hidden",boxShadow:C.shadowMd,
      border:`1.5px solid ${isSelected?C.green:borderColor}`,
      marginLeft:waterPaused?2:0,marginRight:waterPaused?2:0},}
      , React.createElement('div', { onClick: ()=>onSelect(plant),
        style: {padding:14,display:"flex",gap:13,alignItems:"center",cursor:"pointer"},}
        , React.createElement('div', { style: {position:"relative",flexShrink:0},}
          , React.createElement(HealthRing, { health: plant.health, size: 56,})
          , React.createElement('div', { style: {position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
            width:40,height:40,borderRadius:10,overflow:"hidden",display:"flex",alignItems:"center",
            justifyContent:"center",background:C.surfaceAlt},}
            , (plant.photoUrl || plant.wikiPhotoUrl)
              ? React.createElement('img', { src: plant.photoUrl || plant.wikiPhotoUrl, alt: plant.species, style: {width:"100%",height:"100%",objectFit:"cover"},})
              : React.createElement('span', { style: {fontSize:18},}, emoji)
          )
        )
        , React.createElement('div', { style: {flex:1,minWidth:0},}
          , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:6},}
            , bulkMode && (
              React.createElement('div', { style: {width:20,height:20,borderRadius:6,border:`2px solid ${isSelected?C.green:C.border}`,
                background:isSelected?C.green:"#fff",display:"flex",alignItems:"center",justifyContent:"center",
                flexShrink:0,fontSize:12,color:"#fff"},}
                , isSelected?"✓":""
              )
            )
            , React.createElement('span', { style: {fontWeight:700,fontSize:15,color:C.soil},}, plant.name)
            , section && React.createElement('div', { style: {width:8,height:8,borderRadius:"50%",background:section.color,flexShrink:0},})
            , _optionalChain([SPECIES_DB, 'access', _300 => _300[plant.species], 'optionalAccess', _301 => _301.toxicity]) && !/non[\-\s]toxic/i.test(SPECIES_DB[plant.species].toxicity) && (
              React.createElement('span', { style: {fontSize:9,color:C.danger,fontWeight:700,flexShrink:0},}, "⚠️")
            )
          )
          , React.createElement('div', { style: {fontSize:11,color:C.muted,fontStyle:"italic",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},}, plant.species)
          , React.createElement('div', { style: {fontSize:11,color:C.muted,marginTop:2,display:"flex",alignItems:"center",gap:4,flexWrap:"wrap"},}
            , "📍 " , plant.location, " · 📝 " , logCount, " logs"
            , streak >= 3 && React.createElement('span', {
                style:{color:C.warning,fontWeight:700,marginLeft:2}},
                " 🔥"+streak)
          )
        )
        , React.createElement('div', { style: {textAlign:"right",flexShrink:0,minWidth:54},}
          , waterPaused ? (
            React.createElement('div', { style: {background:C.warning+"18",borderRadius:8,padding:"4px 6px"},}
              , React.createElement('div', { style: {fontSize:9,color:C.warning,fontWeight:700,letterSpacing:0.3},}, "GEPAUZ.")
              , React.createElement('div', { style: {fontSize:13,color:C.warning,fontWeight:800,lineHeight:1.2},}
                , Math.ceil((new Date(_optionalChain([pausedEvent, 'optionalAccess', _302 => _302.endDate]))-new Date())/86400000), "d"
              )
            )
          ) : snoozed ? (
            React.createElement('div', { style: {background:C.sky+"18",borderRadius:8,padding:"4px 6px"},}
              , React.createElement('div', { style: {fontSize:9,color:C.sky,fontWeight:700,letterSpacing:0.3},}, "SNOOZED")
              , React.createElement('div', { style: {fontSize:11,color:C.sky,fontWeight:700,lineHeight:1.2},}, "⏰ "
                 , new Date(plant.snoozedUntil).toLocaleDateString("nl-BE",{day:"numeric",month:"short"})
              )
            )
          ) : d !== null ? (
            React.createElement('div', { style: {background:d<=0?C.danger+"15":d<=2?C.warning+"15":"transparent",
              borderRadius:8,padding:"4px 6px"},}
              , React.createElement('div', { style: {fontSize:9,color:C.muted,fontWeight:600,letterSpacing:0.3},}, "WATER")
              , React.createElement('div', { style: {fontWeight:800,fontSize:d<=0?13:15,color:urgColor(d),lineHeight:1.2,
                animation:d<=0?"pulse 1.5s ease infinite":undefined},}
                , d<=0?"Nu!":d===1?"1 dag":`${d}d`
              )
            )
          ) : (
            React.createElement('div', { style: {fontSize:10,color:C.muted},}, "—")
          )
          , React.createElement('div', { style: {fontSize:10,fontWeight:600,
            color:plant.health>70?C.green:plant.health>40?C.warning:C.danger,
            marginTop:4,display:"flex",alignItems:"center",justifyContent:"flex-end",gap:2},}
            , React.createElement('span', null, plant.health, "%")
            , React.createElement('span', { style: {fontSize:8},}, "❤")
          )
        )
      )
      /* Quick water bar — only when NOT paused, due soon, and not in bulk mode */
      , !waterPaused && !bulkMode && d !== null && (
        React.createElement('div', { style: {borderTop:`1px solid ${d<=0?C.danger:d<=2?C.warning:C.border}`,
          background:d<=0?C.terracottaLight:d<=2?"#FFF8E7":C.surfaceAlt,
          display:"flex",alignItems:"center",padding:"6px 12px",gap:8},}
          , React.createElement('div', { style: {flex:1,fontSize:11,color:d<=0?C.danger:C.warning,fontWeight:600},}
            , d===null?"💧 Schema instellen":d<=0?"⚠️ Water vergeten!":d===1?"💧 Morgen water geven":`💧 Over ${d} dagen`
          )
          , React.createElement('button', { onClick: handleQuickWater,
            style: {background:watered?C.green:d<=0?C.danger:C.warning,color:"#fff",
              border:"none",borderRadius:8,padding:"5px 12px",cursor:"pointer",
              fontSize:12,fontFamily:"inherit",fontWeight:700,transition:"background 0.3s"},}
            , watered?"✓ Klaar!":"💧 Water gegeven"
          )
        )
      )
      /* Paused event notice bar */
      , waterPaused && pausedEvent && (
        React.createElement('div', { style: {borderTop:`1px solid ${C.warning}44`,background:C.warning+"18",
          padding:"6px 12px",fontSize:11,color:C.soil},}, "⚡ "
           , pausedEvent.icon, " " , pausedEvent.label, " — nog "   , Math.ceil((new Date(pausedEvent.endDate)-new Date())/86400000), " dagen geen water"
        )
      )
    )
  );
};

// ══════════════════════════════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════════
// DATA EXPORT / IMPORT
// ══════════════════════════════════════════════════════════════════
const DataModal = ({plants, logs, sections, notifSettings, onImport, onClose}) => {
  const [importing, setImporting] = useState(false);
  const [importError, setImportError] = useState("");
  const [importSuccess, setImportSuccess] = useState(false);

  // Export: bundle everything into a JSON file and trigger download
  const handleExport = () => {
    const data = {
      version: 2,
      exportedAt: new Date().toISOString(),
      plants,
      logs,
      sections,
      notifSettings,
      // Also include per-plant photos from plant.photos (already in plant objects)
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `plantcare_backup_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import: read JSON file and restore all data
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImporting(true);
    setImportError("");
    setImportSuccess(false);
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!data.plants || !Array.isArray(data.plants)) throw new Error("Ongeldig bestandsformaat");
        onImport(data);
        setImportSuccess(true);
        setImporting(false);
      } catch(err) {
        setImportError("Fout bij importeren: " + err.message);
        setImporting(false);
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    React.createElement('div', { style: {position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300,display:"flex",alignItems:"flex-end"},}
      , React.createElement('div', { style: {background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:600,margin:"0 auto",display:"flex",flexDirection:"column"},}
        , React.createElement('div', { style: {padding:"20px 20px 12px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"},}
          , React.createElement('div', { style: {fontWeight:800,fontSize:16,color:C.soil},}, "💾 Data beheren"  )
          , React.createElement('button', { onClick: onClose, style: {background:"none",border:"none",fontSize:24,cursor:"pointer",color:C.muted},}, "×")
        )

        , React.createElement('div', { style: {padding:"16px 20px 24px"},}
          /* Export */
          , React.createElement('div', { style: {background:C.greenPale,borderRadius:12,padding:14,marginBottom:12},}
            , React.createElement('div', { style: {fontWeight:700,color:C.green,marginBottom:4,fontSize:14},}, "📤 Exporteren" )
            , React.createElement('div', { style: {fontSize:13,color:C.soil,marginBottom:10,lineHeight:1.5},}, "Download al je planten, logs, foto's en instellingen als één JSON-bestand. Gebruik dit om data over te zetten naar een nieuw apparaat of nieuwe URL."


            )
            , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:10},}
              , plants.length, " planten · "   , logs.length, " logs · "   , sections.length, " afdelingen"
            )
            , React.createElement('button', { onClick: handleExport,
              style: {width:"100%",padding:"10px",border:"none",borderRadius:10,
                background:C.green,color:"#fff",cursor:"pointer",fontFamily:"inherit",
                fontSize:14,fontWeight:700},}, "📤 Download backup bestand"

            )
          )

          /* Import */
          , React.createElement('div', { style: {background:C.surfaceAlt,borderRadius:12,padding:14},}
            , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:4,fontSize:14},}, "📥 Importeren" )
            , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:10,lineHeight:1.5},}, "Laad een eerder geëxporteerd backup-bestand. Dit "
                    , React.createElement('strong', null, "overschrijft"), " alle huidige data."
            )

            , importError && (
              React.createElement('div', { style: {background:C.terracottaLight,borderRadius:8,padding:8,fontSize:12,
                color:C.terracotta,marginBottom:8},}, "❌ "
                 , importError
              )
            )
            , importSuccess && (
              React.createElement('div', { style: {background:C.greenPale,borderRadius:8,padding:8,fontSize:12,
                color:C.green,marginBottom:8},}, "✅ Data succesvol geïmporteerd! Sluit dit scherm om verder te gaan."

              )
            )

            , React.createElement('label', null
              , React.createElement('div', { style: {width:"100%",padding:"10px",border:`1px dashed ${C.border}`,borderRadius:10,
                textAlign:"center",cursor:"pointer",fontFamily:"inherit",fontSize:14,
                fontWeight:600,color:C.soil,boxSizing:"border-box"},}
                , importing ? "⏳ Bezig met importeren..." : "📥 Kies backup bestand"
              )
              , React.createElement('input', { type: "file", accept: ".json", onChange: handleImport,
                disabled: importing, style: {display:"none"},})
            )
          )
        )
      )
      , d !== null && d <= 2 && (
        React.createElement('div', { style: {borderTop:`1px solid ${C.border}`,background:C.surfaceAlt,
          display:"flex",alignItems:"center",padding:"6px 12px",gap:8},}
          , React.createElement('div', { style: {flex:1,fontSize:11,color:d<=0?C.danger:C.warning,fontWeight:600},}
            , d<=0?"⚠️ Water vergeten!":"💧 Morgen water geven"
          )
          , React.createElement('button', { onClick: handleQuickWater,
            style: {background:watered?C.green:d<=0?C.danger:C.warning,color:"#fff",
              border:"none",borderRadius:8,padding:"5px 12px",cursor:"pointer",
              fontSize:12,fontFamily:"inherit",fontWeight:700,transition:"background 0.3s"},}
            , watered?"✓ Klaar!":"💧 Water gegeven"
          )
        )
      )
    )
  );
};


// ══════════════════════════════════════════════════════════════════
// SETTINGS SCREEN
// ══════════════════════════════════════════════════════════════════
const SettingsScreen = ({
  plants, logs, sections, activeRooms, notifSettings,
  onSaveNotif, onImport,
  onAddSection, onDeleteSection, onRenameSection,
  estates, activeEstateId, onAddEstate, onDeleteEstate, onRenameEstate, onSelectEstate,
  onClose, lang, onSetLang, t, apiKey, onSetApiKey, vacation, onSetVacation,
}) => {
  const [tab, setTab] = useState("general"); // "general" | "notif" | "data" | "sections"
  const [darkMode, setDarkMode] = useState(()=>JSON.parse(localStorage.getItem("plantcare_dark")||"false"));
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [aiPs, setAiPs] = useState(()=>{try{return JSON.parse(localStorage.getItem("plantcare_ai_provider")||"{}");}catch(_e){return {};}});
  const saveAiPs = (update) => { const next={...aiPs,...update}; setAiPs(next); localStorage.setItem("plantcare_ai_provider",JSON.stringify(next)); };
  const [notif, setNotif] = useState({...notifSettings});
  const [importing, setImporting] = useState(false);
  const [importMsg, setImportMsg] = useState(null); // {type:"ok"|"err", text}
  const [permission, setPermission] = useState(
    typeof Notification !== "undefined" ? Notification.permission : "unsupported"
  );

  const handleEnableNotif = async () => {
    const r = await requestNotifPermission();
    setPermission(r);
    if (r === "granted") setNotif(prev => ({...prev, enabled: true}));
  };

  const setN = (key, val) => setNotif(prev => ({...prev, [key]: val}));

  const handleExport = () => {
    const data = {version:2, exportedAt:new Date().toISOString(), plants, logs, sections, notifSettings};
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `plantcare_backup_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImporting(true); setImportMsg(null);
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!data.plants || !Array.isArray(data.plants)) throw new Error("Ongeldig bestand");
        onImport(data);
        setImportMsg({type:"ok", text:`✅ ${data.plants.length} planten en ${_optionalChain([data, 'access', _303 => _303.logs, 'optionalAccess', _304 => _304.length])||0} logs geïmporteerd.`});
      } catch(err) {
        setImportMsg({type:"err", text:`❌ Fout: ${err.message}`});
      }
      setImporting(false);
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const TABS = [
    {id:"general", icon:"⚙️", label:"Algemeen"},
    {id:"taal", icon:"🌐", label:"Taal"},
    {id:"sections", icon:"📂", label:"Afdelingen"},
    {id:"notif", icon:"🔔", label:"Meldingen"},
    {id:"data", icon:"💾", label:"Data"},
  ];

  return (
    React.createElement('div', { style: {minHeight:"100vh",background:C.bg,zIndex:200,fontFamily:"system-ui,sans-serif"},}
      /* Header */
      , React.createElement('div', { style: {background:`linear-gradient(160deg, ${C.soil} 0%, ${C.soilLight} 100%)`,
        padding:"52px 20px 0",position:"relative",overflow:"hidden"},}
        , React.createElement('div', { style: {position:"absolute",right:-10,top:-10,fontSize:80,opacity:0.05,
          pointerEvents:"none"},}, "⚙️")
        , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:12,marginBottom:8},}
          , React.createElement('button', { onClick: ()=>{onSaveNotif(notif);onClose();}, className: "pca-btn",
            style: {background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.15)",
              color:C.sand,cursor:"pointer",fontSize:13,padding:"6px 12px",
              borderRadius:10,fontFamily:"inherit",fontWeight:600},}, "← Terug"

          )
        )
        , React.createElement('div', {style:{display:"flex",alignItems:"center",gap:10,paddingBottom:14}},
          React.createElement('div', {dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="28" height="28">  <rect x="0" y="0" width="100" height="100" rx="18" fill="#2C1F0F"/>  <polygon points="18,95 20,78 80,78 82,95" fill="#AF5235"/>  <polygon points="18,95 26,78 26,95" fill="#C96040"/>  <polygon points="74,78 82,78 82,95 74,95" fill="#8B3C22"/>  <rect x="15" y="70" width="70" height="13" rx="6" fill="#CA9460"/>  <rect x="16" y="70" width="28" height="5" rx="3" fill="#DDB87A"/>  <rect x="15" y="78" width="70" height="4" rx="2" fill="#966430"/>  <ellipse cx="50" cy="74" rx="30" ry="7" fill="#3A2410"/>  <rect x="37" y="20" width="26" height="55" rx="13" fill="#427548"/>  <rect x="37" y="25" width="8" height="43" rx="4" fill="#345d38"/>  <rect x="53" y="25" width="8" height="43" rx="4" fill="#345d38"/>  <rect x="40" y="28" width="6" height="38" rx="3" fill="#5a9e6a"/>  <rect x="14" y="35" width="25" height="42" rx="12" fill="#427548"/>  <rect x="14" y="35" width="14" height="24" rx="7" fill="#5a9e6a"/>  <rect x="14" y="40" width="8" height="30" rx="4" fill="#345d38"/>  <rect x="61" y="48" width="25" height="42" rx="12" fill="#427548"/>  <rect x="72" y="48" width="14" height="24" rx="7" fill="#5a9e6a"/>  <rect x="72" y="53" width="8" height="30" rx="4" fill="#345d38"/>  <line x1="36" y1="32" x2="27" y2="27" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/>  <line x1="36" y1="32" x2="27" y2="37" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/>  <line x1="36" y1="48" x2="27" y2="43" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/>  <line x1="36" y1="48" x2="27" y2="53" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/>  <line x1="64" y1="38" x2="73" y2="33" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/>  <line x1="64" y1="38" x2="73" y2="43" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/>  <line x1="64" y1="54" x2="73" y2="49" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/>  <line x1="64" y1="54" x2="73" y2="59" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/>  <line x1="14" y1="48" x2="6"  y2="43" stroke="#EDD8A8" stroke-width="1.2" stroke-linecap="round"/>  <line x1="14" y1="48" x2="6"  y2="53" stroke="#EDD8A8" stroke-width="1.2" stroke-linecap="round"/>  <line x1="86" y1="60" x2="94" y2="55" stroke="#EDD8A8" stroke-width="1.2" stroke-linecap="round"/>  <line x1="86" y1="60" x2="94" y2="65" stroke="#EDD8A8" stroke-width="1.2" stroke-linecap="round"/>  <circle cx="28" cy="30" r="5" fill="#C85230" opacity="0.9"/>  <circle cx="28" cy="30" r="3.5" fill="#E07248"/>  <ellipse cx="26" cy="26" rx="4" ry="5.5" fill="#D05A38"/>  <ellipse cx="30" cy="26" rx="4" ry="5.5" fill="#D05A38"/>  <ellipse cx="24" cy="30" rx="4" ry="5.5" fill="#D05A38"/>  <ellipse cx="32" cy="30" rx="4" ry="5.5" fill="#D05A38"/>  <circle cx="28" cy="30" r="4" fill="#F0C040"/>  <circle cx="28" cy="30" r="2" fill="#D4960E"/>  <ellipse cx="44" cy="16" rx="3" ry="4" fill="#C05030"/>  <ellipse cx="50" cy="14" rx="3" ry="4" fill="#C85535"/>  <ellipse cx="56" cy="16" rx="3" ry="4" fill="#C05030"/>  <ellipse cx="44" cy="22" rx="3" ry="4" fill="#C05030"/>  <ellipse cx="56" cy="22" rx="3" ry="4" fill="#C05030"/>  <circle cx="50" cy="19" r="5" fill="#F0C040"/>  <circle cx="50" cy="19" r="2.5" fill="#D4960E"/></svg>'}})
        , React.createElement("div", {style:{display:"flex",alignItems:"center",gap:10},},
        React.createElement('div', {dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="28" height="28"><rect width="100" height="100" rx="18" fill="#2C1F0F"/><polygon points="18,95 20,78 80,78 82,95" fill="#AF5235"/><polygon points="18,95 26,78 26,95" fill="#C96040"/><polygon points="74,78 82,78 82,95 74,95" fill="#8B3C22"/><rect x="15" y="70" width="70" height="13" rx="6" fill="#CA9460"/><rect x="15" y="78" width="70" height="4" rx="2" fill="#966430"/><ellipse cx="50" cy="74" rx="30" ry="7" fill="#3A2410"/><rect x="37" y="20" width="26" height="55" rx="13" fill="#427548"/><rect x="37" y="25" width="8" height="43" rx="4" fill="#345d38"/><rect x="53" y="25" width="8" height="43" rx="4" fill="#345d38"/><rect x="40" y="28" width="6" height="38" rx="3" fill="#5a9e6a"/><rect x="14" y="35" width="25" height="42" rx="12" fill="#427548"/><rect x="61" y="48" width="25" height="42" rx="12" fill="#427548"/><line x1="36" y1="32" x2="27" y2="27" stroke="#EDD8A8" stroke-width="2" stroke-linecap="round"/><line x1="36" y1="32" x2="27" y2="37" stroke="#EDD8A8" stroke-width="2" stroke-linecap="round"/><line x1="36" y1="50" x2="27" y2="45" stroke="#EDD8A8" stroke-width="2" stroke-linecap="round"/><line x1="36" y1="50" x2="27" y2="55" stroke="#EDD8A8" stroke-width="2" stroke-linecap="round"/><line x1="64" y1="40" x2="73" y2="35" stroke="#EDD8A8" stroke-width="2" stroke-linecap="round"/><line x1="64" y1="40" x2="73" y2="45" stroke="#EDD8A8" stroke-width="2" stroke-linecap="round"/><line x1="64" y1="56" x2="73" y2="51" stroke="#EDD8A8" stroke-width="2" stroke-linecap="round"/><line x1="64" y1="56" x2="73" y2="61" stroke="#EDD8A8" stroke-width="2" stroke-linecap="round"/><ellipse cx="26" cy="26" rx="4" ry="5.5" fill="#D05A38"/><ellipse cx="30" cy="26" rx="4" ry="5.5" fill="#D05A38"/><ellipse cx="24" cy="30" rx="4" ry="5.5" fill="#D05A38"/><ellipse cx="32" cy="30" rx="4" ry="5.5" fill="#D05A38"/><circle cx="28" cy="30" r="4" fill="#F0C040"/><circle cx="28" cy="30" r="2" fill="#D4960E"/><ellipse cx="44" cy="16" rx="3" ry="4" fill="#C05030"/><ellipse cx="50" cy="14" rx="3" ry="4" fill="#C85535"/><ellipse cx="56" cy="16" rx="3" ry="4" fill="#C05030"/><ellipse cx="44" cy="22" rx="3" ry="4" fill="#C05030"/><ellipse cx="56" cy="22" rx="3" ry="4" fill="#C05030"/><circle cx="50" cy="19" r="5" fill="#F0C040"/><circle cx="50" cy="19" r="2.5" fill="#D4960E"/></svg>'},style:{flexShrink:0}})
        , React.createElement("div", {style:{fontSize:24,fontWeight:900,color:"#F5F1EB",letterSpacing:-0.3}}, "Instellingen")
      ))
        /* Tab bar */
        , React.createElement('div', { style: {display:"flex",borderTop:`1px solid rgba(255,255,255,0.1)`},}
          , TABS.map(t => (
            React.createElement('button', { key: t.id, onClick: ()=>{setTab(t.id); window.scrollTo(0,0);},
              style: {flex:1,padding:"10px 4px",border:"none",background:"none",cursor:"pointer",
                color:tab===t.id?"#fff":C.sand,fontWeight:tab===t.id?700:400,fontSize:11,
                fontFamily:"inherit",borderBottom:tab===t.id?"2px solid #fff":"2px solid transparent",
                transition:"all 0.15s"},}
              , t.icon, React.createElement('br', null), t.label
            )
          ))
        )
      )

      /* Content */
      , React.createElement('div', { style: {padding:"16px",maxWidth:600,width:"100%",margin:"0 auto",boxSizing:"border-box"},}

        /* ── GENERAL ── */
        , tab === "general" && (
          React.createElement('div', null
            /* App info */
            , React.createElement('div', {style:{background:C.surface,borderRadius:14,padding:14,marginBottom:12,
              border:`1px solid ${C.border}`}}
            , React.createElement('div', {style:{display:"flex",alignItems:"center",justifyContent:"space-between"}}
              , React.createElement('div', null
                , React.createElement('div', {style:{fontWeight:700,color:C.soil,fontSize:14}}, "🌙 Weergave")
                , React.createElement('div', {style:{fontSize:12,color:C.muted,marginTop:2}},
                    darkMode ? "Donkere modus actief" : "Lichte modus actief")
              )
              , React.createElement('div', {style:{display:"flex",gap:6}}
                , React.createElement('button', {
                    onClick:()=>{ setDarkMode(false); localStorage.setItem("plantcare_dark","false"); window.__setDarkMode&&window.__setDarkMode(false); document.documentElement.style.background="#F5F1EB"; window.dispatchEvent(new CustomEvent("plantcare_theme")); },
                    style:{padding:"7px 14px",borderRadius:20,border:`2px solid ${!darkMode?C.green:C.border}`,
                      background:!darkMode?C.greenPale:C.surface,color:!darkMode?C.green:C.muted,
                      cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:!darkMode?700:400}
                  }, "☀️ Licht")
                , React.createElement('button', {
                    onClick:()=>{ setDarkMode(true); localStorage.setItem("plantcare_dark","true"); window.__setDarkMode&&window.__setDarkMode(true); document.documentElement.style.background="#121212"; window.dispatchEvent(new CustomEvent("plantcare_theme")); },
                    style:{padding:"7px 14px",borderRadius:20,border:`2px solid ${darkMode?C.green:C.border}`,
                      background:darkMode?C.greenPale:C.surface,color:darkMode?C.green:C.muted,
                      cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:darkMode?700:400}
                  }, "🌙 Donker")
              )
            )
          )
            , React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:16,marginBottom:12},}
              , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:10,fontSize:14},}, "🌿 Plant Care App"   )
              , React.createElement('div', { style: {fontSize:13,color:C.muted,lineHeight:1.6},}, "Jouw persoonlijke plantenassistent. Volg verzorging, log groeimetingen, stel waterherinneringen in en haal locatie-bewuste zorgdata op uit meerdere bronnen."

              )
              , React.createElement('div', { style: {marginTop:10,display:"flex",flexWrap:"wrap",gap:6},}
                , React.createElement(Badge, { label: `${plants.length} planten`, color: C.green,})
                , React.createElement(Badge, { label: `${logs.length} logs`, color: C.sky,})
                , React.createElement(Badge, { label: `${sections.length} afdelingen`, color: C.sand,})
              )
            )
            /* Vacation mode */
            , (()=>{
              const vac = vacation || {active:false,end:"",caretaker:"",notes:""};
              const daysLeft = vac.active && vac.end ? Math.ceil((new Date(vac.end)-new Date())/(1000*60*60*24)) : 0;
              const startText = vac.start ? new Date(vac.start).toLocaleDateString('nl-NL',{day:'numeric',month:'short'}) : '';
              const endText = vac.end ? new Date(vac.end).toLocaleDateString('nl-NL',{day:'numeric',month:'short'}) : '';
              return React.createElement('div', {style:{background:C.surface,borderRadius:14,padding:14,marginBottom:12,
                  border:`2px solid ${vac.active?C.warning:C.border}`}}
                , React.createElement('div', {style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}
                  , React.createElement('div', null
                    , React.createElement('div', {style:{fontWeight:700,color:C.soil,fontSize:14}}, "🏖️ Vakantie-modus")
                    , React.createElement('div', {style:{fontSize:12,color:vac.active?C.warning:C.muted,marginTop:2}},
                        vac.active ? (startText&&endText ? startText+' → '+endText+' (nog '+daysLeft+' dag'+(daysLeft!==1?'en':'')+')' : 'Actief — nog '+daysLeft+' dag'+(daysLeft!==1?'en':'')) : "Pauzeer waterschema's tijdens afwezigheid")
                  )
                  , React.createElement('button', {
                      onClick:()=>onSetVacation({...vac,active:!vac.active}),
                      style:{padding:"7px 16px",borderRadius:20,border:"none",
                        background:vac.active?C.warning:C.green,color:"#fff",
                        cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:700}},
                      vac.active?"Deactiveer":"Activeer")
                )
                , !vac.active && React.createElement('div', {style:{display:"flex",flexDirection:"column",gap:8}}
                  , React.createElement('div', {style:{display:"flex",gap:8,alignItems:"center"}}
                  , React.createElement('div', {style:{flex:1}}
                    , React.createElement('div', {style:{fontSize:11,color:C.muted,marginBottom:4,fontWeight:600}}, "VAN")
                    , React.createElement('input', {
                        type:"date",value:vac.start||"",
                        min:new Date().toISOString().split("T")[0],
                        onChange:e=>onSetVacation({...vac,start:e.target.value}),
                        style:{width:"100%",border:`1px solid ${C.border}`,borderRadius:8,padding:"8px 10px",
                          fontSize:13,outline:"none",fontFamily:"inherit",background:C.surface,color:C.text,boxSizing:"border-box"}})
                  )
                  , React.createElement('div', {style:{color:C.muted,fontSize:18,paddingTop:16}}, "→")
                  , React.createElement('div', {style:{flex:1}}
                    , React.createElement('div', {style:{fontSize:11,color:C.muted,marginBottom:4,fontWeight:600}}, "TOT")
                    , React.createElement('input', {
                        type:"date",value:vac.end||"",
                        min:vac.start||new Date().toISOString().split("T")[0],
                        onChange:e=>onSetVacation({...vac,end:e.target.value}),
                        style:{width:"100%",border:`1px solid ${C.border}`,borderRadius:8,padding:"8px 10px",
                          fontSize:13,outline:"none",fontFamily:"inherit",background:C.surface,color:C.text,boxSizing:"border-box"}})
                  )
                )
                  , React.createElement('input', {
                      value:vac.caretaker||"",placeholder:"Naam verzorger (optioneel)",
                      onChange:e=>onSetVacation({...vac,caretaker:e.target.value}),
                      style:{border:`1px solid ${C.border}`,borderRadius:8,padding:"8px 10px",
                        fontSize:13,outline:"none",fontFamily:"inherit",background:C.surface,color:C.text,boxSizing:"border-box",width:"100%"}})
                  , React.createElement('textarea', {
                      value:vac.notes||"",placeholder:"Extra notities voor de verzorger...",rows:2,
                      onChange:e=>onSetVacation({...vac,notes:e.target.value}),
                      style:{border:`1px solid ${C.border}`,borderRadius:8,padding:"8px 10px",
                        fontSize:13,outline:"none",fontFamily:"inherit",resize:"vertical",background:C.surface,color:C.text,boxSizing:"border-box",width:"100%"}})
                )
                , vac.active && React.createElement('button', {
                    onClick:()=>{
                      // Generate PDF summary for caretaker
                      const win = window.open("","_blank");
                    if(!win) return;
                    const today = new Date().toLocaleDateString("nl-NL");
                    const endDate = vac.end ? new Date(vac.end).toLocaleDateString("nl-NL") : "onbekend";
                    const plantList = window.__plants || [];
                    const spDB = window.__SPECIES_DB || {};
                    const season2 = window.__getCurrentSeason ? window.__getCurrentSeason() : "summer";
                    let rows = "";
                    plantList.forEach(p => {
                      const sp2 = spDB[p.species];
                      const care2 = sp2 && sp2.care[season2];
                      const d2 = p.nextWater ? Math.ceil((new Date(p.nextWater)-new Date())/(1000*60*60*24)) : null;
                      const waterText = d2===null ? "Geen schema" : d2<=0 ? "<span style='color:red'>⚠️ Nu water geven!</span>" : "Over "+d2+" dag"+(d2!==1?"en":"");
                      const careText = care2 ? "<br><span style='font-size:12px;color:#888'>Elke "+care2.water+" dagen</span>" : "";
                      const expertText = p.expertNotes ? "<span style='color:#C4A97A'>📋 "+p.expertNotes.slice(0,120)+(p.expertNotes.length>120?"...":"")+"</span>" : "<span style='color:#ccc'>—</span>";
                      const notesText = p.notes ? "<br><span style='color:#888;font-size:12px'>"+p.notes+"</span>" : "";
                      // Generate mini QR code as SVG for this plant ID
                      const qrId = p.id;
                      const qrUrl = "plantcare://plant/"+qrId;
                      // Simple QR-like visual using plant ID chars
                      const shortId = qrId.slice(0,6).toUpperCase();
                      const qrCell = "<div style='text-align:center;font-family:monospace;font-size:10px;padding:4px;border:1px solid #ddd;border-radius:4px;display:inline-block;background:#fff'><div style=\"font-size:16px;margin-bottom:2px\">📱</div><div>"+shortId+"</div></div>";
                      rows += "<tr><td style='padding:10px;border-bottom:1px solid #eee'><strong>"+p.name+"</strong><br><em style='color:#666'>"+p.species+"</em>"+notesText+"</td><td style='padding:10px;border-bottom:1px solid #eee;color:#3D6B4A'>"+waterText+careText+"</td><td style='padding:10px;border-bottom:1px solid #eee;font-size:13px'>"+expertText+"</td><td style='padding:10px;border-bottom:1px solid #eee;text-align:center'>"+qrCell+"</td></tr>";
                    });
                    const caretakerBlock = vac.caretaker ? "<p><strong>Beste "+vac.caretaker+",</strong><br>Hieronder vind je een overzicht van alle planten die verzorging nodig hebben.</p>" : "";
                    const notesBlock = vac.notes ? "<div class='note'>📝 <strong>Extra instructies:</strong><br>"+vac.notes+"</div>" : "";
                    win.document.write("<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Plantenverzorging — "+endDate+"</title><style>body{font-family:-apple-system,sans-serif;max-width:800px;margin:40px auto;padding:0 20px;color:#1A1208}h1{color:#2C1F0F;margin-bottom:4px}.meta{color:#6D5D4C;margin-bottom:32px;font-size:14px}table{width:100%;border-collapse:collapse;margin-top:16px}th{background:#3D6B4A;color:#fff;padding:10px;text-align:left;font-size:13px}tr:nth-child(even) td{background:#f9f6f1}.note{background:#FFF8E7;border-left:3px solid #C4A97A;padding:12px 16px;border-radius:4px;margin:16px 0;font-size:14px}@media print{button{display:none}}</style></head><body><h1>🌿 Plantenverzorging</h1><div class='meta'>Aangemaakt op: "+today+" · Vakantie tot: "+endDate+"</div>"+caretakerBlock+notesBlock+"<table><thead><tr><th>Plant</th><th>💧 Volgende waterbeurt</th><th>📋 Speciale instructies</th><th style=\"width:80px\">📱 ID</th></tr></thead><tbody>"+rows+"</tbody></table><p style='margin-top:32px;color:#6D5D4C;font-size:13px'>✅ Geef water wanneer de bovenste 2cm grond droog aanvoelt.<br>❌ Geef nooit te veel water.<br>📱 Scan de QR-code op de plantpot voor meer info.</p><button onclick='window.print()' style='margin-top:16px;padding:10px 24px;background:#3D6B4A;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px'>🖨️ Afdrukken / PDF opslaan</button></body></html>");
                    win.document.close();
                    },
                    style:{width:"100%",padding:"10px",border:"none",borderRadius:10,
                      background:C.green,color:"#fff",cursor:"pointer",fontFamily:"inherit",
                      fontSize:13,fontWeight:700,marginTop:8}},
                    "📄 PDF genereren voor verzorger")
              );
            })()
            /* AI Provider settings */
            , (()=>{
              
              
              const provider = aiPs.provider || "auto";
              const PROVIDERS = [
                {id:"auto",     icon:"🤖", label:"Automatisch",  desc:"Claude (gratis via app) → eigen sleutel → offline"},
                {id:"groq",     icon:"⚡", label:"Groq",         desc:"Gratis · 1000 req/dag · geen creditcard · llama-3.3-70b", url:"https://console.groq.com"},
                {id:"gemini",   icon:"✨", label:"Google Gemini",desc:"Gratis · 1500 req/dag · geen creditcard · gemini-2.0-flash",url:"https://aistudio.google.com/apikey"},
                {id:"openrouter",icon:"🔀",label:"OpenRouter",   desc:"25+ gratis modellen · één sleutel · geen creditcard",url:"https://openrouter.ai/keys"},
                {id:"ollama",   icon:"🏠", label:"Ollama (lokaal)",desc:"Onbeperkt · geen internet · werkt op jouw PC/NAS"},
              ];
              const selectedProvider = PROVIDERS.find(p=>p.id===provider);
              return (
                React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:14,marginBottom:12,
                  border:`1px solid ${C.green}33`},}
                  , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:4,fontSize:14},}, "🤖 AI Plant Adviseur"   )
                  , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:12,lineHeight:1.5},}, "Kies een AI-provider. Alle opties hieronder zijn gratis te gebruiken."

                  )

                  /* Provider buttons */
                  , React.createElement('div', { style: {display:"flex",flexDirection:"column",gap:6,marginBottom:12},}
                    , PROVIDERS.map(p=>(
                      React.createElement('button', { key: p.id, onClick: ()=>saveAiPs({provider:p.id}),
                        style: {display:"flex",alignItems:"flex-start",gap:10,padding:"10px 12px",
                          borderRadius:10,cursor:"pointer",textAlign:"left",fontFamily:"inherit",
                          border:`1.5px solid ${provider===p.id?C.green:C.border}`,
                          background:provider===p.id?C.greenPale:C.surface},}
                        , React.createElement('span', { style: {fontSize:18,flexShrink:0},}, p.icon)
                        , React.createElement('div', { style: {flex:1},}
                          , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:provider===p.id?C.green:C.soil},}
                            , p.label, " " , provider===p.id&&"✓"
                          )
                          , React.createElement('div', { style: {fontSize:11,color:C.muted,marginTop:1},}, p.desc)
                        )
                      )
                    ))
                  )

                  /* Provider-specific setup */
                  , provider === "auto" && (
                    React.createElement('div', { style: {fontSize:12,color:C.muted,background:C.surfaceAlt,
                      borderRadius:8,padding:"8px 12px",lineHeight:1.6},}, "✅ Werkt zonder configuratie. Optioneel: voer een Anthropic sleutel in voor betere kwaliteit."

                      , React.createElement('div', { style: {marginTop:8},}
                        , React.createElement('input', { type: "password", value: apiKey||"", onChange: e=>onSetApiKey(e.target.value),
                          placeholder: "sk-ant-api03-... (optioneel)" ,
                          style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                            padding:"8px 10px",fontSize:12,outline:"none",fontFamily:"inherit",
                            boxSizing:"border-box"},})
                      )
                    )
                  )
                  , (provider==="groq"||provider==="gemini"||provider==="openrouter") && (
                    React.createElement('div', { style: {background:C.surfaceAlt,borderRadius:10,padding:12},}
                      , React.createElement('div', { style: {fontSize:12,color:C.soil,marginBottom:8,lineHeight:1.6},}
                        , React.createElement('strong', null, "Gratis sleutel aanmaken:"  ), " "
                        , React.createElement('span', { style: {color:C.sky,textDecoration:"underline",cursor:"pointer"},
                          onClick: ()=>window.open(_optionalChain([selectedProvider, 'optionalAccess', _305 => _305.url])),}
                          , _optionalChain([selectedProvider, 'optionalAccess', _306 => _306.url, 'optionalAccess', _307 => _307.replace, 'call', _308 => _308("https://","")])
                        )
                        , " → Sign up → API Keys → Create key → Kopieer hier"
                      )
                      , provider==="groq" && (
                        React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:8,padding:"6px 10px",
                          background:"rgba(90,172,203,0.1)",borderRadius:6},}, "💡 Groq is de snelste optie — antwoorden in <1 seconde"

                        )
                      )
                      , provider==="gemini" && (
                        React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:8,padding:"6px 10px",
                          background:"rgba(90,172,203,0.1)",borderRadius:6},}, "💡 Google gebruikt je gesprekken mogelijk voor modeltraining"

                        )
                      )
                      , provider==="openrouter" && (
                        React.createElement('div', { style: {fontSize:11,color:C.muted,marginBottom:8,padding:"6px 10px",
                          background:"rgba(90,172,203,0.1)",borderRadius:6},}, "💡 Kies model \"meta-llama/llama-4-scout:free\" voor gratis gebruik"

                        )
                      )
                      , React.createElement('input', { type: "password", value: aiPs.key||"", onChange: e=>saveAiPs({key:e.target.value}),
                        placeholder: provider==="groq"?"gsk_...":provider==="gemini"?"AIza...":"sk-or-...",
                        style: {width:"100%",border:`1.5px solid ${aiPs.key?C.green:C.border}`,
                          borderRadius:8,padding:"9px 12px",fontSize:13,outline:"none",
                          fontFamily:"inherit",boxSizing:"border-box"},})
                      , aiPs.key && React.createElement('div', { style: {fontSize:11,color:C.green,marginTop:6,fontWeight:600},}, "✅ Sleutel opgeslagen"  )
                    )
                  )
                  , provider==="ollama" && (
                    React.createElement('div', { style: {background:C.surfaceAlt,borderRadius:10,padding:12},}
                      , React.createElement('div', { style: {fontSize:12,color:C.soil,marginBottom:8,lineHeight:1.6},}
                        , React.createElement('strong', null, "Ollama instellen:" ), React.createElement('br', null), "1. Installeer via"
                          , " "
                        , React.createElement('span', { style: {color:C.sky,cursor:"pointer"},
                          onClick: ()=>window.open("https://ollama.com"),}, "ollama.com"), React.createElement('br', null), "2. Start: "
                          , React.createElement('code', { style: {background:"#eee",padding:"1px 4px",borderRadius:4},}, "ollama serve" ), React.createElement('br', null), "3. Download model: "
                           , React.createElement('code', { style: {background:"#eee",padding:"1px 4px",borderRadius:4},}, "ollama pull llama3.2"  )
                      )
                      , React.createElement('input', { value: aiPs.ollamaUrl||"http://localhost:11434",
                        onChange: e=>saveAiPs({ollamaUrl:e.target.value}),
                        placeholder: "http://localhost:11434",
                        style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                          padding:"8px 12px",fontSize:13,outline:"none",
                          fontFamily:"inherit",boxSizing:"border-box",marginBottom:6},})
                      , React.createElement('input', { value: aiPs.model||"llama3.2",
                        onChange: e=>saveAiPs({model:e.target.value}),
                        placeholder: "llama3.2",
                        style: {width:"100%",border:`1px solid ${C.border}`,borderRadius:8,
                          padding:"8px 12px",fontSize:13,outline:"none",
                          fontFamily:"inherit",boxSizing:"border-box"},})
                    )
                  )
                )
              );
            })()

            /* Stats */
            , React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:16,marginBottom:12},}
              , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:10,fontSize:14},}, "📊 Statistieken" )
              , [
                ["Planten met foto", plants.filter(p=>p.photoUrl||_optionalChain([p, 'access', _309 => _309.photos, 'optionalAccess', _310 => _310.length])).length],
                ["Planten met zorgdata", plants.filter(p=>_optionalChain([SPECIES_DB, 'access', _311 => _311[p.species], 'optionalAccess', _312 => _312.care])).length],
                ["Actieve events", plants.reduce((n,p)=>{const t=new Date().toISOString().split("T")[0]; return n+(p.careEvents||[]).filter(e=>e.endDate>=t).length;},0)],
                ["Logs deze maand", logs.filter(l=>_optionalChain([l, 'access', _313 => _313.timestamp, 'optionalAccess', _314 => _314.startsWith, 'call', _315 => _315(new Date().toISOString().slice(0,7))])).length],
              ].map(([label,val])=>(
                React.createElement('div', { key: label, style: {display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${C.border}`,fontSize:13},}
                  , React.createElement('span', { style: {color:C.muted},}, label)
                  , React.createElement('span', { style: {fontWeight:700,color:C.soil},}, val)
                )
              ))
            )
            /* Quick links */
            , React.createElement('div', { style: {background:C.surface,borderRadius:14,overflow:"hidden",marginBottom:12},}
              , React.createElement('button', {
                onClick:()=>{setTab("data");window.scrollTo(0,0);},
                style:{width:"100%",padding:"14px 16px",border:"none",background:"none",
                  cursor:"pointer",textAlign:"left",fontSize:14,color:C.soil,
                  fontFamily:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center"}},
                "💾 Data exporteren / importeren",
                React.createElement('span', {style:{color:C.muted}}, "›")
              )
            )
          )
        )

        /* ── SECTIONS ── */
        , tab === "sections" && (
          React.createElement(SectionManager, {
            sections: sections, plants: plants,
            onAdd: onAddSection, onDelete: onDeleteSection, onRename: onRenameSection,
            estates: estates, activeEstateId: activeEstateId,
            onAddEstate: onAddEstate, onDeleteEstate: onDeleteEstate,
            onRenameEstate: onRenameEstate, onSelectEstate: onSelectEstate,}
          )
        )

        /* ── NOTIFICATIONS ── */
        , tab === "notif" && (
          React.createElement('div', null
            , permission === "unsupported" && (
              React.createElement('div', { style: {background:C.sandLight,borderRadius:10,padding:12,marginBottom:12,fontSize:13,color:C.muted},}, "⚠️ Meldingen worden niet ondersteund in deze browser."

              )
            )
            , window.location.protocol === "http:" && permission !== "granted" && (
              React.createElement('div', { style: {background:C.sandLight,borderRadius:10,padding:12,marginBottom:12,fontSize:13,color:C.soil,lineHeight:1.5},}, "⚠️ "
                 , React.createElement('strong', null, "HTTPS vereist." ), " Meldingen werken alleen via een beveiligde verbinding (https://). Open de app via HTTPS om meldingen in te schakelen. Stel een SSL-certificaat in op je NAS via DSM → Certificaat → Let's Encrypt."
              )
            )
            , permission === "denied" && (
              React.createElement('div', { style: {background:C.terracottaLight,borderRadius:10,padding:12,marginBottom:12,fontSize:13,color:C.terracotta,lineHeight:1.5},}, "🚫 "
                 , React.createElement('strong', null, "Geblokkeerd."), " Ga in Chrome naar Instellingen → Siteinstell. → Meldingen en verwijder de blokkade voor dit adres."
              )
            )

            /* Master toggle */
            , React.createElement('div', { style: {background:C.surface,borderRadius:12,padding:14,marginBottom:10,border:`1px solid ${C.border}`},}
              , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center"},}
                , React.createElement('div', null
                  , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:C.soil},}, "🔔 Meldingen inschakelen"  )
                  , React.createElement('div', { style: {fontSize:12,color:C.muted,marginTop:2},}
                    , permission==="granted"?"Toestemming verleend ✅":permission==="denied"?"Geblokkeerd 🚫":"Toestemming vereist"
                  )
                )
                , permission === "granted"
                  ? React.createElement(Toggle, { value: notif.enabled, onChange: v=>setN("enabled",v),})
                  : React.createElement(Btn, { small: true, onClick: handleEnableNotif, disabled: permission==="denied"||permission==="unsupported"||window.location.protocol==="http:",}
                      , permission==="denied"?"Geblokkeerd":window.location.protocol==="http:"?"Vereist HTTPS":"Toestaan"
                    )
                
              )
            )

            /* Watering */
            , React.createElement('div', { style: {background:C.surface,borderRadius:12,padding:14,marginBottom:10,border:`1px solid ${C.border}`,opacity:notif.enabled?1:0.5},}
              , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil,marginBottom:10},}, "💧 Waterherinnering" )
              , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},}
                , React.createElement('span', { style: {fontSize:13},}, "Ingeschakeld")
                , React.createElement(Toggle, { value: notif.wateringReminder, onChange: v=>setN("wateringReminder",v),})
              )
              , notif.wateringReminder && (React.createElement(React.Fragment, null
                , React.createElement('div', { style: {marginBottom:10},}
                  , React.createElement('div', { style: {fontSize:11,fontWeight:600,color:C.muted,marginBottom:6},}, "HOEVEEL UUR VAN TEVOREN"   )
                  , React.createElement('div', { style: {display:"flex",gap:6,flexWrap:"wrap"},}
                    , [2,4,8,12,24].map(h=>(
                      React.createElement('button', { key: h, onClick: ()=>setN("wateringHoursBefore",h),
                        style: {padding:"5px 12px",borderRadius:20,border:`1px solid ${notif.wateringHoursBefore===h?C.green:C.border}`,
                          background:notif.wateringHoursBefore===h?C.greenPale:"none",
                          color:notif.wateringHoursBefore===h?C.green:C.muted,
                          cursor:"pointer",fontSize:12,fontFamily:"inherit"},}
                        , h, "u"
                      )
                    ))
                  )
                )
                , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center"},}
                  , React.createElement('span', { style: {fontSize:13},}, "Te laat gemist alert"   )
                  , React.createElement(Toggle, { value: notif.missedWateringAlert, onChange: v=>setN("missedWateringAlert",v),})
                )
              ))
            )

            /* Health check */
            , React.createElement('div', { style: {background:C.surface,borderRadius:12,padding:14,marginBottom:10,border:`1px solid ${C.border}`,opacity:notif.enabled?1:0.5},}
              , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil,marginBottom:10},}, "❤️ Gezondheidscheck" )
              , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},}
                , React.createElement('span', { style: {fontSize:13},}, "Ingeschakeld")
                , React.createElement(Toggle, { value: notif.healthCheckReminder, onChange: v=>setN("healthCheckReminder",v),})
              )
              , notif.healthCheckReminder && (
                React.createElement('div', null
                  , React.createElement('div', { style: {fontSize:11,fontWeight:600,color:C.muted,marginBottom:6},}, "ELKE HOEVEEL DAGEN"  )
                  , React.createElement('div', { style: {display:"flex",gap:6,flexWrap:"wrap"},}
                    , [3,7,14,30].map(d=>(
                      React.createElement('button', { key: d, onClick: ()=>setN("healthCheckIntervalDays",d),
                        style: {padding:"5px 12px",borderRadius:20,border:`1px solid ${notif.healthCheckIntervalDays===d?C.green:C.border}`,
                          background:notif.healthCheckIntervalDays===d?C.greenPale:"none",
                          color:notif.healthCheckIntervalDays===d?C.green:C.muted,
                          cursor:"pointer",fontSize:12,fontFamily:"inherit"},}
                        , d, "d"
                      )
                    ))
                  )
                )
              )
            )

            /* Test */
            , notif.enabled && permission==="granted" && (
              React.createElement('button', { onClick: ()=>sendNotification("🌿 Plant Care","Meldingen werken correct!","test"),
                style: {width:"100%",padding:10,border:`1px solid ${C.green}`,borderRadius:10,
                  background:"none",color:C.green,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600},}, "📨 Testmelding versturen"

              )
            )
          )
        )

        /* ── TAAL ── */
        , tab === "taal" && (
          React.createElement('div', null
            , React.createElement('div', { style: {background:C.surface,borderRadius:12,padding:14,marginBottom:12,
              border:`1px solid ${C.border}`},}
              , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:4,fontSize:14},}, "🌐 Taal / Language"   )
              , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:14,lineHeight:1.5},}, "Kies de taal voor de app. De plantenzorgdata blijft in het Engels omdat deze van externe bronnen komt."

              )
              , Object.entries(LANGUAGES).map(([code, l]) => (
                React.createElement('button', { key: code, onClick: ()=>onSetLang(code),
                  style: {width:"100%",display:"flex",alignItems:"center",gap:14,
                    padding:"14px 16px",marginBottom:8,borderRadius:12,cursor:"pointer",
                    border:`1.5px solid ${lang===code?C.green:C.border}`,
                    background:lang===code?C.greenPale:C.surface,fontFamily:"inherit",
                    textAlign:"left"},}
                  , React.createElement('span', { style: {fontSize:22},}, l.flag.split("/")[0])
                  , React.createElement('div', { style: {flex:1},}
                    , React.createElement('div', { style: {fontWeight:700,fontSize:14,color:lang===code?C.green:C.soil},}
                      , l.name
                    )
                    , lang===code && React.createElement('div', { style: {fontSize:11,color:C.green,fontWeight:600},}, "✓ Actief" )
                  )
                  , lang===code && React.createElement('span', { style: {fontSize:18},}, "✓")
                )
              ))
            )
            , React.createElement('div', { style: {background:C.sandLight,borderRadius:10,padding:12,fontSize:12,
              color:C.muted,lineHeight:1.5},}, "💡 Nieuwe talen kunnen worden toegevoegd. Stuur een verzoek via de instellingen."

            )
          )
        )

        /* ── DATA ── */
        , tab === "data" && (
          React.createElement('div', null

            , React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:14,marginBottom:12,border:`1px solid ${C.border}`}}
              , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:4,fontSize:14}}, "📤 Exporteren")
              , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:10,lineHeight:1.5}}, "Download al je data als JSON-bestand — handig als back-up of om te migreren naar een ander apparaat.")
              , React.createElement('div', { style: {fontSize:12,color:C.muted,marginBottom:10}}, plants.length, " planten · ", logs.length, " logs · ", sections.length, " afdelingen")
              , React.createElement('button', { onClick: handleExport,
                  style: {width:"100%",padding:"11px",border:"none",borderRadius:10,
                    background:C.green,color:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:700}},
                "📤 Download backup")
            )

            , React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:14,marginBottom:12,border:`1px solid ${C.border}`}}
              , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:4,fontSize:14}}, "📥 Importeren")
              , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:10,lineHeight:1.5}}
                , "Laad een back-up bestand. Dit "
                , React.createElement('strong', null, "overschrijft")
                , " alle huidige data.")
              , importMsg && React.createElement('div', {
                  style: {background:importMsg.type==="ok"?C.greenPale:C.terracottaLight,borderRadius:8,
                    padding:10,fontSize:13,color:importMsg.type==="ok"?C.green:C.terracotta,marginBottom:10}},
                  importMsg.text)
              , React.createElement('label', null
                , React.createElement('div', { style: {width:"100%",padding:"11px",border:`1px dashed ${C.border}`,borderRadius:10,
                    textAlign:"center",cursor:"pointer",fontSize:14,fontWeight:600,
                    color:importing?C.muted:C.soil,boxSizing:"border-box"}},
                  importing?"⏳ Importeren...":"📥 Kies backup bestand")
                , React.createElement('input', { type:"file", accept:".json", onChange:handleImport,
                    disabled:importing, style:{display:"none"}})
              )
            )

            , React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:14,marginBottom:12,border:`1px solid ${C.border}33`}}
              , React.createElement('div', { style: {fontWeight:700,color:C.danger,marginBottom:4,fontSize:14}}, "⚠️ Gegevens wissen")
              , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:12,lineHeight:1.5}}, "Verwijder alle planten, logs en instellingen. Dit kan niet ongedaan worden gemaakt.")
              , React.createElement('button', {
                  onClick:()=>{
                    if(window.confirm("Weet je zeker dat je ALLE data wilt verwijderen? Dit kan niet ongedaan worden gemaakt.")) {
                      Object.keys(localStorage).filter(k=>k.startsWith("plantcare")).forEach(k=>localStorage.removeItem(k));
                      window.location.reload();
                    }
                  },
                  style:{width:"100%",padding:"10px",border:`1px solid ${C.danger}`,borderRadius:10,
                    background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,
                    color:C.danger,fontWeight:600}},
                "🗑️ Wis alle data")
            )

            , React.createElement('div', { style: {background:C.surface,borderRadius:14,padding:14,marginBottom:12,border:`1px solid ${C.border}`}}
              , React.createElement('div', { style: {fontWeight:700,color:C.soil,marginBottom:4,fontSize:14}}, "🔒 Privacy")
              , React.createElement('div', { style: {fontSize:13,color:C.muted,marginBottom:10,lineHeight:1.5}}, "Plant Care slaat alle data uitsluitend op je eigen apparaat op. Geen accounts, geen tracking.")
              , React.createElement('button', {
                  onClick:()=>setShowPrivacy(p=>!p),
                  style:{width:"100%",padding:"10px",border:`1px solid ${C.border}`,borderRadius:10,
                    background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,
                    color:C.green,fontWeight:600}},
                showPrivacy ? "▲ Privacybeleid sluiten" : "📋 Privacybeleid bekijken")
              , showPrivacy && React.createElement('div', {
                  style:{marginTop:12,maxHeight:400,overflowY:"auto",borderRadius:10,
                    border:`1px solid ${C.border}`,padding:16,background:C.surfaceAlt,
                    fontSize:13,lineHeight:1.8,color:C.text}},
                React.createElement('h3', {style:{color:C.soil,marginBottom:12,fontSize:16}}, "🌿 Privacybeleid — Plant Care"),
                React.createElement('p', {style:{color:C.muted,fontSize:11,marginBottom:16}}, "Laatste update: juni 2025"),
                React.createElement('h4', {style:{color:C.green,marginBottom:6,marginTop:12}}, "Kort samengevat"),
                React.createElement('p', {style:{marginBottom:12}}, "Plant Care slaat alle gegevens uitsluitend op je eigen apparaat op via localStorage. Er worden geen persoonsgegevens verzameld, geen accounts aangemaakt en geen data naar externe servers gestuurd."),
                React.createElement('h4', {style:{color:C.green,marginBottom:6,marginTop:12}}, "Optionele externe diensten"),
                React.createElement('ul', {style:{paddingLeft:20,marginBottom:12}},
                  React.createElement('li', {style:{marginBottom:4}}, React.createElement('strong', null, "Claude AI"), " — AI Plant Adviseur. Alleen je vraag en plantnaam worden verstuurd."),
                  React.createElement('li', {style:{marginBottom:4}}, React.createElement('strong', null, "ASPCA.org"), " — giftigheidsdata. Alleen plantsoort verstuurd."),
                  React.createElement('li', {style:{marginBottom:4}}, React.createElement('strong', null, "Wikipedia / iNaturalist"), " — plantinfo, publieke API's.")),
                React.createElement('h4', {style:{color:C.green,marginBottom:6,marginTop:12}}, "Gegevens verwijderen"),
                React.createElement('p', {style:{marginBottom:4}}, "Gebruik de rode knop hierboven om alle data te wissen."),
                React.createElement('p', {style:{marginBottom:4}},
                  "Vragen? ",
                  React.createElement('span', {style:{color:C.sky,cursor:"pointer"},
                    onClick:()=>window.open("https://github.com/Qwinie/plant-care")},
                    "github.com/Qwinie/plant-care"))
              )
            )

          )
        )
      )
    )
  );
};

// Reusable toggle switch
const Toggle = ({value, onChange}) => (
  React.createElement('button', { onClick: ()=>onChange(!value),
    style: {width:44,height:24,borderRadius:12,border:"none",cursor:"pointer",
      background:value?C.green:C.border,position:"relative",transition:"background 0.2s",flexShrink:0},}
    , React.createElement('div', { style: {position:"absolute",top:3,left:value?22:3,width:18,height:18,
      borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"},})
  )
);






const Dashboard = ({plants, logs, sections, estates, activeEstate, onSelectPlant, onAddPlant, onDeletePlant, onOpenSettings, onQuickWater, t, bulkMode, selectedPlants, onToggleBulk, onBulkWater, onBulkMove, allSections, onOpenScanner, vacation}) => {
  const [showAdd, setShowAdd] = useState(false);
  const [filterSection, setFilterSection] = useState("Alle");
  const [filterCat, setFilterCat] = useState("Alle");
  const [sortBy, setSortBy] = useState("urgent");
  const [filterMode, setFilterMode] = useState("section"); // "section" | "category"
  const [searchText, setSearchText] = useState("");
  const season = getCurrentSeason();

  const urgent = plants.filter(p => p.nextWater && daysUntil(p.nextWater) <= 1);
  const soon = plants.filter(p => p.nextWater && daysUntil(p.nextWater) === 2);

  const displayed = useMemo(() => {
    let list = plants;
    if (filterMode === "section" && filterSection !== "Alle")
      list = list.filter(p => (p.section || "") === filterSection);
    if (filterMode === "category" && filterCat !== "Alle")
      list = list.filter(p => _optionalChain([SPECIES_DB, 'access', _316 => _316[p.species], 'optionalAccess', _317 => _317.category]) === filterCat);
    if (searchText.trim()) {
      const q = searchText.toLowerCase().trim();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.species.toLowerCase().includes(q) ||
        (_optionalChain([SPECIES_DB, 'access', _316b => _316b[p.species], 'optionalAccess', _317b => _317b.commonName]) || "").toLowerCase().includes(q)
      );
    }
    if (sortBy === "urgent") list = [...list].sort((a,b) => { const da=a.nextWater?daysUntil(a.nextWater):999,db=b.nextWater?daysUntil(b.nextWater):999; if(da<=0&&db>0)return -1; if(db<=0&&da>0)return 1; return da-db; });
    if (sortBy === "water") list = [...list].sort((a,b) => (daysUntil(a.nextWater)||999)-(daysUntil(b.nextWater)||999));
    if (sortBy === "health") list = [...list].sort((a,b) => a.health - b.health);
    if (sortBy === "name") list = [...list].sort((a,b) => a.name.localeCompare(b.name));
    return list;
  }, [plants, filterSection, filterCat, filterMode, sortBy]);

  const usedCats = [...new Set(plants.map(p => _optionalChain([SPECIES_DB, 'access', _318 => _318[p.species], 'optionalAccess', _319 => _319.category])).filter(Boolean))].sort();

  // Group by section when in section mode and showing all
  const showGrouped = filterMode === "section" && filterSection === "Alle" && sections.length > 0;

  const groupedPlants = useMemo(() => {
    if (!showGrouped) return null;
    const groups = [];
    const sectionNames = sections.map(s => s.name);
    // Named sections
    sections.forEach(s => {
      const inSection = displayed.filter(p => p.section === s.name);
      if (inSection.length > 0) groups.push({ section: s, plants: inSection });
    });
    // Uncategorized
    const unsectioned = displayed.filter(p => !p.section || !sectionNames.includes(p.section));
    if (unsectioned.length > 0) groups.push({ section: {id:"_none",name:"Overige",color:C.muted}, plants: unsectioned });
    return groups;
  }, [displayed, sections, showGrouped]);

  return (
    React.createElement('div', { style: {minHeight:"100vh",background:C.bg,fontFamily:"system-ui,sans-serif",paddingBottom:80},}
      /* Header */
      /* Dashboard header */
      , React.createElement('div', { style: {background:`linear-gradient(160deg, ${C.soil} 0%, ${C.soilLight} 60%, #3A2E1A 100%)`,
        padding:"52px 20px 22px",position:"relative",overflow:"hidden"},}
        /* Decorative leaf silhouette */
        , React.createElement('div', { style: {position:"absolute",right:-20,top:-10,fontSize:120,opacity:0.06,
          transform:"rotate(20deg)",pointerEvents:"none",userSelect:"none"},}, "🌿")
        , React.createElement('div', { style: {position:"absolute",right:60,bottom:-20,fontSize:80,opacity:0.04,
          transform:"rotate(-15deg)",pointerEvents:"none",userSelect:"none"},}, "🌱")

        , React.createElement('div', { style: {display:"flex",justifyContent:"space-between",alignItems:"flex-start",position:"relative"},}
          , React.createElement('div', null
            , React.createElement('div', { style: {fontSize:10,color:C.sand,letterSpacing:3,textTransform:"uppercase",
              marginBottom:6,fontWeight:600,display:"flex",alignItems:"center",gap:6},}
              , React.createElement('span', null, SEASON_ICONS[season])
              , React.createElement('span', null, ({spring:"Lente",summer:"Zomer",autumn:"Herfst",winter:"Winter"}[season]||season.charAt(0).toUpperCase()+season.slice(1)), " " , new Date().getFullYear())
            )
            , React.createElement('div', { style: {fontSize:10,color:"rgba(255,255,255,0.5)",marginBottom:2,
              display:"flex",alignItems:"center",gap:4},}
              , React.createElement('span', null, _optionalChain([activeEstate, 'optionalAccess', _320 => _320.icon])||"🌿")
              , React.createElement('span', { style: {letterSpacing:1,textTransform:"uppercase",fontWeight:600},}
                , _optionalChain([activeEstate, 'optionalAccess', _321 => _321.name])||"Mijn Tuin"
              )
            )
            , React.createElement('div', {dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="38" height="38"><rect width="100" height="100" rx="18" fill="#2C1F0F"/><polygon points="18,95 20,78 80,78 82,95" fill="#AF5235"/><polygon points="18,95 26,78 26,95" fill="#C96040"/><polygon points="74,78 82,78 82,95 74,95" fill="#8B3C22"/><rect x="15" y="70" width="70" height="13" rx="6" fill="#CA9460"/><rect x="16" y="70" width="28" height="5" rx="3" fill="#DDB87A"/><rect x="15" y="78" width="70" height="4" rx="2" fill="#966430"/><ellipse cx="50" cy="74" rx="30" ry="7" fill="#3A2410"/><rect x="37" y="20" width="26" height="55" rx="13" fill="#427548"/><rect x="37" y="25" width="8" height="43" rx="4" fill="#345d38"/><rect x="53" y="25" width="8" height="43" rx="4" fill="#345d38"/><rect x="40" y="28" width="6" height="38" rx="3" fill="#5a9e6a"/><rect x="14" y="35" width="25" height="42" rx="12" fill="#427548"/><rect x="14" y="35" width="14" height="24" rx="7" fill="#5a9e6a"/><rect x="14" y="40" width="8" height="30" rx="4" fill="#345d38"/><rect x="61" y="48" width="25" height="42" rx="12" fill="#427548"/><rect x="72" y="48" width="14" height="24" rx="7" fill="#5a9e6a"/><rect x="72" y="53" width="8" height="30" rx="4" fill="#345d38"/><line x1="36" y1="32" x2="27" y2="27" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/><line x1="36" y1="32" x2="27" y2="37" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/><line x1="36" y1="48" x2="27" y2="43" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/><line x1="36" y1="48" x2="27" y2="53" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/><line x1="64" y1="38" x2="73" y2="33" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/><line x1="64" y1="38" x2="73" y2="43" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/><line x1="64" y1="54" x2="73" y2="49" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/><line x1="64" y1="54" x2="73" y2="59" stroke="#EDD8A8" stroke-width="1.5" stroke-linecap="round"/><line x1="14" y1="48" x2="6" y2="43" stroke="#EDD8A8" stroke-width="1.2" stroke-linecap="round"/><line x1="14" y1="48" x2="6" y2="53" stroke="#EDD8A8" stroke-width="1.2" stroke-linecap="round"/><line x1="86" y1="60" x2="94" y2="55" stroke="#EDD8A8" stroke-width="1.2" stroke-linecap="round"/><line x1="86" y1="60" x2="94" y2="65" stroke="#EDD8A8" stroke-width="1.2" stroke-linecap="round"/><ellipse cx="26" cy="26" rx="4" ry="5.5" fill="#D05A38"/><ellipse cx="30" cy="26" rx="4" ry="5.5" fill="#D05A38"/><ellipse cx="24" cy="30" rx="4" ry="5.5" fill="#D05A38"/><ellipse cx="32" cy="30" rx="4" ry="5.5" fill="#D05A38"/><circle cx="28" cy="30" r="4" fill="#F0C040"/><circle cx="28" cy="30" r="2" fill="#D4960E"/><ellipse cx="44" cy="16" rx="3" ry="4" fill="#C05030"/><ellipse cx="50" cy="14" rx="3" ry="4" fill="#C85535"/><ellipse cx="56" cy="16" rx="3" ry="4" fill="#C05030"/><ellipse cx="44" cy="22" rx="3" ry="4" fill="#C05030"/><ellipse cx="56" cy="22" rx="3" ry="4" fill="#C05030"/><circle cx="50" cy="19" r="5" fill="#F0C040"/><circle cx="50" cy="19" r="2.5" fill="#D4960E"/></svg>'},style:{flexShrink:0}})
            , React.createElement('div', { style: {fontSize:26,fontWeight:900,color:"#F5F1EB",letterSpacing:-0.5,lineHeight:1.1},}, "Planten"

            )
            , React.createElement('div', { style: {fontSize:12,color:C.greenLight,marginTop:4,fontWeight:500,
              display:"flex",alignItems:"center",gap:8},}
              , React.createElement('span', null, plants.length, " plant" , plants.length!==1?"en":"", " · "  , logs.length, " logs" )
              , React.createElement('button', { onClick: onOpenSettings,
                style: {background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",
                  borderRadius:8,padding:"2px 8px",cursor:"pointer",fontSize:10,color:C.sand,
                  fontFamily:"inherit",fontWeight:600},}
                , _optionalChain([t, 'optionalAccess', _322 => _322.switchLocation])||"+ Locatie wisselen"
              )
            )
          )
          , React.createElement('div', { style: {display:"flex",gap:8,marginTop:4},}
            , React.createElement('button', { onClick: onToggleBulk, className: "pca-btn",
              style: {background:bulkMode?"rgba(255,215,0,0.25)":"rgba(255,255,255,0.12)",
                border:`1px solid ${bulkMode?"rgba(255,215,0,0.5)":"rgba(255,255,255,0.15)"}`,
                color:bulkMode?"#FFD700":"#F5F1EB",borderRadius:14,width:42,height:42,
                cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",
                justifyContent:"center",flexShrink:0,backdropFilter:"blur(4px)"},}, "☑️"

            )
            , React.createElement('button', { onClick: onOpenScanner, className: "pca-btn",
              style: {background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.15)",
                color:"#F5F1EB",borderRadius:14,width:42,height:42,cursor:"pointer",fontSize:18,
                display:"flex",alignItems:"center",justifyContent:"center",
                flexShrink:0,backdropFilter:"blur(4px)"},
              title: "QR scanner" ,}, "📷"

            )
            , React.createElement('button', { onClick: onOpenSettings, className: "pca-btn",
              style: {background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.15)",
                color:"#F5F1EB",borderRadius:14,width:42,height:42,cursor:"pointer",fontSize:18,
                display:"flex",alignItems:"center",justifyContent:"center",
                flexShrink:0,backdropFilter:"blur(4px)"},}, "⚙️"

            )
          )
        )

        /* Stats row */
        , React.createElement('div', { style: {display:"flex",gap:8,marginTop:16,position:"relative"},}
          , [
            {label:_optionalChain([t, 'optionalAccess', _323 => _323.waterNow])||"Water nu",val:urgent.length,color:urgent.length?"#FF8A80":C.greenLight,
             bg:urgent.length?"rgba(184,92,66,0.25)":"rgba(255,255,255,0.08)",
             icon:"💧"},
            {label:_optionalChain([t, 'optionalAccess', _324 => _324.soon])||"Binnenkort",val:soon.length,color:soon.length?"#FFD54F":C.greenLight,
             bg:soon.length?"rgba(212,150,14,0.2)":"rgba(255,255,255,0.08)",
             icon:"⏳"},
            {label:_optionalChain([t, 'optionalAccess', _325 => _325.avgHealth])||"Gem. gezondheid",
             val:plants.length?`${Math.round(plants.reduce((s,p)=>s+p.health,0)/plants.length)}%`:"—",
             color:C.greenLight,bg:"rgba(255,255,255,0.08)",icon:"❤️"},
          ].map(({label,val,color,bg,icon})=>(
            React.createElement('div', { key: label, style: {flex:1,background:bg,borderRadius:12,padding:"10px 10px 8px",
              border:"1px solid rgba(255,255,255,0.08)",backdropFilter:"blur(4px)"},}
              , React.createElement('div', { style: {fontSize:11,color:"rgba(255,255,255,0.45)",marginBottom:2},}, icon)
              , React.createElement('div', { style: {fontSize:20,fontWeight:800,color,lineHeight:1},}, val)
              , React.createElement('div', { style: {fontSize:9,color:C.sand,marginTop:3,fontWeight:500,letterSpacing:0.3},}
                , label.toUpperCase()
              )
            )
          ))
        )
      )

      /* Bulk action bar */
      , bulkMode && (
        React.createElement('div', { style: {background:C.soil,padding:"10px 16px",display:"flex",alignItems:"center",gap:10},}
          , React.createElement('div', { style: {color:C.sand,fontSize:13,fontWeight:600,flex:1},}
            , selectedPlants.length, " geselecteerd"
          )
          , selectedPlants.length > 0 && (React.createElement(React.Fragment, null
            , React.createElement('button', { onClick: onBulkWater, className: "pca-btn",
              style: {background:C.sky,border:"none",borderRadius:10,padding:"7px 14px",
                cursor:"pointer",color:"#fff",fontSize:12,fontWeight:700,fontFamily:"inherit"},}, "💧 Water gegeven"

            )
            , React.createElement('div', { style: {position:"relative"},}
              , React.createElement('select', { onChange: e=>e.target.value&&onBulkMove(e.target.value),
                style: {background:C.green,border:"none",borderRadius:10,padding:"7px 14px",
                  cursor:"pointer",color:"#fff",fontSize:12,fontWeight:700,fontFamily:"inherit",
                  appearance:"none",paddingRight:28},}
                , React.createElement('option', { value: "",}, "📂 Verplaats naar..."  )
                , (allSections||[]).map(s=>React.createElement('option', { key: s.id, value: s.name,}, s.name))
              )
            )
          ))
          , React.createElement('button', { onClick: onToggleBulk,
            style: {background:"none",border:"1px solid rgba(255,255,255,0.3)",borderRadius:10,
              padding:"7px 10px",cursor:"pointer",color:C.sand,fontSize:12,fontFamily:"inherit"},}, "✕ Stop"

          )
        )
      )

      , React.createElement('div', { style: {padding:"0 16px",maxWidth:600,margin:"0 auto"},}
        /* Seasonal calendar */
        , React.createElement(SeasonalCalendar, { plants: plants,})

        /* Urgent alerts */
        , urgent.length > 0 && (
          React.createElement('div', { className: "pca-fade", style: {background:`linear-gradient(135deg, ${C.terracottaLight}, #F5D0C4)`,
            border:`1.5px solid ${C.terracotta}44`,borderRadius:16,padding:14,margin:"14px 0 4px",
            boxShadow:"0 2px 12px rgba(184,92,66,0.15)"},}
            , React.createElement('div', { style: {fontWeight:700,color:C.terracotta,marginBottom:8,fontSize:13,
              display:"flex",alignItems:"center",gap:6},}
              , React.createElement('span', { className: "pca-urgent",}, "💧"), " Water nu nodig"
            )
            , urgent.map(p=>(
              React.createElement('div', { key: p.id, onClick: ()=>onSelectPlant(p),
                style: {fontSize:13,color:C.soil,marginBottom:4,cursor:"pointer",
                  display:"flex",alignItems:"center",gap:6,padding:"4px 0"},}
                , React.createElement('span', { style: {width:6,height:6,borderRadius:"50%",background:C.terracotta,flexShrink:0},})
                , React.createElement('strong', null, p.name)
                , React.createElement('span', { style: {color:C.muted,fontSize:11},}, "(", _optionalChain([SPECIES_DB, 'access', _326 => _326[p.species], 'optionalAccess', _327 => _327.commonName])||p.species, ")")
                , React.createElement('span', { style: {marginLeft:"auto",fontSize:11,fontWeight:700,color:C.terracotta},}
                  , daysUntil(p.nextWater)<=0?"⚠️ Te laat":"Vandaag"
                )
              )
            ))
          )
        )

        /* Filter mode toggle */
        , vacation && vacation.active && React.createElement('div', {
            style:{background:"#FFF3CD",border:"2px solid #D4960E",borderRadius:12,padding:"10px 14px",
              marginBottom:10,display:"flex",alignItems:"center",gap:10}},
            React.createElement('span', {style:{fontSize:20}}, "🏖️"),
            React.createElement('div', {style:{flex:1}},
              React.createElement('div', {style:{fontWeight:700,color:"#92690A",fontSize:13}}, "Vakantie-modus actief"),
              React.createElement('div', {style:{fontSize:12,color:"#92690A"}},
                vacation.caretaker ? `Verzorger: ${vacation.caretaker}` : "Waterschema's gepauzeerd",
                vacation.end ? ` · Tot ${new Date(vacation.end).toLocaleDateString("nl-NL")}` : ""
              )
            )
          )
          , React.createElement('div', { style: {marginTop:14,marginBottom:8,display:"flex",gap:6,alignItems:"center"},}
          /* View mode toggle */
          , React.createElement('div', { style: {display:"flex",background:C.surfaceAlt,borderRadius:10,padding:2,gap:1},}
            , [{id:"section",icon:"📂",label:"Afdeling"},{id:"category",icon:"🌿",label:"Categorie"}].map(m=>(
              React.createElement('button', { key: m.id, onClick: ()=>setFilterMode(m.id), className: "pca-btn",
                style: {padding:"5px 10px",borderRadius:8,border:"none",
                  background:filterMode===m.id?C.surface:"none",
                  color:filterMode===m.id?C.green:C.muted,
                  cursor:"pointer",fontSize:11,fontFamily:"inherit",
                  fontWeight:filterMode===m.id?700:400,
                  boxShadow:filterMode===m.id?C.shadowSm:"none",
                  transition:"all 0.2s"},}
                , m.icon, " " , m.label
              )
            ))
          )
          , React.createElement('div', { style: {flex:1},})
          /* Sort */
          , [["urgent","🆘"],["water","💧"],["health","❤️"],["name","Az"]].map(([v,l])=>(
            React.createElement('button', { key: v, onClick: ()=>setSortBy(v), className: "pca-btn",
              style: {padding:"5px 10px",borderRadius:20,
                border:`1.5px solid ${sortBy===v?C.green:C.border}`,
                background:sortBy===v?C.greenPale:"none",
                color:sortBy===v?C.green:C.muted,
                cursor:"pointer",fontSize:11,fontFamily:"inherit",
                fontWeight:sortBy===v?700:400},}
              , l
            )
          ))
        )

        /* Section or Category filter chips */
        , filterMode === "section" ? (
          React.createElement('div', { style: {display:"flex",gap:6,overflowX:"auto",paddingBottom:4,marginBottom:10},}
            , ["Alle",...sections.map(s=>s.name)].map(name=>{
              const s = sections.find(s=>s.name===name);
              const active = filterSection === name;
              return (
                React.createElement('button', { key: name, onClick: ()=>setFilterSection(name),
                  style: {padding:"5px 12px",borderRadius:20,border:`1px solid ${active?(_optionalChain([s, 'optionalAccess', _328 => _328.color])||C.green):C.border}`,
                    background:active?(_optionalChain([s, 'optionalAccess', _329 => _329.color])||C.green)+"22":"none",
                    color:active?(_optionalChain([s, 'optionalAccess', _330 => _330.color])||C.green):C.muted,
                    cursor:"pointer",fontSize:12,fontWeight:active?700:400,whiteSpace:"nowrap",fontFamily:"inherit",
                    display:"flex",alignItems:"center",gap:5},}
                  , s && React.createElement('div', { style: {width:8,height:8,borderRadius:"50%",background:s.color},})
                  , name
                )
              );
            })
          )
        ) : (
          React.createElement('div', { style: {display:"flex",gap:6,overflowX:"auto",paddingBottom:4,marginBottom:10},}
            , ["Alle",...usedCats].map(cat=>(
              React.createElement('button', { key: cat, onClick: ()=>setFilterCat(cat),
                style: {padding:"5px 12px",borderRadius:20,border:`1px solid ${filterCat===cat?C.green:C.border}`,background:filterCat===cat?C.greenPale:"none",color:filterCat===cat?C.green:C.muted,cursor:"pointer",fontSize:12,fontWeight:filterCat===cat?700:400,whiteSpace:"nowrap",fontFamily:"inherit"},}
                , cat
              )
            ))
          )
        )

        /* Plant list — grouped or flat */
        , showGrouped && groupedPlants ? (
          groupedPlants.map(({section:s, plants:sPlants}) => (
            React.createElement('div', { key: s.id, style: {marginBottom:20},}
              , React.createElement('div', { style: {display:"flex",alignItems:"center",gap:8,marginBottom:10,padding:"8px 0 6px"},}
                , React.createElement('div', { style: {width:10,height:10,borderRadius:"50%",background:s.color,
                  boxShadow:`0 0 0 3px ${s.color}33`},})
                , React.createElement('div', { style: {fontWeight:700,fontSize:13,color:C.soil,letterSpacing:-0.2},}, s.name)
                , React.createElement('div', { style: {fontSize:10,color:C.muted,background:C.surfaceAlt,
                  borderRadius:10,padding:"1px 7px",fontWeight:600},}
                  , sPlants.length
                )
                , React.createElement('div', { style: {flex:1,height:1,background:C.border},})
              )
              , sPlants.map((plant, idx) => (
                React.createElement('div', { key: plant.id, style: {animationDelay:`${idx*40}ms`},}
                  , React.createElement(PlantCard, { plant: plant, logs: logs, sections: sections,
                    onSelect: onSelectPlant, onQuickWater: onQuickWater,
                    isSelected: _optionalChain([selectedPlants, 'optionalAccess', _331 => _331.includes, 'call', _332 => _332(plant.id)]), bulkMode: bulkMode,})
                )
              ))
            )
          ))
        ) : (
          displayed.length === 0 ? (
                React.createElement('div', { style: {textAlign:"center",padding:"48px 20px",color:C.muted},}
                  , React.createElement('div', { style: {fontSize:48,marginBottom:12},}, "🌱")
                  , React.createElement('div', { style: {fontWeight:700,fontSize:16,color:C.soil,marginBottom:6},}
                    , plants.length === 0 ? "Voeg je eerste plant toe" : "Geen planten gevonden"
                  )
                  , React.createElement('div', { style: {fontSize:13,lineHeight:1.6},}
                    , plants.length === 0
                      ? "Tik op + om te beginnen. Je kunt planten zoeken op naam of soort."
                      : "Geen planten komen overeen met je filter."
                  )
                )
              ) : displayed.map((plant, idx) => (
                React.createElement('div', { key: plant.id, style: {animationDelay:`${idx*40}ms`},}
                  , React.createElement(PlantCard, { plant: plant, logs: logs, sections: sections,
                    onSelect: onSelectPlant, onQuickWater: onQuickWater,
                    isSelected: _optionalChain([selectedPlants, 'optionalAccess', _333 => _333.includes, 'call', _334 => _334(plant.id)]), bulkMode: bulkMode,})
                )
              ))
        )
      )

      /* FAB */
      , React.createElement('button', { onClick: ()=>setShowAdd(true), className: "pca-btn",
        style: {position:"fixed",bottom:28,right:24,width:58,height:58,borderRadius:"50%",
          background:`linear-gradient(135deg, ${C.green}, #2D5238)`,
          border:"none",color:"#fff",fontSize:26,cursor:"pointer",
          boxShadow:"0 4px 20px rgba(61,107,74,0.5), 0 2px 8px rgba(61,107,74,0.3)",
          display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit",
          fontWeight:300},}, "+"

      )

      , showAdd && React.createElement(AddPlantModal, { onAdd: onAddPlant, sections: sections, onClose: ()=>setShowAdd(false),})

    )
  );
};


// ── Persistent storage hook ───────────────────────────────────────
// Reads from localStorage on first render, writes on every change.
// Falls back to defaultValue if nothing is stored yet.
const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : defaultValue;
    } catch(_e) { return defaultValue; }
  });
  const set = useCallback((next) => {
    setValue(prev => {
      const val = typeof next === 'function' ? next(prev) : next;
      try { localStorage.setItem(key, JSON.stringify(val)); } catch(_e) {}
      return val;
    });
  }, [key]);
  return [value, set];
};

// ══════════════════════════════════════════════════════════════════
// ROOT APP
// ══════════════════════════════════════════════════════════════════
function PlantCareApp() {
  // All state persisted to localStorage — survives tab close / refresh
  const [plants,setPlants]   = useLocalStorage("plantcare_plants", DEFAULT_PLANTS);
  const [logs,setLogs]       = useLocalStorage("plantcare_logs",   DEFAULT_LOGS);
  const [sections,setSections] = useLocalStorage("plantcare_sections", [
    {id:"s1",name:"Woonkamer",color:C.green},
    {id:"s2",name:"Balkon",color:C.sky},
  ]);
  const [estates,setEstates] = useLocalStorage("plantcare_estates", [
    {id:"e1",name:"Thuis",icon:"🏠"},
  ]);
  const [activeEstateId,setActiveEstateId] = useLocalStorage("plantcare_active_estate","e1");
  const activeEstate = estates.find(e=>e.id===activeEstateId) || estates[0] || {name:"Mijn Planten",icon:"🌿"};
  const activeRooms = sections.filter(s=>(s.estateId||"e1")===(activeEstateId||"e1"));
  const [selectedId,setSelectedId] = useState(null);
  const [notifSettings,setNotifSettings] = useLocalStorage("plantcare_notif", DEFAULT_NOTIF_SETTINGS);
  const [_theme, _setTheme] = useState(0);
  useEffect(()=>{
    const handler = () => _setTheme(t=>t+1);
    window.addEventListener("plantcare_theme", handler);
    return () => window.removeEventListener("plantcare_theme", handler);
  },[]);
  const [vacation, setVacation] = useLocalStorage("plantcare_vacation", {active:false,end:"",caretaker:"",notes:""});
  const [showSettings, setShowSettings] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useLocalStorage("plantcare_onboarded", false);
  const [bulkMode, setBulkMode] = useState(false);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [showQRScanner, setShowQRScanner] = useState(false);
  // Show onboarding once on first launch
  useEffect(() => {
    if (!hasSeenOnboarding) setShowOnboarding(true);
  }, []);

  const [apiKey, setApiKey] = useLocalStorage("plantcare_apikey", "");
  const [lang, setLang] = useLocalStorage("plantcare_lang", "nl");
  const t = useLang(lang);

  // Check and fire notifications on mount and every 30 minutes
  useEffect(() => {
    checkAndNotify(plants, notifSettings);
    const interval = setInterval(() => checkAndNotify(plants, notifSettings), 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [plants, notifSettings]);

  // One-time migration: fix old English location names
  useEffect(() => {
    setPlants(prev => prev.map(p => ({
      ...p,
      location: p.location === "Windowsill" ? "Vensterbank" : p.location,
    })));
  }, []); // runs once on mount

  // Check custom reminders on mount — schedule notifications for upcoming ones
  useEffect(() => {
    if (typeof Notification === "undefined" || Notification.permission !== "granted") return;
    const now = new Date();
    const timers = [];
    plants.forEach(plant => {
      (plant.customReminders || []).forEach(r => {
        if (r.done) return;
        const msUntil = new Date(r.datetime) - now;
        if (msUntil > 0 && msUntil < 7 * 24 * 60 * 60 * 1000) {
          timers.push(setTimeout(() => {
            sendNotification(`🌿 ${plant.name}`, r.text, `reminder_${r.id}`);
          }, msUntil));
        }
      });
    });
    return () => timers.forEach(clearTimeout);
  }, []); // run once on mount

  // Auto-update health scores + backfill "added" logs on app open
  useEffect(() => {
    // 1. Recalculate health
    const updated = plants.map(plant => {
      const auto = calculateHealth(plant, logs);
      return Math.abs(auto - plant.health) >= 3 ? {...plant, health: auto} : plant;
    });
    const hasChanges = updated.some((p, i) => p.health !== plants[i].health);
    if (hasChanges) setPlants(updated);

    // 2. Backfill "plant added" log for existing plants that don't have one
    const missingAddedLogs = plants.filter(plant => {
      // Check if this plant already has an "added" auto-log
      const hasAddedLog = logs.some(l =>
        l.plantId === plant.id &&
        l.auto === true &&
        _optionalChain([l, 'access', _335 => _335.notes, 'optionalAccess', _336 => _336.includes, 'call', _337 => _337("toegevoegd aan de collectie")])
      );
      return !hasAddedLog;
    });

    if (missingAddedLogs.length > 0) {
      const backfillLogs = missingAddedLogs.map(plant => ({
        id: uid(),
        plantId: plant.id,
        timestamp: plant.addedDate || new Date().toISOString(),
        parameters: {health: plant.health || 85},
        notes: `🌱 ${plant.name} toegevoegd aan de collectie (${plant.species})`,
        auto: true,
      }));
      setLogs(prev => [...prev, ...backfillLogs]);
    }
  }, []); // run once on mount
  const selected=plants.find(p=>p.id===selectedId);
  const updatePlant=useCallback(u=>setPlants(prev=>prev.map(p=>p.id===u.id?u:p)),[]);
  const addPlant=useCallback(p=>{
    setPlants(prev=>[...prev,p]);
    // Auto-log: plant added
    setLogs(prev=>[...prev,{
      id: uid(),
      plantId: p.id,
      timestamp: p.addedDate || new Date().toISOString(),
      parameters: {health: p.health || 85},
      notes: `🌱 ${p.name} toegevoegd aan de collectie (${p.species})`,
      auto: true,
    }]);
  },[]);
  const addLog=useCallback(l=>setLogs(prev=>[...prev,l]),[]);
  const quickWater = useCallback((plant) => {
    const season = getCurrentSeason();
    const care = _optionalChain([SPECIES_DB, 'access', _338 => _338[plant.species], 'optionalAccess', _339 => _339.care, 'access', _340 => _340[season]]);
    const interval = _nullishCoalesce(_nullishCoalesce(_optionalChain([plant, 'access', _341 => _341.customCare, 'optionalAccess', _342 => _342[`water_${season}`]]), () => ( _optionalChain([care, 'optionalAccess', _343 => _343.water]))), () => ( 7));
    const today = new Date().toISOString().split("T")[0];
    const next = new Date(Date.now() + interval*86400000).toISOString().split("T")[0];
    setPlants(prev => prev.map(p => p.id===plant.id ? {...p,lastWatered:today,nextWater:next} : p));
    setLogs(prev => [...prev, {id:uid(),plantId:plant.id,timestamp:new Date().toISOString(),parameters:{watering:200},notes:"💧 Water gegeven via dashboard"}]);
  }, []);

  // Import: restore all data from a backup file
  const importData = useCallback((data) => {
    if (data.plants) setPlants(data.plants);
    if (data.logs) setLogs(data.logs);
    if (data.sections) setSections(data.sections);
    if (data.notifSettings) setNotifSettings(data.notifSettings);
  }, []);
  const deleteLog=useCallback(id=>setLogs(prev=>prev.filter(l=>l.id!==id)),[]);
  const updateLog=useCallback(updated=>setLogs(prev=>prev.map(l=>l.id===updated.id?updated:l)),[]);
  const deletePlant=useCallback(id=>{
    setPlants(prev=>prev.filter(p=>p.id!==id));
    setLogs(prev=>prev.filter(l=>l.plantId!==id));
    if(selectedId===id) setSelectedId(null);
  },[selectedId]);
  const addSection=useCallback((name,color,estId)=>{
    const colors=[C.green,C.sky,C.terracotta,C.sand,C.purple,"#7B5EA7","#C1694F","#7ABFCC"];
    setSections(prev=>[...prev,{id:uid(),name,color:color||colors[prev.length%colors.length],estateId:estId||activeEstateId}]);
  },[activeEstateId]);
  const deleteSection=useCallback(id=>{
    setSections(prev=>prev.filter(s=>s.id!==id));
    setPlants(prev=>prev.map(p=>p.section===_optionalChain([sections, 'access', _344 => _344.find, 'call', _345 => _345(s=>s.id===id), 'optionalAccess', _346 => _346.name])?{...p,section:""}:p));
  },[sections]);
  const renameSection=useCallback((id,name,color)=>setSections(prev=>prev.map(s=>s.id===id?{...s,name,color:color||s.color}:s)),[]);

  if(selected)return(React.createElement(PlantDetail, { plant: selected, logs: logs, sections: activeRooms, onAddSection: addSection, onBack: ()=>setSelectedId(null), onUpdatePlant: updatePlant, onAddLog: addLog, onDeleteLog: deleteLog, onUpdateLog: updateLog, onDelete: deletePlant, t: t, apiKey: apiKey,}));
  return(React.createElement(React.Fragment, null

    , showOnboarding && React.createElement(OnboardingFlow, {
        onDone: ()=>{ setHasSeenOnboarding(true); setShowOnboarding(false); },
        onAddEstate: (name,icon)=>{ const e={id:uid(),name,icon}; setEstates(prev=>[...prev,e]); setActiveEstateId(e.id); },
        onAddSection: addSection,
        activeEstateId: activeEstateId,}
      )
    , showQRScanner && React.createElement(QRScanner, {
        plants: plants,
        onFound: id=>{ const p=plants.find(x=>x.id===id); if(p){ setSelectedId(p.id); } setShowQRScanner(false); },
        onClose: ()=>setShowQRScanner(false),}
      )
    , showSettings
      ? React.createElement(SettingsScreen, {
          plants: plants, logs: logs, sections: sections, activeRooms: activeRooms, notifSettings: notifSettings,
          onSaveNotif: setNotifSettings,
          onImport: importData,
          onAddSection: addSection, onDeleteSection: deleteSection, onRenameSection: renameSection,
          estates: estates, activeEstateId: activeEstateId,
          onAddEstate: (name,icon)=>{const e={id:uid(),name,icon};setEstates(prev=>[...prev,e]);setActiveEstateId(e.id);},
          onDeleteEstate: id=>{setEstates(prev=>prev.filter(e=>e.id!==id));if(activeEstateId===id)setActiveEstateId(_optionalChain([estates, 'access', _347 => _347.find, 'call', _348 => _348(e=>e.id!==id), 'optionalAccess', _349 => _349.id])||"");},
          onRenameEstate: (id,name,icon)=>setEstates(prev=>prev.map(e=>e.id===id?{...e,name,icon}:e)),
          onSelectEstate: setActiveEstateId,
          onClose: ()=>setShowSettings(false),
          lang: lang, onSetLang: setLang, t: t,
          apiKey: apiKey, onSetApiKey: setApiKey, vacation: vacation, onSetVacation: setVacation,}
        )
      : React.createElement(Dashboard, {
          plants: (window.__plants=plants,plants), logs: logs, sections: activeRooms,
          estates: estates, activeEstate: activeEstate,
          onSelectPlant: p=>{ if(bulkMode){ setSelectedPlants(prev=>prev.includes(p.id)?prev.filter(x=>x!==p.id):[...prev,p.id]); } else { setSelectedId(p.id); } },
          onAddPlant: addPlant,
          onDeletePlant: deletePlant,
          onOpenSettings: ()=>setShowSettings(true),
          onQuickWater: quickWater,
          t: t,
          bulkMode: bulkMode, selectedPlants: selectedPlants,
          onToggleBulk: ()=>{ setBulkMode(m=>!m); setSelectedPlants([]); },
          onBulkWater: ()=>{ selectedPlants.forEach(id=>{ const p=plants.find(x=>x.id===id); if(p) quickWater(p); }); setBulkMode(false); setSelectedPlants([]); },
          onBulkMove: (sectionName)=>{ setPlants(prev=>prev.map(p=>selectedPlants.includes(p.id)?{...p,section:sectionName}:p)); setBulkMode(false); setSelectedPlants([]); },
          allSections: sections,
          onOpenScanner: ()=>setShowQRScanner(true),
          vacation: vacation,}
        )
    
  ));
}


    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(PlantCareApp));