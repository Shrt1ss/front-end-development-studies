"use strict"

let calculator = {
    sum() {
        let a, b, result;

        a = document.getElementById('fir').value;
            a = +a;
        b = document.getElementById('sec').value;
            b = +b;

        this.sumA = a;
        this.sumB = b;

        result = this.sumA + this.sumB;

        document.getElementById('result').innerHTML = result;

    },
    dif() {
        let a, b, result;

        a = document.getElementById('fir').value;
            a = +a;
        b = document.getElementById('sec').value;
            b = +b;

        this.difA = a;
        this.difB = b;

        result = this.difA - this.difB;

        document.getElementById('result').innerHTML = result;
        
    },
    div() {
        let a, b, result;

        a = document.getElementById('fir').value;
            a = +a;
        b = document.getElementById('sec').value;
            b = +b;

        this.divA = a;
        this.divB = b;

        result = this.divA / this.divB;

        document.getElementById('result').innerHTML = result;
    },
    mul() {
        let a, b, result;

        a = document.getElementById('fir').value;
            a = +a;
        b = document.getElementById('sec').value;
            b = +b;

        this.mulA = a;
        this.mulB = b;

        result = this.mulA * this.mulB;

        document.getElementById('result').innerHTML = result;
    },
    pow() {
        let a, b, result;

        a = document.getElementById('fir').value;
            a = +a;
        b = document.getElementById('sec').value;
            b = +b;

        this.powA = a;
        this.powB = b;

        result = this.powA ** this.powB;
        document.getElementById('result').innerHTML = result;
    }
}

document.getElementById('sum').onclick = calculator.sum;
document.getElementById('dif').onclick = calculator.dif;
document.getElementById('div').onclick = calculator.div;
document.getElementById('multi').onclick = calculator.mul;
document.getElementById('pow').onclick = calculator.pow;


