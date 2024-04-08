document.getElementById('btn-motorista').addEventListener('click', function() {
    // Torna o conteúdo do motorista visível e oculta o conteúdo do carona
    document.getElementById('motorista-content').classList.remove('hidden');
    document.getElementById('carona-content').classList.add('hidden');

    // Remove a classe 'active' do botão carona e adiciona ao botão motorista
    document.getElementById('btn-carona').classList.remove('active');
    document.getElementById('btn-motorista').classList.add('active');
});

document.getElementById('btn-carona').addEventListener('click', function() {
    // Torna o conteúdo do carona visível e oculta o conteúdo do motorista
    document.getElementById('carona-content').classList.remove('hidden');
    document.getElementById('motorista-content').classList.add('hidden');

    // Remove a classe 'active' do botão motorista e adiciona ao botão carona
    document.getElementById('btn-motorista').classList.remove('active');
    document.getElementById('btn-carona').classList.add('active');
});