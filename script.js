// Acessa o elemento com o ID 'current-year'
const yearSpan = document.getElementById('current-year');

// Verifica se o elemento existe
if (yearSpan) {
    // Pega o ano atual
    const currentYear = new Date().getFullYear();
    
    // Insere o ano atual no elemento
    yearSpan.textContent = currentYear;
}

// Você pode adicionar mais interatividade aqui no futuro!
console.log("Script.js carregado. Seja bem-vindo ao meu projeto!");