document.addEventListener('DOMContentLoaded', () => {

    /* window.addEventListener('storage', function (e) {
        let count = localStorage.getItem('test');
        console.log('change');
        document.querySelector('.out').textContent = count;
    }); */
    /* localStorage.setItem('data', 'USER NUMBER 1');
    console.log(localStorage.getItem('data')); */

    /* const testData = [3, 4, 5];

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
    console.log(typeof d); */

    document.querySelectorAll('.local-storage-changing').forEach((elem, index) => {
        elem.addEventListener('click', (event) => {

            if (index === 0) {

                localStorage.clear();
                localStorage.setItem('5', 11);

                let check = JSON.parse(localStorage.getItem('5'));
                console.log(typeof check);
            }
            else if (index === 1) {
                localStorage.clear();
                localStorage.setItem('array', JSON.stringify([7, 6, 9, 8]));

                var parse = localStorage.getItem('array');
                parse = JSON.parse(parse);

                console.log(parse);
                console.log(typeof parse);
            }
            else if (index === 2) {

                let str = '';
                let helpArr = [];
                console.log(typeof localStorage.getItem('array'));

                helpArr = localStorage.getItem('array').split('');
                helpArr.shift();
                helpArr.pop();

                let join = helpArr.join('');
                join = join.split(',');

                document.querySelector('.description').innerHTML = `${str}`;

                for (let item of join) {
                    str += `array: ${item}<br>`;
                    console.log('str: ', str);
                };

                document.querySelector('.out').innerHTML = str;

            };
        });
    });
});