var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('nav-closed')) {
        navMain.classList.remove('nav-closed');
        navMain.classList.add('nav-opened');
    } else {
        navMain.classList.add('nav-closed');
        navMain.classList.remove('nav-opened');
    }
});