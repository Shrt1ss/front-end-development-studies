"use strict";

/* const buttonR = document.querySelector('#button');
const input = document.querySelector('#input');
const checkBoxF = document.querySelector('#one');
const checkBoxS = document.querySelector('#two');
const checkBoxT = document.querySelector('#three');
const checkBoxL = document.querySelector('#four');
const buttonC = document.querySelector('#myCheck');

input.oninput = () => {
    let save = input.value;
    console.log(save);
    let result = document.querySelector('span');
    result.innerHTML = save;
}

button.onclick = () => {
    let color = input.value;
    console.log(input.value);
    button1.style.backgroundColor = color;
}

buttonC.onclick = () => {
    let check = document.querySelector('#one');
    if (checkBoxF.checked) {
        console.log(check.value);
        console.log(checkBoxF.checked);
    }
} */

/* const buttonF = document.querySelector('#taskNum');
const buttonS = document.querySelector('#numTask');
const report = document.querySelector('#secondEx');
const check = document.querySelector('#check');

buttonF.onclick = () => {
    let taskNum = 'First exercise';
    alert(taskNum);
}

buttonS.onclick = () => {
    let result = 'Your exercise number - two';
    buttonS.value = result;
    report.innerHTML = buttonS.value;
}

check.onclick = () => {
    alert('Your task numer is three!');
} */

const nickName = document.querySelector('#nickname');
const password = document.querySelector('#password');
const passCheck = document.querySelector('#check');
const maleCheck = document.querySelector('#male');
const femaleCheck = document.querySelector('#female')
const nickColor = document.querySelector('#color');
const confirm = document.querySelector('#click');

nickName.oninput = () => {
    let input = nickName.value;
    console.log(input);
}


password.oninput = () => {
    let passIn = password.value;
    console.log(passIn);
}

passCheck.oninput = () => {
    let passConf = passCheck.value;
    console.log(passConf);
}

maleCheck.onclick = () => {
    let male = maleCheck.checked;
    if (male) {
        console.log(`You're a man!`);
    }
    else if (!male) {
        console.log(`Select your sex!`);
    }
}

femaleCheck.onclick = () => {
    let female = femaleCheck.checked;
    if (female) {
        console.log(`You're a woman!`);
    }
    else if (!female) {
        console.log(`Select your sex!`);
    }
}

nickColor.oninput = () => {
    let color = nickColor.value;
    document.querySelector('#example').style.backgroundColor = color;
}

confirm.onclick = (event) => {
    event.preventDefault();
    function UserData(name) {
        this.name = name;
        this.nickname = nickName.value;
        this.password = password.value;
        this.sex = {
            male: maleCheck.checked,
            female: femaleCheck.checked,
        };
        this.color = nickColor.value;
    }
    let user = new UserData("first");
    console.log("******USER******")
    console.log(user.name);
    console.log(user.nickname);
    console.log(user.password);
    console.log(user.sex.male);
    console.log(user.color);
}
