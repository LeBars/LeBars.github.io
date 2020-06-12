function transitionHeader() {
    let header = document.querySelector('header'),
        heightHeader = header.clientHeight;
    
    if (window.pageYOffset > heightHeader / 2){
        header.style.opacity = '0';
        header.style.visibility = 'hidden';
    } else {
        header.style.opacity = '1';
        header.style.visibility = 'visible';
    }
}
document.addEventListener('scroll', transitionHeader);