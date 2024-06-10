function validatePassword() {
    const senha = document.getElementById('senha').value;
    const senhaError = document.getElementById('senhaError');
    const passwordPattern = /^[A-Z].{4,}$/;

    if (!passwordPattern.test(senha)) {
        senhaError.style.display = 'block';
        return false;
    } else {
        senhaError.style.display = 'none';
        return true;
    }
}

function validateConfirmPassword() {
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;
    const confirmaSenhaError = document.getElementById('confirmaSenhaError');

    if (senha !== confirmaSenha) {
        confirmaSenhaError.style.display = 'block';
        return false;
    } else {
        confirmaSenhaError.style.display = 'none';
        return true;
    }
}