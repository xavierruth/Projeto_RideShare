document.addEventListener('DOMContentLoaded', function() {
    // Função para calcular a rota e atualizar os cards
    function calcularRotaParaMarcador(latitude, longitude, nome, placa, cor, imagem) {
        L.Routing.control({
            waypoints: [
                L.latLng(userLatitude, userLongitude),
                L.latLng(latitude, longitude)
            ],
            router: L.Routing.osrmv1({
                serviceUrl: 'https://router.project-osrm.org/route/v1'
            }),
            createMarker: function(i, waypoint, number) {
                const distancia = number.toFixed(2);
                const tempoChegada = Math.round(waypoint.time / 60);
                
                // Atualiza os elementos HTML dos cards com a distância e o tempo de chegada
                const cardContent = document.getElementById(`${nome}-content`);
                cardContent.querySelector('#distance').textContent = distancia;
                cardContent.querySelector('#arrivalTime').textContent = tempoChegada;
                
                // Retorna o marcador personalizado
                return L.marker(waypoint.latLng, {
                    icon: motoristaIcon
                }).bindPopup(`<div class = "cardMap"><img class=imgMotorista src="${imagem}" alt="Imagem do motorista"><br>
                    <h3 class=nomeMotorista>${nome}</h3><br>
                    <p><strong>Distância:</strong><br> ${distancia} km</p>
                    <p><strong>Tempo de Chegada:</strong><br>${tempoChegada} minutos</p>
                    <p><strong>Placa:</strong><br>${placa}</p>
                    <p><strong>Cor do carro:</strong><br><br>
                    <img src="${cor}" alt="cor do carro"></p><div>`);
            }
        }).addTo(map);
    }
    
    // Obtém a localização do usuário do localStorage
    const userLatitude = localStorage.getItem('userLatitude');
    const userLongitude = localStorage.getItem('userLongitude');
    
    // Calcula a rota para cada marcador de motorista
    data.forEach(function(motorista) {
        const nome = motorista.nome;
        const placa = motorista.Placa;
        const cor = motorista.cor;
        const imagem = motorista.imagem;
        calcularRotaParaMarcador(motorista.latitude, motorista.longitude, nome, placa, cor, imagem);
    });
});