const cacheName='luminary-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(['index.html','style.css','script.js'])));});