var map;
var violetIcon;
var userLatitude; 
var userLongitude; 

violetIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function success(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    userLatitude = position.coords.latitude; 
    userLongitude = position.coords.longitude; 

    localStorage.setItem('userLatitude', userLatitude);
    localStorage.setItem('userLongitude', userLongitude);

    if (map === undefined) {
        map = L.map('map').setView([userLatitude, userLongitude], 14);
    } else {
        map.remove();
        map = L.map('map').setView([userLatitude, userLongitude], 14);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const storedPhoto = localStorage.getItem('perfilPhoto');
    const iconUrl = storedPhoto ? storedPhoto : './Navegação/Assets/img/fotoVazio.svg';

    const profileIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
    });

    const markerPopupContent = `
        <div class="popup-content">
            <div class="profile-photo-container">
                <img class="profile-photo" src="${iconUrl}" alt="Sua foto de perfil">
            </div>
            <h3>Sua Localização atual</h3>
        </div>`;

    L.marker([userLatitude, userLongitude], {
        icon: violetIcon
    }).addTo(map)
    .bindPopup(markerPopupContent)
    .openPopup();

    // Agora, vamos buscar os dados dos motoristas
    fetch('/Páginas/Home/Assets/Button-Pocurar_Oferecer/pontos.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(function(motorista) {
                const nome = motorista.nome;
                const distancia = motorista.distancia;
                const placa = motorista.Placa;
                const cor= motorista.cor;
                const imagem = motorista.imagem;

                const motoristaIcon = L.icon({
                    iconUrl: imagem,
                    iconSize: [50, 95],
                    shadowSize: [50, 64],
                    iconAnchor: [22, 94],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-3, -76]
                });

                L.marker([motorista.latitude, motorista.longitude], {
                    icon: motoristaIcon
                }).addTo(map)
                .bindPopup(`<div class = "cardMap"><img class=imgMotorista src="${imagem}" alt="Imagem do motorista"><br>
                <h3 class=nomeMotorista>${nome}</h3><br>
                <p><strong>Distância:</strong><br> ${distancia}</p>
                <p><strong>Placa:</strong><br>${placa}</p>
                <p><strong>Cor do carro:</strong><br><br>
                <img src="${cor}" alt="cor do carro"></p><div>`); 
            });
        })
        .catch(error => console.error('Erro ao carregar as localizações:', error)); 
}

function error(error) {
    console.log(error);
}

var watchID = navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});