// Plant Care Service Worker
// Caches the app shell for full offline support

const CACHE_NAME = "plant-care-v1";
const ASSETS = [
  "/plant-care/",
  "/plant-care/index.html",
  "/plant-care/manifest.json",
  "/plant-care/icons/icon-192.png",
  "/plant-care/icons/icon-512.png"
];

// Install: cache all assets
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first strategy (app is fully offline-capable)
self.addEventListener("fetch", event => {
  // For external API calls (Claude AI, ASPCA, etc.) — network only
  if (!event.request.url.startsWith(self.location.origin)) {
    return; // Let it fail naturally when offline
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache new requests from our origin
        if (response.ok && event.request.method === "GET") {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback: return the main app
        return caches.match("/plant-care/index.html");
      });
    })
  );
});
