"use strict"

let message;
let age = prompt("Enter any number","");

if(!(age > 14 && age < 90)){
	message = "You guessed!";
}
else{
	message = "Try again!";
};
 alert(message);


