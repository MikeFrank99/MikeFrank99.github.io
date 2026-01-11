const CACHE_NAME = 'michelio-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/audio/keypress.mp3',
  './assets/images/background.jpg',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Roboto+Mono:wght@300;400;500;700&display=swap',
  'https://db.onlinewebfonts.com/c/d7a74ed36ff0603a3e41b6da32c47f03?family=Ndot+57+Aligned'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});