let headerBurger = document.querySelector('.header__burger');
let hbm = document.querySelector('.header__burger-menu');

headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    hbm.classList.toggle('active');
})