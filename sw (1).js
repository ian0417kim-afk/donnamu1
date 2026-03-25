// 돈나무 Service Worker
// 홈화면 아이콘 설치에 필요합니다. 수정하지 마세요.
const CACHE = 'donnaamu-v1';

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(c =>
            c.addAll(['./index.html', './images/hero.png'])
        )
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});
