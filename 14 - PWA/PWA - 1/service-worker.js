const filesToCache = //file in cache
[
    '/',
    'styles/other.css',
    'other.html',
    'index.html',
    'styles/index.css',
    'pages/404.html'
]

const staticCacheName ='pages-cache-v1' //name of cache Data base
console.log(self);
caches.keys().then((key)=>{
    caches.delete(key[0]);
});

self.addEventListener('install',event=>{
    console.log('installing....')
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache=>{
            return cache.addAll(filesToCache)
        })
    )
});
self.addEventListener('activate',event=>{
    console.log('activating...')
});

self.addEventListener('fetch',event=>{  //I am service Worker 
    console.log('Fetching ',event.request.url)
    event.respondWith(
        caches.match(event.request)
        .then(response=>{
            if(response){
                console.log('Found ',event.request.url)
                return response
            }
            console.log('Network request ',event.request.url)
            return fetch(event.request)
            .then(response=>{  
                return caches.open(staticCacheName)
                .then(cache=>{
                    cache.put(event.request.url,response.clone())
                    return response
                })
                }
            )
        })
        .catch(error=>{ 
            return caches.match('pages/404.html')
        })
    )
})




