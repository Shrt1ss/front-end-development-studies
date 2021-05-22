document.addEventListener('DOMContentLoaded', () => {
    /* let testStr = 'Hi, my name is split';
    console.log(testStr.split(' ')); */

    /* let testArray = [1, 2, 3, 4, 5];
    console.log(testArray.join(' ')); */

    /* let testArray = [5, 5, 5, -2, -4, 0, -78];
    testArray.forEach((elem, index) => {
        console.log(elem);
        console.log(index);
        console.log('------');
    }); */
    const outButton1 = document.querySelector('.button-for-out-1');
    const outPlace = document.querySelector('.place-for-out');

    let homeworkArray1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
    let storageArray1 = [];

    outButton1.addEventListener('click', () => {
        homeworkArray1.forEach((elem, index) => {
            storageArray1[index] = elem ** 2;
        });
        outPlace.innerHTML = storageArray1;
        console.log(storageArray1);
    });

    const outButton2 = document.querySelector('.button-for-out-2');

    let homeworkArray2 = [-2, -5, -6, -7, -3, 10, 23, 98, 12];
    let storageArray2 = [];

    outButton2.addEventListener('click', () => {
        homeworkArray2.forEach((elem, index) => {
            storageArray2[index] = elem / 2;
        });
        outPlace.innerHTML = storageArray2;
        console.log(storageArray2);
    });

    const outButton3 = document.querySelector('.button-for-out-3');

    let homeworkArray3 = [2, "hello", 3, "hi", 4, "Mazai", '32', '2019', 'First love'];
    let storageArray3 = [];

    outButton3.addEventListener('click', () => {
        homeworkArray3.forEach((elem, index) => {
            if (typeof (elem) == "string") {
                storageArray3.push(elem);
            };
        });
        outPlace.innerHTML = storageArray3;
        console.log(storageArray3);
    });
});