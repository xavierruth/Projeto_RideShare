function addEventListeners(prefix, numeroWhatsApp) {
    const abrirModal = document.querySelector(`#abrirModal${prefix}`);
    const modal = document.querySelector(`#modal${prefix}`);
    const closeButton = document.querySelector(`#closeButton${prefix}`);
    const sendButton = document.querySelector(`#sendButton${prefix}`);

    abrirModal.addEventListener('click', () => {
        modal.showModal();
    });

    closeButton.addEventListener('click', () => {
        modal.close();
    });

    sendButton.addEventListener('click', () => {
        // Pegar os valores dos campos do formulário
        var nome = document.getElementById(`nome${prefix}`).value;
        var mensagem = document.getElementById(`mensagem${prefix}`).value;

        // Construir a URL do WhatsApp com os parâmetros adequados
        var urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=Olá, eu sou ${nome}. ${mensagem}`;

        // Redirecionar para a URL do WhatsApp
        window.open(urlWhatsApp, "_blank");
    });
}

// Chamadas para adicionar ouvintes de evento para cada conjunto de elementos
addEventListeners('',  '+5581994197635'); 
addEventListeners('2', '+5581989179489');
addEventListeners('3', '+558199504711'); 
addEventListeners('4', '+558197131787'); 
addEventListeners('5', '+5581994197635'); 
addEventListeners('6', '+5581989179489');
addEventListeners('7', '+558199504711'); 
addEventListeners('8', '+558197131787'); 
addEventListeners('9', '+5581994197635'); 
addEventListeners('10', '+5581989179489');
addEventListeners('11', '+558199504711'); 






