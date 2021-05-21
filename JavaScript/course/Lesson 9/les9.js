"use strict";

/* const outButton = document.querySelector('#outButton');
const outPlace = document.querySelector('#outPlace');

outButton.onclick = () => {
    let newPageElement = document.createElement('div');
    let placeForOut = document.querySelectorAll('.out')[1].appendChild(newPageElement);
    let array = ['Dmitry', true, 18];
    let str = '';

    for (let i = 0; i < array.length; i++) {
        str += array[i] + '<br>';
    };

    placeForOut.innerHTML = str;
    str = '';
};


outButton.onclick = () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 0];
    outPlace.textContent = array.length;
};  */

const b1 = document.querySelector('#b-1');
const b2 = document.querySelector('#b-2');
const b3 = document.querySelector('#b-3');
const i1 = document.querySelector('#i-1');
const out1 = document.querySelector('#out-1')
let d1 = [33, 'best', 66, 'best'];

b1.onclick = () => {

    let storage = i1.value;

    if (i1.value == '') {
        out1.innerHTML = `You haven't entered any value to add!`;
        return;
    }
    else {
        d1[d1.length] = storage;
    }

    showArr();
}

function showArr() {

    let str = ' ';

    for (let i = 0; i < d1.length; i++) {
        if (d1[i] == parseInt(d1[i])) {
            d1[i] = parseInt(d1[i]);
        }
        //d1[i];
        str += `${d1[i]}<br>`;
    }

    out1.innerHTML = str;
    console.log(d1);

    return d1;
}

b2.onclick = () => {

    d1.pop();

    showArr();

}

b3.onclick = () => {

    d1.shift();

    showArr();

}


