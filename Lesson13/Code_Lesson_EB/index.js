
const firstNumInput = document.getElementById('firstNum');
const secondNumInput = document.getElementById('secondNum');

let sign = null;

// подписка на событие кнопок цифр
const numButtons = document.getElementsByClassName('num');
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', (e) => {

        if (!sign) {
            firstNumInput.value += e.target.innerText;
        } else {
            secondNumInput.value += e.target.innerText;
        }
    });
}

// подписка на событие математических знаков
const signButtons = document.getElementsByClassName('sign');
for (let i = 0; i < signButtons.length; i++) {
    signButtons[i].addEventListener('click', (e) => {
        sign = e.target.innerText;
    });
}

// подписка события кнопки равно
const resBtn = document.getElementById('res');
resBtn.addEventListener('click', () => {
    const firstVal = parseInt(firstNumInput.value);
    const secondVal = parseInt(secondNumInput.value);
    
    const res = calculate(firstVal, secondVal, sign);
    console.log(res);
    const resultParagraph = document.getElementById('resultId');
    resultParagraph.innerText = res;

    clearInput(firstNumInput,secondNumInput);
    sign = clearSign(sign);
});

const clearBtn = document.getElementById('ac');
clearBtn.addEventListener('click', () => {
    clearInput(firstNumInput,secondNumInput);
    sign = clearSign(sign);
    clearResult();
})

function clearInput(firstNumInput,secondNumInput) {
    firstNumInput.value = '';
    secondNumInput.value = '';
}

function clearSign(sign) {
    return null;
}

function clearResult() {
    document.getElementById('resultId').innerText = '';
}

const calculate = (a, b, sign) => {
    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Do not divide by 0'
            } else {
                return a / b;
            }
            
        default:
            break;
    }
}
