const abrirModal = document.querySelector('#modalButton');
const modal= document.querySelector('#abrirModalPerfil');
const closeButton=document.querySelector('#closeBtn');


abrirModal.addEventListener('click', () =>{
    modal.showModal();
})


closeButton.addEventListener('click', () =>{
    modal.close();
    
    window.location.href = "perfil.html";
})


