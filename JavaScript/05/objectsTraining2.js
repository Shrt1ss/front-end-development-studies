'use strict'

let menu = {
    width: parseInt(prompt("Enter room's width", '400')),
    height: parseInt(prompt("Enter room's height", '600')),
    title: prompt("Enter room's name", 'Hall')
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == "number") {
            obj[key] *= 2;
        }
        else return false;
    }
}

multiplyNumeric(menu);

for (let key in menu) {
    console.log(menu[key]);
}


