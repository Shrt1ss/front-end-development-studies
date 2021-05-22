"use strict";

/* let one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '30px';

one.classList.add('two', 'three', 'four');
one.classList.remove('four');

const button = document.querySelector('.toggle');

button.onclick = function () {
    this.classList.toggle('three');
}

console.log(one.getAttribute('data'));
console.log(document.querySelectorAll('p')[2].getAttribute('data')); */

/* let gas = document.querySelectorAll('.gas');
let quantity = document.querySelector('input');


for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let volume = +document.querySelector('input').value;
        let check = gas[i].getAttribute('data-price');
        let price = volume * check;
        console.log(price);
    };
};
 */

const changeSize = document.querySelector('#change');
const classAdd = document.querySelector('#add');
const classRemove = document.querySelector('#remove');

/* changeSize.onclick = () => {
    let outBlock = document.querySelector('.paste');
    let block = document.createElement('p');
    block.innerHTML = 'TEXT FOR CHANGING STYLE';
    block.classList.add('add');
    outBlock.appendChild(block);

} */

changeSize.onclick = () => {
    let outPlace = document.querySelector('#outPlace');
    outPlace.style.width = '200px';
    outPlace.style.height = '40px';
    outPlace.style.backgroundColor = 'cyan';
}

classAdd.onclick = () => {
    let outPlace = document.querySelector('#outPlace');
    outPlace.classList.toggle('add');
}

classRemove.onclick = () => {
    let outPlace = document.querySelector('#outPlace');
    outPlace.classList.remove('add');
}