
console.log("Latitude do usuário:", userLatitude);
console.log("Longitude do usuário:", userLongitude);

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em quilômetros
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c; // Distância em quilômetros
    return distancia;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Função para calcular o tempo de chegada com base na velocidade média de deslocamento
function calcularTempoDeChegada(distancia) {
    const velocidadeMedia = 30; // Velocidade média em km/h
    const tempoEmHoras = distancia / velocidadeMedia; // Tempo em horas
    const tempoEmMinutos = tempoEmHoras * 60; // Tempo em minutos
    return Math.round(tempoEmMinutos); // Arredonda o tempo para o número inteiro mais próximo
}

// Exemplo de como calcular a distância e o tempo de chegada para o primeiro card
const latitudeCard1 = parseFloat(document.getElementById('destination-lat').textContent.trim());
const longitudeCard1 = parseFloat(document.getElementById('destination-lng').textContent.trim());
const distanciaCard1 = calcularDistancia(userLatitude, userLongitude, latitudeCard1, longitudeCard1);
const tempoChegadaCard1 = calcularTempoDeChegada(distanciaCard1);

console.log("Distância do Card 1:", distanciaCard1.toFixed(2), "km");
console.log("Tempo de Chegada do Card 1:", tempoChegadaCard1, "minutos");