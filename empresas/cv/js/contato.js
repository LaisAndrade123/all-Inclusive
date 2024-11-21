const toggleTheme = document.getElementById("toggleTheme");

const rootHtml = document.documentElement;

const accordionHeaders = document.querySelectorAll(".accordion-header");



//função para alternar o tema 
function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

} 

toggleTheme.addEventListener("click", changeTheme);
//fim da função mudar o tema

accordionHeaders.forEach( header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove ("active") :
        accordionItem.classList.add("active");
    })
})




document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chat-messages');
    const uploadFile = document.getElementById('uploadFile');
    const companyList = document.getElementById('companyList');
    const chatTitle = document.getElementById('chatTitle');
    const companyAvatar = document.querySelector('.company-avatar');
    let selectedCompany = '';

    // Seleciona a empresa
    companyList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            selectedCompany = event.target.textContent;
            chatTitle.textContent = `Converse com ${selectedCompany}`;
            companyAvatar.src = 'img/cbre'; // Altere a imagem conforme necessário para cada empresa
            chatMessages.innerHTML = ''; // Limpa mensagens anteriores
        }
    });

    document.querySelectorAll('#companyList .list-group-item').forEach(item => {
        item.addEventListener('click', function () {
            const companyName = this.getAttribute('data-company');
            let logoSrc = this.getAttribute('data-logo');
    
            // Teste com uma URL fixa para verificar se a logo aparece corretamente
            logoSrc = logoSrc || 'https://via.placeholder.com/150';
    
            // Atualiza o título e a imagem no chat
            document.getElementById('chatTitle').textContent = `Converse com ${companyName}`;
            document.getElementById('companyLogo').src = logoSrc;
        });
    });
    
    // Envio de mensagem no chat
    sendMessageButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message && selectedCompany) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'sent');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Rolagem automática
            messageInput.value = ''; // Limpa o campo
        } else if (!selectedCompany) {
            alert('Por favor, selecione uma empresa antes de enviar uma mensagem.');
        }
    });

    // Envio de currículo
    uploadFile.addEventListener('change', () => {
        const file = uploadFile.files[0];
        if (file) {
            alert(`Currículo ${file.name} enviado com sucesso!`);
        }
    });
});
