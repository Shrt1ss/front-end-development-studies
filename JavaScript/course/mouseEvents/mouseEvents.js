document.addEventListener('DOMContentLoaded', () => {

    /* const activeElems = document.querySelectorAll('.block');
    const progressButton = document.querySelector('button');

    let progress = 0;

    progressButton.addEventListener('click', () => {
        progress += 10;
        document.querySelector('progress').value = progress;

    });

    activeElems.forEach((elem) => {
        let width = 100;
        elem.onmousemove = () => {
            elem.style.width = `${width}px`
            width++;
        };

        elem.oncontextmenu = () => {
            return false;
        };

        elem.onmouseenter = () => {
            elem.style.backgroundColor = 'cyan';
        };

        elem.onmouseleave = () => {
            elem.style.backgroundColor = '';
            width = 100;
            elem.style.width = `${width}px`;
        };

        elem.onmousedown = () => {
            elem.style.backgroundColor = 'red';
        };
    }); */

    const textBlock1 = document.querySelector('.block');
    const textBlock2 = document.querySelector('.block-for-second-task');
    const textBlock3 = document.querySelector('.block-for-third-task');
    const outPlace = document.querySelector('.place-for-out');

    textBlock1.addEventListener('click', (event) => {
        textBlock1.value = 'Hello world';
        console.log(textBlock1.value);
        outPlace.innerHTML = textBlock1.value;
    });

    textBlock2.addEventListener('click', (event) => {
        console.log(event.altKey);
        if (event.altKey == false) {
            outPlace.innerHTML = 'FALSE';
        } else {
            outPlace.innerHTML = 'TRUE';
        };
    });

    let w = 100;

    textBlock3.addEventListener('click', (event) => {
        textBlock3.style.width = `${w}px`;
        w += 5;
        outPlace.innerHTML = `${w}`;
    });
});