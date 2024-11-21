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


    // Configuração do Typed.js
    document.addEventListener("DOMContentLoaded", function () {
        var typed = new Typed("#typed-text", {
            strings: ["Preparo", "Oportunidades", "Respeito"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1500,
            startDelay: 500,
            loop: true
        });
    });


    // Função para validar o e-mail
function validateEmail() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message");

    // Expressão regular para validar o formato de e-mail
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Se o e-mail não for válido
    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.innerHTML = "Por favor, insira um e-mail válido.";
        return false; // Impede o envio do formulário
    }

    // Se o e-mail for válido
    message.style.color = "green";
    message.innerHTML = "E-mail válido! Redirecionando...";

    // Redireciona para a página empresas.html após 2 segundos
    setTimeout(function() {
        window.location.href = "https://laisandrade123.github.io/all-inclusive/empresas/empresas.html";
        // Link para a página de empresas
    }, 2000);  // Redireciona após 2 segundos

    return false;  // Impede o envio do formulário
}
