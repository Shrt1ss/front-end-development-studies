"use strict";

let test = 99;
let a1 = 100;

document.querySelector('#f-1').onclick = t1;
document.querySelector('#f-2').onclick = fort3;
document.querySelector('#f-3').onclick = fort31;

function t1() {
    document.querySelector('#out-1').textContent = 'work';
    return test;
};


function t3(x, y) {
    return x * y;
};

function fort3() {
    document.querySelector('#out-2').textContent = t3(1654, 26);
    return t3(23424, 34);
}

function fort31() {
    document.querySelector('#out-3').textContent = t3(45354, 23);
    return t3(32421, 65);
}
