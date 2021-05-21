"use strict";

function duplicateCount(text) {

	let changeReg = text.toLowerCase();
	console.log(changeReg);

	changeReg = changeReg.split('');
	console.log(changeReg);

	let count = [], lettersStorage = [];

	for (let i = 0; i < changeReg.length; i++) {
		for (let k = (i + 1); k < changeReg.length; k++) {
			if (changeReg[i] == changeReg[k]) {
				lettersStorage.push(changeReg[k]);
				//count++;
				break;
			};
		};
	};

	for (let i = 0; i < lettersStorage.length; i++) {
		for (let j = (i + 1); j < lettersStorage.length; j++) {
			if (lettersStorage[i] == lettersStorage[j]) {
				count[i] += j;
				break;
			}
		};
	};

	console.log(count);
	console.log(lettersStorage);


};

duplicateCount('KJKSJJJSDCk');