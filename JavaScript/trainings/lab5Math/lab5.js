"use strict";

const button = document.querySelector('button');

button.onclick = () => {

    var getA = document.querySelector('#aInput'),
        getB = document.querySelector('#bInput'),
        getE = document.querySelector('#eInput'),
        a = parseInt(getA.value),
        b = parseInt(getB.value),
        e = Math.abs(parseFloat(getE.value)),
        resOut = document.querySelector('#out'),
        fa = f(a), c = 0, fc = 0,
        A = a, B = b;

    //Задаем уравнение для поиска его корней на отрезке [a, b];   
    function f(x) {
        return parseFloat((x ** 3) - (6 * (x ** 2)) + (3 * x) + 11);
    }

    function check(n) {
        if (n < 0) {
            n = -1.0;
        }
        if (n > 0) {
            n = 1.0;
        }
        return n;
    }

    function findRoot() {
        if ((b - a) > e) {
            c = (a + b) / 2;
            fc = f(c);
            if (check(fc) * check(fa) <= 0.0) {
                b = c;
            } else {
                a = c;
                fa = fc;
            }
            //Итерации повторяются до тех пор, пока условие if((b - a) > e) истинно
            findRoot();
        }
    }
    findRoot();
    resOut.textContent = `Искомый корень уравнения  на отрезке [${A}, ${B}] равен: ${c}`;
}