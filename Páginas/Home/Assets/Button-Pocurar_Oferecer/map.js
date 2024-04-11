var map; //inicia a loc do usuario default

function success(position){      //quando o usuario permitir acesso
    console.log(position.coords.latitude, position.coords.longitude); //para ver a coordernada
    
    if (map === undefined){     //ponto atual do mapa
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
    }else{
        map.remove();
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
    }
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); //mapa gerado e adicionado e suas contribuições
    
    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
        .bindPopup( '<h3>Sua Localização atual </h3>')
        .openPopup(); 


}

function error(error){ //autorização negada
    console.log(error);
}

var watchID= navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy:true,
    timeout:5000
}); 

//acompanha a localização do usuário. TimeOut caso não encontre e alta acuracea para uma localização mais precisa



fetch('/Páginas/Home/Assets/Button-Pocurar_Oferecer/pontos.json') //integração com o arquivo Json
    
    .then(response => response.json())
    .then(data => {
        data.forEach(function(motorista) {  //declara as variaveis que eu quero 
            const nome = motorista.nome;
            const distancia = motorista.distancia;
            const placa = motorista.Placa;
          
             L.marker([motorista.latitude, motorista.longitude]).addTo(map) //passo as latitudes e longitudes para criação dos pontos
            .bindPopup(`<h3>${nome}</h3><p><strong>Distância:</strong> ${distancia}</p><p><strong>Placa:</strong> ${placa}</p>`); //informação dos popups dos motoristas
        });
    }) 
    .catch(error => console.error('Erro ao carregar as localizações:', error)); //mensagem de erro 
 



// navigator.geolocation.clearWatch(watchID);  serve para não ter mais a localização do usuário 



