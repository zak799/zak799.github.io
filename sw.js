const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
    "./", // Cache the root page
    "./index.html", // Cache the main HTML file
    "./style.css", // Cache CSS
    "./script.js", // Cache JavaScript
    "./icon-192x192.png", // Cache icon
    "./icon-512x512.png" // Cache larger icon
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
