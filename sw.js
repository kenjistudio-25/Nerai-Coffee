// sw.js - Service Worker minimal
self.addEventListener('install', event => {
  console.log('Service Worker installed');
  self.skipWaiting();
});