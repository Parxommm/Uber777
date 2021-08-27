window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-nav__list'),
    menuItem = document.querySelectorAll('.header-nav__item'),
    hamburger = document.querySelector('.header-nav__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header-nav__hamburger--active');
        menu.classList.toggle('header-nav__list--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header-nav__hamburger--active');
            menu.classList.toggle('header-nav__list--active');
        })
    })
})