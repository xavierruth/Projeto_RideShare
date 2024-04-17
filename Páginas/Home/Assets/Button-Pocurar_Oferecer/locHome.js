document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o navegador suporta geolocalização
    if ("geolocation" in navigator) {
        // Solicita a localização do usuário
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLatitude = position.coords.latitude;
            const userLongitude = position.coords.longitude;

            // Armazena a latitude e longitude no localStorage
            localStorage.setItem('userLatitude', userLatitude);
            localStorage.setItem('userLongitude', userLongitude);

            // Faça o que precisar com a latitude e longitude aqui

            // Obter detalhes da localização
            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${userLatitude}&lon=${userLongitude}&format=json`)
                .then(response => response.json())
                .then(data => {
                    const address = data.address;
                    const rua = address.road || ''; // Rua
                    const numero = address.house_number || ''; // Número
                    const bairro = address.suburb || ''; // Bairro

                    // Atualizar o input com rua, número e bairro
                    document.getElementById('input-carona-partida').value = `${rua}, ${numero}, ${bairro}`;
                })
                .catch(error => console.error('Erro ao obter detalhes da localização:', error));
        });
    } else {
        console.log('Geolocalização não suportada.');
    }
});