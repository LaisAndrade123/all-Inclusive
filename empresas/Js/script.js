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

// Exibir ou ocultar o menu de perfil ao clicar na foto de perfil
function toggleProfileMenu() {
    const profileMenu = document.getElementById("profileMenu");
    profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
}

// Ocultar o menu de perfil ao clicar fora da área do menu
window.addEventListener("click", function (event) {
    const profileMenu = document.getElementById("profileMenu");
    const profilePic = document.querySelector(".profile-pic");
    if (event.target !== profileMenu && event.target !== profilePic && !profileMenu.contains(event.target)) {
        profileMenu.style.display = "none";
    }
});



//Usuario
    document.getElementById("search-bar").addEventListener("input", function() {
        const searchQuery = this.value.toLowerCase();
        const empresaCards = document.querySelectorAll(".mais-empresas .empresa-card");

        empresaCards.forEach(card => {
            const empresaName = card.getAttribute("data-name").toLowerCase();
            if (empresaName.includes(searchQuery)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

// Função de edição do nome do usuário (apenas exemplo, pode personalizar como preferir)
function editUserName() {
    const userName = document.querySelector(".user-name");
    const newName = prompt("Digite o novo nome do usuário:");
    if (newName) {
        userName.textContent = newName;
    }
}

 

  




// comentario

function verMaisComentarios() {
    alert("Em breve: Uma seção completa de comentários e experiências dos usuários!");
}

document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe a mensagem de confirmação
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.style.display = "block";

    // Limpa o campo de texto
    document.getElementById("comentario-texto").value = "";

    // Oculta a mensagem após alguns segundos (opcional)
    setTimeout(() => {
        confirmationMessage.style.display = "none";
    }, 3000); // 3 segundos
});

