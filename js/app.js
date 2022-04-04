'use strict'

// бургер меню =================================================================

const burgerMenu = document.querySelector('.burger__menu');
const menuBody = document.querySelector('.secondRow_navigation');
if (burgerMenu) {
    burgerMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}