document.body.onload = function () {

    setTimeout(function () {
        var preloader = document.querySelector('.preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000);
}
// setTimeout( () => {
//     document.addEventListener("DOMContentLoaded", pageReady);
// }, 1000)



// function pageReady() {
//     let preloader = document.querySelector('.preloader');
//     if (!preloader.classList.contains('done')) {
//         preloader.classList.add('done');
//     }
// }