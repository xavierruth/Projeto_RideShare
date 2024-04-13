const storedPhoto = localStorage.getItem('perfilPhoto');
if (storedPhoto) {
    document.querySelector('.img-foto').src = storedPhoto;
}