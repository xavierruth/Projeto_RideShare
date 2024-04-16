document.addEventListener('DOMContentLoaded', function() {
    // Recupera a latitude e longitude armazenadas em localStorage
    const userLatitude = localStorage.getItem('userLatitude');
    const userLongitude = localStorage.getItem('userLongitude');

    // Se a latitude e longitude estiverem disponíveis, faça algo com elas
    if (userLatitude && userLongitude) {

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

        // Seleciona todos os elementos com a classe "carona-proxima"
        const cardsContainer = document.querySelector('.carona-proxima');
        const cards = cardsContainer.querySelectorAll('.cards-section');

        // Transforma o NodeList em um array para poder ordenar
        const cardsArray = Array.from(cards);

        // Ordena os cards com base na distância
        cardsArray.sort(function(cardA, cardB) {
            const pointALatitude = parseFloat(cardA.querySelector('#destination-lat').textContent);
            const pointALongitude = parseFloat(cardA.querySelector('#destination-lng').textContent);
            const distanceA = calcularDistancia(userLatitude, userLongitude, pointALatitude, pointALongitude);

            const pointBLatitude = parseFloat(cardB.querySelector('#destination-lat').textContent);
            const pointBLongitude = parseFloat(cardB.querySelector('#destination-lng').textContent);
            const distanceB = calcularDistancia(userLatitude, userLongitude, pointBLatitude, pointBLongitude);

            return distanceA - distanceB; // Ordena do menor para o maior
        });

        // Reorganiza os cards no DOM de acordo com a ordem calculada
        cardsArray.forEach(card => {
            cardsContainer.appendChild(card); // Mova o card para a nova posição no DOM
        });
    } else {
        console.log('Localização do usuário não encontrada.');
    }
});