"use strict"

document.getElementById('sum').onclick = sum;
document.getElementById('dif').onclick = difference;
document.getElementById('div').onclick = division;
document.getElementById('multi').onclick = multiplication;
document.getElementById('pow').onclick = pow;

function sum() {

    let first, second, sum; 

    first = document.getElementById('fir').value;
    first = parseInt(first);

    second = document.getElementById('sec').value;
    second = parseInt(second);

    sum = first + second;

    document.getElementById('result').innerHTML = sum;
}

function difference() {

    let first, second, dif; 

    first = document.getElementById('fir').value;
    first = parseInt(first);

    second = document.getElementById('sec').value;
    second = parseInt(second);

    dif = first - second;
    
    document.getElementById('result').innerHTML = dif;
}

function multiplication() {

    let first, second, multi; 

    first = document.getElementById('fir').value;
    first = parseInt(first);

    second = document.getElementById('sec').value;
    second = parseInt(second);

    multi = first * second;
    
    document.getElementById('result').innerHTML = multi;
}

function division() {

    let first, second, div; 

    first = document.getElementById('fir').value;
    first = parseInt(first);

    second = document.getElementById('sec').value;
    second = parseInt(second);

    div = first / second;
    
    document.getElementById('result').innerHTML = div;
}

function pow() {

    let first, second, pow;

    first = document.getElementById('fir').value;
        first = parseInt(first);

    second = document.getElementById('sec').value;
        second = parseInt(second);

    pow = first ** second;

    document.getElementById('result').innerHTML = pow;
}