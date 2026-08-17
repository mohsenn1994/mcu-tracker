const CACHE='marvel-tracker-v2';
const SHELL=['./','./index.html','./data.js','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request,url=req.url;
  // TMDB images: cache-first (they never change)
  if(url.indexOf('image.tmdb.org')!==-1){
    e.respondWith(caches.open(CACHE).then(c=>c.match(req).then(hit=>hit||fetch(req).then(r=>{c.put(req,r.clone());return r;}))));
    return;
  }
  // app shell + data + navigations: network-first so updates appear, fall back to cache offline
  if(req.mode==='navigate'||url.endsWith('/data.js')||url.endsWith('/index.html')||url.endsWith('/')){
    e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));return r;}).catch(()=>caches.match(req).then(h=>h||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req)));
});
