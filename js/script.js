let headerBurger = document.querySelector('.header__burger');
let hbm = document.querySelector('.header__burger-menu');

headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    hbm.classList.toggle('active');
})


/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById ('prev');
let next = document.getElementById ('next');

next.addEventListener ("click", function () {
    showSlides(slideIndex += 1);
    makeTimer();//Пересоздаем интервал если производится нажатие 
});

prev.addEventListener ("click", function () {
    showSlides(slideIndex -= 1);
    makeTimer();//Пересоздаем интервал если производится нажатие 
});

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("hero__item");
    let dots = document.getElementsByClassName("hero-dots_item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";  
    dots[slideIndex - 1].className += " active";  
}

let timer = 0;
makeTimer(); //Создаем интервал
function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },5000);
}
