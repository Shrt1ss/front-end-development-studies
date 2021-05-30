document.addEventListener('DOMContentLoaded', () => {

    let count = 0;

    document.querySelector('.local-storage-changing').onclick = () => {
        count++;
        localStorage.setItem('test', count);
    };

});