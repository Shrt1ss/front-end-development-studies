"use strict"

function sum(){
	let num1, num2, result;

	num1 = document.getElementById('number1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('number2').value;
	num2 = parseInt(num2);

	result = num1 + num2;

	document.getElementById('res').innerHTML = result;
}

function difference(){
	let num1, num2, result;

	num1 = document.getElementById('number1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('number2').value;
	num2 = parseInt(num2);

	result = num1 - num2;

	document.getElementById('res').innerHTML = result;
}

function multiplication(){
	let num1, num2, result;

	num1 = document.getElementById('number1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('number2').value;
	num2 = parseInt(num2);

	result = num1 * num2;

	document.getElementById('res').innerHTML = result;
}

function division(){
	let num1, num2, result;

	num1 = document.getElementById('number1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('number2').value;
	num2 = parseInt(num2);

	result = num1 / num2;

	document.getElementById('res').innerHTML = result;
}



