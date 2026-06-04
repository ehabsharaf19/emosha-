const CACHE_NAME = 'emosha-academy-v1';
const assets = [
  '/',
  '/index.html',
  '/thanwya-books.html',
  '/thanwya.html',
  '/azhar.html',
  '/manifest.json'
];

// تثبيت الخدمة وحفظ الملفات الأساسية في الكاش
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق وجلب البيانات بسلاسة
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});
