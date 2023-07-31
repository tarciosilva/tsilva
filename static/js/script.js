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