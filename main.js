// Abre e fecha o menu quando clicar no ícone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// Quando clicar em um item do menu, fechar o menu
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// mudar o header da página quando der scroll

function changeHeaderWhenScroll() {
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// Swiper-Slider
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

// Scroll Reveal: mostrar elementos lentamente quando der scroll na página
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services .header, #services .card,
    #testimonials .header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
     { interval: 100 }
     )

// Botão Voltar para o TOPO
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// WHEN SCROLL
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
})