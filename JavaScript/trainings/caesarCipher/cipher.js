"use strict";

const input = document.querySelector('#in');

input.oninput = () => {
    const OFFSET = 3;
    let backUp = input.value, showStr = document.querySelector('#show'), output = '';

    showStr.innerHTML = backUp;

    for (let i = 0; i < backUp.length; i++) {
        let code = backUp.charCodeAt(i); //get i-element UTF-16 code
        //console.log(backUp.charCodeAt(i));
        code += OFFSET;
        output += String.fromCharCode(code);
    }

    document.querySelector('#out').innerHTML = output; //UTF-16 (get element by its UTF-16 code) */
}