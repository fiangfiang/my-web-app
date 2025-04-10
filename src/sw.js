// src/sw.js
const CACHE_NAME = 'todo-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles/style.css',
  '/src/main.js',
  '/icon-192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});