'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "84d45fc1b6fb92371e3ad9f2a215de6d",
"index.html": "0db1fc9209cff7e927ba8fc03b10bb33",
"/": "0db1fc9209cff7e927ba8fc03b10bb33",
"main.dart.js": "f0e2c9921f43a18a613893087e30fa92",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4dc4bb1ba8aac92b42885063bbb82500",
"assets/AssetManifest.json": "a26b773af7831e99f5e6f77466f5250f",
"assets/NOTICES": "2e6459c61dce27e807be5adec6662775",
"assets/FontManifest.json": "40bcefb296f7a7c76fe47665036fd610",
"assets/packages/tip_dialog/images/2.0x/icon_notify_info.png": "dc674b1f6e86dd75aa2eee5bb6acee13",
"assets/packages/tip_dialog/images/2.0x/icon_notify_done.png": "21b990ec5c0976fe695d06ae1e161d08",
"assets/packages/tip_dialog/images/2.0x/icon_notify_error.png": "0b90b0b3907eca3b9a54fcf864a9fcdd",
"assets/packages/tip_dialog/images/3.0x/icon_notify_info.png": "4bf33f2a7ffebc0d38f2b3e403fa693b",
"assets/packages/tip_dialog/images/3.0x/icon_notify_done.png": "d160f913863bc37c4983c5d00fdf5df4",
"assets/packages/tip_dialog/images/3.0x/icon_notify_error.png": "e1e8be014c914b05d34a401154cb401d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/fonts/CustomIcons.ttf": "72a43d2ab2b88a1246fde470419bbd5f",
"assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9",
"assets/assets/images/conseil-road-trip-810x541.jpg": "d19833d93b7552358833a9361d931b54",
"assets/assets/images/buildings.png": "d60ae11b7f30c1c02d85c847b1b83ccb",
"assets/assets/images/languages/fr-flag-square-xs.png": "e198ebdb6d49f77c82bf69a06b20247d",
"assets/assets/images/languages/it-flag-square-xs.png": "0c1dbfd43147efd3100cea773f2f25ab",
"assets/assets/images/languages/de-flag-square-xs.png": "4e539cab2bee4573a6b5cfa920742127",
"assets/assets/images/languages/en-flag-square-xs.png": "1dad60629a33df0dae55cdedfe90e649",
"assets/assets/icons/empty_or_error.png": "bd335d6bef76fbca1969531cc127b825",
"assets/assets/icons/city_old.png": "cfaa585ecc2d9a62211dc9d630da0161",
"assets/assets/icons/city.png": "f528805be5c1ae2ef60513b444099962"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
