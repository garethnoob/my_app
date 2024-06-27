const test = document.getElementById('test');

test.addEventListener('click', () => {
    test.textContent = 'you have clicked me';
});

const hello = document.getElementById('hello');

hello.addEventListener('click', () => {
    test.textContent = 'hello';
});