// Funktion aufrufen, um das Inputfeld zu füllen und Eventlistener hinzuzufügen, und das Ergebnis in der Variable abspeichern
const filledFieldInput = fillFieldInput(document.getElementById('fieldInput'));

function fillFieldInput(fieldInput) {
    addTabToInputField(fieldInput);
    return fieldInput;
}

function addTabToInputField(fieldInput) {
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', (e) => {
            fieldInput.value += e.target.innerText;
            scrollToBottom(fieldInput); // Scrollen zum Ende des Textes
        });
    }
}

function scrollToBottom(fieldInput) {
    fieldInput.scrollLeft = fieldInput.scrollWidth;
}

createResult(filledFieldInput);

function createResult(filledFieldInput) {
    // Eventlistener für die Gleichheits-Taste (=)
    const equalButton = document.getElementById('res');
    equalButton.addEventListener('click', () => {

        const expression = filledFieldInput.value;
        if (expression) {
            try {
                const result = evaluateExpression(expression);
                filledFieldInput.value = '= ' + result;
                filledFieldInput.classList.add('showResult'); // Füge die Klasse "showRes" hinzu
            } catch (error) {
                filledFieldInput.value = 'Error';
            }
        } else {
            filledFieldInput.value = '';
        }
    });
}

const clearBtn = document.getElementById('ac');
clearBtn.addEventListener('click', () => {
    clearInput(filledFieldInput);
})

function clearInput(fieldInput) {
    fieldInput.value = '';
    fieldInput.classList.remove('showResult'); // Entferne die Klasse "showRes" beim Löschen
}

function evaluateExpression(expression) {
    const tokens = tokenize(expression);     // hier stellt tokens die Infix-Notation dar (z.B. "3 + 4 * 5")
    const postfix = infixToPostfix(tokens);  // hier wird zu Postfix-Notation umgewandelt (z.B. "3 4 5 * +")
    const result = evaluatePostfix(postfix);
    return result;
}

function tokenize(expression) {
    // Füge das Leerzeichen um die Klammern hinzu, damit sie als separate Tokens behandelt werden
    expression = expression.replace(/([()+*/%-])/g, ' $1 ');
    // Entferne die überflüssige Leerzeichen und teile den Ausdruck in Tokens auf
    return expression.trim().split(/\s+/);
}

function infixToPostfix(tokens) {
    const precedence = {  //Die precedence-Map definiert die Priorität der Operatoren in einem arithmetischen Ausdruck. 
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '(': 0, // Klammern haben die niedrigste Priorität
    };
    const stack = [];
    const postfix = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (!isNaN(token) || token === '.') {
            postfix.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix.push(stack.pop());
            }
            stack.pop(); // Entferne das offene Klammernpaar
        } else { // Operatoren
            while (stack.length && precedence[token] <= precedence[stack[stack.length - 1]]) {
                postfix.push(stack.pop());
            }
            stack.push(token);
        }
    }

    while (stack.length) {
        postfix.push(stack.pop());
    }

    return postfix;
}

function evaluatePostfix(postfix) {
    const stack = [];

    for (let i = 0; i < postfix.length; i++) {
        const token = postfix[i];

        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();

            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
            
                default:
                    throw new Error('Invalid operator');
            }
        }
    }

    return stack.pop();
}