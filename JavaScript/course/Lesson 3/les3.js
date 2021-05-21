"use strict";

/* const input = document.querySelector('.age');
const button = document.querySelector('#confirm');

button.onclick = () => {
    let ageCheck = +input.value;
    if (ageCheck >= 18 && ageCheck < 60) {
        alert('Access is allowed!');
    }
    else if (ageCheck >= 60) {
        alert('Nice age, man!');
    }
    else {
        alert('Access denied!');
    }
} */


/* const input = document.querySelector('.check');
const button = document.querySelector('#confirm');
const output = document.querySelector('#out');

button.onclick = () => {
    let check = +input.value;
    if (check == 4) {
        output.innerHTML = 'TRUE';
        console.log('TRUE');
    }
    else {
        console.log('FALSE');
        output.innerHTML = 'FALSE';
    }
} */
/*
const firstValue = document.querySelector('#firstVal');
const secondValue = document.querySelector('#secondVal');
const button = document.querySelector('#confirm');
const output = document.querySelector('#output');

button.onclick = () => {
    let firstCom = +firstValue.value;
    let secondCom = +secondValue.value;

    if (firstCom > secondCom) {
        console.log(`${firstCom} is higher!`);
        output.innerHTML = `${firstCom} is higher!`;
    }
    else if (secondCom > firstCom) {
        console.log(`${secondCom} is higher!`);
        output.innerHTML = `${secondCom} is higher!`;
    }
} */

const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');
const button = document.querySelector('button');
const output = document.querySelector('#out');

button.onclick = () => {
    let fVal = +firstNum.value, sVal = +secondNum.value;
    if (fVal > sVal) {
        console.log(`${fVal} is higher!`);
        output.innerHTML = `${fVal} is higher!`;
    }
    else if (sVal > fVal) {
        console.log(`${sVal} is higher!`);
        output.innerHTML = `${sVal} is higher!`
    }
    else if (sVal == fVal) {
        console.log(`You entered similar numbers!`);
        output.innerHTML = `You entered similar numbers!`;
    }
    else {
        console.log('Ooops, it seems you entered incorrect value!');
        output.innerHTML = 'Ooops, it seems you entered incorrect value!';
    }
}
