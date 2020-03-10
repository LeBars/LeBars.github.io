let toggle = document.querySelector('.nav__toggle'),
    nav = document.querySelector('.nav'),
    body = document.querySelector('body'),
    btn = document.querySelector('.nav__close');

toggle.addEventListener('click', () => {
    nav.classList.add('nav__active');
    nav.classList.add('animated', 'fadeIn');
    body.classList.add('locked');
});

btn.addEventListener('click', () => {
    nav.classList.remove('nav__active');
    body.classList.remove('locked');
});