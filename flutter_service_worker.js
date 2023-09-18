'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4935ba82d8aff595b8ce6d2963631381",
"assets/AssetManifest.json": "b330cf28500efaee3a04ae76c610067b",
"assets/assets/actionImages/arkakolhareketleri/benchdip.jpeg": "8f5387e27c42c74416f3f6eea87ef56b",
"assets/assets/actionImages/arkakolhareketleri/Cablepushdown.jpeg": "51b891f02eadcf3642c8a59b46e7e018",
"assets/assets/actionImages/arkakolhareketleri/dambilkickback.jpeg": "7411d33dae14bdf96ae642b47c20a657",
"assets/assets/actionImages/arkakolhareketleri/lying.jpeg": "fe8aa8264c742f74bc06cdffa4402e40",
"assets/assets/actionImages/arkakolhareketleri/overhead.jpeg": "c50c1877fece7af0bb9e7c41c92e2d71",
"assets/assets/actionImages/bacakhareketleri/legcurl.jpeg": "0849608425220841506aa9c5d3bbab52",
"assets/assets/actionImages/bacakhareketleri/legextension.jpeg": "50348b5305b4e313fe1423301fe902d3",
"assets/assets/actionImages/bacakhareketleri/legpress.jpeg": "858a60a0918b687ad6d31545dd379bf4",
"assets/assets/actionImages/bacakhareketleri/squat.jpeg": "0e2263afa4b4b36a17bc4dd9bf1b0209",
"assets/assets/actionImages/bacakhareketleri/stepup.jpeg": "1d59de953944d79e374a7fe9e15a44c7",
"assets/assets/actionImages/gogushareketleri/bench.jpeg": "dbf6452495a04a76885102267fd3dcdc",
"assets/assets/actionImages/gogushareketleri/cable.jpeg": "dd193b82e7e23b75fa43a7825557bcfc",
"assets/assets/actionImages/gogushareketleri/dambilfly.jpeg": "272490effc96519769648f7f1da7f188",
"assets/assets/actionImages/gogushareketleri/decline.png": "bcabffc2b5cc8984e5fae6e1f86b4497",
"assets/assets/actionImages/gogushareketleri/fly.jpeg": "8a11619af148335f916d5b365b52ef15",
"assets/assets/actionImages/omuzhareketleri/barbel.jpeg": "ac46b85eefb16379b5f756707c732867",
"assets/assets/actionImages/omuzhareketleri/bentover.jpeg": "ae8e60e20258439aab0ebf526f5e1cdc",
"assets/assets/actionImages/omuzhareketleri/dambilfront.jpeg": "aeedeb56e9059e78abd404dff3af63b0",
"assets/assets/actionImages/omuzhareketleri/lateries.jpeg": "745140c41870820d85c11885f0bdbb91",
"assets/assets/actionImages/omuzhareketleri/shoulderpress.jpeg": "2bf5c738336ed0676529d5dd1d862d49",
"assets/assets/actionImages/onkolhareketleri/cablecurl.jpeg": "ccfe258c70c1e051344580b2b5a598d1",
"assets/assets/actionImages/onkolhareketleri/concentration.jpeg": "156e2b9ce087a39a465e70933cf3918b",
"assets/assets/actionImages/onkolhareketleri/dambellpreacher.jpeg": "f9201e3e3af2626c12a50eab4fe3af87",
"assets/assets/actionImages/onkolhareketleri/ezbarreverse.jpeg": "46f303294f77f3245eb4494594e1f1fe",
"assets/assets/actionImages/onkolhareketleri/hummercurl.jpeg": "e2075442410a18649c75b3060b056747",
"assets/assets/actionImages/sirtHareketleri/barfix.jpg": "75582559b9b6ba038331dc27bed3f51b",
"assets/assets/actionImages/sirtHareketleri/deadlift.jpg": "f127f609251037abd71c49fc09009130",
"assets/assets/actionImages/sirtHareketleri/dumbellrow.jpg": "e8af638822d4275b5d123d843c01eb10",
"assets/assets/actionImages/sirtHareketleri/latpuldown.gif": "01630a218204372dee4852b8733b7f5b",
"assets/assets/actionImages/sirtHareketleri/Standing%2520T-Bar%2520Row.jpg": "680a6b042f7933ff70670943f8a3df94",
"assets/assets/actionVideo/ArkaKolHareket/benchdips.mp4": "a181bebc4b7f7e509b88a17189b65b9b",
"assets/assets/actionVideo/ArkaKolHareket/cablePushDown.mp4": "aa6d11294deeb1fb12de431a3b8c42e4",
"assets/assets/actionVideo/ArkaKolHareket/dumbellKickBack.mp4": "af81b0181e6b24805f49f0ec823d85f5",
"assets/assets/actionVideo/ArkaKolHareket/lyingtriceps.mp4": "f16c13439290bc9b81253bd16a3f887a",
"assets/assets/actionVideo/ArkaKolHareket/overheadExtension.mp4": "71a6002dd53da15fbbc90e2b4f9cb09d",
"assets/assets/actionVideo/BacakHareket/legExtension.mp4": "cc1d30c2ff1a2198c794b9385829ddb3",
"assets/assets/actionVideo/BacakHareket/legPress.mp4": "8ac8c885ec7a134f18465bbb3e8d5fa4",
"assets/assets/actionVideo/BacakHareket/Lying_Leg_Curl.mp4": "d15306c67d635d5453b5cad48fa78211",
"assets/assets/actionVideo/BacakHareket/squat.mp4": "ac4c7e97c3d82059866a4d97c18b4a44",
"assets/assets/actionVideo/BacakHareket/stepUp.mp4": "806cce402e0cd912eafa81669cd82ed8",
"assets/assets/actionVideo/gogusHareket/BenchPress.mp4": "70dc8f5e6a0cb6eddd2596ba8d36b320",
"assets/assets/actionVideo/gogusHareket/CableCrossover.mp4": "c187d99b00c377608471126855e4ae88",
"assets/assets/actionVideo/gogusHareket/declinedumbell.mp4": "2f6fccb9b071ac6142fceecc020f8849",
"assets/assets/actionVideo/gogusHareket/FlatFly.mp4": "70bda37e73254cbda0b2788894da98a9",
"assets/assets/actionVideo/gogusHareket/MachineFly.mp4": "d4fd830a2f94f0adc82377ef70ca1600",
"assets/assets/actionVideo/OmuzHareket/BarbellShoulder.mp4": "790755e0f7acc0cfb34dd54ae791f98a",
"assets/assets/actionVideo/OmuzHareket/bentover.mp4": "f11f495c8c4ea825c30c7c3476ce5744",
"assets/assets/actionVideo/OmuzHareket/dumbbellfrontraise.mp4": "1320ec0aa8266623ea0e8dfcd6e8a513",
"assets/assets/actionVideo/OmuzHareket/dumbellShoulder.mp4": "af10da1233f8c98af7ac368d7cfeb92a",
"assets/assets/actionVideo/OmuzHareket/lateralRaise.mp4": "7cd5d472237c796da367dd54116f0408",
"assets/assets/actionVideo/onKolHareket/cableCurls.mp4": "c2dee284ae4172cd55f1ecc995918b9f",
"assets/assets/actionVideo/onKolHareket/concentrationCurl.mp4": "91acc5853cb20f4ed4f1dd046e2fa6e7",
"assets/assets/actionVideo/onKolHareket/Dumbbell-Preacher.mp4": "47d027d3e387d4bdb8c5b63e56e6450e",
"assets/assets/actionVideo/onKolHareket/ez-bar-bicep-curl.mp4": "2a45e12e6496375ec0b0fecaa64d19a5",
"assets/assets/actionVideo/onKolHareket/hammerCurl.mp4": "3f1cb0801415370f1501817546b4ecd5",
"assets/assets/actionVideo/Sirthareket/barfix.mp4": "889bcea62afb3cb1b63e670d68fe35f8",
"assets/assets/actionVideo/Sirthareket/deadlift.mp4": "913120d84d2f2e8080b0c32b5ddae6fc",
"assets/assets/actionVideo/Sirthareket/dumbelRow.mp4": "e9aefcb9964d2eacb4dd57d491920d49",
"assets/assets/actionVideo/Sirthareket/machine-lat-pulldowns.mp4": "ea48e2879199de0be1255bec52ed459f",
"assets/assets/actionVideo/Sirthareket/t-bar-row.mp4": "2e0fcb752a467dfc76552ba29d7f1566",
"assets/assets/bodyImages/arkakol.jpg": "8835eb468735d985c60dd82da0d6b1c7",
"assets/assets/bodyImages/bacak.jpg": "e5d83b9da70b3003552d3b3a0f22e0da",
"assets/assets/bodyImages/gogus.jpeg": "7d608523b026d819081656ab5354cf1c",
"assets/assets/bodyImages/omuz.jpg": "adf3ebb3e1c57c08725095816c232e5b",
"assets/assets/bodyImages/onkol.jpg": "7808b052058ddefdd5947ece24a2ceb1",
"assets/assets/bodyImages/sirt.jpg": "609849dd8292e55838dadfcfc05d0773",
"assets/assets/entryImages/fitness.jpeg": "a168742b69250c0f799e2f507673408d",
"assets/assets/font/BraahOne-Regular.ttf": "86528aad78a0882c9c9bc63541898a2d",
"assets/assets/font/GentiumBookBasic-Regular.ttf": "58b14ba866f518794c820e89131201ff",
"assets/assets/font/MerriweatherSans-VariableFont_wght.ttf": "8b0c3a74608d4c8c5ea03a0f128791bc",
"assets/assets/font/NotoSerifHebrew-VariableFont_wdth,wght.ttf": "18b3be20ce02189d73d64a298e0bd170",
"assets/assets/icons/Body%25C4%25B0con.jpg": "1791bcd597f710fe121f946f9ba6f251",
"assets/assets/icons/body-abs.png": "529f3272941b9dee49b1633528ef82ff",
"assets/assets/icons/calendar.png": "6df8bb0f3169eca367a47bc10d5c6c15",
"assets/assets/icons/gender.png": "d7918cade8bb37775988c764e85d2a5a",
"assets/FontManifest.json": "17716e7bd4ed8d4e1dd4e306dc317cd7",
"assets/fonts/MaterialIcons-Regular.otf": "794db16f73c9bbebbd69a78145a9b930",
"assets/NOTICES": "e68a80bdeef1d0a73216b22f82deb2be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9df965bb49e914ae5184407b49ce43d6",
"/": "9df965bb49e914ae5184407b49ce43d6",
"main.dart.js": "a61e725056152a7582f590bfb2553a2d",
"manifest.json": "c568b17f4d502688e8bcdb6b1cc45db9",
"version.json": "8026fbccb43318c4a23022a27066c647"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
