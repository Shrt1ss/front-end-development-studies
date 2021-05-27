document.addEventListener('DOMContentLoaded', () => {
    /* document.querySelector('.block-1').addEventListener('touchstart', myTouch);
    document.querySelector('.block-1').addEventListener('touchend', myTouchEnd);
    document.querySelector('.block-2').addEventListener('touchmove', myTouchMove);

    function myTouch(event) {
        console.log(event);
        console.log('Touch');
        document.querySelector('.out-2').innerHTML = event.touches.length;
        document.querySelector('.out-1').innerHTML += 'work ';
    };

    function myTouchEnd(event) {
        document.querySelector('.out-3').innerHTML += `End of touch `;
    };

    function myTouchMove(event) {
        event.preventDefault();
        document.querySelector('.out-3').innerHTML += `Move `;
        return false;
    }; */
    const block1 = document.querySelector('.task-1');
    const block2 = document.querySelector('.task-2');
    const placeForOut = document.querySelector('.place-for-out');
    const placeForOut2 = document.querySelector('.place-for-out-2');
    const blocks3 = document.querySelectorAll('.task-3');

    let countTask1 = 0;
    let countTask2 = 0;

    block1.addEventListener('touchstart', (event) => {
        countTask1++;
        placeForOut.innerHTML = `Touch happened(${countTask1})!`;
        countTask2 = 0;
    });

    block2.addEventListener('touchstart', (event) => {
        countTask2++;
        placeForOut.innerHTML = `${countTask2} click(s)`;
        countTask1 = 0;
    });

    blocks3.forEach((block, index) => {
        block.addEventListener('touchstart', (event) => {
            placeForOut2.innerHTML = `Click happened at block ${index + 1}`;
        });
    });

});