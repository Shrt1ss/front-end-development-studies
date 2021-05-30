document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('storage', function (e) {
        console.log('change');
    });
    /* localStorage.setItem('data', 'USER NUMBER 1');
    console.log(localStorage.getItem('data')); */

    const testData = [3, 4, 5];

    localStorage.setItem('test', JSON.stringify(testData));

    let b = localStorage.getItem('test');
    b = JSON.parse(b);
    //let split = b.split(',');

    console.log(b);
    console.log(b[0]);
    //console.log(typeof split);
    console.log(typeof b);


    const secondData = {
        hello: 5,
        k: 2,
        4: 'hi',
    };

    localStorage.setItem('test2', JSON.stringify(secondData));

    let d = localStorage.getItem('test');
    d = JSON.parse(d);

    console.log(d);
    console.log(d[0]);
    console.log(typeof d);
});