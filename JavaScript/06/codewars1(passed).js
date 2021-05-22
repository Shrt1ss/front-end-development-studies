"use strict"

function descendingOrder(n){
  
    let convertation = n.toString(), united, saveI, saveJ;
      let splitted = convertation.split('');
  
    for(let i = 0; i < splitted.length; i++) {
        for(let j = (i + 1); j < splitted.length; j++) {
            if(splitted[i] < splitted[j]) {
                saveI = splitted[i];
                saveJ = splitted[j];
                    splitted[i] = saveJ;
                    splitted[j] = saveI;
            };
        };
    };
  
    united = splitted.join('');
      united = Number(united);
        n = united;

    return n;
};

console.log ( descendingOrder(100023234) );