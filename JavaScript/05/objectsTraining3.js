'use strict'

/* let user = {
    name: 'John',
    go: function() {
        alert(this.name)
    }
};

(user.go)(); */

/* function makeUser() {
    return {
        name: 'John',
        ref() {
            return this;
        }
    };
};

let user = makeUser();
console.log(user);
alert( user.ref().name ); */

/* let calculator = {
    read() {
        let a, b;
        a = prompt('Enter first value','');
            a = parseInt(a);
        b = prompt('Enter second value','');
            b = parseInt(b);

        this.a = a;
        this.b = b;
         for (let key in calculator) {
            console.log (calculator[key]);
        }
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

/* let ladder = {
    step: 0,
    up(x) {
        for (let i = 1; i <= x; i++) {
            this.step++;
        }
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
    }
};

ladder
    .up(5)
    .down()
    .up(5)
    .up(5)
    .up(5)
    .down()
    .showStep();
 */

    