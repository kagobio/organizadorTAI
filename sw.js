// Service worker mínimo: cachea el "esqueleto" de la app para que funcione sin conexión.
const CACHE = 'estudio-tai-v1';
const ASSETS = ['./', './index.html', './icon-512.png', './manifest.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  // Solo gestionamos peticiones a nuestro propio dominio (Firebase y Tesseract van directos a su CDN).
  if (url.origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // La página: primero red (para tener siempre la última versión), y si no hay conexión, la caché.
    e.respondWith(
      fetch(req).then(resp => { caches.open(CACHE).then(c => c.put('./index.html', resp.clone())); return resp; })
        .catch(() => caches.match('./index.html'))
    );
  } else {
    // Recursos (icono, manifest): primero caché, si no, red.
    e.respondWith(
      caches.match(req).then(r => r || fetch(req).then(resp => { const cp = resp.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return resp; }))
    );
  }
});
