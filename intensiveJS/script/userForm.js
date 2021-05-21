const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);
            callBack(response.id);
        } else {
            falseCallBack(request.responseText);
            throw new Error(request.statusText);
        }
    });

    request.send(data);
};

const dataTest = {
    name: 'Dmitry',
    phone: '+228',
};

sendData(JSON.stringify(dataTest), (data) => {
    alert(data);
    console.log(data);
}, (err) => {
    alert(`Error: ${err}`)
});