document.addEventListener('DOMContentLoaded', function() {

    // 1. Inicializa a Biblioteca de Animação (AOS)
    AOS.init({
        duration: 800,  // Duração da animação em ms
        once: true,     // Animação acontece apenas uma vez
        offset: 50,     // Começa a animação 50px antes do elemento aparecer
    });

    // 2. Funcionalidade do Menu Hamburger (Mobile)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        // Alterna a classe 'active' no menu para mostrá-lo ou escondê-lo
        navMenu.classList.toggle('active');

        // Opcional: Animação do ícone hamburger (muda para 'X' e vice-versa)
        if (navToggle.querySelector('i').classList.contains('bx-menu')) {
            navToggle.querySelector('i').classList.replace('bx-menu', 'bx-x');
        } else {
            navToggle.querySelector('i').classList.replace('bx-x', 'bx-menu');
        }
    });

    // 3. Opcional: Adiciona sombra na navbar ao rolar a página
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Opcional: Fecha o menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').classList.replace('bx-x', 'bx-menu');
            }
        });
    });

});