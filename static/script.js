const number = document.getElementById('number');
const number2 = document.getElementById('number2');

const result = document.getElementById('result');

const updateResult = () => {
    const ans = +number.value + +number2.value; 
    result.textContent = ans;
}

number.addEventListener('change', updateResult);

number2.addEventListener('change', updateResult);