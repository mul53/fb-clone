"use strict";var precacheConfig=[["/fb-clone/index.html","a921c747619a1e86825544f1831f8181"],["/fb-clone/static/css/main.4ad1aacf.css","21a3bec059588882e62b0d61f3f357fb"],["/fb-clone/static/js/main.26066204.js","1c54e7900a2c3dea48c4dc6c375da689"],["/fb-clone/static/media/8nPsa_DiNCJ.00145f43.png","00145f43e56d2a1d90fd198536a316a5"],["/fb-clone/static/media/I4jEeL61vVa.37612f98.png","37612f980ecbbe55da5b83a46e176441"],["/fb-clone/static/media/QApaqfOB3oV.c613548d.png","c613548d47a4904c33863d8d2440683f"],["/fb-clone/static/media/VVcXVUIegbi.bd52dba9.png","bd52dba9dde5882f0fdbb16647925715"],["/fb-clone/static/media/gf8m6cLwRUk.fce90e46.png","fce90e468adb783ecd291e21a0ebe5a0"],["/fb-clone/static/media/h3kZvrLFWT5.74432ab5.png","74432ab5714757fd11985b9e2265a6ac"],["/fb-clone/static/media/pnOzoRF3M6F.d2fd3852.png","d2fd3852b68dabdfc7c458caa4478cd8"],["/fb-clone/static/media/qyS9GzJu9Z6.994ce1e9.png","994ce1e91444ca5777faf80f4bc706ff"],["/fb-clone/static/media/xwyFuerq1UN.8b7efa2a.png","8b7efa2adc82b08d117c2c7558d8deed"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var r="/fb-clone/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});