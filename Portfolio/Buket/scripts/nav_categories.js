let toggle = document.querySelector('.nav__toggle'),
    nav = document.querySelector('.nav'),
    btn = document.querySelector('.nav__close');

toggle.addEventListener('click', () => {
    nav.classList.add('nav__active');
    nav.classList.add('animated', 'bounceInRight');
});

btn.addEventListener('click', () => {
    nav.classList.add('animated', 'bounceOutRight');
    setTimeout(() => {
        nav.classList.remove('nav__active');
        nav.classList.remove('animated', 'bounceOutRight');
    }, 500)
});