const CACHE='treaty-v1.0.1';const CORE=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>{if(k!==CACHE) return caches.delete(k);})))) ; self.clients.claim();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url); if(e.request.method!=='GET'||u.origin!==location.origin) return;
  e.respondWith((async ()=>{const cache=await caches.open(CACHE); const cached=await cache.match(e.request);
    const net=fetch(e.request).then(res=>{ if(res && res.status===200 && res.type==='basic'){ cache.put(e.request, res.clone()); } return res;}).catch(()=>cached);
    return cached || net;})());
});
