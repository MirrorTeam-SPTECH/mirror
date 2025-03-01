document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,  // Mostra 3 slides inteiros
        spaceBetween: 40,  // Aumenta o espaço entre os slides
        centeredSlides: true, // Mantém o slide ativo no centro
        loop: true,  // Permite rotação infinita dos slides
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            // Ajuste para telas menores
            1200: {
                slidesPerView: 3,   // Para telas maiores que 1200px, 3 slides visíveis
                spaceBetween: 20,   // Ajuste o espaço entre eles
            },
            768: {
                slidesPerView: 2,   // Para telas médias, exibe 2 slides
                spaceBetween: 30,   // Ajuste o espaço entre eles
            },
            576: {
                slidesPerView: 1,   // Para telas menores, exibe 1 slide
                spaceBetween: 20,   // Ajuste o espaço entre eles
            }
        }
    });
});
