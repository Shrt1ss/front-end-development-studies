"use strict";

/* const test = document.querySelectorAll('.one');
console.log(test);
const tes = document.getElementsByClassName('one');
const te = document.getElementsByTagName('div');
const button = document.querySelector('button');

button.onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}


for (let i = 0; i < test.length; i++) {
    console.log(test[i]);
    test[i].style.background = 'cyan';
    test[i].onclick = testFunc;
}

function testFunc() {
    console.log('Your click works properly');
}

console.log('*******************');
console.log(tes);
console.log(te);

for (let i = 0; i < tes.length; i++) {
    console.log(tes[i]);
    tes[i].style.border = '3px solid black';
}
 */

const out = document.querySelector('#output');
const button = document.querySelector('button');


button.onclick = () => {
    let result = '';
    let space = ' ';

    for (let i = 1; i < 51; i++) {
        result += (i + space);
    }
    out.innerHTML = result;
}

document.querySelector('#task2').onclick = () => {
    let result = '';
    let space = ' ';

    for (let i = 2; i < 123; i = (i + 2)) {
        result += (i + space);
    }
    out.innerHTML = result;
}

document.querySelector('#task3').onclick = () => {
    let result = '';
    let space = ' ';

    for (let i = 25; i > 6; i--) {
        result += (i + space);
    }
    out.innerHTML = result;
}
