// abre e fecha menu lateral em modo mobile

const menuMobile = document.querySelector('.menu__mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains('bi-list')
        ? menuMobile.classList.replace('bi-list', 'bi-x')
        : menuMobile.classList.replace('bi-x', 'bi-list');
    body.classList.toggle('menu__nav__active');
})

// fechar menu ao clicar em algum item e mudar o ícone para list

const navItem = document.querySelectorAll('.nav-item');
navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains('menu__nav__active')) {
            body.classList.remove('menu__nav__active');
            menuMobile.classList.replace('bi-x', 'bi-list');
        }
    })
})

//animando todos os itens que tiverem o atributo data-anime

const item = document.querySelectorAll('[data-anime]');

const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight * .85;
    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
        console.log(windowTop);
        console.log(element.offsetTop);
    });
}

window.addEventListener('scroll', () => {
    animeScroll();
})