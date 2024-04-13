function updatePhotoPreview(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const image = document.getElementById('foto-preview');
        image.src = e.target.result;

        // Armazenar a imagem localmente
        localStorage.setItem('perfilPhoto', e.target.result);
    };
    
    reader.readAsDataURL(file);
}

document.getElementById('file-upload').addEventListener('change', updatePhotoPreview);

const storedPhoto = localStorage.getItem('perfilPhoto');
if (storedPhoto) {
    document.getElementById('foto-preview').src = storedPhoto;
}