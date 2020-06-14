document.body.onload = function() {

    setTimeout(function () {
        let preloader = document.querySelector('.loader-wrapper');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1500);
}

function transitionHeader() {
    let header = document.querySelector('header'),
        heightHeader = header.clientHeight,
        widthWindow = document.body.offsetWidth;
    if(widthWindow >= 1024){
        console.log(widthWindow);
        if (window.pageYOffset > heightHeader / 2){
            header.style.opacity = '0';
            header.style.visibility = 'hidden';
        } else {
            header.style.opacity = '1';
            header.style.visibility = 'visible';
        }
    }
}
document.addEventListener('scroll', transitionHeader);