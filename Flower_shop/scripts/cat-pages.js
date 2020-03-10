let items = document.querySelectorAll('.info__tab'),
    mainImg = document.querySelector('.image');

const    imagesWedding = [
    'img/wedding/image2.jpg',
    'img/wedding/image3.jpg',
    'img/wedding/image4.jpg',
    'img/wedding/image5.jpg'];

const    imagesTriumph = [
    'img/triumph/image2.jpg',
    'img/triumph/image3.jpg',
    'img/triumph/image4.jpg',
    'img/triumph/image5.jpg'];

const    imagesComposition = [
    'img/composition/image2.jpg',
    'img/composition/image3.jpg',
    'img/composition/image4.jpg',
    'img/composition/image5.jpg'];

const    imagesEvent = [
    'img/event/image2.jpg',
    'img/event/image3.jpg',
    'img/event/image4.jpg',
    'img/event/image5.jpg'];

function weddingImg() {
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => loadImage(imagesWedding[i]));
    };
    function loadImage(img) {
        mainImg.style.background = 'url(' + img + ') center no-repeat';
        console.log('НЕ работает')
    };
};

function triumphImg() {
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => loadImage(imagesTriumph[i]));
    };
    function loadImage(img) {
        mainImg.style.background = 'url(' + img + ') center no-repeat';
        console.log('НЕ работает')
    };
};

function compositionImg() {
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => loadImage(imagesComposition[i]));
    };
    function loadImage(img) {
        mainImg.style.background = 'url(' + img + ') center no-repeat';
        console.log('НЕ работает')
    };
};

function eventImg() {
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => loadImage(imagesEvent[i]));
    };
    function loadImage(img) {
        mainImg.style.background = 'url(' + img + ') center no-repeat';
        console.log('НЕ работает')
    };
};
