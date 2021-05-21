"use strict"

let login = prompt('Enter your login to continue','');


if(login == 'Admin'){
	let password;
	password = prompt("Enter your password",'');
	if(password == "I'm a boss"){
		alert('Welcome to the system!');
	}
	else if(password == '' || password == null){
		alert('Canceled!');
	}
	else{
		alert('Access denied!');
	}
}
else if(login == '' || login == null){
	alert('Canceled!');
}
else{
	alert('User not found!');
}