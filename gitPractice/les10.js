"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const textFromPage = document.querySelector('.practice');
    textFromPage.addEventListener('click', () => {
        textFromPage.classList.toggle('additional');
    });
});

