document.addEventListener('DOMContentLoaded', () => {

    /* let a = 5;
    a = a * 2;

    try {
        document.querySelector('.test').innerHTML = a;
    }
    catch (err) {
        console.log('Block works');
        console.log(err);
    }
    finally {
        console.log('Programm works');
    }

    console.log(a);
    t1();

    function t1() {
        console.log('Give me my work');
    } */

    const phantom = document.querySelector('.phantom');

    let testVar = 'Hello, I`m not going to work';

    function error() {
        phantom.innerHTML = testVar;
        console.log('Errors were not found!');
    };

    try {
        error();
    }
    catch (err) {
        //const outPlace = document.querySelector('.phantom-1');
        //const outPlace2 = document.querySelector('.place-for-out-2');
        const fix = document.createElement('div');

        //console.log(`I caught an error: ---${err}---`);
        //outPlace.innerHTML = 'I`m working!';
        fix.classList.add('phantom');
        fix.innerHTML = testVar;
        document.querySelector('.container').appendChild(fix);
        //outPlace2.innerHTML = testVar;
        console.log('Element was added successfully!');
        console.log(`It's error: ${err}`);

    }
    /* finally {
        console.log('I managed to work!');
    } */

    /* console.log(`I can't work because of error :(`);
    console.log('Please, fix me'); */
});