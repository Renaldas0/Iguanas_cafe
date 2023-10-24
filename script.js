'use strict';

window.onscroll = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 100);
};