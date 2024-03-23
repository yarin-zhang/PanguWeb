self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        try {
          return cache.addAll([
            'https://lab.utgd.net/PanguWeb/index.html',
            'https://lab.utgd.net/PanguWeb/styles.css',
            'https://lab.utgd.net/PanguWeb/pangu.min.js',
            'https://lab.utgd.net/PanguWeb/icons/icon-192x192.png',
            'https://lab.utgd.net/PanguWeb/icons/icon-512x512.png',
            'https://cdn.tailwindcss.com',
          ]);
        }catch(e){
          console.log(e);
        }
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
  