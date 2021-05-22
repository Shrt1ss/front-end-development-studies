document.addEventListener('DOMContentLoaded', () => {

    /* let testArr = [1, 5, 2];
    const paragraphs = document.getElementsByTagName('p');
    const queryParagraphs = document.querySelectorAll('p');
    /* console.log(testArr);
    console.log(paragraphs); */

    /* for (let i = 0; i < paragraphs.length; i++) {
        console.log(paragraphs[i]);
    }; */

    /* for (let elem in paragraphs) {
        console.log(paragraphs[elem]);
    }; */

    /* for (let elem of paragraphs) {
        console.log(elem);
    }; */

    /* for (let i = 0; i < queryParagraphs.length; i++) {
        console.log(queryParagraphs[i]);
    }; */

    /* for (let key in queryParagraphs) {
        console.log(key);
    }; */

    const sortButton = document.querySelector('.sort-button');
    const outPlace = document.querySelector('.array-out-place');
    const outButton = document.querySelector('.sort-button-task-2');
    const newButton = document.querySelector('.new-button');
    const newOut = document.getElementsByClassName('new-place-for-out');

    sortButton.addEventListener('click', () => {
        let taskArray = [2, 20, 305];
        let out = '';

        for (let i = 0; i < taskArray.length; i++) {
            console.log(taskArray[i]);

            out += `${taskArray[i]} `;

            outPlace.textContent = out;

        };
    });

    outButton.addEventListener('click', () => {

        let outArray = ['Hello', 'Nice to meet you', 'See you soon'];
        let out = '';

        for (let index in outArray) {
            console.log(outArray[index]);
            out += `[${index}] is '${outArray[index]}'<br>`;
        };

        outPlace.innerHTML = out;

    });

    newButton.addEventListener('click', () => {
        for (let elem of newOut) {
            console.log(elem);
            elem.innerHTML = "<strong>3</strong>";
        };
    });
});