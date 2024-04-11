const abrirModal = document.querySelector('#abrirModal');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#closeButton');
const sendButton = document.querySelector('#sendButton');

abrirModal.addEventListener('click', () => {
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

sendButton.addEventListener('click', () => {
    // Pegar os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;

    // Número de telefone para enviar a mensagem no formato internacional
    var numeroWhatsApp = "+5581994197635"; // Substitua pelo número desejado

    // Construir a URL do WhatsApp com os parâmetros adequados
    var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroWhatsApp + "&text=Olá, eu sou " + nome + ". " + mensagem;

    // Redirecionar para a URL do WhatsApp
    window.open(urlWhatsApp, "_blank");
});

const abrirModal2 = document.querySelector('#abrirModal2');
const modal2 = document.querySelector('#modal2');
const closeButton2 = document.querySelector('#closeButton2');

abrirModal2.addEventListener('click', () => {
    modal2.showModal();
});

closeButton2.addEventListener('click', () => {
    modal2.close();
});


// Falta os outros cards