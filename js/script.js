'use strict'

// MENU

let tabsColl = document.querySelectorAll('.sidebar__tab'),
    pagesColl = document.querySelectorAll('.container'),
    tabs = document.querySelector('.sidebar__tabs'),
    displayWidth = document.body.offsetWidth;

    
tabs.addEventListener('click', function (event) {
    let index = event.target.closest('a').dataset.index;
    if(displayWidth <= 768) {
        sidebar.style.animationDirection = 'reverse';
        sidebar.classList.add('anim');
        setTimeout(() => {
            sidebar.classList.remove('anim');
            sidebar.style.display = 'none';
            sidebar.style.animationDirection = 'normal';
        }, 800)
    }
    openTab(index);
    openPage(index);
})

function openTab(index){
    tabsColl.forEach(function(el) {
        el.classList.remove('sidebar__tab_active')
        if (el.dataset.index == index){
            el.classList.add('sidebar__tab_active')
        }
    });
}

function openPage(index){
    pagesColl.forEach(function (el) {
        el.classList.add('hide-display')
        if (el.dataset.index == index) {
            el.classList.remove('hide-display')
            el.classList.add('show-anim')
        }
    });
}
window.onload = function () {

    setTimeout(function () {
        let preloader = document.querySelector('.preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1800);
}


// TOGGLE

let toggle = document.querySelector('.toggle-menu'),
    sidebar = document.querySelector('.sidebar');


toggle.addEventListener('click', function () {
    sidebar.style.display = 'flex';
    sidebar.classList.add('anim');
    setTimeout(() => {
        sidebar.classList.remove('anim');
    }, 800)
})

function sidebarAnim() {
    sidebar.style.animationDirection = 'reverse';
}