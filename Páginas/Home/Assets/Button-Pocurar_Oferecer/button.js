// Inicia ocultando o conteúdo do motorista e tornando visível o conteúdo do carona
document.getElementById('motorista-content').classList.add('hidden');
document.getElementById('carona-content').classList.remove('hidden');
document.getElementById('busco-motorista').classList.add('hidden');
document.getElementById('busco-passageiro').classList.remove('hidden');

// Adiciona event listener para o botão de selecionar motorista
document.getElementById('btn-motorista').addEventListener('click', function() {
    
    // Torna o conteúdo do motorista visível e oculta o conteúdo do carona
    document.getElementById('motorista-content').classList.remove('hidden');
    document.getElementById('carona-content').classList.add('hidden');
    document.getElementById('busco-motorista').classList.remove('hidden');
    document.getElementById('busco-passageiro').classList.add('hidden');

    // Remove a classe 'active' do botão carona e adiciona ao botão motorista
    document.getElementById('btn-carona').classList.remove('active');
    document.getElementById('btn-motorista').classList.add('active');
   
});

// Adiciona event listener para o botão de selecionar carona
document.getElementById('btn-carona').addEventListener('click', function() {
    
    // Torna o conteúdo do carona visível e oculta o conteúdo do motorista
    document.getElementById('carona-content').classList.remove('hidden');
    document.getElementById('motorista-content').classList.add('hidden');
    document.getElementById('busco-motorista').classList.add('hidden');
    document.getElementById('busco-passageiro').classList.remove('hidden');

    // Remove a classe 'active' do botão motorista e adiciona ao botão carona
    document.getElementById('btn-motorista').classList.remove('active');
    document.getElementById('btn-carona').classList.add('active');
});


// Adiciona event listener para o botão de procurar
document.getElementById('btn-procurar').addEventListener('click', function() {
    // Redireciona para a página desejada
    window.location.href = 'procurar_carona.html'; // Substitua 'url_da_outra_pagina.html' pela URL da página para onde deseja redirecionar
});


// Adiciona event listener para o botão de procurar
document.getElementById('btn-oferecer').addEventListener('click', function() {
    // Redireciona para a página desejada
    window.location.href = 'oferecer_carona.html'; // Substitua 'url_da_outra_pagina.html' pela URL da página para onde deseja redirecionar
});
