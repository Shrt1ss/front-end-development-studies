"use strict";

const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {

        event.preventDefault();
        //Element to that we supposed scroll our page
        const id = link.getAttribute('href').substring(1);
        //console.log(id);
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
        });
    });
});