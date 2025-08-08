'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9c6cb6d857b2749e923024ab84675c41",
"version.json": "bf985fbb14fe28a53178d12194168ae8",
"favicon.ico": "4020a21c12fd9d8a8dc4c341ee9aefe6",
"index.html": "90374600bb245f12cf6f3fc6c5529b47",
"/": "90374600bb245f12cf6f3fc6c5529b47",
"main.dart.js": "a1b4abcceac78b87bd00f586956a3382",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e13582ae973171f71ed56cfe5a33c7f0",
"assets/AssetManifest.json": "3df6a5c4b4831f9899bfa49a7d403f97",
"assets/NOTICES": "98af68e1e620db0ade8b5f657a78dce6",
"assets/FontManifest.json": "aa45fa73fbc01e86f82476a5703ea1b5",
"assets/AssetManifest.bin.json": "576268ecc9621b0fd58a81eb8134d93b",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "74c1056017b2998df262601367f9d275",
"assets/fonts/MaterialIcons-Regular.otf": "607498798f00c55d7060c02a694df233",
"assets/assets/img/flags/fr.svg": "f8eb4977b540e0061fff1083b20d4377",
"assets/assets/img/flags/en.svg": "106f5c7c1d3a0df64d60bd8a0d17680e",
"assets/assets/img/flags/nl.svg": "94f110dcfe37cba0290f966dd5359259",
"assets/assets/img/flags/de.svg": "55dcf5508162c371f3da65ad50180474",
"assets/assets/img/placeholder.png": "cd252aa70a0105490f07a2a25dbd5af5",
"assets/assets/img/icons/error__icon.svg": "7bac9422f7aaf18876dfe1a98f6b0d0b",
"assets/assets/img/icons/icon__edit.svg": "799e9cde5db1628de4b078429617774d",
"assets/assets/img/icons/icon__hospital.svg": "6f3c5e31f71b5bae1ef0d1ea43d6d37d",
"assets/assets/img/icons/icon__help.svg": "f4c335e8b364809d30b42067cfb3b07e",
"assets/assets/img/icons/success__icon.svg": "f60ebac876ded7c834045e0424a7dd18",
"assets/assets/img/icons/icon__list.svg": "311c7b4eba5f96fe4c6e28439a24f7eb",
"assets/assets/img/icons/icon__arrow.svg": "721ea293da4f5ad6bb4e5fe4f1a0e67c",
"assets/assets/img/icons/icon__candidates.svg": "6542a51a64b398a0763680b46874bd64",
"assets/assets/img/icons/icon__profile.svg": "b1395017d19f486b040434ba7fd1f137",
"assets/assets/img/icons/icon__dropdown.svg": "1afe6f12b66bc98a9d3445dca1445e7c",
"assets/assets/img/icons/icon__calendar.svg": "cf75316263d59d352c40632aa7489a75",
"assets/assets/img/icons/warning__icon.svg": "7007366fc41b17f33cb4adb027bcbb32",
"assets/assets/img/icons/icon__news.svg": "5de0e38d7f54cc7272c351da40b2a08e",
"assets/assets/img/icons/icon__info.svg": "214965d40d7525788be8185f400d7b4f",
"assets/assets/img/logo.svg": "f7c764b13c39fa08d21dccafabe5a733",
"assets/assets/fonts/FiraSans-Thin.ttf": "a6748ac1bd74b6909b94e78809a377f1",
"assets/assets/fonts/FiraSans-ExtraLightItalic.ttf": "b1f4cb162dfb5c71aa1c0890b60af721",
"assets/assets/fonts/FiraSans-LightItalic.ttf": "9dfc6577fe4ffeba2ea729b55b363441",
"assets/assets/fonts/FiraSans-Medium.ttf": "9e18cebdb2f957021567b0615bfb325d",
"assets/assets/fonts/FiraSans-BoldItalic.ttf": "bf0e8664c1c1c42ec0ab8b3e85e62486",
"assets/assets/fonts/FiraSans-Bold.ttf": "00e640b1e93c5a4b0ea01c7ef5303534",
"assets/assets/fonts/FiraSans-ExtraLight.ttf": "3d12f9d7bb413fffe475d3c7dad15a23",
"assets/assets/fonts/FiraSans-ThinItalic.ttf": "d0caff6f96057c7db2f58fd9618b9f30",
"assets/assets/fonts/DMSans/DMSans-Regular.ttf": "916f3ae325c2bcd71bec9b469c6a6aa0",
"assets/assets/fonts/DMSans/DMSans-Medium.ttf": "2dd767322ccc760c0c31d6a900b9d3b2",
"assets/assets/fonts/DMSans/DMSans-Bold.ttf": "9def97569c21a2e08c818845776c4f21",
"assets/assets/fonts/DMSans/DMSans-BoldItalic.ttf": "9d43fe2363efc47ba9c9dc254758a700",
"assets/assets/fonts/DMSans/DMSans-MediumItalic.ttf": "eb99628e146d75ddc65f05f0fee6e5a1",
"assets/assets/fonts/DMSans/DMSans-Italic.ttf": "08fe032edcb2f0e13aa5e58b778da99a",
"assets/assets/fonts/FiraSans-MediumItalic.ttf": "ad6796ecf4792ba2c45abded60ff4f19",
"assets/assets/fonts/FiraSans-BlackItalic.ttf": "adfed93a78163df2926f7e08dd7ba3ca",
"assets/assets/fonts/FiraSans-Light.ttf": "cfc0a5e8ad0092122f736d2b6890d0b7",
"assets/assets/fonts/FiraSans-Black.ttf": "34bb1259bf1d9c45c44e80fbfe4f7164",
"assets/assets/fonts/FiraSans-ExtraBold.ttf": "e0586222b0b19707267f6143fa6bcc80",
"assets/assets/fonts/FiraSans-SemiBold.ttf": "251b0060af1934f2d9dfd448a81afb42",
"assets/assets/fonts/FiraSans-SemiBoldItalic.ttf": "cddff49d534c871467fe32a0d7631d22",
"assets/assets/fonts/FiraSans-ExtraBoldItalic.ttf": "de582e0299c5119002c51d515676182d",
"assets/assets/fonts/FiraSans-Regular.ttf": "54dfa44c774e878a6b5327a47dfa7c97",
"assets/assets/fonts/FiraSans-Italic.ttf": "1bb2a320c4dd2d0c4e51f6c69a097743",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
