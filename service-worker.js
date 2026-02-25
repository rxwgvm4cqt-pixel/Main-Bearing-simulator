self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("lager-cache").then(function(cache) {
      return cache.addAll([
        "index.html"
      ]);
    })
  );
});