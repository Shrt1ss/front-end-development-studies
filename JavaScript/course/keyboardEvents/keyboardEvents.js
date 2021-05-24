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

    const inputPlace = document.querySelector('.input-place');
    const outPlace = document.querySelector('.place-for-out');

    inputPlace.oninput = (event) => {
        /* console.log(event.key);
        out.push(event.key);
        let str = out.join(''); */
        let str = '';
        str += inputPlace.value;
        outPlace.innerHTML = str;
        return str;
    };
});