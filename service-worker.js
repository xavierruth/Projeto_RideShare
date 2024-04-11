var cacheName = 'RideShare-v1.0';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll([
      './index.html',
      './Navegação/Assets/img',
      './Navegação/Assets/contato.svg',
      './Navegação/Assets/img/Home_Contorno.svg',
      './Navegação/Assets/img/Home_SContorno.svg',
      './Navegação/Assets/img/logo_Vai_Para_Onde.svg', 
      './Navegação/Assets/img/Mapa_Contorno',
      './Navegação/Assets/img/Mapa_SContorno', 
      './Navegação/Assets/img/modelo1.svg',
      './Navegação/Assets/img/modelo2.svg',
      './Navegação/Assets/img/modelo3.svg',
      './Navegação/Assets/img/modelo4.svg',
      './Navegação/Assets/img/modelo5.svg',
      './Navegação/Assets/img/modelo6.svg',
      './Navegação/Assets/img/modelo7.svg',
      './Navegação/Assets/img/modelo8.svg',
      './Navegação/Assets/img/modelo9.svg',
      './Navegação/Assets/img/modelo10.svg',
      './Navegação/Assets/img/modelo11.svg',
      './Navegação/Assets/img/olhar_Contorno.svg',
      './Navegação/Assets/img/Perfil_Contorno.svg',
      './Navegação/Assets/img/Perfil_SContorno.svg',
      './Navegação/Assets/img/Pin.svg',
      './Navegação/Assets/img/seta_voltar.svg',
      './Navegação/Assets/img/rideshare_index.svg',
      './Navegação/Assets/img/rideshare_login.svg',
      './Navegação/Assets/img/seta_voltar.svg',
      './Raíz/icons/icon-29.png',
      './Raíz/icons/icon-32.png', 
      './Raíz/icons/icon-40.png',
      './Raíz/icons/icon-48.png',
      './Raíz/icons/icon-50.png',
      './Raíz/icons/icon-55.png',
      './Raíz/icons/icon-57.png',
      './Raíz/icons/icon-58.png',
      './Raíz/icons/icon-60.png',
      './Raíz/icons/icon-64.png',
      './Raíz/icons/icon-72.png',
      './Raíz/icons/icon-76.png',
      './Raíz/icons/icon-80.png',
      './Raíz/icons/icon-87.png',
      './Raíz/icons/icon-88.png',
      './Raíz/icons/icon-100.png',
      './Raíz/icons/icon-114.png',
      './Raíz/icons/icon-120.png',
      './Raíz/icons/icon-128.png',
      './Raíz/icons/icon-144.png',
      './Raíz/icons/icon-152.png',
      './Raíz/icons/icon-167.png',
      './Raíz/icons/icon-172.png',
      './Raíz/icons/icon-180.png',
      './Raíz/icons/icon-196.png',
      './Raíz/icons/icon-256.png',
      './Raíz/icons/icon-512.png',
      './Raíz/icons/icon-1024.png', 

    ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});