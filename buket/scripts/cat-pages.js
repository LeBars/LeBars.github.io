let items = document.querySelectorAll('.info__tab'),
    mainImg = document.querySelector('.image'),
    btnPrev = document.querySelector('.info__tabs_arr-l'),
    btnNext = document.querySelector('.info__tabs_arr-r'),
    counter = 0,
    slider = document.querySelector('.info__tabs_slider'),
    wIndex = 0;
    

const    imagesWedding = [
    'img/wedding/image1.jpg',
    'img/wedding/image2.jpg',
    'img/wedding/image3.jpg',
    'img/wedding/image4.jpg',
    'img/wedding/image5.jpg',
    'img/wedding/image6.jpg',
    'img/wedding/image7.jpg',
    'img/wedding/image8.jpg'];

const    imagesTriumph = [
    'img/triumph/image1.jpg',
    'img/triumph/image2.jpg',
    'img/triumph/image3.jpg',
    'img/triumph/image4.jpg',
    'img/triumph/image5.jpg',
    'img/triumph/image6.jpg',
    'img/triumph/image7.jpg',
    'img/triumph/image8.jpg'];

const    imagesComposition = [
    'img/composition/image1.jpg',
    'img/composition/image2.jpg',
    'img/composition/image3.jpg',
    'img/composition/image4.jpg',
    'img/composition/image5.jpg',
    'img/composition/image6.jpg',
    'img/composition/image7.jpg',
    'img/composition/image8.jpg'];

const    imagesEvent = [
    'img/event/image1.jpg',
    'img/event/image2.jpg',
    'img/event/image3.jpg',
    'img/event/image4.jpg',
    'img/event/image5.jpg',
    'img/event/image6.jpg',
    'img/event/image7.jpg',
    'img/event/image8.jpg'];

function loadImage(img) {
    mainImg.style.background = 'url(' + img + ') center no-repeat';
    mainImg.style.backgroundSize = 'cover';
};

function showBtnPrev() {
    if (counter != 0) {
        btnPrev.style.display = 'block';
    }
    else {
        btnPrev.style.display = 'none';
    }
}
function showBtnNext() {
    if (counter == 4) {
        btnNext.style.display = 'none';
    }
    else {
        btnNext.style.display = 'block';
    }
}

btnNext.addEventListener('click', () => {
    counter++;
    wIndex += 133;
    slideInit(wIndex);
    showBtnPrev();
    showBtnNext();
})
btnPrev.addEventListener('click', () => {
    counter--;
    wIndex -= 133;
    slideInit(wIndex);
    showBtnPrev();
    showBtnNext();
})

function slideInit(w) {
    slider.style.left = '-' + w + 'px';
}




    


function weddingImg() {
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => loadImage(imagesWedding[i]));
    };
};

function triumphImg() {
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => loadImage(imagesTriumph[i]));
    };
};

function compositionImg() {
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => loadImage(imagesComposition[i]));
    };
};

function eventImg() {
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => loadImage(imagesEvent[i]));
    };
};
