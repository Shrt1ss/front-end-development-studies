document.addEventListener('DOMContentLoaded', () => {
    /* let testSet = new Set();
 
     testSet.add(1);
     testSet.add(2);
     testSet.add('Hello');
     testSet.add('1');
     //testSet.clear();
     //testSet.delete('Hello');
 
     console.log(testSet.has('2'));
     console.log(testSet);
     console.log(testSet.size);
 
     for (let elem of testSet) {
         console.log(elem);
     };
 
     let setForTransform = new Set();
     let arrayForTakingValues = [];
 
     setForTransform.add('Dmitry');
     setForTransform.add('Rubenkov');
     setForTransform.add('25.05.2002');
     setForTransform.add('Happy together');
 
     arrayForTakingValues = Array.from(setForTransform);
     console.log(arrayForTakingValues);
 
     for (let elem of arrayForTakingValues) {
         console.log(elem);
     }; */

    /* let firstSet = new Set();

    firstSet.add('h');
    firstSet.add('e');
    firstSet.add('l');
    firstSet.add('l');
    firstSet.add('o');

    console.log(firstSet); */

    const sendButton = document.querySelector('.send-input');
    const inputWindow = document.querySelector('.set-input');
    const clearButton = document.querySelector('.clear-set');
    const deleteButton = document.querySelector('.delete-set-element');

    var storage;
    var setForInput = new Set();

    sendButton.addEventListener('click', () => {

        storage = inputWindow.value;
        setForInput.add(storage);
        console.log(setForInput);

        let temp = inputWindow.value;
        let caps = temp.toUpperCase();

        console.log(`Element *${caps}* was added to the set!`);
    });

    clearButton.addEventListener('click', () => {
        setForInput.clear();
        console.log(setForInput);
        console.log(`Set was cleared!`);
    });

    deleteButton.addEventListener('click', () => {
        setForInput.delete(inputWindow.value);
        console.log(setForInput);

        let temp = inputWindow.value;
        let caps = temp.toUpperCase();

        console.log(`Element *${caps}* was deleted from the set!`);
    });
});