'use strict'

let schedule = {
    getUp: "8:30",
    meal: "9:00",
    studies: '11:30 - 17:20'
};

for (let key in schedule) {
    console.log(key + ':',schedule[key]);
}

for (let key in schedule) {
    delete schedule[key];
    console.log(schedule[key]);
}

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

alert(isEmpty(schedule));