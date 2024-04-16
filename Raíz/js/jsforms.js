function login() {
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;

    if (username && senha) {
        // Armazenar o username no localStorage
        localStorage.setItem('username', username);
        // Redirecionar para a página home.html
        window.location.href = "./home.html";
    } else {
        alert("Por favor, preencha seu usuário e senha.");
    }
}


//alterar nome do usuário
window.onload = function() {
    var username = localStorage.getItem('username');
    if (username) {
        var welcomeMessageElement = document.getElementById("welcome-message");
        if (welcomeMessageElement) { // Verifica se o elemento foi encontrado
            welcomeMessageElement.innerText = username;
        } else {
            console.error("Elemento 'welcome-message' não encontrado.");
        }
    }
};

// Função para atualizar o nome de usuário no localStorage e na página
function updateUsername(newUsername) {
    // Atualiza o nome de usuário no localStorage
    localStorage.setItem('username', newUsername);

    // Atualiza o elemento de boas-vindas na página
    const welcomeMessageElement = document.getElementById('welcome-message');
    if (welcomeMessageElement) {
        welcomeMessageElement.textContent = `Olá, ${newUsername}! Bem-vindo de volta.`;
    }
}

// Função para lidar com a submissão do formulário de edição de perfil
function submitProfileForm() {
    // Obter o novo nome de usuário do formulário
    const newUsername = document.getElementById('new-username').value;

    // Verificar se o novo nome de usuário não está vazio
    if (newUsername.trim() !== '') {
        // Atualizar o nome de usuário
        updateUsername(newUsername);

        // Exibir uma mensagem de sucesso (opcional)
        alert('Nome de usuário atualizado com sucesso!');
    } else {
        // Exibir uma mensagem de erro se o campo estiver vazio
        alert('Por favor, insira um novo nome de usuário.');
    }

    // Impedir o envio do formulário
    return false;
}

// Adicione esta função ao seu arquivo de scripts jsforms.js
function submitProfileForm() {
    var newUsername = document.getElementById("new-username").value;

    // Simulando o envio do formulário (você pode adicionar sua lógica de envio aqui)
    // Por exemplo, enviar uma solicitação AJAX para o servidor para atualizar o nome de usuário

    // Exibindo a mensagem de confirmação
    var successMessage = document.getElementById("success-message");
    successMessage.classList.remove("hidden");

    // Impedindo o envio do formulário para evitar que a página seja recarregada
    return false;
}

