document.addEventListener('DOMContentLoaded', () => {
    /* let inputPlace = document.querySelector('.first-input');
    inputPlace.onkeypress = (event) => {
        console.log('Press');
        console.log(`Element's char code: ${event.charCode}`);
        console.log(`Element's code: ${event.code}`);
        console.log(`Key: ${event.key}`);
        console.log(`Element's char code: ${event.keyCode}`);
        console.log(event);
    };

    inputPlace.onkeydown = (event) => {
        console.log('DOWN');
        console.log(`Element's char code: ${event.charCode}`);
        console.log(`Element's code: ${event.code}`);
        console.log(`Key: ${event.key}`);
        console.log(`Element's char code: ${event.keyCode}`);
        console.log(event); 
    };

    inputPlace.onkeyup = (event) => {
        console.log('UP');

    }; */

    const inputPlace1 = document.querySelector('.input-place-1');
    const inputPlace2 = document.querySelector('.input-place-2');
    const inputPlace3 = document.querySelector('.input-place-3');

    const outPlace = document.querySelector('.place-for-out');

    inputPlace1.oninput = (event) => {

        let str = '';

        str += inputPlace1.value;
        outPlace.innerHTML = str;

        return str;
    };

    inputPlace2.onkeypress = (event) => {

        outPlace.innerHTML = event.keyCode;
        inputPlace2.value = event.key;

        return false;
    };

    inputPlace3.onkeypress = (event) => {

        if (event.keyCode >= 48 && event.keyCode <= 57) {
            outPlace.innerHTML = 'FALSE';
        } else {
            outPlace.innerHTML = 'TRUE';
        };

        inputPlace3.value = event.key;

        return false;
    };
});