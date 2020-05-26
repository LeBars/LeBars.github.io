let toggle = document.querySelector('.nav__toggle'),
    nav = document.querySelector('.nav'),
    body = document.querySelector('body'),
    btn = document.querySelector('.nav__close'),
    w = body.offsetWidth;

toggle.addEventListener('click', () => {
    nav.classList.add('nav__active');
    nav.classList.add('animated', 'bounceInRight');
    body.classList.add('locked');
    if (w > 1024) {
        body.style.paddingRight = "17px"
    }    
});

btn.addEventListener('click', () => {
    nav.classList.add('animated', 'bounceOutRight');
    setTimeout(() => {
        nav.classList.remove('nav__active');
        body.classList.remove('locked');
        body.style.paddingRight = ""
        nav.classList.remove('animated', 'bounceOutRight');
    }, 500)
});