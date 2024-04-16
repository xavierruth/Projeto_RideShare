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

// Função para calcular a distância entre dois pontos de latitude e longitude em quilômetros
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em quilômetros
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

// Função auxiliar para converter graus em radianos
function toRad(degrees) {
    return degrees * Math.PI / 180;
}

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
                const pointLatitude = motorista.latitude;
                const pointLongitude = motorista.longitude;

                // Calcula a distância entre o usuário e o ponto
                let distancia = calcularDistancia(userLatitude, userLongitude, pointLatitude, pointLongitude);

                // Calcula o tempo de chegada em minutos
                const tempoChegadaMinutos = (distancia / 40) * 60; // Assumindo velocidade média de 40km/h

                // Aqui você pode fazer o que quiser com a distância e o tempo de chegada
                // Por exemplo, você pode adicionar esses valores aos marcadores no mapa

                console.log(`Distância até ${motorista.nome}: ${distancia.toFixed(2)} km`);
                console.log(`Tempo de chegada até ${motorista.nome}: ${Math.round(tempoChegadaMinutos)} min`);

                const motoristaIcon = L.icon({
                    iconUrl: motorista.imagem,
                    iconSize: [50, 95],
                    shadowSize: [50, 64],
                    iconAnchor: [22, 94],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-3, -76]
                });

                L.marker([motorista.latitude, motorista.longitude], {
                    icon: motoristaIcon
                }).addTo(map)
                .bindPopup(`<div class="cardMap"><img class="imgMotorista" src="${motorista.imagem}" alt="Imagem do motorista"><br>
                <h3 class="nomeMotorista">${motorista.nome}</h3><br>
                <p><strong>Distância:</strong><br> ${distancia.toFixed(2)} km</p>
                <p><strong>Tempo de chegada:</strong><br> ${Math.round(tempoChegadaMinutos)} min</p>
                <p><strong>Placa:</strong><br>${motorista.Placa}</p>
                <p><strong>Cor do carro:</strong><br><img src="${motorista.cor}" alt="Cor do carro"></p></div>`); 
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