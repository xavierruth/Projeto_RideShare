var cacheName = 'RideShare-v1.0';

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/index.html',
        '/Raíz/css/styles.css',
        '/Raíz/css/root.css',
        '/Raíz/css/index.css',
        '/Páginas/Entrada-index/carpoolstyle.css',
        '/Páginas/Home/Assets/Button-Pocurar_Oferecer/button.css',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        '/Raíz/js/scripts.js',
        '/Navegação/Assets/img',
        '/Navegação/Assets/contato.svg',
        '/Navegação/Assets/img/Home_Contorno.svg',
        '/Navegação/Assets/img/Home_SContorno.svg',
        '/Navegação/Assets/img/logo_Vai_Para_Onde.svg', 
        '/Navegação/Assets/img/Mapa_Contorno',
        '/Navegação/Assets/img/Mapa_SContorno', 
        '/Navegação/Assets/img/modelo1.svg',
        '/Navegação/Assets/img/modelo2.svg',
        '/Navegação/Assets/img/modelo3.svg',
        '/Navegação/Assets/img/modelo4.svg',
        '/Navegação/Assets/img/modelo5.svg',
        '/Navegação/Assets/img/modelo6.svg',
        '/Navegação/Assets/img/modelo7.svg',
        '/Navegação/Assets/img/modelo8.svg',
        '/Navegação/Assets/img/modelo9.svg',
        '/Navegação/Assets/img/modelo10.svg',
        '/Navegação/Assets/img/modelo11.svg',
        '/Navegação/Assets/img/olhar_Contorno.svg',
        '/Navegação/Assets/img/Perfil_Contorno.svg',
        '/Navegação/Assets/img/Perfil_SContorno.svg',
        '/Navegação/Assets/img/Pin.svg',
        '/Navegação/Assets/img/seta_voltar.svg',
        '/Navegação/Assets/img/rideshare_index.svg',
        '/Navegação/Assets/img/rideshare_login.svg',
        '/Navegação/Assets/img/seta_voltar.svg',
        '/Navegação/Assets/img/apple.svg',
        '/Navegação/Assets/img/bel.svg',
        '/Navegação/Assets/img/camera.svg',
        '/Navegação/Assets/img/carro-branco.svg',
        '/Navegação/Assets/img/carro-cinza',
        '/Navegação/Assets/img/carro-claro-capa.svg',
        '/Navegação/Assets/img/carro-escuro-capa.svg',
        '/Navegação/Assets/img/carro-preto.svg',
        '/Navegação/Assets/img/carro-vermelho.svg',
        '/Navegação/Assets/img/carro.svg',
        '/Navegação/Assets/img/carroredondo.svg',
        '/Navegação/Assets/img/contato.svg',
        '/Navegação/Assets/img/email.svg',
        '/Navegação/Assets/img/email.svg',
        '/Navegação/Assets/img/facebook.svg',
        '/Navegação/Assets/img/fotoVazio.svg',
        '/Navegação/Assets/img/google.svg',
        '/Navegação/Assets/img/lingua.svg',
        '/Navegação/Assets/img/localizapin.svg',
        '/Navegação/Assets/img/logo_Vai_Para_Onde.svg',
        '/Navegação/Assets/img/privacidade.svg', 
        '/Navegação/Assets/img/Rounded.svg', 
        '/Navegação/Assets/img/sair.svg', 
        '/Navegação/Assets/img/Switch.svg',
        '/Navegação/Assets/img/SwitchOff.svg',
        '/Navegação/Assets/img/Vector.svg',
        '/Raíz/icons/icon-29.png',
        '/Raíz/icons/icon-32.png', 
        '/Raíz/icons/icon-40.png',
        '/Raíz/icons/icon-48.png',
        '/Raíz/icons/icon-50.png',
        '/Raíz/icons/icon-55.png',
        '/Raíz/icons/icon-57.png',
        '/Raíz/icons/icon-58.png',
        '/Raíz/icons/icon-60.png',
        '/Raíz/icons/icon-64.png',
        '/Raíz/icons/icon-72.png',
        '/Raíz/icons/icon-76.png',
        '/Raíz/icons/icon-80.png',
        '/Raíz/icons/icon-87.png',
        '/Raíz/icons/icon-88.png',
        '/Raíz/icons/icon-100.png',
        '/Raíz/icons/icon-114.png',
        '/Raíz/icons/icon-120.png',
        '/Raíz/icons/icon-128.png',
        '/Raíz/icons/icon-144.png',
        '/Raíz/icons/icon-152.png',
        '/Raíz/icons/icon-167.png',
        '/Raíz/icons/icon-172.png',
        '/Raíz/icons/icon-180.png',
        '/Raíz/icons/icon-196.png',
        '/Raíz/icons/icon-256.png',
        '/Raíz/icons/icon-512.png',
        '/Raíz/icons/icon-1024.png', 
      ]);
    })
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
