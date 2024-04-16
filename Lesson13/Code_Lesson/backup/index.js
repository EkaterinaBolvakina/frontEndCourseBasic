const firstNumInput = document.getElementById('firstNumInput');
const secondNumInput = document.getElementById('secondNumInput');

// переменная знака действия ( + - * / )
let sign = null;

// подписка на событие клик кнопки '='
const resultBtn = document.getElementById('result');
resultBtn.addEventListener('click', () => {
    const firstNum = parseInt(firstNumInput.value);
    const secondNum = parseInt(secondNumInput.value);

    const res = calculate(firstNum, secondNum, sign);
    console.log(res);
    firstNumInput.value = '';
    secondNumInput.value = '';
    sign = null;
});



// подписка на событие клик всех кнопок цифр
const numberButtons = document.getElementsByClassName('num');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {
        if (!sign) {
            firstNumInput.value += e.target.innerText;
        } else {
            secondNumInput.value += e.target.innerText;
        }

    });
}

// подписка на событик клик всех кнопок действий ( + - * / )
const signButtons = document.getElementsByClassName('sign');
for (let i = 0; i < signButtons.length; i++) {
    signButtons[i].addEventListener('click', (e) => {
        sign = e.target.innerText;
    });
}

// функция посчитать
const calculate = (a, b, sign) => {
    switch (sign) {
        case '+':
            return a + b;
        case '*':
            return a * b;

        default:
            break;
    }
}

// const res = calculate(1, 2, '+');
// console.log(res);