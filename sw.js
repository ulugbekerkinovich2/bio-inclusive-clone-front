// Bio Inclusive — Service Worker
// Strategy: network-first for core app files (always get latest during dev),
//           cache-first for images/assets (safe to cache longer).

const CACHE = "bio-v2";
const CORE = ["/", "/index.html", "/app.js", "/styles.css", "/quiz-data.js"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  if (!e.request.url.startsWith(self.location.origin)) return; // skip cross-origin (YouTube)

  const url = new URL(e.request.url);
  const isCore = CORE.includes(url.pathname) || url.pathname === "/";

  if (isCore) {
    // Network-first: always try fresh, fall back to cache
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first: images, fonts — serve fast from cache, update in background
    e.respondWith(
      caches.match(e.request).then((cached) => {
        const networkFetch = fetch(e.request).then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, clone));
          }
          return res;
        });
        return cached || networkFetch;
      })
    );
  }
});
