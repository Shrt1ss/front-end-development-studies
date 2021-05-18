"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.feature__link');
    const descriptions = document.querySelectorAll('.feature-sub');

    console.log(buttons);
    console.log(descriptions);


    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('feature__link_active')) {
                button.classList.remove('feature__link_active');
                descriptions[index].classList.add('hidden');
            }
            else {
                descriptions.forEach((description) => {
                    description.classList.add('hidden');
                });
                buttons.forEach((button) => {
                    button.classList.remove('feature__link_active');
                });
                button.classList.add('feature__link_active');
                descriptions[index].classList.remove('hidden');
            };
        });
    });

});