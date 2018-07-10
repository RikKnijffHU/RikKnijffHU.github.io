var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/css/default.css',
  '/icons/polling-128.png',
  '/icons/polling-256.png',
  '/icons/polling-512.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});