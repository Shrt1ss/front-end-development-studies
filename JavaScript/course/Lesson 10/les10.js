"use strict";

const stratBut1 = document.querySelector('#start-1');
const stratBut2 = document.querySelector('#start-2');
const stratBut3 = document.querySelector('#start-3');
const outPar = document.querySelector('.out');


function show1() {
    let associativeArr = {

        'one': 15,
        'two': 16,
        'five': 20,
    };

    outPar.textContent = associativeArr.five;

    return associativeArr.five;
}

stratBut1.onclick = show1;

function show2() {
    let associativeArr = {

        'one': 'Hello',
        'two': '*wave your hand*',
        'five': 'Hi',
    };

    outPar.textContent = associativeArr.five;

    return associativeArr.five;
}

stratBut2.onclick = show2;

function show3() {
    let associativeArr = {

        'one': 'Hello',
        'two': '*wave your hand*',
        'five': 'Hi',
    };
    let content = '';

    for (let key in associativeArr) {
        console.log(associativeArr[key]);
        content += `${associativeArr[key]} `;
    };

    outPar.textContent = content;

    return content;
}

stratBut3.onclick = show3;