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

        // Seleciona os elementos com os IDs "busco-motorista" e "busco-passageiro"
        const motoristaContainer = document.getElementById('busco-motorista');
        const passageiroContainer = document.getElementById('busco-passageiro');

        // Seleciona os cards de cada seção
        const motoristaCards = motoristaContainer.querySelectorAll('.cards-section');
        const passageiroCards = passageiroContainer.querySelectorAll('.cards-section');

        // Transforma o NodeList em arrays para poder ordenar
        const motoristaCardsArray = Array.from(motoristaCards);
        const passageiroCardsArray = Array.from(passageiroCards);

        // Função para ordenar os cards com base na distância
        function ordenarCards(cardsArray) {
            cardsArray.sort(function(cardA, cardB) {
                const pointALatitude = parseFloat(cardA.querySelector('#destination-lat').textContent);
                const pointALongitude = parseFloat(cardA.querySelector('#destination-lng').textContent);
                const distanceA = calcularDistancia(userLatitude, userLongitude, pointALatitude, pointALongitude);

                const pointBLatitude = parseFloat(cardB.querySelector('#destination-lat').textContent);
                const pointBLongitude = parseFloat(cardB.querySelector('#destination-lng').textContent);
                const distanceB = calcularDistancia(userLatitude, userLongitude, pointBLatitude, pointBLongitude);

                return distanceA - distanceB; // Ordena do menor para o maior
            });
        }

        // Ordena os cards de motorista e passageiro
        ordenarCards(motoristaCardsArray);
        ordenarCards(passageiroCardsArray);

        // Esconde todos os cards
        motoristaCardsArray.forEach(card => card.classList.add('hidden'));
        passageiroCardsArray.forEach(card => card.classList.add('hidden'));

        // Exibe apenas os dois primeiros cards de cada seção
        for (let i = 0; i < 2; i++) {
            if (motoristaCardsArray[i]) {
                motoristaContainer.appendChild(motoristaCardsArray[i]); // Move o card de motorista para a nova posição no DOM
                motoristaCardsArray[i].classList.remove('hidden'); // Remove a classe 'hidden' do card de motorista
            }
            if (passageiroCardsArray[i]) {
                passageiroContainer.appendChild(passageiroCardsArray[i]); // Move o card de passageiro para a nova posição no DOM
                passageiroCardsArray[i].classList.remove('hidden'); // Remove a classe 'hidden' do card de passageiro
            }
        }
    } else {
        console.log('Localização do usuário não encontrada.');
    }
});