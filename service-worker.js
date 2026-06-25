// Plant Care Service Worker — Qwinie/plant-care
const CACHE_NAME = "plant-care-v2";
const ASSETS = [
  "/plant-care/",
  "/plant-care/index.html",
  "/plant-care/react.js",
  "/plant-care/app.js",
  "/plant-care/manifest.json",
  "/plant-care/icons/icon-192.png",
  "/plant-care/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (!event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok && event.request.method === "GET") {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match("/plant-care/index.html"));
    })
  );
});
