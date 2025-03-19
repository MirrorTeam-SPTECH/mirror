document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeHamburguer = document.getElementById('theme-hamburguer');

    if (!toggleButton) console.error("Erro: Botão de tema (theme-toggle) não encontrado.");
    if (!themeIcon) console.error("Erro: Ícone do tema (theme-icon) não encontrado.");
    if (!themeHamburguer) console.error("Erro: Ícone do menu (theme-hamburguer) não encontrado.");

    if (!toggleButton || !themeIcon || !themeHamburguer) return;

    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.src = './assets/icon/moon.png';
            themeHamburguer.src = './assets/img/Elipse23.png';
        } else {
            body.classList.remove('dark-mode');
            themeIcon.src = './assets/icon/sun.png';
            themeHamburguer.src = './assets/img/Group 2.png';
        }
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(currentTheme);
    }

    // Aplica o tema ao carregar a página
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Adiciona evento de clique ao botão de alternância de tema
    toggleButton.addEventListener('click', toggleTheme);
});