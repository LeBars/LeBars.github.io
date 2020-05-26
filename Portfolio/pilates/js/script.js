let toggle = document.querySelector('.menu-toggle'),
    nav = document.querySelector('.nav'),
    body = document.querySelector('body'),
    btn = document.querySelector('.nav__close'),
    w = body.offsetWidth;

toggle.addEventListener('click', () => {
    nav.classList.add('nav__active');
    body.classList.add('locked');
    console.log('click')
    if (w > 1024) {
        body.style.paddingRight = "17px"
    }
});

btn.addEventListener('click', () => {
    nav.classList.remove('nav__active');
    body.classList.remove('locked');
    body.style.paddingRight = ""
});

let popup = document.querySelector('.popup__overlay'),
    btnClosePopup = document.querySelector('.popup__close'),
    btnOpenPopup = document.querySelectorAll('.btn-popup');

for(let i = 0; i < btnOpenPopup.length; i++) {
    btnOpenPopup[i].addEventListener('click', event => {
        event.preventDefault();
        popup.style.display = 'flex';
    });
}

btnClosePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    speed: 300,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider__btn-next',
      prevEl: '.slider__btn-prev',
    },
  })