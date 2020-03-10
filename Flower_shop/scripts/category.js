let items = document.querySelectorAll('.catalog__card'),
    itemsNumber = document.querySelectorAll('.catalog__card_number > span'),
    itemsTitle = document.querySelectorAll('.catalog__card_title'),
    itemsBtn = document.querySelectorAll('.catalog__card_btn'),
    itemsBorder = document.querySelectorAll('.catalog__card_border');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseenter', () => {
        itemsTitle[i].style.height = '70%';
        itemsBtn[i].style.display = 'flex';
        itemsBtn[i].classList.add('animated', 'fadeInLeft');
        itemsBorder[i].style.display = 'block';
        itemsBorder[i].classList.add('animated', 'fadeIn');
        itemsNumber[i].classList.add('number-active');
    })
    items[i].addEventListener('mouseleave', () => {
        itemsTitle[i].style.height = '88%';
        itemsBtn[i].style.display = 'none';
        itemsBorder[i].style.display = 'none';
        itemsNumber[i].classList.remove('number-active');
    })
}

