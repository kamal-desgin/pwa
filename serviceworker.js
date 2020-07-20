	var cacheName = "Hello World";
	var filesTocache = [
		'/',
		'/index.html',
		'/css/style.css',
		'/js/main.js'
	];
	
	//TODO: start the service worker and cache all of the app's content 
	self.addEventListener('install', function(e){ 
		e.waitUntil(
			caches.open(cacheName).then(function(cache){
				return cache.addAll(filesTocache);
			})
		);
	});
	
	//TODO: serve cached content when offline
	self.addEventListener('fetch', function(e){ 
		e.respondWith(
			caches.match(e.request).then(function(response){
				return response || fetch(e.request);
			})
		);
	});