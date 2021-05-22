document.addEventListener('DOMContentLoaded', () => {

    /* let testArr = [1337, 228, 1441, 1990, -3, -47, 21, 22, 35, 48];
    let mapVar = testArr.map(function (item, index, array) {
        console.log(item);
        let multiply = item * 5;
        return multiply;
    });
    console.log(mapVar);
    let filterVar = testArr.filter(function (item, index, array) {
        if (item % 2 == 0) {
            return true;
        };
    });

    console.log(filterVar); */
    const outButton = document.querySelector('.out-button');
    const outButton2 = document.querySelector('.out-button-2');
    const outPlace = document.querySelector('.place-for-out');

    let homeworkArray1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11, 27, 28, 23, 27];
    let resArray = homeworkArray1.map((item, index) => {
        return item * 2;
    });

    console.log(resArray);

    outButton.addEventListener('click', () => {
        let homeworkArray2 = [234, -323, 0, 0, 245, -54, -89];
        let resArray2 = homeworkArray2.map((item, index) => item ** 2);
        outPlace.innerHTML = resArray;
        console.log(resArray2);
    });

    outButton2.addEventListener('click', () => {
        let homeworkArray3 = ['45', 67, '89', 90, 23, '345', 67, 87, 'Hello', 'My name is filter function', 'And I`m working properly'];
        let resArray3 = homeworkArray3.filter((item, index) => {
            if (typeof (item) === "number") {
                return true;
            };
        });
        console.log(resArray3);
    });
});