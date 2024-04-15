document.addEventListener('DOMContentLoaded', function() {
    // Recupera a latitude e longitude armazenadas em localStorage
    const userLatitude = localStorage.getItem('userLatitude');
    const userLongitude = localStorage.getItem('userLongitude');

    // Se a latitude e longitude estiverem disponíveis, faça algo com elas
    if (userLatitude && userLongitude) {
        console.log('Latitude:', userLatitude);
        console.log('Longitude:', userLongitude);
        // Aqui você pode usar a latitude e longitude para fazer o que precisar na página inicial

        // Obter detalhes da localização
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${userLatitude}&lon=${userLongitude}&format=json`)
            .then(response => response.json())
            .then(data => {
                const address = data.address;
                console.log(address)
                const rua = address.road || ''; // Rua
                const numero = address.house_number || ''; // Número
                const bairro = address.suburb || ''; // Bairro

                // Atualizar o input com rua, número e bairro
                document.getElementById('input-carona-partida').value = `${rua}, ${numero}, ${bairro}`;
            })
            .catch(error => console.error('Erro ao obter detalhes da localização:', error));
    } else {
        console.log('Localização do usuário não encontrada.');
    }
});