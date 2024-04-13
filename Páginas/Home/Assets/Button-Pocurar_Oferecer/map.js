var map; //inicia a loc do usuario default
// var violetIcon;
var greenIcon; // corrigido o nome da variável



// violetIcon = L.icon({
//     iconUrl: './Navegação/Assets/img/modelo5.svg',


//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });


violetIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function success(position) { //quando o usuario permitir acesso
    console.log(position.coords.latitude, position.coords.longitude); //para ver a coordernada

    if (map === undefined) { //ponto atual do mapa
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 14);
    } else {
        map.remove();
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 14);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); //mapa gerado e adicionado e suas contribuições

    L.marker([position.coords.latitude, position.coords.longitude], {
            icon: violetIcon
        }).addTo(map)
        .bindPopup("<h3>Sua Localização atual </h3>")
        .openPopup();
}

function error(error) { //autorização negada
    console.log(error);
}

var watchID = navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});

fetch('/Páginas/Home/Assets/Button-Pocurar_Oferecer/pontos.json') //integração com o arquivo Json
    .then(response => response.json())
    .then(data => {
        data.forEach(function(motorista) { //declara as variaveis que eu quero 
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
            }).addTo(map) //passo as latitudes e longitudes para criação dos pontos
                .bindPopup(`<div class = "cardMap"><img class=imgMotorista src="${imagem}" alt="Imagem do motorista"><br>
                <h3 class=nomeMotorista>${nome}</h3><br>
                <p><strong>Distância:</strong><br> ${distancia}</p>
                <p><strong>Placa:</strong><br>${placa}</p>
                <p><strong>Cor do carro:</strong><br><br>
                <img src="${cor}" alt="cor do carro"></p><div>`); //informação dos popups dos motoristas
        });
    })
    .catch(error => console.error('Erro ao carregar as localizações:', error)); //mensagem de erro
