'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "190a35e584ef5934741cef7fbbde6bec",
".git/config": "86bb970b5a6536aa994fce6eb6b844b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4b0fd6bd544cb29ecc735864ff828c2b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "879b377f0c6445519d61f14962e001a6",
".git/logs/refs/heads/main": "879b377f0c6445519d61f14962e001a6",
".git/logs/refs/remotes/origin/main": "e2d5c340042876410081a447270ceefc",
".git/objects/03/c1b80958c18124c20d70a1f08d1426f9929bac": "a10bf633fc363fcb033792b32f66e941",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/dd0b9a341516d01dd87c010bbd2526f60b48d1": "bbd929b5c199837cfc52483dcba9e6f3",
".git/objects/23/7479fdc91b4af38043f3961905c78fb054bc83": "b2a8c507a2c2d43e70821adcd65b0124",
".git/objects/2e/529c734989c7ec8c0c5dc17f875933998a0d75": "3cc3475c7a99267f0eae49618e03001b",
".git/objects/2f/ef238a5b371eae74880fd69202fa3cc91f02bb": "ebf4108e6ce3b84ba68e01aeb8de4d3f",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/1cdd888954fca820f5ed43a7f624ed735884aa": "beb755cadf0219e056bf57e89dc30fed",
".git/objects/40/c1010e041a3c312b6d2345cd63a83b052a3ae2": "f691d5a5a973975edb7c90ccf495097b",
".git/objects/49/96aafed399bd67c62fa0dd13c08edbac0c0946": "5fc6a84b4d3a5ec874d394cd0d1fdff5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/ddbec45b9e714f339ee169455681d247f2f445": "1a54ae98bcae4704726fba2cdc58d3fc",
".git/objects/52/6f355ea5ce3255b8ad30799f4f26fc64187a1c": "2528193ab08db61b67ae4746d7fa47da",
".git/objects/5c/0d9e61f81624228fa57ab9b9bedea17640b454": "b268dfa2a2e5e721b42e7f8514d3eb85",
".git/objects/5d/49a4e035267b80364e1335275eb4e82d91314f": "b9980b4b3253a22ed800ca9e7c77e540",
".git/objects/60/1cabd54d471748f75e2a9f7cfd3449e266c8c2": "e3d3219371ee34e7c1e484cf19f9ef99",
".git/objects/63/c2d8aa4b0384ef2363dd9bc9598d46699bfc47": "8e01e170c8f21d75f5cdd5e71d2790b6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/5ac30d4d0b389f796dd606258da7474190a34d": "63ca62ac4e4e7d00ce4d0407e8a980cc",
".git/objects/6f/2e8b87ec0a8b2d290369d69637e537ed445f5e": "109d359383d6a71d22e2bb6645705e54",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/cfe4861a05a30062fb7413f4bd46a201c1e109": "35973522162802d332a6420bbd858070",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7e/4424c5bb079aa11cce827a686d5ae82003f385": "47717b2aa99f5dc886b430cf9295f810",
".git/objects/7e/73b8914643603a882b785154bdb593780a7828": "ca4c04c14e5920198cb8f2b4156488e8",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/62c457919ae5348c80f5603289fa9afc7ecd2e": "cf8066e3b5a9b1976ddd44d2758fe045",
".git/objects/8e/05afc921e4a9f3ac19c57c404a9e4ce6f86e99": "7e5d59351b82d997b75a3daae63c709c",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/c64dd9d69f8a4bf4c4b95712314feaefa8f6e3": "e59d096d1b533f73832127336d9840b2",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/4aca332c99371077142d7623ca93966ef6b8c9": "b0c40a801d9f7ff3c8f3286150a3fdcc",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/d4bc0727e9ef6ab7f02f1072910a396357f16a": "1c17761204308cb00ee64914e7520687",
".git/objects/b3/25efb6d76441dd6501902ca33202358e935c9a": "406ec3bd34982eee846ed7f5010048cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c1/2247aae8dbc154de4910e72ce064913186bf6f": "0ab7792f866adec25ee39db4ef0d125e",
".git/objects/c3/313a96f229d95d7553c140316e8364d2705acc": "1ffc78c6f5fc927b8161e3b700899f90",
".git/objects/c6/a8aae61eda222b21161795d1f66d98ace275c4": "dfe8f242aedd489d67fc0b5dda2014a9",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/738d37f5d4ddd17153b8ea43a5042e8ed6ddef": "2420d745b1f40c0526cf116588380d1c",
".git/objects/d0/116ef2dc229ddf2a8136d774a95e6560bf53cb": "fbb529a5cbb23f4aa7d436d7b29bad08",
".git/objects/d0/16686cfca311840be198c84f81493d04cb0c9a": "37fd05477bc94fffe4e36dc7b28e5bfe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6b34f09e98e985a14e038f978c11faa48f4b54": "d03d998b9226632732d6449bc91afd7f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/552086c5906a1b5103d0fed62a164769c7d75e": "45c4844d7f44b47399d8a2c214c4999c",
".git/objects/e4/67422eee67fa09765d078e16d72f0095f199f4": "ae810efcd17c9bbd424446590ae0eabc",
".git/objects/e8/a8db382d82ae1c2f23a2a2d220891c45063b05": "032c46eebeeeab0a24f0abecab41eea6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6352d46dd7e3a8a76b4665131a497be87f0f07": "1393465ef17e1c5d24379f5bd0ebb2bf",
".git/objects/ee/24265ec7ace50897c91abdb1bd60f4164ae062": "dea7c5b7be9c8f8ee82fccf29c7c4a53",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fb/74eb9bf30fbdf8f931d84034cf1e1da8f85190": "a5f4f6f86de5bbbd8f4fa468a215194a",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "f5f14d325df75de5009d0e5071e2f6a9",
".git/refs/remotes/origin/main": "f5f14d325df75de5009d0e5071e2f6a9",
"assets/AssetManifest.bin": "a2fd8c4ce209abb93111a664011c13e8",
"assets/AssetManifest.bin.json": "e1dfabf9efb0cecbafb3b9c5e1d51d8d",
"assets/assets/icons/icona1.png": "dd94064e79d5429eb29cae5388776743",
"assets/assets/icons/icona10.png": "e3591cfb2f0ae590df4ffee70bb12c0c",
"assets/assets/icons/icona11.png": "d8c1f5e6c5e68b7a60c4bdd3838341de",
"assets/assets/icons/icona12.png": "5a13a4f855322247bb7577ad11d8732b",
"assets/assets/icons/icona13.png": "010817f42e4d6205ec7458be9de9f2c2",
"assets/assets/icons/icona14.png": "28f2fadebd8667586008913f161bfbf3",
"assets/assets/icons/icona15.png": "7f52759483dc8110a102fe9dcdd8e30d",
"assets/assets/icons/icona16.png": "3b6c3a2b5c507522850e41884ef096bf",
"assets/assets/icons/icona2.png": "d131b20002f0c1cc8a6ac490bc5d700e",
"assets/assets/icons/icona3.png": "fb3c6d68cb7b452c847dceb48311ffb5",
"assets/assets/icons/icona4.png": "661063deae8f7535dd11bb07c29195dc",
"assets/assets/icons/icona5.png": "f3d1f20b43ea720ac51bec4784beae96",
"assets/assets/icons/icona6.png": "d1cbb8d20546666280e934b7e1da567e",
"assets/assets/icons/icona7.png": "65f9dd778b3d7f7b151cff99cdfb1023",
"assets/assets/icons/icona8.png": "1a0356fbf3fa3ea5bc924bb8fb4e3a88",
"assets/assets/icons/icona9.png": "6e933705de9701dc988e3f40f9d8fa01",
"assets/assets/icons/th.png": "edbfda4d15e6f3d90b4db3bf51ff5ad5",
"assets/assets/sounds/tombola.mp3": "094c50fd87f353d97fe33fb280b79cc1",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "aa2e7861e15f8180aed601fd78b8520d",
"assets/NOTICES": "efa9eb6afc8839da6b2486b16adcd722",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"compilatotombolawebprimatts.7z": "b7f62fe738860b2aee78bf99131c7971",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "96c8d58f97e1931c4a16dfad5a389fb9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3387796808eff89369cd813d731a5cb3",
"/": "3387796808eff89369cd813d731a5cb3",
"main.dart.js": "1750c63001017084d8e193e0ff66b999",
"manifest.json": "4f2a3698eb957aa9b632b9add79ff1c8",
"version.json": "2fae8819343a96d6e3b10675ca8ac946"};
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
