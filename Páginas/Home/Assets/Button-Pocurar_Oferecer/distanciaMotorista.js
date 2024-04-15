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

document.addEventListener('DOMContentLoaded', function() {
    // Recupera a latitude e longitude armazenadas em localStorage
    const userLatitude = localStorage.getItem('userLatitude');
    const userLongitude = localStorage.getItem('userLongitude');

    // Se a latitude e longitude estiverem disponíveis, faça algo com elas
    if (userLatitude && userLongitude) {

        // Seleciona todos os elementos com a classe "conteudo-card"
        const cards = document.querySelectorAll('.conteudo-card');

        // Assumindo uma velocidade média de 40km/h vias urbanas
        const velocidadeMedia = 40;

        // Itera sobre os cards
        cards.forEach(card => {
            // Recupera a latitude e longitude do ponto no card
            const pointLatitude = parseFloat(card.querySelector('#destination-lat').textContent);
            const pointLongitude = parseFloat(card.querySelector('#destination-lng').textContent);

            // Calcula a distância entre o usuário e o ponto
            let distancia = calcularDistancia(userLatitude, userLongitude, pointLatitude, pointLongitude);

            // Verifica se a distância é menor que 1 km
            if (distancia < 1) {
                // Converte a distância para metros
                distancia *= 1000;
                // Atualiza o texto para metros
                card.querySelector('#distance').textContent = `${distancia.toFixed(0)} m`;
            } else {
                // Atualiza o texto para quilômetros
                card.querySelector('#distance').textContent = `${distancia.toFixed(2)} km`; // Limita o número de casas decimais a 2
            }

            // Calcula o tempo de chegada em minutos
            const tempoChegadaMinutos = (distancia / velocidadeMedia) * 60;

            // Verifica se o tempo de chegada é maior que 60 minutos
            if (tempoChegadaMinutos >= 60) {
                // Calcula as horas e minutos
                const horas = Math.floor(tempoChegadaMinutos / 60);
                const minutos = Math.round(tempoChegadaMinutos % 60);
                // Atualiza o elemento span com o tempo de chegada em horas e minutos
                card.querySelector('#arrivalTime').textContent = `${horas}h ${minutos}min`;
            } else {
                // Atualiza o elemento span com o tempo de chegada em minutos
                card.querySelector('#arrivalTime').textContent = `${Math.round(tempoChegadaMinutos)} min`;
            }
        });
    } else {
        console.log('Localização do usuário não encontrada.');
    }
});