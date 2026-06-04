const CACHE_NAME = 'emosha-academy-v2';

// تثبيت الخدمة فوراً بدون تعقيد المسارات
self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

// تشغيل التطبيق وجلب البيانات مباشرة من السيرفر بنجاح
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
