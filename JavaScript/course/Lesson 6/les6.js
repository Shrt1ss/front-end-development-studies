"use strict";
/*
const out = document.querySelector('#out');
let output = '';

document.querySelector('#click0').onclick = () => {

    for (let i = 1; i <= 3; i++) {
        for (let k = 1; k <= 3; k++) {
            output += '*'
        }
        output += '_';
    };

    out.innerHTML = output;
    output = '';
};

document.querySelector('#click1').onclick = () => {

    for (let i = 1; i <= 3; i++) {
        output += `${i}<br>`;
        for (let k = 1; k <= 3; k++) {
            output += `*_`;
            if (k == 3) {
                output += '<br>'
            }
        };
    };

    out.innerHTML = output;
    output = '';
};

document.querySelector('#click2').onclick = () => {

    for (let i = 1; i <= 4; i++) {
        for (let k = 1; k <= 3; k++) {
            output += `*_`;
        };
        output += `<br>`;
    };

    out.innerHTML = output;
    output = '';
}; */


const div = document.querySelector('#result');
let output = '';

document.querySelector('#show0').onclick = () => {
    for (let i = 1; i <= 10; i++) {
        output += `<br><b>Multiplication by ${i}</b><br><br>`;
        for (let k = 1; k <= 10; k++) {
            output += `${i} * ${k} = ${i * k}<br>`;
        };
        output += `<hr>`
    };

    console.log(output);
    document.querySelector('#result').innerHTML = output;
    output = '';
};

document.querySelector('#show1').onclick = () => {
    for (let i = 1; i <= 3; i++) {
        for (let k = 1; k <= 5; k++) {
            output += `*`;
        };
        output += `<br>`;
    };

    console.log(output);
    document.querySelector('#result').innerHTML = output;
    output = '';
};

document.querySelector('#show2').onclick = () => {
    for (let i = 0; i <= 5; i++) {
        for (let k = 0; k <= 5; k++) {
            if (i < k) {
                output += '*';
            };
        };
        output += `<br>`;
    };
    console.log(output);
    document.querySelector('#result').innerHTML = output;
    output = '';
};