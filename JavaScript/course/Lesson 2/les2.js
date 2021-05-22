"use strict";

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('#count');

button.onclick = function () {
    console.log('Program works property');
    let container = inputIn.value;
    console.log(+container);
    let lable = document.querySelector('#enText');
    lable.innerHTML = +container;
    inputIn.value = '';
    let check = +lable;
    if (check == 0) {
        lable.innerHTML = 'Enter any number';
    };
}